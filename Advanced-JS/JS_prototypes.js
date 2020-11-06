/**
 * Flaw of this method - every time we create an instance of Person objects, it will increase eat and sleeps methods in memory
 */

 /*
function Person(name, age){
    let person = {};
    person.name = 'Job';
    person.age = 45;
    person.eat = function(){
        console.log(`${this.name} is eating.`);
    }; 
    person.sleep = function(){
        console.log(`${this.name} is sleeping.`);
    }
    return person;
};

window.person1 = new Person('Job', '30');
window.person2 = new Person('Annie', '25');
*/

/***************
 * The fix for the above problem but not great probably
 */

 /*
 const PersonMethods = {
    eat : function(){
        console.log(`${this.name} is eating.`);
    },
    sleep : function(){
        console.log(`${this.name}is sleeping.`);
    }
 };

 function Person(name, age){
    let person = {};
    person.name = name;
    person.age = age;
    person.eat = PersonMethods.eat;
    person.sleep = PersonMethods.sleep;
    return person;
 }

 window.person1 = new Person('Job', 30);
 window.person2 = new Person('Annie', 25);
 */

/*************
 * About fix isn't great cuz anytime we create a new method we have to do like this 
 */

/*
const PersonMethods = {
    eat : function(){
        console.log(`${this.name} is eating.`);
    },
    sleep : function(){
        console.log(`${this.name}is sleeping.`);
    },
    walk : function(){
        console.log(`${this.name}is walking`);
    }
 };

 function Person(name, age){
    let person = {};
    person.name = name;
    person.age = age;
    person.eat = PersonMethods.eat;
    person.sleep = PersonMethods.sleep;
    person.walk = PersonMethods.walk;
    return person;
 }

 window.person1 = new Person('Job', 30);
 window.person2 = new Person('Annie', 25);
*/

/*******************************
 * The great way is to use Prototypes
 */

 function Person(name, age){
     this.name = name;
     this.age = age;
 }

 Person.prototype.eat = function(){
    console.log(`${this.name} is eating.`);
 }

 Person.prototype.sleep = function(){
    console.log(`${this.name} is sleeping.`);
 }

 Person.prototype.walk = function(){
    console.log(`${this.name} is walking.`);
 }


 