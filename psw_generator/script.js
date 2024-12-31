//! 1) Fase preparatoria: prendo gli elementi che mi serono per generare la password
const pwGen = document.getElementById("pwGen");

//? 2) Fase raccolata dati: chiedo i dati col prompt e li salvo in una costante
const firstName = prompt("Dimmi il tuo nome", "Daniele");

const lastName = prompt("Dimmi il tuo cognome", "Innamorato");

const age = prompt("Quanti anni hai?", "31");

const color = prompt("Qual è il tuo colore preferito?", "Rosso");

//* 3) Fase di lavorazione dei dati : creo una stringa che contenga i dati richiesti

const newPsw = `${firstName}${lastName}${color}${age}`;
console.log(newPsw);

//! 4) Fase di produzione dell'output : stampo in pagina
pwGen.innerText = `${firstName}${lastName}${color}${age}`;
