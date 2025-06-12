const a = 100;

const fs = require("fs");

setImmediate(() => console.log("Set Immediate"))

Promise.resolve(() => console.log("Promise"));

fs.readFile("./file.txt","utf8", (err, data) => {
    console.log("File Reading CB");
})

setTimeout(() => console.log("Timer Expired"),0);

process.nextTick(() => console.log("process.nextTick"));

function printA(){
    console.log("a = ",a );
}

printA();

console.log("Last line of the code");
