// //console.log("Hello World!")

// var num = 1                    // Interger Data Type
// var num = 1.5                  // Float Data Type
// var name = "Good Morning"     // String Data Type
// var bool = true or false      // Boolean Data Type

// // var number = 50;
// // var name = "Rahul";

// // console.log(number);
// // console.log(name);

// // console.log(name +" has scored " + number);

// // // Task 1
// // // name, age , profession, salary

// var age = 45;
// var name = "Benjaman";
// var profession = "McDonalds Worker";
// var salary = 10000;
// console.log(
//   name +
//     " is " +
//     age +
//     " years old, and he is a " +
//     profession +
//     " and makes " +
//     salary +
//     " dollars every year."
// );

// // var num1 = 10
// // var num2 = 20

// // console.log("The addition is ", num1 % num2);
// // console.log(Math.PI);

// // Task 2
// // Calculate the BMI create a var kg and h  var bmi = (BMI = kg/h)

// var kg = 50;
// var h = 1.74;
// var bmi = kg / h;

// console.log(name + " has a bmi of " + bmi);

// // Task 3
// // Make the formula as weight / height square

// var bmi2 = kg / (h * h);

// console.log(name + " has a bmi of " + bmi2);

// // Task 4
// // Modify Your Existing Bmi calculator

// var kg = prompt("Enter your weight in kg's");
// var h = prompt("Enter your height in meters");
// var bmi = kg / (h * h);
// alert(bmi);

// Math Operations
// var num1 = 20;
// var num2 = 30;

// // Mod
// console.log(num2 % num1)

// // Strings
// var name = "Ahan"
// var num = "5";
// var num1 = "10"

// console.log(parseInt(num1) + parseInt(num))

// console.log(name[0]);

// Task 5

// var taskName = "Apple Iphone 12"
// var cost = "900"
// var tax = "100"
// var totalCost;

// Given are the above variables console log the total cost
// select the i and 1 from the taskName and log them to the console
// find out the reminder of cost / tax

// console.log(cost + tax)
// console.log(parseInt(cost) + parseInt(tax))
// console.log(parseInt(cost) % parseInt(tax))

// console.log(taskName[6])
// console.log(taskName[13])

// String Methods

// Strings are immutable in javascript 

// var name = "Ahhan";
// console.log(name);

// String Methods
// var methods;

// methods = name.toUpperCase();
// console.log(methods);

// methods = name.toLowerCase();
// console.log(methods);

// methods = name.length;
// console.log(methods);


// returns the charater at the given index
// methods = name.charAt(1);
// console.log(methods);

// TO change a number to a string 
// var int = 265;
// methods = int.toString();
// console.log(methods);

// Ahen Wins here (The Pro) 
// console.log(5 + methods); // 5 + "265"


// Task 6 

// Do the following
// 1. Take Input from the user
// 2. Convert the input to a string
// 3. Make the string lower case and uppercase
// 4. Find the length of the string

// Starting Loops

// While Loop 9-30-2022 EST

// var lineNumber = 1;
// while(lineNumber < 101){
//     console.log(lineNumber+ " I will do my homework");
//     lineNumber++;
// }



// For Loop 
// for (var lineNumber = 4; lineNumber < 101; lineNumber++) {
//     console.log(lineNumber);
// }


// Task 7
// We have printed numbers form 1-100 now 
//you guys need to print the number in following series - 0 2 4 6 .....



// var name = "Shohahn"

// for(var char = 0; char < name.length; char++){
//     if(name[char] == "h"){
//         console.log("H is at index " + char)
//     }
// }


// Task 8
// Take input from the user and check if the input contains 1 if the 
//input contains 1 log to console the input constains 
//1 else alert there is no number.

// IF Else Statements 9-30-2022 EST

//var username = prompt("Enter The username")

// function charmender(){
//     console.log('Fire ball');
// }

// charmender();
// charmender();
// charmender();


// function add(num1,num2){
//     var sum = num1 + num2;
//     console.log(sum);
// }

// add(10,2)
// add(2,2)
// add(3,24)
// add(6,56)
// add(100,2)

// Task 9
// You need to create 4 functions add(), sub(), multiply(), Divide()


// Arrays

// var name = "Ahan"
// var name1 = "Sohan"
// var name3 = "Neha"


//var student = ["Ahan", "Sohan", "Neha", "Ceo of codingzen"];

// console.log(student[0]);
// console.log(student[1]);

// student[2] = "Swayam";
// console.log(student[2]);

// To add element at the end of the array.
// student.push("New Student")
// student.push("New Student1")
// student.push("New Student2")

// To remove the last element of the array
// student.pop();
// student.pop();

// To add the element infornt of the array.
// student.unshift("Before Ahan")
// student.unshift("Before Ahan1")
// student.unshift("Before Ahan2")

// To remove the first element of the array
// student.shift()
// student.shift()

// Or Else use a for loop
// for(var i = 0; i < student.length; i++){
//     console.log(student[i]);
// }

// Task 10 
// 1. You need to take 10 input from the user.
// 2. Store in the array 
// 3. To log the whole array in the console.

// Solution 1 - 

// var inputs = []

// var input1 = prompt("input1")
// var input2 = prompt("input1")
// var input3 = prompt("input1")
// var input4 = prompt("input1")
// var input5 = prompt("input1")
// var input6 = prompt("input1")
// var input7 = prompt("input1")
// var input8 = prompt("input1")
// var input9 = prompt("input1")
// var input10 = prompt("input1")

// inputs.push(input1);
// inputs.push(input2);
// inputs.push(input3);
// inputs.push(input4);
// inputs.push(input5);
// inputs.push(input6);
// inputs.push(input7);
// inputs.push(input8);
// inputs.push(input9);
// inputs.push(input10);

// console.log(inputs[0]);
// console.log(inputs[1]);
// console.log(inputs[2]);
// console.log(inputs[3]);
// console.log(inputs[4]);
// console.log(inputs[5]);
// console.log(inputs[6]);
// console.log(inputs[7]);
// console.log(inputs[8]);
// console.log(inputs[9]);

// Solution 2 - 
// var inputs = [];

// for(var i = 0; i < 10; i++){
//     var input = prompt("Enter any input");
//     inputs.push(input);
// }

// for(var i = 0; i < inputs.length; i++){
//          console.log(inputs[i]);
//  }


// for(var inputNumber = 0; inputNumber <= 10; inputNumber++){
//     var input = prompt("Enter any input");
//     array.push(input)
// }

// var number = 0;

// while(number < 100){
//     console.log(number);
//     number++;
// }

// var nums = new Array(10);
// // iterate over each element and prompt for value
// for (var i = 0; i < nums.length; i++){
//   var input = prompt('Enter number ' + (i + 1) + ' of ' + (nums.length + 1));
//   // place value (as a number) into the array
//   nums[i] = new Number(input);
// }


// for(var i = 0; i < nums.length; i++){
//     console.log(nums[i]);
// }

//  var array = [];

// for(var inputNumber = 0; inputNumber <= 10; inputNumber++){
//     var input = prompt('Enter number ' + (inputNumber + 1) + ' of 10');
//     array.push(input)
// }

// for(var i = 0; i < array.length; i++){
//     console.log(array[i]);
// }

// var event = {
//     // object has key value pairs
//     name: "This is a demo item",
//     class: 10,
//     age: 50
// }

// var event1 = ["This is a demo item from event 1",10, 50];

// console.log(event.age)

var student = {
    fullName: "Ahan A",
    grade: "8",
    age: "14",
    driver: false,
    eats: function(){
        console.log("Ahannn Is Drinking Alcohol")
    },
    hobbies: ["Danceing", "BasketBall", "Cricket"]
}

console.log(student.fullName);
console.log(student.eats())
console.log(student.hobbies[1])


// Create a object of your name
// it should have following - 
// name, grade, age, two functions - isStudying, isPayingAttention in the class 
// array inside the object - you need to put in three things that you like.

// Task 2
// Create a object of your favourite anime character
// it should have following - 
// name, name of the show, two it should consisits of 3 functions of sleeping walking and talking and when the function is called it needs alerted. 
// array inside the object - you need to put in three things that you like.