'use strict';
//jQuery Templates



// JavaScript source code
//global namespance
var Transflower = Transflower || {};
//sub namespace

Transflower.Operations = {};

//Course Object defined below
Transflower.Operations.Interview = {
    "Name of the Employee": "",
    "Desination": "",
    "Dept": "",
    "Date of Joining": "",
    "Last working day": "",

    "What is the primary reason of you leaving Transflower?": "",
    "Please rate the following parameters on the scale of - SD:Strongly Disagree,D:Disagree,A/D:Agree/Disagree,A:Agree,SA:Strongly Agree": "",

    "Parameters": [
                {
                    "P1": "My job duties turned out to be as I expected",
                    "Values": [
                                { "Strongly Disagree": "" },
                                { "Disagree": "" },
                                { "Agree/Disagree": "" },
                                { "Agree": "" },
                                { "Strongly Agree": "" }
                    ]
                },

                {
                    "P2": "I received adequate support & Feedback to do my job",
                    "Values": [
                                { "Strongly Disagree": "" },
                                { "Disagree": "" },
                                { "Agree/Disagree": "" },
                                { "Agree": "" },
                                { "Strongly Agree": "" }

                    ]
                },


                {
                    "P3": "Transflower helped me to fulfill my career goals",
                    "Values": [
                                { "Strongly Disagree": "" },
                                { "Disagree": "" },
                                { "Agree/Disagree": "" },
                                { "Agree": "" },
                                { "Strongly Agree": "" }
                    ]
                },



                   {
                       "P4": "I was satisfied with Transflower's PA Process",
                       "Values": [
                                      { "Strongly Disagree": "" },
                                      { "Disagree": "" },
                                      { "Agree/Disagree": "" },
                                      { "Agree": "" },
                                      { "Strongly Agree": "" }
                       ]
                   },




                   {
                       "P5": "I was happy with my pay, benefits and other incentives",
                       "Values": [
                                     { "Strongly Disagree": "" },
                                     { "Disagree": "" },
                                     { "Agree/Disagree": "" },
                                     { "Agree": "" },
                                     { "Strongly Agree": "" }
                       ]
                   },


                  {
                      "P6": "My Supervisor was knowledgeable",
                      "Values": [
                                    { "Strongly Disagree": "" },
                                    { "Disagree": "" },
                                    { "Agree/Disagree": "" },
                                    { "Agree": "" },
                                    { "Strongly Agree": "" }
                      ]
                  },


                {
                    "P7": "My Supervisor was a capable manager",
                    "Values": [
                                    { "Strongly Disagree": "" },
                                    { "Disagree": "" },
                                    { "Agree/Disagree": "" },
                                    { "Agree": "" },
                                    { "Strongly Agree": "" }
                    ]
                },

                 {
                     "P8": "He/She was open for suggestions",
                     "Values": [
                                    { "Strongly Disagree": "" },
                                    { "Disagree": "" },
                                    { "Agree/Disagree": "" },
                                    { "Agree": "" },
                                    { "Strongly Agree": "" }
                     ]
                 },

                 {
                     "P9": "He/She used to recognize my efforts and give constructive feedback",
                     "Values": [
                                    { "Strongly Disagree": "" },
                                    { "Disagree": "" },
                                    { "Agree/Disagree": "" },
                                    { "Agree": "" },
                                    { "Strongly Agree": "" }
                     ]
                 },

                 {
                     "P10": "Given a chance I would like to come back to Transflower",
                     "Values": [
                                     { "Strongly Disagree": "" },
                                     { "Disagree": "" },
                                     { "Agree/Disagree": "" },
                                     { "Agree": "" },
                                     { "Strongly Agree": "" }
                     ]
                 },

                 {
                     "P11": "I would recommand working for this company to my family and friends",
                     "Values": [
                                     { "Strongly Disagree": "" },
                                     { "Disagree": "" },
                                     { "Agree/Disagree": "" },
                                     { "Agree": "" },
                                     { "Strongly Agree": "" }
                     ]
                 },
    ],
    "Please mention things you liked most about Transflower:": "",
    "Please mention things you disliked about Transflower:": "",
    "Specific suggestions for improvements:": "",
    "Signature & Date:":""
};





$(document).ready(function () {

    //which data Template       //which object   //Placeholder
    //$('#person-template').tmpl(htmld).appendTo('.personal-detais');
    //$('#person-template').tmpl(app).appendTo('#div1');
    //$('#person-template').tmpl(office).appendTo('#div2');


    $('#course-template').tmpl(Transflower.Catalog.Course.Moudules).appendTo('.course');
});


