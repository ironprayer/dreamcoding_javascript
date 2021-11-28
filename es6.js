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