
// ==========================================
// Assignment: JS Functions
// ==========================================


// Q1. Conceptual Understanding
// A function is a reusable block of code designed to perform a specific task.

// Four advantages of functions:
// 1. Code reusability
// 2. Reduces code duplication
// 3. Makes code easier to read
// 4. Makes debugging and maintenance easier


// Q2. Function Declaration

function greetStudent(name) {
    return `Hello ${name}, welcome to CodingGita!`;
}

console.log(greetStudent("Amit"));
console.log(greetStudent("Rahul"));


// Q3. Hoisting
// Function declarations can be called before they appear in the code because of hoisting.

sayHello();

function sayHello() {
    console.log("Hello! This function uses hoisting.");
}


// Q4. Function Expression

const calculateAverage = function (a, b, c) {
    return (a + b + c) / 3;
};

console.log("Average:", calculateAverage(80, 90, 70));


// Q5. Parameters vs Arguments
// Parameters: Variables listed in the function definition.
// Arguments: Actual values passed when calling the function.

// function multiply(x, y) {
//     return x * y;
// }
// console.log(multiply(12, 5));

// Here, x and y are parameters; 12 and 5 are arguments.

function multiply(x, y) {
    return x * y;
}

console.log("Multiplication:", multiply(12, 5));


// Q6. Return Statement

function isEven(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log("Is 24 even?", isEven(24));
console.log("Is 17 even?", isEven(17));


// Q7. Multiple Parameters

function findPercentage(obtainedMarks, totalMarks) {
    return (obtainedMarks / totalMarks) * 100;
}

console.log("Percentage:", findPercentage(456, 500) + "%");


// Q8. Function Without Return
// A function without a return statement returns undefined.

function displayMessage() {
    console.log("This function has no return statement.");
}

let result = displayMessage();

console.log("Returned value:", result);


// Q9. Practical Application: Simple Interest

const calculateSimpleInterest = function (principal, rate, time) {
    return (principal * rate * time) / 100;
};

console.log(
    "Simple Interest:",
    calculateSimpleInterest(10000, 5, 2)
);


// Q10 (a). Function Declaration vs Function Expression
// Function declaration: Can be called before its definition
// because of hoisting.
// Function expression: Cannot be called before the variable
// is initialized.

// Q10 (b). Student Marks Message

function getStudentResult(name, marks) {
    return `Student ${name} has scored ${marks} marks.`;
}

console.log(getStudentResult("Amit", 499));
console.log(getStudentResult("Priya", 478));
