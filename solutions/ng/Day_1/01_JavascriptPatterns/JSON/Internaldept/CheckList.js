'use strict';
//jQuery Templates



// JavaScript source code
//global namespance
var Transflower = Transflower || {};
//sub namespace

Transflower.Operations = {};

//Course Object defined below
Transflower.Operations.List = {
    "Client Name": "Sunbeam",
    "Training Start Date & Timings": "12/2/2015",
    "Training End Date & Timings": "17/2/2015",
    "Total Duration": "6",
    "No. Of Participants": "10",
    "Training Module": "Javascript Programming",
    "Name of the Trainer": "Rahul Navale",
    "Training Venue(Other than Transflower Venue,Please provide the detail address": "TFL",
    "Courseware Requirement(If yes,provide the date by which it should be ready": "",
    "Certificates to be provide(If yes by which date?)": "",
    "Hardware Specification": "",
    "Software Specification": "",
    "Vehicle Requirement(Other than Transflower trainer please provide the details like Pick Up and drop address": "",
    "Mode of Travel": "",
    "Travel Start Date & Timings": "",
    "Travel End Date & Timings": "",
    "Travel From": "",
    "Travel To": "",
    "Accommodation(Please provide the details in case of specific requirement)": "",
    "Services Add-on(Tea/Cofee/Lunch,Generator,Note books,Pens,Attendance sheet etc.)":""
};





$(document).ready(function () {

    //which data Template       //which object   //Placeholder
    //$('#person-template').tmpl(htmld).appendTo('.personal-detais');
    //$('#person-template').tmpl(app).appendTo('#div1');
    //$('#person-template').tmpl(office).appendTo('#div2');


    $('#course-template').tmpl(Transflower.Catalog.Course.Moudules).appendTo('.course');
});


