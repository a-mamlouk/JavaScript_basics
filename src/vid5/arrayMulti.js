//Arrays can have primitive data types, objects, arrays, and functions.
let HybrideArray = [
  1,
  true,
  { name: "John" },
  [1, 2, 3],
  function () {
    return "Hello";
  },
];
console.clear();
console.log("====================================");
console.log(HybrideArray);
console.log(HybrideArray[2].name);
console.log(HybrideArray[3][1]);
console.log(HybrideArray[4]());
console.log("====================================");
