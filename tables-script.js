console.log("Скрипт странички с таблицами успешно загружен")

const img = document.getElementById("img");

function containerAbove() {
    const map = document.querySelector(".map")
    const container = document.querySelector(".container")
    if (container.nextElementSibling === map) return
    map.parentNode.insertBefore(container, map)
}

function containerBelow() {
    const map = document.querySelector(".map")
    const container = document.querySelector(".container")
    if (map.nextElementSibling === container) return
    map.parentNode.insertBefore(container, map.nextSibling)
}


const start_war_tech = document.getElementById("start-war-tech");
const start_ekonom_tech = document.getElementById("start-ekonom-tech");
const rassadka = document.getElementById("rassadka");
const ekonom_tech = document.getElementById("ekonom-tech");
const cult_tradicii = document.getElementById("cult_tradicii");
const cult_level = document.getElementById("cult_level");
const arch_style = document.getElementById("arch_style");
const religii = document.getElementById("religii");
const eresi = document.getElementById("eresi");


const buildings = document.getElementById("buildings");
const fpvp = document.getElementById("fpVp");
const size = document.getElementById("size");
const hRE = document.getElementById("hRE");
const fp2 = document.getElementById("fp2");
const tech = document.getElementById("tech");
const etnosy = document.getElementById("etnosy");
const religion = document.getElementById("religion");
const cult_tradition = document.getElementById("cult_tradition");
const perki_praviteley = document.getElementById("perki_praviteley");
const unik_postroyki = document.getElementById("unik_postroyki");
const sovetniki = document.getElementById("sovetniki");
const prioritety_razvitia = document.getElementById("prioritety_razvitia");
const holy_places = document.getElementById("holy_places");
const tactics = document.getElementById("tactics");
const bunus_units = document.getElementById("bunus_units");
const weather = document.getElementById("weather");
const tovary = document.getElementById("tovary");
// const mercenaries = document.getElementById("mercenaries");
const strany = document.getElementById("strany");
const orden = document.getElementById("orden");
const vse_tekhnologii = document.getElementById("vse_tekhnologii");
const prestupnost = document.getElementById("prestupnost");
const vse_voenn_innovatsii = document.getElementById("vse_voenn_innovatsii");
const nach_sots_pol_innovatsii = document.getElementById("nach_sots_pol_innovatsii");
const vse_sots_pol_innovatsii = document.getElementById("vse_sots_pol_innovatsii");
const perki_praviteli = document.getElementById("perki_praviteli");
const vse_zakony = document.getElementById("vse_zakony");
const vassals = document.getElementById("vassals");
const razmer_locacii = document.getElementById("razmer_locacii");
const vse_postroyki = document.getElementById("vse_postroyki");
const naim = document.getElementById("naim");
const stroitelstvo = document.getElementById("stroitelstvo");
const perki_personazhey = document.getElementById("perki_personazhey");
const hidden_perks = document.getElementById("hidden_perks");
const unit_bonus = document.getElementById("unit_bonus");
const vp = document.getElementById("vp");
// const razmer_locacii = document.getElementById("razmer_locacii");

// const vse_tekhnologii = document.getElementById("vse_tekhnologii");
// const vse_tekhnologii = document.getElementById("vse_tekhnologii");
// const vse_tekhnologii = document.getElementById("vse_tekhnologii");

// buildings.addEventListener("click",() => {
//     img.src="tables/buildings.png"
//     img.style.width = "100%"
//     img.style.height = "100%"
// });

// fpvp.addEventListener("click",() => {
//     img.src="tables/FP.png"
//     img.style.width = "80%"
//     img.style.height = "80%"
// });

// size.addEventListener("click",() => {
//     img.src="tables/size.jpg"
//     img.style.width = "40%"
//     img.style.height = "40%"
// });

// hRE.addEventListener("click",() => {
//     img.src="tables/СРИ.jpg"
//     img.style.width = "40%"
//     img.style.height = "40%"
// });

// tech.addEventListener("click",() => {
//     img.src="tables/tech.png"
//     img.style.width = "80%"
//     img.style.height = "80%"
// });

start_war_tech.addEventListener("click",() => {
    document.querySelector(".container").innerHTML = ""
    containerBelow()
    img.src="tables/Nach_voenn_tekh.png"
    img.style.width = "80%"
    img.style.height = "80%"
});

vse_voenn_innovatsii.addEventListener("click",() => {
    document.querySelector(".container").innerHTML = ""
    containerBelow()
    img.src="tables/vse_voenn_innovatsii.png"
    img.style.width = "60%"
    img.style.height = "60"
});

orden.addEventListener("click",() => {
    document.querySelector(".container").innerHTML = ""
    containerBelow()
    img.src="tables/orden.png"
    img.style.width = "80%"
    img.style.height = "80%"
});

start_ekonom_tech.addEventListener("click",() => {
    document.querySelector(".container").innerHTML = ""
    containerBelow()
    img.src="tables/Nach_ekonom_tekh.png"
    img.style.width = "80%"
    img.style.height = "80%"
});

rassadka.addEventListener("click",() => {
    document.querySelector(".container").innerHTML = ""
    containerBelow()
    img.src="tables/Rassadka.png"
    img.style.width = "80%"
    img.style.height = "80%"
});

ekonom_tech.addEventListener("click",() => {
    document.querySelector(".container").innerHTML = ""
    containerBelow()
    img.src="tables/Vse_ekonom_innovatsii.png"
    img.style.width = "80%"
    img.style.height = "80%"
});

cult_tradicii.addEventListener("click",() => {
    document.querySelector(".container").innerHTML = ""
    containerBelow()
    img.src="tables/Kulturnye_traditsii.png"
    img.style.width = "80%"
    img.style.height = "80%"
});

cult_level.addEventListener("click",() => {
    document.querySelector(".container").innerHTML = ""
    containerBelow()
    img.src="tables/cult_level.jpg"
    img.style.width = "40%"
    img.style.height = "40%"
});

arch_style.addEventListener("click",() => {
    document.querySelector(".container").innerHTML = ""
    containerBelow()
    img.src="tables/arch_style.jpg"
    img.style.width = "80%"
    img.style.height = "80%"
});

religii.addEventListener("click",() => {
    document.querySelector(".container").innerHTML = ""
    containerBelow()
    img.src="tables/religii.png"
    img.style.width = "100%"
    img.style.height = "100%"
});
eresi.addEventListener("click",() => {
    document.querySelector(".container").innerHTML = ""
    containerBelow()
    img.src="tables/eresi.png"
    img.style.width = "100%"
    img.style.height = "100%"
});

FP.addEventListener("click",() => {
    document.querySelector(".container").innerHTML = ""
    containerBelow()
    img.src="tables/FP.png"
    img.style.width = "80%"
    img.style.height = "80%"
});

vse_tekhnologii.addEventListener("click",() => {
    document.querySelector(".container").innerHTML = ""
    containerBelow()
    img.src="tables/vse_tekhnologii.png"
    img.style.width = "80%"
    img.style.height = "80%"
});

prestupnost.addEventListener("click",() => {
    document.querySelector(".container").innerHTML = ""
    containerBelow()
    img.src="tables/prestupnost.png"
    img.style.width = "50%"
    img.style.height = "50%"
});

nach_sots_pol_innovatsii.addEventListener("click",() => {
    document.querySelector(".container").innerHTML = ""
    containerBelow()
    img.src="tables/nach_sots_pol_innovatsii.png"
    img.style.width = "90%"
    img.style.height = "90%"
});

vse_sots_pol_innovatsii.addEventListener("click",() => {
    document.querySelector(".container").innerHTML = ""
    containerBelow()
    img.src="tables/vse_sots_pol_innovatsii.png"
    img.style.width = "90%"
    img.style.height = "90%"
});

perki_praviteli.addEventListener("click",() => {
    document.querySelector(".container").innerHTML = `
        <div id="perks-table-content"><table>
            <thead>
                <tr><th>№</th><th>Название</th><th>Эффект</th></tr>
            </thead>
            <tbody>
                <tr><td>1</td><td><strong>Альтруист</strong> (А)</td><td>+25% к социальным расходам</td></tr>
                <tr><td>2</td><td><strong>Болезненный</strong> (Б)</td><td>-10 лет к сроку жизни, -50% к шансу иметь детей</td></tr>
                <tr><td>3</td><td><strong>Воинственный</strong> (В)</td><td>+1 к лимиту армий</td></tr>
                <tr><td>4</td><td><strong>Глупый</strong> (Г)</td><td>-1 н/о в ход</td></tr>
                <tr><td>5</td><td><strong>Деспот</strong> (Д)</td><td>+10% к РВ, доступны репрессии</td></tr>
                <tr><td>6</td><td><strong>Извращенец</strong> (И)</td><td>-1 кт/о в ход</td></tr>
                <tr><td>7</td><td><strong>Здоровяк</strong> (З)</td><td>+5 лет к сроку жизни</td></tr>
                <tr><td>8</td><td><strong>Корыстолюбец</strong> (К)</td><td>-50% к расходам на советников</td></tr>
                <tr><td>9</td><td><strong>Лжец</strong> (Л)</td><td>-1 к лимиту союзов и посольств</td></tr>
                <tr><td>10</td><td><strong>Миролюбивый</strong> (М)</td><td>+10% к сбору налогов в мирное время</td></tr>
                <tr><td>11</td><td><strong>Набожный</strong> (Н)</td><td>+1 о/в в ход</td></tr>
                <tr><td>12</td><td><strong>Оптимист</strong> (О)</td><td>-10% к цене стабильности</td></tr>
                <tr><td>13</td><td><strong>Пессимист</strong> (П)</td><td>+10% к цене стабильности</td></tr>
                <tr><td>14</td><td><strong>Распутный</strong> (Р)</td><td>+25% к рождению детей, -1% к Благочестию в ход</td></tr>
                <tr><td>15</td><td><strong>Смелый</strong> (С)</td><td>+5% к орг-ции Армии, +1 к б/духу</td></tr>
                <tr><td>16</td><td><strong>Трус</strong> (Т)</td><td>не может быть полководцем, -1 к б/духу</td></tr>
                <tr><td>17</td><td><strong>Умный</strong> (У)</td><td>+1 н/о в ход</td></tr>
                <tr><td>18</td><td><strong>Фантазёр</strong> (Ф)</td><td>-5% к цене инноваций</td></tr>
                <tr><td>19</td><td><strong>Хитрый</strong> (Х)</td><td>-50% к расходам на шпионаж</td></tr>
                <tr><td>20</td><td><strong>Циник</strong> (Ц)</td><td>-1 о/в в ход</td></tr>
                <tr><td>21</td><td><strong>Честный</strong> (Ч)</td><td>×2 штраф за разрыв союза, +1% к Лояльности в ход</td></tr>
                <tr><td>22</td><td><strong>Шантажист</strong> (Ш)</td><td>+1 к лимиту шпионов</td></tr>
                <tr><td>23</td><td><strong>Щедрый</strong> (Щ)</td><td>+50% к расходам на советников</td></tr>
                <tr><td>24</td><td><strong>Эстет</strong> (Э)</td><td>+1 кт/о в ход</td></tr>
                <tr><td>25</td><td><strong>Бастард</strong> (Ъ)</td><td>-1% к Лояльности в ход</td></tr>
                <tr><td>26</td><td><strong>Эгоист</strong> (Я)</td><td>×2 расходы на содержание двора</td></tr>
            </tbody>
        </table></div>`
    containerAbove()
    img.src="tables/perki_praviteli.png"
    img.style.width = "40%"
    img.style.height = "40%"
});

vse_zakony.addEventListener("click",() => {
    document.querySelector(".container").innerHTML = ""
    containerBelow()
    img.src="tables/vse_zakony.png"
    img.style.width = "80%"
    img.style.height = "80%"
});

vassals.addEventListener("click",() => {
    document.querySelector(".container").innerHTML = ""
    containerBelow()
    img.src="tables/vassals.png"
    img.style.width = "40%"
    img.style.height = "40%"
});

razmer_locacii.addEventListener("click",() => {
    document.querySelector(".container").innerHTML = `
        <p><strong>Базовый максимальный размер</strong> локации определяется численностью населения:</p>
        <table>
            <thead>
                <tr><th>Население</th><th>Макс. размер</th></tr>
            </thead>
            <tbody>
                <tr><td>0</td><td>1</td></tr>
                <tr><td>2</td><td>2</td></tr>
                <tr><td>4</td><td>3</td></tr>
                <tr><td>8</td><td>4</td></tr>
                <tr><td>15</td><td>5</td></tr>
                <tr><td>30</td><td>6</td></tr>
                <tr><td>60</td><td>7</td></tr>
                <tr><td>125</td><td>8</td></tr>
                <tr><td>250</td><td>9</td></tr>
                <tr><td>500</td><td>10</td></tr>
                <tr><td>1000</td><td>11</td></tr>
                <tr><td>2000</td><td>12</td></tr>
            </tbody>
        </table>
        <p>Базовый максимальный размер равен 12 (лимит). К базовому размеру применяются модификаторы.</p>
        <p><strong>1) Ландшафт/география:</strong></p>
        <ul>
            <li>Тундра: +2</li>
            <li>Джунгли: +3</li>
            <li>Болото: +4</li>
            <li>Пустыня/Степь: +5</li>
            <li>Леса: +6</li>
            <li>Холмы: +7</li>
            <li>Равнина: +8</li>
            <li>Остров/острова: -3</li>
            <li>Город: +3</li>
            <li>Столица: +1</li>
        </ul>
        <p><strong>2) Водные объекты, санитарные постройки:</strong></p>
        <ul>
            <li>Река/Колодец в провинции/Ирригация в провинции: +2</li>
            <li>Город без Реки + Водопровод: +2</li>
            <li>Город с Баней/Канализацией: +2</li>
            <li>Озеро: +1</li>
        </ul>
        <p><strong>3) Технологии, инновации и иные постройки:</strong></p>
        <ul>
            <li>Дорога/Мощёная дорога: +1</li>
            <li>Каменная стена: +2</li>
            <li>Города с инновацией «Черепица»: +1</li>
            <li>Провинции с инновацией «Огораживание»: -1</li>
            <li>Города с инновацией «Огораживание»: +1</li>
            <li>Города с технологией «Городское право»: +1</li>
            <li>Провинции в прохладном или холодном климате с инновацией «Длинный дом»: +1</li>
            <li>Церковь/Мечеть/Святилище в провинции: +3</li>
        </ul>`
    containerAbove()
    img.src="tables/razmer_locacii.png"
    img.style.width = "60%"
    img.style.height = "60%"
});

vse_postroyki.addEventListener("click",() => {
    document.querySelector(".container").innerHTML = ""
    containerBelow()
    img.src="tables/vse_postroyki.png"
    img.style.width = "90%"
    img.style.height = "90%"
});

unik_postroyki.addEventListener("click",() => {
    document.querySelector(".container").innerHTML = ""
    containerBelow()
    img.src="tables/unik_postroyki.png"
    img.style.width = "70%"
    img.style.height = "70%"
});

naim.addEventListener("click",() => {
    document.querySelector(".container").innerHTML = ""
    containerBelow()
    img.src="tables/naim.png"
    img.style.width = "60%"
    img.style.height = "60%"
});

stroitelstvo.addEventListener("click",() => {
    document.querySelector(".container").innerHTML = ""
    containerBelow()
    img.src="tables/stroitelstvo.png"
    img.style.width = "50%"
    img.style.height = "50%"
});

perki_personazhey.addEventListener("click",() => {
    document.querySelector(".container").innerHTML = `
        <div id="perks-table-content">
            <table>
                <thead><tr><th colspan="3">Ученые &mdash; +0,5 н/о за скилл</th></tr></thead>
                <tbody>
                    <tr><td>Ф</td><td>Философ</td><td>+1 эффф Университета/Медресе, <em>Схоластика</em>, <em>Метафизика</em>, <em>Богословие</em>*</td></tr>
                    <tr><td>Э</td><td>Экономист</td><td>-1% к инфляции, +3% к сбору налогов, <em>Банковское дело</em>, <em>Страхование</em>, <em>Биржа</em>*</td></tr>
                    <tr><td>З</td><td>Звездочет/Астроном</td><td>+1 к эффф-ти Обсерватории, <em>Космология</em>, <em>Астрономия</em>*</td></tr>
                    <tr><td>В</td><td>Воспитатель</td><td>-25% к затратам на Обучение, <em>Педагогика</em>*</td></tr>
                    <tr><td>М</td><td>Медик</td><td>-1 к шансу Эпидемии, реш. 'Пройти лечение', +1 к эффф Медресе, <em>Анатомия</em>, <em>Хирургия</em>*</td></tr>
                    <tr><td>С</td><td>Строитель</td><td>+1 к лимиту стр-ва, -3% к цене стр-ва, <em>Архитектура</em>, <em>Зодчество</em>*</td></tr>
                    <tr><td>И</td><td>Инженер</td><td>+0,2 к силе ММ, +1 к пр-ву Мастерской, <em>Физика</em>, <em>Водяное колесо</em>, <em>Оптика</em>*</td></tr>
                    <tr><td>Ю</td><td>Юрист</td><td>+1 к эффф-ти Университета, -10% цен Закона, <em>Городское право</em>, <em>Судебная система</em>, <em>Прокуратура</em>*</td></tr>
                    <tr><td>А</td><td>Алхимик</td><td>+1 Золото от Лаборатории, <em>Порох</em>, <em>Химия</em>*</td></tr>
                    <tr><td>Г</td><td>Географ</td><td>+5 к даль тогровли, <em>Геодезия</em>, <em>Картография</em>*</td></tr>
                </tbody>
            </table>
            <p style="font-size:0.85em">*Доступ к изучению технологий</p>

            <table>
                <thead><tr><th colspan="3">Богема &mdash; +0,5 к/о за скилл</th></tr></thead>
                <tbody>
                    <tr><td>А</td><td>Артист</td><td>+1 к эффф-сти Театра, <em>Античный театр</em>, <em>Бродячие артисты</em>, <em>Театр</em>*</td></tr>
                    <tr><td>Л</td><td>Литератор</td><td>+1 к пр-ву Скриптория, <em>Литература</em>, <em>История</em>*</td></tr>
                    <tr><td>И</td><td>Историк</td><td>+1 к пр-ву Университета, <em>История</em>*</td></tr>
                    <tr><td>П</td><td>Поэт</td><td>+1 к эффф Театра, +1% к Лояльности, <em>Поэзия</em>, <em>Литература</em>*</td></tr>
                    <tr><td>З</td><td>Зодчий</td><td>+1 к эффф-сти Храма и Мавзолея, <em>Архитектура</em>, <em>Зодчество</em>*</td></tr>
                    <tr><td>Ж</td><td>Живописец</td><td>+0,5 к эффф-сти Монастыря, Собора, возм. реш. 'Заказать шедевр'</td></tr>
                    <tr><td>М</td><td>Музыкант</td><td>+1к/о от инвента 'Праздник', +1 к эффф-сти Театра, <em>Бродячие артисты</em>, <em>Акустика</em>, <em>Театр</em>*</td></tr>
                    <tr><td>Ш</td><td>Шут</td><td><em>Бродячие артисты</em>, <em>Театр</em>*, -1% к Лояльности, -5% к цене стаб.</td></tr>
                    <tr><td>С</td><td>Скульптор</td><td>возм. реш. 'Заказать шедевр'</td></tr>
                    <tr><td>Б</td><td>Блудница</td><td>+1д к дох Борделя</td></tr>
                </tbody>
            </table>

            <table>
                <thead><tr><th colspan="3">Знать &mdash; +3% ЭУ за скилл</th></tr></thead>
                <tbody>
                    <tr><td>П</td><td>Политик</td><td>+1 к лимиту Законов, <em>Парламентаризм</em>*</td></tr>
                    <tr><td>Н</td><td>Надзиратель</td><td>-3% к РВ, -50% к цене Тюрьмы</td></tr>
                    <tr><td>С</td><td>Судья</td><td>-1% к Коррупции, -50% к цене тех <em>Судебная система</em></td></tr>
                    <tr><td>Д</td><td>Дипломат</td><td>+1 к лимиту союзов, -25% к цене реш. 'Дать покровительство'</td></tr>
                    <tr><td>В</td><td>Взяточник</td><td>+1% к Коррупции, +5% к таможенной пошлине</td></tr>
                    <tr><td>О</td><td>Оратор</td><td>+1 к б/духу, -50% к цене тех Риторика</td></tr>
                    <tr><td>К</td><td>Казначей</td><td>+10% к эффф. Монетдвора, -50% к цене тех <em>Банковское дело</em>, <em>Банковское дело</em>*</td></tr>
                    <tr><td>Ф</td><td>Филантроп</td><td><em>Меценатство</em>*, +1% к Грамотности</td></tr>
                    <tr><td>З</td><td>Завистник</td><td>-1% к Лояльности</td></tr>
                    <tr><td>Р</td><td>Растратчик</td><td>+3% к расходам хода</td></tr>
                </tbody>
            </table>

            <table>
                <thead><tr><th colspan="3">Священники &mdash; +0,5 о/в за скилл</th></tr></thead>
                <tbody>
                    <tr><td>Ж</td><td>Жрец</td><td>-10% к цене реш. 'Провести праздник'</td></tr>
                    <tr><td>А</td><td>Аскет</td><td>-10% к религиозным расходам</td></tr>
                    <tr><td>Б</td><td>Богослов</td><td>+1 к эффф-сти Медресе, +0,5 макс.стаб., <em>Схоластика</em>, <em>Космология</em>, <em>Метафизика</em>, <em>Богословие</em>*</td></tr>
                    <tr><td>П</td><td>Проповедник</td><td>+10% к шансу миссионерства</td></tr>
                    <tr><td>З</td><td>Знахарь</td><td>-0,5 к военной усталости</td></tr>
                    <tr><td>И</td><td>Инквизитор</td><td>-50% к цене миссионерства</td></tr>
                    <tr><td>М</td><td>Монах</td><td>+1 к эффф-сти Монастыря</td></tr>
                    <tr><td>Ш</td><td>Шаман</td><td>+1 к б/духу</td></tr>
                    <tr><td>Е</td><td>Ересиарх</td><td>нет штрафа при смене Религии</td></tr>
                    <tr><td>В</td><td>Властолюбец</td><td>-1% к Лояльности</td></tr>
                </tbody>
            </table>

            <table>
                <thead><tr><th colspan="3">Торговцы &mdash; +1% к ЭТ за скилл</th></tr></thead>
                <tbody>
                    <tr><td>П</td><td>Продавец праностей</td><td>х2 доход от продажи Пряности Рынком</td></tr>
                    <tr><td>К</td><td>Караванщик</td><td>+2д к дох Караван-сарая</td></tr>
                    <tr><td>Д</td><td>Делец</td><td>+4 к даль торговли, +10% к доходу от 'Рискованной сделки', <em>Экономика</em>*</td></tr>
                    <tr><td>Л</td><td>Лавочник</td><td>+1д к дох Лавки, Рынка и Базара</td></tr>
                    <tr><td>З</td><td>Займодавец</td><td>+10% к доступной сумме внутреннего займа, <em>Биржа</em>*</td></tr>
                    <tr><td>Р</td><td>Работодавец</td><td>+1 Раб в ход, +1д к дох Неволь/рынка</td></tr>
                    <tr><td>А</td><td>Антиквар</td><td>+1 товар Украшения</td></tr>
                    <tr><td>С</td><td>Спекулянт</td><td>+1% к РВ</td></tr>
                    <tr><td>М</td><td>Маркитант</td><td>+2 к Снабжению армии</td></tr>
                    <tr><td>Б</td><td>Банкир</td><td>Банк может работать без наличия Др/металлов, <em>Биржа</em>*</td></tr>
                </tbody>
            </table>

            <table>
                <thead><tr><th colspan="3">Военачальники &mdash; +0,5 в/о за скилл</th></tr></thead>
                <tbody>
                    <tr><td>П</td><td>Командир пехоты</td><td>+0,1 к силе пехоты</td></tr>
                    <tr><td>Ф</td><td>Флотоводец</td><td>выступает флотоводцем</td></tr>
                    <tr><td>К</td><td>Кавалерист</td><td>+0,1 к силе кавалерии</td></tr>
                    <tr><td>Т</td><td>Тактик</td><td>+1 к ширине фронта</td></tr>
                    <tr><td>Н</td><td>Наемник</td><td>-10% к содерж. наёмников</td></tr>
                    <tr><td>Л</td><td>Логист</td><td>+3 к дальности снабжения армии и флота, <em>Картография</em>*</td></tr>
                    <tr><td>У</td><td>Мастер удара</td><td>+10% к силе армии в атаке</td></tr>
                    <tr><td>З</td><td>Мастер защиты</td><td>+10% к силе армии в обороне</td></tr>
                    <tr><td>Г</td><td>Грабитель</td><td>+10% к размеру грабежа, доступны морские налеты и набеги</td></tr>
                    <tr><td>А</td><td>Артиллерист</td><td>+0,4 к силе Пуш</td></tr>
                    <tr><td>И</td><td>Военный инженер</td><td>+1 к силе Частокола, Кам/стены, Глин/стены, Дер/стены, Замка</td></tr>
                    <tr><td>С</td><td>Стратег</td><td>-10% к силе армии врага</td></tr>
                </tbody>
            </table>
        </div>`
    containerBelow()
    img.src="tables/perki_personazhey.png"
    img.style.width = "50%"
    img.style.height = "50%"
});

hidden_perks.addEventListener("click",() => {
    document.querySelector(".container").innerHTML = `
        <p><em>Перки, выделенные красным, взяты из прошлой партии и могут быть устаревшими.<br>Таблица может содержать не все скрытые перки. По обнаружении нового, если посчитаете нужным, сообщите о нём в игровой чат.</em></p>
        <div id="perks-table-content"><table>
            <thead>
                <tr><th>Комбо</th><th>Название перка</th><th>Эффект</th></tr>
            </thead>
            <tbody>
                <tr><td>К+С</td><td><strong>Авантюрист</strong></td><td>+20% к шансу дачной сделки</td></tr>
                <tr><td>Б+К</td><td><strong>Алчный</strong></td><td>+5% к сбору налогов, -5% к ПНД</td></tr>
                <tr><td>У+Ч</td><td><strong>Авторитет</strong></td><td>+1 о/пр</td></tr>
                <tr><td>Г+Л</td><td><strong>Изгой</strong></td><td>-1 о/пр в ход</td></tr>
                <tr><td>С+Я</td><td><strong>н/д</strong></td><td>+1 к рангу страны</td></tr>
                <tr><td>В+Н</td><td><strong>Святой воин</strong></td><td>+10% к силе армии в бою с иноверцами</td></tr>
                <tr><td>К+Х</td><td><strong>Скряга</strong></td><td>+10% к таможенным сборам</td></tr>
                <tr class="prev-game"><td>А+О</td><td><strong>Благодетель</strong></td><td>+10к к лимиту переводов</td></tr>
                <tr class="prev-game"><td>Ч+Ш</td><td><strong>Благотворитель</strong></td><td>-5% к налогам, иммунитет к инвенту «Бунт!»</td></tr>
                <tr class="prev-game"><td>Б+Д</td><td><strong>Вандал</strong></td><td>возможно разрушение зд.в городе</td></tr>
                <tr class="prev-game"><td>З+Ч</td><td><strong>Голубая кровь</strong></td><td>50% что дети унаследуют 1 из перков родителя</td></tr>
                <tr class="prev-game"><td>И+Н</td><td><strong>Грешник</strong></td><td>-2 о/в</td></tr>
                <tr class="prev-game"><td>Б+С</td><td><strong>Завоеватель</strong></td><td>3 провинции вместо 2 при аннексии</td></tr>
                <tr class="prev-game"><td>Г+П</td><td><strong>Зануда</strong></td><td>+10% к цене личных решений</td></tr>
                <tr class="prev-game"><td>К+О</td><td><strong>Игрок</strong></td><td>+1% к коррупции</td></tr>
                <tr class="prev-game"><td>Г+З</td><td><strong>Ленивый</strong></td><td>+10% к цене стройки, -5% к ЭУ</td></tr>
                <tr class="prev-game"><td>В+К</td><td><strong>Налетчик</strong></td><td>+15% к размеру грабежа, доступен налет</td></tr>
                <tr class="prev-game"><td>В+У</td><td><strong>Новатор</strong></td><td>+1в/о</td></tr>
                <tr class="prev-game"><td>З+И</td><td><strong>Обжора</strong></td><td>-1п/п</td></tr>
                <tr class="prev-game"><td>М+С</td><td><strong>Охотник</strong></td><td>-50% к цене «Организация охоты»</td></tr>
                <tr class="prev-game"><td>Н+Ч</td><td><strong>Праведник</strong></td><td>+2 о/в, +1% к благочестию</td></tr>
                <tr class="prev-game"><td>О+У</td><td><strong>Реформатор</strong></td><td>-10% к цене инноваций</td></tr>
                <tr class="prev-game"><td>И+П</td><td><strong>Ретроград</strong></td><td>-2кт/о</td></tr>
                <tr class="prev-game"><td>К+Ч</td><td><strong>Счетовод</strong></td><td>-1 инфляции в ход</td></tr>
                <tr class="prev-game"><td>К+У</td><td><strong>Трудоголик</strong></td><td>+1 к лимиту строительства</td></tr>
                <tr class="prev-game"><td>З+З</td><td><strong>Чистоплотный</strong></td><td>доступны бани</td></tr>
            </tbody>
        </table></div>`
    containerAbove()
    img.src="img/hidden_perks.png"
    img.style.width = "40%"
    img.style.height = "40%"
});

unit_bonus.addEventListener("click",() => {
    document.querySelector(".container").innerHTML = `
        <p><strong>Атака</strong></p>
        <table>
            <thead>
                <tr><th></th><th>Равнина</th><th>Степь</th><th>Холмы</th><th>Тундра</th><th>Леса</th><th>Джунгли</th><th>Болото</th><th>Пустыня</th><th>Море</th><th>Город</th></tr>
            </thead>
            <tbody>
                <tr><td>Стр</td><td>0</td><td>0</td><td>0</td><td>0</td><td>-0,5</td><td>-0,5</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
                <tr><td>Др</td><td>+0,5</td><td>+0,5</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
                <tr><td>Луч</td><td>+0,5</td><td>+0,5</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>+0,5</td></tr>
                <tr><td>ЛВ</td><td>0</td><td>0</td><td>0</td><td>0</td><td>+0,5</td><td>0</td><td>0</td><td>0</td><td>0</td><td>+0,5</td></tr>
                <tr><td>СВ</td><td>+0,5</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>+0,5</td><td>0</td><td>0</td><td>0</td></tr>
                <tr><td>ТВ</td><td>0</td><td>0</td><td>+0,5</td><td>0</td><td>0</td><td>0</td><td>-1</td><td>0</td><td>0</td><td>-0,5</td></tr>
                <tr><td>ВБ</td><td>0</td><td>+0,5</td><td>0</td><td>-2</td><td>-0,5</td><td>-0,5</td><td>-0,5</td><td>+1</td><td>0</td><td>-0,5</td></tr>
                <tr><td>Клуч</td><td>+0,5</td><td>+0,5</td><td>0</td><td>-1</td><td>-0,5</td><td>-0,5</td><td>-1</td><td>0</td><td>0</td><td>-0,5</td></tr>
                <tr><td>КВ</td><td>+0,5</td><td>+1</td><td>0</td><td>-1</td><td>-0,5</td><td>-0,5</td><td>-1</td><td>0</td><td>0</td><td>-1</td></tr>
                <tr><td>ТК</td><td>+1</td><td>+1</td><td>0</td><td>-1</td><td>-0,5</td><td>-0,5</td><td>-1</td><td>0</td><td>0</td><td>-1</td></tr>
                <tr><td>Арб</td><td>0</td><td>0</td><td>0</td><td>0</td><td>-0,5</td><td>-0,5</td><td>0</td><td>0</td><td>0</td><td>+0,5</td></tr>
                <tr><td>Пуш</td><td>+0,5</td><td>+0,5</td><td>0</td><td>0</td><td>-1</td><td>-1</td><td>0</td><td>0</td><td>0</td><td>+1</td></tr>
                <tr><td>ММ</td><td>0</td><td>0</td><td>+0,5</td><td>-0,5</td><td>-1</td><td>-1</td><td>0</td><td>0</td><td>0</td><td>+1</td></tr>
            </tbody>
        </table>
        <p><strong>Оборона</strong></p>
        <table>
            <thead>
                <tr><th></th><th>Равнина</th><th>Степь</th><th>Холмы</th><th>Тундра</th><th>Леса</th><th>Джунгли</th><th>Болото</th><th>Пустыня</th><th>Море</th><th>Город</th></tr>
            </thead>
            <tbody>
                <tr><td>Стр</td><td>0</td><td>0</td><td>0</td><td>0</td><td>-0,5</td><td>-0,5</td><td>0</td><td>0</td><td>0</td><td>+0,5</td></tr>
                <tr><td>Др</td><td>+0,5</td><td>+0,5</td><td>0</td><td>0</td><td>+0,5</td><td>+0,5</td><td>+0,5</td><td>0</td><td>0</td><td>+0,5</td></tr>
                <tr><td>Луч</td><td>+0,5</td><td>0</td><td>+0,5</td><td>0</td><td>0</td><td>+0,5</td><td>0</td><td>0</td><td>0</td><td>+1</td></tr>
                <tr><td>ЛВ</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>-0,5</td></tr>
                <tr><td>СВ</td><td>+1</td><td>0</td><td>+0,5</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>+0,5</td></tr>
                <tr><td>ТВ</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>-1</td><td>0</td><td>0</td><td>+0,5</td></tr>
                <tr><td>ВБ</td><td>0</td><td>+0,5</td><td>0</td><td>-2</td><td>-0,5</td><td>-0,5</td><td>-0,5</td><td>+1</td><td>0</td><td>-0,5</td></tr>
                <tr><td>Клуч</td><td>+0,5</td><td>+0,5</td><td>0</td><td>-1</td><td>-1</td><td>-1</td><td>-1</td><td>0</td><td>0</td><td>-1</td></tr>
                <tr><td>КВ</td><td>-0,5</td><td>-0,5</td><td>0</td><td>-1</td><td>-1</td><td>-1</td><td>-1</td><td>-0,5</td><td>0</td><td>-1,5</td></tr>
                <tr><td>ТК</td><td>-0,5</td><td>-0,5</td><td>0</td><td>-1</td><td>-1</td><td>-1</td><td>-1</td><td>-0,5</td><td>0</td><td>-1,5</td></tr>
                <tr><td>Арб</td><td>0</td><td>0</td><td>0</td><td>0</td><td>-0,5</td><td>-0,5</td><td>0</td><td>0</td><td>0</td><td>+0,5</td></tr>
                <tr><td>Пуш</td><td>+0,5</td><td>+0,5</td><td>0</td><td>0</td><td>-1</td><td>-1</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
                <tr><td>ММ</td><td>0</td><td>0</td><td>+0,5</td><td>-0,5</td><td>-1</td><td>-1</td><td>-0,5</td><td>0</td><td>0</td><td>0</td></tr>
            </tbody>
        </table>`;
    containerBelow()
    img.src="tables/unit_bonus.png"
    img.style.width = "80%"
    img.style.height = "80%"
    document.querySelectorAll(".container td").forEach(td => {
        const text = td.textContent.trim().replace(",", ".");
        const val = parseFloat(text);
        if (!isNaN(val)) {
            if (val > 0) td.classList.add("val-pos");
            else if (val < 0) td.classList.add("val-neg");
            else td.classList.add("val-zero");
        }
    });
});

vp.addEventListener("click",() => {
    document.querySelector(".container").innerHTML = ""
    containerBelow()
    img.src="tables/vp.png"
    img.style.width = "80%"
    img.style.height = "80%"
});

// razmer_locacii.addEventListener("click",() => {
//     img.src="tables/razmer_locacii.png"
//     img.style.width = "80%"
//     img.style.height = "80%"
// });
