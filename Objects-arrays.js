//*****////Array for of
const colors = ['red','orange','yellow']
for (var color of colors) {
    console.log(color);
}

//*****////Object.keys(), Object.values(), and Object.entries()

const car2 = {
    speed: 200,
    color: "red"
}
console.log(Object.keys(car2)); // ['speed','color']
console.log(Object.values(car2)); // [200, 'red']
console.log(Object.entries(car2));//[ ['speed', 200], ['color', 'red'] ]

//*****////for Loop over any object's own property keys and values.

var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for( key of Object.keys(clothingItem) ) {
    console.log(key, ":", clothingItem[key])
}
// price : 50
// color : beige
// material : cotton
// season : autumn


//*****////For- of - in loops and objects
const car={
    engine:true,
    steering:true,
    speed:"slow"
}
const sportsCar=Object.create(car)
sportsCar.speed="fast"
for(prop in sportsCar){
    console.log(prop)
}
//speed
//engine
//steering
for(prop of Object.keys(sportsCar)){
    console.log(prop, " : "+ sportsCar[prop])
}
//speed  : fast


//*****////Tasks
// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']
function logDairy() {
    for (var log of dairy) {
        console.log(log)
    }
}
logDairy()
// Task 2
const animal = {

    canJump: true

};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan() {
    for (key of Object.keys(bird)) {
        console.log(key, ": "+bird[key])
    }
}
birdCan()

// Task 3

function animalCan() {
    for (prop in bird) {
        console.log(prop,": "+bird[prop])
    }
}
animalCan() 
