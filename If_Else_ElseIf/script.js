//! richiamo l'oggetto classe .response e lo metto in una costante

const response = document.querySelector(".response");

//?definisco l'età del soggetto
const age = 2;

//!se Ha almeno 21 anni può votare

if (age >= 21) {
  response.textContent = "Può votare";
} else if (age >= 18) {
  response.textContent = "Vota solo alla Camera";
} else {
  response.textContent = "Non può votare";
}
//!se ha almeno 18 anni può votare solo per la camera
//!se non ha almeno 18 anni non può votare
