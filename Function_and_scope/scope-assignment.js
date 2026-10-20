//=================================Question 1========================================
var city = "Surat";
function display() {
    var country = "India";
    console.log(city);
    console.log(country);
}
display();

// city
// country
// yes


//=================================Question 2========================================
var price = 500;
function calculate() {
    var tax = 50;
    console.log(price + tax);
}
calculate();
console.log(price);

// Output
// 550
// 500



//=================================Question 3========================================
var college = "ABC College";
function student() {
    var name = "Rahul";
    var age = 20;
}
function teacher() {
    var subject = "JavaScript";
}

// "college" -> global scope
// "name" -> local scope
// "age" -> local scope
// "subject" -> local scope


//=================================Question 4========================================
function first() {
    var number = 100;
}
function second() {
    console.log(number);
}
first();
second();

// Output
// Error


//=================================Question 5========================================
let variable1 = "Hello"

function functionOfVariable() {
    let variable2 = "World"
    console.log(variable1)
    console.log(variable2)
};
console.log(variable1);


//=================================Question 6========================================
var game = "Cricket";
function play() {
    console.log("I like " + game);
}
play();
console.log(game);

// Output
// I like Cricket
// Cricket


//=================================Question 7========================================
var language = "English";
function showLanguage() {
    console.log(language);
}
function changeLanguage() {
    language = "Gujarati";
}
showLanguage();
changeLanguage();
showLanguage();
console.log(language);

// Output
// English
// Gujarati
// Gujarati


//=================================Question 8========================================
function displayMarks() {
    console.log(marks);
}
var marks = 75;
displayMarks();

// There will be no error


//=================================Question 9========================================
var color = "Red";
function showColor() {
    var message = "Favorite color: ";
    console.log(message + color);
}
showColor();
console.log(color);
console.log(message);

// Output
// statement `console.log(message)` cause an error as `message` is a local scope and we can't call it outside of the fuction.

//=================================Question 10========================================
let school = "Sunrise School";
function showSchool() {
    console.log(school)
};
function updateSchool() {
    school = "Green Valley School"
};
showSchool();
updateSchool();
console.log(school);


//=================================Question 11========================================
function calculateTotal() {
    var first = 100;
    var second = 200;
    console.log(first + second);
}
calculateTotal();
console.log(first);
 // Output
 // 300
 // Error
 

//=================================Question 12========================================
// function employee() {
//     var salary = 30000;
// }
// employee();
// console.log(salary);

// Output
// Error

//=================================Question 13========================================
var number = 15;
function test() {
    var number = 25;
    console.log(number);
}
test();
console.log(number);

// Output
// 25
// 15
// The value of global scope is not changing as instead of reassigning a new variable, we are creating 
// a new variable inside the function.


//=================================Question 14========================================
function calculate() {
    var result = 40;
    result = result + 10;
    console.log(result);
}
calculate();
calculate();

// Output
// 50
// 50


//=================================Question 15========================================
function calculateArea() {
    let length = 8
    let width = 4
    let area = length * width
    console.log(area)
}


//=================================Question 16========================================
if (10 > 5) {
    var result = "Success";
}
console.log(result);

// Output
// Success

// `result` is accessible outside the `if` block because it is declared using `var` which is a functional 
// scope and can be accessed outside of blocks.


//=================================Question 17========================================
var number = 1;
if (true) {
    var number = 2;
}
console.log(number);

// Output
// 2

// The output would have differ if as the variable is declared using `var` which is a functional scope


//=================================Question 18========================================
var message = "Start";
{
    var message = "End";
}
console.log(message);

// Output
// No, the standalone block does not create a separate scope for var


//=================================Question 19========================================
if (false) {
    var result = 100;
}
console.log(result);

// Output
// undefined
// Yes


//=================================Question 20========================================
// if (true) {
//     let secret = "Hidden";
// }
// console.log(secret);


//=================================Question 21========================================
for (var number = 2; number <= 6; number += 2) {
    console.log(number);
}
console.log("Final:", number);

// Output
// 2
// 4
// 6
// Final: 6
// var is a functioned-scope and not block-scope, that's why we can access it's value outside of loop.


//=================================Question 22========================================
var count = 10;
for (var count = 1; count <= 3; count++) {
    console.log(count);
}
console.log("Count:", count);

// Output
// 1
// 2
// 3
// Count: 4


//=================================Question 23========================================
var i = 5;
while (i > 2) {
    console.log(i);
    i--;
}
console.log("After loop:", i);

// Output
// 5
// 4
// 3
// After loop: 2
// Yes, i is accessible after the loop as it is declared using var which is a functional-scope


//=================================Question 24========================================
for (var item = 1; item <= 3; item++) {
    console.log("Item:", item);
}
console.log("Last item:", item);

// Output
// No the final statement does not cause an error.
// `item` obtain the value 4


//=================================Question 25========================================
for (let step = 1; step <= 4; step++) {
    console.log(step);
}
// console.log(step);

// My solution use `let` to declare the variable which is a block-scope whereas, the original code used `var` to 
// declare the variable which is a functional scope.


//=================================Question 26========================================
function calculate() {
    for (var number = 1; number <= 3; number++) {
        console.log(number * 10);
    }
    console.log("Final:", number);
}
calculate();

// Output
// 10
// 20
// 30
// Final 4
// `number` variable is declared inside the function which make it a local scope, so it can't be call outside the function.


//=================================Question 27========================================
function student() {
    for (var marks = 60; marks <= 80; marks += 10) {
        console.log(marks);
    }
    console.log(marks);
}
student();
console.log(marks);

// The statement `console.log(marks);` cause an error as marks is a local scope so it can't be called outside the function.

// Output
// 60
// 70
// 80
// 90
// Error


//=================================Question 28========================================
function test() {
    var value = 5;
    while (value < 8) {
        console.log(value);
        value++;
    }
    console.log("Final value:", value);
}
test();

// Output
// 5
// 6
// 7
// Final value: 8

//The loop executes 3 times


//=================================Question 29========================================
function calculate() {
    for (var i = 1; i <= 2; i++) {
        console.log(i);
    }
}
console.log(i);
calculate();

//The error is because of the statement `console.log(i)` because i is a local scope and it can't be called outside the function.


//=================================Question 30========================================
function printNumbers() {
    for (var i = 1; i <= 5; i++) {
        console.log(i)
    }
};
console.log(i);
printNumbers();


//=================================Question 31========================================
console.log(score);
var score = 90;
console.log(score);

// The first line does not cause and error because the variable is declared using `var` which is a functional scope 
// and the variable declared by it get hoisted to the top of the code.


//=================================Question 32========================================
var a = 10;
function test() {
    console.log(a);
    var a = 20;
    console.log(a);
}
test();

// Output
// undefined
// 20

//=================================Question 33========================================
console.log(first);
console.log(second);
var first = 100;
var second = 200;
console.log(first);
console.log(second);

// The first and statement `console.log(first)` and `console.log(second)` produce undefined as they are written 
// above the variable declaration and the `var` make thm hoisted.


//=================================Question 34========================================
function calculate() {
    console.log(total);
    var total = 50;
    console.log(total);
}
calculate();
// Output
// undefined
// 50

//=================================Question 35========================================
var price = 100;
function showPrice() {
    console.log(price);
    var price = 500;
}
showPrice();
console.log(price);

// Inside the function, the variable is declared after the print statement.
// The re-declaration of variable inside the function is local-scope, by which, it can'tbe accessed outside of the function block

// first `console.log()` function print undefined
// final `console.log()` funtion print 100
// The hoisting make the first `console.log()` statement, print undefined instead of 100



// Section 8: Function Declaration Hoisting
//=================================Question 36========================================
sayHello();
function sayHello() {
    console.log("Hello from CodingGita");
}

//Output
//Hello from CodingGita

// This works even though the function is called before it was written because function declarations are fully hoisted.


//=================================Question 37========================================
display();
function display() {
    console.log("Function is hoisted completely");
}

//Output
//Function is hoisted completely

//In normal var only var declaration hoisted not assignment so output is Undefined in normal var case and here 
// function declarations are fully hoisted so output is "Function is hoisted completely"


//=================================Question 38========================================
// greet();
// var greet = function() {
//     console.log("Hi");
// };

//This behave differently from a function declaration because it is function expression and it is not completely hoisted. 
// var not treat greet as a function.


//=================================Question 39========================================
console.log(typeof myFunc);
function myFunc() {
    return "I am hoisted";
}
console.log(myFunc());

//Output
//function
//I am hoisted


//=================================Question 40========================================
var name = "Amit";
myDetails();

function myDetails(){
    console.log(`My name is ${name}.`)
}



// Section 9: Scope Chain 
//=================================Question 41========================================

var institute = "CodingGita";
function department() {
    var dept = "CSE";
    function batch() {
        var year = 2025;
        console.log(year);
        console.log(dept);
        console.log(institute);
    }
    batch();
}
department();

//Output
//2025
//CSE
//CodingGita

//when function is calling in that program then in inner function there are three console statement firstly "console.log(year)"
//  so js search that variable year in own (inner or current) scope if find then display it in output afterthat it goes in next
//  line and "console.log(dept)" also here he firstly search in current scope if not find then goes in outer scope to search
//  that variable 'dept' where it found that variable then display that in output after that for third console follow same step
//  by step procces where it not find value of institute so goes into global scope to search that variable and there it found
//  the variable 'institute' so display that in output. 

//=================================Question 42========================================
var globalVar = "I am global";
function outer() {
    var outerVar = "I am outer";
    function inner() {
        console.log(globalVar);
        console.log(outerVar);
        console.log(innerVar); // this line
    }
    inner();
}
outer();

//firstly calling of outer function then in outer function again calling inner function then in inner function console.log
// (globalVar), search variable named globalVar in current scope where globalVar is not available then go to outer scope for
//  searching that variable and also there where not available globalVar then searching that variable in global scope and there
//  where it found that variable and display value of that variable simillarly for second console.log(outerVar) found in outer
//  scope and display that value of variable and last console that console.log(innerVar) which is not abvialable in any scope so
//  output is refferenceError innerVar is not defined.


//=================================Question 43========================================
var a = 1;
function level1() {
    var b = 2;
    function level2() {
        var c = 3;
        function deep() {
            console.log(a, b, c);
        }
        deep();
    }
    level2();
}
level1();

// Output   // chain scope
// 1 2 3


//=================================Question 44========================================
var x = "global";
function First() {
    var x = "first";
    function second() {
        console.log(x);
    }
    second();
}
First();
console.log(x);

//Output
// first
// global
// The value of x changes depending on the location of console.log bacause of scope.

//=================================Question 45========================================
var globalparent = "globalParent";
function parent(){
    var parent = "parent";
    function child(){
        var child ="child";
        function grandchild(){
            var grandchild = "grandchild";
            console.log(grandchild);
            console.log(child);
            console.log(parent);
            console.log(globalparent);
        };
        grandchild();
    };
    child();
}; 
parent();


// Section 10: Variable Shadowing
//=================================Question 46========================================
var score = 50;
function test() {
    var score = 90;
    console.log(score);
}
test();
console.log(score);

// Output
// 90
// 50


//=================================Question 47========================================
var name = "Global Name";
function show() {
    var name = "Local Name";
    console.log(name);
}
show();
console.log(name);

// Output
// Local Name
// Global Name

//The local variable does not permanently change the global one because of different scope.


//=================================Question 48========================================
var value = 10;
function update() {
    value = 20;          // no var
    console.log(value);
}
update();
console.log(value);

// Output
// 20
// 20
// here is reassign the value of variable value.



//=================================Question 49========================================
var color = "Blue";
function changeColor() {
    var color = "Red";
    console.log("Inside:", color);
}
changeColor();
console.log("Outside:", color);

// Output
//Inside: Red
//Outside: Blue


//=================================Question 50========================================
var marks = 70;
function mark(){
    var marks = 95;
    console.log("Inside:",marks);
}
mark();
console.log("Outside:",marks);


// Section 11: Nested Functions
//=================================Question 51========================================
function outer() {
    var teacher = "Kartik Sir";
    function inner() {
        var student = "Jenil";
        console.log(student);
        console.log(teacher);
    }
    inner();
}
outer();

// Output
// Jenil
// Kartik Sir

//we cann't access teacher or student outside outer().


//=================================Question 52========================================
function parent() {
    var a = "Parent";
    function child() {
        var b = "Child";
        function grandchild() {
            var c = "Grandchild";
            console.log(a);
            console.log(b);
            console.log(c);
        }
        grandchild();
    }
    child();
}
parent();

// Output
// Parent
// Child
// Grandchild


//=================================Question 53========================================
// function outer() {
//     var secret = "Hidden";
//     function inner() {
//         console.log(secret);
//     }
// }
// inner();
// outer();

function outer() {
    var secret = "Hidden";
    function inner() {
        console.log(secret);
    };
    inner();
}
outer();



//=================================Question 54========================================
function createMessage() {
    var greeting = "Hello";
    function show() {
        console.log(greeting + " students");
    }
    return show;
}
var messageFunc = createMessage();
messageFunc();

//Output
//Hello students

// The inner function still has access to greeting because of chain scope.


//=================================Question 55========================================
function studentInfo(){
    var name = "Amit"
    var course = "B.tech"
    function display(){
        console.log(name);
        console.log(course);
    };
    display();
}
studentInfo();


// Section 12: Common Errors with var
//=================================Question 56========================================
// function test() {
//     x = 100; // missing var
// }
// test();
// console.log(x);

// Problem in this code is firstly missing var during variable declaration and console.log(x) in global scope when we add var 
// to declare variable then this code give an error because we write console.log outside the function where not access the 
// value of x.


//=================================Question 57========================================
if (true) {
    var x = 20;
}
console.log(x);

//Output
// 20  because of var are fully hoisted in block scope.


//=================================Question 58========================================
console.log(a);
var a = 10;

// Output is 10 because var is fully hoisted in global scope


//=================================Question 59========================================
var x = 10;
var x = 20;
console.log(x);

//yes this is allowed with var redeclaration and reassign.


//=================================Question 60========================================
// function calculate() {
//     total = 0;
//     for (var i = 1; i <= 5; i++) {
//         total = total + i;
//     }
//     console.log(total);
// }
// calculate();
// console.log(total); // currently works, but should not

function calculate() {
    var total = 0;
    for (var i = 1; i <= 5; i++) {
        total = total + i;
    }
    console.log(total);
}
calculate();
