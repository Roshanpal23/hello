

// 1.Replace 'a' with '@'
//   Replace 's' and 'S' with '$'
//   Replace 'i' with '!'
//   Replace 'o' and 'O' with '0' (zero)
//   Replace 'E' with '3'

    
const input = require("readline-sync");
let n = input.question("Enter the Name:");

let result = '';

for (let i = 0; i < n.length; i++) {
    let array = n[i];

    if (array === 'a') {
        result += '@';
    } 
    else if (array === 's' || array === 'S') {
        result += '$';
    } 
    else if (array === 'i') {
        result += '!';
    } 
    else if (array === 'o' || array === 'O') {
        result += '0';
    } 
    else if ( array === 'E') {
        result += '3';
    } 
    else {
        result += array;
    }
}

console.log("Updated Name:", result);

