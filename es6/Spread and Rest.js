//joining array
const fruits = ['apple', 'pear', 'plum']
const berries = ['blueberry', 'strawberry']
const fruitsAndBerries = [...fruits, ...berries] // concatenate
console.log(fruitsAndBerries); // outputs a single array
//['apple', 'pear', 'plum', 'blueberry', 'strawberry']

//joining Objects
const flying = { wings: 2 }
const car = { wheels: 4 }
const flyingCar = {...flying, ...car}
console.log(flyingCar) 
// {wings: 2, wheels: 4}

//adding new member to array without using push
let veggies = ['onion', 'parsley'];
veggies = [...veggies, 'carrot', 'beetroot'];
console.log(veggies);
//['onion', 'parsley', 'carrot', 'beetroot']

//convert string using spread operator
const greeting = "Hello";
const arrayOfChars = [...greeting];
console.log(arrayOfChars); 
//  ['H', 'e', 'l', 'l', 'o']

//copy either object or array to another one and change in new one
const car1 = {
    speed: 200,
    color: 'yellow'
}
const car2 = {...car1}
car1.speed = 201
console.log(car1.speed, car2.speed)
//201 200
