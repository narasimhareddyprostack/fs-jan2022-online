let state = {
    id: 101,
    message: "Hello,GM",
    loc: ["Bangalore", "USA", "SNG"],
    emp: { id: 101, name: "Rahul" }

}
console.log(state.emp.name)
let { message, emp } = state;
console.log(message)
console.log(emp.name)

// Object Destructuring?
// reading object properties as variable name
// we are destructing the object, based on the requirment.
// readability