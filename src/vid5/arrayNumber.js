let nums = [1, 2, 3, 4, 5, 10, 17, 23, 7, 11];
console.log("array :", nums);
console.log("array length :", nums.length);
console.log("Sorting array :", nums.sort());
console.log("reverse array :", nums.reverse());
console.log(
  "sorting array differetly :",
  nums.sort((a, b) => a - b)
);
console.log("====================================");
let nums0 = [1, 2, 3, 4, 5, 10, 17, 23, 7, 11];
console.log("array :", nums0);
let nums2 = nums0.slice(5, 8);
console.log("slicing array :", nums2);
let nums3 = nums0.slice(-4, -2);
console.log("slicing array from end :", nums3);
