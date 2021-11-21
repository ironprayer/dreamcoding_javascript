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

// 4. Addtion, deletion, copy
// push : add an item to the end
fruits.push('apple', 'orange');
console.log(fruits);

// pop : remove an item from the end
fruits.pop()
fruits.pop()
console.log(fruits);

// unshift : add an item to the bgiennig
fruits.unshift('strawbreey', 'remon');
console.log(fruits);

// shift: remove an item from th bgienning
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// splice: remove an item by index position
fruits.push('straweberry', 'reamon');
console.log(fruits);
fruits.splice(1,1);
fruits.splice(1); // 지울 개수를 패러미터로 넘겨주지 않으면 마지막 인덱스까지 지움
fruits.splice(1,1,'apple', 'watermelon');
console.log(fruits);

// combine two arrays
const fruits2 = ['mango'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// find the index
console.clear();
console.log(fruits.indexOf('apple'));
console.log(fruits.indexOf('watermelon'));

// includes
console.log(fruits.includes('watermelon'));
console.log(fruits.includes('coconut'));

// lastIndexOf
console.clear();
fruits.push('apple');
console.log(fruits);
console.log(fruits.indexOf('apple')); // 가장 처음 부합하는 검색 키워드의 부합하는 인덱스
console.log(fruits.lastIndexOf('apple'));