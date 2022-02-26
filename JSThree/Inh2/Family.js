class Parent {
    constructor() {
        console.log("Parent class - Const")
    }
    get_Total_Assets() {
        console.log("10 CR");
    }
}
class Child extends Parent {
    constructor() {
        super();
        console.log("Child class -const")
    }
    get_Detals() {
        super.get_Total_Assets()
    }
    get_Total_Assets() {
        console.log("15 CR")
    }
}

let c = new Child();
c.get_Detals()
c.get_Total_Assets()