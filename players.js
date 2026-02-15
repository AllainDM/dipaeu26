console.log("Скрипт странички игроков успешно загружен");

const numPlayer = document.querySelectorAll(".num-pl");


numPlayer.forEach((item, i) => {
    item.innerHTML = i + 1
});