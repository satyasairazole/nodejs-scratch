var express=require("express")
var mongoose=require("mongoose")
var bodyparser=require("body-parser")
const app=express()
app.use(bodyparser.json())
app.use(express.static('public'))
app.use(bodyparser.urlencoded({
    extended:true
}))
app.get("/",(req,res)=>{
    res.set({"Allow-access-Allow-Origin":'*'})
    //res.send("hello world this is satysairazole")
}).listen(8080);
console.log("we acquire data on port 8080");