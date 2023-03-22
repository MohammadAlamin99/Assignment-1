
// Assignment -1
// Question: Write a program that generates a multiplication table for a given number using a for loop.

function multiplicationTable(num){
    
    console.log("The multiplication table is : "+ num);

    for(var i=1; i<=10;i++){
        var result = num +" x "+ i + " = " + num * i;
        console.log(result);
    }
}

multiplicationTable(16);