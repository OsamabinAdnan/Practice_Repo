//Names: Store the names of a few of your friends in a array called names. 
//Print each person’s name by accessing each element in the list, one at a time.

let names1:string []= ["Osama","Talha","Huzafa", "Hamdan", "Sufiyan", "Osman", "Arham"]
console.log(names1);
names1.forEach(friendname => console.log(friendname));

//Another method

let name2:string [] = ["Malcolm", "Yanni", "Edward", "Boris", "Francis"]
console.log(name2);
console.log(name2[0]);
console.log(name2[1]);
console.log(name2[2]);
console.log(name2[3]);
console.log(name2[4]);
console.log(name2[5]); //undefined