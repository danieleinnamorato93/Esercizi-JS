//! Prendo la classe nome e le asssegno la variabile nome
let nome = document.querySelector(".nome");
//console.log(nome); // <span class="nome">

//* do un bordo a nome di 1px red, ma il riqadro è uoto perchè manca il nome
nome.style.border = "solid 1px red";

//?  per farlo funzionare ho bisogno di una funzione che  inserisca il nome
//!dichiaro la funzione che inserisce il nome
function inserimentoNome() {
  nome.innerHTML = "Daniele";
}
//*Invoco la funzione
inserimentoNome();
/////////////////////////////////////

//!facciamo lo stesso col cognome
//?Prendo classe cognome e assegno la variabile
let cognome = document.querySelector(".cognome");

//!do un bordo
cognome.style.border = "solid blue 1px";

//?Dichiaro una funzioneinserisco il cognome,
//?stavolta passando un argomento nelle parentesi
function inserimentoCognome(inputCognome) {
  //!definisco l'argomento da passare cognome=inputCognome
  cognome.innerHTML = inputCognome;
}

//* invoco la funzione e passo l'argomento da inserire
inserimentoCognome("Innamorato");
