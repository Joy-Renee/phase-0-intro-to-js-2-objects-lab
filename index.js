// Write your solution in this file!

const employee = {
    name: 'Renee',
    streetAddress: '20 Beverly Hills'
}

//console.log(updateEmployeeWithKeyAndValue)

function updateEmployeeWithKeyAndValue(employeeObj, key, value){
    employeeObj = {...employee}
    employeeObj[key] = value

    return employeeObj
}

function destructivelyUpdateEmployeeWithKeyAndValue(employeeObj, key, value){
    employeeObj = employee 
    employeeObj[key] = value

    return employeeObj
}

function deleteFromEmployeeByKey(employeeObj, key) {
    employeeObj = {...employee}
    delete employeeObj[key]

    return employeeObj
}

function destructivelyDeleteFromEmployeeByKey(employeeObj, key){
    employeeObj = employee
    delete employeeObj[key]

    return employeeObj
}

