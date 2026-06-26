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


def parse_numeric(val: str):
    """Извлекает первое число из строки. Для '—', '', текста возвращает None."""
    if val is None or val.strip() in ('', '—', '–', '-', '−'):
        return None
    s = val.strip().replace(',', '.')
    try:
        return float(s)
    except ValueError:
        pass
    m = re.search(r'-?\d+(?:\.\d+)?', s)
    if m:
        return float(m.group())
    return None


def to_display(val):
    if val is None:
        return ''
    return str(val).strip()


def xlsx_to_js(xlsx_path: str, js_path: str):
    wb = openpyxl.load_workbook(xlsx_path)
    ws = wb.active

    rows = list(ws.iter_rows(min_row=2, values_only=True))

    buildings = []
    for row in rows:
        raw = [to_display(c) for c in row]
        if len(raw) < 11:
            continue
        if all(v == '' for v in raw):
            continue

        cat = raw[0]
        name = raw[1]
        if not name:
            continue

        income_raw = raw[9]   # колонка 9 = Доход
        cost_raw = raw[10]    # колонка 10 = Цена

        income_num = parse_numeric(income_raw)
        cost_num = parse_numeric(cost_raw)

        obj = {
            'name': name,
            'category': cat,
            'location': raw[2],
            'resource': raw[3],
            'climate': raw[4],
            'conditions': raw[5],
            'input': raw[6],
            'base': raw[7],
            'bonuses': raw[8],
            'cost': {'numeric': cost_num, 'display': cost_raw},
            'income': {'numeric': income_num, 'display': income_raw},
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
    const n = b.income.numeric;
    if (n === null) return '';
    if (n === 0) return '';
    if (n <= 5) return 'income-low';
    if (n <= 35) return 'income-mid';
    return 'income-high';
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
    if (key === 'income') return b.income.numeric ?? 0;
    const v = cellVal(b, key);
    return typeof v === 'string' ? v.toLowerCase() : v;
}

function filteredData() {
    let list = BUILDINGS.filter(b => activeCategories.has(b.category));
    if (searchQuery) {
        const q = searchQuery.toLowerCase();
        list = list.filter(b => b.name.toLowerCase().includes(q));
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

// ── render ──

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

    let rows = '';
    for (const b of data) {
        rows += '<tr>';
        for (const col of COLUMNS) {
            const val = cellVal(b, col.key);
            const cls = cellClass(b, col.key);
            rows += `<td class="${cls}">${val}</td>`;
        }
        rows += '</tr>';
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
