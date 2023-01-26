// Chiedi all'utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull'esito del controllo.

const inputEmail = document.getElementById("email");
const inputButton = document.getElementById("send");

const emailAutorizzate = [
    "sofiacurreri@gmail.com",
    "mario.rossi@yahoo.it",
    "guido.crivellin89@libero.it",
    "lauraanversa@gamil.com",
    "ginevra21@gmail.com"
];

let check = false;

inputButton.addEventListener(
    "click",
    function () {
        for (let i = 0; i < emailAutorizzate.length; i++) {
            if (inputEmail.value == emailAutorizzate[i]) {
                check = true;
            }
        }
        if (check) {
            document.getElementById("output-mex").innerHTML = "Accesso autorizzato";
        } else {
            document.getElementById("output-mex").innerHTML = "Accesso non autorizzato";
        }
    }
);