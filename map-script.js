console.log("Скрипт странички с картами успешно загружен")

const img = document.getElementById("map1");
let imgSize = 1;
const igroki = document.getElementById("igroki");
const polit = document.getElementById("polit");
const resources = document.getElementById("resources");
const ethic = document.getElementById("ethic");
const religion = document.getElementById("relig");
const climate = document.getElementById("climate");
const goroda = document.getElementById("goroda");
const tts = document.getElementById("tts");
const hre = document.getElementById("hre");
const regions = document.getElementById("regions");

img.addEventListener("click",() => {
    if (imgSize == 1) {
        img.style.width = "200%"
        img.style.height = "200%"
        imgSize += 1
    } else {
        img.style.width = "100%"
        img.style.height = "100%"
        imgSize -= 1

    }
    
});


// igroki.addEventListener("click",() => {
//     img.src="maps/igroki.png"
// })

polit.addEventListener("click",() => {
    img.src="maps/polit.png"
})

resources.addEventListener("click",() => {
    img.src="maps/resources.png"
})

ethic.addEventListener("click",() => {
    img.src="maps/ethic.png"
})

religion.addEventListener("click",() => {
    img.src="maps/religion.png"
})

climate.addEventListener("click",() => {
    img.src="maps/climate.png"
})

tts.addEventListener("click",() => {
    img.src="maps/Karta_TTs.png"
});

hre.addEventListener("click",() => {
    img.src="maps/Karta_SRI.png"
});

regions.addEventListener("click",() => {
    img.src="maps/Karta_regionov.png"
});


// goroda.addEventListener("click",() => {
//     img.src="maps/goroda.png"
// })
