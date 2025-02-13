'use strict';
//jQuery Templates

// JavaScript source code
//global namespance
var Transflower = Transflower || {};
//sub namespace

Transflower.Operations = {};

//Course Object defined below
Transflower.Operations.Empex = {
    "For Personal Use Only":"",
    "Empex Control No":"",
    "Date": "",
    "Sign1": "",
    "Closed On Date": "",
    "Sign2":"",
    "Remarks":"",
    "Indenting Department":"",
    "No. of Positions":"",
    "Position/Designation":"",
    "Work Location":"",
    "Status of Employment":"Vouchar Pay/Trainee[Agreement]/On Roll/Consultant",

    "LabSetup": "Web or text editor of your choice Web browsers - a recent version of one or more of the following: Google Chrome Mozilla Firefox Internet Explorer (9 or later)  Safari (5 or later)  Opera  If space on a web server is available, students may also wish to bring their mobile devices so they can test how pages appear on  these devices.",
    "Job Responsibilities": [
        		{ "J": "" },
        		{ "J": "" },
        		{ "J": "" },
        		{ "J": "" },
        		{ "J": "" },
        		{ "J": "" },
       			{ "J": "" },
        		{ "J": "" }
    ],
    "Will report to Name": "",
    "Will report to Designation": "",
    "Evaluator/s": "",

    "Job Specification": [
        {
            "Values": [
            		{ "Experience Requirement(Mention Specific areas of operation & no.years": "" },
            		{ "Qualification (General/Professional)": "" },
            		{ "Age Group": "" },
                    {"Other Specific Details(if any)": " "}
            ]
        },
         ],
    "Approx.Package (Consider internal balance and output requirement)": "",
    "Current Strength of Dept": "",
    "Existing Work force for similar position": "",
    "Justification & Remarks(e.g. separation/transfer/promotion of the earlier employee,increased workload any other)": "",
    "Mobile required": "",
    "Laptop required": "",
    "Sitting space available": "",
    "If No; comfort for Administration;available by date": "",
    "Machine available": "",
    "If No; comfort from Systems and Technical;available by date": "",
    "For Functional Head": [
        {
            "Values": [
                    
                        { "Name"        :""},
                        { "Sign"        :""},
                        { "Designation" :""},
                        { "Date"        :""}
            ]
        },
    ],
    "For Finance & Legal": [
        {
            "Values": [

                        { "Remarks": "" },
                        { "Name": "" },
                        { "Designation": "" },
                        { "Sign": "" },
                        { "Date":""}
            ]
        }
    ],
    "For Board of Directors": [
        {
            "Values": [
                        { "Remarks": "" },
                        { "Name": "" },
                        { "Designation": "" },
                        { "Sign": "" },
                        { "Date": "" }
            ]
        }
    ],
    "For Recruitments": [
       {
           "Values": [
                       { "Remarks": "" },
                       { "Name": "" },
                       { "Designation": "" },
                       { "Sign": "" },
                       { "Date": "" }
           ]
       }
    ],
    "Note":"All Records can be maintained in Softcopy form.Addition in Column/Feild is allowed,without any Deletions"
};




$(document).ready(function () {

    


    $('#course-template').tmpl(Transflower.Catalog.Course.Moudules).appendTo('.course');
});