'use strict';
//jQuery Templates



// JavaScript source code
//global namespance
var Transflower = Transflower || {};
//sub namespace

Transflower.Catalog = {};

//Course Object defined below
Transflower.Catalog.Course = {
    "Course": "Mastering JavaScript",
    "Number": "SCRPT-100",
    "Duration": "3",
    "Overview": "Transflower's Mastering JavaScript training class teaches attendees how to make their Web pages more interactive by using JavaScript, an easy-to-learn scripting language supported by all popular Web browsers. Attendees will learn how to write JavaScript code for form validation, calculating total orders, conditional navigation (taking the user to a page based on information they enter), image rollovers (e.g., having a button light up when the user moves their mouse over it), and more.",
    "Prerequisites": "Mastering XHTML and CSS training or equivalent experience. If attendees will not have thorough knowledge of HTML, please let us know and we will precede this course with a one-day HTML primer. No prior programming experience is assumed, though this course can be swiftly adapted for a programming-savvy audience.",
    "Mode": {
        "HandsOn": "60",
        "Lecture": "40"
    },
    "LabSetup": "Web or text editor of your choice Web browsers - a recent version of one or more of the following:Google Chrome Mozilla Firefox Internet Explorer (9 or later) Safari (5 or later) Opera",
    "Objectives": [
                    { "Objective": "To teach attendees the fundamentals of JavaScript programming, including the use of the core JavaScript objects  and the syntax of the language (statements, conditionals, loops, functions, etc.)" },
                    { "Objective": "To teach students how to immediately put JavaScript to use writing code for validating forms, totaling orders, handling image rollovers and other display tasks, conditionally navigating the user to various pages, and more." }
    ],
    "Modules": [
                {
                    "Module": "Introducing JavaScript",
                    "Topics": [
                                { "Topic": "Evolution of JavaScript since 1996" },
                                { "Topic": "Current uses of JavaScript in web applications" }
                    ]
                },

                {
                    "Module": "Where JavaScript goes",
                    "Topics": [
                                { "Topic": "Placing JavaScript code in separate .js files" },
                                { "Topic": "Using unobtrusive JavaScript principles to separate event handlers from HTML" },
                                { "Topic": "JavaScript language fundamentals" },
                                { "Topic": "Statements" },
                                { "Topic": "Variables and data types" },
                                { "Topic": "Operators (for both numbers and strings)" },
                                { "Topic": "Conditionals (if-else if-else and switch-case)" },
                                { "Topic": "Loops (while, do-while, for)" },
                                { "Topic": "Functions" },
                                { "Topic": "Creating functions" },
                                { "Topic": "Calling functions" },
                                { "Topic": "Returning values" }
                    ]
                },


                {
                    "Module": "Understanding JavaScript objects",
                    "Topics": [
                                { "Topic": "The role of objects in JavaScript programming" },
                                { "Topic": "Working with methods and properties" },
                                { "Topic": "The JavaScript object hierarchy" },
                                { "Topic": "The implicit window object" },
                                { "Topic": "Event handlers" }
                    ]
                },



                   {
                       "Module": "JavaScript with forms",
                       "Topics": [
                                      { "Topic": "How forms fit into the JavaScript DOM" },
                                      { "Topic": "Setting focus on a specific field" },
                                      { "Topic": "Blocking a field from being edited" },
                                      { "Topic": "Setting field values based on user input" },
                                      { "Topic": "Basic validation: requiring field values to be filled in" },
                                      { "Topic": "Handling calculations within forms (useful for totaling orders and other quantitative form operations)" },
                                      { "Topic": "Includes a discussion of the Math object, which provides useful methods for making calculations" }
                       ]
                   },




                   {
                       "Module": "JavaScript with links and images",
                       "Topics": [
                                      { "Topic": "Using onMouseOver and onMouseOut to detect the presence of the mouse" },
                                      { "Topic": "Using onClick to process clicks on hyperlinks" },
                                      { "Topic": "Having hyperlinks call functions via javascript: URLs" },
                                      { "Topic": "Conditionally navigating the user to a page when they click a link" },
                                      { "Topic": "Dynamically swapping one or more images on a page based on the position of the mouse" }
                       ]
                   },


                  {
                      "Module": "JavaScript for Navigation",
                      "Topics": [
                                      { "Topic": "Overview of the history and location objects" },
                                      { "Topic": "Building a jump menu (a pulldown menu that takes the user to a page based on their selection)" },
                                      { "Topic": "Navigating the user to a specific page based on their input in a form" }
                      ]
                  },


                {
                    "Module": "JavaScript for pop-up help",
                    "Topics": [
                                     { "Topic": "Pros and cons of having JavaScript open another window" },
                                     { "Topic": "Generating and sizing a new (child) window via JavaScript" },
                                     { "Topic": "Communication between the child window and the parent window" },
                                     { "Topic": "Implementing attractive pop-up help or information windows using JavaScript" }
                    ]
                },

                 {
                     "Module": "Advanced form validation with regular expressions",
                     "Topics": [
                                     { "Topic": "Overview of regular expressions as a powerful language for validating form submissions" },
                                     { "Topic": "Using the RegExp object in JavaScript" },
                                     { "Topic": "To test whether a string matches a pattern" },
                                     { "Topic": "To extract pieces of a string (e.g., the month, day, and year from a date the user has entered)" },
                                     { "Topic": "To clean up illegal characters the user has entered" }
                     ]
                 }
]};




$(document).ready(function () {
    
    //which data Template       //which object   //Placeholder
    //$('#person-template').tmpl(htmld).appendTo('.personal-detais');
    //$('#person-template').tmpl(app).appendTo('#div1');
    //$('#person-template').tmpl(office).appendTo('#div2');

   
    $('#course-template').tmpl(Transflower.Catalog.Course.Moudules).appendTo('.course');
});


