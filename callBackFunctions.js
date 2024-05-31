//Function Declaration

const { get } = require("http");

function userProfile(name)
{
    console.log(`Hello ${name}`);
}

userProfile("Aarudhra");

//Arrow Function
const numbers = [8, 10];
const double = numbers.map(num => num*num);
console.log(double);

//Anonymous Function



//Callback Function

function getUserData(callback)
{
    let name = "Priya";
    callback(name);
}
function displayName(name)
{
console.log(`Hello ${name}`);
}
getUserData(displayName);