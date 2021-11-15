// 1. Use Strict
// Whole-script strict mode syntax
// added in ES 5
// use this for Valina Javascript.
'use strict';

// 2. Variable rw(read/write)
// let (added in ES6)
let globalName = 'global name';
{
    let name = 'ellie';
    console.log(name);
    name = 'heelo';
    console.log(name);
}

console.log(name);
console.log(globalName);

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// has no block scope
{
    age = 4;
    console.log(age);
    var age;
}
console.log(age)

// 3. Constants, r(read only)
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes
const daysInWeek = 7;

// Note!
// Immutable data types: primitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favoar immutable data type always for a few reasons:

// 4. Variable types
// primitve, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function

const count = 17; // integer
const size = 17.1; // deciaml number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special number values: infinity, -infinity, Nan
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890n;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
const helloBob = `hi ${brendan}!`; //template literals (string)

// boolean
const canRead = true;
const test = 3 < 1;

// null
// 값이 비어있다는 걸 나타냄
let noting = null;

// undefined
// 값이 들어가있는지 아닌지 알려지지 않는 상태를 나태남
let x = undefined;

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false
const gsymbol1 = Symbol.for('id');
const gsymbol2 = Symbol.for('id');
console.log(gsymbol1 === gsymbol2); // true
console.log(`value:${symbol1.description}, type: ${typeof symbol1}`);

// obejct, real-life object, data structure
const ellie = {name:"jeong", age:21}

// 5. Dynamic typing: dynamically typed language
// runtime에서 타입이 결정됨
let text = 'hello';
console.log(text.charAt(0));
console.log(`value:${text}, type: ${typeof text}`);
text = 1;
console.log(`value:${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value:${text}, type: ${typeof text}`);
text = '8' / '2';
// console.log(text.charAt(0)); error 
console.log(`value:${text}, type: ${typeof text}`);