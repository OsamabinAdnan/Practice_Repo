//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Explicit Type Casting @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

let myName:unknown = "Osama bin Adnan"
console.log((myName as string).length);
console.log((<string> myName).toUpperCase());

let myBio:unknown[] = ["Osama", "bin", "Adnan"]
console.log((myBio as string[]).length);

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Enum @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

//>>>>>>> Return Index
enum Colors {
    Red,
    Green,
    Blue
}
// let color:Colors = Colors.Green
console.log(Colors.Green); //Output 1

//>>>>>>> Return Value
enum Direction {
    North = "N",
    South = "S",
    East = "E",
    West = "W"
}
// let dir:Direction = Direction.South
console.log(Direction.South); //Output S

//2)
enum Color1 {
    Red = 1,
    Green,
    Blue
}
// let col:string = Color1[2]
console.log(Color1[2]); //Output Green

//3)

enum TimeZone {
    Morning = "9 AM to 12 PM",
    Afternoon = "2 PM to 5 PM",
    Evening = "7 PM to 10 PM"
}

console.log(TimeZone.Afternoon); //Output is 2 PM to 5 PM

//>>>>>>> Define index
enum Color2 {
    Red = 2,
    Green = 1,
    Blue = 4
}

// let colIndex:Color2 = Color2.Blue
console.log(Color2.Blue); //Output 4
//2)
enum UserStatus {
    Active = "true",
    InActive = "false"
}

// let user: UserStatus = UserStatus.Active
// user = UserStatus.InActive

console.log(UserStatus.InActive); //Output is false

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Const Enum @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

const enum Color3 {
    Red,
    Green,
    Blue
}
console.log(Color3.Green);

//2)
const enum Color4 {
    Red = 1,
    Green = 2,
    Blue = 4,
}
// console.log(Color4[2]); //Error
console.log(Color4.Blue);
//3)
const enum Color5 {
    Red = "Red",
    Green = "Green",
    Blue = "Blue"
}
console.log(Color5.Blue);

//4)
const enum Menu {
    Tikka = 300,
    Biryani = 220,
    MalaiBoti = 280
}
let menu:Menu = Menu.Biryani
console.log(menu);

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Array @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//1)
let fruits: Array<string> = ["Mango", "Apple", "Banana", "Orange"]
console.log(fruits);
//2)
let mixArray: (string | number)[] = ["Osama", 35, "Talha", 33, "Huzaifa", 27]
console.log(mixArray);
//3)
let emptyArray:number[] = []
console.log(emptyArray);
emptyArray.push(1,2,3,4) //dynamically adding
console.log(emptyArray);

//Array working on index
console.log(fruits[2]);
console.log(fruits[22]); //to access the index which is not define in array

//to change the element in array on specific index
fruits[3] = "Peach"
console.log(fruits);
console.log(fruits.length)

//Push method ==> Adds one or more elements to the end of an array and returns the new length of the array.
fruits.push("Orange")
console.log(fruits);
//Pop method ==> Removes the last element from an array and returns that element.
fruits.pop()
console.log(fruits);
//shift method ==> Removes the first element from an array and returns that element. Shifts all subsequent elements to a lower index.
fruits.shift()
console.log(fruits);
//unshift method ==> Adds one or more elements to the beginning of an array and returns the new length of the array.
fruits.unshift("Mango", "Apricot")
console.log(fruits);
//slice method ==> Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).
let sliceCut = fruits.slice(1,3)
console.log(sliceCut);//[ 'Apricot', 'Apple' ]
console.log(fruits); //[ 'Mango', 'Apricot', 'Apple', 'Banana', 'Peach' ]
//splice method ==> Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
fruits.splice(1,2,"Kiwi", "Coconut")
console.log(fruits);//[ 'Mango', 'Kiwi', 'Coconut', 'Banana', 'Peach' ]
//concat method ==> Returns a new array comprised of the array on which it is called joined with the array(s) and/or value(s) provided as arguments.
let moreFruits = fruits.concat(["Apricot","Apple"])
console.log(moreFruits);
console.log(fruits);
//join method ==> The join method in JavaScript arrays converts all elements of an array into a string and concatenates them, separated by a specified separator string. It does not modify the original array.
let Array:string[] = [ 'Mango', 'Kiwi', 'Coconut', 'Banana', 'Peach' ]
let JoinArray = Array.join(" | ")
console.log(JoinArray); //Mango | Kiwi | Coconut | Banana | Peach
console.log(Array);

//indexOf method: ==> Returns the first index at which a given element can be found in the array, or -1 if it is not present.
let index = fruits.indexOf("Banana") //3
console.log(index);
index = fruits.indexOf("Orange") //-1
console.log(index);
//forEach method: Executes a provided function once for each array element.
fruits.forEach(fruit=>{
    console.log(fruit);
    
})
//map method: ==> Creates a new array populated with the results of calling a provided function on every element in the calling array.
let Num:number[] = [1,4,9,16,25]
let root:number[] = Num.map(Math.sqrt)
console.log(root); //[ 1, 2, 3, 4, 5 ]
console.log(Num); //[ 1, 4, 9, 16, 25 ]

//filter: Creates a new array with all elements that pass the test implemented by the provided function.
let evenNumber = root.filter(num => num % 2 === 0)
console.log(evenNumber);//[ 2, 4 ]
console.log(root); //[ 1, 2, 3, 4, 5 ]


//reduce: Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
let sum = root.reduce((previousValue,CurrentValue) => previousValue + CurrentValue,0)
console.log(sum);
console.log(root);

