const express=require('express');
const res = require('express/lib/response');
const app=express()
app.get('/',(re,res)=>{
    console.log("this  is root page");
    res.send('hey user this is you home page')
})
app.get('/about',(req,res)=>{
    console.log("about page")
    res.send("here with you '\n' my self satysairazole");
})
app.get('/books/:name/:auth',(req,res)=>{
    console.log("books page")
    const num=req.params.name;
    const author=req.params.auth;
    res.send("your asking book name is \""+num+" \" and auther is --"+author);
})

app.get('*',(req,res)=>{
    res.send("given router does not exist in your system");
})


app.listen(8080,()=>{
    console.log ('port is running on 8080');
})