const Address = require('./Bank') //Es 5
class Credit_Card {
    constructor(cc_Id, cc_Name, address) {
        this.cc_Id = cc_Id;
        this.cc_Name = cc_Name;
        this.address = address
    }
}
let cc1 = new Credit_Card('c101', "Narasimha", new Address(96, "Marahta", "Bangalore", "KA"));
console.log(cc1)