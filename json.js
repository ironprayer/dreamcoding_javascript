/*
- 서버와 통신
    - AJAX : Asynchronous JavaScript And XML
    - XHR : XMLHttpRequest

    - XMLHttpRequest or fetch() API를 사용하여 통신 가능
    - XML은 태그들 떄문에 용량을 많이 차지함
    - JOSN (ES3에서 나옴) : Key-Value 형식으로 이루어짐
        - simplest data interchange format
        - lightweight text-bseed structure
        - easy to read
        - key-value pairs
        - used for serialization and transmission of data between th network the network connection
        - independent programming language and platform

    - 좋은 사이트 : JSON Diff, JSON Beatuifier, JSON parser, JSON Validator
*/

// JSON
// JavaScript Ojnbect Notation

// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    symbol: Symbol('id'),
    jump:() => {
        console.log('jump');
    }
}

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name', 'cololr', 'size']);
console.log(json);

json = JSON.stringify(rabbit, (key, value) =>{
    console.log(`key: ${key}, vlaue : ${value}`);
})

// 2. JSON to obejct
// parse(json)

console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj);
rabbit.jump();
// obj.jump(); // json에는 메서드가 들어가지 않기 때문에 다시 변환했을 때 메서드가 데이터에 없음

console.log(rabbit.birthDate.getDate());
//console.log(obj.birthDate.getDate()); json에서 object 형식으로 데이터를 parsing할 때 데이터는 string 타입이다.