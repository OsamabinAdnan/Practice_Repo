//Union types are used when a value can be more than a single type.
//Such as when a property would be string or number. ==> tu define multiple data types to same variable
//The type can be declared with a pipe |.
//we can give more than 2 data type like let today : string | number | boolean

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> UNION LITERAL / TYPE UNION >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//1)
let myname : string | number

myname = "Osama bin Adnan"
console.log(myname);

myname = 35
console.log(myname);

//2)
let isPresent : boolean | string = true
if (isPresent = true){
    console.log("Present");    
} else {
    console.log(false);
    
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Narrowing >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//1)
let myAge : string | number
myAge = 25.6564 //Narrowing
console.log(myAge);
if (typeof myAge === "number"){   
console.log(myAge.toFixed(2));
}
myAge = "My age is 35"
if (typeof myAge === "string"){   
    console.log(myAge.toLowerCase());
    }

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Type literal or Literal type >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//1)
let newAge = Math.random () > 0.6 ? "Khan": 60;

//newAge.toLowerCase();//Error: Transpiler cannot narrow

if (newAge === "Khan") {
    // Type of newAge: string
    newAge.toUpperCase(); // Can be called
    console.log(newAge);    
} else {
    console.log(newAge);
    
}

if(typeof newAge === "string"){
    // Type of newAge: string
    newAge.toUpperCase(); // Can be called
    console.log(newAge);
}

typeof newAge === "string"
? newAge.toUpperCase() // Ok: string
: newAge.toFixed(); // Ok: number

//2)
let age: number | "died" | "unknown";

age = 90;//OK
age = "died";//OK
age = "unknown";//OK
//age = "living";//Error

//3)
let zia: "zia";

zia = "zia";
//zia = "khan";//Error

//4)
let literalType: "Osama" | 35 | true
literalType = "Osama"
console.log(literalType);
literalType = 35
console.log(literalType);
literalType = true
console.log(literalType);
//literalType = 45 //Error

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Type Alias >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//1)
type RawData = boolean | number | string | null | undefined
let data:RawData
type id = number | string
type idMaybe = id | undefined | null

//2) general variable
type StudentName = string
let student:StudentName = "Osama"
type IDCARD = string | number
let idcard:IDCARD = "GIAIC1234" //string
idcard = 1234 //number

//Another program
type Colors = "Red" | "Yellow" | "Green"

let colors : Colors = "Red"
console.log(colors);
colors = "Green"
console.log(colors);
colors = "Yellow"
console.log(colors);

//3) Array
type MainCourse = string [] | number []

let mainCourse : MainCourse = ["Biryani", "Halwa puri", "Pulao"]
console.log(mainCourse);
console.log(mainCourse[1]);

let menuPrice : MainCourse = [250, 50, 220]
console.log(menuPrice);

//Another Program
type ChatatPatar = string []
let chatarpatar:ChatatPatar = ["Biscuit", "Chai","Chips", "Cold Drink"]
console.log(chatarpatar);

//Another Program
type MaskObtained = number []
let mark:MaskObtained = [98,46,49,79,65,88]
console.log(mark);


//4) Object
type DETAIL = {
    name:string
    id:number
    email:string
}
let detail:DETAIL = {
    name:"Osama bin Adnan",
    id:65654,
    email:"osama@gmail.com"
}

//5) Array of object
type User = {
    name:string,
    id:number
}

type UserArray= User []

let users:Array<User> = [
    {name:"Osama",id:5454},
    {name:"Talha",id:5466},
    {name:"Huzafa",id:4564}
]
console.log(users[0]);

//6) Function
type Color = "Red" | "Yellow" | "Green"

function myColor (colors:Color) {
   console.log(`Color set to ${colors}`);   
}
myColor ("Red")
myColor ("Yellow")
myColor ("Green")
//myColor ("Blue") //Error