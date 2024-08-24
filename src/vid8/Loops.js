//for loop
/* for (let i = 0; i < 5; i++) {
  console.log("Simple for loop: " + i);
  console.log(i + 1);
} */

//for in loop
/* const person = {
  name: "John",
  age: 30,
  city: "New York",
};
for (let key in person) {
  //key is the property name
  console.log("Key is " + key);
  console.log("Value is " + person[key]);
}
 */
//For of loop
const fruits = ["Apple", "Banana", "Orange"];
for (let fruit of fruits) {
  console.log("Value is " + fruit);
}
for (let fruit in fruits) {
  console.log("Value is " + fruit);
}
