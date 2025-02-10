var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');


app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    console.log('Getting');
    res.sendFile(path.join(__dirname + '/index.html'));
});

 

 
app.listen(9000);
console.log("Web Server is Running On http://localhost:9000");


