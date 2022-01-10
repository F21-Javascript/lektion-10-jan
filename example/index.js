let myName = 'Christoffer';
const age = 33;

/** IF statement */

//Om villkoret är sant går den i i if-satsen annars else-satsen
if (myName == 'Christoffer') {
    console.log('Hej Christoffer');
} else {
    console.log('Du är inte Christoffer');
}

if (age > 35) {
    console.log('Ung i hjärtat');
} else if (age > 30 && age < 34) {
    console.log('Precis rätt');
}

/** SWITCH / CASE */
const animal = 'CAT';

switch(animal) { //Baserat på innehållet i variabeln animal går den i ett av nedanstående case
    case 'DOG':
        console.log('Voff');
        break;
    case 'CAT':
        console.log('Mjau');
        break;
    default:
        console.log('Muu');
        break;
}