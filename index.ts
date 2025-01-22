// ogni riga di JS valida è anche una valida riga di TS!
console.log('CIAONE TYPESCRIPT!')

// però TS nasce con lo scopo di TIPIZZARE JS, ovvero di fornire delle definizioni
// di TIPO alle nostre strutture dati (in modo che l'editor possa aiutarci nella
// stesura del codice ed evidenziarci con maggiore precisione gli errori)

// DEFINIZIONE DI VARIABILE: TIPI PRIMITIVI
// string es. 'Stefano
// number es. 100
// boolean es. true
// undefined es. undefined
// null es. null
// any

// TS permette l'assegnazione di un TIPO ad ogni struttura dati, tramite l'operatore ":"
// una volta che TS ha capito il tipo di un dato, mostrerà come suggerimenti le opzioni
// disponibili e segnalerà con errori le operazioni illegali

let myName: string = 'Stefano'
let myNumber: number = 10

console.log(myName.toUpperCase()) // 'STEFANO'
// myNumber.toUpperCase() <-- TS segnala l'errore già qui!!
let isLoading: boolean = true
// isLoading = 100 <-- NON SI PUÒ FARE IN TS (...meno male!)
myName = 'Gigio'
myNumber = 500

let boh: undefined = undefined
let boh2: null = null

// TS è abbastanza intelligente il più delle volte da capire in AUTONOMIA il tipo
// dei dati, e lo fa tramite il loro valore iniziale:
let automatic = 'EPICODE' // <-- TS ha capito che automatic è di tipo "string"
let n1 = 5 // <-- TS ha capito che n1 è di tipo "number"
// questa capacità di TS di intuire il tipo del dato a partire dal suo valore iniziale
// viene chiamata "TYPE INFERENCE"

let num: any = 100
// il tipo "any" non introduce un tipo particolare nella stesura del codice
// vi permette di "spegnere" i controlli di tipo da parte di TS
// --> ATTENZIONE <-- perchè a questo punto guidate "a luci spente",
// TS non vi avviserà di eventuali incongruenze nel codice (a quel punto tanto vale
// tornare a scrivere in JS!)
// num = 'stefano'
// num = true
// num.toUpperCase() // <-- questa riga esploderebbe, ma TS non ci avvisa :(

// es. di FUNZIONE tipizzata (che torna una stringa)
const sayHi = function () {
  return 'HI!'
}

// sull'esecuzione di sayHi posso invocare i metodi e le proprietà delle stringhe!
console.log(sayHi().toLowerCase())

// RISOLVIAMO UN CLASSICO PROBLEMA DI JS
const sumOfTwoNumbers = function (n1, n2) {
  return n1 + n2
}

sumOfTwoNumbers(4, 9) // 13
sumOfTwoNumbers('4', '9') // '49'

let y = 10
console.log(typeof y) // "number"

const sumOfTwoNumberInTypeScript = function (n1: number, n2: number) {
  return n1 + n2
}

sumOfTwoNumberInTypeScript(5, 6) // 11
// sumOfTwoNumberInTypeScript(5, '6') // la funzione dà errore di compilazione
// sumOfTwoNumberInTypeScript(10) // non accetta un'invocazione con un solo argomento

// TYPE UNION
let stringOrNumber: string | number = 'stefano'
let stringOrNumber2: string | number = 100

// TYPE ALIAS
type MySpecialType = string | number // definizione di TIPO personalizzato in PascalCase
let stringOrNumber3: MySpecialType = 'ciao'

let daniele
console.log(daniele) // undefined

// FUNZIONI CON PARAMETRI OPZIONALI
const greetings = function (greet: string, name?: string) {
  return 'I am the greetings function. ' + greet + ', ' + (name || 'User') + '!'
}

console.log(greetings('Good morning', 'Stefano'))
console.log(greetings('Ciao', 'Daniele'))
console.log(greetings('Ciao'))
// il ? indica un parametro per cui non è sempre necessario fornire un argomento
// è come se al parametro della funzione facessimo una TYPE UNION con il tipo 'undefined'

// VALORI DI RITORNO
