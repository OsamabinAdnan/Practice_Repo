/*
Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used.
If it has, print a message that the person will need to enter a new username.
If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
*/

let current_users: string[] = ['John', 'Jane', 'Bob', 'Alice', 'Tom'];
let new_users: string[] = ['John', 'Jane', 'Peter', 'Susan', 'James'];

// loop through new_user to check the username availability
new_users.forEach(new_user_one => {

//Making a condition to check username exist or not
    let our_condition  = current_users.some((current_user_one)=>current_user_one.toLowerCase() === new_user_one.toLowerCase())

    if (our_condition){
        console.log(`Sorry! username ${new_user_one} is not available, you should enter new username`);        
    }
    else {
        console.log(`The username ${new_user_one} is available`);        
    }
})
