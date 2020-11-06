/**
 * Creating objects using Function Constructor Pattern
 */

// var john = {
//     name: 'John',
//     yearOfBirth: 1990,
//     job: 'teacher'
// }

// // creating objects using constructor function
// var Person = function(name, yearOfBirth, job){
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//     // this.calculateAge = function(){
//     //     console.log(2020 - this.yearOfBirth);
//     // }
// }

// Person.prototype.calculateAge = function(){
//     console.log(2020 - this.yearOfBirth);
// }

// Person.prototype.lastName = 'Smith';

// var john = new Person('John', 1990, 'teacher');
// var jane = new Person('Jane', 1960, 'driver');
// var mike = new Person('Mike', 2000, 'programmer');

// console.log(john.yearOfBirth);
// console.log(jane.yearOfBirth);
// console.log(mike.yearOfBirth);

// john.calculateAge();
// console.log(john.lastName);

/****************************************************************
 * Creating objects using Object.create()
 */

 // method 1
// var personProto = {
//     calculateAge: function(){
//         console.log(2020, this.yearOfBirth);
//     }
// }

// var john = Object.create(personProto);
// john.name = 'John';
// john.yearOfBirth = 1990;
// john.job = 'teacher';
// console.log(john);

// // method 2
// var jane = Object.create(personProto, {
//    name: {value: 'Jane'},
//    yearOfBirth: {value: '1960'},
//    job: {value: 'programmer'} 
// });
// console.log(jane);

/***************************************************************
 * Primitves vs Objects
 */

// // primitives
// var a = 30;
// var b = a; // save as a copy of a
// var a = 50;
// console.log(a, b)

// // objects
// var obj1 = {
//     name: 'John',
//     age: 19
// }

// obj2 = obj1;
// obj1.age = 24;
// console.log(obj1.age, obj2.age);

// // Functions
// var age = 100;

// var obj3 = {
//     name: 'Jonas',
//     city: 'Yangon'
// }

// function change(a, b){
//     a = 300,
//     b.city = 'Mandalay'
// }

// change(age, obj3.city);
// console.log(age, obj3.city);

/*********************************************************************
 *   Passing Functions as arguments
 */

//  var years = [1990, 1960, 1985, 2005, 1998];
 
//  function arrayCalc(arr, fn){
//     var arrRes = [];
//     for(var i = 0; i < arr.length; i++){
//         arrRes.push(fn(arr[i]));
//     }
//     return arrRes;
//  }

//  function calculateAge(el){
//     return 2020 - el;
//  }

//  function isFullAge(el){
//     return el >= 18;
//  }

//  function maxHearthRate(el){
//     if(el >= 18 && el <= 81){
//         return Math.round(206.9 - (0.67 * el));
//     }
//     else{
//         return -1;
//     }
//  }

//  var ages = arrayCalc(years, calculateAge);
//  console.log(ages);
//  var fullAges = arrayCalc(ages, isFullAge);
//  console.log(fullAges);
//  var rates = arrayCalc(ages, maxHearthRate);
//  console.log(rates);

/*************************************************************************************
 *  Functions returning functions
 */

// function interviewQuestion(job){
//     if(job === 'designer'){
//         return function(name){
//             console.log(name + ", Can you explain me what UX design is?");
//         }
//     }else if(job === 'teacher'){
//         return function(name){
//             console.log("What subject do you teach, " + name + "?");
//         }
//     }else{
//         return function(name){
//             console.log("What do you do, " + name + "?");
//         }
//     }
// }

// var designerQuestion = interviewQuestion('designer');
// var teacherQuestion = interviewQuestion('teacher');

// designerQuestion('Mike');
// teacherQuestion('John');

// // calling function rightaway without storing into medium variable
// interviewQuestion('teacher')('Jane');

/*****************************************************************************************
 * Immediately Invoked Function Expression(IIFE)
 */

// function game(){
//      var score = Math.random() * 10;
//      console.log(score >= 5);
//  }
//  game();

// (function(goodLuck){
//     var score = Math.random() * 10;
//     console.log(score >= 5 - goodLuck);
// })(5); // IIFE

/************************************************************************************
 * Clousures in JS
 */

// function retirement(retirementAge){
//     a = " years left until retirement.";
//     return function(yearOfBirth){
//         age = 2020 - yearOfBirth;
//         console.log((retirementAge - age) + a);
//     }
// }

// retirementUS = retirement(66);
// retirementGermany = retirement(65);
// retirementMyanmar = retirement(60);
// retirementUS(1996);
// retirementGermany(1996);
// retirementMyanmar(1996);

// // interview Question code with clousure
// function interviewQuestion(job){
//     return function(name){
//         if(job === 'designer'){
//             console.log(name + ', Can you explain me what UX design is?');
//         }else if(job == 'teacher'){
//             console.log(name + ', what subject do you teach?');
//         }else{
//             console.log("What do you do, " + name);
//         }
//     }
// }

// interviewQuestion('teacher')('Mike');

/**********************************************************************************
 * Blind, call and apply methods
 */

// var john = {
//     name: 'John',
//     age : 26,
//     job : 'teacher',
//     presentation : function(style, timeOfDay){
//         if(style === 'formal'){
//             console.log('Good ' + timeOfDay + ", Ladies and gentlemen! I\'m " + this.name + ', I\'m ' + this.job + ' and I\'m '+ this.age + ' years old.');
//         }else if(style === 'friendly'){
//             console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m ' + this.job + ', and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
//         }
//     }
// }

// john.presentation('formal', 'morning');
// john.presentation('friendly', 'night');

// var emilly = {
//     name: 'Emilly',
//     age : 22,
//     job : 'designer'
// }

// // call
// john.presentation.call(emilly, 'formal', 'morning');

// // apply
// john.presentation.apply(emilly, ['friendly', 'night']);

// // bind
// johnFormal = john.presentation.bind(john, 'formal');
// johnFormal('morning');

// emillyFriendly = john.presentation.bind(emilly, 'friendly');
// emillyFriendly('night');

// // recent problem updated with bind
//  var years = [1990, 1960, 1985, 2005, 1998];
 
//  function arrayCalc(arr, fn){
//     var arrRes = [];
//     for(var i = 0; i < arr.length; i++){
//         arrRes.push(fn(arr[i]));
//     }
//     return arrRes;
//  }

//  function calculateAge(el){
//     return 2020 - el;
//  }

//  function isFullAge(limit, el){
//     return el >= limit;
//  }

//  var ages = arrayCalc(years, calculateAge);
//  var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
//  console.log(ages);
//  console.log(fullJapan);