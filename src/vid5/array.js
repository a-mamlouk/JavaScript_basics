//Arrays are special type of objects in JavaScript.
//They are used to store multiple values in a single variable.
// start from 0 index and uses []
// array can store multiple data types
// array can store multiple objects
// array can store multiple arrays
// array can store multiple functions

let languages = ["JavaScript", "Python", "Java", "Ruby", "PHP"];
let arr1 = new Array("1,2,3,4,5");
let arr2 = new Array(4);
let arr3 = [];
console.log("====================================");
console.log(languages);
console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log("====================================");
console.log(languages.length);
console.log(languages[0]);
console.log(languages.length - 1);
console.log("====================================");
languages.push("C++");
console.log(languages);
languages.unshift("C#");
console.log(languages);
languages.pop();
console.log(languages);
languages.shift();
console.log(languages);
console.log("====================================");
console.log(languages.indexOf("Java"));
console.log("before splicing " + languages);
languages.splice(2, 2);
console.log("after splicing " + languages);
