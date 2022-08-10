const fs=require('fs');
const path=require('path');

const stylereg=/<style>[\s\S]*<\/style>/
const scriptreg = /<script>[\s\S]*<\/script>/




fs.readFile(path.join(__dirname,'./sucai/index.html'),'utf-8',(err,dataStr)=>{
    if(err){
        console.log('读取文件失败'+err.message);
    }
    const cssFile=resolveCss(dataStr);
    const jsFile=resolveJs(dataStr);
    fs.writeFile(path.join(__dirname, './clock/index.css'), cssFile, err => {
        if (err) {
            console.log("出现错误！" + err.message);
        }
    })

    fs.writeFile(path.join(__dirname, './clock/index.js'), jsFile, err => {
        if (err) {
            console.log("出现错误！" + err.message);
        }
    })
    resolveHtml(dataStr);
})

function resolveCss(dataStr){
    let cssFile= stylereg.exec(dataStr);
    // 
    cssFile=cssFile[0].replace('<style>','').replace('</style>','');
    return cssFile;
}

function resolveJs(dataStr) {
    let jsFile = scriptreg.exec(dataStr);
    // 
    jsFile = jsFile[0].replace('<script>', '').replace('</script>', '');
    return jsFile;
}

function resolveHtml(dataStr){
    let newHtml=dataStr.replace(stylereg,'<link rel="stylesheet" href="./index.css"/>')
                .replace(scriptreg,'<script src="./index.js"></script>');
    fs.writeFile(path.join(__dirname,'./clock/index.html'),newHtml,err=>{
        if(err){
            console.log("出现错误！"+err.message);
        }
    })
}

