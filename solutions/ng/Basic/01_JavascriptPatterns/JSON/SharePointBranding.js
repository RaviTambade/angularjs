'use strict';
//jQuery Templates



// JavaScript source code
//global namespance
var Transflower = Transflower || {};
//sub namespace

Transflower.Catalog = {};

//Course Object defined below
Transflower.Catalog.Course = {
        "Course": "Branding SharePoint 2013 Sites",
        "Number": "SHPT-352",
        "Duration": "4",
        "Overview": "Transflower SharePoint Branding course teaches web designers and advanced SharePoint users how to design individual pages and brand websites in a SharePoint 2013 environment.",
        "Prerequisites": "All attendees should have a basic knowledge of HTML and CSS. It is also recommended (but not required) that students have previous experience with SharePoint, working with team sites and/or publishing sites, as well as web design tool such as SharePoint Designer or Dreamweaver.",
        "Mode": {
            "HandsOn": "60",
            "Lecture": "40"
        },
        "LabSetup": "Each student will need a separate environment (either local or virtual) with a full installation of SharePoint Server 2013 (SharePoint Online E3 or E4 works just fine).  We will provide detailed specifications for the student environment, including:64-bit processor with at least 4 coresAt least 24 GB RAM (32 GB or more RAM recommended).SharePoint Server 2013 installed, including a 64-bit Windows Server 2012 operating system and a SQL Server 2012 database, and also client tools such as Internet Explorer, Office 2013, and Visual Studio 2013. SharePoint Designer 2013 and Office 2013 During the process of scheduling the class, we will host a conference call with you to discuss setup options.",
"Objectives": [
                    { "Objective": "Gain branding, website design, and usability best practices." },
                    { "Objective": "Explore the similarities and differences between Team sites and Publishing sites." },
                    { "Objective": "Learn how SharePoint 2013 processes pages in a SharePoint site by integrating .aspx pages together with master pages and CSS." },
                    { "Objective": "Work with CSS in SharePoint." },
                    { "Objective": "Understand what the Design Manager is and its role in branding SharePoint Publishing sites." },
                    { "Objective": "Customize master pages in a SharePoint 2013 environment." },
                    { "Objective": "Create custom page layouts." },
                    { "Objective": "Use web parts and style them using CSS and XSLT." },
                    { "Objective": "Customize content display in SharePoint 2013 using display templates." },
                    { "Objective": "Implement a responsive design to optimize a SharePoint site across devices." },
                    { "Objective": "Create and apply a customized composed look to a team site." },
                    { "Objective": "Learn advanced publishing features." },
                    { "Objective": "Branding SharePoint 2013 Sites Training Outline" }
	         ],

"Modules": [
    {
        "Module": "Branding and Website Design",
            "Topics":[ 
	    		    { "Topic": "Branding and Website Design" },
            		{ "Topic": "Determining the target audiences" },
            		{ "Topic": "Cross-browser compatibility" },
            		{ "Topic": "Web designer tools for HTML and CSS" },
	    		    { "Topic": "Tablets and mobile devices" },
	    		    { "Topic": "What do you need to know about HTML5?" }
            ]
    },
{
    "Module": "SharePoint and Branding Assets Overview",
        "Topics":[ 
                    { "Topic": "SharePoint Site Fundamentals" },
                    { "Topic": "Understanding Team Sites" },
                    { "Topic": "Site Columns and Content Types" },
                    { "Topic": "Understanding Publishing Sites" },
                    { "Topic": "Navigation in a Publishing Site" },
                    { "Topic": "Branding in SharePoint" },
                    { "Topic": "Team Site Design Assets" },
                    { "Topic": "Applying a Composed Look" },
                    { "Topic": "Publishing Site Design Assets" },
                    { "Topic": "Applying a new Master" }
        ]
},

{
	    "Module": "Using CSS in SharePoint 2013",
            "Topics":[ 
            		{ "Topic": "Quick review of CSS" },
            		{ "Topic": "CSS in SharePoint" },
            		{ "Topic": "Styling a SharePoint site using a custom CSS file" },
            		{ "Topic": "Reverse Engineering HTML and CSS" },
            		{ "Topic": "Writing and maintaining CSS for SharePoint" }
            ]
},
{
    "Module": "Introduction to Design Manager",
        "Topics":[ 
                    { "Topic":"Introduction to Design Manager" }, 
                    { "Topic": "Mapping a drive to a Publishing site" },
                    { "Topic": "Converting HTML pages into Master Pages" },
                    { "Topic": "Working with Design Manager Snippets" },
                    { "Topic": "Other Design Manager Features" },
                    { "Topic": "Design Packages" }
        ]
},

{
	    "Module": "Master Pages in SharePoint 2013",
            "Topics":[ 
 	    		    { "Topic": "Master Pages in SharePoint 2013" },
           		    { "Topic": "Creating Custom Master Pages" },
            		{ "Topic": "Designing your own Starter Master Page" }	
            ]
},
{
    "Module": "Page Layouts",
        "Topics":[ 
                    { "Topic": "Overview of Page Layouts" },
                    { "Topic": "Creating Page-derived Content Types" },
                    { "Topic": "Creating Page Layouts with SharePoint Designer" },
                    { "Topic": "Creating Page Layouts with Design Manger" },
                    { "Topic": "Configuring Page Layouts in a Publishing Site" }
        ]
},
{
            "Module": "Web Parts and XSLT",
            "Topics":[ 
            		{ "Topic": "Overview of Web Parts in SharePoint 2013" },
            		{ "Topic": "The Table of Content Web Part" },
	    		    { "Topic": "The Summary Links Web Part" },
	    		    { "Topic": "The Content Query Web Part" },
	    		    { "Topic": "Customizing Web Part Display using XSLT" }
                     ] 
            },
{
	    "Module": "Display Templates in SharePoint 2013",
            "Topics":[ 
            		{ "Topic": "World’s Fastest JavaScript Primer" },
            		{ "Topic": "Creating a Display Template for a Standard List" },
           		    { "Topic": "Using Display Templates with Search Results" },
            		{ "Topic": "Using the Content Web Search (CBS) Web Part" }
            ]        
},
{
       "Module": "Responsive Design and Device Channels",
          "Topics":[ 
                    { "Topic": "Introduction to Responsive Design" },
                    { "Topic": "Understanding Media Queries" },
                    { "Topic": "Device Channel Configuration for Mobile" },
                    { "Topic": "Customizing Page Layouts with Device Channels" }
                   ]
},

{
	    "Module": "Composed Looks",
            "Topics":[ 
            		{ "Topic": "Anatomy of a Composed Look"},
            		{ "Topic": "Modifying a Composed Look" },
	    		    { "Topic": "Creating an .spcolor file using the Color Palette Tool" },
	    		    { "Topic": "Creating an .spfont file for a custom Composed Look" },
	    		    { "Topic": "Creating and Configuring Custom Composed Looks" },
	    		    { "Topic": "Packaging and Distribution" }
            ]    
},
             
{
    "Module": "Advanced Publishing SharePoint Features",
        "Topics":[ 
                { "Topic": "Understanding SharePoint SEO Features" },
                { "Topic": "Adding Multilingual Support using Variations" },
                { "Topic": "Understanding the Use of Catalog Sites" },
                { "Topic": "Implementing Cross-site Publishing" },
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