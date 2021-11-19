'use strict'

// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality
// Nearly all objects in JavaScript are instance of Object
// object = { key : value }; 


const name = 'ellie';
const age = 4;
print(name, age);

// 1. literal properties
const obj1 = {}; // 'object literal' syntax
const obj = new Object(); // 'object constructor' syntax
function print(person) {
    console.log(person.name);
    console.log(person.age);
}

// with Javascript magic (dynamically typed language)
// can add properties later
const ellie = {name : 'ellie', age:4};
print(ellie);

ellie.hasJob = true;

// can delete properties later
delete ellie.hasJob;

// 2. Computed properties , 실시간으로 key와 관련된 value를 받아와야할 때
// key should be always string
console.log(ellie.name);
console.log(ellie['name']);
elllie['hasJob'] = true;
console.log(ellie.hasJob);

function printValue(obj, key){
    console.log(obj[key]);
}
printValue(ellie, 'name');

// 3. Property value shorthand
const person1 = {name:'bob', age:2};
const person2 = {name:'steve', age:3};
const person = {name:'dave', age:4};
const person4 =  new Person('ellie', 30);

// 4. Constructor function
function Person(name, age) {
    // this = {};
    this.name = name;
    this.age = age;
    //return this;
}

// 5. in operator: property existance check (key in obj)
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie);
console.log(ellie.random);

// 6. for..in vs for..of
// for (key in obj)
console.clear()
for (key in ellie){
    console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for(let i = 0; i < array.length; i++){
    console.log(array[i]);
}
for(value of array){
    console.log(value);
}


// 7. Fun cloning
// Object.assing(des, [obj1, obj2, obj3...])
const user = { name: 'ellie', age : '20'};
const user2 = user;
user.name = 'coder';
console.log(user)

// old way
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}

// new way
user4 = Object.assign({}, user);
Object.assign(user4, user);
console.log(user4);

// another example
// 뒤에 나온 object가 덮어 씌운다고 생각하면 됨
const fruit1 = {color:'red'};
const fruit2 = {color:'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
