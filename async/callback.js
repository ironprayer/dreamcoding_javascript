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
    loginUser(id, password, onSucess, onError){
        setTimeout(()=>{
            if(
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'ellie')
            ){
                onSucess(id);
            }else{
                onError(new Error('not found'));
            }
        } ,2000);
    }

    getRole(user, onSuccess, onError){
        setTimeout(() => {
            if(user === 'ellie'){
                onSuccess({name:'ellie', role:'admin'});
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage()
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id, 
    password, 
    (user)=>{
        userStorage.getRoles(
            user,
            userWithRole=>{
                alter(`Hello ${user.name}, you have a ${user.role}, role`)
            },
            error => {
                console.log(error);
            }
        )
    },
    (error) =>{
        console.log(error);
    })