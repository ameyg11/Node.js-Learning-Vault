console.log("Hello World");

var a = 945491;
var b = 20984;

function multiplyFn(x, y){
    const result = a * b;
    return  result; 
}

// setTimeout(() => {
//     console.log("This will run after 3 seconds");
// },3000)

var c = multiplyFn(a, b);

console.log("Your answer is : ",c);