const input=require('readline-sync')

// let n=input.questionInt('enter the length of arr');
// let arr=[];

// for (let i = 0; i < n; i++) {
//     let object={};
//     object.name=input.question("enter the name :");
//     object.age=input.questionInt("enter the age -");
//     arr.push(object);
// }

// console.log(arr);

// function roshan (arr){
//     let arr1 = [];
//     let arr2 = [];
//     let arr3 = [];
//     for (let i = 0; i < arr.length -1; i++) {
//         if (arr[i].name=arr[i+1]['name']){
//             arr1.push(arr[i])
//             arr.slice(i,i+2)
//             console.log(arr);
            
//         }
        
//     }
     
   
// }
// roshan(arr)

// const people = [

//     { name: "Alice", age: 21 },

//     { name: "Bob", age: 22 },

//     { name: "Alice", age: 23 },

//     { name: "Charlie", age: 24 },

//     { name: "Bob", age: 25 }

// ];


// function roshan() {
//     let arr = [];
//     let arr1 = [];
//     let arr2 = [];
//     let obj = {};
//     for (let i of people) {
        
    
//     if(i.name === 'Alice'){
//         arr.push(i)    

//     }
//     else if (i.name === 'Bob'){
//         arr1.push(i)
//     }
//     else{
//         arr2.push(i)
//     }
    
// }
// obj['Alice'] = arr;
// obj['Bob'] = arr1;
// obj['Charlie'] = arr2;

// return obj ;

// }
// console.log(roshan());













// palindrome


// function palindrome(n) {
//     let p=n
//         let sum=0;
//          while (n!=0) {
//             let r=n%10;
//             sum=sum*10+r;
//             // console.log('sum',sum);
            
//             n=Math.floor(n/10)
//          }
//          if(sum==p) {
//             console.log('palindrome number');
            
//          }
//          else{
//             console.log("not a palindrome number");
            
//          }
        
//     }
//     let n=input.questionInt("enter the input :");
//     palindrome(n)






// prime number



// function primenumber(n) {
//     let count = 0; 
//     let num = 2;   

//     while (count < n) {
//         let isPrime = 1;
        
//         for (let i = 2; i * i <= num; i++) { 
//             if (num % i === 0) {
//                 isPrime = 0; 
//                 break;
//             }
//         }
        
//         if (isPrime === 1) {
//             console.log('Prime number:', num);
//             count++;
//         }
//         num++;
//     }
// }

// let n = input.questionInt("Enter the number of prime numbers you want: ")
// primenumber(n);


