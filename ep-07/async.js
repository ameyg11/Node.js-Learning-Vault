const fs = require("fs") 
const https = require("https")

console.log("Start");

var a = 987456;
var b = 1236;

// https.get("https://dummyjson.com/products",
//     (res) => {
//         console.log("Data Fetched Succesfully");
//     }
// )

const crypto = require("crypto")

crypto.pbkdf2('password' , 'salt', 5000, 50, 'sha512', (err, key) => {
    console.log("password is generated", err,key);
})

https.get("https://dummyjson.com/products", (res) => {
    let data = "";

    res.on("data", (chunk) => {
        data += chunk;
    });

    res.on("end", () => {
        console.log("Data fetched successfully:");
        console.log(JSON.parse(data));
    });
});

setTimeout(() => {
    console.log("timeout set for 5 seconds");
},5000)

fetch(`https://dummyjson.com/products`,)
        .then(console.log("data fetched successfully"))
        .catch(error => console.error(error));


fs.readFile("./file.txt","utf8", (err, data) => {
    console.log("File data : ", data);
})

function multiplyFn(x, y){
    const result = a * b;
    return  result; 
}

var c = multiplyFn(a, b);

console.log("Your answer is : ",c);
// fetch(`https://dummyjson.com/products`,)
//         .then(response => response.json())
//         .then(data => console.log(data))
//         .catch(error => console.error(error));
