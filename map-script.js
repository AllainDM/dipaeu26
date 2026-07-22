const LATEST_POLIT_MAP = 32

console.log("Скрипт странички с картами успешно загружен")

const img = document.getElementById("map1");
img.src = "maps/polit/" + LATEST_POLIT_MAP + ".png"
let imgSize = 1;
const igroki = document.getElementById("igroki");
const polit = document.getElementById("polit");
const resources = document.getElementById("resources");
const climate = document.getElementById("climate");
const regions = document.getElementById("regions");
const ethic = document.getElementById("ethic");
const religion = document.getElementById("relig");
const tts = document.getElementById("tts");
const hre = document.getElementById("hre");
const chuma = document.getElementById("chuma");
const disclaimer = document.getElementById("chuma-disclaimer");
const goroda = document.getElementById("goroda");

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

function hideDisclaimer() {
    disclaimer.style.display = "none";
}

polit.addEventListener("click",() => {
    img.src="maps/polit/" + LATEST_POLIT_MAP + ".png"
    hideDisclaimer();
})

resources.addEventListener("click",() => {
    img.src="maps/resources.png"
    hideDisclaimer();
})

climate.addEventListener("click",() => {
    img.src="maps/climate.png"
    hideDisclaimer();
})

regions.addEventListener("click",() => {
    img.src="maps/Karta_regionov.png"
    hideDisclaimer();
})

ethic.addEventListener("click",() => {
    img.src="maps/ethic.png"
    hideDisclaimer();
})

religion.addEventListener("click",() => {
    img.src="maps/religion.png"
    hideDisclaimer();
})

tts.addEventListener("click",() => {
    img.src="maps/Karta_TTs.png"
    hideDisclaimer();
});

hre.addEventListener("click",() => {
    img.src="maps/Karta_SRI.png"
    hideDisclaimer();
});

chuma.addEventListener("click",() => {
    img.src="maps/chuma.png"
    disclaimer.style.display = "block";
});

// goroda.addEventListener("click",() => {
//     img.src="maps/goroda.png"
// })
