//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ step 9a functions @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//Declaring functions
function hello() {
    console.log("Hello from Functions");
}
//Calling function
hello();
//Named functions
function add(x, y) {
    return x + y;
}
console.log(add(3, 5));
//Anonymous functions
let add1 = function (x, y) {
    return x * y;
};
console.log(add1(6, 5));
//Anonymous function with explict type
let add2 = function (x, y) {
    return x / y;
};
console.log(add2(66, 6));
//type names dont matter
let add3 = function (x, y) {
    return x - y;
};
console.log(add3(98, 64));
//Lambda functions or we can call it arrow function
let add4 = (a, b) => a + b;
//or you can also write this ===> var myAdd4 = function(a : number, b : number) {return a + b};
//it is just showing that arrow function concise your code
console.log(add4(9, 6));
function greeter(fn) {
    //....
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ step 9b function_optional_parameter @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//>>>>>>>>>> Named function with optional parameters
function buildName(firstName, lastName) {
    if (lastName) {
        return firstName + " " + lastName;
    }
    else {
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
let buildName1 = function (firstname, lastname) {
    if (lastname) {
        return firstname + " " + lastname;
    }
    else {
        return firstname;
    }
};
console.log(buildName1("Osama", "bin Adnan"));
console.log(buildName1("Arham"));
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ step09c_function_default_parameter @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//>>>>>>>>>>>>>>>>>>> Named function with optional and default parameters
function nameFunction(firstName, lastname) {
    if (lastname) {
        return firstName + " " + lastname;
    }
    else {
        return firstName;
    }
}
// console.log(nameFunction ("Osama")); //OK no error
// console.log(nameFunction ("Osama", "bin Adnan")); //OK no error
// >>>>>>>>>>>>>>>>>> anonymous function type with defult parameters
let nameFunction1 = function (firstname, lastname = "Adnan") {
    if (lastname) {
        return firstname + " " + lastname;
    }
    else {
        return firstname;
    }
};
console.log(nameFunction1("Arham", "Osama"));
console.log(nameFunction1("Arham"));
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ step09d_function_rest_parameter @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
function restParameter(firstName, ...lastName) {
    return firstName + " " + lastName.join(" ");
}
let employee_name = (restParameter("Osama", "bin", "Adnan"));
console.log(employee_name);
//anonymous function type with Rest parameters
let employeeData = function (firstname, ...restParameter) {
    return firstname + " " + restParameter.join(" ");
};
employee_name = (employeeData("Joseph", "Samuel", "Lucas", "MacKinzie"));
console.log(employee_name);
function sum(a, b) {
    return a + b;
}
console.log(sum(3, 9));
console.log(sum("Hello", " Osama"));
//this is not part of the overload list, 
//so it has only three overloads
function addition(arg1, arg2) {
    return arg1 + arg2;
}
console.log(addition(6, 5));
console.log(addition("Hello", " Function Overload"));
console.log(addition(true, false));
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ step09e_async @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//>>>>>>>>>>>>>>>> Callback function
//function passed in another function argument then it is called call back function
function hellofunction(cb) {
    return cb();
}
let callback = () => {
    console.log("Hello from Callback function");
};
hellofunction(callback);
//same program with some improvisation
function hellofunction1(cb) {
    return cb("Osama");
}
let callback1 = (name) => {
    console.log(`Hello ${name}`);
};
hellofunction1(callback1);
//same program with some improvisation
function hellofunction2(cb, myName) {
    return cb(myName);
}
let callback2 = (name) => {
    console.log(`Hello ${name}`);
};
hellofunction2(callback2, "Osama bin Adnan");
//>>>>>>>>>>>>>>>> Promises
let datafetching = true;
const Cooking = () => {
    return new Promise((resolve, reject) => {
        console.log("Promise is pending");
        if (datafetching) {
            setTimeout(() => {
                console.log("Promise has been resolve ");
                resolve("Good Job!");
            }, 2000);
        }
        else {
            setTimeout(() => {
                console.log("Promise is rejected");
                reject("Data Fetch failed");
            }, 2000);
        }
    });
};
Cooking().then((resolve) => {
    console.log(resolve);
}).catch((error) => {
    console.log(error);
});
//>>>>>>>>>>>>>>>> Async Await
//normal function ==> function test () {}
//async function
async function test() {
    console.log(1); //print 2nd
    await console.log(2); //print 3rd and stop here at this point because of await KW
    console.log(3); //print 5th
}
console.log(4); //print 1st
test();
console.log(5); //print 4th
//Another program
async function test1() {
    try {
        console.log(1); //print 2nd
        await console.log(2); //print 3rd and stop here at this point because of await KW
        console.log(3); //print 5th
    }
    catch (error) {
        console.log("error");
    }
}
console.log(4); //print 1st
test1();
console.log(5); //print 4th
export {};
