class Account {
    min_Bal = 500;
    /*  acc_Id;
     name; */
    constructor(acc_Id, name) {
        this.acc_Id = acc_Id;
        this.name = name;
    }
}
let c1 = new Account(101, "Rahul Gandhi")
let c2 = new Account(102, "Sonia Gandhi")
console.log(c1);
console.log(c2);