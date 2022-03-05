let sum = (a, b) => {
    return a + b
}
let multi = (a, b) => {
    return a * b
}
let calculate = (a, b, callback) => {
    return callback(a, b);
    //business logic here
}

let result = calculate(100, 200, sum)
console.log(result)
let result2 = calculate(10, 20, multi)
console.log(result2)
