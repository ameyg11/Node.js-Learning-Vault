// import { esModules } from './esModule.js';/

// console.log("This is main page of App");

// const obj2 = require('./xyz');

// console.log(obj2.x)

// console.log("over") 

// // esModules(3,4);
// x = 20;

// const obj = require('./Calculate/sum')
// const obj2 = require('./Calculate/multiply')

const {calculateSum, calcMultiply} = require('./Calculate/index')

calculateSum(2,4);
calcMultiply(3,4);

const data = require('./data.json')
console.log(data)

calcMultiply(data.age,2)
