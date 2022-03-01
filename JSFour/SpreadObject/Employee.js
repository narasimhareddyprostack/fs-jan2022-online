let user = { id: 101, name: "Rahul  Gandhi", email: "rahul@gmail.com" }

let details = { email: "rahul@tcs.com", address: "Wayanad", salary: 45000 }

let user_Details = { ...user, ...details }
console.log(user_Details)