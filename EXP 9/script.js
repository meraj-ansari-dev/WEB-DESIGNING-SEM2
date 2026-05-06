let employees = [];

function addEmployee() {
    let name = document.getElementById("name").value;
    let id = document.getElementById("empId").value;
    let salary = parseFloat(document.getElementById("salary").value);
    let dept = document.getElementById("dept").value;

    if (!name || !id || isNaN(salary) || !dept) {
        alert("Fill all fields");
        return;
    }

    employees.push({ name, id, salary, dept });
    alert("Employee Added");
}

function displayEmployees() {
    let output = "";
    employees.forEach(e => {
        output += `${e.name} | ${e.id} | ₹${e.salary} | ${e.dept}<br>`;
    });

    document.getElementById("output").innerHTML = output;
}

function totalSalary() {
    let total = employees.reduce((sum, e) => sum + e.salary, 0);
    document.getElementById("output").innerHTML = "Total Salary: ₹" + total;
}