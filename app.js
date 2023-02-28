const fs = require('fs');
const path = require('path');
// fs.mkdir(path.join('Mainfoulder'),(err)=>{
//     if (err) throw new Error()
// })
// fs.mkdir(path.join('Mainfoulder','foulder1'),(err)=> {
//     console.log(err);
// fs.mkdir(path.join('Mainfoulder','foulder2'),(err)=> {
//     console.log(err);
// })
// fs.mkdir(path.join('Mainfoulder','foulder3'),(err)=> {
//     console.log(err);
// })
// fs.mkdir(path.join('Mainfoulder','foulder4'),(err)=> {
//     console.log(err);
// })
// fs.mkdir(path.join('Mainfoulder','foulder5'),(err)=> {
//     console.log(err);
// })
// fs.writeFile(path.join('Mainfoulder','file1'),'Hello I am file',(err)=>{
//     if (err)throw new Error(err.message)
// })
// fs.writeFile(path.join('Mainfoulder','file2'),'Hello I am file',(err)=>{
//     if (err)throw new Error(err.message)
// })
// fs.writeFile(path.join('Mainfoulder','file3'),'Hello I am file',(err)=>{
//     if (err)throw new Error(err.message)
// })
// fs.writeFile(path.join('Mainfoulder','file4'),'Hello I am file',(err)=>{
//     if (err)throw new Error(err.message)
// })
// fs.writeFile(path.join('Mainfoulder','file5'),'Hello I am file',(err)=>{
//     if (err)throw new Error(err.message)
// })

fs.stat(path.join('Mainfoulder','foulder1'),(err, stats)=>{
    if (err) throw new Error()
    console.log(stats.isDirectory());
    console.log(stats.isFile());
})
fs.stat(path.join('Mainfoulder','foulder2'),(err, stats)=>{
    if (err) throw new Error()
    console.log(stats.isDirectory());
    console.log(stats.isFile());
})
fs.stat(path.join('Mainfoulder','foulder3'),(err, stats)=>{
    if (err) throw new Error()
    console.log(stats.isDirectory());
    console.log(stats.isFile());
})
fs.stat(path.join('Mainfoulder','foulder4'),(err, stats)=>{
    if (err) throw new Error()
    console.log(stats.isDirectory());
    console.log(stats.isFile());
})
fs.stat(path.join('Mainfoulder','foulder5'),(err, stats)=>{
    if (err) throw new Error()
    console.log(stats.isDirectory());
    console.log(stats.isFile());
})

fs.stat(path.join('Mainfoulder','file1'),(err, stats)=>{
    if (err) throw new Error()
    console.log(stats.isDirectory());
    console.log(stats.isFile());
})
fs.stat(path.join('Mainfoulder','file2'),(err, stats)=>{
    if (err) throw new Error()
    console.log(stats.isDirectory());
    console.log(stats.isFile());
})
fs.stat(path.join('Mainfoulder','file3'),(err, stats)=>{
    if (err) throw new Error()
    console.log(stats.isDirectory());
    console.log(stats.isFile());
})
fs.stat(path.join('Mainfoulder','file4'),(err, stats)=>{
    if (err) throw new Error()
    console.log(stats.isDirectory());
    console.log(stats.isFile());
})
fs.stat(path.join('Mainfoulder','file5'),(err, stats)=>{
    if (err) throw new Error()
    console.log(stats.isDirectory());
    console.log(stats.isFile());
})
