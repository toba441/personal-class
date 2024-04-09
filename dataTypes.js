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