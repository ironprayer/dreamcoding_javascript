'use strict'

// Array

// 1. Delcaration
const art1 = new Array();
const arr2 = [1,2];

// 2. Index position
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length - 1]);

// 3. Looping over an array
// print all fruits
for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// b.for of
for(let fruit of fruits) {
    console.log(fruit)
}

console.clear();
// c.for each
fruits.forEach((value) => {console.log(value)})