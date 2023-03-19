let employees = [];
const tbodyElement = document.querySelector("tbody");
function getEmployee() {
  axios.get("https://jsonplaceholder.typicode.com/users").then(function (res) {
    employees = res.data;
    console.log(employees);
    render();
  });
}


function render() {
  const trElement = employees.map(function (employee) {
    return `
        <tr>
        <td>${employee.name}</td>
        <td>${employee.username}</td>
        <td>${employee.email}</td>
      </tr>
        `;
  });
  tbodyElement.innerHTML = trElement.join("");
}

getEmployee();