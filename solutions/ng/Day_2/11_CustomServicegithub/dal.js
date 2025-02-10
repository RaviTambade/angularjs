
 var insert = function (cst) {
    customers.push(cst);
}
 var update = function (cst) {
    var status = false;
    var searchField = "CustomerId";
    var searchVal = cst.CustomerId;
    for (var i = 0; i < customers.length; i++) {
        if (customers[i][searchField] == searchVal) {
            customers[i] = cst;
            status = true;
        }
    }
    return status;
}
var search = function (cst) {
    var results = [];
    var searchField = "FirstName";
    var searchVal = cst.FirstName;

    for (var i = 0; i < customers.length; i++) {
        if (customers[i][searchField] == searchVal) {
            results.push(customers[i]);
        }
    }
    return results;
}
var remove = function (cst) {
    var searchField = "FirstName";
    var searchVal = cst.FirstName;
    var index = undefined;
    for (var i = 0; i < customers.length; i++) {
        if (customers[i][searchField] == searchVal) {
            index = i;
        }
    }
    if(index != undefined)
    {
        var removedItem = customers.splice(index,1)
    }
}
var showAllCustomers = function () {
    var custs = customers;
    var output = "<ul>";
    for (var i = 0; i < custs.length; i++) {
        var line = "<li>" + custs[i].CustomerId + ' ' + custs[i].FirstName + ' ' + custs[i].LastName + ' ' + custs[i].Address + ' ' + custs[i].Email + ' ' + cust[i].RegistrationDate + "</li>";
        output += line;
    }
    document.write(output + "</ul>");
}