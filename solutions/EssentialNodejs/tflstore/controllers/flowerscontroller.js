// CRUD OPERATIONS Againest flower collection from JSON file
var flowers=require('../data/products.json');

//HTTP callback functions

exports.getAll=function (req, res){
res.send(flowers);
};

exports.getById=function(req,res){
    var idFlower=req.params.flowerid-1;
    res.send(flowers[idFlower]);
};

exports.insert=function(req, res){
    var data=req.body;
    console.log(data);
    //append this data to flowers array maintained in json file
};

exports.update=function(req,res){
    var data=req.body;
    console.log(data);
    //append this data to flowers array maintained in json file
};

exports.delete=function(req,res){
    var idFlower=req.params.flowerid-1;
};