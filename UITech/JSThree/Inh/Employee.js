class Employee {
    eid;
    ename
    constructor(id, name) {
        this.eid = id;
        this.ename = name
    }
    get_Details() {
        console.log("Employee Name:", this.ename)
    }
}
let e1 = new Employee(101, 'Rahul Gandhi')
let e2 = new Employee(102, 'Sonia Gandhit')
e1.get_Details()
e2.get_Details()
