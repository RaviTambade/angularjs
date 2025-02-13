'use strict';
//jQuery Templates

// JavaScript source code
//global namespance
var Transflower = Transflower || {};
//sub namespace

Transflower.Catalog = {};

//Course Object defined below
Transflower.Catalog.Course = {
    Course: "Introduction to HTML5",
    Number: 123,
    Duration: 2,
    Overview: "Transflower HTML5 training class, intended for experienced HTML developers with some JavaScript experience, teaches the new features of HTML5 and how to put them to immediate use.",
    Prerequisites: "All attendees must be fluent in HTML 4 and have practical experience with the basics of CSS and JavaScript. Prior knowledge of JSON, DOM, and Ajax is helpful but not required.",
    Mode: {
        HandsOn: "60",
        Lecture: "40"
    },
    LabSetup: "Web or text editor of your choice Web browsers - a recent version of one or more of the following: Google Chrome Mozilla Firefox Internet Explorer (9 or later)  Safari (5 or later)  Opera  If space on a web server is available, students may also wish to bring their mobile devices so they can test how pages appear on  these devices.",
    Objectives: [
        		{ Objective: "Build HTML5 pages" },
        		{ Objective: "Understand the major benefits of HTML5" },
        		{ Objective: "Understand the difference between HTML5 and HTML4" },
        		{ Objective: "Use the new elements and attributes of HTML5" },
        		{ Objective: "Work with audio and video in HTML5" },
        		{ Objective: "Work with new Canvas element to create code-based drawings in HTML5" },
       			{ Objective: "Use Web Storage for offline applications" },
        		{ Objective: "Use all of the new HTML5 form elements" },
        		{ Objective: "Understand the current state of browser support for HTML5 and how to make your HTML5 sites degrade gracefully" }
    ],

    Modules: [
        {   
            Module: "Laying out a Page with HTML5",
            Topics: [
            		{ Topic: "Page Structure" },
            		{ Topic: "New HTML5 Structural Tags" },
            		{ Topic: "Page Simplification" }
            ]
        },
         {
             Module: "HTML5 - How We Got Here",
             Topics:[ 
                     { "Topic": "The Problems HTML 4 Addresses" },
                     { "Topic": "The Problems XHTML Addresses" },
                     { "Topic": "The New More Flexible Approach of HTML5 - Paving the Cowpaths" }
             ]
         },

         { 
             Module: "HTML5 - How We Got Here",
             Topics:[ 
                     { Topic: "The Problems HTML 4 Addresses" },
                     { Topic: "The Problems XHTML Addresses" },
                     { Topic: "The New More Flexible Approach of HTML5 - Paving the Cowpaths" },
                     { Topic: "New Features of HTML5" },
                     { Topic: "The HTML5 Spec(s)" },
                     { Topic: "Current State of Browser Support" }
             ]
         },
         { 
             Module: "Sections and Articles",
             Topics:[ 
                     { Topic: "The section Tag" },
                     { Topic: "The article Tag" },
                     { Topic: "Outlining" },
                     { Topic: "Accessibility" }
             ]
         },

         { 
             Module: "HTML5 Audio and Video",
             Topics:[ 
                     { "Topic": "Supported Media Types" },
                     { "Topic": "The audio Element" },
                     { "Topic": "The video Element" },
                     { "Topic": "Accessibility" },
                     { "Topic": " Scripting Media Elements" },
                     { "Topic": "Dealing with Non-Supporting Browsers" }
             ]
         },
         { 
             Module: "HTML5 Forms",
             Topics:[ 
                     { "Topic": " Modernizr" },
                     { "Topic": "New Input Types" }
             ]
         },
         { 
             Module: "HTML5 New Form Attributes",
             Topics:[ 
                     { "Topic": "autocomplete" },
                     { "Topic": "novalidate" }
             ]
         },
         {
             Module: "HTML5 New Form Field Attributes",
             Topics:[ 
                     { "Topic": "required" },
                     { "Topic": "placeholder"},
                     { "Topic": "autofocus" },
                     { "Topic": "autofocus" },
                     { "Topic": "form" },
                     { "Topic": "pattern" }
             ]
         },
         {
             Module: "New Form Elements",
             Topics:[ 
                     { "Topic": "datalist" },
                     { "Topic": " progress and meter" }
             ]
         },

         { 
             "Module": "HTML5 Web Storage",
             "Topics":[ 
                     { "Topic": "Overview of HTML5 Web Storage" },
                     { "Topic": "Webstorage" ,
                         "Subtopics" :[  
                                         { "Subtopic": "Browser Support" },
                                         { "Subtopic": "Local Storage" },
                                         { "Subtopic": "Session Storage" },
                                         { "Subtopic": "Prefixing your Keys"}
                         ] 
                     },

                    { "Topic":"Other Storage Methods" ,
                        "Subtopics" :[ 
                                         { "Subtopic": "Web Database Storage" },
                                         { "Subtopic": "Indexed Database API" }
                        ]
                    }
             ]
         },
             
	 

       
{ 
    "Module": "HTML5 Canvas",
    "Topics":[ 
            { "Topic": "Getting Started with Canvas" },
            { "Topic": "Drawing Lines" },
            { "Topic": "Color and Transparency" },
            { "Topic": "Rectangles" },
            { "Topic": "Circles and Arcs" },
            { "Topic": "Quadratic and Bezier Curves" },
            { "Topic": "Images" },
            { "Topic": "Text" }
    ]
},
         
{ 
    "Module": "Integrated APIs",
    "Topics":[ 
            { "Topic": "Offline Application APIs" ,
                "Subtopics":[         
                                { "Subtopic": "Cache Manifest API" },
                                { "Subtopic": "The HTML File" },
                                { "Subtopic": "Managing ApplicationCache with JavaScript" },
                                { "Subtopic": "A Sample Application" }
          
                ]
            }
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