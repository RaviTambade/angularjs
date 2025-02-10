var readObj=require('fs');
//read file
var readfilePath='./txt/fromRead.txt';
var writefilePath='./txt/toWrite.txt';
//access content of file 
readObj.readFile(readfilePath,(err,data)=>{
    if(err){
        console.log("Error occured");
        console.log(err);
    }
    else{
        console.log("Content of file : \n");
        console.log(data.toString());
    }
})

readObj.writeFile(writefilePath,readfilePath,(err,data)=>{
    if(err){
        console.log("Error occured");
        console.log(err);
    }
    else{
        console.log("file copy successfull");
    }
})