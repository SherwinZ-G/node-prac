const fs=require('fs');

fs.writeFile('./123.txt','androids got life',function(err){
    if(err){
        console.log('there is an error'+ err.message);
    }else{
        console.log('successfully written! :-)');
    }
})