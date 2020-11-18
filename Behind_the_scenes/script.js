/**
 * Javascript - Behind the Scene
 */

'use strict';

/*
function calcAge(birthYear) {
  const age = new Date().getFullYear() - birthYear;

  function printAge() {
    const output = `${firstName}, you are ${age} born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = 'Steven';
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }

    // console.log(str);  refrence error
    console.log(millenial);
    // console.log(add(2, 3));  can only acces not in restrict mode
  }

  printAge();

  return age;
}

const firstName = 'potato';
calcAge(1996);
*/

/************************************************************************
 * PRIMITIVE vs REFERENCES Types
 */

let var1 = 'Hello';
let var2 = var1; // They both will point to the same memory address of the value 'Hello' in callstack
var1 = 'Hello-edited'; // This will create new memory address for var1 in callstack

console.log(`Var1 : ${var1}`); // Hello-edited
console.log(`Var2 : ${var2}`); // Hello

const jessica = {
  age: 23,
  name: 'Jessica Lun',
  family: ['Bob', 'Emily'],
}; // this will create an object in HEAP

const jessicaCopy = jessica; // Both jessicaCopy and jessica will point to a memory reference in CallStack that point to the address of the newly created object in HEAP
jessicaCopy.age = 30; // will do the same thing if jessica.age = 30

console.log(jessica); // 30
console.log(jessicaCopy); // 30

// Copy the object using Object.assign()  [Shallow Copy]

const erina = {
  age: 25,
  name: 'Erina emilia',
  family: ['Bob', 'Juni'],
};

const erinaCopy = Object.assign({}, erina); // inner array of erina won't be copied and so both erinaCopy and erina will point to the same family array
erinaCopy.age = 30; // this will change to erinaCopy Object only
erinaCopy.family.push('Mike', 'Sica'); // this will change to both erina and erinaCopy objects cuz both reference the same family array

console.log(erina);
console.log(erinaCopy);
