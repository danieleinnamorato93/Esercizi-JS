//!Fase preparatoria, prendo gli elementi che mi servono per generare il prezzo del biglietto
const ticket = document.getElementById("ticket");
const pricePerKm = 0.21;

//? Fase di raccolta dati, chiedo l'età all'utente e i km

let age = parseInt(prompt("Quanti anni hai?", "17"));
let kms = parseInt(prompt("Quanti kilometri vuoi percorrere?", "100"));

const ticketPrice = kms * pricePerKm;

//* fase di lavorazione dei dati: in base all'età applico uno sconto usando istruzioni condizionali
//!se l'utente ha meno di 18 anni applico uno sconto del 20%, se è over 65, uno sconto del 40%

let finalPrice;

if (age < 18) {
  finalPrice = ticketPrice - (ticketPrice * 20) / 100;
} else if (age > 65) {
  finalPrice = ticketPrice - (ticketPrice * 40) / 100;
} else {
  finalPrice = ticketPrice;
}
console.log(finalPrice);

//? Produzione dell'output
ticket.innerHTML = `il prezzo del biglietto è <strong>${finalPrice.toFixed(
  2
)}</strong> `;
