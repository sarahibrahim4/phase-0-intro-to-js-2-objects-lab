// Write your solution in this file!
const employee={name: "sarah",
streetAddress: "190 street",
};
function updateEmployeeWithKeyAndValue(employee,key,value){
const newEmployees ={...employee};
newEmployees[key]=value;
return newEmployees;
}
console.log(updateEmployeeWithKeyAndValue(employee,"name","Sam"));
console.log(updateEmployeeWithKeyAndValue(employee,"streetAddress","11 Broadway"));

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]=value;
    return employee;
}
console.log(updateEmployeeWithKeyAndValue(employee,"streetAddress","12 Broadway"));

function deleteFromEmployeeByKey(employee, key){
   const newEmployee={...employee};
   delete newEmployee[key];
    return newEmployee;
}
console.log(deleteFromEmployeeByKey(employee, 'name'));

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}
console.log(destructivelyDeleteFromEmployeeByKey(employee, "name"));