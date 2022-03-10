class Savings_Account {
    min_Bal = 500;
    constructor() {

    }
    open_Account() {
        console.log("Account Successfully opened")
        console.log("Your Min Balance is : ", this.min_Bal)
    }

}
let c1 = new Savings_Account(1001, "Rahul Gandhi", 5000);
c1.open_Account()
