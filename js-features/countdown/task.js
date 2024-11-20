const addText = () => {
    const timer = document.getElementById("timer");
    if(timer.textContent > 0) {
        timer.textContent--
    } else {
        clearInterval(intervalTimer);
        alert("Вы победили в конкурсе!");
        location.assign("https://github.com/Bassvamp/bhj-homeworks/tree/master/js-features/countdown/file.file");
        timer.textContent = 59;
     }
}

const intervalTimer = setInterval(addText, 1000);


