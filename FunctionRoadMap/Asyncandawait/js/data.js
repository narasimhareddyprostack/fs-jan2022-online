let employees = [{ "id": 1, "name": "Margot", "email": "mlyttle0@state.gov" },
{ "id": 2, "name": "Erhart", "email": "edesouza1@answers.com" },
{ "id": 3, "name": "Dorelia", "email": "djantzen2@prlog.org" },
{ "id": 4, "name": "Fonzie", "email": "fshaylor3@marketwatch.com" },
{ "id": 5, "name": "Veronique", "email": "vshynn4@mapy.cz" },
{ "id": 6, "name": "Montague", "email": "mmcinerney5@goodreads.com" },
{ "id": 7, "name": "Sebastien", "email": "snuss6@bloomberg.com" },
{ "id": 8, "name": "Blondelle", "email": "bclitsome7@china.com.cn" },
{ "id": 9, "name": "Olga", "email": "okidby8@trellian.com" },
{ "id": 10, "name": "Elinore", "email": "eeymor9@instagram.com" },
{ "id": 11, "name": "Felecia", "email": "fstraussa@1688.com" },
{ "id": 12, "name": "Kimbell", "email": "kelkinsb@examiner.com" },
{ "id": 13, "name": "Shurlocke", "email": "saxtonc@imgur.com" },
{ "id": 14, "name": "Brandais", "email": "bgeilld@rakuten.co.jp" },
{ "id": 15, "name": "Darius", "email": "doscanlone@seattletimes.com" }]


let createEmployee = (emp) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            employees.push(emp);
            let flag = true;
            flag ? resolve("Inserted Successfully") : reject("Unable insert New Employees")
        }, 2000);
    });
}

let getEmployees = () => {
    setTimeout(() => {
        let rows = "";
        employees.forEach((employee) => {
            rows += `<tr> 
                      <td>${employee.id}</td>
                      <td>${employee.name}</td>
                      <td>${employee.email}</td>
                     </tr>`
        })
        document.getElementById('tbody-data').innerHTML = rows
    }, 1000);
}

/* createEmployee({ id: 16, name: "Rahul", email: "rahul@gmail.com" })
    .then((msg) => {
        console.log(msg);
        getEmployees()
    })
    .catch((err) => {
        console.error(err)
    }) */

(async () => {
    await createEmployee({ id: 16, name: "Rahul", email: "rahul@gmail.com" })
    getEmployees()
})
    (); 