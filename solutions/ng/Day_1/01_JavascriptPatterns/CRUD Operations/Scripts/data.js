Transflower.HR.Employees = [
        { 'EmpID': 1, 'FirstName': 'Rahul', 'LastName': 'Navale', 'EmailID': 'rahul.navale@transflower.in', 'Phone': 8888828345, 'Address': 'Pune' },
        { 'EmpID': 2, 'FirstName': 'Aarush', 'LastName': 'Tambade', 'EmailID': 'aarusht@transflower.in', 'Phone': 8888829123, 'Address': 'Mumbai' },
        { 'EmpID': 3, 'FirstName': 'Sachin', 'LastName': 'Naik', 'EmailID': 'sachinnaik@transflower.in', 'Phone': 8653214520, 'Address': 'Pune' },
        { 'EmpID': 4, 'FirstName': 'Rushikesh', 'LastName': 'Mule', 'EmailID': 'rushikeshm@transflower.in', 'Phone': 9956321450, 'Address': 'Bangalore' },
        { 'EmpID': 5, 'FirstName': 'Mayur', 'LastName': 'Patole', 'EmailID': 'mayur.p@transflower.in', 'Phone': 7845123658, 'Address': 'Nashik' },
        { 'EmpID': 6, 'FirstName': 'Shailesh', 'LastName': 'Pawar', 'EmailID': 'shaileshp@transflower.in', 'Phone': 8888827882, 'Address': 'Chennai' },
        { 'EmpID': 7, 'FirstName': 'Amol', 'LastName': 'Shinde', 'EmailID': 'amol.shinde@transflower.in', 'Phone': 7865236589, 'Address': 'Delhi' },
        { 'EmpID': 8, 'FirstName': 'Ganesh', 'LastName': 'Ahire', 'EmailID': 'ganesh.ahire@transflower.in', 'Phone': 9521452360, 'Address': 'Nagar' },
        { 'EmpID': 9, 'FirstName': 'Mayur', 'LastName': 'Kolla', 'EmailID': 'mayurk@transflower.in', 'Phone': 7125412541, 'Address': 'Nagpur' },
        { 'EmpID': 10, 'FirstName': 'Priya', 'LastName': 'Kumbhar', 'EmailID': 'priyak@transflower.in', 'Phone': 8526956230, 'Address': 'Akola' }

];


//CRUD Operation functions

Transflower.HR.insert = function (emp) {
    Transflower.HR.Employees.push(emp);
}
Transflower.HR.update = function (emp) {
    var status = false;
    var searchField = "EmpID";
    var searchVal = emp.EmpID;
    for (var i = 0; i < Transflower.HR.Employees.length; i++) {
        if (Transflower.HR.Employees[i][searchField] == searchVal) {
            Transflower.HR.Employees[i] = emp;
            status = true;
        }
    }
    return status;
}
Transflower.HR.search = function (emp) {
    var results = [];
    var searchField = "FirstName";
    var searchVal = emp.FirstName;

    for (var i = 0; i < Transflower.HR.Employees.length; i++) {
        if (Transflower.HR.Employees[i][searchField] == searchVal) {
            results.push(Transflower.HR.Employees[i]);
        }
    }
    return results;
}
Transflower.HR.remove = function (emp) {
    var searchField = "FirstName";
    var searchVal = emp.FirstName;
    var index = undefined;
    for (var i = 0; i < Transflower.HR.Employees.length; i++) {
        if (Transflower.HR.Employees[i][searchField] == searchVal) {
            index = i;
        }
    }
    if(index != undefined)
    {
        var removedItem = Transflower.HR.Employees.splice(index,1)
    }
}
Transflower.HR.showAllEmployees = function () {
    var emps = Transflower.HR.Employees;
    var output = "<ul>";
    for (var i = 0; i < emps.length; i++) {
        var line = "<li>" + emps[i].EmpID + ' ' + emps[i].FirstName + ' ' + emps[i].LastName + ' ' + emps[i].Phone + ' ' + emps[i].EmailID + ' ' + emps[i].Address + "</li>";
        output += line;
    }
    document.write(output + "</ul>");
}