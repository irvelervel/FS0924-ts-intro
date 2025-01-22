var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// ogni riga di JS valida è anche una valida riga di TS!
console.log('CIAONE TYPESCRIPT!');
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
var myName = 'Stefano';
var myNumber = 10;
console.log(myName.toUpperCase()); // 'STEFANO'
// myNumber.toUpperCase() <-- TS segnala l'errore già qui!!
var isLoading = true;
// isLoading = 100 <-- NON SI PUÒ FARE IN TS (...meno male!)
myName = 'Gigio';
myNumber = 500;
var boh = undefined;
var boh2 = null;
// TS è abbastanza intelligente il più delle volte da capire in AUTONOMIA il tipo
// dei dati, e lo fa tramite il loro valore iniziale:
var automatic = 'EPICODE'; // <-- TS ha capito che automatic è di tipo "string"
var n1 = 5; // <-- TS ha capito che n1 è di tipo "number"
// questa capacità di TS di intuire il tipo del dato a partire dal suo valore iniziale
// viene chiamata "TYPE INFERENCE"
var num = 100;
// il tipo "any" non introduce un tipo particolare nella stesura del codice
// vi permette di "spegnere" i controlli di tipo da parte di TS
// --> ATTENZIONE <-- perchè a questo punto guidate "a luci spente",
// TS non vi avviserà di eventuali incongruenze nel codice (a quel punto tanto vale
// tornare a scrivere in JS!)
// num = 'stefano'
// num = true
// num.toUpperCase() // <-- questa riga esploderebbe, ma TS non ci avvisa :(
// es. di FUNZIONE tipizzata (che torna una stringa)
var sayHi = function () {
    return 'HI!';
};
// sull'esecuzione di sayHi posso invocare i metodi e le proprietà delle stringhe!
console.log(sayHi().toLowerCase());
// RISOLVIAMO UN CLASSICO PROBLEMA DI JS
var sumOfTwoNumbers = function (n1, n2) {
    return n1 + n2;
};
sumOfTwoNumbers(4, 9); // 13
sumOfTwoNumbers('4', '9'); // '49'
var y = 10;
console.log(typeof y); // "number"
var sumOfTwoNumberInTypeScript = function (n1, n2) {
    return n1 + n2;
};
sumOfTwoNumberInTypeScript(5, 6); // 11
// sumOfTwoNumberInTypeScript(5, '6') // la funzione dà errore di compilazione
// sumOfTwoNumberInTypeScript(10) // non accetta un'invocazione con un solo argomento
// TYPE UNION
var stringOrNumber = 'stefano';
var stringOrNumber2 = 101;
var stringOrNumber3 = 'ciao';
var daniele;
console.log(daniele); // undefined
// FUNZIONI CON PARAMETRI OPZIONALI
var greetings = function (greet, name) {
    return 'I am the greetings function. ' + greet + ', ' + (name || 'User') + '!';
};
console.log(greetings('Good morning', 'Stefano'));
console.log(greetings('Ciao', 'Daniele'));
console.log(greetings('Ciao'));
// il ? indica un parametro per cui non è sempre necessario fornire un argomento
// è come se al parametro della funzione facessimo una TYPE UNION con il tipo 'undefined'
// VALORI DI RITORNO
var makeNumber = function (val) {
    if (val === 'ciao') {
        return 0;
    }
    else {
        return parseInt(val);
    }
};
var arrow = function () {
    return 0;
};
makeNumber('65'); // 65
// ARRAY
var arrayOfNames = ['Gianluca', 'Federico', 'Alessandro'];
var arrayOfNumbers = [5, 6, 76];
arrayOfNumbers.push(100);
var arrayOfStrings = __spreadArray(__spreadArray([], arrayOfNames, true), ['Stefano'], false); // 4 elementi
// modo alternativo: Array<string> o Array<number> etc.
var arrayOfOtherNumbers = [0, 0.5];
var mixedArray = [10, 'Stefano'];
mixedArray.push('Gianni');
arrayOfNames.forEach(function (name) {
    var firstChar = name.slice(0, 1);
    console.log(firstChar);
});
arrayOfNumbers.forEach(function (n) {
    console.log(n.toFixed(2));
});
// variante sugli array: la TUPLA
var genericArray = ['Stefano', 10, 'EPICODE'];
var z = genericArray[2]; // siamo andati a "forzare" TS e dirgli che il terzo
// elemento dell'array era una stringa
z.toUpperCase(); // a questo punto sono riuscito ad applicare il metodo toUpperCase()
var tuple = [50, 'ciao', '', 0];
tuple.push(100);
tuple[1].toUpperCase();
// OGGETTI
var epicodeStaffMember1 = {
    firstName: 'Stefano',
    lastName: 'Casasola',
    age: 19,
    area: 'FVG',
    modules: ['U1', 'U2', 'U3'],
};
console.log(epicodeStaffMember1.modules[0].slice(1)); // 1
var pet1 = {
    species: 'Doggo',
    breed: 'Labrador',
    age: 5,
    skills: ['barking', 'playing', 'sleeping'],
    numberOfPaws: 4,
};
// se volessi riutilizzare la struttura di pet1 per creare altri pets "in serie"?
var pet2 = {
    species: 'Cat',
    breed: 'European',
    age: 7,
    skills: ['asking-for-food', 'playing', 'destroying', 'judging'],
    numberOfPaws: 4,
};
var pet3 = {
    species: 'Snake',
    breed: 'Copperhead',
    age: 1,
    skills: ['crawls', 'eat', 'sleep'],
};
var mario = {
    name: 'Mario Mario',
    age: 30,
    height: 170,
    eyeColor: 'brown',
    hairColor: 'brown',
};
var luigi = {
    name: 'Luigi Mario',
    age: 30,
    height: 175,
    eyeColor: 'brown',
    hairColor: 'brown',
    favoriteHand: 'left',
    favoriteCourt: 'grass',
    championshipsWon: 0,
};
var bowser = {
    name: 'Bowser Koopa',
    age: 35,
    height: 185,
    eyeColor: 'brown',
    hairColor: 'brown',
    favoriteHand: 'right',
    favoriteCourt: 'clay',
    championshipsWon: 10,
};
var yoshi = {
    name: 'Yoshi',
    age: 25,
    height: 175,
    eyeColor: 'brown',
    hairColor: 'brown',
    favoriteHand: 'right',
    favoriteCourt: 'grass',
    championshipsWon: 3,
};
var tennisPlayers = [];
// const tennisPlayers: TennisPlayer[] = []
tennisPlayers.push(luigi, bowser, yoshi);
console.log('TENNISPLAYERS', tennisPlayers);
tennisPlayers.forEach(function (player) {
    console.log(player.favoriteHand.length.toPrecision(2));
});
var arrayOfTennisPlayersNames = tennisPlayers.map(function (player) {
    return player.name;
});
var italianAddress = {
    street: 'Via Roma',
    civicNumber: 1,
    city: 'Paperino',
    zipCode: '59100',
    area: 'Italy',
};
italianAddress.area.toUpperCase();
var americanAddress = {
    street: 'E Hills Dr',
    civicNumber: 2711,
    city: 'Moore',
    zipCode: '73160',
    area: {
        state: 'Oklahoma',
        country: 'USA',
    },
};
americanAddress.area.country.toUpperCase();
