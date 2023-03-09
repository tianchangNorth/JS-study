const express = require('express');

//创建应用对象
const app = express();

//3.创建路由规则
//request 是对请求报文的封装
//response 是对响应报文的封装
app.get('/promise',(request,response)=>{
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置响应体
    response.send('hello promise');
});

//4.端口监听服务启动
app.listen(8080,()=>{
    console.log("服务已经启动，8000端口监听中......");
})