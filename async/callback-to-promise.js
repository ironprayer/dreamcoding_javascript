'use strict';

// JavaScript is sychronous.
// Execute the code block by orger after hoisting.
// hoisitng: var, functino declaration

console.log('1');
setTimeout(function(){
    console.log('2');
}, 1000)
console.log('3');

// Sychronous callback
function printImmdiately(print){
    print();
}
printImmdiately(()=> console.log('hello'));

// Asychronous callback
function printWithDelay(print, timeout){
    setTimeout(print, timeout);
}

printWithDelay(()=> console.log('async callback'), 2000);


// Callback Hell example
class UserStorage {
    loginUser(id, password){
        return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'ellie')
            ){
                resolve(id);
            }else{
                reject(new Error('not found'))
            }
        } ,2000);
    });
    }

    getRole(user){
        return new Promise((resolve, reject) =>{
        setTimeout(() => {
            if(user === 'ellie'){
                resolve({ name:'ellie', role:'admin'});
            } else {
                reject(new Error('no access'))
            }
        }, 1000);
    })
    }
}

const userStorage = new UserStorage()
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage
    .loginUser(id, password)
    .then(userStorage.getRole)
    .then(user => alert(`Hello ${user.name}, you hae a ${user.role} role`)) 
    .catch(console.log);