//!Raccolgo elementi interesse del DOM
//?Faccio reagire il click al bottone di conferma
//*Recupero i valori del form
//!Validazione
//!Calcolo del prezzo in base ai km
//!Verifico se applicare lo sconto
//!Arrotondo a 2 decimali
//!Svuoto i campi del form
//!Preparo i valori corretti nel biglietto
//!Mostro il biglietto

//?Fase di preparazione:
const nameField = document.getElementById("name");
const kmsField = document.getElementById("kms");
const ageField = document.getElementById("age");
const confirmButton = document.getElementById("confirm-button");

const ticketSection = document.getElementById("ticket-section");
const passengerElement = document.getElementById("passenger-name");
const carElement = document.getElementById("car");
const rateElement = document.getElementById("rate");
const pnrElement = document.getElementById("pnr");
const priceElement = document.getElementById("price");

//!variabili iniziali

const pricePerKm = 0.21;
let rateName = "Tariffa ordinaria";

//?Gestione eventi

confirmButton.addEventListener("click", function (e) {
  //!blocca ricaricamento pagina
  e.preventDefault();
  const nameValue = nameField.value.trim();
  const kmsValue = parseInt(kmsField.value);
  const ageValue = ageField.value;

  //?prezzo base senza sconti
  let price = kmsValue * pricePerKm;

  //*Verifico se devo fare sconti
  if (ageValue === "junior") {
    //!il prezzo è uguale a sè stesso x 0.8, applico lo sconto
    price *= 0.8;
    rateName = "Tariffa Minorenni";
  } else if (ageValue === "senior") {
    price *= 0.6;
    rateName = "Tariffa Senior";
  }

  //?calcolo carrozza e pnr
  const carNumber = Math.floor(Math.random() * 9) + 1;
  const pnr = Math.floor(Math.random() * 1000000) + 1;

  //!Monto i dati nel biglietto

  passengerElement.innerText = nameValue;
  rateElement.innerText = rateName;
  carElement.innerText = carNumber;
  pnrElement.innerText = pnr;
  priceElement.innerText = "€" + price.toFixed(2);

  //!Mostro il biglietto

  ticketSection.classList.remove("d-none");
});
