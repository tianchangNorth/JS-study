const fs= require('fs');
const p = new Promise(function(resolve,reject){
    fs.readFile('./说书人.md','utf-8',(err,data)=>{
        resolve(data);
    });
});
p.then(value=>{
    return new Promise((resolve,reject)=>{
    fs.readFile('./说书人2.md','utf-8',(err,data)=>{
        resolve([value,data]);
    });
});
}).then(value=>{
    return new Promise((resolve,reject)=>{
        fs.readFile('./说书人3.md','utf-8',(err,data)=>{
            value.push(data);
            resolve(value)
        });
})
}).then(value=>{
    console.log(value.join('\r\n'));
})