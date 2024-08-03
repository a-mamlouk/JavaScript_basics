//key value property value
let person = {
  name: "John",
  age: 30,
  place: "France",
};
console.log(person.name); // John
console.log(typeof person); // object
console.log("====================================");
console.log(Object.entries(person));
console.log(Object.keys(person));
console.log(Object.values(person));
