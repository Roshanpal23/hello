// function abc() {
//     console.log("abc");
    
    
// }
    
// function one(callback) {
//     setTimeout(()=>{
//         console.log("one");
//         callback(abc)

//     },2000)   
// }
// function two(callback) {
//     console.log("two");
//     callback()

    
    
// }
// one(two)





  
// let p= new Promise((resolve,reject) => {
//     let a=3
//     let b=4
//     if (a>b){
//         resolve("promise completed")
//     }
//     else{
//         reject("Promise rejected")
//     }

    
// });
// p.then((resolve)=>{
//     new Promise((resolve)=>{
//         resolve("abc")
//     })
//     console.log(resolve);   
// }).then((resolve)=>{
//     console.log(resolve);
    
// })
// .catch(()=>{
//     console.log("promise incomplete");
    
// })



// const tiger=(a,b,callback)=>{
//     console.log(a+b);
    
    
// }
//     function picker() {
//         console.log('rose');
        
        
//     }
    
//   function killer(a,b,callback) {
//    const p=tiger(a,b)+picker();
//    console.log(p);
   
//   }
// killer(3,5,picker)



function picker() {
    console.log('rose');
    return 'rose';  // Returns 'rose' for future use
}

const tiger = (a, b) => {
    const sum = a + b;
    console.log(sum);
    return sum;     // Returns the sum for future use
}

const combineResults = (a, b, callback) => {
    const tigerResult = tiger(a, b);     // Tiger's result is stored
    const pickerResult = callback();     // Picker's result is stored

    console.log(tigerResult + pickerResult);  // Combines both and prints
}

combineResults(3, 5, picker);

