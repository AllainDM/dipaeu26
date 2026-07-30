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


def parse_resources(val: str):
    """Парсит строку ресурсов на постройку вида '5 Древесины, 3 Камня'.
    Возвращает {'display': val, 'items': [...]} или None."""
    if val is None or val.strip() in ('', '—', '–', '-', '−'):
        return None
    s = val.strip()
    parts = [p.strip() for p in s.split(',')]
    items = []
    for part in parts:
        m = re.match(r'(\d+(?:\.\d+)?)\s+(.+)', part)
        if m:
            items.append({'count': float(m.group(1)), 'resource': m.group(2).strip()})
    if not items:
        return {'display': s, 'items': []}
    return {'display': s, 'items': items}


def to_display(val):
    if val is None:
        return ''
    return str(val).strip()


def xlsx_to_js(xlsx_path: str, js_path: str):
    wb = openpyxl.load_workbook(xlsx_path)
    ws = wb.active

    rows = list(ws.iter_rows(min_row=2, values_only=True))

    # Столбцы xlsx:
    # 0: Группа, 1: Категория, 2: Постройка, 3: Локация, 4: Ресурс локации,
    # 5: Климат, 6: Рельеф/Геогр. условия, 7: Доп. условия, 8: Входные ресурсы,
    # 9: База пр-ва, 10: Бонусы, 11: Доход, 12: Цена, 13: Примечания, 14: Ресурсы на постройку

    buildings = []
    first_of_group = {}

    COL_CLIMATE = 5
    COL_TERRAIN = 6
    COL_CONDITIONS = 7
    COL_INPUT = 8
    COL_BASE = 9
    COL_BONUSES = 10
    COL_INCOME = 11
    COL_COST = 12
    COL_NOTES = 13
    COL_RESOURCES = 14

    for row in rows:
        raw = [to_display(c) for c in row]
        if len(raw) < 13:
            continue
        if all(v == '' for v in raw):
            continue

        group = raw[0]          # колонка 0 = Группа
        cat = raw[1]            # колонка 1 = Категория
        name = raw[2]           # колонка 2 = Постройка
        if not name:
            continue

        income_raw = raw[COL_INCOME]
        cost_raw = raw[COL_COST]
        notes_raw = raw[COL_NOTES] if len(raw) > COL_NOTES else ''
        resources_raw = raw[COL_RESOURCES] if len(raw) > COL_RESOURCES else ''

        income_base, income_max = parse_income(income_raw)
        cost_num, _ = parse_income(cost_raw)
        resources_obj = parse_resources(resources_raw)

        # Наследование общих полей от первой строки группы
        if group:
            if group not in first_of_group:
                first_of_group[group] = {
                    'location': raw[3],
                    'input': raw[COL_INPUT],
                    'bonuses': raw[COL_BONUSES],
                    'income': {'base': income_base, 'max': income_max, 'display': income_raw},
                    'cost': {'numeric': cost_num, 'display': cost_raw},
                    'notes': notes_raw,
                    'resources': resources_obj,
                }
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

        final_notes = notes_raw
        if inherit_from and (not notes_raw or notes_raw in ('', '—')):
            final_notes = inherit_from.get('notes', '')

        final_resources = resources_obj
        if inherit_from and resources_obj is None:
            final_resources = inherit_from.get('resources')

        final_bonuses = pick(raw[COL_BONUSES], inherit_from['bonuses'] if inherit_from else None)
        final_location = pick(raw[3], inherit_from['location'] if inherit_from else None)
        final_input = pick(raw[COL_INPUT], inherit_from['input'] if inherit_from else None)

        cost_resources = final_resources['display'] if final_resources else None

        obj = {
            'name': name,
            'category': cat,
            'group': group,
            'location': final_location,
            'resource': raw[4],
            'climate': raw[COL_CLIMATE],
            'terrain': raw[COL_TERRAIN],
            'conditions': raw[COL_CONDITIONS],
            'input': final_input,
            'base': raw[COL_BASE],
            'bonuses': final_bonuses,
            'notes': final_notes,
            'cost': {
                'numeric': cost_num,
                'display': final_cost,
                'resources': cost_resources,
            },
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
    { key: 'resource',  label: 'Ресурс',    sortable: true },
    { key: 'location',  label: 'Локация',   sortable: true },
    { key: 'climate',   label: 'Климат',    sortable: true },
    { key: 'terrain',   label: 'Рельеф',    sortable: true },
    { key: 'conditions',label: 'Условия',   sortable: true },
    { key: 'input',     label: 'Усл. работы', sortable: true },
    { key: 'base',      label: 'База',      sortable: true },
    { key: 'bonuses',   label: 'Инновации/традиции', sortable: true },
    { key: 'notes',     label: 'Прим.',     sortable: false },
];

let activeCategories = new Set(Object.keys(CATEGORIES));
let searchQuery = '';
let sortKey = null;
let sortAsc = true;

// ── helpers ──

function cellVal(b, key) {
    if (key === 'catEmoji') return CATEGORIES[b.category]?.emoji || '';
    if (key === 'name') return b.name;
    if (key === 'cost') {
        let s = b.cost.display || '—';
        if (b.cost.resources) {
            s += ' + ' + b.cost.resources;
        }
        return s;
    }
    if (key === 'income') {
        const d = b.income.display;
        return d || '—';
    }
    if (key === 'notes') return b.notes || '—';
    return b[key] || '—';
}

function cellTitle(b, key) {
    if (key === 'catEmoji') return CATEGORIES[b.category]?.label || b.category;
    return cellVal(b, key);
}

function htmlAttr(s) {
    return s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
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
    if (key === 'cost') return 'cell-cost ' + costColor(b);
    if (key === 'income') return 'cell-income ' + incomeColor(b);
    if (key === 'resource') return 'cell-resource cell-clamp';
    if (key === 'conditions') return 'cell-conditions cell-clamp';
    if (key === 'bonuses') return 'cell-bonuses cell-clamp';
    if (key === 'notes') return 'cell-notes cell-clamp';
    if (['climate', 'terrain', 'input', 'base'].includes(key)) return 'cell-clamp';
    return '';
}

function getSortVal(b, key) {
    if (key === 'catEmoji') return b.category;
    if (key === 'cost') return b.cost.numeric ?? 0;
    if (key === 'income') return b.income.max ?? b.income.base ?? 0;
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
const COMMON_COLS = new Set(['catEmoji', 'name', 'location', 'input', 'income', 'cost']);

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
    let groupIdx = 0;
    for (const grp of groups) {
        const size = grp.length;
        const isGrp = size > 1 && grp[0].group;
        const zebraClass = groupIdx % 2 === 1 ? ' group-zebra' : '';

        for (let i = 0; i < size; i++) {
            const b = grp[i];
            rows += `<tr${zebraClass}>`;
            for (const col of COLUMNS) {
                if (isGrp && COMMON_COLS.has(col.key)) {
                    if (i === 0) {
                        const title = cellTitle(b, col.key);
                        const val = cellVal(b, col.key);
                        const isEmpty = val === '—' || val === '';
                        let cls = cellClass(b, col.key) + (isEmpty ? ' val-empty' : '');
                        const content = cls.includes('cell-clamp') ? `<div class="clamp-inner">${htmlAttr(val)}</div>` : val;
                        rows += `<td class="${cls}" rowspan="${size}" title="${htmlAttr(title)}">${content}</td>`;
                    }
                } else {
                    const title = cellTitle(b, col.key);
                    const val = cellVal(b, col.key);
                    const isEmpty = val === '—' || val === '';
                    let cls = cellClass(b, col.key) + (isEmpty ? ' val-empty' : '');
                    const content = cls.includes('cell-clamp') ? `<div class="clamp-inner">${htmlAttr(val)}</div>` : val;
                    rows += `<td class="${cls}" title="${htmlAttr(title)}">${content}</td>`;
                }
            }
            rows += '</tr>';
        }
        groupIdx++;
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

function setupCellClick() {
    document.getElementById('buildings-tbody').addEventListener('click', e => {
        const td = e.target.closest('td.cell-clamp');
        if (td) {
            td.classList.toggle('expanded');
        }
    });
}

function init() {
    setupCategoryFilters();
    setupSearch();
    setupSort();
    setupCellClick();
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
