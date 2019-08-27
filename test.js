const http = require("http");
const fs = require("fs");
let urlparse = require('url')
const {parse} = require("querystring")
function sendFile(res,filename){
    fs.readFile(filename,function(error,content){
        if (error) throw error;
        res.writeHead(200,{
        "Content-Type" : "text/html"
        });
        res.end(content,"utf-8");
    });
}

http.createServer(function(req,res){
    const {method,url} = req;
    console.log(url,method);
    let q=urlparse.parse(url,true).query;
    let pathname= urlparse.parse(url,true).pathname;
    if (pathname === '/')
        console.log('we got a post');
        if(req.method === "POST"){
            let body ='';
            req.on('data',chunk=>{
                body += chunk.toString();
                console.log(body);
            });// is an event handler when data comes in

            req.on("end",()=>{
                let data = parse(body) ;
                console.log(data);
                let username = data.username;
                let password = data.password;
                if(username === "admin" && password === "pass"){
                    sendFile(res,'mainpage.html')
                }else{
                    sendFile(res,'accessdenied.html')
                }
            })
        }else{
            fs.readFile("./index.html",function(error,content){
                res.writeHead(200,{
                "Content-Type" : "text/html"
                });
                res.end(content,"utf-8");
                });
        }
}).listen(8080);