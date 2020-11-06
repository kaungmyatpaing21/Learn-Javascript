
/**
 * Suppose that you're working in a small town administration, and you're in charge of two town elements:
 * 1. Parks
 * 2. Streets
 * 
 * It's a very small town, so right now there are only 3 parks and 4 streets have a name and a build year.
 * 
 * At an end-of-year meeting, your boss wantsa final report with the following:
 * 1. Tree density of each park in the twon (formula: number of trees/park area)
 * 2. Average age of each town's park (formula: sum of all ages/number of parks)
 * 3. The name of the park that has more than 1000 trees
 * 4. Total and average length of the town's streets
 * 5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal
 * 
 * All the report data should be printed to the console.
 * 
 * HINT: Use some of the ES6 feature: classes, subclasses, template strings, default parameters,maps, arrow functions, destructuring, etc.
 */


class Element {

    constructor(name, buildYear){
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Park extends Element {
    
    constructor(name, buildYear, area, numTrees){
        super(name, buildYear);
        this.area = area;
        this.numTrees = numTrees;
    }

    calculateDensity(){
        console.log(`${this.name} built in ${this.buildYear} has a tree density of ${this.numTrees / this.area} square kilometres.`);
    }
}

class Street extends Element{
    
    constructor(name, buildYear, length, size = 3){
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }

    classify(){
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');

        console.log(`The size of the ${this.name} street built in ${this.buildYear} is ${classification.get(this.size)}.`);
    }
}

const allParks = [new Park('Bogyoke Park', 1973, 2.9, 680), new Park('National Park', 1986, 2.1, 2150), new Park('PyiDaungSu Park', 1992, 2.4, 980)];
const allStreets = [new Street('Hledan', 1952, 0.7, 2), new Street('Bogyoke', 1947, 1.2), new Street('PanWa', 1982, 0.6, 4)];


function calc(arr)
{   
    const sum = arr.reduce((prev, cur, index) => prev + cur, 0);

    return [sum, sum / arr.length];
}


function parkReports(obj)
{
    
    console.log('=====Park Reports=====');

    // show tree density
    obj.forEach(el => el.calculateDensity());

    // average age of the park
    const ages = obj.map(el => new Date().getFullYear() - el.buildYear);
    [totalAge, avgAge] = calc(ages);
    console.log(`The average age of each town park is ${avgAge}.`)

    // park that has more than 1000 trees
    const idx = obj.map(el => el.numTrees).findIndex(el => el > 1000);
    console.log(`${obj[idx].name} has more than 1000 trees.`);
}

function streetReports(obj)
{
    console.log('=====Street Reports=====');

    // total and average length of the town street
    const lengthArr = obj.map(el => el.length);
    const[totalLength, avgLength] = calc(lengthArr);
    console.log(`Our ${obj.length} streets has a total length of ${totalLength} km, with an average length of ${avgLength} km.`);

    // size classification of the streets
    obj.forEach(el => el.classify());
}

parkReports(allParks);
streetReports(allStreets);