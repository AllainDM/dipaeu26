// Данные и логика подсчёта БО — на основе Kalkulyator_BO-2.xlsx

const TERRAINS = [
    'равнина', 'степь', 'холмы', 'тунда', 'леса',
    'джунгли', 'болота', 'пустыня', 'город'
];

// Порядок юнитов (Excel rows 4-17): БС, Стр, Др, Луч, ЛВ, СВ, ТВ, ВБ, Клуч, КВ, ТК, Арб, Пуш, ММ
// Боевые слоны (БС) не имеют колонки в матрице → их БО=0, но они учитываются в комбо
const UNIT_NAMES = [
    'Боевые слоны', 'Стрелок', 'Драгун', 'Лучник', 'Мечник', 'Копейщик',
    'Латник', 'Верблюдерия', 'Конный лучник', 'Лёгкий конник',
    'Тяжелый конник', 'Арбалетчик', 'Пушка', 'Метат.машина'
];

const UNIT_SHORT = [
    'БС', 'Стр', 'Др', 'Луч', 'ЛВ', 'СВ', 'ТВ', 'ВБ',
    'Клуч', 'КВ', 'ТК', 'Арб', 'Пуш', 'ММ'
];

// Матрица атаки [террейн][юнит].
// Порядок юнитов: БС, Стр, Др, Луч, ЛВ, СВ, ТВ, ВБ, Клуч, КВ, ТК, Арб, Пуш, ММ
// Для БС все значения 0 (нет колонки в Excel)
const ATK_MATRIX = [
    [0, 0,    0.5,  0.5,  0,    0.5,  0,    0,    0.5,  0.5,  1,    0,    0.5,  0   ], // равнина
    [0, 0,    0.5,  0.5,  0,    0,    0,    0.5,  0.5,  1,    1,    0,    0.5,  0   ], // степь
    [0, 0,    0,    0,    0,    0,    0.5,  0,    0,    0,    0,    0,    0,    0.5 ], // холмы
    [0, 0,    0,    0,    0,    0,    0,   -2,   -1,   -1,   -1,    0,    0,   -0.5 ], // тунда
    [0, -0.5, 0,    0,    0.5,  0,    0,   -0.5, -0.5, -0.5, -0.5, -0.5, -1,   -1   ], // леса
    [0, -0.5, 0,    0,    0,    0,    0,   -0.5, -0.5, -0.5, -0.5, -0.5, -1,   -1   ], // джунгли
    [0, 0,    0,    0,    0,    0.5, -1,   -0.5, -1,   -1,   -1,    0,    0,    0   ], // болота
    [0, 0,    0,    0,    0,    0,    0,    1,    0,    0,    0,    0,    0,    0   ], // пустыня
    [0, 0,    0,    0.5,  0.5,  0,   -0.5, -0.5, -0.5, -1,   -1,    0.5,  1,    1   ], // город
];

// Матрица обороны
const DEF_MATRIX = [
    [0, 0,    0.5,  0.5,  0,    1,    0,    0,    0.5, -0.5, -0.5,  0,    0.5,  0   ], // равнина
    [0, 0,    0.5,  0,    0,    0,    0,    0.5,  0.5, -0.5, -0.5,  0,    0.5,  0   ], // степь
    [0, 0,    0,    0.5,  0,    0.5,  0,    0,    0,    0,    0,    0,    0,    0.5 ], // холмы
    [0, 0,    0,    0,    0,    0,    0.5, -2,   -1,   -1,   -1,    0,    0,   -0.5 ], // тунда
    [0, -0.5, 0.5,  0,    0,    0,    0,   -0.5, -1,   -1,   -1,   -0.5, -1,   -1   ], // леса
    [0, -0.5, 0.5,  0.5,  0,    0,    0,   -0.5, -1,   -1,   -1,   -0.5, -1,   -1   ], // джунгли
    [0, 0,    0.5,  0,    0,    0,   -1,   -0.5, -1,   -1,   -1,    0,    0,   -0.5 ], // болота
    [0, 0,    0,    0,    0,    0,    0,    1,    0,   -0.5, -0.5,  0,    0,    0   ], // пустыня
    [0, 0.5,  0.5,  1,   -0.5,  0.5,  0.5, -0.5, -1,   -1.5, -1.5,  0.5,  0,    0   ], // город
];

// Ширина фронта по terrain
const WIDTH_BY_TERRAIN = [10, 10, 5, 5, 4, 4, 3, 7, 0];

// Индексы юнитов для групп (для комбо-бонуса)
// БС(0) не даёт БО, но входит в комбо
// ranged: Стр(1), Др(2), Луч(3), Клуч(8), Арб(11), Пуш(12), ММ(13)
const RANGED_IDX = [1, 2, 3, 8, 11, 12, 13];
// cavalry: БС(0), Др(2), ВБ(7), Клуч(8), КВ(9), ТК(10)
const CAVALRY_IDX = [0, 2, 7, 8, 9, 10];
// infantry: ЛВ(4), СВ(5), ТВ(6)
const INFANTRY_IDX = [4, 5, 6];

// Индексы юнитов, получающих бонус от перка "П"
const PERK_P_IDX = [4, 5, 6]; // Мечник, Копейщик, Латник
// Индексы юнитов, получающих бонус от перка "К"
const PERK_K_IDX = [2, 7, 8, 9, 10]; // Драгун, Верблюдерия, Конный лучник, Лёгкий конник, Тяжелый конник

let state = {
    qty: new Array(14).fill(0),
    baseBO: new Array(14).fill(0),
    terrain: 'равнина',
    mode: 'Атака',       // 'Атака' | 'Оборона'
    skill: 0,
    perk: 'нет',         // 'П' | 'К' | 'Т' | 'А' | 'З' | 'нет'
    citySize: 0,
    widthBonus: 0,
    assault: 'нет',      // 'через реку' | 'десант' | 'нет'
};

function calc() {
    const q = state.qty;
    const tIdx = TERRAINS.indexOf(state.terrain);
    const isAtk = state.mode === 'Атака';
    const matrix = isAtk ? ATK_MATRIX : DEF_MATRIX;

    // 1. БО по каждому юниту
    const unitBO = q.map((qt, i) => {
        let bonus = 0;
        if (state.perk === 'П' && PERK_P_IDX.includes(i)) bonus = 0.1;
        if (state.perk === 'К' && PERK_K_IDX.includes(i)) bonus = 0.1;
        const baseVal = state.baseBO[i] + matrix[tIdx][i] + bonus;
        return {
            name: UNIT_NAMES[i],
            short: UNIT_SHORT[i],
            qty: qt,
            baseBO: state.baseBO[i],
            terrainVal: matrix[tIdx][i],
            perkBonus: bonus,
            val: baseVal,
            total: qt * baseVal,
        };
    });

    // 2. База = сумма БО всех юнитов
    const totalBase = unitBO.reduce((s, u) => s + u.total, 0);

    // 3. Размер армии
    const armySize = q.reduce((s, v) => s + v, 0);

    // 4. Ширина
    let width;
    if (state.terrain === 'город') {
        width = isAtk ? state.citySize * 2 : state.citySize;
    } else {
        width = WIDTH_BY_TERRAIN[tIdx];
    }
    width += state.widthBonus;
    if (state.perk === 'Т') width += 1;

    // 5. Командный бонус (H33)
    let bonus = 0;
    // скилл
    if (state.skill === 0) bonus -= 0.05;
    else bonus += state.skill * 0.05;
    // перк А/З
    if (isAtk && state.perk === 'А') bonus += 0.10;
    if (!isAtk && state.perk === 'З') bonus += 0.10;
    // штраф ширины
    if (armySize > width) bonus -= (armySize - width) * 0.10;
    // комбо
    const totalRanged = RANGED_IDX.reduce((s, i) => s + q[i], 0);
    const totalCavalry = CAVALRY_IDX.reduce((s, i) => s + q[i], 0);
    const totalInfantry = INFANTRY_IDX.reduce((s, i) => s + q[i], 0);
    if (armySize > 0 &&
        totalRanged / armySize > 0.30 &&
        totalCavalry / armySize > 0.30 &&
        totalInfantry / armySize > 0.30) {
        bonus += 0.15;
    }
    // река / десант (только атака)
    if (isAtk) {
        if (state.assault === 'через реку') bonus -= 0.10;
        else if (state.assault === 'десант') {
            if (state.terrain === 'болота' || state.terrain === 'город') bonus -= 0.30;
            else if (['холмы', 'тунда', 'леса', 'джунгли'].includes(state.terrain)) bonus -= 0.20;
            else bonus -= 0.10;
        }
    }

    // 6. Фортификации (только оборона)
    let fort = 0;
    if (!isAtk) {
        if (state.terrain === 'холмы' || state.terrain === 'леса') fort = 1;
        else if (state.terrain === 'джунгли') fort = 2;
        else if (state.terrain === 'болота') fort = 3;
    }

    const totalBO = totalBase * (1 + bonus) + fort;

    return {
        unitBO,
        totalBase: +totalBase.toFixed(2),
        totalBO: +totalBO.toFixed(2),
        bonus: +(bonus * 100).toFixed(1),
        fort,
        armySize,
        width,
        totalRanged,
        totalCavalry,
        totalInfantry,
        pctRanged: armySize > 0 ? +((totalRanged / armySize) * 100).toFixed(1) : 0,
        pctCavalry: armySize > 0 ? +((totalCavalry / armySize) * 100).toFixed(1) : 0,
        pctInfantry: armySize > 0 ? +((totalInfantry / armySize) * 100).toFixed(1) : 0,
        comboActive: armySize > 0 &&
            totalRanged / armySize > 0.30 &&
            totalCavalry / armySize > 0.30 &&
            totalInfantry / armySize > 0.30,
    };
}
