class Account {
    min_Bal = 500;
    /*  acc_Id;
     name; */
    constructor(a, b) {
        this.acc_Id = a;
        this.name = b;
    }
}
let c1 = new Account(101, "Rahul Gandhi")
let c2 = new Account(102, "Sonia Gandhi")
console.log(c1);
console.log(c2);