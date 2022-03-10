let employees = [{ id: 101, name: "Rahul Gandhi", sal: 45000, loc: "Noida" },
{ id: 102, name: "Sonia Gandhi", sal: 55000 },
{ id: 103, name: "Priyanka Gandhi", sal: 75000 }]
//print employee names
/* for (emp of employees) {
    console.log(emp.sal)
} */
for (var i = 0; i <= employees.length - 1; i = i + 1) {
    console.log(employees[i].name)
}