/***************************
 * Functions
 */

/*
// Function Declaration
function calcAge1(birthyear) {
   return 2020 - birthyear;
}

// Function Expression
const calcAge2 = function (birthyear) {
   return 2020 - birthyear;
}

// Arrow Function
const calcAge3 = birthyear => 2020 - birthyear;

const calcRetirement = (birthyear, firstName) => {
   let age = 2020 - birthyear;
   let retirement = 65 - age;
   return `${firstName} left ${retirement} years before retirement.`;
};

console.log(calcAge1(1996));
console.log(calcAge2(1996));
console.log(calcAge3(1996));

console.log(calcRetirement(1996, 'Jonas'));
*/

/****************************
 * Debugging Tutorial
 */

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    //C) Fix
    value: Number(prompt('Enter Temperature: ')),
  };

  //B) Find
  console.table(measurement);

  //   console.log(measurement);
  //   console.warn(measurement.unit);
  //   console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};

//A) Identify
console.log(measureKelvin());
