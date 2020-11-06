///////////////////////////////////////
// Lecture: Hoisting

/**
 * 1. Hoisting with functions
 */ 

// Note: Hoisting with functions only works in function declaration
calculateAge(1996);   // already hoisted befored function execution
function calculateAge(year){
    console.log(2020 - year);
}

// Note: Hoisting with functions doesn't work for function expression
// retirement(1996);  // this won't work
var retirement = function(year){
    console.log(65 - (2020 - year));
} // this is a function expression not function declaration
retirement(1996);


/**
 * Hoisting with variables
 */

console.log(age); // this age is store in the variable object of the global execution context
    var age = 24;   // printing $age without this expression won't work

    function foo(){
        console.log(age); // age is stored in the variable object of the foo function's execution context
        var age = 41;
        console.log(age);
    }
    foo();
    console.log(age);

///////////////////////////////////////
// Lecture: Scoping


// First scoping example

var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}



// Example to show the differece between execution stack and scope chain
/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}*/

///////////////////////////////////////
// Lecture: The this keyword

console.log(this);

// 1
calculateAge(1996); // regular function call and this is involved in gloal execution context or global object
function calculateAge(year){
    console.log(2020 - year);
    console.log(this); // still points to global window object
}

//2
var john = {
    name: 'John',
    yearOfBirth: 1996,
    calculateAge:function(){
        console.log(this);
        console.log(2020 - this.yearOfBirth);

        function innerFunction(){
            console.log(this); //just a function, points to window object
        }
        innerFunction();
    } 
}

john.calculateAge();

// 3
var mike = {
    name: 'Mike',
    yearOfBirth: 1965
}

mike.calculateAge = john.calculateAge; //method borrowing
mike.calculateAge();










