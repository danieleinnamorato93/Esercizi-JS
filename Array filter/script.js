const persone = [
  { nome: "Luca", anni: 25, lavoro: "Sviluppatore" },
  { nome: "Giulia", anni: 16, lavoro: "Studente" },
  { nome: "Marco", anni: 28, lavoro: "Ingegnere" },
  { nome: "Sara", anni: 14, lavoro: "Studente" },
  { nome: "Davide", anni: 35, lavoro: "Avvocato" },
  { nome: "Anna", anni: 24, lavoro: "Fotografa" },
  { nome: "Francesco", anni: 12, lavoro: "Studente" },
  { nome: "Elisa", anni: 33, lavoro: "Professoressa" },
  { nome: "Matteo", anni: 26, lavoro: "Analista finanziario" },
  { nome: "Martina", anni: 22, lavoro: "Studente" },
  { nome: "Giovanni", anni: 40, lavoro: "Medico" },
  { nome: "Claudia", anni: 31, lavoro: "Architetto" },
  { nome: "Emanuele", anni: 34, lavoro: "Project Manager" },
  { nome: "Beatrice", anni: 17, lavoro: "Studente" },
  { nome: "Alessandro", anni: 15, lavoro: "Studente" },
  { nome: "Marta", anni: 32, lavoro: "Biologa" },
  { nome: "Fabio", anni: 36, lavoro: "Musicista" },
  { nome: "Chiara", anni: 27, lavoro: "Fotografa" },
  { nome: "Simone", anni: 31, lavoro: "Contabile" },
  { nome: "Ilaria", anni: 23, lavoro: "Marketing Specialist" },
];

console.log(persone);
//! metto in una variabile il filtro che cicla su persone, da un nome al singolo elemento (persona) e filtra solo i maggiorenni
let adulti = persone.filter((persona) => persona.anni > 18);
console.table(adulti);
