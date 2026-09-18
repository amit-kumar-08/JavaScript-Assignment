//========================= Assignment 5 ===========================
//PART A OBJECT
let student = {
  name: "Amit kumar",
  age: 17,
  isEnrolled: true
};

console.log(student);
console.log(student.name);
console.log(student.age);

//PART B ARRAY
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "hello", true, null];

console.log("first element:",numbers[0],"last element:",numbers[numbers.length-1]);
console.log(mixed)

//Keeping an array with a single data type is better because it makes the data organized, predictable, and easier to work with.

//PART C FUNCTION
function greet(name) {
  return "Hello, " + name + "!";
};

let message1 = greet("Amit");
let message2 = greet("Ankit");

console.log(message1);
console.log(message2);