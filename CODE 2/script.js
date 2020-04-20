// CODING CHALLENGE

/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

Used some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/


 class Town {
    constructor(name, buildYear){
        this.name = name;
        this.buildYear = buildYear;
    }
 }

 class Park extends Town{
    constructor(name, buildYear, parkArea , numTrees){
        super(name, buildYear);
        this.parkArea = parkArea;
        this.numTrees = numTrees;
    }

    treeDensity(){
        const density = this.numTrees/ this.parkArea;
        console.log(`${this.name} has tree density of ${density} trees per sq km.`);
    }
 }

 class Street extends Town{
    constructor(name, buildYear, length , size=3){
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }

    classifyStreet(){
        const classification = new Map();
        classification.set(1,'tiny');
        classification.set(2,'small');
        classification.set(3,'normal');
        classification.set(4,'big');
        classification.set(5,'huge');
        console.log(`${this.name} build in ${this.buildYear} year is a ${classification.get(this.size)} street.`);
    }
}
//Creating objects for Park
const allParks = [new Park('Green Park', 1997, 0.2, 215), new Park('National Park', 1980, 2.9, 2900), 
new Park('Oak Park', 1999, 1.2, 995)];


//Creating objects for Street
const allStreets = [new Street('Saint Laurant', 1980, 1.1, 4),new Street('Des Pins', 1972, 2.1, 5), 
        new Street('Avenue', 1990, 0.8), new Street('Sauvre', 2000, 0.5, 2) ];
 

function reportPark(p){
    console.log('-----------PARKS REPORT -----------');

    //Density
    p.foreach(currElement => currElement.treeDensity());

    //Average age

    //name of park with more than 1000 trees
}


function reportStreets(p){
    console.log('-----------STREETS REPORT -----------');
}

reportPark(allParks);
reportStreets(allStreets);