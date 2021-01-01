'use strict';

// if (4 == 9) {
//     console.log('ok!');
// }

// function learnJS (lang, callback) {
//     console.log(`Я учу: ${lang}`);
//     callback();
// }

// learnJS('JavaScript', function(){
//     console.log('Я прошел этот урок');
// });

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function () {
//         console.log("Test");
//     }
// };

// options.makeTest();

// const {border, bg} = options.colors;
// console.log(border);

// delete options.name;
// console.log(options["colors"]['border']);

// let counter = 0;
// for (let key in options) {
//     if (typeof (options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет знаение ${options[key][i]}`);
//         }
//     } else {
//         console.log(`Свойство ${key} имеет знаение ${options[key]}`);
//         counter++;
//     }
// }

// console.log(Object.keys(options).length);

// массивы

const arr = [1, 2, 3, 6, 8];

arr.sort(compareNum);
console.log(arr);

function compareNum (a, b) {
    return a - b;
}

arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
});

// arr.pop();
// arr.push(10);

// console.log(arr); 

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

for (let value of arr) {
    console.log(value);
}

const str = prompt("", "");
const products = str.split(", ");
console.log(products);

// copy object
function copy (mainObj) {
  let objCopy = {};

  let key;
  for (key in mainObj) {
    objCopy[key] = mainObj[key];
  }
  return objCopy;
}

const numbers = {
  a: 2,
  b: 5,
  c: {
    x: 7,
    y: 4
  }
};

const newNumber = copy(numbers);
newNumber.a = 10;
console.log(newNumber);
console.log(numbers);

const add = {
  d: 17,
  e: 20
};

console.log(Object.assign({numbers}, add));