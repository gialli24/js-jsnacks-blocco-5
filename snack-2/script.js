const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'

let namesMessage = "";
people.forEach((person, index, people) => {
  namesMessage += `'${person.name}'`

  if (index !== people.length - 1) {
    namesMessage += `, `
  }
})

console.log(namesMessage);