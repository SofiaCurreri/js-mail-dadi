// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

const inputButton = document.getElementById("play");

inputButton.addEventListener(
    "click",
    function () {
        const randomUser = parseInt((Math.random() * 6) + 1);
        const randomComputer = parseInt((Math.random() * 6) + 1);

        document.getElementById("num-user").innerHTML = "Il numero random del giocatore è " + randomUser;
        document.getElementById("num-computer").innerHTML = "Il numero random del computer è " + randomComputer;

        if (randomUser == randomComputer) {
            document.getElementById("vincitore").innerHTML = "Pareggio!";
        } else if (randomUser > randomComputer) {
            document.getElementById("vincitore").innerHTML = "Il vincitore è il giocatore";
        } else {
            document.getElementById("vincitore").innerHTML = "Il vincitore è il computer";
        }
    }
);
