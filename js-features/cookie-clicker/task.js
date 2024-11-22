const counter = document.getElementById("clicker__counter");
const time = document.getElementById("clicker__time");
const cookie = document.getElementById("cookie");
let date1 = 0;
let date2 = 0;
cookie.onclick = () => {
    counter.textContent++;
    if(counter.textContent % 2 === 0) {
        cookie.width = 200;
        date1 = new Date();
        time.textContent = (1000 / (date1 - date2)).toFixed(2);
    } else {
        cookie.width = 170;
        date2 = new Date();
        date1 === 0 ? time.textContent = 0 : time.textContent = (1000 / (date2 - date1)).toFixed(2);
    }
}