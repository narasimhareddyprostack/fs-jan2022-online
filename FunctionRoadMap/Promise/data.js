let employees = [{ "id": 1, "name": "Adi", "salary": "Peso" },
{ "id": 2, "name": "Borden", "salary": "Peso" },
{ "id": 3, "name": "Amalle", "salary": "Peso" },
{ "id": 4, "name": "Steffi", "salary": "Zloty" },
{ "id": 5, "name": "Verene", "salary": "Rupiah" }]
let insertEmployee = (emp) => {
    return new Promise((resolve, reject) => {
        let flag = false;
        setTimeout(() => {
            employees.push(emp)
            flag ? resolve("Inserted Sucessfully") : reject("Not Sucessfull");
        }, 4000)
    });
}
let getEmployee = () => {
    setTimeout(() => {
        let rows = ""
        employees.forEach((emp) => {
            rows = rows + `<tr>
                           <td>${emp.id}</td>
                           <td>${emp.name}</td>
                           <td>${emp.salary}</td>
                           </tr>`
        })
        document.getElementById("tbody-data").innerHTML = rows;
    }, 1000)
}
insertEmployee({ id: 6, name: "Rahul", salary: 45000 })
    .then((response) => {
        console.log(response)
        getEmployee()
    })
    .catch((err) => {
        console.error(err)
    })