let employeeArray=[]
let nextId=1;
function validateForm()
{
  let name=document.getElementById('name').value;
  let profession=document.getElementById('profession').value;
  let age=document.getElementById('age').value;
  if(name===""||profession===""||age==="")
  {
    document.getElementById('error').innerHTML='Error: Please Fill all required fields before adding in an employee !'
    document.getElementById('error').style.color='red'
  }
  else{
    document.getElementById('error').innerHTML="Sucess: Employee Added"
    document.getElementById('error').style.color='green'
  let newEmployee={id:nextId++,
    name:name,profession:profession,age:age
  };
  employeeArray.push(newEmployee)
  createTable()
}
}

let tableBody=document.getElementById('employeeTableBody')
function createTable(){
  let employeeRows=employeeArray.map(function(employee,index)
  {
    return `<tr>
    <td>${employee.name}</td>
    <td>${employee.profession}</td>
    <td>${employee.age}</td>
    <td><button type='button' onclick='deleteEmployee(${index})'>Delete</button></td>
    
    </tr>`
  });

  tableBody.innerHTML=employeeRows.join("");
}
createTable()


function deleteEmployee(index) {
  employeeArray.splice(index, 1);
  createTable();
}