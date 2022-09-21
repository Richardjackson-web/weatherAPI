// document.getElementById("demo").innerHTML = "Hi There!";

// document.write(12 + 30);

// window.alert("My name is John");

// console.log("My name is John");

//Variables - are used to declare.
//let, var and const
//variable name is used to store values.
//In javascript, there 8 types of data types; strings and numbers.
//Strings (text) are written inside quotations..."".
//Numbers are written the way they are.
//In javascript you don't from 1...you count from 0.
// This symbol (=) is called assignment operator. it is not called equals to.
//it is used to assign a value to a variable.
//BODMAS
//Boolean - true and false
//An object is a data type that has properties and values.
// let x = "Richard";

// let y = 45;

// console.log(typeof(y));
//parenthesis
// let z = true;

// let user = {
//     name: "John",
//     age: 50,
//     car: "toyota",
//     "marital status":"married"
// }

// let food = ["Rice", "Beans", "Yam"];

// console.log(food[2]);

// let car = null;

// console.log(typeof(car));

// Alert

// alert("My name is John Thomas");

//Prompt
// prompt("What is your name?", "Richard");

//Confirm
// confirm("Are you the boss?")

//String Conversion
// let name = "445";

// let convert = Number(name);
// console.log(typeof(convert));

//Number conversion
// let num = 2000;

// let convert2 = String(num);
// console.log(typeof(convert2));
//Concatenation - it is the process of adding more than one string
//together

//camel casing
// let firstName = "John";

// let lastName = "Thomas";

// let fullName = firstName + " " + lastName;
// console.log(fullName);

//string comparison
// let text1 = "bee";

// let text2 = "bow";

// let text3 = text1 < text2;

// console.log(text3);

//if, else, else if - Conditional Branching

// let year = prompt("Which year did COVID 19 paralyse the world");
//  if(year == 2020){
//     alert("That is correct! Well done.");
//  }
//  else if(year > 2020){
//     alert("You are doing well.");
//  }
//  else{
//     alert("Wrong answer");
//  }

// Logical Operators
//....|| - OR
//....&& - AND
//....! - NOT

// let hour = 19;

// if(hour < 10 || hour > 18){
//     alert("Office is closed");
// }
// else{
//     alert("Welcome to the office");
// }

//Function...function name
// Declaration block
//The parenthesis is used to pass in parameters 
// Global vriable and local variable

// let number = "Timothy";
//global variable
//declared outside the function
// function showMessage(){
//     console.log(number);
// }
// console.log(number);

// showMessage();
//parameter
//argument
// function addSum(a,b,c){
//    return console.log(a + b - c);
// };

// addSum(5, 7, 2);
//a bug is called an error...debugging means solving errors.
// function changeColor(){
//     document.getElementById("demo").style.color = "green";
// };

// function changeColor1(){
//     document.getElementById("demo").style.color = "red";
// }

// function checkAnswer(){
//     let number = document.getElementById("input").value;
//     if (number == "a" || number == "A"){
//         document.getElementById("display").innerHTML = "Correct! Well done.";
//         document.getElementById("display").style.color = "green";
//     }
//     else{
//         document.getElementById("display").innerHTML = "Wrong answer! Try again";
//         document.getElementById("display").style.color = "red";
//     }
// }
// document.getElementById("para").style.display = "none";
// document.getElementById("close").style.display = "none";

// function openBtn(){
//     document.getElementById("para").style.display = "block";
//     document.getElementById("close").style.display = "block";
//     document.getElementById("open").style.display = "none";
// }

// function closeBtn(){
//     document.getElementById("para").style.display = "none";
//     document.getElementById("close").style.display = "none";
//     document.getElementById("open").style.display = "block";
// }


//Interpolation - We use it to add a variable in a string

// let price1 = 4500;
// let price2 = 2500;
// let totalPrice = price1 + price2;

// let message = 
// `I bought fuel yesterday for ${price1} but I am buying it now for ${price2}.
//  That is a total of ${totalPrice} so far.`;

//  console.log(message);

//Loops - While loop and For loop..iterations and repetitions

//While loop

// let i = 0;
// while(i < 10){
//     console.log(i);
//     i++;
// }

// for(let i = 0; i < 5; i++){
//     console.log(i)
// }
//function expressions, function declarations and arrow functions
//Function Expression
// function addSum(){
//     let a = 5;
//     let b = 6;
//     console.log(a + b);
// }
// addSum();


//Function Declaration
// let sum = function(){
//     let a = 4;
//     let b = 4;
//     console.log(a + b);
// }
// sum();


// Arrow functions
// let value = ()=>{
//     let a = 3;
//     let b = 5;
//     console.log(a + b);
// }

// value();

//single quote, double quote and backticks

// let user = `John said He is going to the house`;

// let input = "I am a javaScript programmer";

// let variable = input.length;
// console.log(user);


//String Methods
//length
//Slice()
//substring()
//substr()
//replace()
//toUpperCase()
//toLowerCase()
//join()
// let user = ["a", "b", "c"];

// let part = user.join("-");

// console.log(part);

//Number Methods
//toFixed()

let num = 9.56412;

let part = num.toFixed(2);
console.log(part);