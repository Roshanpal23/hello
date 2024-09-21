 const input=require("readline-sync")

// case 1 input=1234
//              1+2+3+4 = 10;
//              1+0
//        output=  1 
             
     
//
function onedigit(n) {
        while (n >= 10) {
            let sum = 0;
            while (n> 0) {
                sum += n% 10;
                n= Math.floor(n / 10);
            }
            n= sum;
        }
        return n
        
    }
    
    n=input.questionInt("enter the value of n")
    console.log(onedigit(n))



