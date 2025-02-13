'use strict';
//jQuery Templates



// JavaScript source code
//global namespance
var Transflower = Transflower || {};
//sub namespace

Transflower.Operations = {};

//Course Object defined below
Transflower.Operations.Invice= {
    "Company Name": "",
    "Department": "",
    "Company Address": "",
    "Invoice No.": "",
    "Date": "",
    "Ref": "",
    "Kind Attn": "Accounts Payable Department",
    "Payment Terms":"7 Days",

    "Descriptions": [
                {
                    "D1": "Training Charges for MO-Networking Concepts ",
                    "Values": [
                                { "Training Dates": "" },
                                { "Trainer": "" },
                                { "Efforts": "" },
                                { "Unit Price": "" },
                                { "Amount": "" }
                    ]
                },


                 {
                     "D2": "Training Charges for MO-ITIL V3 Foundation",
                     "Values": [
                                { "Training Dates": "" },
                                { "Trainer": "" },
                                { "Efforts": "" },
                                { "Unit Price": "" },
                                { "Amount": "" }
                     ]
                 },

                 {
                     "D3": "Training Charges for MO-RDBMS",
                     "Values": [
                                { "Training Dates": "" },
                                { "Trainer": "" },
                                { "Efforts": "" },
                                { "Unit Price": "" },
                                { "Amount": "" }
                     ]
                 },

                 {
                     "D4": "Training Charges for MO-PC/Hardware Overview",
                     "Values": [
                                { "Training Dates": "" },
                                { "Trainer": "" },
                                { "Efforts": "" },
                                { "Unit Price": "" },
                                { "Amount": "" }
                     ]
                 },
    ],
    "Add:Service Tax @ 10%": "",
    "Add:Education Cess @ 2%": "",
    "Add:Higher Education Cess @ 1 %": "",
    "Total Amount in Words": "",
    "Amount": "",
    "Mode of Payment": "Cheque/DD Payable at Pune in favor of Transflower Learning Pvt Ltd",
    "Transflower PAN No.": "",
    "Service Tax Reg No": "",
    "Authorised Signatory": "",
    "Note1": "Subject to courts in Pune jurisdiction only",
    "Note2":"All overdue payments shall attarct an Interest @ 18%"
 };





$(document).ready(function () {

   


    $('#course-template').tmpl(Transflower.Catalog.Course.Moudules).appendTo('.course');
});


