/*
console.log("hello world");

var firstName = "John";
var age = 28;
var job = "teacher";
var isMarriged = false;

// Type coercion
console.log(firstName + " is a " + age + " years old " + job + ". Is he Marriged? " + isMarriged);

// variable mutation
age = 30;
job = "driver";
console.log(firstName +"is a " + age + " years old " + job + ". Is he Marriged? " + isMarriged);

// alert
alert(firstName + " is a " + age + " years old " + job + ". Is he Marriged? " + isMarriged);

var lastName = prompt("What is his last name?");
console.log(firstName + " " + lastName);
*/

/****************************************************************************************************
 * Javascript Operators

var year, yearJohn, yearMark;
var now = 2018;
var ageJohn = 28;
var ageMark = 30;

yearJohn = now - ageJohn;
yearMark = now - ageMark;
console.log(yearJohn);
console.log(yearMark);

console.log(now + 2);
console.log(now * 2);
console.log(now / 2);

// logical operator
var johnCompare = ageMark > ageMark;
console.log(johnCompare);

// typeOf operator
console.log(typeof johnCompare);
*/

/*******************************************************************************************************
 * Operator precedence


 var now = 2018;
 var yearJohn = 1989;
 var fullAge = 18;

 var isFullAge = now - yearJohn >= fullAge;
 console.log(isFullAge);

 var ageJohn = 35;
 var ageMark = 28;
 var average = (ageJohn + ageMark) / 2;
 console.log(average);

 // Multiple assignment
  var x, y;
  x = y = (3 + 5) * 4 - 6;
  console.log(x, y);

  x += 1
  x++;
  console.log(x);
  */


/**
 * if..else
 *
  var firstName = "John";
  var isMarriged = false;

  if(isMarriged === true){
      console.log(firstName + " is marriged.");
  }else{
      console.log(firstName + " will probabily marry soon :)");
  }
  */

/****************************************************************************************************
 * Ternary Operator

    var firstName = "John";
    var age = 22;

    age >= 18 ? console.log(firstName + " drinks beer.") : console.log(firstName + " drinks juice.");
    var drink = age >= 18 ? "beer" : "juice";
    console.log(drink);


    // switch statement
    switch(true){
        case age >= 13 && age < 20:
            console.log(firstName + " is a teeneager.");
            break;
        case age >= 20 && age < 30:
            console.log(firstName + " is a young man.");
            break;
        case age > 30:
            console.log(firstName + " is a man.");
            break;
    }
*/

/**************************************************************************************************
 * Function expression
 *

    var whatDoYouDo = function(job, firstName){
        switch(job){
            case "teacher":
                return firstName + " teaches how to write codes.";
            case "driver":
                return firstName + " teaches how to drive car.";
            case "designer":
                return firstName + " designs beautiful websites.";
            default:
                return " does something else.";
        }
    }

    console.log(whatDoYouDo("teacher", "John"));
    console.log(whatDoYouDo("designer", "Mike"));
    console.log(whatDoYouDo("driver", "Harry"));
*/

/*************************************************************************************************
 * Javascript Arrays

var names = ['John', 'Mark', 'Janes'];
var years = new Array(1991, 2010, 2013, 2019);

console.log(names.length);
console.log(years)

// mutate array data
names[1] = 'David';
names[names.length] = 'Micky';
console.log(names);

// diferent array data type
var john = ['John', 'Smith', 1990, false];
john.push('blue');  // insert at end of the array
john.unshift('Mr.'); // insert at the start of the array
console.log(john);

john.pop()   // delete last element
john.shift() // delete first element
console.log(john);

console.log(john.indexOf(1990));
console.log(john.indexOf(23));

var isDesigner = john.indexOf('designer') === -1? "John is not a designer." : "John is a designer.";
console.log(isDesigner);
*/

/****************************************************************************************************
 * Tip Calculator
 *

 function tipCalculator(bill){
     var percentage;
     if(bill <= 50){
         percentage = .2;
     }else if(bill > 50 && bill <= 200){
         percentage = .15;
     }else{
         percentage = .1;
     }
     return bill * percentage;
 }

 var bill = [124, 48, 268];

 var tip = [tipCalculator(bill[0]),
            tipCalculator(bill[0]),
            tipCalculator(bill[0])];

 var final_bill = [bill[0] * tip[0],
                   bill[1] * tip[0],
                   bill[2] * tip[0]];

console.log(final_bill);
*/

/***************************************************************************************************
 * Objects and Properties
 *

 // creating object using object literal
  var john = {
      firstName: "John",
      lastName: "Smith",
      birthYear: 1990,
      family: ['John', 'Tony', 'Bruce', 'Dasy'],
      job: 'teacher',
      isMarriged: false
  }

  console.log(john.firstName);
  console.log(john['isMarriged']);
  var x = 'birthYear';
  console.log(john[x]);

  john.firstName = 'David';
  john.isMarriged = true;
  console.log(john);

  // creating object using new Object syntax
  var jane = new Object()
  jane.firstName = 'John';
  jane.lastName = 'Smith';
  jane.birthYear = 1965;
  jane.family = ['John', 'Tony', 'Bruce', 'Dasy'];
  jane['job'] = 'teacher';
  jane.isMarriged = false;

  console.log(jane);
*/

/******************************************************************************************************
 * Objects and methods
 *

var john = {
    firstName: "John",
    lastName: "Smith",
    birthYear: 1996,
    family: ['John', 'Tony', 'Bruce', 'Dasy'],
    job: 'teacher',
    isMarriged: false,
    calcAge: function(){
        this.age = 2020 - this.birthYear;
    }
};

john.calcAge();
console.log(john);
*/

/********************************************************************************************************
 * Coding challenge 4 (Objects)
 *

 var john = {
     fullName: 'John Carter',
     mass: 119,
     height: 1.95,
     calcBMI: function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
     }
 };

 var mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function(){
       this.bmi = this.mass / (this.height * this.height);
       return this.bmi;
    }
};

if(john.calcBMI() > mark.calcBMI()){
    console.log(john.fullName + " has a higher BMI of " + john.bmi);
}else if(mark.bmi > john.bmi){
    console.log(mark.fullName + " has a higher BMI of " + mark.bmi);
}else{
    console.log("They have the same BMI.");
}
*/

/*********************************************************************************
 * Loops
 *

 var john = ['John', 'Smith', 1990, false, 'designer'];
 for(var i = 0; i < john.length; i++){
     if(typeof john[i] !== 'string') continue;
     console.log(john[i]);
 }
*/

/**********************************************************************************
 * Coding Challenge 5 (loops)
 */

/*
var john = {
   fullName: "John Corner",
   bills: [124, 28, 268, 180, 42],
   calcBill: function(){
       this.tips = [];
       this.final_bill = [];

       // this.tips = this.final_bill = [] if you do that whenever u insert into tips, will insert same value to final_bill as well as they are same array

       for(var i = 0; i < this.bills.length; i++){

           var percentage;
           var bill = this.bills[i];

           if(bill <= 50){
               percentage = .2;
           }else if(bill > 50 && bill <= 200){
               percentage = .15;
           }else{
               percentage = .1;
           }

           this.tips[i] = bill * percentage;
           this.final_bill[i] = bill + bill * percentage;
       }
   }
}

john.calcBill();
console.log(john);
*/

/************************************************************************************
 * Type Conversion & Type Coercion
 */

/*
// only + operator coerce number to string
console.log('23' + '10' - 11);

//  operator coerce string to number
console.log('23' - '10' - 11);
console.log('22' * 2);
console.log('22' / 2);

console.log(2 + 3 + 4 + '5');
console.log('10' - '4' - '3' - 2 + '5');
*/

/*****************************************************************
 * 5 Falsy values in Javascript
 * - 0
 * - ''
 * - undefined
 * - null
 * - NaN
 *
 * when these values are converted to boolean, it'll return False,
 * everything else are so-called truthy values.
 */

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

/**
 * Boolean func: converting to boolean is always implict(type coercion), not explict
 * Type coercion to boolean happens behind the scene in two scenarios:
 *
 *  1. when using logical operators
 *  2. in a logical context (For example: if/else statements)
 */

const money = 0;
if (money) {
    console.log("Don't spend it all.");
} else {
    console.log('You should get a Job.');
}