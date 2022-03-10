const bcrypt = require('bcryptjs')  //es 5

//import bcrypt from 'bcryptjs'//es6

let user = { name: 'Rahul', email: "rahul@gmail.com", password: "HappyBD", cc: "12345678" }

let salt = bcrypt.genSaltSync(10);

let newPassword = bcrypt.hashSync(user.password, salt)
let newCC = bcrypt.hashSync(user.cc, salt);
/* console.log(newCC)
console.log(newPassword) */

let new_user = { ...user, password: newPassword, cc: newCC }
console.log(user);
console.log(new_user);

let flag = bcrypt.compareSync("HappyBD", new_user.password);
if (flag) {
    console.log("Login Sucessfull")
}
else {
    console.log("Login fail")
}
