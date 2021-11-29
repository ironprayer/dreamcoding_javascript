/**
 * Shorthand property names
 * 
 */

{
    const ellie1 = {
        name : 'Ellie' ,
        age: '18',
    }

    const name = 'Ellie';
    const age = '18';

    // bad
    const ellie2 = {
        name : name,
        age : age
    }

    // good
    const ellie3 = {
        name,
        age,
    }
}

/**
 * Destructuring Assignment
 * 
 */

// object
{
    const student = {
        name: 'Anna',
        level: 1,
    }

    // bad
    {
        const name = student.name;
        const level = student.level;
        console.log(name, level)
    }

    // good
    {
        const { name, level } = student
        console.log(name, level);
    }

    const { name: studentName, level: studentLevel } = student;
    console.log(studentName, studentLevel);
}

// array
const animals = ['dog', 'cat'];

// bad
{
    const first = animals[0];
    const second = animals[1];
    console.log(first, second);
}

// good
{
    const [first, second] = animals;
    console.log(first, second);
}

/**
 * Spread Syntax
 * 
 * 
 */

{
    const obj1 = { key: 'key1'};
    const obj2 = { key: 'key2'};
    const array = [obj1, obj2]

    // array copy
    const arrayCopy = [...array];
    console.log(array, arrayCopy);

    const arrayCopy2 = [...array, { key: 'key3' }];
    obj1.key = 'newKey';
    console.log(array, arrayCopy, arrayCopy2);

    // object copy
    const obj3 = { ...obj1 };
    console.log(obj3);

    // array concatenation
    const fruits1 = ['apple', 'strawberry'];
    const fruits2 = ['바나나', '키위'];
    const fruits = [...fruits1, ...fruits2];

    // object merge
    const dog1 = { dog: 'dog'};
    const dog2 = { dog: 'dog1'};
    const dog = {...dog1, ...dog2};
    console.log(dog);
}

/**
 * Default parameters
 * 
 */

{
    // bad
    {
        function printMessage(message) {
            if(message == null){
                message = 'default message';
            }
            console.log(message);
        }

        printMessage('hello');
        printMessage();
    }

    // good
    function printMessage(message = 'default message'){
        console.log(message);
    }

    printMessage('hello');
    printMessage();
}

/**
 * Ternary Operator
 * 
 */

{
    const isCat = true;
    // bad
    {
        let component;
        if (isCat) {
            component = 'cat';
        } else {
            component = 'dog';
        }
        console.log(component);
    }

    // good
    {
        let component = isCat ? 'cat' : 'dog'
        console.log(component);
    }
    console.clear();
}

/**
 * Template Literals
 * 
 */

{
    const weather = 'good'
    const temperature = '16C'

    // bad
    console.log(
        'Today weather is' + weather + ' and temperature is ' + temperature
    );

    // good
    console.log(`Today weather is ${weather} and temperature is ${temperature}`);
}

/**
 * Optional Chaining (ES11)
 * 
 */

{
    const person1 = {
        name: 'Ellie',
        job: {
            title: 'S/W Engineer',
            manager: {
                name: 'Bob',
            },
        },
    };
    const person2 = {
        job: "name",
        name: 'Bob',
    };

    // bad bad bad
    {
        function printManager(person){
            console.log(person.job.manager.name);
        }
        printManager(person1);
        //printManager(person2);
    }

    // bad bad
    {
        function printManager(person){
            console.log(
                person.job
                    ? person.job.manager
                        ? person.job.manager.name
                        : undefined
                    : undefined
            );
        }
        printManager(person1);
        printManager(person2);
    }

    // bad
    {
        function printManager(person){
            console.log(person.job && person.job.manager && person.job.manager.name);
        }
        printManager(person1);
        printManager(person2);
    }

    // good
    {
        function printManager(person){
            console.log(person.job?.manager?.name);
        }
        console.clear()
        printManager(person1);
        printManager(person2);
    }
}

/**
 * Nullish Coalescing Operator (ES11)
 */

{
    // Logical OR operator
    // false: false, '', 0, null, undefined
    {
        const name = 'Ellie';
        const userName = name || 'Guest';
        console.log(userName);
    }

    // bad , 문자가 비어있는 경우에도, 0인경우도 false라서 버그 발생 가능
    {
        const name = '';
        const userName = name || 'Guest';
        console.log(userName);

        const num = 0;
        const message = num || 'Guest';
        console.log(message);
    }

    // good
    {
        const name = '';
        const userName = name ?? 'Guest';
        console.log(userName);

        const num = 0;
        const message = num ?? 'undefined';
        console.log(message); 
    }
}