//importing mysql connection from dal
var mysqldb = require('../../dal/MySQL/databases');
var request = require('request'); //to generate new request
const { response } = require('express');


//displaying all students from student view
exports.getAll = (req, res) => {
    mysqldb.query(`select * from studentview`, (err, result) => {
        if (err) {
            res.send("No Data Found");
            return;
        }
        res.send(result);
    })
};

//retrieving single student view from student id
exports.getStudentById = (req, res) => {
    mysqldb.query(`select * from studentview where studentid = ? ;`, [req.params.studentid], (err, result) => {
        if (err) {
            res.send("No Data Found");
            return;
        }
        res.send(result);
    })
};

//retrieving student data from email
exports.getStudentDetailsByEmail = (req, res) => {
    mysqldb.query(`select * from student where semail = ?;`, [req.params.semail], (err, result) => {
        if (err) {
            console.log(err);
            res.send("Data not Found");
            return;
        }
        res.send(result);
    })
};

//inserting new student data into database
exports.insertStudent = (req, res) => {
    mysqldb.query(`insert into student values(?,?,?,?,?,?,?) ;`,
        [req.body.sid, req.body.sname, req.body.saddress, req.body.mobile, req.body.semail, req.body.dob, req.body.squalification],
        (err, result) => {
            if (err) {
                console.log(err);
                res.send("Student not Added");
                return;
            }
            console.log("Student added");
            generateEmailUrl(req.body.semail);

        })
};

//redirecting to get data by studentemail 
generateEmailUrl = (studentemail) => {
    var surl = {
        uri: 'http://localhost:4000/student/details/' + studentemail,
        method: 'GET'
    }
    request(surl, (error, response) => {
        if (error) {
            console.log(error);
            return;
        }
        console.log(surl);
        // console.log(response);
    });
}