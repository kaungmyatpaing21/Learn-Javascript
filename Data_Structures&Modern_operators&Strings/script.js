'use strict';

// 3) Enhanced ES6 Object literal
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [`day-${2 + 4}`]: {
    open: 0, // open 24 hours
    close: 24,
  },
};

const resturant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // 1) Enhanced ES6 object literal
  openingHours,

  // 2) Enhanced ES6 object literal
  order(starterMenuIndex, mainMenuIndex) {
    return [this.starterMenu[starterMenuIndex], this.mainMenu[mainMenuIndex]];
  },

  orderDelivery({ mainIndex, starterIndex, time, address }) {
    console.log(
      `Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3},`
    );
  },

  orderPizza(mainIngredients, ...otherIngredients) {
    console.log(mainIngredients);
    console.log(otherIngredients);
  },
};

/************************************************
 * Destructuring Arrays
 */

/*
// 1) basic
const arr = [2, 3, 4];
const [f, s, t] = arr;
console.log(f, s, t);

// 2) skipping
const [f1, , t1] = arr;
console.log(f1, t1);

// 3) swaping
const arr2 = ['there', 'hello'];
let [primary, secondary] = arr2;
console.log(primary, secondary);
[secondary, primary] = [primary, secondary];
console.log(primary, secondary);

// 4) receive 2 return values from a function
const [starter, mainCourse] = resturant.order(2, 0);
console.log(starter, mainCourse);

// 5) Destructuring nested array
const arr3 = [1, 2, [3, 4]];
const [i, j, k] = arr3;
console.log(i, j, k);
const [i1, j1, [k1, l]] = arr3;
console.log(i1, j1, k1, l);

// 6) assigning default values while destructuringsometime useful when array size is unavailable
const [d1, d2, d3 = 1] = [2, 3];
console.log(d1, d2, d3);
*/

/************************************************************************
 * Destructuring Objects
 */

// const { name, openingHours, categories } = resturant;
// console.log(name, openingHours, categories);

// changing names
// const { openingHours: openHrs, categories: caty } = resturant;
// console.log(openHrs, caty);

/*
// default values
const { openingHours = [], tasks: tsk = [] } = resturant;
console.log(openingHours, tsk);

// mutating values
let a = 123;
let b = 456;
const obj = { a: 1000, b: 2000 };
({ a, b } = obj); // {a, b} = obj  <- js will assume {a, b} as a function and assigning to a function is an error
console.log(a, b);

// destructuring nested objects
const {
  fri: { open: o = 0, close: c = 0 },
} = resturant.openingHours;

console.log(o, c);

// practical example

const deliveryObj = {
  starterIndex: 1,
  mainIndex: 0,
  time: '20:00',
  address: 'Yangon',
};
resturant.orderDelivery(deliveryObj);
*/

/*************************************************************
 *  Spread Operator
 */

/*
 // copy array
const newCopyMenu = [...resturant.mainMenu];
console.log(newCopyMenu);

// join two array
const newMenu = [...resturant.starterMenu, ...resturant.mainMenu];
console.log(newMenu);
*/

/**
 * spread operator works in all iterables ( Arrays, strings, maps, sets but not Objects)
 *
 * ES 2018 update => spread operator now also works in objects
 */

/*
const ingredients = [
  // prompt("Let' make pasta! Ingredient 1?"),
  // prompt('Ingredient 2?'),
  // prompt('Ingredient 3?'),
];
// console.log(ingredients);

resturant.orderPasta(...ingredients);

// spread operator now also works in objects (ES 2018 / ES9)
const newRestaurant = { founderIn: 1996, ...resturant, founder: 'KMP' };
console.log(newRestaurant);
*/

/*********************************************************
 * Rest Pattern and Parameters
 *
 */

/*
// SPREAD, because of RIGHT side of =
const newArr = [10, 11, ...[1, 2, 3]];
console.log(newArr);

// REST, because of LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

// using REST in objects
const { sat, ...weekdays } = { ...resturant.openingHours };
console.log(sat);
console.log(weekdays);

// using REST in Functions
function add(...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
}

add(2, 3);
add(2, 3, 4, 5);
add(10);

resturant.orderPizza('mushrooms', 'tomato', 'onion', 'olive');
resturant.orderPizza('mushrooms');
*/

/**********************************
 * Coding Chellenge 1
 * 
 * We're building a football betting app (soccer for my American friends 😅)!

  Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

  1. Create one player array for each team (variables 'players1' and 'players2')
  2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
  3. Create an array 'allPlayers' containing all players of both teams (22 players)
  4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
  5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
  6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
  7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

  TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

  GOOD LUCK 😀
 */

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

/* My Answer xD   ***************************************

const bayernPlayers = [...game.players[0]];
const DortmundPlayers = [...game.players[1]];
const [bayern_gk, ...fieldPlayers] = bayernPlayers;
const allPlayers = [...game.players[0], ...game.players[1]];
const players1Final = [...bayernPlayers, 'Thiago', 'Coutinho', 'Perisic'];
const { team1, x, team2 } = game.odds;

function printGoals(...goalMakers) {
  const goalMaker_summary = {};

  for (let i = 0; i < goalMakers.length; i++) {
    let maker = goalMakers[i];
    goalMaker_summary[maker] = goalMaker_summary[maker]
      ? goalMaker_summary[maker] + 1
      : 1;
  }

  const uniquePlayers = [...new Set(goalMakers)];
  for (let i = 0; i < uniquePlayers.length; i++) {
    console.log(
      `${uniquePlayers[i]} scored ${goalMaker_summary[uniquePlayers[i]]} goals.`
    );
  }
}

printGoals(...game.scored);
*/

/**************************************************
 * Author Answer
 */

/*
const [players1, players2] = game.players;
const [gk, ...fieldPlayers] = players1;
const [allPlayers] = [...players1, ...players2];
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

const {
  odds: { team1, x: draw, team2 },
} = game;

function printGoals(...players) {
  console.log(players);
  console.log(`${players.length} goals are scored.`);
}

printGoals(...game.scored);
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');

team1 < team2 && console.log(`Team 1 is more likely to win.`);
team1 > team2 && console.log(`Team 2 is more likely to win.`);
*/

/******************************************************
 * For-of loop
 */
const menu = [...resturant.mainMenu, ...resturant.starterMenu];
for (const item of menu) {
  console.log(item);
}

// console.log([...menu.entries()]);

for (const item of menu.entries()) {
  console.log(`${item[0] + 1} : ${item[1]}`);
}

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1} : ${el}`);
}
