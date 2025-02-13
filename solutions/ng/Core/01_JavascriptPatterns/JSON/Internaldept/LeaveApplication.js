'use strict';
//jQuery Templates



// JavaScript source code
//global namespance
var Transflower = Transflower || {};
//sub namespace

Transflower.Operations = {};
 
//Course Object defined below
Transflower.Operations.LeaveApplication = {
    "LEAVE APPLICATION FORM":"",
    "Name": "",
    "Dept": "",
    "Designation": "",
    "Leave Balance": "",
    "Leave requested for no. of days": "",
    "from": "",
    "to":"",
    "Duties assigned to in my absence": "",
    "His/Her signature": "",
    "Date": "",
    "Place": "",
    "Signature of Applicant": "",
    "Sanctioned/Not Sanctioned": "",
    "Signature(Div/Dept.head or Director)": "",
    "Signature(HRD)": "",

    "Note": [
                {
                    "1": "In case of Training Division,Team Leader and Resource Management Representative will counter-sign on the Application form and Div.head or Director will sanction leave",
                    "2": "Approved application for leave for less than or equal to 3 days must reach HRD Dept at least on day in advance and for 4 or more days, at least 4 days in advance.",
                    "3": "Any leave taken without prior appliaction and approval will be treated as leave without pay at the discretion of Dept.head."
                 },
    ]
    };





$(document).ready(function () {

    //which data Template       //which object   //Placeholder
    //$('#person-template').tmpl(htmld).appendTo('.personal-detais');
    //$('#person-template').tmpl(app).appendTo('#div1');
    //$('#person-template').tmpl(office).appendTo('#div2');


    $('#course-template').tmpl(Transflower.Catalog.Course.Moudules).appendTo('.course');
});


