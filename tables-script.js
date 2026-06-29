console.log("Скрипт странички с таблицами успешно загружен")

const img = document.getElementById("img");


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
    img.src="tables/Nach_voenn_tekh.png"
    img.style.width = "80%"
    img.style.height = "80%"
});

vse_voenn_innovatsii.addEventListener("click",() => {
    img.src="tables/vse_voenn_innovatsii.png"
    img.style.width = "60%"
    img.style.height = "60"
});

orden.addEventListener("click",() => {
    img.src="tables/orden.png"
    img.style.width = "80%"
    img.style.height = "80%"
});

start_ekonom_tech.addEventListener("click",() => {
    img.src="tables/Nach_ekonom_tekh.png"
    img.style.width = "80%"
    img.style.height = "80%"
});

rassadka.addEventListener("click",() => {
    img.src="tables/Rassadka.png"
    img.style.width = "80%"
    img.style.height = "80%"
});

ekonom_tech.addEventListener("click",() => {
    img.src="tables/Vse_ekonom_innovatsii.png"
    img.style.width = "80%"
    img.style.height = "80%"
});

cult_tradicii.addEventListener("click",() => {
    img.src="tables/Kulturnye_traditsii.png"
    img.style.width = "80%"
    img.style.height = "80%"
});

cult_level.addEventListener("click",() => {
    img.src="tables/cult_level.jpg"
    img.style.width = "40%"
    img.style.height = "40%"
});

arch_style.addEventListener("click",() => {
    img.src="tables/arch_style.jpg"
    img.style.width = "80%"
    img.style.height = "80%"
});

religii.addEventListener("click",() => {
    img.src="tables/religii.png"
    img.style.width = "100%"
    img.style.height = "100%"
});
eresi.addEventListener("click",() => {
    img.src="tables/eresi.png"
    img.style.width = "100%"
    img.style.height = "100%"
});

FP.addEventListener("click",() => {
    img.src="tables/FP.png"
    img.style.width = "80%"
    img.style.height = "80%"
});

vse_tekhnologii.addEventListener("click",() => {
    img.src="tables/vse_tekhnologii.png"
    img.style.width = "80%"
    img.style.height = "80%"
});

prestupnost.addEventListener("click",() => {
    img.src="tables/prestupnost.png"
    img.style.width = "50%"
    img.style.height = "50%"
});

nach_sots_pol_innovatsii.addEventListener("click",() => {
    img.src="tables/nach_sots_pol_innovatsii.png"
    img.style.width = "90%"
    img.style.height = "90%"
});

vse_sots_pol_innovatsii.addEventListener("click",() => {
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
    img.src="tables/perki_praviteli.png"
    img.style.width = "40%"
    img.style.height = "40%"
});

vse_zakony.addEventListener("click",() => {
    img.src="tables/vse_zakony.png"
    img.style.width = "80%"
    img.style.height = "80%"
});

vassals.addEventListener("click",() => {
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
    img.src="tables/razmer_locacii.png"
    img.style.width = "60%"
    img.style.height = "60%"
});

vse_postroyki.addEventListener("click",() => {
    img.src="tables/vse_postroyki.png"
    img.style.width = "90%"
    img.style.height = "90%"
});

unik_postroyki.addEventListener("click",() => {
    img.src="tables/unik_postroyki.png"
    img.style.width = "70%"
    img.style.height = "70%"
});

naim.addEventListener("click",() => {
    img.src="tables/naim.png"
    img.style.width = "60%"
    img.style.height = "60%"
});

stroitelstvo.addEventListener("click",() => {
    img.src="tables/stroitelstvo.png"
    img.style.width = "50%"
    img.style.height = "50%"
});

perki_personazhey.addEventListener("click",() => {
    const el = document.getElementById("perks-table-content")
    if (el) el.remove()
    img.src="tables/perki_personazhey.png"
    img.style.width = "50%"
    img.style.height = "50%"
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
    img.src="tables/vp.png"
    img.style.width = "80%"
    img.style.height = "80%"
});

// razmer_locacii.addEventListener("click",() => {
//     img.src="tables/razmer_locacii.png"
//     img.style.width = "80%"
//     img.style.height = "80%"
// });
