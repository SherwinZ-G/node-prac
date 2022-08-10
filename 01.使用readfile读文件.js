const fs =require('fs');
fs.readFile('main.js','utf-8',function(err,dataStr){
    console.log(err);
    console.log("------");
    console.log(dataStr);
})