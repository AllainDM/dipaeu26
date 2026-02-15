console.log("Скрипт странички с таблицами успешно загружен")

const img = document.getElementById("img");
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


buildings.addEventListener("click",() => {
    img.src="tables/buildings.png"
    img.style.width = "100%"
    img.style.height = "100%"
});

fpvp.addEventListener("click",() => {
    img.src="tables/FP.png"
    img.style.width = "80%"
    img.style.height = "80%"
});

size.addEventListener("click",() => {
    img.src="tables/size.jpg"
    img.style.width = "40%"
    img.style.height = "40%"
});

hRE.addEventListener("click",() => {
    img.src="tables/СРИ.jpg"
    img.style.width = "40%"
    img.style.height = "40%"
});

tech.addEventListener("click",() => {
    img.src="tables/tech.png"
    img.style.width = "80%"
    img.style.height = "80%"
});

fp2.addEventListener("click",() => {
    img.src="tables/FP2.jpg"
    img.style.width = "80%"
    img.style.height = "80%"
});

etnosy.addEventListener("click",() => {
    img.src="tables/etns.png"
    img.style.width = "60%"
    img.style.height = "60%"
});

religion.addEventListener("click",() => {
    img.src="tables/religion.png"
    img.style.width = "80%"
    img.style.height = "80%"
});

cult_tradition.addEventListener("click",() => {
    img.src="tables/cult_tradition.png"
    img.style.width = "75%"
    img.style.height = "75%"
});






perki_praviteley.addEventListener("click",() => {
    img.src="tables/perki_praviteley.png"
    img.style.width = "40%"
    img.style.height = "40%"
});

unik_postroyki.addEventListener("click",() => {
    img.src="tables/unik_postroyki.png"
    img.style.width = "40%"
    img.style.height = "40%"
});

sovetniki.addEventListener("click",() => {
    img.src="tables/sovetniki.png"
    img.style.width = "75%"
    img.style.height = "75%"
});

prioritety_razvitia.addEventListener("click",() => {
    img.src="tables/prioritety_razvitia.png"
    img.style.width = "40%"
    img.style.height = "40%"
});

holy_places.addEventListener("click",() => {
    img.src="tables/holy_places.jpg"
    img.style.width = "40%"
    img.style.height = "40%"
});

tactics.addEventListener("click",() => {
    img.src="tables/tactics.jpg"
    img.style.width = "100%"
    img.style.height = "100%"
});

bunus_units.addEventListener("click",() => {
    img.src="img/bunus_units.png"
    img.style.width = "35%"
    img.style.height = "35%"
});

weather.addEventListener("click",() => {
    img.src="tables/weather.jpg"
    img.style.width = "75%"
    img.style.height = "75%"
});

tovary.addEventListener("click",() => {
    img.src="tables/goods.png"
    img.style.width = "55%"
    img.style.height = "55%"
});

// mercenaries.addEventListener("click",() => {
//     img.src="tables/mercenaries.jpg"
//     img.style.width = "20%"
//     img.style.height = "20%"
// });
strany.addEventListener("click",() => {
    img.src="tables/strany.png"
    img.style.width = "55%"
    img.style.height = "55%"
});