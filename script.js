/** #1
    Creare un array di oggetti: ogni oggetto descriverà una bici 
    da corsa con le seguenti proprietà: nome e peso.
    Stampare a schermo la bici con peso minore.
 */

//  ES5
// var myBicycle =[
//    {
//       name : "Graziella",
//       weight : 50
//    },
//    {
//       name : "Atala",
//       weight : 70
//    },
//    {
//       name : "SuperFast",
//       weight : 20
//    },
//    {
//       name : "Dedala",
//       weight : 100
//    }
// ]

// var minWeight = myBicycle[0].weight;

// for (var i = 0; i < myBicycle.length; i++) { 
//    if (myBicycle[i].weight < minWeight) {
//       minWeight = myBicycle[i].weight;
//    }
// }

// console.table(myBicycle);
// console.log(minWeight);


// ES6
// const myBicycle = [
//    {
//       name : "Graziella",
//       weight : 50
//    },
//    {
//       name : "Atala",
//       weight : 70
//    },
//    {
//       name : "SuperFast",
//       weight : 20
//    },
//    {
//       name : "Dedala",
//       weight : 100
//    }
// ]

// console.table(myBicycle)

// myNewBike = newBicycle("Triciclo", 10);
// myBicycle.push(myNewBike);

// let minWeight = myBicycle[0].weight;

// for (let i = 0; i < myBicycle.length; i++) { 

//    let { weight } = myBicycle[i];

//    if (weight < minWeight) {
//       minWeight = weight;
//    }
// }

// console.table(myBicycle)
// console.log(minWeight);


// // FUNCTIONS
// function newBicycle(name,weight) {
//    return {name, weight};
// }



/** #2
    Creare un array di oggetti di squadre di calcio.
    Ogni squadra avrà diverse proprietà: nome, punti fatti e falli subiti.
    Nome sarà l'unica proprietà da compilare, mentre le altre saranno tutte settate a 0.
    Generare numeri random al posto degli 0 nelle proprietà:
    Punti fatti e falli subiti
    Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
 */

// const footballTeams = [
//    {
//       name : "Fiorentina",
//       goals : 0,
//       foulPlays : 0 
//    },
//    {
//       name : "Napoli",
//       goals : 0,
//       foulPlays : 0
//    },
//    {
//       name : "Inter",
//       goals : 0,
//       foulPlays : 0 
//    },
//    {
//       name : "Roma",
//       goals : 0,
//       foulPlays : 0 
//    },
// ];

// for (let i=0; i < footballTeams.length; i++) {
//    footballTeams[i].goals = getRandomInt(1,100);
//    footballTeams[i].foulPlays = getRandomInt(1,250);
// }

// console.table(footballTeams);

// // Destrutturazione
// let goalsFoulsArray = [];

// for (const team of footballTeams) {
//    let {goals, foulPlays} = team;
//    let obj = {goals, foulPlays};
//    goalsFoulsArray.push(obj);
// }

// console.log(goalsFoulsArray);


// // FUNZIONI
// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min) + min); 
// }



// #3
// Scrivere una funzione che accetti tre argomenti: un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione (indice) compresa tra i due numeri specificati.
// Usiamo i nuovi metodi degli array forEach() o filter().

const countries = ["Germany", "Japan", "Canada", "Italy", "France", "Spain", "New Zealand", "Alaska", "Mexico", "China"];

// FUNZIONI
// Using forEach()
// function arraySlicer(array,a,b) {
//     let slicedCountries = [];
//     countries.forEach((_,index) => {
//         if (index >= a && index <= b ) {
//             slicedCountries.push(array[index]);
//         }
//     })
//     return slicedCountries;
// }

// console.log(arraySlicer(countries,3,6));


// Using filter() only
// function arraySlicer(array,a,b) {
//     return array.filter((element,index) => (index >= a && index <= b));
// }


// Using filter() and the rest parameter
// function arraySlicer(array,...args) {
//     args.sort();
//     return array.filter((element,index) => (index >= args[0] && index <= args[1]));
// }


// Using filter(), the rest parameter and destructuring 
function arraySlicer(array,...args) {
    args.sort();
    let [a,b] = args;
    return array.filter((_,index) => (index >= a && index <= b));
}

console.log(arraySlicer(countries,1,7));