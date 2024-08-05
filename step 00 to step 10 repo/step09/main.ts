//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ step 9a functions @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//Declaring functions

function hello(){
    console.log("Hello from Functions");
    
}
//Calling function
hello()

//Named functions
function add (x:number, y:number):number{
    return x+y;
}
console.log(add(3,5));

//Anonymous functions
let add1 = function(x:number, y:number):number{
    return x*y
}
console.log(add1(6,5));

//Anonymous function with explict type
let add2:(x:number,y:number) =>number = function (x:number,y:number):number{
    return x/y
}
console.log(add2(66,6));

//type names dont matter
let add3: (baseValue:number,increment:number)=>number = function(x:number, y:number):number{
    return x-y
}
console.log(add3(98,64));

//Lambda functions or we can call it arrow function
let add4 = (a:number, b:number) => a+b
//or you can also write this ===> var myAdd4 = function(a : number, b : number) {return a + b};
//it is just showing that arrow function concise your code
console.log(add4(9,6));

// Type Alias example
type GreetFunction = (a:string)=>void
function greeter(fn: GreetFunction) {
	//....
}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ step 9b function_optional_parameter @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

//>>>>>>>>>> Named function with optional parameters

function buildName (firstName:string, lastName?:string):string{
    if (lastName){
        return firstName + " " + lastName;
    } else{
        return firstName;
    }
}
let result1 = buildName("Bob");
let result2 = buildName("Bob", "Adams");
let result3 = buildName("Bob", " "); 
console.log(result1);
console.log(result2);
console.log(result3);


//>>>>>>>>>> anonymous function type with optional parameters
let buildName1 : (firstname:string, lastname?:string)=> string = function (firstname:string, lastname?:string) : string{
    if (lastname){
        return firstname + " " + lastname;
    } else {
        return firstname;
    }
}
console.log(buildName1("Osama", "bin Adnan"));
console.log(buildName1("Arham"));

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ step09c_function_default_parameter @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//>>>>>>>>>>>>>>>>>>> Named function with optional and default parameters

function nameFunction (firstName:string, lastname:"Adnan"):string {
    if (lastname){
    return firstName + " " + lastname
    } else {
        return firstName
    }
}
// console.log(nameFunction ("Osama")); //OK no error
// console.log(nameFunction ("Osama", "bin Adnan")); //OK no error

// >>>>>>>>>>>>>>>>>> anonymous function type with defult parameters
let nameFunction1 : (firstname:string, lastname?:string) => string = 
    function (firstname:string, lastname = "Adnan"):string{
        if (lastname){
            return firstname + " " + lastname
        } else {
            return firstname
        }
    }
console.log(nameFunction1("Arham","Osama"));
console.log(nameFunction1("Arham"));

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ step09d_function_rest_parameter @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
function restParameter (firstName:string, ...lastName:string[]):string{
    return firstName + " " + lastName.join(" ")
}
let employee_name = (restParameter("Osama", "bin", "Adnan"))
console.log(employee_name);

//anonymous function type with Rest parameters

let employeeData: (firstname:string, ...lastname:string[])=> string =
function (firstname:string, ...restParameter:string[]){
    return firstname + " " + restParameter.join(" ")
}
employee_name = (employeeData("Joseph", "Samuel", "Lucas", "MacKinzie"))
console.log(employee_name);

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ step09f_function_overloads @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// we will use function overload to make signature and maintain type, signature will be create by same name which we have use to make sum type any function
function sum (a:number,b:number):number;
function sum (a:string, b:string):string

function sum (a:any,b:any):any{
    return a+b
}
console.log(sum(3,9));
console.log(sum("Hello"," Osama"));

//>>>>>>>>>>>> another example
//overloads give us type-checked calls
//its customary to order overloads from most specific to least specific
function addition (arg1:string, arg2:string):string
function addition (arg1:number, arg2:number):number
function addition (arg1:boolean, arg2:boolean):boolean
//this is not part of the overload list, 
//so it has only three overloads
function addition(arg1:any, arg2:any):any {
    return arg1 + arg2
}
console.log(addition(6,5));
console.log(addition("Hello", " Function Overload"));
console.log(addition(true,false));

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ step09e_async @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

//>>>>>>>>>>>>>>>> Callback function
//function passed in another function argument then it is called call back function

function hellofunction (cb:any) {
    return cb()
}
let callback = () => {
    console.log("Hello from Callback function");    
}
hellofunction(callback)

//same program with some improvisation
function hellofunction1 (cb:any) {
    return cb("Osama")
}
let callback1 = (name:string) => {
    console.log(`Hello ${name}`);    
}
hellofunction1(callback1)

//same program with some improvisation
function hellofunction2 (cb:any,myName:string) {
    return cb(myName)
}
let callback2 = (name:string) => {
    console.log(`Hello ${name}`);    
}
hellofunction2(callback2, "Osama bin Adnan")

//>>>>>>>>>>>>>>>> Promises
let datafetching = true
const Cooking = ()=>{
return new Promise ((resolve, reject)=> {
    console.log("Promise is pending");
    if (datafetching){
    setTimeout(()=>{
        console.log("Promise has been resolve ");
        resolve ("Good Job!")        
            },2000)
    } else {
       setTimeout(()=>{
        console.log("Promise is rejected");
        reject ("Data Fetch failed")
       },2000)
    }   
})
};

Cooking().then ((resolve)=>{
    console.log(resolve);    
}).catch((error)=>{
    console.log(error);    
})

//>>>>>>>>>>>>>>>> Async Await

//normal function ==> function test () {}
//async function
async function test (){
    console.log(1); //print 2nd
    await console.log(2); //print 3rd and stop here at this point because of await KW
    console.log(3); //print 5th
}
console.log(4); //print 1st
test()
console.log(5); //print 4th

//Another program

async function test1 (){
    try{
        console.log(1); //print 2nd
        await console.log(2); //print 3rd and stop here at this point because of await KW
        console.log(3); //print 5th
    } catch(error){
        console.log("error");        
    }
}
console.log(4); //print 1st
test1()
console.log(5); //print 4th

