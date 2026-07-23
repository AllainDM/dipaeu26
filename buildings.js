// auto-generated from dev/buildings.xlsx — не редактировать вручную
const BUILDINGS = [
  {
    "name": "Поле",
    "category": "с/х",
    "group": "Поле",
    "location": "Провинция",
    "resource": "нет",
    "climate": "все (за искл. Арктики)",
    "terrain": "все (за искл Степи и Пустыни (если в пустыни нет Реки/Озера или ресурса Зерно)",
    "conditions": "",
    "input": "",
    "base": "3 п/п +1(Тёплый/Умеренный) +2(Зерно) +1(Равнина) -1(Холодный/Экватор) -1(Леса) +5(Миср, Саид, Месопотамия)",
    "bonuses": "«Пойменное земледелие», «Тяжёлый плуг», «Трёхполье», «Подсевное земледелие», «Оброк», «Феллахи», «Хомут», «Коса»",
    "cost": {
      "numeric": 17.5,
      "display": "17.5"
    },
    "income": {
      "base": 1.0,
      "max": 1.0,
      "display": "1"
    }
  },
  {
    "name": "Поле",
    "category": "с/х",
    "group": "Поле",
    "location": "Провинция",
    "resource": "Лён",
    "climate": "все",
    "terrain": "все",
    "conditions": "",
    "input": "",
    "base": "1 Волокно +1(Леса)",
    "bonuses": "«Трёхполье», «Лён-долгунец», «Аренда земли», «Хомут», «Феллахи», «Коса»",
    "cost": {
      "numeric": 17.5,
      "display": "17.5"
    },
    "income": {
      "base": 1.0,
      "max": 1.0,
      "display": "1"
    }
  },
  {
    "name": "Пастбище",
    "category": "с/х",
    "group": "Пастбище",
    "location": "Провинция",
    "resource": "нет",
    "climate": "все",
    "terrain": "все",
    "conditions": "нет пр-ва при традиции «Вегетарианство»",
    "input": "",
    "base": "1 п/п +1(Овцы) +2(Лесные) +3(Скот) +1(Степь/Холмы) -1(Джунгли/Леса)",
    "bonuses": "дом Пастыри, Селенция, Аренда земли, Отгонное скотоводство",
    "cost": {
      "numeric": 10.0,
      "display": "10"
    },
    "income": {
      "base": 1.0,
      "max": 2.0,
      "display": "1+1(Овцы/Меринос)"
    }
  },
  {
    "name": "Пастбище",
    "category": "с/х",
    "group": "Пастбище",
    "location": "Провинция",
    "resource": "Кони",
    "climate": "все",
    "terrain": "все",
    "conditions": "",
    "input": "",
    "base": "1 Кони +1(Степь)",
    "bonuses": "дом Пастыри, Селенция, Аренда земли, Коневодство",
    "cost": {
      "numeric": 10.0,
      "display": "10"
    },
    "income": {
      "base": 1.0,
      "max": 2.0,
      "display": "1+1(Овцы/Меринос)"
    }
  },
  {
    "name": "Пастбище",
    "category": "с/х",
    "group": "Пастбище",
    "location": "Провинция",
    "resource": "Овцы",
    "climate": "все",
    "terrain": "все",
    "conditions": "",
    "input": "",
    "base": "1 Волокно +1(Степь/Холмы) -1(Джунгли/Леса)",
    "bonuses": "дом Пастыри, Селенция, Меринос, Огораживание, Аренда земли, Трёхполье, Стойловое содержание",
    "cost": {
      "numeric": 10.0,
      "display": "10"
    },
    "income": {
      "base": 1.0,
      "max": 2.0,
      "display": "1+1(Овцы/Меринос)"
    }
  },
  {
    "name": "Ферма",
    "category": "с/х",
    "group": "",
    "location": "Провинция",
    "resource": "нет",
    "climate": "все (за искл. Арктики)",
    "terrain": "все",
    "conditions": "Свобода>0, Поле+Пастбище в локации",
    "input": "1 Инструмент",
    "base": "3 п/п",
    "bonuses": "«Трёхполье», «Стойловое содержание», «Заготовка сена»",
    "cost": {
      "numeric": 30.0,
      "display": "30"
    },
    "income": {
      "base": 5.0,
      "max": 5.0,
      "display": "5"
    }
  },
  {
    "name": "Огород",
    "category": "с/х",
    "group": "",
    "location": "Провинция/Город",
    "resource": "нет",
    "climate": "все (за искл. Арктики)",
    "terrain": "все",
    "conditions": "",
    "input": "",
    "base": "1 п/п +1(Река/Озеро/Колодец) +1(Овощи)",
    "bonuses": "«Мелиорация», «Кяризы», «Аренда земли», «Феллахи»",
    "cost": {
      "numeric": 5.0,
      "display": "5"
    },
    "income": {
      "base": 0.0,
      "max": 0.0,
      "display": "0"
    }
  },
  {
    "name": "Свинарник",
    "category": "с/х",
    "group": "",
    "location": "Провинция/Город",
    "resource": "нет",
    "climate": "все",
    "terrain": "все",
    "conditions": "нет пр-ва при Исламе, Иудаизме; традиции \"Вегетарианство\"; Огород в локации",
    "input": "",
    "base": "4 п/п",
    "bonuses": "«Селекция», «Заготовка сена»",
    "cost": {
      "numeric": 25.0,
      "display": "25"
    },
    "income": {
      "base": 0.0,
      "max": 0.0,
      "display": "0"
    }
  },
  {
    "name": "Сад",
    "category": "с/х",
    "group": "",
    "location": "Провинция",
    "resource": "Фрукты/Оливки",
    "climate": "Теплый/Жаркий/Знойный",
    "terrain": "все",
    "conditions": "",
    "input": "",
    "base": "2 п/п + 1(Море)",
    "bonuses": "Удобрения, Наемный труд, Кяризы, Аренда земли",
    "cost": {
      "numeric": 30.0,
      "display": "30"
    },
    "income": {
      "base": 2.0,
      "max": 2.0,
      "display": "2"
    }
  },
  {
    "name": "Бахча",
    "category": "с/х",
    "group": "",
    "location": "Провинция",
    "resource": "нет",
    "climate": "Жаркий/Знойный",
    "terrain": "все",
    "conditions": "",
    "input": "",
    "base": "1 п/п + 1 (Фрукты/Овощи), х2 (Ирригация)",
    "bonuses": "Удобрения, Мелиорация, Кяризы, Феллахи",
    "cost": {
      "numeric": 15.0,
      "display": "15"
    },
    "income": {
      "base": 1.0,
      "max": 2.0,
      "display": "1+1 (Овощи/Фрукты)"
    }
  },
  {
    "name": "Пасека",
    "category": "с/х",
    "group": "",
    "location": "Провинция",
    "resource": "Воск",
    "climate": "все",
    "terrain": "все",
    "conditions": "",
    "input": "",
    "base": "1 п/п + 1 (Леса), 1 Сахар, 1 Алко",
    "bonuses": "«Пчеловодство», «Мёдоварение»",
    "cost": {
      "numeric": 10.0,
      "display": "10"
    },
    "income": {
      "base": 1.0,
      "max": 1.0,
      "display": "1"
    }
  },
  {
    "name": "Виноградник",
    "category": "с/х",
    "group": "",
    "location": "Провинция",
    "resource": "Виноград",
    "climate": "все (за искл. Холодного, Прохладного и Арктики)",
    "terrain": "все",
    "conditions": "",
    "input": "",
    "base": "1 п/п + 1 (Холмы), 1 Алко + 1 (Гончарная) + 1 (Монастырь) + 1 (Холмы)",
    "bonuses": "Пресс для вина, Винная бутылка, Виноделие, Ферментация вин",
    "cost": {
      "numeric": 30.0,
      "display": "30"
    },
    "income": {
      "base": 5.0,
      "max": 6.0,
      "display": "5+1 (Боч/артель)"
    }
  },
  {
    "name": "Мельница",
    "category": "с/х",
    "group": "",
    "location": "Провинция",
    "resource": "Зерно",
    "climate": "все",
    "terrain": "Река (до инн «Ветряные мельницы»)",
    "conditions": "не больше чем провинций с Зерном",
    "input": "",
    "base": "1 п/п («Водяное колесо» + Река) + 1 («Ветряные мельницы»)",
    "bonuses": "«Водяное колесо», «Ветряные мельницы», «Механизация труда»",
    "cost": {
      "numeric": 25.0,
      "display": "25"
    },
    "income": {
      "base": 2.0,
      "max": 2.0,
      "display": "2"
    }
  },
  {
    "name": "Маслобойня",
    "category": "с/х",
    "group": "",
    "location": "Провинция",
    "resource": "Оливки/Лён/Скот + инновация «Сливочное масло»",
    "climate": "все",
    "terrain": "все",
    "conditions": "",
    "input": "1 Инструмент",
    "base": "4 п/п",
    "bonuses": "",
    "cost": {
      "numeric": 20.0,
      "display": "20"
    },
    "income": {
      "base": 3.0,
      "max": 3.0,
      "display": "3"
    }
  },
  {
    "name": "Конюшня",
    "category": "с/х",
    "group": "",
    "location": "Город",
    "resource": "нет",
    "climate": "все",
    "terrain": "все",
    "conditions": "не больше чем Шор/артелей",
    "input": "",
    "base": "1 Кони",
    "bonuses": "«Коневодство», «Селекция»",
    "cost": {
      "numeric": 30.0,
      "display": "30"
    },
    "income": {
      "base": 2.0,
      "max": 2.0,
      "display": "2"
    }
  },
  {
    "name": "Плантация",
    "category": "с/х",
    "group": "Плантация",
    "location": "Провинция",
    "resource": "Благовония",
    "climate": "Тёплый/Жаркий/Знойный/Экватор",
    "terrain": "Степь/Пустыня/Холмы",
    "conditions": "",
    "input": "1 Рабы",
    "base": "3 Благовония +1(Холмы + «Террасное земледелие»)",
    "bonuses": "«Террасное земледелие»",
    "cost": {
      "numeric": 35.0,
      "display": "35"
    },
    "income": {
      "base": 0.0,
      "max": 0.0,
      "display": "0"
    }
  },
  {
    "name": "Плантация",
    "category": "с/х",
    "group": "Плантация",
    "location": "Провинция",
    "resource": "Пряности",
    "climate": "Жаркий/Знойный/Экватор",
    "terrain": "Холмы/Пустыня/Джунгли(x3)",
    "conditions": "",
    "input": "1 Рабы",
    "base": "1 Пряности +1(Холмы + «Террасное земледелие») +1(Прованс)",
    "bonuses": "«Террасное земледелие»",
    "cost": {
      "numeric": 35.0,
      "display": "35"
    },
    "income": {
      "base": 0.0,
      "max": 0.0,
      "display": "0"
    }
  },
  {
    "name": "Плантация",
    "category": "с/х",
    "group": "Плантация",
    "location": "Провинция",
    "resource": "Фрукты",
    "climate": "Экватор/Жаркий/Знойный",
    "terrain": "Равнина/Джунгли/Болото(50%)",
    "conditions": "",
    "input": "1 Рабы",
    "base": "4 п/п + 1 (Холмы + «Террасное земледелие»)",
    "bonuses": "«Террасное земледелие»",
    "cost": {
      "numeric": 35.0,
      "display": "35"
    },
    "income": {
      "base": 0.0,
      "max": 0.0,
      "display": "0"
    }
  },
  {
    "name": "Плантация",
    "category": "с/х",
    "group": "Плантация",
    "location": "Провинция",
    "resource": "Сахар",
    "climate": "Жаркий/Знойный/Экватор",
    "terrain": "Джунгли/Холмы/Болото",
    "conditions": "",
    "input": "1 Рабы",
    "base": "2 Сахар +1(Холмы + «Террасное земледелие»), х2 (Ирригация)",
    "bonuses": "Сахарная мельница, Террасное земледелие",
    "cost": {
      "numeric": 35.0,
      "display": "35"
    },
    "income": {
      "base": 0.0,
      "max": 0.0,
      "display": "0"
    }
  },
  {
    "name": "Плантация",
    "category": "с/х",
    "group": "Плантация",
    "location": "Провинция",
    "resource": "Хлопок",
    "climate": "Жаркий/Знойный",
    "terrain": "Пустыня/Равнина",
    "conditions": "",
    "input": "1 Рабы",
    "base": "4 Волокно * 2 (Ирригация)",
    "bonuses": "Прялка",
    "cost": {
      "numeric": 35.0,
      "display": "35"
    },
    "income": {
      "base": 0.0,
      "max": 0.0,
      "display": "0"
    }
  },
  {
    "name": "Прядильня",
    "category": "с/х",
    "group": "Прядильня",
    "location": "Провинция",
    "resource": "",
    "climate": "",
    "terrain": "",
    "conditions": "",
    "input": "",
    "base": "",
    "bonuses": "",
    "cost": {
      "numeric": 26.0,
      "display": "26"
    },
    "income": {
      "base": null,
      "max": null,
      "display": ""
    }
  },
  {
    "name": "Шёлк",
    "category": "с/х",
    "group": "Прядильня",
    "location": "Провинция",
    "resource": "Шёлк",
    "climate": "Жаркий",
    "terrain": "Леса",
    "conditions": "",
    "input": "1 Краски",
    "base": "2 Шёлк",
    "bonuses": "",
    "cost": {
      "numeric": 26.0,
      "display": "26"
    },
    "income": {
      "base": null,
      "max": null,
      "display": ""
    }
  },
  {
    "name": "Конопля",
    "category": "с/х",
    "group": "Прядильня",
    "location": "Провинция",
    "resource": "Конопля",
    "climate": "все",
    "terrain": "",
    "conditions": "инн «Пенька»",
    "input": "",
    "base": "2 Волокно",
    "bonuses": "",
    "cost": {
      "numeric": 26.0,
      "display": "26"
    },
    "income": {
      "base": null,
      "max": null,
      "display": ""
    }
  },
  {
    "name": "Чертог",
    "category": "админ",
    "group": "",
    "location": "Провинция",
    "resource": "нет",
    "climate": "все",
    "terrain": "все",
    "conditions": "Язычество",
    "input": "1 Х/о + 1 Алко",
    "base": "2 о/пр; 1 БО Локации",
    "bonuses": "",
    "cost": {
      "numeric": 25.0,
      "display": "25"
    },
    "income": {
      "base": 0.0,
      "max": 0.0,
      "display": "0"
    }
  },
  {
    "name": "Суд",
    "category": "админ",
    "group": "",
    "location": "Город",
    "resource": "нет",
    "climate": "все",
    "terrain": "все",
    "conditions": "",
    "input": "1 Бумага",
    "base": "-1% к Коррупции",
    "bonuses": "«Кровная месть», «Судебная система», «Прокуратура», «Инквизиция»",
    "cost": {
      "numeric": 30.0,
      "display": "30"
    },
    "income": {
      "base": -1.0,
      "max": -1.0,
      "display": "-1"
    }
  },
  {
    "name": "Канцелярия",
    "category": "админ",
    "group": "",
    "location": "Город",
    "resource": "нет",
    "climate": "все",
    "terrain": "все",
    "conditions": "ранг страны >=3, 1 на страну",
    "input": "1 Бумага",
    "base": "+10% к сбору налогов",
    "bonuses": "«Чернила», «Гос. служба», «Архивное дело», «Логофеты»",
    "cost": {
      "numeric": 35.0,
      "display": "35"
    },
    "income": {
      "base": -3.0,
      "max": -3.0,
      "display": "-3"
    }
  },
  {
    "name": "Тюрьма",
    "category": "админ",
    "group": "",
    "location": "Город/Провинция",
    "resource": "нет",
    "climate": "все",
    "terrain": "все",
    "conditions": "",
    "input": "1 Железо",
    "base": "-1% к Преступности",
    "bonuses": "«Орудия пыток»",
    "cost": {
      "numeric": 50.0,
      "display": "50"
    },
    "income": {
      "base": -2.0,
      "max": -2.0,
      "display": "-2"
    }
  },
  {
    "name": "Таможня",
    "category": "админ",
    "group": "",
    "location": "Город",
    "resource": "нет",
    "climate": "все",
    "terrain": "все",
    "conditions": "1 на страну",
    "input": "1 Бумага",
    "base": "+5% к таможенному сбору",
    "bonuses": "Царина, Монополия на экспорт",
    "cost": {
      "numeric": 30.0,
      "display": "30"
    },
    "income": {
      "base": -1.0,
      "max": -1.0,
      "display": "-1"
    }
  },
  {
    "name": "Монет/двор",
    "category": "админ",
    "group": "",
    "location": "Столица",
    "resource": "нет",
    "climate": "все",
    "terrain": "все",
    "conditions": "ранг страны >=2, 1 на страну",
    "input": "1 Золото или 1 Серебро или 1 Медь",
    "base": "возможность проводить эмиссию",
    "bonuses": "Государственная казна",
    "cost": {
      "numeric": 40.0,
      "display": "40"
    },
    "income": {
      "base": 0.0,
      "max": 0.0,
      "display": "0, эмиссия при решении игрока"
    }
  },
  {
    "name": "Дворец",
    "category": "админ",
    "group": "",
    "location": "Город/Провинция",
    "resource": "нет",
    "climate": "все",
    "terrain": "все",
    "conditions": "",
    "input": "1 Украшения",
    "base": "+2% к Лояльности (за каждый Дворец), +1 к лимиту Управления (за 1 Дворец)",
    "bonuses": "«Фонтаны»",
    "cost": {
      "numeric": 100.0,
      "display": "100"
    },
    "income": {
      "base": -5.0,
      "max": -5.0,
      "display": "-5"
    }
  },
  {
    "name": "Рудник",
    "category": "добыча",
    "group": "Рудник",
    "location": "Провинция",
    "resource": "Золото",
    "climate": "все с соотв. ресурсом, в т.ч. Болото (Ж/руда)",
    "terrain": "",
    "conditions": "",
    "input": "1 Инструмент",
    "base": "2 Золото",
    "bonuses": "«Маркшейдеры», «Амальгамация», «Горное дело», «Тяга», «Водяные насосы»",
    "cost": {
      "numeric": null,
      "display": ""
    },
    "income": {
      "base": null,
      "max": null,
      "display": ""
    }
  },
  {
    "name": "Рудник",
    "category": "добыча",
    "group": "Рудник",
    "location": "Провинция",
    "resource": "Серебро",
    "climate": "все с соотв. ресурсом, в т.ч. Болото (Ж/руда)",
    "terrain": "",
    "conditions": "",
    "input": "1 Инструмент",
    "base": "2 Серебро",
    "bonuses": "«Маркшейдеры», «Амальгамация», «Горное дело», «Тяга», «Водяные насосы»",
    "cost": {
      "numeric": null,
      "display": ""
    },
    "income": {
      "base": null,
      "max": null,
      "display": ""
    }
  },
  {
    "name": "Рудник",
    "category": "добыча",
    "group": "Рудник",
    "location": "Провинция",
    "resource": "Железо",
    "climate": "все с соотв. ресурсом, в т.ч. Болото (Ж/руда)",
    "terrain": "",
    "conditions": "",
    "input": "1 Инструмент",
    "base": "4 Жел/руда +1(Железо) -2(Болото)",
    "bonuses": "«Маркшейдеры», «Амальгамация», «Горное дело», «Тяга», «Водяные насосы»",
    "cost": {
      "numeric": null,
      "display": ""
    },
    "income": {
      "base": null,
      "max": null,
      "display": ""
    }
  },
  {
    "name": "Рудник",
    "category": "добыча",
    "group": "Рудник",
    "location": "Провинция",
    "resource": "Медь",
    "climate": "все с соотв. ресурсом, в т.ч. Болото (Ж/руда)",
    "terrain": "",
    "conditions": "",
    "input": "1 Инструмент",
    "base": "3 Мед/руда",
    "bonuses": "«Маркшейдеры», «Амальгамация», «Горное дело», «Тяга», «Водяные насосы»",
    "cost": {
      "numeric": null,
      "display": ""
    },
    "income": {
      "base": null,
      "max": null,
      "display": ""
    }
  },
  {
    "name": "Рудник",
    "category": "добыча",
    "group": "Рудник",
    "location": "Провинция",
    "resource": "Др/камни",
    "climate": "все с соотв. ресурсом, в т.ч. Болото (Ж/руда)",
    "terrain": "",
    "conditions": "",
    "input": "1 Инструмент",
    "base": "1 Др/камни",
    "bonuses": "«Маркшейдеры», «Амальгамация», «Горное дело», «Тяга», «Водяные насосы»",
    "cost": {
      "numeric": null,
      "display": ""
    },
    "income": {
      "base": null,
      "max": null,
      "display": ""
    }
  },
  {
    "name": "Рудник",
    "category": "добыча",
    "group": "Рудник",
    "location": "Провинция",
    "resource": "Свинец",
    "climate": "все с соотв. ресурсом, в т.ч. Болото (Ж/руда)",
    "terrain": "",
    "conditions": "",
    "input": "1 Инструмент",
    "base": "2 Свинец",
    "bonuses": "«Маркшейдеры», «Амальгамация», «Горное дело», «Тяга», «Водяные насосы»",
    "cost": {
      "numeric": null,
      "display": ""
    },
    "income": {
      "base": null,
      "max": null,
      "display": ""
    }
  },
  {
    "name": "Шахта",
    "category": "добыча",
    "group": "Шахта",
    "location": "Провинция",
    "resource": "",
    "climate": "",
    "terrain": "",
    "conditions": "",
    "input": "1 Рабы/1 Инструмент",
    "base": "",
    "bonuses": "",
    "cost": {
      "numeric": 30.0,
      "display": "30"
    },
    "income": {
      "base": 1.0,
      "max": 2.0,
      "display": "1+1(Дорога)"
    }
  },
  {
    "name": "Соль",
    "category": "добыча",
    "group": "Шахта",
    "location": "Провинция",
    "resource": "Соль",
    "climate": "все",
    "terrain": "",
    "conditions": "",
    "input": "1 Рабы/1 Инструмент",
    "base": "3 Соль",
    "bonuses": "",
    "cost": {
      "numeric": 30.0,
      "display": "30"
    },
    "income": {
      "base": 1.0,
      "max": 2.0,
      "display": "1+1(Дорога)"
    }
  },
  {
    "name": "Селитра",
    "category": "добыча",
    "group": "Шахта",
    "location": "Провинция",
    "resource": "Селитра",
    "climate": "все",
    "terrain": "",
    "conditions": "",
    "input": "1 Рабы/1 Инструмент",
    "base": "3 Селитра",
    "bonuses": "",
    "cost": {
      "numeric": 30.0,
      "display": "30"
    },
    "income": {
      "base": 1.0,
      "max": 2.0,
      "display": "1+1(Дорога)"
    }
  },
  {
    "name": "Уголь",
    "category": "добыча",
    "group": "Шахта",
    "location": "Провинция",
    "resource": "Уголь",
    "climate": "все",
    "terrain": "",
    "conditions": "",
    "input": "1 Рабы/1 Инструмент",
    "base": "4,5 Уголь",
    "bonuses": "",
    "cost": {
      "numeric": 30.0,
      "display": "30"
    },
    "income": {
      "base": 1.0,
      "max": 2.0,
      "display": "1+1(Дорога)"
    }
  },
  {
    "name": "Лесорубка",
    "category": "добыча",
    "group": "",
    "location": "Провинция",
    "resource": "нет",
    "climate": "все",
    "terrain": "все",
    "conditions": "",
    "input": "",
    "base": "6 древесина -2 (Джунгли) -4 (иной ландшафт)",
    "bonuses": "«Пила»",
    "cost": {
      "numeric": 5.0,
      "display": "5"
    },
    "income": {
      "base": 0.0,
      "max": 2.0,
      "display": "0 + 2 (тех. Водяное колесо + Река)"
    }
  },
  {
    "name": "Углежогня",
    "category": "добыча",
    "group": "",
    "location": "Провинция",
    "resource": "нет",
    "climate": "все",
    "terrain": "Леса/Джунгли",
    "conditions": "",
    "input": "3 Древесина",
    "base": "2 Уголь - 1 (Джунгли)",
    "bonuses": "«Угольная печь», «Чугун»",
    "cost": {
      "numeric": 15.0,
      "display": "15"
    },
    "income": {
      "base": 0.0,
      "max": 0.0,
      "display": "0"
    }
  },
  {
    "name": "Смолокурня",
    "category": "добыча",
    "group": "",
    "location": "Провинция",
    "resource": "нет",
    "climate": "все",
    "terrain": "Леса/Джунгли",
    "conditions": "—",
    "input": "1 Древесина",
    "base": "1 Смола",
    "bonuses": "—",
    "cost": {
      "numeric": 10.0,
      "display": "10"
    },
    "income": {
      "base": 1.0,
      "max": 1.0,
      "display": "1"
    }
  },
  {
    "name": "Каменоломня",
    "category": "добыча",
    "group": "Каменоломня",
    "location": "Провинция",
    "resource": "нет",
    "climate": "все",
    "terrain": "все",
    "conditions": "",
    "input": "1 Рабы (Свобода<0) / 1 Инструмент (Свобода>0)",
    "base": "4 Камень — 1 (Пустыня) — 2 (иной ландшафт)",
    "bonuses": "Горное дело",
    "cost": {
      "numeric": 15.0,
      "display": "15"
    },
    "income": {
      "base": 1.5,
      "max": 2.5,
      "display": "1,5+1 (Мрамор)"
    }
  },
  {
    "name": "Каменоломня",
    "category": "добыча",
    "group": "Каменоломня",
    "location": "Провинция",
    "resource": "Мрамор",
    "climate": "все",
    "terrain": "все",
    "conditions": "",
    "input": "1 Рабы (Свобода<0) / 1 Инструмент (Свобода>0)",
    "base": "2 Мрамор",
    "bonuses": "Горное дело",
    "cost": {
      "numeric": 15.0,
      "display": "15"
    },
    "income": {
      "base": 1.5,
      "max": 2.5,
      "display": "1,5+1 (Мрамор)"
    }
  },
  {
    "name": "Солеварня",
    "category": "добыча",
    "group": "",
    "location": "Провинция",
    "resource": "нет",
    "climate": "все",
    "terrain": "Море",
    "conditions": "",
    "input": "2 Древесина",
    "base": "1 Соль",
    "bonuses": "",
    "cost": {
      "numeric": 20.0,
      "display": "20"
    },
    "income": {
      "base": 1.0,
      "max": 1.0,
      "display": "1"
    }
  },
  {
    "name": "Селитряница",
    "category": "добыча",
    "group": "",
    "location": "Провинция/Город",
    "resource": "Скот/Свинарник/Канализация",
    "climate": "все",
    "terrain": "все",
    "conditions": "нужна либо провинция со Скотом, либо Свинарник/Канализация",
    "input": "",
    "base": "1 Селитра",
    "bonuses": "Порох",
    "cost": {
      "numeric": 10.0,
      "display": "10"
    },
    "income": {
      "base": 0.0,
      "max": 0.0,
      "display": "0"
    }
  },
  {
    "name": "Бивак",
    "category": "добыча",
    "group": "Бивак",
    "location": "Провинция",
    "resource": "Звери, Слоны",
    "climate": "все",
    "terrain": "все",
    "conditions": "",
    "input": "",
    "base": "1 Звери + 1 ТНП (Слоны)",
    "bonuses": "Травля зверей",
    "cost": {
      "numeric": 5.0,
      "display": "5"
    },
    "income": {
      "base": 0.0,
      "max": 0.0,
      "display": "0"
    }
  },
  {
    "name": "Бивак",
    "category": "добыча",
    "group": "Бивак",
    "location": "Провинция",
    "resource": "Верблюды",
    "climate": "все",
    "terrain": "все",
    "conditions": "",
    "input": "",
    "base": "1 Кони, 1 Волокно",
    "bonuses": "Травля зверей",
    "cost": {
      "numeric": 5.0,
      "display": "5"
    },
    "income": {
      "base": 0.0,
      "max": 0.0,
      "display": "0"
    }
  },
  {
    "name": "Угодье",
    "category": "добыча",
    "group": "Угодье",
    "location": "Провинция",
    "resource": "нет",
    "climate": "все",
    "terrain": "Леса / Степь / Болото / Джунгли",
    "conditions": "нет пр-ва при традиции «Вегетарианство»",
    "input": "",
    "base": "2 п/п * 2 (Дичь)",
    "bonuses": "Охота, Травля зверей, Огнестрельное оружие",
    "cost": {
      "numeric": 7.5,
      "display": "7.5"
    },
    "income": {
      "base": 1.0,
      "max": 2.0,
      "display": "1 + 1 (Меха)"
    }
  },
  {
    "name": "Угодье",
    "category": "добыча",
    "group": "Угодье",
    "location": "Провинция",
    "resource": "Мех",
    "climate": "все",
    "terrain": "Леса / Степь / Болото / Джунгли",
    "conditions": "нет пр-ва при традиции «Вегетарианство»",
    "input": "",
    "base": "1 Меха + 1 (Финно-угры)",
    "bonuses": "Охота, Травля зверей, Огнестрельное оружие",
    "cost": {
      "numeric": 7.5,
      "display": "7.5"
    },
    "income": {
      "base": 1.0,
      "max": 2.0,
      "display": "1 + 1 (Меха)"
    }
  },
  {
    "name": "Гончарная",
    "category": "ремесло",
    "group": "",
    "location": "Город/Провинция",
    "resource": "все",
    "climate": "Река/Озеро",
    "terrain": "",
    "conditions": "",
    "input": "1 Древесина",
    "base": "2 ТНП, 2 Камень",
    "bonuses": "«Кирпич», «Глазурь», «Фаянс»",
    "cost": {
      "numeric": 12.5,
      "display": "12.5"
    },
    "income": {
      "base": 1.0,
      "max": 1.0,
      "display": "1"
    }
  },
  {
    "name": "Красильня",
    "category": "ремесло",
    "group": "",
    "location": "Город/Провинция",
    "resource": "все",
    "climate": "все",
    "terrain": "",
    "conditions": "",
    "input": "",
    "base": "0 Краски +2 (Краситель)",
    "bonuses": "«Шафран», «Киноварь», «Охра»",
    "cost": {
      "numeric": 15.0,
      "display": "15"
    },
    "income": {
      "base": 3.0,
      "max": 3.0,
      "display": "3"
    }
  },
  {
    "name": "Пекарня",
    "category": "ремесло",
    "group": "",
    "location": "Город",
    "resource": "нет",
    "climate": "все",
    "terrain": "все",
    "conditions": "не больше 2 Пекарен на 1 Мельницу",
    "input": "1 древесина, 1 сахар",
    "base": "3 п/п + 2 (Сахар*)",
    "bonuses": "",
    "cost": {
      "numeric": 15.0,
      "display": "15"
    },
    "income": {
      "base": 1.0,
      "max": 3.0,
      "display": "1+2(Сахар*)"
    }
  },
  {
    "name": "Пивоварня",
    "category": "ремесло",
    "group": "",
    "location": "Город/Провинция",
    "resource": "нет",
    "climate": "все",
    "terrain": "все",
    "conditions": "нет пр-ва при Исламе, не больше чем провинций с Зерном и Рисом",
    "input": "",
    "base": "2 Алко + 1 (инн «Эль» + Леса)",
    "bonuses": "Хмель",
    "cost": {
      "numeric": 15.0,
      "display": "15"
    },
    "income": {
      "base": 2.0,
      "max": 4.0,
      "display": "2+1 (Боч/артель) +1 (инн Эль + Леса)"
    }
  },
  {
    "name": "Винокурня",
    "category": "ремесло",
    "group": "",
    "location": "Провинция",
    "resource": "Зерно / Овощи / Фрукты",
    "climate": "все",
    "terrain": "все",
    "conditions": "нет пр-ва при Исламе",
    "input": "2 Сахар + Стекло",
    "base": "5 Алко",
    "bonuses": "«Водка», «Ракия»",
    "cost": {
      "numeric": 35.0,
      "display": "35"
    },
    "income": {
      "base": 3.0,
      "max": 3.0,
      "display": "3"
    }
  },
  {
    "name": "Свеч/артель",
    "category": "ремесло",
    "group": "",
    "location": "Провинция",
    "resource": "Воск",
    "climate": "все",
    "terrain": "все",
    "conditions": "",
    "input": "",
    "base": "1 Благовония",
    "bonuses": "«Гильдии»",
    "cost": {
      "numeric": 10.0,
      "display": "10"
    },
    "income": {
      "base": 1.0,
      "max": 1.0,
      "display": "1"
    }
  },
  {
    "name": "Бум/артель",
    "category": "ремесло",
    "group": "",
    "location": "Город",
    "resource": "нет",
    "climate": "все",
    "terrain": "все",
    "conditions": "",
    "input": "4 Волокно",
    "base": "3 Бумага",
    "bonuses": "«Гербовая бумага», «Водяное колесо», «Механизация труда», «Гильдии»",
    "cost": {
      "numeric": 30.0,
      "display": "30"
    },
    "income": {
      "base": 3.0,
      "max": 3.0,
      "display": "3"
    }
  },
  {
    "name": "Перг/артель",
    "category": "ремесло",
    "group": "",
    "location": "Город",
    "resource": "нет",
    "climate": "все",
    "terrain": "все",
    "conditions": "",
    "input": "1 Кожа",
    "base": "1 Бумага",
    "bonuses": "«Золение», «Велен»",
    "cost": {
      "numeric": 20.0,
      "display": "20"
    },
    "income": {
      "base": 2.0,
      "max": 2.0,
      "display": "2"
    }
  },
  {
    "name": "Дубильня",
    "category": "ремесло",
    "group": "",
    "location": "Провинция/Город",
    "resource": "Скот/Меха/Звери/Свинарник",
    "climate": "все",
    "terrain": "все",
    "conditions": "нужна либо провинция со Скотом/Мехом/Зверьми, либо Свинарник",
    "input": "1 Соль",
    "base": "3 Кожа",
    "bonuses": "«Сафьян», «Юфть», «Замша»",
    "cost": {
      "numeric": 20.0,
      "display": "20"
    },
    "income": {
      "base": 0.0,
      "max": 0.0,
      "display": "0"
    }
  },
  {
    "name": "Верфь",
    "category": "ремесло",
    "group": "",
    "location": "Город",
    "resource": "нет",
    "climate": "все",
    "terrain": "все",
    "conditions": "",
    "input": "1 Волокно, 1 Смола",
    "base": "1 КОР + 1 (Смола*) + 1 (Пуш/двор) [показывает, сколько ед. кораблей — ТОР, ЛС, ТС — может быть построено за 1 ход)",
    "bonuses": "«Сухой док», «Клинкер», «Адмиралтейство», «Ветряная пилорама»",
    "cost": {
      "numeric": 50.0,
      "display": "50"
    },
    "income": {
      "base": 1.0,
      "max": 1.0,
      "display": "1"
    }
  },
  {
    "name": "Ткац/артель",
    "category": "ремесло",
    "group": "",
    "location": "Город/Провинция",
    "resource": "нет",
    "climate": "все",
    "terrain": "все",
    "conditions": "",
    "input": "2 Волокно",
    "base": "1 Ткани",
    "bonuses": "«Ткацкий станок», «Гильдии», «Муслин», «Тартан», «Вадмаль», «Свитер»",
    "cost": {
      "numeric": 12.5,
      "display": "12.5"
    },
    "income": {
      "base": 1.0,
      "max": 1.0,
      "display": "1"
    }
  },
  {
    "name": "Мануфактура",
    "category": "ремесло",
    "group": "",
    "location": "Город",
    "resource": "нет",
    "climate": "все",
    "terrain": "все",
    "conditions": "",
    "input": "3 Волокно + 1 Краски",
    "base": "6 Ткани",
    "bonuses": "«Экономика», «Разделение труда», «Цеховые привилегии»",
    "cost": {
      "numeric": 50.0,
      "display": "50"
    },
    "income": {
      "base": 2.0,
      "max": 2.0,
      "display": "2"
    }
  },
  {
    "name": "Сукновальня",
    "category": "ремесло",
    "group": "",
    "location": "Город/Провинция",
    "resource": "нет",
    "climate": "все",
    "terrain": "все",
    "conditions": "",
    "input": "2 Волокно",
    "base": "2 ТНП",
    "bonuses": "«Валенки», «Водяное колесо», «Войлок»",
    "cost": {
      "numeric": 20.0,
      "display": "20"
    },
    "income": {
      "base": 2.0,
      "max": 2.0,
      "display": "2"
    }
  },
  {
    "name": "Ковр/двор",
    "category": "ремесло",
    "group": "",
    "location": "Город",
    "resource": "нет",
    "climate": "все",
    "terrain": "все",
    "conditions": "",
    "input": "3 Волокно + 1 Краски",
    "base": "1 Украшения",
    "bonuses": "«Арабеска»",
    "cost": {
      "numeric": 30.0,
      "display": "30"
    },
    "income": {
      "base": 3.0,
      "max": 3.0,
      "display": "3"
    }
  },
  {
    "name": "Коптильня",
    "category": "ремесло",
    "group": "",
    "location": "Провинция/Город",
    "resource": "нет",
    "climate": "все",
    "terrain": "все",
    "conditions": "не больше чем провинций и м/з с Рыбой",
    "input": "Соль + 1 Древесина",
    "base": "4 п/п + 1 (Боч/артель)",
    "bonuses": "",
    "cost": {
      "numeric": 15.0,
      "display": "15"
    },
    "income": {
      "base": 3.0,
      "max": 3.0,
      "display": "3"
    }
  },
  {
    "name": "Колб/цех",
    "category": "ремесло",
    "group": "",
    "location": "Город",
    "resource": "нет",
    "climate": "все",
    "terrain": "все",
    "conditions": "нет пр-ва при «Вегетарианство», не больше чем Свинарников",
    "input": "1 Соль + 1 Пряности",
    "base": "7 п/п",
    "bonuses": "«Кровяная колбаса»",
    "cost": {
      "numeric": 30.0,
      "display": "30"
    },
    "income": {
      "base": 5.0,
      "max": 5.0,
      "display": "5"
    }
  },
  {
    "name": "Сыроварня",
    "category": "ремесло",
    "group": "",
    "location": "Город",
    "resource": "нет",
    "climate": "все",
    "terrain": "все",
    "conditions": "не больше чем локаций с Овцами и Скотом",
    "input": "1 Соль",
    "base": "3 п/п",
    "bonuses": "«Элитное сыроварение»",
    "cost": {
      "numeric": 17.5,
      "display": "17.5"
    },
    "income": {
      "base": 4.0,
      "max": 4.0,
      "display": "4"
    }
  },
  {
    "name": "Юв/артель",
    "category": "ремесло",
    "group": "",
    "location": "Город",
    "resource": "нет",
    "climate": "все",
    "terrain": "все",
    "conditions": "",
    "input": "1 Золото / 1 Серебро / 1 Др.камни",
    "base": "1 Украшения (Серебро*) + 1 (Золото*) + 2 (Др/камни*)",
    "bonuses": "«Бусы», «Гильдии», «Огранка»",
    "cost": {
      "numeric": 20.0,
      "display": "20"
    },
    "income": {
      "base": 4.0,
      "max": 5.0,
      "display": "4+1 (Евреи)"
    }
  },
  {
    "name": "Шор/артель",
    "category": "ремесло",
    "group": "",
    "location": "Провинция",
    "resource": "нет",
    "climate": "все",
    "terrain": "все",
    "conditions": "",
    "input": "1 Древесина + 1 Кожа",
    "base": "2 ТНП",
    "bonuses": "«Гильдии», «Дилижансы», «Производство сбруи», «Коя»",
    "cost": {
      "numeric": 20.0,
      "display": "20"
    },
    "income": {
      "base": 1.0,
      "max": 1.0,
      "display": "1"
    }
  },
  {
    "name": "Стек/артель",
    "category": "ремесло",
    "group": "",
    "location": "Город/Провинция",
    "resource": "нет",
    "climate": "все",
    "terrain": "Пустыня/Равнина",
    "conditions": "работает только в Пустыне и в Городе",
    "input": "1 Соль + 1 Уголь",
    "base": "2 Стекло",
    "bonuses": "«Хрусталь», «Гильдии», «Оптика»",
    "cost": {
      "numeric": 35.0,
      "display": "35"
    },
    "income": {
      "base": 2.0,
      "max": 2.0,
      "display": "2"
    }
  },
  {
    "name": "Мыловарня",
    "category": "ремесло",
    "group": "",
    "location": "Провинция",
    "resource": "Оливки/Скот",
    "climate": "все",
    "terrain": "все",
    "conditions": "",
    "input": "1 Благовония",
    "base": "3 ТНП",
    "bonuses": "«Твёрдое мыло», «Гигиена»",
    "cost": {
      "numeric": 25.0,
      "display": "25"
    },
    "income": {
      "base": 1.5,
      "max": 1.5,
      "display": "1.5"
    }
  },
  {
    "name": "Обув/артель",
    "category": "ремесло",
    "group": "",
    "location": "Город",
    "resource": "нет",
    "climate": "все",
    "terrain": "все",
    "conditions": "",
    "input": "1 Кожа",
    "base": "2 ТНП",
    "bonuses": "«Гильдии», «Пулены», «Бабуши», «Башмаки», Сапоги",
    "cost": {
      "numeric": 15.0,
      "display": "15"
    },
    "income": {
      "base": 1.0,
      "max": 1.0,
      "display": "1"
    }
  },
  {
    "name": "Швей/артель",
    "category": "ремесло",
    "group": "",
    "location": "Город",
    "resource": "нет",
    "climate": "все",
    "terrain": "все",
    "conditions": "",
    "input": "2 Ткани + 1 Кожа",
    "base": "4 ТНП",
    "bonuses": "«Гильдии», «Кафтан», «Феска», «Шешия», «Пуговица», «Бернус», «Кулах», «Сарафан», «Шаровары», «Ферязь», «Дублет», «Дивитисий», «Тюбетейка», «Свитер»",
    "cost": {
      "numeric": 20.0,
      "display": "20"
    },
    "income": {
      "base": 2.0,
      "max": 2.0,
      "display": "2"
    }
  },
  {
    "name": "Боч/артель",
    "category": "ремесло",
    "group": "",
    "location": "Провинция",
    "resource": "нет",
    "climate": "все",
    "terrain": "все",
    "conditions": "",
    "input": "1 Древесина",
    "base": "1 ТНП",
    "bonuses": "«Гильдии», «Бордоские бочки»",
    "cost": {
      "numeric": 15.0,
      "display": "15"
    },
    "income": {
      "base": 1.0,
      "max": 1.0,
      "display": "1"
    }
  },
  {
    "name": "Пуш/двор",
    "category": "ремесло",
    "group": "",
    "location": "Город",
    "resource": "нет",
    "climate": "все",
    "terrain": "все",
    "conditions": "",
    "input": "3 Медь + 2 Уголь",
    "base": "2 Пуш",
    "bonuses": "«Топчу», «Эргастерии», «Серпантина»",
    "cost": {
      "numeric": 45.0,
      "display": "45"
    },
    "income": {
      "base": 2.5,
      "max": 2.5,
      "display": "2.5"
    }
  },
  {
    "name": "Порох/артель",
    "category": "ремесло",
    "group": "",
    "location": "Город",
    "resource": "нет",
    "climate": "все",
    "terrain": "все",
    "conditions": "",
    "input": "2 Селитра + 1 Уголь",
    "base": "4 Порох",
    "bonuses": "«Химия», «Баллистика», «Гильдии», «Зернистый порох», «Эргастерии»",
    "cost": {
      "numeric": 30.0,
      "display": "30"
    },
    "income": {
      "base": 1.0,
      "max": 1.0,
      "display": "1"
    }
  },
  {
    "name": "Мастерская",
    "category": "ремесло",
    "group": "",
    "location": "Город",
    "resource": "нет",
    "climate": "все",
    "terrain": "все",
    "conditions": "",
    "input": "1 Древесина + 1 Железо",
    "base": "3 Инструмент",
    "bonuses": "«Токарный станок», «Механизация труда»",
    "cost": {
      "numeric": 27.5,
      "display": "27.5"
    },
    "income": {
      "base": 1.0,
      "max": 1.0,
      "display": "1"
    }
  },
  {
    "name": "Кузница",
    "category": "ремесло",
    "group": "",
    "location": "Провинция",
    "resource": "нет",
    "climate": "все",
    "terrain": "все",
    "conditions": "",
    "input": "1 Древесина + 1 Железо",
    "base": "2 Х/о",
    "bonuses": "«Горн», «Вагранка», «Сыродутная печь», «Булатная сталь», «Подкова»",
    "cost": {
      "numeric": 15.0,
      "display": "15"
    },
    "income": {
      "base": 2.0,
      "max": 2.0,
      "display": "2"
    }
  },
  {
    "name": "Плавильня",
    "category": "ремесло",
    "group": "",
    "location": "Город/Провинция",
    "resource": "нет",
    "climate": "все",
    "terrain": "все",
    "conditions": "",
    "input": "2 Ж/руда + 2 Уголь",
    "base": "4 Железо",
    "bonuses": "«Чугун», «Доменная печь», «Тигельная сталь»",
    "cost": {
      "numeric": 50.0,
      "display": "50"
    },
    "income": {
      "base": 2.0,
      "max": 4.0,
      "display": "2+2(Железо)"
    }
  },
  {
    "name": "Литейная",
    "category": "ремесло",
    "group": "",
    "location": "Город/Провинция",
    "resource": "нет",
    "climate": "все",
    "terrain": "все",
    "conditions": "",
    "input": "2 М/руда + 2 Уголь",
    "base": "3 Медь",
    "bonuses": "«Латунь», «Колокола»",
    "cost": {
      "numeric": 40.0,
      "display": "40"
    },
    "income": {
      "base": 2.0,
      "max": 4.0,
      "display": "2+2(Медь)"
    }
  },
  {
    "name": "Лавка",
    "category": "ремесло",
    "group": "",
    "location": "Город",
    "resource": "нет",
    "climate": "все",
    "terrain": "все",
    "conditions": "",
    "input": "1 Медь",
    "base": "2 ТНП",
    "bonuses": "«Чеканка», «Басма»",
    "cost": {
      "numeric": 10.0,
      "display": "10"
    },
    "income": {
      "base": 1.0,
      "max": 1.0,
      "display": "1"
    }
  },
  {
    "name": "Оружейная",
    "category": "ремесло",
    "group": "Оружейная",
    "location": "Город",
    "resource": "нет",
    "climate": "все",
    "terrain": "все",
    "conditions": "",
    "input": "1 Медь + 1 Инструмент",
    "base": "1 Х/о",
    "bonuses": "«Огнестрельное оружие», «Эргастерии»",
    "cost": {
      "numeric": 30.0,
      "display": "30"
    },
    "income": {
      "base": 4.0,
      "max": 4.0,
      "display": "4"
    }
  },
  {
    "name": "Оружейная",
    "category": "ремесло",
    "group": "Оружейная",
    "location": "Город",
    "resource": "нет",
    "climate": "все",
    "terrain": "все",
    "conditions": "",
    "input": "2 Свинец + 1 Инструмент",
    "base": "2 О/о",
    "bonuses": "«Огнестрельное оружие», «Эргастерии»",
    "cost": {
      "numeric": 30.0,
      "display": "30"
    },
    "income": {
      "base": 4.0,
      "max": 4.0,
      "display": "4"
    }
  },
  {
    "name": "Рынок",
    "category": "торговля",
    "group": "",
    "location": "Город/Провинция",
    "resource": "нет",
    "climate": "все",
    "terrain": "все",
    "conditions": "доступно народам Запада и Севера",
    "input": "1 Ткани + 1 Сахар + 1 Пряности + 1 Благовония",
    "base": "+10% ЭТ",
    "bonuses": "Трад. «Торговая хватка», «Ярмарки», «Скоморохи»",
    "cost": {
      "numeric": 15.0,
      "display": "15"
    },
    "income": {
      "base": 3.0,
      "max": 25.0,
      "display": "3(Ткани*)+10(Пряности*)+5(Благовония*)+5(Сахар*) х2 (инн Ярмарка, наличие в стране Города 9+ размера)"
    }
  },
  {
    "name": "Базар",
    "category": "торговля",
    "group": "",
    "location": "Город",
    "resource": "нет",
    "climate": "все",
    "terrain": "все",
    "conditions": "доступно народам Центра и Юга",
    "input": "1 Ткани + 1 Меха + 1 Чай + 1 Табак (после 1500 г.)",
    "base": "+10% ЭТ",
    "bonuses": "Трад. «Торговая хватка», «Меркантилизм», «Безистан»",
    "cost": {
      "numeric": 20.0,
      "display": "20"
    },
    "income": {
      "base": 3.0,
      "max": 23.0,
      "display": "3(Ткани*)+8(Мех*)+6(Чай*)+6(Табак*)"
    }
  },
  {
    "name": "Караван-сарай",
    "category": "торговля",
    "group": "",
    "location": "Город/Провинция",
    "resource": "Пряности*/Верблюды*",
    "climate": "все",
    "terrain": "все",
    "conditions": "не больше чем локаций с Верблюдами",
    "input": "",
    "base": "+7% ЭТ",
    "bonuses": "«Торговые караваны», «Фундуки», «Хан», «Охрана караванов», трад. «Гостеприимство»",
    "cost": {
      "numeric": 15.0,
      "display": "15"
    },
    "income": {
      "base": 3.0,
      "max": 3.0,
      "display": "3"
    }
  },
  {
    "name": "Аптека",
    "category": "торговля",
    "group": "",
    "location": "Город",
    "resource": "нет",
    "climate": "все",
    "terrain": "все",
    "conditions": "",
    "input": "1 Свинец",
    "base": "1 Лекарства, -1% к шансу Эпидемии, +1% к Благочестию (если спрос на Лекарства есть и он обеспечен)",
    "bonuses": "«Табакокурение», «Дёготь», «Ятрохимия», «Токсикология», «Эликсиры», «Парфюмерия»",
    "cost": {
      "numeric": 15.0,
      "display": "15"
    },
    "income": {
      "base": 1.0,
      "max": 1.0,
      "display": "1"
    }
  },
  {
    "name": "Бордель",
    "category": "торговля",
    "group": "",
    "location": "Город",
    "resource": "нет",
    "climate": "все",
    "terrain": "все",
    "conditions": "не доступен странам с ВП Церковь = 3",
    "input": "",
    "base": "-2% к РВ в локации, +2% к шансу Эпидемии",
    "bonuses": "Секс-рабство, Куртизанки, трад. «Проституция»",
    "cost": {
      "numeric": 5.0,
      "display": "5"
    },
    "income": {
      "base": 5.0,
      "max": 6.0,
      "display": "5+1(Порт)"
    }
  },
  {
    "name": "Таверна",
    "category": "торговля",
    "group": "",
    "location": "Город/Провинция",
    "resource": "нет",
    "climate": "все",
    "terrain": "все",
    "conditions": "не доступна странам с Исламом",
    "input": "1 Алко",
    "base": "+1 Шпион",
    "bonuses": "трад. «Пьянство», трад. «Гостеприимство», «Трактир», «Водка»",
    "cost": {
      "numeric": 10.0,
      "display": "10"
    },
    "income": {
      "base": 7.0,
      "max": 8.0,
      "display": "7 + 1 (Бордель)"
    }
  },
  {
    "name": "Фактория",
    "category": "торговля",
    "group": "",
    "location": "Город",
    "resource": "нет",
    "climate": "все",
    "terrain": "Море",
    "conditions": "доступно Торг. Республикам, постройка ставится у принимающей страны",
    "input": "",
    "base": "+5% ЭТ у принимающей страны",
    "bonuses": "«Колониализм»",
    "cost": {
      "numeric": 15.0,
      "display": "15"
    },
    "income": {
      "base": 3.0,
      "max": null,
      "display": "3 у принимающей, от 1 до 10 у торг. республики"
    }
  },
  {
    "name": "Невол/рынок",
    "category": "торговля",
    "group": "",
    "location": "Город/Провинция",
    "resource": "нет",
    "climate": "все",
    "terrain": "все",
    "conditions": "ВП Свобода <0",
    "input": "",
    "base": "2 Раба +1 (Рабы), -3 тыс.чел. убыль населения",
    "bonuses": "«Ясырь», трад. «Раболепие», «Мухтасибы»",
    "cost": {
      "numeric": 10.0,
      "display": "10"
    },
    "income": {
      "base": 1.0,
      "max": 2.0,
      "display": "1+1(Тюрьма)"
    }
  },
  {
    "name": "Ипподром",
    "category": "культура и наука",
    "group": "",
    "location": "Город",
    "resource": "нет",
    "climate": "все",
    "terrain": "все",
    "conditions": "",
    "input": "1 Кони",
    "base": "-10% к РВ в локации",
    "bonuses": "«Скачки»",
    "cost": {
      "numeric": 40.0,
      "display": "40"
    },
    "income": {
      "base": 5.0,
      "max": 6.0,
      "display": "5+1(Конюшня)"
    }
  },
  {
    "name": "Чайхана",
    "category": "культура и наука",
    "group": "",
    "location": "Город",
    "resource": "нет",
    "climate": "все",
    "terrain": "все",
    "conditions": "доступно народам Центра и Юга",
    "input": "1 Чай",
    "base": "1 кт/о",
    "bonuses": "«Кальян», «Восточные сладости», «Кофейни»",
    "cost": {
      "numeric": 15.0,
      "display": "15"
    },
    "income": {
      "base": 4.0,
      "max": 6.0,
      "display": "4+1(Бани)+1(Караван-сарай)"
    }
  },
  {
    "name": "Театр",
    "category": "культура и наука",
    "group": "",
    "location": "Город",
    "resource": "нет",
    "climate": "все",
    "terrain": "все",
    "conditions": "",
    "input": "1 Книги (если нет Богемы)",
    "base": "+3 кт/о +1 (богема-Артист), +1 (богема-Музыкант), +1 (богема-Поэт)",
    "bonuses": "«Романтизм», «Комедия дель Арте», «Опера», «Клавесин»",
    "cost": {
      "numeric": 80.0,
      "display": "80"
    },
    "income": {
      "base": 3.5,
      "max": 4.5,
      "display": "3,5+1(Бордель)+ кол-во Знати в стране"
    }
  },
  {
    "name": "Лаборатория",
    "category": "культура и наука",
    "group": "",
    "location": "Город",
    "resource": "нет",
    "climate": "все",
    "terrain": "все",
    "conditions": "",
    "input": "1 Свинец",
    "base": "+1 н/о, +1 Золото (ученый-Алхимик)",
    "bonuses": "«Метафизика», «Химия»",
    "cost": {
      "numeric": 33.0,
      "display": "33"
    },
    "income": {
      "base": -2.0,
      "max": -2.0,
      "display": "-2"
    }
  },
  {
    "name": "Библиотека",
    "category": "культура и наука",
    "group": "",
    "location": "Город",
    "resource": "нет",
    "climate": "все",
    "terrain": "все",
    "conditions": "работает, если в стране есть Книги",
    "input": "",
    "base": "1 кт/о",
    "bonuses": "«Литература»",
    "cost": {
      "numeric": 65.0,
      "display": "65"
    },
    "income": {
      "base": -1.0,
      "max": -1.0,
      "display": "-1"
    }
  },
  {
    "name": "Университет",
    "category": "культура и наука",
    "group": "",
    "location": "Город",
    "resource": "нет",
    "climate": "все",
    "terrain": "все",
    "conditions": "доступно при религии Католичество, Православие, Протестантизм, Реформаторство, Англиканство",
    "input": "1 Книги (если нет Учёного)",
    "base": "+3 н/о +1 (ученый-Юрист) +1 (ученый-Историк), +1 (ученый-Философ) +1 (Храм) +1 (Госпиталь)",
    "bonuses": "Трад. «Романтизм», «Микроскоп»",
    "cost": {
      "numeric": 90.0,
      "display": "90"
    },
    "income": {
      "base": -3.0,
      "max": -3.0,
      "display": "-3"
    }
  },
  {
    "name": "Обсерватория",
    "category": "культура и наука",
    "group": "",
    "location": "Провинция",
    "resource": "нет",
    "climate": "все",
    "terrain": "все",
    "conditions": "может быть только одна в стране",
    "input": "1 Стекло",
    "base": "2 н/о +1 (ученый-Астроном)",
    "bonuses": "«Астрономия», «Гороскопы»",
    "cost": {
      "numeric": 100.0,
      "display": "100"
    },
    "income": {
      "base": -3.0,
      "max": -3.0,
      "display": "-3"
    }
  },
  {
    "name": "Медресе",
    "category": "культура и наука",
    "group": "",
    "location": "Город",
    "resource": "нет",
    "climate": "все",
    "terrain": "все",
    "conditions": "доступно странам с Исламом",
    "input": "1 Книги (если нет Священника/Учёного)",
    "base": "2 н/о +1 (ученый-Медик) +1 (ученый-Богослов) +1 (ученый-Философ) +1 (ученый-Мечеть)",
    "bonuses": "«Мюриды», «Улемы», «Микроскоп»",
    "cost": {
      "numeric": 75.0,
      "display": "75"
    },
    "income": {
      "base": -2.0,
      "max": -2.0,
      "display": "-2"
    }
  },
  {
    "name": "Скрипторий",
    "category": "культура и наука",
    "group": "",
    "location": "Город",
    "resource": "нет",
    "climate": "все",
    "terrain": "все",
    "conditions": "работает до изучения «Книгопечатания»",
    "input": "1 Бумага",
    "base": "1 Книги",
    "bonuses": "«Каллиграфия»",
    "cost": {
      "numeric": 35.0,
      "display": "35"
    },
    "income": {
      "base": 0.0,
      "max": 0.0,
      "display": "0"
    }
  },
  {
    "name": "Типография",
    "category": "культура и наука",
    "group": "",
    "location": "Город",
    "resource": "нет",
    "climate": "все",
    "terrain": "все",
    "conditions": "",
    "input": "2 Бумага + 1 Инструмент",
    "base": "2 Книги",
    "bonuses": "«Пресса», «Цензура», «Газета», «Подвижные литеры»",
    "cost": {
      "numeric": 30.0,
      "display": "30"
    },
    "income": {
      "base": 3.0,
      "max": 4.0,
      "display": "3+1(Университет)"
    }
  },
  {
    "name": "Гарем",
    "category": "культура и наука",
    "group": "",
    "location": "Столица",
    "resource": "нет",
    "climate": "все",
    "terrain": "все",
    "conditions": "доступен с трад. «Многоженство»",
    "input": "1 Украшения",
    "base": "+1 о/пр + 1 (если правитель женат)",
    "bonuses": "«Евнухи», «Наложницы»",
    "cost": {
      "numeric": 55.0,
      "display": "55"
    },
    "income": {
      "base": -1.0,
      "max": null,
      "display": "-1+(-1 х ранг)"
    }
  },
  {
    "name": "Арена",
    "category": "культура и наука",
    "group": "",
    "location": "Город",
    "resource": "нет",
    "climate": "все",
    "terrain": "все",
    "conditions": "доступно при ВП Свобода <0 и инн «Коррида»",
    "input": "1 Х/о",
    "base": "-7,5% к РВ в локации",
    "bonuses": "Трад. «Состязание», трад. «Травля зверей», «Бои животных», «Коррида»",
    "cost": {
      "numeric": 35.0,
      "display": "35"
    },
    "income": {
      "base": 5.0,
      "max": 6.0,
      "display": "5+1(Зверинец)"
    }
  },
  {
    "name": "Зверинец",
    "category": "культура и наука",
    "group": "",
    "location": "Город",
    "resource": "нет",
    "climate": "все",
    "terrain": "все",
    "conditions": "",
    "input": "1 Звери",
    "base": "-5% к РВ в локации",
    "bonuses": "",
    "cost": {
      "numeric": 15.0,
      "display": "15"
    },
    "income": {
      "base": 3.0,
      "max": 5.0,
      "display": "3+2(Дворец)"
    }
  },
  {
    "name": "Дорога",
    "category": "инфраструктура",
    "group": "",
    "location": "Город/Провинция",
    "resource": "нет",
    "climate": "все",
    "terrain": "все",
    "conditions": "",
    "input": "",
    "base": "+3% к эфф-сти Управления, +1 к макс. размеру локации",
    "bonuses": "«Ямская служба», «Торговые караваны», «Гонцы»",
    "cost": {
      "numeric": 15.0,
      "display": "15"
    },
    "income": {
      "base": 0.0,
      "max": 0.0,
      "display": "0"
    }
  },
  {
    "name": "Мощ/дорога",
    "category": "инфраструктура",
    "group": "",
    "location": "Город",
    "resource": "нет",
    "climate": "все",
    "terrain": "все",
    "conditions": "",
    "input": "1-3 Кони [зависит от числа Мощ/дорог в стране]",
    "base": "до +20% к эфф-сти Управления, +1 к макс. размеру локации, «Мостовая»",
    "bonuses": "«Мостовая»",
    "cost": {
      "numeric": 15.0,
      "display": "15"
    },
    "income": {
      "base": -1.0,
      "max": -1.0,
      "display": "-1"
    }
  },
  {
    "name": "Ирригация",
    "category": "инфраструктура",
    "group": "",
    "location": "Провинция",
    "resource": "нет",
    "climate": "Жаркий/Знойный",
    "terrain": "все",
    "conditions": "",
    "input": "2 Рабы",
    "base": "х2 пр-ва Бахчи, Плантации с Хлопком и Сахаром, +2 к макс. размеру локации, «Нория»",
    "bonuses": "«Нория»",
    "cost": {
      "numeric": 100.0,
      "display": "100"
    },
    "income": {
      "base": 0.0,
      "max": 0.0,
      "display": "0"
    }
  },
  {
    "name": "Колодец",
    "category": "инфраструктура",
    "group": "",
    "location": "Провинция",
    "resource": "нет",
    "climate": "все",
    "terrain": "все",
    "conditions": "",
    "input": "",
    "base": "+2 к макс. размеру локации, +0,5 тыс.чел. прирост населения в локации",
    "bonuses": "",
    "cost": {
      "numeric": 5.0,
      "display": "5"
    },
    "income": {
      "base": 0.0,
      "max": 0.0,
      "display": "0"
    }
  },
  {
    "name": "Водопровод",
    "category": "инфраструктура",
    "group": "",
    "location": "Город",
    "resource": "нет",
    "climate": "все",
    "terrain": "все",
    "conditions": "",
    "input": "",
    "base": "+2 к макс. размеру локации, +15% к приросту населения в Городе",
    "bonuses": "",
    "cost": {
      "numeric": 50.0,
      "display": "50"
    },
    "income": {
      "base": -2.0,
      "max": -2.0,
      "display": "-2"
    }
  },
  {
    "name": "Канализация",
    "category": "инфраструктура",
    "group": "",
    "location": "Город",
    "resource": "нет",
    "climate": "все",
    "terrain": "все",
    "conditions": "",
    "input": "",
    "base": "+2 к макс. размеру локации, -5% к шансу Эпидемии в Городе",
    "bonuses": "",
    "cost": {
      "numeric": 35.0,
      "display": "35"
    },
    "income": {
      "base": -3.0,
      "max": -3.0,
      "display": "-3"
    }
  },
  {
    "name": "Бани",
    "category": "инфраструктура",
    "group": "",
    "location": "Город/Провинция",
    "resource": "нет",
    "climate": "все",
    "terrain": "все",
    "conditions": "",
    "input": "",
    "base": "+2 к макс. размеру локации, -1% к шансу Эпидемии в Городе",
    "bonuses": "Хамам",
    "cost": {
      "numeric": 10.0,
      "display": "10"
    },
    "income": {
      "base": 1.5,
      "max": 2.5,
      "display": "1,5+1(Мыловарня)"
    }
  },
  {
    "name": "Госпиталь",
    "category": "инфраструктура",
    "group": "",
    "location": "Город/Провинция",
    "resource": "нет",
    "climate": "все",
    "terrain": "все",
    "conditions": "",
    "input": "1 Лекарство",
    "base": "нет ивентов «Трущобы», -3% к шансу Эпидемии, уменьшение боевых потерь (общий гос эффект складывается от кол-ва Госпиталей)",
    "bonuses": "«Хирургия», «Анатомия», «Богадельни»",
    "cost": {
      "numeric": 20.0,
      "display": "20"
    },
    "income": {
      "base": -2.0,
      "max": -2.0,
      "display": "-2"
    }
  },
  {
    "name": "Амбар",
    "category": "инфраструктура",
    "group": "",
    "location": "Город/Провинция",
    "resource": "нет",
    "climate": "все",
    "terrain": "все",
    "conditions": "",
    "input": "1 Ткани",
    "base": "-1-2 п/п к потребности Города, +2 к лимиту хранения товаров на нац.складе",
    "bonuses": "«Фортификация», «Нория», «Фундуки»",
    "cost": {
      "numeric": 15.0,
      "display": "15"
    },
    "income": {
      "base": 1.0,
      "max": 1.0,
      "display": "1"
    }
  },
  {
    "name": "Банк",
    "category": "инфраструктура",
    "group": "",
    "location": "Город",
    "resource": "нет",
    "climate": "все",
    "terrain": "все",
    "conditions": "1 в стране, доступен народ Запада",
    "input": "1 Золото, 1 Серебро",
    "base": "+1,5% х кэш (Серебро*) + 3% х кэш (Золото*), + к сумме внутр. Займа в размере дохода Банка, +10 д к лимиту переводов",
    "bonuses": "«Депозит», «Банковские чеки», «Ломбард»",
    "cost": {
      "numeric": 50.0,
      "display": "50"
    },
    "income": {
      "base": null,
      "max": null,
      "display": "% от кэша х2 (Евреи)"
    }
  },
  {
    "name": "Пристань",
    "category": "инфраструктура",
    "group": "Пристань",
    "location": "Провинция/Город",
    "resource": "нет",
    "climate": "все",
    "terrain": "Река/Море/Озеро",
    "conditions": "",
    "input": "1 Волокно",
    "base": "2 п/п +1(Моржи) +1(Рыба) +1 ТНП",
    "bonuses": "",
    "cost": {
      "numeric": 10.0,
      "display": "10"
    },
    "income": {
      "base": 0.0,
      "max": 1.0,
      "display": "0+1(Коптильня)"
    }
  },
  {
    "name": "Пристань",
    "category": "инфраструктура",
    "group": "Пристань",
    "location": "Провинция/Город",
    "resource": "Жемчуг/Янтарь",
    "climate": "все",
    "terrain": "локация на берегу моря",
    "conditions": "",
    "input": "1 Волокно",
    "base": "1 Др/камни",
    "bonuses": "",
    "cost": {
      "numeric": 10.0,
      "display": "10"
    },
    "income": {
      "base": 0.0,
      "max": 1.0,
      "display": "0+1(Коптильня)"
    }
  },
  {
    "name": "Гавань",
    "category": "инфраструктура",
    "group": "",
    "location": "Город",
    "resource": "нет",
    "climate": "все",
    "terrain": "локация на берегу моря",
    "conditions": "используемые тм>=3",
    "input": "",
    "base": "-25% затрат на логистику, до +25% эфф-сть Торговли",
    "bonuses": "«Топчаковые краны»",
    "cost": {
      "numeric": 20.0,
      "display": "20"
    },
    "income": {
      "base": 1.0,
      "max": 2.0,
      "display": "1+1(Амбар)"
    }
  },
  {
    "name": "Порт",
    "category": "инфраструктура",
    "group": "",
    "location": "Город",
    "resource": "нет",
    "climate": "все",
    "terrain": "локация на берегу моря",
    "conditions": "численность Флота (включая ТОР) >=2",
    "input": "",
    "base": "-30% к затратам на содержание Флота, +0,5 тыс.чел. прирост населения, +10 к лимиту хранения товаров на нац.складе",
    "bonuses": "«Торговые флотилии»",
    "cost": {
      "numeric": 50.0,
      "display": "50"
    },
    "income": {
      "base": 1.0,
      "max": null,
      "display": "1 х Размер Города +3 (Маяк)"
    }
  },
  {
    "name": "Маяк",
    "category": "инфраструктура",
    "group": "",
    "location": "Провинция/Город",
    "resource": "нет",
    "climate": "все",
    "terrain": "локация на берегу моря",
    "conditions": "",
    "input": "1 Древесина",
    "base": "+1 к дальности размещения ТОР в м/з от локации с Маяком",
    "bonuses": "«Оптика», «Лоцманы»",
    "cost": {
      "numeric": 25.0,
      "display": "25"
    },
    "income": {
      "base": 0.0,
      "max": 0.0,
      "display": "0"
    }
  },
  {
    "name": "Капище",
    "category": "религия",
    "group": "",
    "location": "Провинция/Город",
    "resource": "нет",
    "climate": "все",
    "terrain": "все",
    "conditions": "доступно странам с Язычеством",
    "input": "",
    "base": "-3% к РВ в локации, +1 о/в",
    "bonuses": "Догмат «Жертвоприношения»",
    "cost": {
      "numeric": 5.0,
      "display": "5"
    },
    "income": {
      "base": 0.0,
      "max": 0.0,
      "display": "0"
    }
  },
  {
    "name": "Церковь",
    "category": "религия",
    "group": "",
    "location": "Провинция/Город",
    "resource": "нет",
    "climate": "все",
    "terrain": "все",
    "conditions": "доступно странам с Католичеством, Православием, Миафизитством, Протестантизмом, Реформаторством, Англиканством, а также с Несторианами",
    "input": "1 Благовоние (без — минус 50% эфф-сть)",
    "base": "-5% к РВ в локации, +1 о/в",
    "bonuses": "Простота ритуала, Богослужение на родном языке, Сусальное золото, Запрет латыни",
    "cost": {
      "numeric": 15.0,
      "display": "15"
    },
    "income": {
      "base": -1.0,
      "max": -1.0,
      "display": "-1"
    }
  },
  {
    "name": "Храм",
    "category": "религия",
    "group": "",
    "location": "Город",
    "resource": "нет",
    "climate": "все",
    "terrain": "все",
    "conditions": "доступно странам с Католичеством/Православием/Миафизитством/Иудаизмом",
    "input": "1 Алко (если нет Священника)",
    "base": "-10% к РВ в локации, +3 о/в",
    "bonuses": "«Акустика», «Простота ритуала», «Богослужение на родном языке», «Запрет латыни», «Хоровое пение», «Колокола»",
    "cost": {
      "numeric": 50.0,
      "display": "50"
    },
    "income": {
      "base": -2.0,
      "max": -2.0,
      "display": "-2"
    }
  },
  {
    "name": "Монастырь",
    "category": "религия",
    "group": "",
    "location": "Город/Провинция",
    "resource": "нет",
    "climate": "все",
    "terrain": "все",
    "conditions": "доступно странам с Католичеством, Православием, Миафизитством",
    "input": "1 Алко (если нет Священника)",
    "base": "2 кт/о + 1 (Монах), +1% Благочестие в ход",
    "bonuses": "«Бенефиций»",
    "cost": {
      "numeric": 45.0,
      "display": "45"
    },
    "income": {
      "base": -2.0,
      "max": -2.0,
      "display": "-2"
    }
  },
  {
    "name": "Мечеть",
    "category": "религия",
    "group": "",
    "location": "Город/Провинция",
    "resource": "нет",
    "climate": "все",
    "terrain": "все",
    "conditions": "доступно странам с Исламом и Исмаилитами",
    "input": "",
    "base": "-7% к РВ в локации, +1,5 о/в",
    "bonuses": "«Богослужение на родном языке», «Арабеска», «Чётки», «Имамы»",
    "cost": {
      "numeric": 20.0,
      "display": "20"
    },
    "income": {
      "base": -2.0,
      "max": -2.0,
      "display": "-2"
    }
  },
  {
    "name": "Святилище",
    "category": "религия",
    "group": "",
    "location": "Город/Провинция",
    "resource": "нет",
    "climate": "все",
    "terrain": "все",
    "conditions": "доступно странам с Иудаизмом и Зороастризмом",
    "input": "1 Благовоние (без — минус 50% эфф-сть)",
    "base": "-5% к РВ в локации, +1,5 о/в",
    "bonuses": "«Богослужение на родном языке»",
    "cost": {
      "numeric": 15.0,
      "display": "15"
    },
    "income": {
      "base": -1.0,
      "max": -1.0,
      "display": "-1"
    }
  },
  {
    "name": "Мавзолей",
    "category": "религия",
    "group": "",
    "location": "Город/Провинция",
    "resource": "нет",
    "climate": "все",
    "terrain": "все",
    "conditions": "доступно странам с Суннизмом и Шиизмом",
    "input": "",
    "base": "5 о/в",
    "bonuses": "«Гробницы»",
    "cost": {
      "numeric": 100.0,
      "display": "100"
    },
    "income": {
      "base": 0.0,
      "max": 0.0,
      "display": "0"
    }
  },
  {
    "name": "Курган",
    "category": "религия",
    "group": "",
    "location": "Провинция",
    "resource": "нет",
    "climate": "все",
    "terrain": "все",
    "conditions": "доступно странам с Язычеством и Тенгрианством",
    "input": "",
    "base": "0,5 в/о",
    "bonuses": "«Поминовение усопших»",
    "cost": {
      "numeric": 10.0,
      "display": "10"
    },
    "income": {
      "base": 0.0,
      "max": 0.0,
      "display": "0"
    }
  },
  {
    "name": "Частокол",
    "category": "военные",
    "group": "",
    "location": "Город/Провинция",
    "resource": "нет",
    "climate": "все",
    "terrain": "все",
    "conditions": "",
    "input": "",
    "base": "1 БО локации",
    "bonuses": "«Засечная черта», «Городища»",
    "cost": {
      "numeric": 5.0,
      "display": "5"
    },
    "income": {
      "base": -0.5,
      "max": -0.5,
      "display": "-0.5"
    }
  },
  {
    "name": "Дер/стена",
    "category": "военные",
    "group": "",
    "location": "Город",
    "resource": "нет",
    "climate": "все",
    "terrain": "все",
    "conditions": "",
    "input": "",
    "base": "3 БО локации",
    "bonuses": "«Фортификация», «Городища»",
    "cost": {
      "numeric": 15.0,
      "display": "15"
    },
    "income": {
      "base": -1.0,
      "max": -1.0,
      "display": "-1"
    }
  },
  {
    "name": "Глин/стена",
    "category": "военные",
    "group": "",
    "location": "Город",
    "resource": "нет",
    "climate": "все",
    "terrain": "все",
    "conditions": "доступно народам Центра и Юга, в стране должна быть Гончарная",
    "input": "",
    "base": "4,5 БО локации",
    "bonuses": "«Рибат», «Бойницы»",
    "cost": {
      "numeric": 20.0,
      "display": "20"
    },
    "income": {
      "base": -1.0,
      "max": -1.0,
      "display": "-1"
    }
  },
  {
    "name": "Каменная стена",
    "category": "военные",
    "group": "",
    "location": "Город",
    "resource": "нет",
    "climate": "все",
    "terrain": "все",
    "conditions": "",
    "input": "",
    "base": "6 БО локации",
    "bonuses": "«Фортификация», «Ров», «Бойницы», «Жидкий огонь», «Бастионы»",
    "cost": {
      "numeric": 50.0,
      "display": "50"
    },
    "income": {
      "base": -2.0,
      "max": -2.0,
      "display": "-2"
    }
  },
  {
    "name": "Замок",
    "category": "военные",
    "group": "",
    "location": "Город/Провинция",
    "resource": "нет",
    "climate": "все",
    "terrain": "все",
    "conditions": "доступно народам Запада, скандинавам и литовцам",
    "input": "",
    "base": "4 БО локации +2 (Остров)",
    "bonuses": "Трад. «Хранители замков», «Мотт», «Донжон», «Ров»",
    "cost": {
      "numeric": 40.0,
      "display": "40"
    },
    "income": {
      "base": -3.0,
      "max": -3.0,
      "display": "-3"
    }
  },
  {
    "name": "Ристалище",
    "category": "военные",
    "group": "",
    "location": "Город",
    "resource": "нет",
    "climate": "все",
    "terrain": "все",
    "conditions": "доступно народам Запада, скандинавам и литовцам",
    "input": "1 Доспехи",
    "base": "+0,5 к силе ТК, +0,5 в/о, открытие решения «Провести рыц. турнир»",
    "bonuses": "",
    "cost": {
      "numeric": 35.0,
      "display": "35"
    },
    "income": {
      "base": -1.0,
      "max": -1.0,
      "display": "-1"
    }
  },
  {
    "name": "Лагерь",
    "category": "военные",
    "group": "",
    "location": "Провинция",
    "resource": "нет",
    "climate": "все",
    "terrain": "все",
    "conditions": "можно строить в условиях войны в т.ч. на захваченной территории врага",
    "input": "3 п/п",
    "base": "2 БО локации, 1 в/о, +3 к снабжению",
    "bonuses": "",
    "cost": {
      "numeric": 20.0,
      "display": "20"
    },
    "income": {
      "base": -2.0,
      "max": -2.0,
      "display": "-2"
    }
  },
  {
    "name": "Казарма",
    "category": "военные",
    "group": "",
    "location": "Город",
    "resource": "нет",
    "climate": "все",
    "terrain": "все",
    "conditions": "",
    "input": "2 Алко",
    "base": "-100% к снижению затрат на содержание Армии, 2 в/о",
    "bonuses": "",
    "cost": {
      "numeric": 20.0,
      "display": "20"
    },
    "income": {
      "base": 0.0,
      "max": 0.0,
      "display": "0"
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
    { key: 'resource',  label: 'Ресурс',    sortable: true },
    { key: 'location',  label: 'Локация',   sortable: true },
    { key: 'climate',   label: 'Климат',    sortable: true },
    { key: 'terrain',   label: 'Рельеф',    sortable: true },
    { key: 'conditions',label: 'Условия',   sortable: true },
    { key: 'input',     label: 'Усл. работы', sortable: true },
    { key: 'base',      label: 'База',      sortable: true },
    { key: 'bonuses',   label: 'Инновации/традиции', sortable: true },
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

function htmlAttr(s) {
    return s.replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/&/g, '&amp;');
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
    if (key === 'cost') return 'num-nowrap cell-cost ' + costColor(b);
    if (key === 'income') return 'num-nowrap cell-income ' + incomeColor(b);
    if (key === 'resource') return 'cell-resource';
    if (key === 'conditions') return 'cell-conditions';
    if (key === 'bonuses') return 'cell-bonuses';
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
                        rows += `<td class="${cls}" rowspan="${size}" title="${htmlAttr(val)}">${val}</td>`;
                    }
                    // остальные строки — пропускаем ячейку
                } else {
                    const val = cellVal(b, col.key);
                    const cls = cellClass(b, col.key);
                    rows += `<td class="${cls}" title="${htmlAttr(val)}">${val}</td>`;
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

function setupCellClick() {
    document.getElementById('buildings-tbody').addEventListener('click', e => {
        const td = e.target.closest('td.num-nowrap');
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
