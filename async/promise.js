'user strict'

// Promise is a JavaScript object for asynchronous operation.
// state: peding -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically.
const promise = new Promise((reseolve, reject) => {
    //doning some heavy work (network, read files)
    console.log('doing someting...');
    setTimeout(() => {
        //reseolve('ellie');
        reject(new Error('no network'));
    }, 2000)
})

// 2. Consumer: then, catch, finally
promise //
    .then((value) => {
        console.log(value);
    })
    .catch(error =>{
        console.log(error);
    })
    .finally(() => {
        console.log('finally')
    });

// 3. Promise chaning
const fetchNumber = new Promise((resolve, rject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num - 1), 1000);
    })
})
.then(num => console.log(num));

// 4. Error Handling
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('닭'), 1000);
    });

const getEgg = hen =>
new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`${hen} => egg`), 1000));
})

const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => ply`), 1000);
    })

getHen() //
    .then(getEgg)
    .then(cook)
    .then(console.log)
    .catch(console.log);