// #1 What Is an Array?
//================================Question 1========================================
// An array is a special JavaScript data structure used to store a list of values.
//An array is an ordered collection of values. Each value has a unique index (position).


//================================Question 2========================================
//The technical term for the position of a value inside in array is index.

//================================Question 3========================================
//The index of an array always start at number 0.

//================================Question 4========================================
// var numbers = [10, 20, 30, 40];
// The value is store at index 2 is 30.

//================================Question 5========================================
// var numbers = [10, 20, 30, 40];
// The index of the number 40 is 3.

// #2 CREATING ARRAY
//================================Question 1========================================
//The two ways mentioned in the notes to create an array in JavaScript are :-
// 1. Using square brackets
// 2. Using the Array constructor 


//================================Question 2========================================
// Using square brackets method of creating an array is recommended by the notes.


//================================Question 3========================================
// let students = ["Jenil", "Mahir", "Priyesha", "Yashvi"];


//================================Question 4========================================
// let marks = new Array(85, 90, 78);


//================================Question 5========================================
// new array


// # 3. Accessing Values in an Array
//================================Question 1========================================
// index number

//================================Question 2========================================
// var students = ["Jenil", "Mahir", "Priyesha"];
// console.log(students[0]);

// Output
// Jenil


//================================Question 3========================================
// var students = ["Jenil", "Mahir", "Priyesha"];
// console.log(students[2]);

// Output
// Priyesha

//================================Question 4========================================
// undefined


//================================Question 5========================================
let colors = ["red", "blue", "green"]
console.log(colors[0])


// 4. Updating Values
//================================Question 1========================================
// Simply assign to a specific index like that

// var marks = [80, 75, 90];
// marks[1] = 95;

// console.log(marks);       // [80, 95, 90]


//================================Question 2========================================
var marks = [80, 75, 90];
marks[1] = 95;

console.log(marks);       


//================================Question 3========================================
// Output
// [80, 95, 90]


//================================Question 4========================================
// False


//================================Question 5========================================
//Yes we can update a value at an index that is currently outside the bounds of the array.
//arrays can have empty slots between existing elements when you assign values to higher indexes. 
// and length of array will also updated higher index value+1


// # 5. Array Length
//================================Question 1========================================
// .length


//================================Question 2========================================
// var arr = [1, 2, 3, 4];
// console.log(arr.length);

//Output
//4


//================================Question 3========================================
//If an array is empty (contains no elements), its length property equal to 0.


//================================Question 4========================================
// Length helps in loops.

//================================Question 5========================================
// property


// # 6. Looping Through Arrays
//===============================Question 1==========================================
// 1. For loop
// 2. While loop


//===============================Question 2==========================================
// i < arr.length


//===============================Question 3==========================================

// just after the array access statement in while's block scope.


//===============================Question 4==========================================
let students = ["Amit", "Mahir", "Krishna", "Ankit"];

for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}


//===============================Question 5==========================================
// In output after display all items from array then display undefined because we use <= instead of < so 1 extra index
// number try to access but in array no item assign at that index so output will be undefined.