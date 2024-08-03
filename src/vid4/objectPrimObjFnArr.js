//values can be primitive, objects, functions, arrays
let person = {
  name: "John",
  age: 30,
  place: "France",
  show: function () {
    console.log("Hi John");
  },
  hobbies: ["reading", "music"],
  id: "33",
};
console.log(person.show);
person["isMarried"] = false;
console.log(person);
let companyPrefix = "Micro";
let companyID = "95";
person[companyPrefix + companyID + "empStatus"] = true;
console.log(person);
