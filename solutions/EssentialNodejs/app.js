//External javascript code
var count=56;
count++;
console.log("Hello");
var person={
    "firstname":"Rajiv",
    "lastname":"Sharma",
    "contactperson":"9883478589",
    "email":"rajiv.sharma@gmail.com"
};
var str_person=JSON.stringify(person);
//alert(str_person);

//DHTML

var showme=function(){
    alert("I am completely awake. Pure hoshme");
}
var validate=function(){
   console.log("Login button is clicked....");

   let emailElement=document.getElementById("email");

   let email=emailElement.value;
   let emailPassword=document.getElementById("password");
let password=emailPassword.value;

let result=email +"  "+ password;

let elementParagraph=document.getElementById("status");
elementParagraph.innerHTML=result;
}