
const lost = document.getElementById("lost");
const dead = document.getElementById("dead");
const getHole = index => document.getElementById(`hole${index}`);
function newGame() {
    dead.textContent = 0;
    lost.textContent = 0;
}

for(let i = 1; i < 10; i++) {
    let hole = getHole(i);
    hole.onclick = () => {
        hole.classList.contains("hole_has-mole") ? dead.textContent++ : lost.textContent++;

        if(Number(dead.textContent) === 10) {
            alert("Вы победили!");
            newGame();
        }

        if(Number(lost.textContent) === 5) {
            alert("Вы проиграли.");
            newGame();
        }
    }
}

