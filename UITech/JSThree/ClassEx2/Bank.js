class Address {
    constructor(hno, area, city, state) {
        console.log("Address Class Constructor")
        this.hno = hno;
        this.area = area;
        this.city = city;
        this.state = state
    }
    update_Address() { }
}
class Savings_Account {
    constructor(acc_id, acc_name, amount, address) {
        console.log("Savings_Account class - const")
        this.acc_id = acc_id;
        this.acc_name = acc_name;
        this.amount = amount;
        this.address = address
    }
}

let c1 = new Savings_Account(101, "Narasimha", 10000, new Address(96, "Marathahalli", "Bangalore", "KA"))
console.log(c1)
/* class Current_Account { } */


module.exports = Address