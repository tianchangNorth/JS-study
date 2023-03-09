const fs = require('fs');

//调用方法读取文件
// fs.readFile('./说书人.md','utf-8',(err,data)=>{
//     if(err) throw err;
//     console.log(data);
// })

//使用promise封装
const p = new Promise(function(resolve,reject){
    fs.readFile('./说书人.md','utf-8',(err,data)=>{
        if(err) reject(err);
        resolve(data)
    })
})
p.then(function(value){
    console.log(value);
},function(reason){
    console.log('文件读取错误');
})