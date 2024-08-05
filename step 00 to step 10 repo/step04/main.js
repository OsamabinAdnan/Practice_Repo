//Union types are used when a value can be more than a single type.
//Such as when a property would be string or number. ==> tu define multiple data types to same variable
//The type can be declared with a pipe |.
//we can give more than 2 data type like let today : string | number | boolean
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> UNION LITERAL / TYPE UNION >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//1)
let myname;
myname = "Osama bin Adnan";
console.log(myname);
myname = 35;
console.log(myname);
//2)
let isPresent = true;
if (isPresent = true) {
    console.log("Present");
}
else {
    console.log(false);
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Narrowing >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//1)
let myAge;
myAge = 25.6564; //Narrowing
console.log(myAge);
if (typeof myAge === "number") {
    console.log(myAge.toFixed(2));
}
myAge = "My age is 35";
if (typeof myAge === "string") {
    console.log(myAge.toLowerCase());
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Type literal or Literal type >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//1)
let newAge = Math.random() > 0.6 ? "Khan" : 60;
//newAge.toLowerCase();//Error: Transpiler cannot narrow
if (newAge === "Khan") {
    // Type of newAge: string
    newAge.toUpperCase(); // Can be called
    console.log(newAge);
}
else {
    console.log(newAge);
}
if (typeof newAge === "string") {
    // Type of newAge: string
    newAge.toUpperCase(); // Can be called
    console.log(newAge);
}
typeof newAge === "string"
    ? newAge.toUpperCase() // Ok: string
    : newAge.toFixed(); // Ok: number
//2)
let age;
age = 90; //OK
age = "died"; //OK
age = "unknown"; //OK
//age = "living";//Error
//3)
let zia;
zia = "zia";
//zia = "khan";//Error
//4)
let literalType;
literalType = "Osama";
console.log(literalType);
literalType = 35;
console.log(literalType);
literalType = true;
console.log(literalType);
let data;
let student = "Osama";
let idcard = "GIAIC1234"; //string
idcard = 1234; //number
let colors = "Red";
console.log(colors);
colors = "Green";
console.log(colors);
colors = "Yellow";
console.log(colors);
let mainCourse = ["Biryani", "Halwa puri", "Pulao"];
console.log(mainCourse);
console.log(mainCourse[1]);
let menuPrice = [250, 50, 220];
console.log(menuPrice);
let chatarpatar = ["Biscuit", "Chai", "Chips", "Cold Drink"];
console.log(chatarpatar);
let mark = [98, 46, 49, 79, 65, 88];
console.log(mark);
let detail = {
    name: "Osama bin Adnan",
    id: 65654,
    email: "osama@gmail.com"
};
let users = [
    { name: "Osama", id: 5454 },
    { name: "Talha", id: 5466 },
    { name: "Huzafa", id: 4564 }
];
console.log(users[0]);
function myColor(colors) {
    console.log(`Color set to ${colors}`);
}
myColor("Red");
myColor("Yellow");
myColor("Green");
export {};
//myColor ("Blue") //Error
