var express = require('express');
var app = express();
var path=require("path");

app.use(express.static(path.join(__dirname,'public')));
app.get('/', function (req, res) {
   res.sendFile(path.join(___dirname + '/index.html'));
});

app.get('/hello', function (req, res) {
   res.send('Hello World');
});

var server = app.listen(9000);
console.log("server is  listening at http://localhost:9000");