"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
*/
function make_shirt(size = "large", message = "I love TypeScript") {
    console.log(`\nThe shirt size is ${size} and message "${message}" is printed on it`);
}
make_shirt();
//calling a function with custom size and default message
make_shirt("medium");
//calling a function with custom size and custom message
make_shirt("small", "I love programming");
