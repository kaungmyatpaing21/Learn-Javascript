/*
//ES5
function driverLicense5(testPassed)
{
    console.log(firstName);
    var firstName;
    var yearOfBirth;

    if(testPassed)
    {
        firstName = "Eric";
        yearOfBirth = 1996;
    }

    console.log(firstName + " born in " + yearOfBirth + " is now officially allowed to drive a car.");
}

driverLicense5(true);

// ES6
function driverLicense6(testPassed)
{
    // console.log(firstName); error
    let firstName;
    const yearOfBirth = 1996;
    
    if(testPassed)
    {
        firstName = "Eric";
    }
    console.log(firstName + " born in " + yearOfBirth + " is now officially allowed to drive a car.");
}

driverLicense6(true);

let i = 23;
for(let i = 0; i < 5; i++){
    console.log(i);
}
console.log(i);
*/

/***************************************************************************************************************
 * Strings in ES6
 */

 /*
let firstname = 'John';
let lastname = 'Smith';
const yearOfBirth = 1996;

function calcAge(year){
    return 2020 - year;
}

// ES5
console.log("This is " + firstname + ' ' + lastname + '. He was born in ' + yearOfBirth + '. Now he is ' + calcAge(yearOfBirth) + ' years old.');

// ES6
console.log(`This is ${firstname} ${lastname}. He was born in ${yearOfBirth}. Now he is ${calcAge(yearOfBirth)} years old.`);

let n = `${firstname} ${lastname}`;
console.log(n.startsWith('J'));
console.log(n.endsWith('th'));
console.log(n.includes('oh'));
console.log(firstname.repeat(5));
console.log(`${firstname} `.repeat(5));
*/


/***************************************************
 * Arrow Functions
 */

/*
const years = [1995, 1996, 1997, 1998, 2000];

// ES5
var ages5 = years.map( function (el) {
    return 2020 - el;
})
console.log(ages5);

// ES6

let ages6 = years.map(el => 2020 - el);
console.log(ages6);

ages6 = years.map((el, index) => `Age of index ${index + 1} : ${2020 - el}`);
console.log(ages6);

ages6 = years.map((el, index) => {
    let now = new Date().getFullYear();
    const age = `${now - el}`;
    return `Age of index ${index + 1} : ${age}`;
})
console.log(ages6);
*/


/******************************************************************************
 * Advanced Arrow Functions
 */

// 1. arrow function usages in objects


 /* this scope error
 var box5 = {
     position : 1,
     color : 'green',
     clickMe : function(){
         document.querySelector('.green').addEventListener('click', function (){
            var str = "This is box number " + this.position + " and it is " + this.color + " color.";
            alert(str);
         });
     }
 }
 box5.clickMe();


// ES5 fix
var box5 = {
    position : 1,
    color : 'green',
    clickMe : function(){
        var self = this;
        document.querySelector('.green').addEventListener('click', function (){
           var str = "This is box number " + self.position + " and it is " + self.color + " color.";
           alert(str);
        });
    }
}
box5.clickMe();


// ES6 fix
var box6 = {
    position : 1,
    color : 'green',
    clickMe : function(){
        document.querySelector('.green').addEventListener('click', () => {
           var str = "This is box number " + this.position + " and it is " + this.color + " color.";
           alert(str);
        });
    }
}
box6.clickMe();
*/

// 2. using arrow func: usages in Constructor Functions

/*
function Person(name) {
    this.name = name;
}

const friends = ['mike', 'Erina', 'Leo'];


// this scope error
Person.prototype.myFriends = function(friends) {
    
    var arr = friends.map(function(el) {
        return this.name + " is friend with " + el; 
    })
    console.log(arr);
}
new Person('John').myFriends(friends);

// ES5 fix
Person.prototype.myFriends = function(friends) {
    
    var arr = friends.map(function(el) {
        return this.name + " is friend with " + el; 
    }.bind(this));
    console.log(arr);
}
new Person('John').myFriends(friends);

// ES6 Fix
Person.prototype.myFriends = function(friends) {
    
    var arr = friends.map(el => {
        return this.name + " is friend with " + el; 
    })
    console.log(arr);
}
new Person('John').myFriends(friends);
*/


/************************************************************
 * Destucturing
 */

 /*
 // ES5
 var arr = ['John', 26];
 var name = arr[0];
 var age = arr[1];
 console.log(name);
 console.log(age);

// ES6
const[name, age] = ['John', 26];
console.log(name);
console.log(age);

const obj = {
    firstName : 'John',
    lastName : 'Smith'
};

const{firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);

const{firstName:a, lastName:b} = obj;
console.log(a);
console.log(b);

function calcAge(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}

const[age, retirement] = calcAge(1996);
console.log(age);
console.log(retirement);
*/


/********************************************************
 * Arrays in ES6
 */

 /*
 var boxes = document.querySelectorAll('.box');

 // accessing nodelist in ES5
 var boxesArr5 = Array.prototype.slice.call(boxes);
 boxesArr5.forEach(function(cur) {
     cur.style.backgroundColor = 'dodgerblue';
 })

 // accessing nodelist in ES6
 const boxesArr6 = Array.from(boxes);
 boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');


// for loop in ES5 (continue and break cannot be used in forEach and map)
for(var i = 0; i < boxesArr5.length; i++){
    
    if(boxesArr5[i].className === 'box blue'){
        continue;
    }

    boxesArr5[i].textContent = 'I changed to Blue';
}

// for loop in ES6 (called for of loop)
for (cur of boxesArr6){
    if(cur.className.includes('blue')){
        continue;
    }

    cur.textContent = 'I changed to Blue';
}
*/

// indexing arrays in ES5
/*
var ages = [12, 17, 8, 21, 14, 11];
var full = ages.map(function(cur) {
    return cur >= 18;
});

console.log(full);
console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);


// indexing arrays in ES6
console.log(ages);
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));
*/

/***************************************************
 * Spread Operator
 */

 /*
function addFourAges(a, b, c, d) {
    return a + b + c + d;
}

var sum1 = addFourAges(11, 22, 33, 44);
console.log(sum1);

// ES5
var ages = [11, 22, 33, 44];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

// ES6
const sum3 = addFourAges(...ages);
console.log(sum3);

// spread operator can also be used in joining arrays
const familyJohn = ['John', 'Carter', 'Senor'];
const familyEmily = ['Emily', 'Erina', 'Elice'];
const all = [...familyJohn, 'Lily', ...familyEmily];
console.log(all);

// spread operator in nodelist
const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const allNodes = [h, ...boxes];
Array.from(allNodes).forEach(cur => cur.style.color = 'purple');
*/


/**************************************************
 * Rest Parameters
 */

/* 
 // ES5
 function isFullAge5() {
    //  console.log(arguments);

    var agesArr = Array.prototype.slice.call(arguments);
    agesArr.forEach(function (cur){
        console.log(2020 - cur >= 18);
    });
}

 isFullAge5(1990, 2003, 1965);
 
 // ES6
 function isFullAge6(...years){
     years.forEach(cur => console.log(2020 - cur >= 18));
 }
 isFullAge6(1999, 2003, 1965)
*/

// separating the casual argument and arbitary arguments in ES5 and ES6

/*
 // ES5
 function isFullAge5(limit) {
     console.log(arguments);

    var agesArr = Array.prototype.slice.call(arguments, 1); // slice and exclude the first parameter 'limit'
    agesArr.forEach(function (cur){
        console.log(2020 - cur >= limit);
    });
}

 isFullAge5(21, 1990, 2003, 1965);    // first parameter 21 is a casual para and the formers are arbitary arguments in this case

 // ES6
 function isFullAge6(limit, ...years){
     years.forEach(cur => console.log(2020 - cur >= limit));
 }

 isFullAge6(25, 1990, 2003, 1965)
*/


/*********************************************
 * Default Parameters
*/

/*
// ES5
function SmithFamily(firstName, yearOfBirth, lastName, nationality) {
    lastName === undefined ? lastName = 'Smith' : lastName = lastName;
    nationality === undefined ? nationality = 'American' : nationality = nationality;

    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

// ES6
function SmithFamily(firstName, yearOfBirth, lastName = 'Smith', nationality = 'UK') {

    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var john = new SmithFamily('John', 1996);
var emily = new SmithFamily('Emily', 1987, 'Eren', 'Myanmar');
*/

/************************************************************
 * Maps
 */

 /*
const question = new Map();
question.set('question', 'What is the official name of the latest major version of the javascript?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct Answer.');
question.set(false, 'Wrong Answer! Please try Again!');


// console.log(question.size);
// question.delete(4);
// question.clear();

// if(question.has(4)){
//     console.log('included');
// }

console.log(question.get('question'));

// question.forEach((value, key) => {
//     if(typeof(key) === 'number')
//     {
//         console.log(`Answer ${key}: ${value}`);
//     }
// });

// for(let key of question){
//     console.log(`${key}`);
// }

for(let [key, value] of question.entries())
{
    if(typeof(key) === 'number')
    {
        console.log(`Answer ${key}: ${value}`);
    }
}

let ans = parseInt(prompt("What is your answer?"));
console.log(question.get(ans === question.get('correct')));
*/


/*************************************************
 * Classes in ES6
 */

 /*
 // ES5
var Person5 = function(firstName, yearOfBirth){
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
}

Person5.prototype.calculateAge = function (){
    console.log(new Date().getFullYear() - this.yearOfBirth);
}

var person5 = new Person5('John', 1990);
console.log(person5);

// ES6
class Person6 {
    constructor(firstName, yearOfBirth){
        this.firstName = firstName;
        this.yearOfBirth = yearOfBirth;
    }

    calculateAge(){
        console.log(new Date().getFullYear() - this.yearOfBirth);
    }

    static greeting(){
        console.log('hello there!');
    }
}

let person6 = new Person6('John', 1990);
console.log(Person6.greeting());
*/

/*************************************************************
 * Classes and Subclasses
 */

 /*
 // ES5
 var Person5 = function(firstName, yearOfBirth){
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
}

Person5.prototype.calculateAge = function (){
    console.log(new Date().getFullYear() - this.yearOfBirth);
}

var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals){
    Person5.call(this, name, yearOfBirth);
    this.job = job;
    this.olympicGames = olympicGames;
    this.medals = medals;
}

Athlete5.prototype = Object.create(Person5.prototype); // actually binding subclass(athlete5) to its superclass Person5 here
Athlete5.prototype.wonMedal = function(){
    this.medals++;
    console.log(this.medals);
};

var johnAthlete5 = new Athlete5('John', 1990, 'Swimmer', 10, 5);
// johnAthlete5.wonMedal();
// johnAthlete5.calculateAge();
console.log(johnAthlete5);
*/

/*
//ES6
class Person6 {
    constructor(firstName, yearOfBirth){
        this.firstName = firstName;
        this.yearOfBirth = yearOfBirth;
    }

    calculateAge(){
        console.log(new Date().getFullYear() - this.yearOfBirth);
    }

}

class Athlete6 extends Person6{
    constructor(name, yearOfBirth, job, olympicGames, medals){
        super(name, yearOfBirth);
        this.job = job;
        this.olympicGames = olympicGames;
        this.medals = medals;
    }

    wonMedal(){
        this.medals++;
        console.log(this.medals);
    }
}

const johnAthlete6 = new Athlete6('John', 1990, 'Swimmer', 10, 5);
// johnAthlete6.calculateAge();
console.log(johnAthlete6);
*/