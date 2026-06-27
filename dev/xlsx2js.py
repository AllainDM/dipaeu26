#!/usr/bin/env python3
"""Конвертирует dev/buildings.xlsx → buildings.js (данные + интерактивная логика)."""

import json
import re
from pathlib import Path

try:
    import openpyxl
except ImportError:
    print("Установи openpyxl: pip install openpyxl")
    exit(1)


def parse_income(val: str):
    """Парсит доход: возвращает (base, max).
    base — первое число в строке (базовый доход).
    max — сумма всех положительных чисел вне скобок (максимум с бонусами).
    Для спецформул (%, Размер Города, ранг, у принимающей) max=None."""
    if val is None or val.strip() in ('', '—', '–', '-', '−'):
        return None, None
    s = val.strip().replace(',', '.')
    try:
        v = float(s)
        return v, v
    except ValueError:
        pass
    if '%' in s:
        return None, None
    if any(x in s for x in ['Размер Города', 'у принимающей', 'х ранг']):
        m = re.search(r'-?\d+(?:\.\d+)?', s)
        if m:
            return float(m.group()), None
        return None, None
    multiplier = 1
    mult_m = re.search(r'[хx×](\d+(?:\.\d+)?)\s*$', s)
    if mult_m:
        multiplier = float(mult_m.group(1))
        s = s[:mult_m.start()]
    s_clean = re.sub(r'\([^)]*\)', '', s)
    nums = [float(x) for x in re.findall(r'-?\d+(?:\.\d+)?', s_clean)]
    if not nums:
        return None, None
    base = nums[0]
    max_val = sum(n for n in nums if n >= 0) * multiplier
    return base, max_val


def to_display(val):
    if val is None:
        return ''
    return str(val).strip()


def xlsx_to_js(xlsx_path: str, js_path: str):
    wb = openpyxl.load_workbook(xlsx_path)
    ws = wb.active

    rows = list(ws.iter_rows(min_row=2, values_only=True))

    buildings = []
    first_of_group = {}

    for row in rows:
        raw = [to_display(c) for c in row]
        if len(raw) < 12:
            continue
        if all(v == '' for v in raw):
            continue

        group = raw[0]          # колонка 0 = Группа
        cat = raw[1]            # колонка 1 = Категория
        name = raw[2]           # колонка 2 = Постройка
        if not name:
            continue

        income_raw = raw[10]    # колонка 10 = Доход
        cost_raw = raw[11]      # колонка 11 = Цена

        income_base, income_max = parse_income(income_raw)
        cost_num, _ = parse_income(cost_raw)

        # Наследование общих полей от первой строки группы
        if group:
            if group not in first_of_group:
                first_of_group[group] = {
                    'location': raw[3],
                    'input': raw[7],
                    'income': {'base': income_base, 'max': income_max, 'display': income_raw},
                    'cost': {'numeric': cost_num, 'display': cost_raw},
                }
                # Первая строка — полные данные
                inherit_from = None
            else:
                inherit_from = first_of_group[group]
        else:
            inherit_from = None

        def pick(val, inherited):
            if val and val != '—':
                return val
            return inherited if inherited else val

        def pick_income(current, inherited):
            if current['display'] and current['display'] not in ('', '—'):
                return current
            return inherited if inherited else current

        def pick_cost(current, inherited):
            if current['display'] and current['display'] not in ('', '—'):
                return current
            return inherited if inherited else current

        final_income = income_raw
        if inherit_from and (not income_raw or income_raw in ('', '—')):
            final_income = inherit_from['income']['display']
            income_base, income_max = inherit_from['income']['base'], inherit_from['income']['max']

        final_cost = cost_raw
        if inherit_from and (not cost_raw or cost_raw in ('', '—')):
            final_cost = inherit_from['cost']['display']
            cost_num = inherit_from['cost']['numeric']

        obj = {
            'name': name,
            'category': cat,
            'group': group,
            'location': raw[3] if raw[3] else (inherit_from['location'] if inherit_from else ''),
            'resource': raw[4],
            'climate': raw[5],
            'conditions': raw[6],
            'input': raw[7] if raw[7] else (inherit_from['input'] if inherit_from else ''),
            'base': raw[8],
            'bonuses': raw[9],
            'cost': {'numeric': cost_num, 'display': final_cost},
            'income': {'base': income_base, 'max': income_max, 'display': final_income},
        }
        buildings.append(obj)

    # ── Данные ──
    lines = [
        '// auto-generated from dev/buildings.xlsx — не редактировать вручную',
        'const BUILDINGS = ' + json.dumps(buildings, ensure_ascii=False, indent=2) + ';',
        '',
        'const CATEGORIES = {',
    ]
    cat_config = {
        'с/х':          {'emoji': '🌾', 'label': 'Сельское хозяйство'},
        'админ':        {'emoji': '🏛️', 'label': 'Администрация'},
        'добыча':       {'emoji': '⛏️', 'label': 'Добыча'},
        'ремесло':      {'emoji': '🔨', 'label': 'Ремесло'},
        'торговля':     {'emoji': '🏪', 'label': 'Торговля'},
        'культура и наука': {'emoji': '📚', 'label': 'Культура и наука'},
        'инфраструктура': {'emoji': '🏗️', 'label': 'Инфраструктура'},
        'религия':      {'emoji': '⛪', 'label': 'Религия'},
        'военные':      {'emoji': '⚔️', 'label': 'Военные'},
    }
    for i, (key, val) in enumerate(cat_config.items()):
        comma = ',' if i < len(cat_config) - 1 else ''
        lines.append(f"    '{key}': {json.dumps(val, ensure_ascii=False)}{comma}")

    lines.append('};')

    # ── Интерактивная логика ──
    logic = """

const COLUMNS = [
    { key: 'catEmoji',  label: '',         sortable: false },
    { key: 'name',      label: 'Постройка', sortable: true },
    { key: 'cost',      label: '💰 Цена',   sortable: true },
    { key: 'income',    label: '📈 Доход',  sortable: true },
    { key: 'location',  label: 'Локация',   sortable: true },
    { key: 'resource',  label: 'Ресурс',    sortable: true },
    { key: 'climate',   label: 'Климат/рельеф', sortable: true },
    { key: 'input',     label: 'Входные',   sortable: true },
    { key: 'base',      label: 'База пр-ва',  sortable: true },
    { key: 'conditions',label: 'Доп. условия', sortable: true },
    { key: 'bonuses',   label: 'Бонусы',     sortable: true },
];

let activeCategories = new Set(Object.keys(CATEGORIES));
let searchQuery = '';
let sortKey = null;
let sortAsc = true;

// ── helpers ──

function cellVal(b, key) {
    if (key === 'catEmoji') return (CATEGORIES[b.category]?.emoji || '') + ' ' + b.category;
    if (key === 'name') return b.name;
    if (key === 'cost') return b.cost.display || '—';
    if (key === 'income') {
        const d = b.income.display;
        return d || '—';
    }
    return b[key] || '—';
}

function incomeColor(b) {
    const n = b.income.max ?? b.income.base;
    if (n === null || n === 0) return '';
    if (n < 0) return 'income-negative';
    if (n <= 2) return 'income-low';
    if (n <= 4) return 'income-mid';
    if (n <= 7) return 'income-high';
    return 'income-very-high';
}

function costColor(b) {
    const n = b.cost.numeric;
    if (n === null) return '';
    if (n <= 15) return 'cost-cheap';
    if (n < 40) return 'cost-mid';
    return 'cost-expensive';
}

function cellClass(b, key) {
    if (key === 'catEmoji') return 'cat-emoji-cell';
    if (key === 'name') return 'name-cell';
    if (key === 'cost') return 'num-nowrap ' + costColor(b);
    if (key === 'income') return 'num-nowrap ' + incomeColor(b);
    return '';
}

function getSortVal(b, key) {
    if (key === 'catEmoji') return b.category;
    if (key === 'cost') return b.cost.numeric ?? 0;
    if (key === 'income') return b.income.base ?? 0;
    const v = cellVal(b, key);
    return typeof v === 'string' ? v.toLowerCase() : v;
}

function filteredData() {
    let list = BUILDINGS.filter(b => activeCategories.has(b.category));
    if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const matched = new Array(list.length).fill(false);
        for (let i = 0; i < list.length; i++) {
            if (list[i].name.toLowerCase().includes(q)) {
                matched[i] = true;
            }
        }
        // Показываем всю группу, если найден хотя бы один её член
        for (let i = 0; i < list.length; i++) {
            if (matched[i] && list[i].group) {
                for (let j = 0; j < list.length; j++) {
                    if (list[j].group === list[i].group) {
                        matched[j] = true;
                    }
                }
            }
        }
        list = list.filter((_, i) => matched[i]);
    }
    if (sortKey) {
        list.sort((a, b) => {
            const va = getSortVal(a, sortKey);
            const vb = getSortVal(b, sortKey);
            let cmp = 0;
            if (typeof va === 'number' && typeof vb === 'number') {
                cmp = va - vb;
            } else {
                cmp = String(va).localeCompare(String(vb));
            }
            return sortAsc ? cmp : -cmp;
        });
    }
    return list;
}

// ── Группировка для рендеринга ──

// Колонки, которые отображаются с rowspan для первой строки группы
const COMMON_COLS = new Set(['catEmoji', 'location', 'input', 'income', 'cost']);

function render() {
    const data = filteredData();
    const thead = document.getElementById('buildings-thead');
    const tbody = document.getElementById('buildings-tbody');

    let hRow = '<tr>';
    for (const col of COLUMNS) {
        let arrow = col.key === sortKey ? (sortAsc ? ' ▲' : ' ▼') : '';
        const sAttr = col.sortable ? ` class="sortable" data-sort="${col.key}"` : '';
        hRow += `<th${sAttr}>${col.label}<span class="sort-arrow">${arrow}</span></th>`;
    }
    hRow += '</tr>';
    thead.innerHTML = hRow;

    // Группируем последовательные строки с одинаковым group
    const groups = [];
    let cur = null;
    for (const b of data) {
        if (b.group && cur && cur[0].group === b.group) {
            cur.push(b);
        } else {
            if (cur) groups.push(cur);
            cur = [b];
        }
    }
    if (cur) groups.push(cur);

    let rows = '';
    for (const grp of groups) {
        const size = grp.length;
        const isGrp = size > 1 && grp[0].group;

        for (let i = 0; i < size; i++) {
            const b = grp[i];
            rows += '<tr>';
            for (const col of COLUMNS) {
                if (isGrp && COMMON_COLS.has(col.key)) {
                    if (i === 0) {
                        const val = cellVal(b, col.key);
                        const cls = cellClass(b, col.key);
                        rows += `<td class="${cls}" rowspan="${size}">${val}</td>`;
                    }
                    // остальные строки — пропускаем ячейку
                } else {
                    const val = cellVal(b, col.key);
                    const cls = cellClass(b, col.key);
                    rows += `<td class="${cls}">${val}</td>`;
                }
            }
            rows += '</tr>';
        }
    }
    tbody.innerHTML = rows;

    document.getElementById('result-count').textContent =
        `Показано ${data.length} из ${BUILDINGS.length}`;
}

// ── setup ──

function setupCategoryFilters() {
    const container = document.getElementById('category-filters');
    let html = '';
    for (const key of Object.keys(CATEGORIES)) {
        const cat = CATEGORIES[key];
        const checked = activeCategories.has(key);
        html += `<button class="cat-btn${checked ? ' active' : ''}" data-cat="${key}">${cat.emoji} ${cat.label}</button>`;
    }
    container.innerHTML = html;

    container.addEventListener('click', e => {
        const btn = e.target.closest('.cat-btn');
        if (!btn) return;
        const key = btn.dataset.cat;
        if (activeCategories.has(key)) {
            if (activeCategories.size === 1) return;
            activeCategories.delete(key);
            btn.classList.remove('active');
        } else {
            activeCategories.add(key);
            btn.classList.add('active');
        }
        render();
    });
}

function setupSearch() {
    const input = document.getElementById('search-input');
    input.addEventListener('input', () => {
        searchQuery = input.value.trim();
        sortKey = null;
        sortAsc = true;
        render();
    });
}

function setupSort() {
    document.getElementById('buildings-thead').addEventListener('click', e => {
        const th = e.target.closest('th.sortable');
        if (!th) return;
        const key = th.dataset.sort;
        sortKey = (sortKey === key && sortAsc) ? key : key;
        sortAsc = sortKey === key ? !sortAsc : true;
        render();
    });
}

function init() {
    setupCategoryFilters();
    setupSearch();
    setupSort();
    render();
    console.log(`Постройки: загружено ${BUILDINGS.length}`);
}

document.addEventListener('DOMContentLoaded', init);
"""

    lines.append(logic)
    js_content = '\n'.join(lines)

    Path(js_path).write_text(js_content, encoding='utf-8')
    print(f"Сгенерировано {len(buildings)} построек → {js_path}")


if __name__ == '__main__':
    xlsx_to_js('dev/buildings.xlsx', 'buildings.js')
