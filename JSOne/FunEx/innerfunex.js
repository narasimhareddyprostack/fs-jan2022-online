function outer() {
    console.log("Outer Function")
    function inner() {
        console.log("Inner Function")
    }
    inner()
    inner()
}
outer()
