class Savings_Account {
    min_Bal = 500;
    open_Account() {
        console.log("Account Opened Successfully");
    }
    deposit() {
        console.log("Amount Deposited")
    }
    withdraw() {
        console.log("Amount Withdrawl")
    }
    getStatement() {
        console.log("Statement ---")
    }
    getBal() { }
    close_Account() { }
}
let c1 = new Savings_Account();
c1.open_Account()
c1.deposit()
c1.withdraw()

