class Employee {
    constructor(emp_Id, ename, email) {
        console.log("constructor Executing")
        this.emp_Id = emp_Id;
        this.ename = ename;
        this.email = email;
    }
    getEmployee_Details() {
        console.log(`Employee Id ${this.emp_Id} and Name: ${this.ename}`)
    }
}
let e1 = new Employee(101, "Rahul", "Rahul@gmail.com")
let e2 = new Employee(102, "Sonia", "Sonia@gmail.com")
console.log(e1)
e1.getEmployee_Details();
console.log(e2)
e2.getEmployee_Details()