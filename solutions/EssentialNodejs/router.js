//importing student controller to use its methods
var studentcontroller = require('../controller/studentController');

module.exports = function (app) {


    //routing to student controller's getALL()
    app.route('/student').get(studentcontroller.getAll);

    //routing to student controller's getById()
    app.route('/student/:studentid').get(studentcontroller.getStudentById);

    //routing to student controller's getByEmail()
    app.route('/student/details/:semail').get(studentcontroller.getStudentDetailsByEmail);

    //routing to student controller's insertStudent()
    app.route('/student').post(studentcontroller.insertStudent);


};