// Chapter array ( 14 - 16 )

//Question-1

// Declare an empty array using literal notation
// var studentNames = [];

// Declare an empty array using object notation
// var studentNamesObject = new Array();

// Declare and initialize a strings array
// var stringArray = ["Sami", "Salman", "Hussain"];

// Declare and initialize a numbers array
// var numbersArray = [10, 20, 30, 40];

// Declare and initialize a boolean array
// var booleanArray = [true, false, true];

// Declare and initialize a mixed array
// var mixedArray = ["Sami", 20, true, "SH"];

// Declare and initialize an array for education qualifications
// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];


// Display the listed qualifications in the browser
// document.write("<h1>Qualifications:</h1>");
// document.write("1) SSC<br>2) HSC<br>3) BCS<br>4) BS<br>5) BCOM<br>6) MS<br>7) M. Phil.<br>8) PhD");


//Question-2

// let student_1 = ["salman"]
// let student_2 = ["sami"]
// let student_3 = ["hussain"]

// let score_1 = [325]
// let score_2 = [430]
// let score_3 = [295]

// const totalmarks = 500;

// percentage1 = (score_1 / 500) * 100
// percentage2 = (score_2 / 500) * 100
// percentage3 = (score_3 / 500) * 100

// document.write("<h1>Student Scores and Percentages:</h1>");

// document.write("Score of Salman 325. " +  "<b>" + percentage1 + "% </b>" + "<br>");
// document.write("Score of Sami 430. " + "<b>" + percentage2 + "% </b>" + "<br>");
// document.write("Score of Hussain 295. " + "<b>" + percentage3 + "% </b>" + "<br>");


//Question-3
// // Initialize an array with student scores
// var studentScores = [320, 230, 480, 120];

// // Display the original array of student scores
// document.write("Original Scores: " + studentScores + "<br>");

// // Sort the array in ascending order
// studentScores.sort(function(a, b) {
//     return a - b; // This ensures the array is sorted numerically
// });

// // Display the sorted array
// document.write("Sorted Scores in Ascending Order: " + studentScores + "<br>");


//Question-4

// // Initialize an array with city names
// var cities = ["Karachi", "Lahore", "Faisalabad", "Islamabad", "Nawabshah", "Sukkur"];

// // Copy 3 elements from cities array to selectedCities array
// var selectedCities = cities.slice(0, 3);  // `slice(0, 3)` copies elements from index 0 to index 2

// // Display the original cities array
// document.write("Cities Array: " + cities + "<br>");

// // Display the selected cities array
// document.write("Selected Cities Array: " + selectedCities + "<br>");


//Quesion-5

// Initialize the array with words
//var arr = ["This ", " is ", " Sami ", " Hussain"];

// Use the join() method to create a single string
//var result = arr.join("");  // Join elements with an empty string to form one sentence

// Display the resulting string
//document.write("Resulting String: " + result + "<br>");


//Question-6
 // Create an empty array to act as the stack
//  let stack = [];

//  // Add elements one by one (Last In)
//  stack.push("keyboard");
//  stack.push("mouse");
//  stack.push("printer");
//  stack.push("monitor");

//  // Remove and display elements one by one (First Out)
//  document.write("Out: " + stack.pop() + "<br>"); // monitor
//  document.write("Out: " + stack.pop() + "<br>"); // printer
//  document.write("Out: " + stack.pop() + "<br>"); // mouse
//  document.write("Out: " + stack.pop() + "<br>"); // keyboard

//  console.log(stack);
