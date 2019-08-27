const http = require("http");
const fs = require("fs");
const {parse} = require("querystring")
http.createServer(function(req,res){                    // arguement is the function which is a callback
    console.log(req.url,req.method);
    fs.readFile("./bmi.html",function(error,content){
        res.writeHead(200,{
         "Content-Type" : "text/html"
        });    
    
        res.end(content,"utf-8");
        
    });
    

    if(req.url === "/bmi" && req.method === "POST"){

        res.on('data',chunk=>{
            body += chunk.toString(); 
        });// is an event handler when data comes in

        res.on("end",()=>{
            let data = parse(body);
            console.log(data)
            let weight= data.weight;
            let height= data.height;
            let bmi = weight/(height ** 2);
            console.log(bmi);

            if(bmi >= 25){
                sendFile(res,'overweight.html')
            }else{
                sendFile(res,'normal.html')
            }

        })

    }

     
})
.listen(8060);

function sendFile(res,fileName){
    res.writeHead(200,{
        "Content-Type" : "text/html"
       });    
   
       res.end(content,"utf-8");
       
   };