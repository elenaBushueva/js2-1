function sum(a, b){
    return a + b;
}
function mult(a, b){
    return a * b;
}
const random_name = require('node-random-name');
function getRandomName(){
    return random_name();
}
const bigInt = require("big-integer");


module.exports = {
    sum,
    mult,
    getRandomName,
    bigInt,
};