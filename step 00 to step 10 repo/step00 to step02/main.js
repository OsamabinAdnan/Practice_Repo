//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Step 00 Hello World >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 
console.log("Hello World!");
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> step00a_json_objects >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/*
JSON syntax

{

 "name": "Vipin",

 "age": 21,

 "gender": "male",
}

But wait, Is JSON is similar to javaScript objects?

The Answer is No.

JavaScript objects can contain functions but JSON not.
JavaScript objects can only be used in JavaScript but JSON can be created and used by other programming languages.

======================================== JSON Object ========================================
The JSON object is written inside curly braces { }.

JSON objects can contain multiple key/value pairs.

Example :

 { "name": "Vipin", "age": 21 }

======================================== JSON Array ========================================
JSON array is written inside square brackets [ ].

Example :

 // JSON array

 [ "Vipin", "Ankit", "Raj"]
*/
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> step00b_syntax_error >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 
/*
lett message = "Hello World";//syntax error
console.log(message);
*/
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> step00c_type_error >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//let message = "Hello World";
//console.loger(message); //ERROR
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> step00d_assignability_error >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let message = "Hello World";
//message = 6; //ERROR
console.log(message);
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> step01_strong_typing >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// strongly typed syntax
let a = "Pakistan";
a = "USA";
let b = 9;
b = 56;
let c = true;
c = false;
// type inference
let d = "USA";
let e = 10.9;
e = 47;
let g = false;
g = true;
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> step02_const_let >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//use const where variable values do not change
const num1 = 5;
const num2 = 10;
//num1 = 15 ==> //ERROR
let num3 = 65;
let std1 = "Ali";
num3 = 78;
std1 = "Qasim";
if (true) {
    let z = 4;
}
else {
    let z = "string";
}
export {};
//console.log("let: "+ z);//ERROR z is not define in this scope
