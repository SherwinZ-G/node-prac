//导入模块
const express=require('express');
//创建服务器
const app=express();
// const url=app.
//第一个参数：客户端请求的url地址
app.get('/user',(req,res)=>{
    res.send({name:"gabriel",gender:"unknown", age:22})
});
app.post('/index',(req,res)=>{
    res.send('post is received');
})
app.get('/',(req,res)=>{
    res.send(req.query);
})

app.listen(8080,function(){
    console.log('server is runnig on 8080');
})