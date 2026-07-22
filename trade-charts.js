// Общие функции для графиков торговли.
// Используется страницами: trade-price, trade-count, trade-combined,
// trade-all-tc-price, trade-all-tc-count.

const TRADE_PALETTE = [
    '#e41a1c', '#377eb8', '#4daf4a', '#984ea3',
    '#ff7f00', '#a65628', '#f781bf', '#666666',
    '#1b9e77', '#7570b3', '#e7298a', '#66a61e'
];

// «Красивые» засечки оси: min/max расширяются до круглых значений
function tradeNiceTicks(min, max, approx) {
    if (max === min) {
        const v = min || 1;
        return { min: 0, max: v * 2, step: v, ticks: [0, v, v * 2] };
    }
    const range = max - min;
    const roughStep = range / approx;
    const mag = Math.pow(10, Math.floor(Math.log10(roughStep)));
    const norm = roughStep / mag;
    let step;
    if (norm <= 1.5) step = mag;
    else if (norm <= 3.5) step = 2 * mag;
    else if (norm <= 7.5) step = 5 * mag;
    else step = 10 * mag;
    const niceMin = Math.floor(min / step) * step;
    const niceMax = Math.ceil(max / step) * step;
    const ticks = [];
    for (let v = niceMin; v <= niceMax + step * 0.00001; v = Math.round((v + step) * 100000) / 100000) {
        ticks.push(v);
    }
    return { min: niceMin, max: niceMax, step, ticks };
}

// Границы по набору серий: series — массив массивов точек {turn, val}
function tradeGetBounds(series) {
    let minTurn = Infinity, maxTurn = -Infinity;
    let minVal = Infinity, maxVal = -Infinity;
    series.forEach(s => {
        s.forEach(p => {
            if (p.turn < minTurn) minTurn = p.turn;
            if (p.turn > maxTurn) maxTurn = p.turn;
            if (p.val < minVal) minVal = p.val;
            if (p.val > maxVal) maxVal = p.val;
        });
    });
    if (minVal === maxVal) { maxVal += 1; minVal = Math.max(0, minVal - 0.5); }
    const n = tradeNiceTicks(minVal, maxVal, 5);
    return { minTurn, maxTurn, minVal: n.min, maxVal: n.max, ticks: n.ticks };
}

// Фильтр диапазона ходов: два селекта «С хода» / «По ход».
// Добавляет их в container, при изменении вызывает onChange.
// Возвращает { from(), to() } — границы диапазона (числа).
function tradeBuildRangeFilter(container, turns, onChange) {
    const fromLabel = document.createElement('label');
    fromLabel.textContent = 'С хода: ';
    const fromSelect = document.createElement('select');
    const toLabel = document.createElement('label');
    toLabel.textContent = 'По ход: ';
    const toSelect = document.createElement('select');
    turns.forEach(t => {
        const o1 = document.createElement('option');
        o1.value = t;
        o1.textContent = t;
        fromSelect.appendChild(o1);
        const o2 = document.createElement('option');
        o2.value = t;
        o2.textContent = t;
        toSelect.appendChild(o2);
    });
    fromSelect.value = turns[0];
    toSelect.value = turns[turns.length - 1];
    function changed() {
        // не даём выбрать перевёрнутый диапазон
        if (parseInt(fromSelect.value) > parseInt(toSelect.value)) {
            if (this === fromSelect) toSelect.value = fromSelect.value;
            else fromSelect.value = toSelect.value;
        }
        onChange();
    }
    fromSelect.addEventListener('change', changed);
    toSelect.addEventListener('change', changed);
    fromLabel.appendChild(fromSelect);
    toLabel.appendChild(toSelect);
    container.appendChild(fromLabel);
    container.appendChild(toLabel);
    return {
        from: () => parseInt(fromSelect.value),
        to: () => parseInt(toSelect.value)
    };
}

// Кликабельная легенда: клик — вкл/выкл серию, наведение — подсветка.
// names: массив строк; colors: массив цветов; visible: массив bool (мутируется).
// callbacks: { onToggle(), onHighlight(index), onUnhighlight() }
function tradeBuildLegend(container, names, colors, visible, callbacks) {
    container.innerHTML = '';
    names.forEach((name, i) => {
        const item = document.createElement('span');
        item.className = 'legend-item';
        if (!visible[i]) item.classList.add('hidden');
        item.innerHTML = '<span class="legend-color" style="background:' + colors[i] + ';"></span> ' + name;
        item.addEventListener('click', () => {
            visible[i] = !visible[i];
            item.classList.toggle('hidden', !visible[i]);
            if (callbacks.onToggle) callbacks.onToggle();
        });
        item.addEventListener('mouseenter', () => {
            if (callbacks.onHighlight) callbacks.onHighlight(i);
        });
        item.addEventListener('mouseleave', () => {
            if (callbacks.onUnhighlight) callbacks.onUnhighlight();
        });
        container.appendChild(item);
    });
}

// Отрисовка мультилинейного графика.
// entries: [{ color, points: [{turn, val}], visible, highlighted }]
// opts: { pad, formatVal }
// Возвращает { bounds, xPos, yPos, pad, w, h } или null, если нет данных.
function tradeDrawLineChart(ctx, canvas, entries, opts) {
    const pad = (opts && opts.pad) || { top: 30, right: 30, bottom: 45, left: 55 };
    const formatVal = (opts && opts.formatVal) || (v => v.toFixed(1));
    const w = canvas.width - pad.left - pad.right;
    const h = canvas.height - pad.top - pad.bottom;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const visibleSeries = entries
        .filter(e => e.visible !== false && e.points.length > 0)
        .map(e => e.points);
    if (visibleSeries.length === 0) {
        ctx.font = '18px Times New Roman';
        ctx.fillStyle = '#999';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('Нет данных для выбранных параметров', canvas.width / 2, canvas.height / 2);
        return null;
    }

    const bounds = tradeGetBounds(visibleSeries);
    const { minTurn, maxTurn, minVal, maxVal } = bounds;
    const valRange = maxVal - minVal;
    const ticks = bounds.ticks;
    const labelStep = Math.max(1, Math.floor(ticks.length / 6));

    function xPos(turn) {
        return pad.left + (maxTurn === minTurn ? w / 2 : (turn - minTurn) / (maxTurn - minTurn) * w);
    }
    function yPos(val) {
        return pad.top + h - (val - minVal) / valRange * h;
    }

    // сетка
    ctx.strokeStyle = '#f0f0f0';
    ctx.lineWidth = 1;
    for (let i = 0; i < ticks.length; i++) {
        const y = yPos(ticks[i]);
        if (y <= pad.top || y >= pad.top + h) continue;
        ctx.beginPath();
        ctx.moveTo(pad.left, y);
        ctx.lineTo(pad.left + w, y);
        ctx.stroke();
    }

    // оси
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(pad.left, pad.top);
    ctx.lineTo(pad.left, pad.top + h);
    ctx.lineTo(pad.left + w, pad.top + h);
    ctx.stroke();

    // подписи X (ходы)
    ctx.fillStyle = '#333';
    ctx.font = '13px Times New Roman';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    const xStep = Math.max(1, Math.floor((maxTurn - minTurn) / 12));
    for (let t = minTurn; t <= maxTurn; t += xStep) {
        ctx.fillText(String(t), xPos(t), pad.top + h + 5);
    }

    // подписи Y (значения)
    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';
    ctx.font = '12px Times New Roman';
    for (let i = 0; i < ticks.length; i += labelStep) {
        const v = ticks[i];
        const y = yPos(v);
        if (y < pad.top - 4 || y > pad.top + h + 4) continue;
        ctx.fillText(formatVal(v), pad.left - 8, y);
    }

    // линии и точки
    const anyHighlighted = entries.some(e => e.highlighted);
    entries.forEach(e => {
        if (e.visible === false || e.points.length === 0) return;
        const isDimmed = anyHighlighted && !e.highlighted;
        ctx.save();
        ctx.globalAlpha = isDimmed ? 0.2 : 0.85;
        ctx.strokeStyle = e.color;
        ctx.lineWidth = e.highlighted ? 3.5 : 2.5;
        ctx.beginPath();
        e.points.forEach((p, i) => {
            const x = xPos(p.turn);
            const y = yPos(p.val);
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        });
        ctx.stroke();
        e.points.forEach(p => {
            const x = xPos(p.turn);
            const y = yPos(p.val);
            ctx.beginPath();
            ctx.arc(x, y, e.highlighted ? 6 : 4, 0, Math.PI * 2);
            ctx.fillStyle = e.color;
            ctx.fill();
            ctx.strokeStyle = '#fff';
            ctx.lineWidth = 1.5;
            ctx.stroke();
        });
        ctx.restore();
    });

    return { bounds, xPos, yPos, pad, w, h };
}

// Поиск ближайшей к курсору точки (в пределах radius пикселей канвы).
// seriesList: [{ name, color, points, visible, xPos, yPos }]
// Возвращает { series, p, x, y } в координатах канвы или null.
function tradeFindNearestPoint(canvas, e, seriesList, radius) {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const mx = (e.clientX - rect.left) * scaleX;
    const my = (e.clientY - rect.top) * scaleY;
    let best = null;
    let bestDist = radius || 20;
    seriesList.forEach(s => {
        if (s.visible === false) return;
        s.points.forEach(p => {
            const x = s.xPos(p.turn);
            const y = s.yPos(p.val);
            const dist = Math.hypot(x - mx, y - my);
            if (dist < bestDist) {
                bestDist = dist;
                best = { series: s, p: p, x: x, y: y };
            }
        });
    });
    return best;
}

// Показ/скрытие тултипа. hit — результат tradeFindNearestPoint (или null).
function tradeShowTooltip(canvas, tooltipEl, hit, html) {
    if (!hit) {
        tooltipEl.style.display = 'none';
        return;
    }
    const rect = canvas.getBoundingClientRect();
    tooltipEl.innerHTML = html;
    tooltipEl.style.display = 'block';
    const px = hit.x / canvas.width * rect.width;
    const py = hit.y / canvas.height * rect.height;
    // у правого края показываем тултип слева от точки
    if (px > rect.width * 0.75) {
        tooltipEl.style.left = (px - 12) + 'px';
        tooltipEl.style.transform = 'translateX(-100%)';
    } else {
        tooltipEl.style.left = (px + 12) + 'px';
        tooltipEl.style.transform = 'none';
    }
    tooltipEl.style.top = (py - 10) + 'px';
}
