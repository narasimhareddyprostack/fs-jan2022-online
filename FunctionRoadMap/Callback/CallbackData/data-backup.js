let employees = [{ id: 101, name: "Rahul Gandhi", salary: 45000 },
{ id: 102, name: "Sonia Gandhi", salary: 55000 }]
let createEmployee = (emp) => {
    //execute will 3 sec
    //setTimeout(() => { }, 3000)
    console.log("first")
    setTimeout(() => {
        employees.push(emp)
    }, 3000)
}
let getEmployee = () => {
    //execute will 1 sec
    setTimeout(() => {
        console.log("second")
        let rows = ""
        employees.forEach((employee) => {
            rows += `<tr>
                      <td>${employee.id}</td>   
                      <td>${employee.name}</td>   
                      <td>${employee.salary}</td>   
                    </tr>`
        })

        document.getElementById('data').innerHTML = rows
    }, 1000)
}
createEmployee({ id: 103, name: "Priyanka Gandhi", salary: 65000 })
getEmployee()