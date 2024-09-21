const input=require('readline-sync')
// 3.Input 1:
// const orders = [
//   { orderId: 101, city: "Mumbai", productName: "Laptop" },
//   { orderId: 102, city: "Delhi", productName: "Phone" }
// ];
// const targetCity = "Mumbai";
// Output 1: [101]
// Explanation: Only order 101 is going to Mumbai.

// Input 2:
// const orders = [
//   { orderId: 103, city: "Chennai", productName: "Tablet" },
//   { orderId: 104, city: "Chennai", productName: "Charger" },
//   { orderId: 105, city: "Kolkata", productName: "Keyboard" }
// ];
// const targetCity = "Chennai";
// Output 2: [103, 104] 
// Explanation: Both orders 103 and 104 are going to Chennai.

// const input=require('readline-sync')
// let n=input.questionInt("enter the list of order");
// let arr=[];
// for (let i = 0; i < n; i++) {
//      let orders={};
//       orders.orderid=input.questionInt('enter the number :');
//       orders.city=input.question('enter the city :')
//       orders.productName=input.question('enter the product name :')
//       arr.push(orders)
// }
// console.log(arr);


// function order(targetCity) {
//     let array=[];
//     for (let i = 0; i < arr.length; i++) {
//         if (targetCity==arr[i].city) {
//             array.push(arr[i].orderid)
//         }
        
//     }
//     console.log(array);
    
// }
// targetCity=input.question("enter the target city")
// order(targetCity)




// question  =  [[1,2],[3],[4,[5]]];
// //  output   =  [1,2,3,4,5];

// let arr =[];
// arr.push([0])
// arr.push([1])


let arr=[1,2,3,4]
console.log(arr.slice(1,2));




