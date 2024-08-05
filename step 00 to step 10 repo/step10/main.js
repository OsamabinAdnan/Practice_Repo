//Tuple is also called type array
//syntax
let empData = [
    ["Osama", 35, true],
    ["Talha", 33, true],
    ["Huzafa", 27, false]
];
//Code 02
//we can add object in tuple as well
let arr = ["Hamdan", 6, false, { name: "Sufiyan" }];
console.log(arr);
console.log(arr[0]); //Hamdan
console.log(arr[3]?.name); //Sufiyan
for (let employee of arr) {
    console.log(employee);
}
export {};
