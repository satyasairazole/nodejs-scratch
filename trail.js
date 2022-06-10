var http=require('http')
const fs=require('fs');
http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/html/css"})
   // res.write("server is runnning")
    fs.readFile('index.html',null,(err,data)=>{
        if(err){
            res.writeHead(404)
            res.write('FILE NOT FOUND')
            console.log('file not displayed')
        }else{
            res.write(data);
            console.log('file displayed');

            res.end();
        }
    })
}).listen(9000)
console.log("server running on port 9000")

/*var path=require('path');
 var os=require('os');


const math=require("./calcmodule.js");
console.log(math.add(2,9));
console.log(math.multi(2,9));
console.log(math.divide(2,9)); */
/* console.log("hellow wordls");
console.log(os.type());
console.log(os.version());
console.log(os.homedir());
 console.log(__dirname);
 console.log(__filename);
 console.log(path.dirname(__filename));
 console.log(path.basename(__filename));
 console.log(path.extname(__filename));
 console.log(path.parse(__filename));
 */

/* const fs=require('fs');
fs.readFile(path.join(__dirname,'hey.txt'),'utf8',(err,data)=>{
    if(err) throw err;
    console.log(data);
})
fs.writeFile(path.join(__dirname,'ano.txt'),'hey girl how aare youuu',(err)=>{
    if(err) throw err;
    console.log("written operation is successfully completed");
})

fs.appendFile(path.join(__dirname,'ano.txt'),'content was updated properly',(err)=>{
    if(err) throw err;
    console.log("update operation is successfully completed");
}) */


