if (true) {
  let a = 10;
}
//console.log(a);
// throws error as a is not defined in the scope

//
if (true) {
  var b = 20;
  console.log(b);
}
console.log(b);
// b is accessible outside the scope var is a scope variable

function show() {
  var c = "I am c";
  console.log(c);
}
show();
console.log(c);
