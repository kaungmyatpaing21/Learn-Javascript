/**
 * Javascript - Behind the Scene
 */

'use strict';

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
