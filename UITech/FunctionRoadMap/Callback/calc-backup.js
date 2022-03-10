let calculate = (a, b, operation) => {
    let result = ""
    if (operation == "sum") {
        result = a + b
    }
    if (operation == "multi") {
        result = a * b;
    }
    return result;
}
let output = calculate(10, 20, "sum");
console.log(output)
let output2 = calculate(10, 20, "multi");
console.log(output2)
