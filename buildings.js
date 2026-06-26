// auto-generated from dev/buildings.xlsx — не редактировать вручную
const BUILDINGS = [
  {
    "name": "Поле",
    "category": "с/х",
    "location": "Провинция",
    "resource": "все",
    "climate": "все (кроме Степи и Пустыни)",
    "conditions": "—",
    "input": "1 Инструмент",
    "base": "3 п/п",
    "bonuses": "+1 Тёплый/Умеренный, +2 «Пойменное земледелие», «Тяжёлый плуг», +1 Равнина, -1 Холодный/Экватор, -1 Леса, +5 «Трёхполье», «Подсечное земледелие»",
    "cost": {
      "numeric": 17.5,
      "display": "17.5"
    },
    "income": {
      "numeric": 1.0,
      "display": "1"
    }
  },
  {
    "name": "Пастбище",
    "category": "с/х",
    "location": "Провинция",
    "resource": "все",
    "climate": "все (кроме Арктики)",
    "conditions": "—",
    "input": "1 Рабы",
    "base": "1 п/п",
    "bonuses": "+1 Овцы, +2 Олени, +3 Скот, +1 Степь/Холмы, -1 Джунгли/Леса, «Пастыри», «Селекция», «Отгонное скотоводство»",
    "cost": {
      "numeric": 10.0,
      "display": "10"
    },
    "income": {
      "numeric": 1.0,
      "display": "1+1 (Овцы)"
    }
  },
  {
    "name": "Ферма",
    "category": "с/х",
    "location": "Провинция/Город",
    "resource": "все",
    "climate": "все (кроме Арктики)",
    "conditions": "—",
    "input": "1 Краски",
    "base": "1 Волокно",
    "bonuses": "+1 Леса, «Трёхполье», «Лён-долгунец», «Аренда земли», «Хомут», «Коса»",
    "cost": {
      "numeric": 30.0,
      "display": "30"
    },
    "income": {
      "numeric": 5.0,
      "display": "5"
    }
  },
  {
    "name": "Огород",
    "category": "с/х",
    "location": "Провинция",
    "resource": "все",
    "climate": "все",
    "conditions": "нет при «Вегетарианство»",
    "input": "1 Инструмент",
    "base": "1 п/п",
    "bonuses": "+1 Река/Озеро/Колодец, «Мелиорация», «Кяризы», «Аренда земли», «Феллахи»",
    "cost": {
      "numeric": 5.0,
      "display": "5"
    },
    "income": {
      "numeric": 0.0,
      "display": "0"
    }
  },
  {
    "name": "Свинарник",
    "category": "с/х",
    "location": "Провинция",
    "resource": "все",
    "climate": "все",
    "conditions": "Свобода>0, Поле+Пастбище в локации",
    "input": "1 Инструмент",
    "base": "1 п/п",
    "bonuses": "«Стойловое содержание», «Заготовка сена»",
    "cost": {
      "numeric": 25.0,
      "display": "25"
    },
    "income": {
      "numeric": 0.0,
      "display": "0"
    }
  },
  {
    "name": "Сад",
    "category": "с/х",
    "location": "Провинция",
    "resource": "все",
    "climate": "все",
    "conditions": "нет при Исламе/Иудаизме/«Вегетарианство»",
    "input": "1 Инструмент",
    "base": "4 п/п",
    "bonuses": "«Селекция», «Заготовка сена»",
    "cost": {
      "numeric": 30.0,
      "display": "30"
    },
    "income": {
      "numeric": 2.0,
      "display": "2"
    }
  },
  {
    "name": "Бахча",
    "category": "с/х",
    "location": "Провинция",
    "resource": "все",
    "climate": "все",
    "conditions": "—",
    "input": "1 Инструмент",
    "base": "2 п/п",
    "bonuses": "+1 Море, «Удобрения», «Наёмный», «Кяризы», «Аренда земли»",
    "cost": {
      "numeric": 15.0,
      "display": "15"
    },
    "income": {
      "numeric": 1.0,
      "display": "1+1 (Овощи/Фрукты)"
    }
  },
  {
    "name": "Пасека",
    "category": "с/х",
    "location": "Провинция",
    "resource": "все",
    "climate": "все",
    "conditions": "—",
    "input": "1 Инструмент",
    "base": "1 п/п",
    "bonuses": "+1 Фрукты/Овощи, наличие Ирригации даёт х2, «Удобрения», «Мелиорация», «Кяризы», «Феллахи»",
    "cost": {
      "numeric": 10.0,
      "display": "10"
    },
    "income": {
      "numeric": 1.0,
      "display": "1"
    }
  },
  {
    "name": "Виноградник",
    "category": "с/х",
    "location": "Провинция",
    "resource": "все",
    "climate": "Тёплый/Жаркий/Знойный/Экватор (кроме Холодного/Прохладного/Степи/Пустыни/Холмов)",
    "conditions": "—",
    "input": "1 Алко",
    "base": "1 п/п",
    "bonuses": "+1 Холмы, «Пресс для вина», «Винная бутылка», +1 Гончарная, +1 Монастырь, «Виноделие», «Ферментация вин»",
    "cost": {
      "numeric": 30.0,
      "display": "30"
    },
    "income": {
      "numeric": 5.0,
      "display": "5+1"
    }
  },
  {
    "name": "Плантация",
    "category": "с/х",
    "location": "Провинция",
    "resource": "Фрукты/Оливки",
    "climate": "Тёплый/Жаркий/Знойный",
    "conditions": "—",
    "input": "1 Алко",
    "base": "4 п/п",
    "bonuses": "+1 Холмы, «Террасное земледелие»",
    "cost": {
      "numeric": 35.0,
      "display": "35"
    },
    "income": {
      "numeric": 0.0,
      "display": "0"
    }
  },
  {
    "name": "Мельница",
    "category": "с/х",
    "location": "Провинция",
    "resource": "Зерно",
    "climate": "все",
    "conditions": "—",
    "input": "1 п/п",
    "base": "1 п/п",
    "bonuses": "«Водяное колесо» (+Река), «Ветряные мельницы», «Механизация труда»",
    "cost": {
      "numeric": 25.0,
      "display": "25"
    },
    "income": {
      "numeric": 2.0,
      "display": "2"
    }
  },
  {
    "name": "Прядильня",
    "category": "с/х",
    "location": "Провинция",
    "resource": "Лён/Оливки/Скот + инн «Сливочное масло»",
    "climate": "все",
    "conditions": "—",
    "input": "2 Шёлк",
    "base": "2 Волокно",
    "bonuses": "—",
    "cost": {
      "numeric": 20.0,
      "display": "20"
    },
    "income": {
      "numeric": 1.0,
      "display": "1"
    }
  },
  {
    "name": "Маслобойня",
    "category": "с/х",
    "location": "Провинция",
    "resource": "все",
    "climate": "все",
    "conditions": "—",
    "input": "4 п/п",
    "base": "—",
    "bonuses": "—",
    "cost": {
      "numeric": 20.0,
      "display": "20"
    },
    "income": {
      "numeric": 3.0,
      "display": "3"
    }
  },
  {
    "name": "Конюшня",
    "category": "с/х",
    "location": "Провинция",
    "resource": "Кони",
    "climate": "все",
    "conditions": "не больше чем Шор/артелей",
    "input": "1 Кони",
    "base": "1 Кони",
    "bonuses": "«Коневодство», «Селекция»",
    "cost": {
      "numeric": 30.0,
      "display": "30"
    },
    "income": {
      "numeric": 2.0,
      "display": "2"
    }
  },
  {
    "name": "Чертог",
    "category": "админ",
    "location": "Провинция",
    "resource": "все",
    "climate": "все",
    "conditions": "Язычество",
    "input": "1 Х/о + 1 Алко",
    "base": "—",
    "bonuses": "0",
    "cost": {
      "numeric": null,
      "display": ""
    },
    "income": {
      "numeric": 25.0,
      "display": "25"
    }
  },
  {
    "name": "Суд",
    "category": "админ",
    "location": "Город",
    "resource": "все",
    "climate": "все",
    "conditions": "ранг страны >=3, 1 на страну",
    "input": "1 Бумага",
    "base": "-1% к Коррупции, «Кровная месть», «Судебная система», «Прокуратура», «Инквизиция»",
    "bonuses": "1",
    "cost": {
      "numeric": null,
      "display": ""
    },
    "income": {
      "numeric": 30.0,
      "display": "30"
    }
  },
  {
    "name": "Канцелярия",
    "category": "админ",
    "location": "Город",
    "resource": "все",
    "climate": "все",
    "conditions": "1 на страну",
    "input": "1 Бумага",
    "base": "+10% к сбору налогов, «Чернила», «Гос. служба», «Архивное дело», «Логофеты»",
    "bonuses": "3",
    "cost": {
      "numeric": null,
      "display": ""
    },
    "income": {
      "numeric": 35.0,
      "display": "35"
    }
  },
  {
    "name": "Тюрьма",
    "category": "админ",
    "location": "Город",
    "resource": "все",
    "climate": "все",
    "conditions": "ранг страны >=2, 1 на страну",
    "input": "1 Железо + 1 Бумага",
    "base": "-1% к Преступности, «Орудия пыток»",
    "bonuses": "-2",
    "cost": {
      "numeric": null,
      "display": ""
    },
    "income": {
      "numeric": 50.0,
      "display": "50"
    }
  },
  {
    "name": "Таможня",
    "category": "админ",
    "location": "Город/Провинция",
    "resource": "все",
    "climate": "все",
    "conditions": "—",
    "input": "1 Золото/Серебро/Медь",
    "base": "+5% к таможенному сбору, «Царина», «Монополия на экспорт»",
    "bonuses": "-1",
    "cost": {
      "numeric": null,
      "display": ""
    },
    "income": {
      "numeric": 30.0,
      "display": "30"
    }
  },
  {
    "name": "Монетный двор",
    "category": "админ",
    "location": "Город",
    "resource": "все",
    "climate": "все",
    "conditions": "—",
    "input": "1 Украшения",
    "base": "«Государственная казна»",
    "bonuses": "0",
    "cost": {
      "numeric": null,
      "display": ""
    },
    "income": {
      "numeric": 40.0,
      "display": "40"
    }
  },
  {
    "name": "Дворец",
    "category": "админ",
    "location": "Столица",
    "resource": "все",
    "climate": "все",
    "conditions": "—",
    "input": "2 а/пр; 160 локации",
    "base": "+2% к Лояльности (за каждый Дворец), +1 к лимиту Управления, «Фонтаны»",
    "bonuses": "-5",
    "cost": {
      "numeric": null,
      "display": ""
    },
    "income": {
      "numeric": 100.0,
      "display": "100"
    }
  },
  {
    "name": "Лесорубка",
    "category": "добыча",
    "location": "Провинция",
    "resource": "все",
    "climate": "все",
    "conditions": "—",
    "input": "3 Древесина",
    "base": "6 древесина",
    "bonuses": "-2 Джунгли, -4 иной ландшафт, «Пила»",
    "cost": {
      "numeric": 5.0,
      "display": "5"
    },
    "income": {
      "numeric": 0.0,
      "display": "0+2 (тех. Водяное колесо + Река)"
    }
  },
  {
    "name": "Углежогня",
    "category": "добыча",
    "location": "Провинция",
    "resource": "все",
    "climate": "Леса/Джунгли",
    "conditions": "—",
    "input": "1 Древесина",
    "base": "2 Уголь",
    "bonuses": "-1 Джунгли, «Угольная печь», «Чугун»",
    "cost": {
      "numeric": 15.0,
      "display": "15"
    },
    "income": {
      "numeric": 0.0,
      "display": "0"
    }
  },
  {
    "name": "Смолокурня",
    "category": "добыча",
    "location": "Провинция",
    "resource": "все",
    "climate": "Леса/Джунгли",
    "conditions": "—",
    "input": "1 Рабы",
    "base": "1 Смола",
    "bonuses": "—",
    "cost": {
      "numeric": 10.0,
      "display": "10"
    },
    "income": {
      "numeric": 1.0,
      "display": "1"
    }
  },
  {
    "name": "Каменоломня",
    "category": "добыча",
    "location": "Провинция",
    "resource": "все",
    "climate": "все",
    "conditions": "—",
    "input": "1 Инструмент",
    "base": "4 Камень",
    "bonuses": "-1 Пустыня, -2 иной ландшафт, «Горное дело»",
    "cost": {
      "numeric": 15.0,
      "display": "15"
    },
    "income": {
      "numeric": 1.5,
      "display": "1,5+1 (Мрамор)"
    }
  },
  {
    "name": "Рудник (Мрамор)",
    "category": "добыча",
    "location": "Провинция",
    "resource": "Мрамор",
    "climate": "все",
    "conditions": "—",
    "input": "1 Рабы",
    "base": "2 Мрамор",
    "bonuses": "«Горное дело»",
    "cost": {
      "numeric": 25.0,
      "display": "25"
    },
    "income": {
      "numeric": 1.0,
      "display": "1+!(Дорога)"
    }
  },
  {
    "name": "Рудник (Золото)",
    "category": "добыча",
    "location": "Провинция",
    "resource": "Золото",
    "climate": "все",
    "conditions": "—",
    "input": "1 Инструмент",
    "base": "2 Золото",
    "bonuses": "«Маркшейдеры», «Амальгамация»",
    "cost": {
      "numeric": 30.0,
      "display": "30"
    },
    "income": {
      "numeric": 1.0,
      "display": "1+1(Дорога)"
    }
  },
  {
    "name": "Рудник (Серебро)",
    "category": "добыча",
    "location": "Провинция",
    "resource": "Серебро",
    "climate": "все",
    "conditions": "—",
    "input": "2 Древесина",
    "base": "2 Серебро",
    "bonuses": "—",
    "cost": {
      "numeric": 20.0,
      "display": "20"
    },
    "income": {
      "numeric": 1.0,
      "display": "1"
    }
  },
  {
    "name": "Шахта (Железо)",
    "category": "добыча",
    "location": "Провинция",
    "resource": "Железо",
    "climate": "все (в т.ч. Болото)",
    "conditions": "—",
    "input": "1 Рабы",
    "base": "4 Жел/руда",
    "bonuses": "+1 Железо, -2 Болото, «Маркшейдеры», «Горное дело»",
    "cost": {
      "numeric": 10.0,
      "display": "10"
    },
    "income": {
      "numeric": 0.0,
      "display": "0"
    }
  },
  {
    "name": "Шахта (Медь)",
    "category": "добыча",
    "location": "Провинция",
    "resource": "Медь",
    "climate": "все",
    "conditions": "—",
    "input": "1 Инструмент",
    "base": "3 Мед/руда",
    "bonuses": "—",
    "cost": {
      "numeric": 5.0,
      "display": "5"
    },
    "income": {
      "numeric": 0.0,
      "display": "0"
    }
  },
  {
    "name": "Шахта (Др/камни)",
    "category": "добыча",
    "location": "Провинция",
    "resource": "Др/камни",
    "climate": "все",
    "conditions": "—",
    "input": "—",
    "base": "1 Др/камни",
    "bonuses": "—",
    "cost": {
      "numeric": 7.5,
      "display": "7.5"
    },
    "income": {
      "numeric": 1.0,
      "display": "1+1(Меха)"
    }
  },
  {
    "name": "Шахта (Свинец)",
    "category": "добыча",
    "location": "Провинция",
    "resource": "Свинец",
    "climate": "все",
    "conditions": "—",
    "input": "—",
    "base": "2 Свинец",
    "bonuses": "—",
    "cost": {
      "numeric": null,
      "display": "—"
    },
    "income": {
      "numeric": null,
      "display": "—"
    }
  },
  {
    "name": "Солеварня",
    "category": "добыча",
    "location": "Провинция",
    "resource": "Соль",
    "climate": "все",
    "conditions": "—",
    "input": "—",
    "base": "3 Соль",
    "bonuses": "—",
    "cost": {
      "numeric": null,
      "display": "—"
    },
    "income": {
      "numeric": null,
      "display": "—"
    }
  },
  {
    "name": "Селитряница",
    "category": "добыча",
    "location": "Провинция",
    "resource": "Селитра",
    "climate": "все",
    "conditions": "—",
    "input": "—",
    "base": "3 Селитра",
    "bonuses": "«Маркшейдеры», «Штольня», «Горное дело», «Чугун», «Водяные насосы», «Копи»",
    "cost": {
      "numeric": null,
      "display": "—"
    },
    "income": {
      "numeric": null,
      "display": "—"
    }
  },
  {
    "name": "Бивак",
    "category": "добыча",
    "location": "Провинция",
    "resource": "Море",
    "climate": "все",
    "conditions": "нужна Скот/Свинарник/Канализация",
    "input": "1 Звери + !ТНП (Слоны)",
    "base": "1 Соль + 1 Селитра",
    "bonuses": "«Порох»",
    "cost": {
      "numeric": null,
      "display": "—"
    },
    "income": {
      "numeric": null,
      "display": "—"
    }
  },
  {
    "name": "Угодье",
    "category": "добыча",
    "location": "Провинция/Город",
    "resource": "Скот/Свинарник/Канализация",
    "climate": "все",
    "conditions": "нет при «Вегетарианство»",
    "input": "1 Кони, 1 Волокно",
    "base": "1 Звери + !ТНП (Слоны)",
    "bonuses": "«Травля зверей»",
    "cost": {
      "numeric": null,
      "display": "—"
    },
    "income": {
      "numeric": null,
      "display": "—"
    }
  },
  {
    "name": "Гончарная",
    "category": "ремесло",
    "location": "Город/Провинция",
    "resource": "все",
    "climate": "Река/Озеро",
    "conditions": "—",
    "input": "1 Древесина",
    "base": "2 ТНП",
    "bonuses": "«Кирпич», «Глазурь», «Фаянс»",
    "cost": {
      "numeric": 12.5,
      "display": "12.5"
    },
    "income": {
      "numeric": 1.0,
      "display": "1"
    }
  },
  {
    "name": "Красильня",
    "category": "ремесло",
    "location": "Город/Провинция",
    "resource": "все",
    "climate": "все",
    "conditions": "—",
    "input": "1 Древесина, 1 Сахар",
    "base": "2 Камень",
    "bonuses": "0 Краски +2 (Краситель), «Шафран», «Киноварь», «Охра»",
    "cost": {
      "numeric": 15.0,
      "display": "15"
    },
    "income": {
      "numeric": 3.0,
      "display": "3"
    }
  },
  {
    "name": "Пекарня",
    "category": "ремесло",
    "location": "Город",
    "resource": "все",
    "climate": "все",
    "conditions": "не больше 2 на 1 Мельницу",
    "input": "2 Сахар + Стекло",
    "base": "3 п/п",
    "bonuses": "+2 (Сахар)",
    "cost": {
      "numeric": 15.0,
      "display": "15"
    },
    "income": {
      "numeric": 1.0,
      "display": "1+2(Сахар)"
    }
  },
  {
    "name": "Пивоварня",
    "category": "ремесло",
    "location": "Город/Провинция",
    "resource": "Зерно/Овощи/Фрукты",
    "climate": "все",
    "conditions": "нет при Исламе",
    "input": "4 Волокно",
    "base": "2 Алко",
    "bonuses": "+1 (инн Эль + Леса) «Хмель»",
    "cost": {
      "numeric": 15.0,
      "display": "15"
    },
    "income": {
      "numeric": 2.0,
      "display": "2+1 (Боч/артель +1 инн Эль + Леса)"
    }
  },
  {
    "name": "Винокурня",
    "category": "ремесло",
    "location": "Провинция",
    "resource": "все",
    "climate": "все",
    "conditions": "нет при Исламе, не больше чем провинций с Зерном и Рисом",
    "input": "1 Кожа",
    "base": "5 Алко",
    "bonuses": "«Водка», «Ракия»",
    "cost": {
      "numeric": 35.0,
      "display": "35"
    },
    "income": {
      "numeric": 3.0,
      "display": "3"
    }
  },
  {
    "name": "Свечной двор",
    "category": "ремесло",
    "location": "Провинция",
    "resource": "Воск",
    "climate": "все",
    "conditions": "—",
    "input": "1 Соль",
    "base": "1 Благовония",
    "bonuses": "«Гильдии»",
    "cost": {
      "numeric": 10.0,
      "display": "10"
    },
    "income": {
      "numeric": 1.0,
      "display": "1"
    }
  },
  {
    "name": "Бумажная артель",
    "category": "ремесло",
    "location": "Город",
    "resource": "все",
    "climate": "все",
    "conditions": "—",
    "input": "1 Волокно, Смола",
    "base": "3 Бумага",
    "bonuses": "«Гербовая бумага», «Водяное колесо», «Механизация труда», «Гильдии»",
    "cost": {
      "numeric": 30.0,
      "display": "30"
    },
    "income": {
      "numeric": 3.0,
      "display": "3"
    }
  },
  {
    "name": "Пергаментная артель",
    "category": "ремесло",
    "location": "Город",
    "resource": "все",
    "climate": "все",
    "conditions": "—",
    "input": "2 Волокно",
    "base": "1 Бумага",
    "bonuses": "«Золение», «Велен»",
    "cost": {
      "numeric": 20.0,
      "display": "20"
    },
    "income": {
      "numeric": 2.0,
      "display": "2"
    }
  },
  {
    "name": "Дубильня",
    "category": "ремесло",
    "location": "Провинция/Город",
    "resource": "Скот/Меха/Звери/Свинарник",
    "climate": "все",
    "conditions": "—",
    "input": "3 Волокно + 1 Краски",
    "base": "3 Кожа",
    "bonuses": "«Сафьян», «Юфть», «Замша»",
    "cost": {
      "numeric": 20.0,
      "display": "20"
    },
    "income": {
      "numeric": 0.0,
      "display": "0"
    }
  },
  {
    "name": "Верфь",
    "category": "ремесло",
    "location": "Город",
    "resource": "все",
    "climate": "все",
    "conditions": "не больше чем провинций с Овцами",
    "input": "2 Волокно",
    "base": "1 КОР + 1 (Смола) +1 (Пуш/двор)",
    "bonuses": "«Сухой док», «Клинкер», «Адмиралтейство», «Ветряная пилорама»",
    "cost": {
      "numeric": 50.0,
      "display": "50"
    },
    "income": {
      "numeric": 1.0,
      "display": "1"
    }
  },
  {
    "name": "Ткацкая артель",
    "category": "ремесло",
    "location": "Город/Провинция",
    "resource": "все",
    "climate": "все",
    "conditions": "—",
    "input": "3 Волокно + 1 Краски",
    "base": "1 Ткани",
    "bonuses": "«Ткацкий станок», «Гильдии», «Муслин», «Тартан», «Вадмаль», «Свитер»",
    "cost": {
      "numeric": 12.5,
      "display": "12.5"
    },
    "income": {
      "numeric": 1.0,
      "display": "1"
    }
  },
  {
    "name": "Мануфактура",
    "category": "ремесло",
    "location": "Город",
    "resource": "все",
    "climate": "все",
    "conditions": "—",
    "input": "2 Волокно",
    "base": "6 Ткани",
    "bonuses": "«Экономика», «Разделение труда», «Цеховые привилегии»",
    "cost": {
      "numeric": 20.0,
      "display": "20"
    },
    "income": {
      "numeric": 2.0,
      "display": "2"
    }
  },
  {
    "name": "Сукновальня",
    "category": "ремесло",
    "location": "Город/Провинция",
    "resource": "все",
    "climate": "все",
    "conditions": "—",
    "input": "Соль + 1 Древесина",
    "base": "2 ТНП",
    "bonuses": "«Валенки», «Водяное колесо», «Войлок»",
    "cost": {
      "numeric": 20.0,
      "display": "20"
    },
    "income": {
      "numeric": 2.0,
      "display": "2"
    }
  },
  {
    "name": "Ковровый двор",
    "category": "ремесло",
    "location": "Город",
    "resource": "все",
    "climate": "все",
    "conditions": "нет при «Вегетарианство», не больше чем Свинарников",
    "input": "1 Соль + 1 Пряности",
    "base": "1 Украшения",
    "bonuses": "«Арабеска»",
    "cost": {
      "numeric": 30.0,
      "display": "30"
    },
    "income": {
      "numeric": 3.0,
      "display": "3"
    }
  },
  {
    "name": "Коптильня",
    "category": "ремесло",
    "location": "Город",
    "resource": "все",
    "climate": "все",
    "conditions": "не больше чем локаций с Рыбой",
    "input": "1 Соль",
    "base": "4 п/п",
    "bonuses": "+1 (Боч/артель)",
    "cost": {
      "numeric": 15.0,
      "display": "15"
    },
    "income": {
      "numeric": 3.0,
      "display": "3"
    }
  },
  {
    "name": "Колбасный цех",
    "category": "ремесло",
    "location": "Провинция/Город",
    "resource": "все",
    "climate": "все",
    "conditions": "нет при «Вегетарианство»",
    "input": "1 Золото/Серебро/Др.камни",
    "base": "7 п/п",
    "bonuses": "«Кровяная колбаса»",
    "cost": {
      "numeric": 30.0,
      "display": "30"
    },
    "income": {
      "numeric": 5.0,
      "display": "5"
    }
  },
  {
    "name": "Сыроварня",
    "category": "ремесло",
    "location": "Город",
    "resource": "все",
    "climate": "все",
    "conditions": "не больше чем локаций с Овцами и Скотом",
    "input": "1 Древесина + 1 Кожа",
    "base": "3 п/п",
    "bonuses": "«Элитное сыроварение»",
    "cost": {
      "numeric": 17.5,
      "display": "17.5"
    },
    "income": {
      "numeric": 4.0,
      "display": "4"
    }
  },
  {
    "name": "Ювелирная артель",
    "category": "ремесло",
    "location": "Город",
    "resource": "все",
    "climate": "все",
    "conditions": "—",
    "input": "1 Соль + 1 Уголь",
    "base": "1 Украшения (Серебро) + 1 (Золото) + 2 (Др/камни)",
    "bonuses": "«Бусы», «Гильдии», «Огранка»",
    "cost": {
      "numeric": 20.0,
      "display": "20"
    },
    "income": {
      "numeric": 4.0,
      "display": "4+1 (Евреи)"
    }
  },
  {
    "name": "Шорная артель",
    "category": "ремесло",
    "location": "Город",
    "resource": "все",
    "climate": "все",
    "conditions": "работает в Пустыне или Городе",
    "input": "1 Благовония",
    "base": "2 ТНП",
    "bonuses": "«Гильдии», «Дилижансы», «Производство сбруи», «Коя»",
    "cost": {
      "numeric": 20.0,
      "display": "20"
    },
    "income": {
      "numeric": 1.0,
      "display": "1"
    }
  },
  {
    "name": "Стеклянная артель",
    "category": "ремесло",
    "location": "Город",
    "resource": "все",
    "climate": "все",
    "conditions": "—",
    "input": "1 Кожа",
    "base": "2 Стекло",
    "bonuses": "«Хрусталь», «Гильдии», «Оптика»",
    "cost": {
      "numeric": 35.0,
      "display": "35"
    },
    "income": {
      "numeric": 2.0,
      "display": "2"
    }
  },
  {
    "name": "Мыловарня",
    "category": "ремесло",
    "location": "Город",
    "resource": "все",
    "climate": "все",
    "conditions": "—",
    "input": "2 Ткани + 1 Кожа",
    "base": "3 ТНП",
    "bonuses": "«Твёрдое мыло», «Гигиена»",
    "cost": {
      "numeric": 25.0,
      "display": "25"
    },
    "income": {
      "numeric": 1.5,
      "display": "1.5"
    }
  },
  {
    "name": "Обувная артель",
    "category": "ремесло",
    "location": "Город",
    "resource": "все",
    "climate": "все",
    "conditions": "—",
    "input": "1 Древесина",
    "base": "2 ТНП",
    "bonuses": "«Гильдии», «Пулены», «Бабуши», «Башмаки»",
    "cost": {
      "numeric": 15.0,
      "display": "15"
    },
    "income": {
      "numeric": 1.0,
      "display": "1"
    }
  },
  {
    "name": "Швейная артель",
    "category": "ремесло",
    "location": "Город",
    "resource": "все",
    "climate": "все",
    "conditions": "—",
    "input": "3 Медь + 2 Уголь",
    "base": "4 ТНП",
    "bonuses": "«Сапоги», «Гильдии», «Кафтан», «Феска», «Шешия», «Пуговица», «Бернус», «Кулах», «Сарафан», «Шаровары», «Ферязь», «Дублет», «Дивитисий», «Тюбетейка», «Свитер»",
    "cost": {
      "numeric": 20.0,
      "display": "20"
    },
    "income": {
      "numeric": 2.0,
      "display": "2"
    }
  },
  {
    "name": "Бондарная артель",
    "category": "ремесло",
    "location": "Провинция",
    "resource": "все",
    "climate": "все",
    "conditions": "—",
    "input": "2 Селитра + 1 Уголь",
    "base": "1 ТНП",
    "bonuses": "«Гильдии», «Бордоские бочки»",
    "cost": {
      "numeric": 15.0,
      "display": "15"
    },
    "income": {
      "numeric": 1.0,
      "display": "1"
    }
  },
  {
    "name": "Пушной двор",
    "category": "ремесло",
    "location": "Город/Провинция",
    "resource": "Пустыня",
    "climate": "все",
    "conditions": "—",
    "input": "1 Древесина + 1 Железо",
    "base": "2 Пуш",
    "bonuses": "«Топчу», «Эргастерии», «Серпантина»",
    "cost": {
      "numeric": 45.0,
      "display": "45"
    },
    "income": {
      "numeric": 2.5,
      "display": "2.5"
    }
  },
  {
    "name": "Пороховая артель",
    "category": "ремесло",
    "location": "Город",
    "resource": "все",
    "climate": "все",
    "conditions": "—",
    "input": "1 Древесина + 1 Железо",
    "base": "4 Порох",
    "bonuses": "«Химия», «Баллистика», «Гильдии», «Зернистый порох», «Эргастерии»",
    "cost": {
      "numeric": 30.0,
      "display": "30"
    },
    "income": {
      "numeric": 1.0,
      "display": "1"
    }
  },
  {
    "name": "Мастерская",
    "category": "ремесло",
    "location": "Город",
    "resource": "все",
    "climate": "все",
    "conditions": "—",
    "input": "1 Медь",
    "base": "3 Инструмент",
    "bonuses": "«Токарный станок», «Механизация труда»",
    "cost": {
      "numeric": 27.5,
      "display": "27.5"
    },
    "income": {
      "numeric": 1.0,
      "display": "1"
    }
  },
  {
    "name": "Кузница",
    "category": "ремесло",
    "location": "Провинция",
    "resource": "все",
    "climate": "все",
    "conditions": "—",
    "input": "1 Медь + 1 Инструмент",
    "base": "2 Х/о",
    "bonuses": "«Горн», «Вагранка», «Сыродутная печь», «Булатная сталь», «Подкова»",
    "cost": {
      "numeric": 15.0,
      "display": "15"
    },
    "income": {
      "numeric": 2.0,
      "display": "2"
    }
  },
  {
    "name": "Плавильня",
    "category": "ремесло",
    "location": "Город/Провинция",
    "resource": "все",
    "climate": "все",
    "conditions": "2 Ж/руда + 2 Уголь",
    "input": "2 Свинец + 1 Инструмент",
    "base": "4 Железо",
    "bonuses": "«Чугун», «Доменная печь», «Тигельная сталь»",
    "cost": {
      "numeric": 50.0,
      "display": "50"
    },
    "income": {
      "numeric": 2.0,
      "display": "2+2(Железо)"
    }
  },
  {
    "name": "Литейная",
    "category": "ремесло",
    "location": "Город/Провинция",
    "resource": "все",
    "climate": "все",
    "conditions": "2 М/руда + 2 Уголь",
    "input": "—",
    "base": "3 Медь",
    "bonuses": "«Латунь», «Колокола»",
    "cost": {
      "numeric": 40.0,
      "display": "40"
    },
    "income": {
      "numeric": 2.0,
      "display": "2+2(Медь)"
    }
  },
  {
    "name": "Лавка",
    "category": "ремесло",
    "location": "Город",
    "resource": "все",
    "climate": "все",
    "conditions": "—",
    "input": "—",
    "base": "2 ТНП",
    "bonuses": "«Чеканка», «Басма»",
    "cost": {
      "numeric": 10.0,
      "display": "10"
    },
    "income": {
      "numeric": 1.0,
      "display": "1"
    }
  },
  {
    "name": "Оружейная",
    "category": "ремесло",
    "location": "Город/Провинция",
    "resource": "все",
    "climate": "все",
    "conditions": "—",
    "input": "—",
    "base": "1 Х/о",
    "bonuses": "«Огнестрельное оружие», «Эргастерии»",
    "cost": {
      "numeric": 30.0,
      "display": "30"
    },
    "income": {
      "numeric": 4.0,
      "display": "4"
    }
  },
  {
    "name": "Рынок",
    "category": "торговля",
    "location": "Город/Провинция",
    "resource": "все",
    "climate": "все",
    "conditions": "доступно народам Запада и Севера",
    "input": "1 Ткани + 1 Сахар",
    "base": "+10% ЭТ, «Торговая хватка», «Ярмарки», «Скоморохи»",
    "bonuses": "3(Ткани)+10(Пряности)+5(Благовония)+5(Сахар) х2",
    "cost": {
      "numeric": null,
      "display": ""
    },
    "income": {
      "numeric": 15.0,
      "display": "15"
    }
  },
  {
    "name": "Базар",
    "category": "торговля",
    "location": "Город",
    "resource": "все",
    "climate": "все",
    "conditions": "доступно народам Центра и Юга",
    "input": "+1 Пряности +1 Благовония",
    "base": "+10% ЭТ, «Торговая хватка», «Меркантилизм», «Безистан»",
    "bonuses": "3(Ткани)+8(Мех)+6(Чай)+6(Табак)",
    "cost": {
      "numeric": null,
      "display": ""
    },
    "income": {
      "numeric": 20.0,
      "display": "20"
    }
  },
  {
    "name": "Караван-сарай",
    "category": "торговля",
    "location": "Город/Провинция",
    "resource": "Пряности/Верблюды",
    "climate": "все",
    "conditions": "не больше чем локаций с Верблюдами",
    "input": "1 Ткани + 1 Меха +1 Чай +1 Табак (после 1500)",
    "base": "+7% ЭТ, «Торговые караваны», «Фундуки», «Хан», «Охрана караванов», «Гостеприимство»",
    "bonuses": "3",
    "cost": {
      "numeric": null,
      "display": ""
    },
    "income": {
      "numeric": 15.0,
      "display": "15"
    }
  },
  {
    "name": "Аптека",
    "category": "торговля",
    "location": "Город",
    "resource": "все",
    "climate": "все",
    "conditions": "не доступна странам с ВП Церковь=3",
    "input": "1 Свинец",
    "base": "1 Лекарства, -1% к шансу Эпидемии, +1% к Благочестию, «Табакокурение», «Дёготь», «Ятрохимия», «Токсикология», «Эликсиры», «Парфюмерия»",
    "bonuses": "1",
    "cost": {
      "numeric": null,
      "display": ""
    },
    "income": {
      "numeric": 15.0,
      "display": "15"
    }
  },
  {
    "name": "Бордель",
    "category": "торговля",
    "location": "Город",
    "resource": "все",
    "climate": "все",
    "conditions": "не доступна странам с Исламом",
    "input": "1 Алко",
    "base": "-2% к РВ в локации, +2% к шансу Эпидемии, «Секс-рабство», «Куртизанки», «Проституция»",
    "bonuses": "5+1(Порт)",
    "cost": {
      "numeric": null,
      "display": ""
    },
    "income": {
      "numeric": 5.0,
      "display": "5"
    }
  },
  {
    "name": "Таверна",
    "category": "торговля",
    "location": "Город/Провинция",
    "resource": "все",
    "climate": "все",
    "conditions": "—",
    "input": "1 Алко",
    "base": "+1 Шпион, «Пьянство», «Гостеприимство», «Трактир», «Водка»",
    "bonuses": "7*10",
    "cost": {
      "numeric": null,
      "display": ""
    },
    "income": {
      "numeric": 15.0,
      "display": "15"
    }
  },
  {
    "name": "Фактория",
    "category": "торговля",
    "location": "Город",
    "resource": "Море",
    "climate": "все",
    "conditions": "доступно Торг. республикам",
    "input": "1(Бордель)",
    "base": "+5% ЭТ у принимающей страны, «Колониализм»",
    "bonuses": "3 у принимающей, 1-10 у торг. республики",
    "cost": {
      "numeric": null,
      "display": ""
    },
    "income": {
      "numeric": 15.0,
      "display": "15"
    }
  },
  {
    "name": "Невольничий рынок",
    "category": "торговля",
    "location": "Город/Провинция",
    "resource": "все",
    "climate": "все",
    "conditions": "ВП Свобода <0",
    "input": "1(Тюрьма)",
    "base": "2 Раба +1 (Рабы), -3 тыс.чел. убыль населения, «Ясырь», «Раболепие», «Мухтасибы»",
    "bonuses": "1+1(Тюрьма)",
    "cost": {
      "numeric": null,
      "display": ""
    },
    "income": {
      "numeric": 10.0,
      "display": "10"
    }
  },
  {
    "name": "Ипподром",
    "category": "культура и наука",
    "location": "Город",
    "resource": "все",
    "climate": "все",
    "conditions": "—",
    "input": "1 Кони",
    "base": "-10% к РВ в локации, «Скачки»",
    "bonuses": "5+40(Конюшня)",
    "cost": {
      "numeric": null,
      "display": ""
    },
    "income": {
      "numeric": 40.0,
      "display": "40"
    }
  },
  {
    "name": "Чайхана",
    "category": "культура и наука",
    "location": "Город",
    "resource": "все",
    "climate": "все",
    "conditions": "доступно народам Центра и Юга",
    "input": "1 Чай",
    "base": "+1% «Кальян», «Восточные сладости», «Кофейни»",
    "bonuses": "4+1(Бани)+1(Караван-сарай)",
    "cost": {
      "numeric": null,
      "display": ""
    },
    "income": {
      "numeric": 15.0,
      "display": "15"
    }
  },
  {
    "name": "Театр",
    "category": "культура и наука",
    "location": "Город",
    "resource": "все",
    "climate": "все",
    "conditions": "работает, если есть Книги",
    "input": "1 Книги (если нет Богемы)",
    "base": "+3%, +1 Артист, +1 Музыкант, +1 Поэт, «Романтизм», «Комедия дель Арте», «Опера», «Клавесин»",
    "bonuses": "3,5+1(Бордель)+1(Знать)",
    "cost": {
      "numeric": null,
      "display": ""
    },
    "income": {
      "numeric": 80.0,
      "display": "80"
    }
  },
  {
    "name": "Лаборатория",
    "category": "культура и наука",
    "location": "Город",
    "resource": "все",
    "climate": "все",
    "conditions": "доступно при Католичестве/Православии/Протестантизме и др.",
    "input": "1 Свинец",
    "base": "+1 н/о, +1 Золото (Алхимик), «Метафизика», «Химия»",
    "bonuses": "-2",
    "cost": {
      "numeric": null,
      "display": ""
    },
    "income": {
      "numeric": 33.0,
      "display": "33"
    }
  },
  {
    "name": "Библиотека",
    "category": "культура и наука",
    "location": "Город",
    "resource": "все",
    "climate": "все",
    "conditions": "может быть 1 в стране",
    "input": "1 Книги (если нет Учёного)",
    "base": "+1 н/о, «Литература»",
    "bonuses": "-1",
    "cost": {
      "numeric": null,
      "display": ""
    },
    "income": {
      "numeric": 65.0,
      "display": "65"
    }
  },
  {
    "name": "Университет",
    "category": "культура и наука",
    "location": "Провинция",
    "resource": "все",
    "climate": "Холмы",
    "conditions": "доступно странам с Исламом",
    "input": "1 Стекло",
    "base": "+3 н/о, +1 Юрист, +1 Историк, +1 Философ, +1 Храм, +1 Госпиталь, «Романтизм», «Микроскоп»",
    "bonuses": "-3",
    "cost": {
      "numeric": null,
      "display": ""
    },
    "income": {
      "numeric": 90.0,
      "display": "90"
    }
  },
  {
    "name": "Обсерватория",
    "category": "культура и наука",
    "location": "Город",
    "resource": "все",
    "climate": "все",
    "conditions": "работает до изучения «Книгопечатания»",
    "input": "1 Книги (если нет Священника/Учёного)",
    "base": "+2 н/о, +1 Астроном, «Астрономия», «Гороскопы»",
    "bonuses": "-3",
    "cost": {
      "numeric": null,
      "display": ""
    },
    "income": {
      "numeric": 100.0,
      "display": "100"
    }
  },
  {
    "name": "Медресе",
    "category": "культура и наука",
    "location": "Город",
    "resource": "все",
    "climate": "все",
    "conditions": "доступно странам с Исламом",
    "input": "1 Бумага",
    "base": "+2 н/о, +1 Медик, +1 Богослов, +1 Философ, +1 Мечеть, «Мюриды», «Улемы», «Микроскоп»",
    "bonuses": "-2",
    "cost": {
      "numeric": null,
      "display": ""
    },
    "income": {
      "numeric": 75.0,
      "display": "75"
    }
  },
  {
    "name": "Скрипторий",
    "category": "культура и наука",
    "location": "Город",
    "resource": "все",
    "climate": "все",
    "conditions": "доступен странам с «Многоженство»",
    "input": "2 Бумага + 1 Инструмент",
    "base": "1 Книги, «Каллиграфия»",
    "bonuses": "0",
    "cost": {
      "numeric": null,
      "display": ""
    },
    "income": {
      "numeric": 35.0,
      "display": "35"
    }
  },
  {
    "name": "Типография",
    "category": "культура и наука",
    "location": "Столица",
    "resource": "все",
    "climate": "все",
    "conditions": "доступно при ВП Свобода <0 и инн «Коррида»",
    "input": "1 Украшения",
    "base": "2 Книги, «Пресса», «Цензура», «Газета», «Подвижные литеры»",
    "bonuses": "3+1(Университет)",
    "cost": {
      "numeric": null,
      "display": ""
    },
    "income": {
      "numeric": 30.0,
      "display": "30"
    }
  },
  {
    "name": "Гарем",
    "category": "культура и наука",
    "location": "Город",
    "resource": "все",
    "climate": "все",
    "conditions": "—",
    "input": "1 Х/о",
    "base": "+1 о/пр, +1 «жена», «Евнухи», «Наложницы»",
    "bonuses": "-1+(-1 х ранг)",
    "cost": {
      "numeric": null,
      "display": ""
    },
    "income": {
      "numeric": 55.0,
      "display": "55"
    }
  },
  {
    "name": "Арена",
    "category": "культура и наука",
    "location": "Город",
    "resource": "все",
    "climate": "все",
    "conditions": "—",
    "input": "1 Звери",
    "base": "+7,5% к РВ в локации, «Состязание», «Травля зверей», «Бои животных», «Коррида»",
    "bonuses": "5+1(Зверинец)",
    "cost": {
      "numeric": null,
      "display": ""
    },
    "income": {
      "numeric": 35.0,
      "display": "35"
    }
  },
  {
    "name": "Зверинец",
    "category": "культура и наука",
    "location": "Город/Провинция",
    "resource": "все",
    "climate": "все",
    "conditions": "—",
    "input": "—",
    "base": "-5% к РВ в локации",
    "bonuses": "(Дворец)",
    "cost": {
      "numeric": null,
      "display": ""
    },
    "income": {
      "numeric": 15.0,
      "display": "15"
    }
  },
  {
    "name": "Дорога",
    "category": "инфраструктура",
    "location": "Город/Провинция",
    "resource": "все",
    "climate": "все",
    "conditions": "1 в стране, доступна народам Запада",
    "input": "1-3 Кони",
    "base": "+3% к эфф-сти Управления, +1 к макс. размеру локации, «Ямская служба», «Торговые караваны», «Гонцы»",
    "bonuses": "0",
    "cost": {
      "numeric": null,
      "display": ""
    },
    "income": {
      "numeric": 15.0,
      "display": "15"
    }
  },
  {
    "name": "Мощёная дорога",
    "category": "инфраструктура",
    "location": "Город",
    "resource": "все",
    "climate": "все",
    "conditions": "используемые тг>=3",
    "input": "2 Рабы",
    "base": "до +20% к эфф-сти Управления, +1 к макс. размеру локации, «Мостовая»",
    "bonuses": "-1",
    "cost": {
      "numeric": null,
      "display": ""
    },
    "income": {
      "numeric": 15.0,
      "display": "15"
    }
  },
  {
    "name": "Ирригация",
    "category": "инфраструктура",
    "location": "Провинция",
    "resource": "Жаркий/Знойный",
    "climate": "все",
    "conditions": "—",
    "input": "1 Лекарство",
    "base": "х2 пр-ва Бахчи, Плантации с Хлопком и Сахаром, +2 к макс. размеру локации, «Нория»",
    "bonuses": "0",
    "cost": {
      "numeric": null,
      "display": ""
    },
    "income": {
      "numeric": 100.0,
      "display": "100"
    }
  },
  {
    "name": "Колодец",
    "category": "инфраструктура",
    "location": "Провинция",
    "resource": "все",
    "climate": "все",
    "conditions": "—",
    "input": "1 Ткани",
    "base": "+2 к макс. размеру локации, +0,5 тыс.чел. прирост населения",
    "bonuses": "0",
    "cost": {
      "numeric": null,
      "display": ""
    },
    "income": {
      "numeric": 5.0,
      "display": "5"
    }
  },
  {
    "name": "Водопровод",
    "category": "инфраструктура",
    "location": "Город",
    "resource": "все",
    "climate": "все",
    "conditions": "—",
    "input": "1 Золото, 1 Серебро",
    "base": "+2 к макс. размеру локации, +15% к приросту населения",
    "bonuses": "-2",
    "cost": {
      "numeric": null,
      "display": ""
    },
    "income": {
      "numeric": 50.0,
      "display": "50"
    }
  },
  {
    "name": "Канализация",
    "category": "инфраструктура",
    "location": "Город",
    "resource": "все",
    "climate": "все",
    "conditions": "—",
    "input": "1 Волокно",
    "base": "+2 к макс. размеру локации, -5% к шансу Эпидемии",
    "bonuses": "-3",
    "cost": {
      "numeric": null,
      "display": ""
    },
    "income": {
      "numeric": 35.0,
      "display": "35"
    }
  },
  {
    "name": "Бани",
    "category": "инфраструктура",
    "location": "Город/Провинция",
    "resource": "все",
    "climate": "все",
    "conditions": "—",
    "input": "1 Древесина",
    "base": "+2 к макс. размеру локации, -1% к шансу Эпидемии, «Хамам»",
    "bonuses": "1,5+1(Мыловарня)",
    "cost": {
      "numeric": null,
      "display": ""
    },
    "income": {
      "numeric": 10.0,
      "display": "10"
    }
  },
  {
    "name": "Госпиталь",
    "category": "инфраструктура",
    "location": "Город/Провинция",
    "resource": "все",
    "climate": "все",
    "conditions": "—",
    "input": "1 Лекарство",
    "base": "нет ивентов «Трущебы», -3% к шансу Эпидемии, уменьшение боевых потерь, «Хирургия», «Анатомия», «богадельни»",
    "bonuses": "-2",
    "cost": {
      "numeric": null,
      "display": ""
    },
    "income": {
      "numeric": 20.0,
      "display": "20"
    }
  },
  {
    "name": "Амбар",
    "category": "инфраструктура",
    "location": "Город/Провинция",
    "resource": "все",
    "climate": "все",
    "conditions": "—",
    "input": "1 Ткани",
    "base": "-1-2 п/п к потребности Города, +2 к лимиту хранения, «Фортификация», «Нория», «Фундуки»",
    "bonuses": "1",
    "cost": {
      "numeric": null,
      "display": ""
    },
    "income": {
      "numeric": 15.0,
      "display": "15"
    }
  },
  {
    "name": "Банк",
    "category": "инфраструктура",
    "location": "Город",
    "resource": "все",
    "climate": "все",
    "conditions": "—",
    "input": "1 Золото, 1 Серебро",
    "base": "+1,5% х кэш (Серебро) + 3% х кэш (Золото), + к сумме внутр. займа, «депозит», «чеки», «Ломбард»",
    "bonuses": "% от кэша х2 (Евреи)",
    "cost": {
      "numeric": null,
      "display": ""
    },
    "income": {
      "numeric": 50.0,
      "display": "50"
    }
  },
  {
    "name": "Пристань",
    "category": "инфраструктура",
    "location": "Река/Море/Озеро",
    "resource": "все",
    "climate": "все",
    "conditions": "—",
    "input": "1 Волокно",
    "base": "2 п/п +1(Моржи) +1(Рыба) +1 ТНП",
    "bonuses": "0+1(Коптильня)",
    "cost": {
      "numeric": null,
      "display": ""
    },
    "income": {
      "numeric": 10.0,
      "display": "10"
    }
  },
  {
    "name": "Гавань",
    "category": "инфраструктура",
    "location": "Море",
    "resource": "Жемчуг/Янтарь",
    "climate": "все",
    "conditions": "—",
    "input": "1 Древесина",
    "base": "1 Др/камни, -25% затрат на логистику, до +25% эфф-сть Торговли, «Топчаковые краны»",
    "bonuses": "1+1(Амбар)",
    "cost": {
      "numeric": null,
      "display": ""
    },
    "income": {
      "numeric": 20.0,
      "display": "20"
    }
  },
  {
    "name": "Порт",
    "category": "инфраструктура",
    "location": "Город",
    "resource": "Море",
    "climate": "все",
    "conditions": "численность Флота >=2",
    "input": "1 Древесина",
    "base": "-30% к затратам на содержание Флота, +0,5 тыс.чел. прирост населения, +10 к лимиту хранения, «Торговые флотилии»",
    "bonuses": "1 х Размер Города +3 (Маяк)",
    "cost": {
      "numeric": null,
      "display": ""
    },
    "income": {
      "numeric": 50.0,
      "display": "50"
    }
  },
  {
    "name": "Маяк",
    "category": "инфраструктура",
    "location": "Провинция/Город",
    "resource": "Море",
    "climate": "все",
    "conditions": "—",
    "input": "1 Древесина",
    "base": "+1 к дальности размещения ТОР, «Оптика», «Лоцманы»",
    "bonuses": "0",
    "cost": {
      "numeric": null,
      "display": ""
    },
    "income": {
      "numeric": 25.0,
      "display": "25"
    }
  },
  {
    "name": "Капище",
    "category": "религия",
    "location": "Провинция/Город",
    "resource": "все",
    "climate": "все",
    "conditions": "доступно странам с Язычеством",
    "input": "1 Благовония (без 50% эфф-сть)",
    "base": "-3% к РВ в локации, +1 о/в, «Жертвоприношения»",
    "bonuses": "0",
    "cost": {
      "numeric": null,
      "display": ""
    },
    "income": {
      "numeric": 5.0,
      "display": "5"
    }
  },
  {
    "name": "Церковь",
    "category": "религия",
    "location": "Город/Провинция",
    "resource": "все",
    "climate": "все",
    "conditions": "доступно странам с Католичеством/Православием и др.",
    "input": "1 Благовония (без 50% эфф-сть)",
    "base": "-5% к РВ в локации, +1 о/в, «Простота ритуала», «Богослужение на родном языке», «Сусальное золото», «Запрет латыни»",
    "bonuses": "-1",
    "cost": {
      "numeric": null,
      "display": ""
    },
    "income": {
      "numeric": 15.0,
      "display": "15"
    }
  },
  {
    "name": "Храм",
    "category": "религия",
    "location": "Город",
    "resource": "все",
    "climate": "все",
    "conditions": "доступно странам с Католичеством/Православием/Иудаизмом",
    "input": "1 Алко (если нет Священника)",
    "base": "-10% РВ в локации, +3 о/в, «Акустика», «Простота ритуала», «Богослужение на родном языке», «Запрет латыни», «Хоровое пение», «Колокола»",
    "bonuses": "-2",
    "cost": {
      "numeric": null,
      "display": ""
    },
    "income": {
      "numeric": 50.0,
      "display": "50"
    }
  },
  {
    "name": "Монастырь",
    "category": "религия",
    "location": "Город/Провинция",
    "resource": "все",
    "climate": "все",
    "conditions": "доступно странам с Католичеством/Православием",
    "input": "1 Благовоние (без 50% эфф-сть)",
    "base": "2 н/о +1 Монах, +1% Благочестие, «Бенефиций», «Богослужение на родном языке»",
    "bonuses": "-2",
    "cost": {
      "numeric": null,
      "display": ""
    },
    "income": {
      "numeric": 45.0,
      "display": "45"
    }
  },
  {
    "name": "Мечеть",
    "category": "религия",
    "location": "Город/Провинция",
    "resource": "все",
    "climate": "все",
    "conditions": "доступно странам с Исламом и Исмаилитами",
    "input": "1 Алко (если нет Священника)",
    "base": "-7% к РВ в локации, +1,5 о/в, «Богослужение на родном языке», «Арабеска», «чётки», «Имамы»",
    "bonuses": "-2",
    "cost": {
      "numeric": null,
      "display": ""
    },
    "income": {
      "numeric": 20.0,
      "display": "20"
    }
  },
  {
    "name": "Святилище",
    "category": "религия",
    "location": "Город/Провинция",
    "resource": "все",
    "climate": "все",
    "conditions": "доступно странам с Иудаизмом и Зороастризмом",
    "input": "1 Благовоние (без 50% эфф-сть)",
    "base": "-5% к РВ в локации, +1,5 о/в, «Богослужение на родном языке»",
    "bonuses": "-1",
    "cost": {
      "numeric": null,
      "display": ""
    },
    "income": {
      "numeric": 15.0,
      "display": "15"
    }
  },
  {
    "name": "Мавзолей",
    "category": "религия",
    "location": "Город/Провинция",
    "resource": "все",
    "climate": "все",
    "conditions": "доступно странам с Суннизмом и Шиизмом",
    "input": "1 Алко (если нет Священника)",
    "base": "5 а/в, «Гробницы»",
    "bonuses": "0",
    "cost": {
      "numeric": null,
      "display": ""
    },
    "income": {
      "numeric": 100.0,
      "display": "100"
    }
  },
  {
    "name": "Курган",
    "category": "религия",
    "location": "Провинция",
    "resource": "все",
    "climate": "все",
    "conditions": "доступно странам с Язычеством и Тенгрианством",
    "input": "1 Благовоние (без 50% эфф-сть)",
    "base": "0,5 в/о, «Поминовение усопших»",
    "bonuses": "0",
    "cost": {
      "numeric": null,
      "display": ""
    },
    "income": {
      "numeric": 10.0,
      "display": "10"
    }
  },
  {
    "name": "Частокол",
    "category": "военные",
    "location": "Город/Провинция",
    "resource": "все",
    "climate": "все",
    "conditions": "доступно народам Центра и Юга, нужна Гончарная",
    "input": "1 Доспехи",
    "base": "160 локации, «Засечная черта», «Городища»",
    "bonuses": "-0.5",
    "cost": {
      "numeric": null,
      "display": ""
    },
    "income": {
      "numeric": 5.0,
      "display": "5"
    }
  },
  {
    "name": "Деревянная стена",
    "category": "военные",
    "location": "Город",
    "resource": "все",
    "climate": "все",
    "conditions": "доступно народам Запада, скандинавам и литовцам",
    "input": "3 п/п",
    "base": "3 60 локации, «Фортификация», «Городища»",
    "bonuses": "-1",
    "cost": {
      "numeric": null,
      "display": ""
    },
    "income": {
      "numeric": 15.0,
      "display": "15"
    }
  },
  {
    "name": "Глиняная стена",
    "category": "военные",
    "location": "Город",
    "resource": "все",
    "climate": "все",
    "conditions": "доступно народам Запада, скандинавам и литовцам",
    "input": "3 п/п",
    "base": "4,5 60 локации, «Рибат», «Бойницы»",
    "bonuses": "-1",
    "cost": {
      "numeric": null,
      "display": ""
    },
    "income": {
      "numeric": 20.0,
      "display": "20"
    }
  },
  {
    "name": "Каменная стена",
    "category": "военные",
    "location": "Город",
    "resource": "все",
    "climate": "все",
    "conditions": "можно строить в условиях войны",
    "input": "2 Алко",
    "base": "6 60 локации, «Фортификация», «Ров», «Бойницы», «Жидкий огонь», «Бастионы»",
    "bonuses": "-2",
    "cost": {
      "numeric": null,
      "display": ""
    },
    "income": {
      "numeric": 50.0,
      "display": "50"
    }
  },
  {
    "name": "Замок",
    "category": "военные",
    "location": "Город/Провинция",
    "resource": "все",
    "climate": "все",
    "conditions": "—",
    "input": "1 Доспехи",
    "base": "4 60 локации +2 (Остров), «Хранители замков», «Мотт», «Донжон», «Ров»",
    "bonuses": "-3",
    "cost": {
      "numeric": null,
      "display": ""
    },
    "income": {
      "numeric": 40.0,
      "display": "40"
    }
  },
  {
    "name": "Ристалище",
    "category": "военные",
    "location": "Город",
    "resource": "все",
    "climate": "все",
    "conditions": "—",
    "input": "3 п/п",
    "base": "+0,5 к силе ТК, +0,5 в/о, решение «Провести рыц. турнир»",
    "bonuses": "-1",
    "cost": {
      "numeric": null,
      "display": ""
    },
    "income": {
      "numeric": 35.0,
      "display": "35"
    }
  },
  {
    "name": "Лагерь",
    "category": "военные",
    "location": "Провинция",
    "resource": "все",
    "climate": "все",
    "conditions": "—",
    "input": "2 Алко",
    "base": "2 60 локации, 1 в/о, +3 к снабжению",
    "bonuses": "-2",
    "cost": {
      "numeric": null,
      "display": ""
    },
    "income": {
      "numeric": 20.0,
      "display": "20"
    }
  },
  {
    "name": "Казарма",
    "category": "военные",
    "location": "Город",
    "resource": "все",
    "climate": "все",
    "conditions": "—",
    "input": "1 Доспехи",
    "base": "-100% к снижению затрат на содержание Армии, 2 в/о",
    "bonuses": "0",
    "cost": {
      "numeric": null,
      "display": ""
    },
    "income": {
      "numeric": 20.0,
      "display": "20"
    }
  }
];

const CATEGORIES = {
    'с/х': {"emoji": "🌾", "label": "Сельское хозяйство"},
    'админ': {"emoji": "🏛️", "label": "Администрация"},
    'добыча': {"emoji": "⛏️", "label": "Добыча"},
    'ремесло': {"emoji": "🔨", "label": "Ремесло"},
    'торговля': {"emoji": "🏪", "label": "Торговля"},
    'культура и наука': {"emoji": "📚", "label": "Культура и наука"},
    'инфраструктура': {"emoji": "🏗️", "label": "Инфраструктура"},
    'религия': {"emoji": "⛪", "label": "Религия"},
    'военные': {"emoji": "⚔️", "label": "Военные"}
};


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
