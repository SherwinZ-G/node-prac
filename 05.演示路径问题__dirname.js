
//打印当前所处的目录
// console.log(__dirname);

const fs = require('fs');
fs.readFile(__dirname+'/main.js', 'utf-8', function (err, dataStr) {
    console.log(err);
    console.log("------");
    console.log(dataStr);
})