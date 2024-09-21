
// palidrome number
// const input=require("readline-sync")
// n=input.questionInt("Number:");
// let arr=[];
// let i=;
// while(i<n){
//     arr[i]=input.questionInt("enter the number:")
//     i++;
    
// }
// let j=0
// let arr1=[]
// while(j<n){
//     arr1[j]=arr[i-1-j];
//     j++
// }


// let p=0
// let k=0;
// while(arr[k]!=arr1[k]){
//     p++;
//     break;
// }
// k++

// if(p==0){
//     console.log("true")
// }else{
// console.log("false")}


// Rotation in k number

// const input=require("readline-sync")
// let n=input.questionInt("Number:-")
// let arr=[];
// let i=0;
// while(i<n){
//     arr[i]=input.questionInt("enter the number")
//     i++;
// }

// let k=input.questionInt("Num")
// let count=0
// i=0
// let arr1=[];
// while(i<n){
// count++;
// if (count==k){
// arr[i]=arr1[i];
// }
// i++
// }
// console.log(arr1);



// const input = require('readline-sync');

// // User se input lena, kitne elements daalne hain array mein
// let n = input.questionInt("Kitne elements daalne hain array mein: ");

// // Array ko initialize karna aur user se inputs lena
// let arr = [];
// for (let i = 0; i < n; i++) {
//     arr[i] = input.questionInt("Number daalo: ");
// }

// // User se k value lena
// let k = input.questionInt("k ki value daalo: ");

// // Array ko k chunks mein reverse karna aur ulte order mein concatenate karna
// let arr1 = [];
// for (let i = 0; i < n; i += k) {
//     // `slice(i, i + k)` se `arr` se ek chunk of size `k` nikalta hai
//     let chunk = arr.slice(i, i + k);
//     // Check if chunk length is less than k for the last chunk
//     if (chunk.length < k) {
//         arr1 = arr1.concat(chunk); // If last chunk is less than k, just concatenate it
//     } else {
//         arr1 = arr1.concat(chunk.reverse()); // Reverse the chunk and concatenate to `arr1`
//     }
// }

// // Print the output as required
// console.log("Output:", arr1);


// find maximum
// const input=require("readline-sync")
// let n=input.questionInt("Number:-")
// let arr=[];
// let i=0;
// while(i<n){
//     arr[i]=input.questionInt("enter the number")
//     i++;
// }
// let max =arr[0];
// let j=1;
// while(j<n){
//     if(arr[j]>max){
//         max=arr[j]
//     }
//     j++
// }

// console.log(max)


// find minimum
// const input=require("readline-sync")
// let n=input.questionInt("Number:-")
// let arr=[];
// let i=0;
// while(i<n){
//     arr[i]=input.questionInt("enter the number")
//     i++;
// }
// let min=arr[0];
// let j=1;
// while(j<n){
//     if (arr[j]<min){
// min=arr[j]
//     }
//     j++
// }



// console.log(min)


// rotate the number.
const input=require("readline-sync")
let n=input.questionInt("Number")
let i=0;
let arr=[];
while(i<n){
    arr[i]=input.questionInt("enter the number")
    i++;
}
console.log(arr);
let k=input.questionInt("Gap number ")
for(j=0;j<k;j++){

i=0;
let r=arr[0];

while(i<n-1){
    arr[i]=arr[i+1];
    i++
}
arr[i]=r;}

console.log(arr)

// find maximum and minimum.
// const input=require("readline-sync")
// let n=input.questionInt("Number:-")
// let arr=[];
// let i=0;
// while(i<n){
//     arr[i]=input.questionInt("enter the number")
//     i++;
// }
// let min=arr[0];
// let max=arr[0];
// let j=1;
// while(j<=n){
//     if (arr[j]<min){
// min=arr[j]
//     }
//     if(arr[j]>max){
//         max=arr[j]
//     }
//     j++
// }


// console.log(min)
// console.log(max)




// const input=require("readline-sync")
// let n=input.questionInt("Number")
// let i=0;
// let arr=[];
// while(i<n){
//     arr[i]=input.questionInt("enter the number")
//     i++;
// }
// console.log(arr);
// let k=input.questionInt("Gap number ")
// for(j=0;j<k;j++){

// i=0;
// let r=arr[0];
// while(i<n-1){
//     arr[i]=arr[i+1];
//     i++
// }
// arr[i]=r;}

// console.log(arr)


// const input=require("readline-sync")
// let n=input.questionInt("n:-");
//          let i =0;
//          let arr=[];
//          let f =false;


//          while (i<n) {
//            arr[i]=input.questionInt("arr:-");
//            i++;
//          }console.log(arr);

//             let s=0;
//              let key=input.questionInt("key:-");
//              let e =n-1;
//              let mid;

//              while (s<=e) {

//                mid=Math.floor((s+e)/2);

//                if (arr[mid]==key) {
//                  f=true;
//                   break;

//                }else if (arr[mid]>key) {
//                  e=mid-1;

//                }else{

//                  s=mid+1
//                }

//              }console.log(f);
// ﻿

// let names = [];
// for (let i = 0; i < 5; i++) {
//   names[i] = prompt("Please enter a name");
// }
// for (let i = 0; i < 5; i++) {
//   console.log('names');
// }


// let isRaining=true;

// let isWeekend=false;

// if ( isRaining || !isWeekend){

// console.log("you should bring an umbrella")

// }else{

// console.log("you don't need to bring an umbrella")

// }


//Example of == and === 
// let a=7;

// let b="7";

// console.log(a==b);

// console.log(a===b)




// Q
// let isAdult =false;

// let hasDrivingLicenses=false;

// if(isAdult && hasDrivingLicenses==true){

// console.log('true')
// }

// else
// {

// console.log('false')}


// q

// let hasValidID= true;

// let isAbove21= false;

// let isInvited= true;

// let answer= hasValidID && (isAbove21 || isInvited);

// console.log(answer)


