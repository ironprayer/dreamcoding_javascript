// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, parma2) { body... return;}
// one function === one ting
// naming: doSometing, commad, verb
// e.g. createCarAndPoint -> createCard, creatPoint
// function is object in JS

function printHello() {
    console.log('Hello');
}
printHello();

function log(message){
    console.log(message);
}
log('Hello@');
log(1234);

// 2. Parametes
// premitive parameters: passed by value
// obejct prameters: passed by reference
function changeNmae(obj) {
    obj.name = 'coder';
}
const ellie = { name: 'ellie' };
changeName(ellie);
console.log(ellie);

// 3. Default parameters ( added in ES6 )
function showMessage(message, from = "unknown"){
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4. Rest parametes (added in ES6)
function printALL(...args) {
    for (let i = 0; i < args.length; i++){
        console.log(args[i]);
    }

    for (const arg of args){
        console.log(arg);
    }
}
printALL('dream', 'coding', 'ellie');

// 5. Local scope
let globalMessage = 'global'; // global variable
function printMessage() {
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage);
    function printAnother(){
        console.log(message);
        let childMessage = 'heelo';
    }
    console.log(childMessage);
}
printMessage();

// 6. Return a value
function sum(a, b) {
    return a + b;
}
const result = sum(1,2); // 3
console.log(`sum: ${sum(1,2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user){
    if(user.point > 10) {
        //long upgrade logic...
    }
}

// good
function upgradeUser(user){
    if(user.point <= 10){
        return;
    }
    // long upgrade logic...
}


//First-class function
//functions are treated like any other variable
// cna be assigned as a value to variable
// can be passed as an argument to other functions
// can be returned ny another function

// 1. FUnction expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.
const print = function (){
    console.log('print');
};
print();
const printAgin = print;
printAgin();
const sumAgain = sum;
console.log(sumAgain(1,3));

// 2. Callback function suing function expression
function randomQuiz(answer, printYes, printNo){
    if(answer === 'love you'){
        printYes();
    } else {
        printNo();
    }
}

// anonymous function
const printYes = function() {
    console.log('yes!');
};

// name function
// better debugging in debuggers's stack traces
// recursions
const printNo = function print(){
    console.log('no!');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous
const simplePrint = function () {
    console.log('simplePrint!');
};

const simplePrint = () => console.log('simplePrint¡');
const add = (a,b) => a + b;
const simpleMultiply = (a,b) => {
    // do someting more
    return a + b;
}

// IIFE: Immediately Invoked Function Expression
(function hello(){
    console.log('IIFE');
})
