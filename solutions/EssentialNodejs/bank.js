
var events=require('events');
var listner=require('./listner');
var evenEmitter=new events.EventEmitter();
 
var Account=function(amount){
    var balance=amount;
   
    var monitor=function()
    {
        if(balance<=10000){
            evenEmitter.emit("underbalance");
        }
        else  if(balance >=200000){
            evenEmitter.emit("overbalance");
        }   
    }

    var getBalance=function(){
        return balance;
    }

    var withdraw=function(amount){
        balance=balance-amount;
        monitor();
    }

    var deposit=function(amount){
        balance=balance+amount;
        monitor();
    }

    //return block
    return{
        get:getBalance,
        withdraw:withdraw,
        deposit:deposit
    }
};

console.log("Welcome to HDFC Bank");
console.log("Bank Account processing");
evenEmitter.on("underbalance",listner.blockAccount);
evenEmitter.on("underbalance",listner.sendEmail);
evenEmitter.on("underbalance",listner.sendSMS);
evenEmitter.on("overbalance ",listner.payIncomtax);
evenEmitter.on("overbalance ",listner.payMetro);

var acct123=new Account(500000);
var acct124=new Account(75000);

console.log( " fitst Account instnace Balance = " + acct123.get());
acct123.deposit(60000);
//acct123.deposit(160000);
//acct123.withdraw(5000);
console.log( " fitst Account instnace Balance = " + acct123.get())