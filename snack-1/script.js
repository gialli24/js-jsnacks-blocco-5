const names = ['Edoardo', 'Simone', 'Francesco'];

// Stampa in console tutti i nomi
// Risultato: 'Edoardo', 'Simone', 'Francesco'

let namesMessage = "";
names.forEach((name, index) => {
    namesMessage += `'${name}'`

    if (index !== names.length - 1) {
        namesMessage += `, `
    }
})

console.log(namesMessage);