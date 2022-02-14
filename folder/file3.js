

//let is limited only to its function not outside function
//var variable can be used outside function 

//1
for(var i=0; i < 5; i++)
{
    console.log(i);
}

console.log("value of i is", i);


//2
for(let k=0; k < 5; k++)
{
    console.log(k);
}

console.log("value of i is", k);
//scope of let variable is only upto for loop //file3.js:21 
        
       /*Uncaught ReferenceError: k is not defined
       at file3.js:21:30*/

       

//3
let j=0;
for(j=0; j < 5; j++)
{
    console.log(j);
}

console.log("value of i is", j);
// here scope of let variable is for entire program.. so no error