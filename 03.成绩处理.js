const fs=require('fs');
fs.readFile('成绩.txt','utf-8',function(err,dataStr){
    if(err){
        console.log('there is an error'+ err.message);
    }
    
    const arr=dataStr.split(' ');
    const arrNew=[];
    arr.forEach(element => {
        arrNew.push(element.replace('=',': '));
    });
   const newData= arrNew.join('\r\n');
   fs.writeFile('./成绩2.txt',newData,function(err){
    if(err){
        console.log('there is an error' + err.message);
    }

})
})
