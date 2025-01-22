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
let stringOrNumber2: string | number = 101

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
const makeNumber = function (val: string): number {
  if (val === 'ciao') {
    return 0
  } else {
    return parseInt(val)
  }
}

const arrow = (): number => {
  return 0
}

makeNumber('65') // 65

// ARRAY
let arrayOfNames = ['Gianluca', 'Federico', 'Alessandro']

let arrayOfNumbers: number[] = [5, 6, 76]
arrayOfNumbers.push(100)

let arrayOfStrings: string[] = [...arrayOfNames, 'Stefano'] // 4 elementi
// modo alternativo: Array<string> o Array<number> etc.
let arrayOfOtherNumbers: Array<number> = [0, 0.5]
let mixedArray: Array<MySpecialType> = [10, 'Stefano']
mixedArray.push('Gianni')

arrayOfNames.forEach((name) => {
  const firstChar = name.slice(0, 1)
  console.log(firstChar)
})

arrayOfNumbers.forEach((n) => {
  console.log(n.toFixed(2))
})

// variante sugli array: la TUPLA
let genericArray: (string | number)[] = ['Stefano', 10, 'EPICODE']

const z = genericArray[2] as string // siamo andati a "forzare" TS e dirgli che il terzo
// elemento dell'array era una stringa
z.toUpperCase() // a questo punto sono riuscito ad applicare il metodo toUpperCase()

let tuple: [number, string, string, number] = [50, 'ciao', '', 0]
tuple.push(100)
tuple[1].toUpperCase()

// OGGETTI
let epicodeStaffMember1 = {
  firstName: 'Stefano',
  lastName: 'Casasola',
  age: 19,
  area: 'FVG',
  modules: ['U1', 'U2', 'U3'],
}

console.log(epicodeStaffMember1.modules[0].slice(1)) // 1

// INTERFACCE
// un'interfaccia è una tipo di dato specifico per un oggetto
interface Pet {
  species: string
  breed: string
  age: number
  skills: string[]
  numberOfPaws?: number
}

let pet1: Pet = {
  species: 'Doggo',
  breed: 'Labrador',
  age: 5,
  skills: ['barking', 'playing', 'sleeping'],
  numberOfPaws: 4,
}

// se volessi riutilizzare la struttura di pet1 per creare altri pets "in serie"?
let pet2: Pet = {
  species: 'Cat',
  breed: 'European',
  age: 7,
  skills: ['asking-for-food', 'playing', 'destroying', 'judging'],
  numberOfPaws: 4,
}

let pet3: Pet = {
  species: 'Snake',
  breed: 'Copperhead',
  age: 1,
  skills: ['crawls', 'eat', 'sleep'],
}

// le interfacce si possono ESTENDERE
interface HumanBeing {
  name: string
  age: number
  height: number
  eyeColor: string
  hairColor: string
}

const mario: HumanBeing = {
  name: 'Mario Mario',
  age: 30,
  height: 170,
  eyeColor: 'brown',
  hairColor: 'brown',
}

interface TennisPlayer extends HumanBeing {
  favoriteHand: string
  championshipsWon: number
  favoriteCourt: string
}

const luigi: TennisPlayer = {
  name: 'Luigi Mario',
  age: 30,
  height: 175,
  eyeColor: 'brown',
  hairColor: 'brown',
  favoriteHand: 'left',
  favoriteCourt: 'grass',
  championshipsWon: 0,
}

const bowser: TennisPlayer = {
  name: 'Bowser Koopa',
  age: 35,
  height: 185,
  eyeColor: 'brown',
  hairColor: 'brown',
  favoriteHand: 'right',
  favoriteCourt: 'clay',
  championshipsWon: 10,
}

const yoshi: TennisPlayer = {
  name: 'Yoshi',
  age: 25,
  height: 175,
  eyeColor: 'brown',
  hairColor: 'brown',
  favoriteHand: 'right',
  favoriteCourt: 'grass',
  championshipsWon: 3,
}

const tennisPlayers: Array<TennisPlayer> = []
// const tennisPlayers: TennisPlayer[] = []
tennisPlayers.push(luigi, bowser, yoshi)
console.log('TENNISPLAYERS', tennisPlayers)

tennisPlayers.forEach((player) => {
  console.log(player.favoriteHand.length.toPrecision(2))
})

const arrayOfTennisPlayersNames: string[] = tennisPlayers.map((player) => {
  return player.name
})

// GENERICS
// Un GENERIC è un TIPO passato come ARGOMENTO per un'INTERFACCIA
// Lo si definisce nella stesura dell'interfaccia, e potrà essere utilizzato
// come valore di tipo per una o più proprietà; il suo scopo è rendere
// l'interfaccia più "generica" (più riutilizzabile!)

interface USAAddress {
  state: string
  country: string
}

interface Address<A> {
  street: string
  civicNumber: number
  city: string
  zipCode: string
  area: any // sto dicendo che NON CONOSCO il tipo di "area"; verrà passato
  // all'utilizzo dell'interfaccia sotto forma di GENERIC
}

let italianAddress: Address<string> = {
  street: 'Via Roma',
  civicNumber: 1,
  city: 'Paperino',
  zipCode: '59100',
  area: 'Italy',
}

italianAddress.area.toUpperCase()

let americanAddress: Address<USAAddress> = {
  street: 'E Hills Dr',
  civicNumber: 2711,
  city: 'Moore',
  zipCode: '73160',
  area: {
    state: 'Oklahoma',
    country: 'USA',
  },
}

americanAddress.area.country.toUpperCase()
