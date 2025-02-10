//listner is a module of set of callback functions
//which would be invoked due to event raised by application

exports.blockAccount=function()
    {
        console.log("account blocked temporarily");

    }
exports.sendEmail=function()
    {
        console.log("Email has been send");

    }
 exports.sendSMS=function()
    {
        console.log("Messeage has been send");
    }



    //over balance ....
exports.payIncomtax=function()
    {
        console.log("25% Income tax has been dedected");

    } 
exports.payMetro=function()
    {
        console.log("10% metro tax ");

    }   