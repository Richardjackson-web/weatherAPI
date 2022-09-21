//function, if, else, else if - conditional branching, alert, prompt, confirm, conversions, 
//comparison.

// let year = prompt("In what year did COVID-19 paralyze the world?");

// if (year == 2020){
//     alert("Correct! You are right.");
// }
// else if(year > 2020){
//     alert("COVID-19 was over by then.")
// }
// else{
//     alert("Wrong! Try again");
// }

//Logical Operators - || - OR, && - AND, ! - NOT

// let time = prompt("What time are you coming to the office?");

// if (time < 9 && time < 16 ){
//     alert("Welcome to the office");
// }
// else{
//     alert("Office closed! Come back tomorrow")
// }

//Function - is used to write a block of codes that will 
//perform a particular task

// function clickMe(){
//     document.getElementById("me").style.color = "green";
// }

// function hoverMe(){
//     document.getElementById("me").style.color = "red";
// }

// function showMessage(){
//     alert("Hi there!");
// }

// showMessage();

//Local Variable - is a variable that is only
//available within a function and it can not be used outside 
//that function.
//Global Variable - is a variable that is declared outside a function
//and it can be used anywhere in the code.
//Parameters and Arguments in functions

// function addSum(a, b, c){
//     document.getElementById("output").innerHTML = a + b - c;
// }

// addSum(4, 3, 2);

// function checkAnswer(){
//     let number = document.getElementById("input").value;
//     if (number == "a"){
//         document.getElementById("output").innerHTML = "&#9745; Correct! \n Well done.";
//         document.getElementById("output").style.color = "green";
//     }
//     else {
//         document.getElementById("output").innerHTML = "&#9747 Wrong answer! Try again";
//         document.getElementById("output").style.color = "red";
//     }

// }
//Unary and Operand
//Loops: While loop and For Loop
//For iterations and repetitions.
//Functions expression  
// function sum(a,b){
//     return console.log(a + b);
// }
// sum(4, 4);

// // Function Declaration
// let num = function(a, b){
//     return console.log(a + b);
// }
// num(3, 3);

// // Arrow Function
// let food = (a, b)=>{
//     return console.log(a + b);
// }
// food(2,2);

// New line
// console.log("Hello \n there!");
// // Quotes
// console.log('He said \'He is fine\', so I believe him');
// // Backlash
// console.log("I want to add \\ that")

// Contatenation

// let firstName = "John";

//  let lastName = "Thomas"

//  let fullName = firstName + " " + lastName;

//  console.log(fullName);

// to                                                                                         .Fixed() method....Number method
// let digit = 9.5643;
// console.log(digit.toFixed(1));

//String methods
// to.String() method

// console.log(typeof(food));

// console.log(food.toString());

// join method
// console.log(food.join(", "));

//pop and push method
// console.log(food.pop());

// console.log(food);

// food.push("Indomie");

// console.log(food);

//Shift method

// food.shift();
// console.log(food);

//unshift method

// food.unshift("Tea");
// console.log(food);
//delete
//concat
//splice()
//toString()
//sort()
// reverse()
//forEach()
//filter()
//Array Iteration


//Date()
//getDate Method
//Maths method
function changeColor(){
    document.getElementById("demo").setAttribute("class", "heading");
}