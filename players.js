const playersData = [
    {
        id: 1,
        country: "Владимирское",
        name: "Дмитрий Бусурин",
        link: "https://vk.com/busurinda",
        captured: { gray: 0, ai: 0, players: 0 },
        battles: { win: 1, loss: 0 },
        warsDeclared: { players: 0, ai: 0 },
        warsResult: { win: 0, loss: 0, peace: 0 },
        aiActions: { vassalized: 0, annexed: 0 }
    },
    {
        id: 2,
        country: "Кастилия и Леон",
        name: "Кирилл Кан",
        link: "https://vk.com/id695796902",
        captured: { gray: 0, ai: 0, players: 0 },
        battles: { win: 2, loss: 0 },
        warsDeclared: { players: 1, ai: 0 },
        warsResult: { win: 0, loss: 0, peace: 0 },
        aiActions: { vassalized: 0, annexed: 0 }
    },
    {
        id: 3,
        country: "Сирия",
        name: "Алексей Хавк",
        link: "https://vk.com/hawk021",
        captured: { gray: 0, ai: 0, players: 0 },
        battles: { win: 0, loss: 0 },
        warsDeclared: { players: 0, ai: 0 },
        warsResult: { win: 0, loss: 0, peace: 0 },
        aiActions: { vassalized: 0, annexed: 0 }
    },
    {
        id: 4,
        country: "Альморавиды",
        name: "-",
        link: "",
        captured: { gray: 0, ai: 0, players: 0 },
        battles: { win: 0, loss: 0 },
        warsDeclared: { players: 0, ai: 0 },
        warsResult: { win: 0, loss: 0, peace: 0 },
        aiActions: { vassalized: 0, annexed: 0 }
    },
    {
        id: 5,
        country: "Бавария",
        name: "Томас Ванденберг",
        link: "https://vk.com/id583837594",
        captured: { gray: 0, ai: 0, players: 0 },
        battles: { win: 0, loss: 0 },
        warsDeclared: { players: 0, ai: 0 },
        warsResult: { win: 0, loss: 0, peace: 0 },
        aiActions: { vassalized: 0, annexed: 0 }
    },
    {
        id: 6,
        country: "Норвегия",
        name: "Александр Богданов",
        link: "https://vk.com/id104978",
        captured: { gray: 0, ai: 0, players: 0 },
        battles: { win: 0, loss: 0 },
        warsDeclared: { players: 0, ai: 0 },
        warsResult: { win: 0, loss: 0, peace: 0 },
        aiActions: { vassalized: 0, annexed: 0 }
    },
    {
        id: 7,
        country: "Венеция",
        name: "Дмитрий Попов",
        link: "https://vk.com/dgpopov83",
        captured: { gray: 0, ai: 0, players: 0 },
        battles: { win: 0, loss: 0 },
        warsDeclared: { players: 0, ai: 0 },
        warsResult: { win: 0, loss: 0, peace: 0 },
        aiActions: { vassalized: 0, annexed: 0 }
    },
    {
        id: 8,
        country: "Генуя",
        name: "Алексей Крылов",
        link: "https://vk.com/a.o.krylov",
        captured: { gray: 0, ai: 0, players: 0 },
        battles: { win: 0, loss: 0 },
        warsDeclared: { players: 0, ai: 0 },
        warsResult: { win: 0, loss: 0, peace: 0 },
        aiActions: { vassalized: 0, annexed: 0 }
    },
    {
        id: 9,
        country: "Иерусалимское",
        name: "Артём Чепайкин",
        link: "https://vk.com/id162651189",
        captured: { gray: 0, ai: 0, players: 0 },
        battles: { win: 0, loss: 0 },
        warsDeclared: { players: 0, ai: 0 },
        warsResult: { win: 0, loss: 0, peace: 0 },
        aiActions: { vassalized: 0, annexed: 0 }
    },
    {
        id: 10,
        country: "Сицилийское",
        name: "Леха Болгарцев",
        link: "https://vk.com/id16160888",
        captured: { gray: 0, ai: 0, players: 0 },
        battles: { win: 0, loss: 0 },
        warsDeclared: { players: 0, ai: 0 },
        warsResult: { win: 0, loss: 0, peace: 0 },
        aiActions: { vassalized: 0, annexed: 0 }
    },
    {
        id: 11,
        country: "Арагон",
        name: "Михаил Ладошкин",
        link: "https://vk.com/id1331087",
        captured: { gray: 0, ai: 2, players: 0 },
        battles: { win: 2, loss: 0 },
        warsDeclared: { players: 0, ai: 1 },
        warsResult: { win: 0, loss: 0, peace: 0 },
        aiActions: { vassalized: 0, annexed: 0 }
    },
    {
        id: 12,
        country: "Венгрия",
        name: "Алексей Заворыкин",
        link: "https://vk.com/zavorikin",
        captured: { gray: 0, ai: 0, players: 0 },
        battles: { win: 0, loss: 0 },
        warsDeclared: { players: 0, ai: 0 },
        warsResult: { win: 0, loss: 0, peace: 0 },
        aiActions: { vassalized: 1, annexed: 0 }
    },
    {
        id: 13,
        country: "Брабант",
        name: "Леонид Кукушкин",
        link: "https://vk.com/leonardoangelo",
        captured: { gray: 0, ai: 0, players: 0 },
        battles: { win: 0, loss: 0 },
        warsDeclared: { players: 0, ai: 0 },
        warsResult: { win: 0, loss: 0, peace: 0 },
        aiActions: { vassalized: 0, annexed: 0 }
    },
    {
        id: 14,
        country: "Австрия",
        name: "Ромео",
        link: "https://vk.com/shexpirov",
        captured: { gray: 0, ai: 0, players: 0 },
        battles: { win: 0, loss: 0 },
        warsDeclared: { players: 0, ai: 0 },
        warsResult: { win: 0, loss: 0, peace: 0 },
        aiActions: { vassalized: 0, annexed: 0 }
    },
    {
        id: 15,
        country: "Ганза",
        name: "Иеремия Кай",
        link: "https://vk.com/id501811382",
        captured: { gray: 0, ai: 0, players: 0 },
        battles: { win: 0, loss: 0 },
        warsDeclared: { players: 0, ai: 1 },
        warsResult: { win: 0, loss: 0, peace: 0 },
        aiActions: { vassalized: 0, annexed: 0 }
    },
    {
        id: 16,
        country: "Милан",
        name: "Тимур Михайлов",
        link: "https://vk.com/mitir",
        captured: { gray: 0, ai: 0, players: 0 },
        battles: { win: 0, loss: 0 },
        warsDeclared: { players: 0, ai: 0 },
        warsResult: { win: 0, loss: 0, peace: 0 },
        aiActions: { vassalized: 0, annexed: 0 }
    },
    {
        id: 17,
        country: "Смоленское",
        name: "Григорий Предтеченский",
        link: "https://vk.com/grigj",
        captured: { gray: 0, ai: 0, players: 0 },
        battles: { win: 0, loss: 0 },
        warsDeclared: { players: 0, ai: 0 },
        warsResult: { win: 0, loss: 0, peace: 0 },
        aiActions: { vassalized: 0, annexed: 0 }
    },
    {
        id: 18,
        country: "Византия",
        name: "Артём Смирнов",
        link: "https://vk.com/doomchik",
        captured: { gray: 0, ai: 0, players: 0 },
        battles: { win: 0, loss: 0 },
        warsDeclared: { players: 0, ai: 0 },
        warsResult: { win: 0, loss: 0, peace: 0 },
        aiActions: { vassalized: 0, annexed: 0 }
    },
    {
        id: 19,
        country: "Бургундия",
        name: "Андрей Шило",
        link: "https://vk.com/a.shilo1999",
        captured: { gray: 0, ai: 0, players: 0 },
        battles: { win: 0, loss: 0 },
        warsDeclared: { players: 0, ai: 0 },
        warsResult: { win: 0, loss: 0, peace: 0 },
        aiActions: { vassalized: 0, annexed: 0 }
    },
    {
        id: 20,
        country: "Кордова",
        name: "Даниил Ранье",
        link: "https://vk.com/serinat",
        captured: { gray: 0, ai: 0, players: 0 },
        battles: { win: 0, loss: 2 },
        warsDeclared: { players: 0, ai: 0 },
        warsResult: { win: 0, loss: 0, peace: 0 },
        aiActions: { vassalized: 0, annexed: 0 }
    },
    {
        id: 21,
        country: "Аквитания",
        name: "Никита Козачков",
        link: "https://vk.com/felikco",
        captured: { gray: 0, ai: 0, players: 0 },
        battles: { win: 0, loss: 0 },
        warsDeclared: { players: 0, ai: 0 },
        warsResult: { win: 0, loss: 0, peace: 0 },
        aiActions: { vassalized: 0, annexed: 0 }
    },
    {
        id: 22,
        country: "Сельджуки",
        name: "Игорь Григоренко",
        link: "https://vk.com/id58249",
        captured: { gray: 0, ai: 0, players: 0 },
        battles: { win: 0, loss: 0 },
        warsDeclared: { players: 0, ai: 0 },
        warsResult: { win: 0, loss: 0, peace: 0 },
        aiActions: { vassalized: 0, annexed: 0 }
    },
    {
        id: 23,
        country: "Дания",
        name: "Сергей Курильченко",
        link: "https://vk.com/s.kurilchenko",
        captured: { gray: 0, ai: 0, players: 0 },
        battles: { win: 0, loss: 0 },
        warsDeclared: { players: 0, ai: 0 },
        warsResult: { win: 0, loss: 0, peace: 0 },
        aiActions: { vassalized: 0, annexed: 0 }
    },
    {
        id: 24,
        country: "Саксония",
        name: "Генрих Яковенко",
        link: "https://vk.com/enrikoyakobson",
        captured: { gray: 0, ai: 0, players: 0 },
        battles: { win: 0, loss: 0 },
        warsDeclared: { players: 0, ai: 0 },
        warsResult: { win: 0, loss: 0, peace: 0 },
        aiActions: { vassalized: 0, annexed: 0 }
    },
    {
        id: 25,
        country: "Фатимиды",
        name: "Граф",
        link: "https://vk.com/id630185319",
        captured: { gray: 0, ai: 0, players: 0 },
        battles: { win: 1, loss: 0 },
        warsDeclared: { players: 0, ai: 0 },
        warsResult: { win: 0, loss: 0, peace: 0 },
        aiActions: { vassalized: 0, annexed: 1 }
    },
    {
        id: 26,
        country: "Польша",
        name: "Валентин Федотов",
        link: "https://vk.com/iesxil",
        captured: { gray: 0, ai: 0, players: 0 },
        battles: { win: 0, loss: 0 },
        warsDeclared: { players: 0, ai: 0 },
        warsResult: { win: 0, loss: 0, peace: 0 },
        aiActions: { vassalized: 0, annexed: 0 }
    },
    {
        id: 27,
        country: "Новгород",
        name: "Сергей Куропятников",
        link: "https://vk.com/allain",
        captured: { gray: 0, ai: 0, players: 0 },
        battles: { win: 2, loss: 0 },
        warsDeclared: { players: 0, ai: 0 },
        warsResult: { win: 0, loss: 0, peace: 0 },
        aiActions: { vassalized: 0, annexed: 0 }
    },
    {
        id: 28,
        country: "Киев",
        name: "Александр Горев",
        link: "https://vk.com/id196514776",
        captured: { gray: 0, ai: 0, players: 0 },
        battles: { win: 2, loss: 0 },
        warsDeclared: { players: 0, ai:2 },
        warsResult: { win: 0, loss: 0, peace: 0 },
        aiActions: { vassalized: 0, annexed: 0 }
    },
    {
        id: 29,
        country: "Половцы",
        name: "Саша Доронин",
        link: "https://vk.com/limb948",
        captured: { gray: 0, ai: 0, players: 0 },
        battles: { win: 9, loss: 0 },
        warsDeclared: { players: 0, ai: 0 },
        warsResult: { win: 0, loss: 0, peace: 0 },
        aiActions: { vassalized: 1, annexed: 0 }
    },
    {
        id: 30,
        country: "Франция",
        name: "Сергей Гейн",
        link: "https://vk.com/id36314489",
        captured: { gray: 0, ai: 0, players: 0 },
        battles: { win: 0, loss: 0 },
        warsDeclared: { players: 0, ai: 0 },
        warsResult: { win: 0, loss: 0, peace: 0 },
        aiActions: { vassalized: 0, annexed: 0 }
    },
    {
        id: 31,
        country: "Швеция",
        name: "Александр Одинцов",
        link: "https://vk.com/id79219354",
        captured: { gray: 0, ai: 0, players: 0 },
        battles: { win: 0, loss: 0 },
        warsDeclared: { players: 0, ai: 0 },
        warsResult: { win: 0, loss: 0, peace: 0 },
        aiActions: { vassalized: 0, annexed: 0 }
    },
    {
        id: 32,
        country: "Шотландия",
        name: "Отто Шнайдер",
        link: "https://vk.com/id550716962",
        captured: { gray: 0, ai: 0, players: 0 },
        battles: { win: 0, loss: 0 },
        warsDeclared: { players: 0, ai: 0 },
        warsResult: { win: 0, loss: 0, peace: 0 },
        aiActions: { vassalized: 0, annexed: 0 }
    },
    {
        id: 33,
        country: "Англия",
        name: "Хурха",
        link: "https://vk.com/xypxa",
        captured: { gray: 0, ai: 0, players: 0 },
        battles: { win: 0, loss: 0 },
        warsDeclared: { players: 0, ai: 1 },
        warsResult: { win: 0, loss: 0, peace: 0 },
        aiActions: { vassalized: 0, annexed: 0 }
    },
    {
        id: 34,
        country: "Богемия",
        name: "Андрей Линейцев",
        link: "https://vk.com/vakakii",
        captured: { gray: 0, ai: 0, players: 0 },
        battles: { win: 1, loss: 0 },
        warsDeclared: { players: 0, ai: 0 },
        warsResult: { win: 0, loss: 0, peace: 0 },
        aiActions: { vassalized: 0, annexed: 0 }
    },
    {
        id: 35,
        country: "Литва",
        name: "Фёдор Демидович",
        link: "https://vk.com/simply_puffin",
        captured: { gray: 0, ai: 0, players: 0 },
        battles: { win: 1, loss: 0 },
        warsDeclared: { players: 0, ai: 0 },
        warsResult: { win: 0, loss: 0, peace: 0 },
        aiActions: { vassalized: 0, annexed: 0 }
    },
    {
        id: 36,
        country: "Рум",
        name: "Ертуган Кенжебаев",
        link: "https://vk.com/ertugan91",
        captured: { gray: 0, ai: 0, players: 0 },
        battles: { win: 3, loss: 0 },
        warsDeclared: { players: 0, ai: 1 },
        warsResult: { win: 0, loss: 0, peace: 0 },
        aiActions: { vassalized: 1, annexed: 0 }
    },
    {
        id: 37,
        country: "Грузия",
        name: "Артур Одинцов",
        link: "https://vk.com/odintsov85",
        captured: { gray: 0, ai: 0, players: 0 },
        battles: { win: 0, loss: 0 },
        warsDeclared: { players: 0, ai: 0 },
        warsResult: { win: 0, loss: 0, peace: 0 },
        aiActions: { vassalized: 0, annexed: 0 }
    },
    {
        id: 38,
        country: "Тунис",
        name: "Василий Косых",
        link: "https://vk.com/madbigmek",
        captured: { gray: 0, ai: 0, players: 0 },
        battles: { win: 3, loss: 0 },
        warsDeclared: { players: 0, ai: 0 },
        warsResult: { win: 0, loss: 0, peace: 0 },
        aiActions: { vassalized: 0, annexed: 0 }
    },
    {
        id: 39,
        country: "Хорватия",
        name: "Богдан Бесчерепов",
        link: "https://vk.com/bescherepov",
        captured: { gray: 0, ai: 0, players: 0 },
        battles: { win: 0, loss: 0 },
        warsDeclared: { players: 0, ai: 0 },
        warsResult: { win: 0, loss: 0, peace: 0 },
        aiActions: { vassalized: 0, annexed: 0 }
    },
    {
        id: 40,
        country: "Сербия",
        name: "Граф(вторая страна)",
        link: "https://vk.com/id630185319",
        captured: { gray: 0, ai: 0, players: 0 },
        battles: { win: 0, loss: 0 },
        warsDeclared: { players: 0, ai: 0 },
        warsResult: { win: 0, loss: 0, peace: 0 },
        aiActions: { vassalized: 0, annexed: 0 }
    },
    {
        id: 41,
        country: "Хорезм",
        name: "Андрей Линейцев(вторая страна)",
        link: "https://vk.com/vakakii",
        captured: { gray: 0, ai: 0, players: 0 },
        battles: { win: 0, loss: 0 },
        warsDeclared: { players: 0, ai: 0 },
        warsResult: { win: 0, loss: 0, peace: 0 },
        aiActions: { vassalized: 0, annexed: 0 }
    },
    {
        id: 42,
        country: "Португалия",
        name: "Саша Доронин(вторая страна)",
        link: "https://vk.com/limb948",
        captured: { gray: 0, ai: 0, players: 0 },
        battles: { win: 0, loss: 0 },
        warsDeclared: { players: 0, ai: 0 },
        warsResult: { win: 0, loss: 0, peace: 0 },
        aiActions: { vassalized: 0, annexed: 0 }
    }
];

function renderTable() {
    const tableBody = document.getElementById('player-table-body');
    if (!tableBody) return;

    tableBody.innerHTML = playersData.map(p => `
        <tr>
            <td>${p.id}</td>
            <td class="country-col">${p.country}</td>
            <td><a class="player-link" href="${p.link || '#'}" target="_blank">${p.name}</a></td>
            <td>${p.captured.gray}</td>
            <td>${p.captured.ai}</td>
            <td>${p.captured.players}</td>
            <td class="win">${p.battles.win}</td>
            <td class="loss">${p.battles.loss}</td>
            <td>${p.warsDeclared.players}</td>
            <td>${p.warsDeclared.ai}</td>
            <td class="win">${p.warsResult.win}</td>
            <td class="loss">${p.warsResult.loss}</td>
            <td class="draw">${p.warsResult.peace}</td>
            <td>${p.aiActions.vassalized}</td>
            <td>${p.aiActions.annexed}</td>
            <td style="font-weight:bold; background: #f0fff4;">${getValueByPath(p, 'score')}</td>
        </tr>
    `).join('');
}

// Вспомогательная функция для получения значения
function getValueByPath(obj, path) {
    if (!path) return 0;
    if (path === 'total_cap') {
        return (obj.captured?.gray || 0) + (obj.captured?.ai || 0) + (obj.captured?.players || 0);
    }
    const value = path.split('.').reduce((acc, part) => acc && acc[part], obj);
    return value !== undefined ? value : 0; 
}

let currentSortPath = '';
let isAscending = false; 

document.querySelectorAll('.sortable').forEach(header => {
    header.addEventListener('click', () => {
        const sortPath = header.getAttribute('data-sort');

        if (currentSortPath === sortPath) {
            isAscending = !isAscending;
        } else {
            currentSortPath = sortPath;
            const textFields = ['id', 'country', 'name'];
            isAscending = textFields.includes(sortPath);
        }

        playersData.sort((a, b) => {
            let valA = getValueByPath(a, sortPath);
            let valB = getValueByPath(b, sortPath);

            // 1. Основное сравнение
            let result = 0;
            if (typeof valA === 'string' && typeof valB === 'string') {
                result = valA.localeCompare(valB, 'ru');
            } else {
                result = valA - valB;
            }

            // Если значения равны (например, у обоих 0), сортируем по ID
            if (result === 0) {
                return a.id - b.id; 
            }

            // Применяем направление сортировки
            return isAscending ? result : -result;
        });

        renderTable();
    });
});

const weights = {
    captured: { gray: 3, ai: 4, players: 5 },
    battles: { win: 4, loss: 1 },
    warsDeclared: { players: 15, ai: 5 },
    warsResult: { win: 20, loss: 2, peace: 5 },
    aiActions: { vassalized: 10, annexed: 10 }
};

function getValueByPath(obj, path) {
    if (!path) return 0;
    
    if (path === 'score') {
        return (
            (Number(obj.captured.gray) * weights.captured.gray) +
            (Number(obj.captured.ai) * weights.captured.ai) +
            (Number(obj.captured.players) * weights.captured.players) +
            (Number(obj.battles.win) * weights.battles.win) +
            (Number(obj.battles.loss) * weights.battles.loss) +
            (Number(obj.warsDeclared.players) * weights.warsDeclared.players) +
            (Number(obj.warsDeclared.ai) * weights.warsDeclared.ai) +
            (Number(obj.warsResult.win) * weights.warsResult.win) +
            (Number(obj.warsResult.loss) * weights.warsResult.loss) +
            (Number(obj.warsResult.peace) * weights.warsResult.peace) +
            (Number(obj.aiActions.vassalized) * weights.aiActions.vassalized) +
            (Number(obj.aiActions.annexed) * weights.aiActions.annexed)
        );
    }
    
    if (path === 'total_cap') {
        return Number(obj.captured.gray) + Number(obj.captured.ai) + Number(obj.captured.players);
    }
    
    const val = path.split('.').reduce((acc, part) => acc && acc[part], obj);
    return isNaN(val) ? val : Number(val);
}

// Функция для отрисовки легенды баллов под таблицей
function renderLegend() {
    const legendBox = document.getElementById('score-legend');
    if (!legendBox) return;

    legendBox.innerHTML = `
        <p><strong>Текущий баланс очков:</strong></p>
        <ul style="column-count: 2; font-size: 13px; color: #555; list-style-type: '— ';">
            <li>Захват: Серая (<b>${weights.captured.gray}</b>), ИИ (<b>${weights.captured.ai}</b>), Игрок (<b>${weights.captured.players}</b>)</li>
            <li>Битва: Победа (<b>${weights.battles.win}</b>), Поражение (<b>${weights.battles.loss}</b>)</li>
            <li>Война (объявление): Игроку (<b>${weights.warsDeclared.players}</b>), ИИ (<b>${weights.warsDeclared.ai}</b>)</li>
            <li>Война (итог): Победа (<b>${weights.warsResult.win}</b>), Поражение (<b>${weights.warsResult.loss}</b>), Белый мир (<b>${weights.warsResult.peace}</b>)</li>
            <li>ИИ действия: Вассализация (<b>${weights.aiActions.vassalized}</b>), Аннексия (<b>${weights.aiActions.annexed}</b>)</li>
        </ul>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    renderTable();
    renderLegend(); 
});