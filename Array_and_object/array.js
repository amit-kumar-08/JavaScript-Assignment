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


// # 7. Adding Elements to Arrays
//===============================Question 1==========================================
// push() method is used to add an element at the end of an array.


//===============================Question 2==========================================
// unshift() method is used to add an element at the beginning of an array.

//===============================Question 3==========================================
let nums = [1, 2, 3];
nums.push(4);
console.log(nums);

// Output
// [1, 2, 3, 4]

//===============================Question 4==========================================
//continuing from the previous question....
nums.unshift(0);
console.log(nums)


//===============================Question 5==========================================
// True


// # 8. Removing Elements
//===============================Question 1==========================================
// pop() method removes the last element of an array.


//===============================Question 2==========================================
// shift() method removes the first element of an array.


//===============================Question 3==========================================
// let nums = [100, 200, 300, 400, 500];
// nums.pop();

// nums.pop() method remove last elements from this array.
// and after calling it array contain [100, 200, 300, 400] 

//===============================Question 4==========================================
// After the previous operation...
// nums.shift() method remove first element from that array.
// and after calling it array contain [200, 300, 400]


//===============================Question 5==========================================
// True


// # 9. Searching in Arrays
//===============================Question 1==========================================
//The indexOf() method return index number when the searched value is found in the array.


//===============================Question 2==========================================
// indexOf() return -1 when the value is not present in the array.


//===============================Question 3==========================================
const names = ["Jenil", "Mahir", "Arjun"];
console.log(names.indexOf("Mahir"));

//Output
// 1


//===============================Question 4==========================================
// same previous array...
console.log(names.indexOf("Krishna"));

// Output
// -1


//===============================Question 5==========================================
let students_ = ["Amit", "Neel", "Mohit", "Rohan", "Anand", "Priyesha"];
console.log(students_.indexOf("Priyesha"));


// 10. Array with Different Data Types
//===============================Question 1==========================================
// Yes, A JavaScript array store values of different data types (e.g., number, string, boolean, null) in the same array.


//===============================Question 2==========================================
let data = [8, "string", true, null];
console.log(data);


//===============================Question 3==========================================
// we check the data type of each element in such an array using loop and typeof() method.


//===============================Question 4==========================================
// const data = [100, "Hello", true, null];
// console.log(typeof data[0]);

// Output
// number


//===============================Question 5==========================================
// same previous array...
// boolean, typeof data[2] returns for the same array. 



// # 11. Array of Arrays (Matrix) – 2D Arrays
//===============================Question 1==========================================
// 2D array (array of arrays) commonly Used in tables, grids, games, and storing marks of multiple students.


//===============================Question 2==========================================
// const matrix = [
//     [1, 2],
//     [3, 4],
//     [5, 6]
// ];
// console.log(matrix[2][1])

// Output
// 6


//===============================Question 3==========================================
let mat = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(mat[1][2]);



//===============================Question 4==========================================
const arr = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
];

// we access and print the last element of the last row in this matrix 

console.log(arr[2][2]);



//===============================Question 5==========================================
let array = [
    [10, 20, 30],
    [40, 50, 60]
];

array[1][1] = 100;

console.log(array)