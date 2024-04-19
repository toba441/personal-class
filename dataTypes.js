// We have 2 series of dataTypes in Javascript
// 1. primitive data type & 2. non-primitive data type
// primitive datatypes
// 1. Integers || Numbers 2. String 3. Boolean
// Floats and Integers are categorized as Numbers

// Number datatype

let myNum = 300;
let myFloat = 30.5;

console.log(typeof(myFloat), typeof(myNum)); // this will print out number for both
// You can run mathematecal operations on Number datatype
console.log(myNum - myFloat);
console.log(myNum + myFloat);
console.log(myNum * myFloat);
console.log(myNum / myFloat);
console.log(myNum % myFloat);
console.log(10 % 3);

// Note: This mathematical operator '%' is called the modulus operator, it gives the remainder of division


// String DataType
let firstName = 'Jon'

let lastName = "Stark"

let fullNames = `${firstName} ${lastName}` // interpolation

console.log(fullNames);

const email = 'danNycliNt@gmAil.com' 

const realNames = 'Jon_Stark_Peas'

// String methods .e.g to lowercase, to uppercase, to remove white spaces, want to trim

console.log(email.toLowerCase());

console.log(email.trim());

console.log(realNames.split('_')[1]);
console.log(realNames.split('_'));

console.log(lastName.length);


// Boolean Data type
// true or false
const isString = typeof(realNames) === 'string';
const isNumber = typeof(realNames) === 'number';

console.log(isString, isNumber);
// = assignment, === strict equality(checks both data type and values), == equality (check only values)

let numStr = '5'
let num = 5

console.log(numStr, num);

console.log(numStr === num);

let isTall = !true;

let isDark = !false;

console.log(isTall, isDark);

// Note: that the '!' is an opposite of true of false. (Not operator)

console.log(numStr !== '5');

// Non-primitive Data type
// 1. Array   2. Objects (key, value pairs) 3. Date 

// ARRAY
let myArray = ["Stark", "Lanister", 'Baratheon', "Greyjoy", "Woodcrest", "Snow"]   // square brackets
console.log(Array.isArray(myArray));

const firstElement = myArray[0]

const lastElement = myArray[myArray.length - 1]

console.log("first element in myArray = ", firstElement);
console.log("last element in myArray = ", lastElement);

// console.log(myArray[0]);
// console.log(myArray[1]);
// console.log(myArray[2]);
// console.log(myArray[3]);
// console.log(myArray[4]);
// console.log(myArray[myArray.length - 1]) // Last value of an Array ([theArray.length - 1])

// Higher order functions (in some programming language they can be seen as lambda expressions or lambda functions)

// Note 
myArray.forEach((v, i) =>  console.log("my fav character ", v))

const newMyArray = myArray.map((v) => v + " favs")
console.log(newMyArray);
let newArray = myArray.filter((v, i) => {
    return v !== "Stark"
})

let mapArray = myArray.map(v => {
    return v + " dan"
})

myArray.pop()
myArray.push('hushland')

console.log(myArray);
console.log(newArray);
console.log(mapArray);
// let myNums = []

// For Loops
// initialize i //condition // increment or decrement
// for (let i = 0; i <= 100; i++) {
//     let div = i % 2 
//     if (div !== 0) {
//         myNums.push(i);
//         continue
//     }
//     // if (i === 50) {
//     //     // console.log("Ouch, I think I just stopped")
//     //     continue;
//     // }
//     console.log(i);
// }
// console.log(myNums)

// Assignment
// 1. create an array to store your fav musicians (least of your musicians should 10)
// 2. print out to the terminal the length of your array
// 3. Loop through your array using the for and the forEach loop
// 4. Remove the last musican in your array
// 5  Add another musician to your array
// 6. create a new array to accommodate the list of your musicians with one of their music --- tips use the map function
// 7. Remove the 6th index of musician from your array --- use filter method || splice 

const favMusicians = ["Davido", "Wizkid", "BNXN", "Rihanna", "RKelly", "Selina Gomez", "Michael Jackson", "Don Meon", "Drake", "Eminem"]
console.log(favMusicians.length);

// Looping using for loop

for (let i = 0; i < favMusicians.length; i++) {
    console.log(favMusicians[i]);
}

favMusicians.forEach((v) => console.log(v))

for (let x of favMusicians) {
    console.log("for of loop: ", x);
}

favMusicians.pop()

console.log(favMusicians);

favMusicians.push("Ololade")

console.log(favMusicians);

// const favArray = []

// favMusicians.forEach((v, i) => {
//     if (i === 5){
//         favArray.push("Danny")
//     }

//     favArray.push(v)
// }) 

favMusicians.splice(6, 1)

console.log(favMusicians);

const filterMusicians = favMusicians.filter((v, i) => i !== 6)

console.log(filterMusicians);


// object || key value pair (in some languages it's called hashmap or dictionary)
let person = {
    firstName: "Michael",
    lastname: "Jackson",
    age: 51,
    complexion: "light",
    isHeTall: true,
}

console.log(person.isHeTall);

console.log(Object.values(person));

console.log(new Date()); // print out the current time

const currentDate = new Date().getDate()
console.log(currentDate);