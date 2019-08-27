const http = require("http");
const fs = require("fs");
let urlparse = require('url')
const { parse } = require("querystring")
function sendFile(res, filename) {
    fs.readFile(filename, function (error, content) {
        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        res.end(content, "utf-8");

    });
}

http.createServer(function (req, res) {
    const { method, url } = req;
    console.log(url, method);
    let pathname = urlparse.parse(url, true).pathname;
    if (pathname === '/')
        fs.readFile("index.html", function (error, content) {
            res.writeHead(200, {
                "Content-Type": "text/html"
            });

            res.end(content, "utf-8");
        });
    if (pathname === '/login')
        console.log('we got a post');
    if (req.method === "POST") {

        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();

        });// is an event handler when data comes in
        req.on("end", () => {
            let data = parse(body);
            let username = data.username;
            let password = data.password;
            console.log(username);
            console.log(password);
            if (username === "admin" && password === "pass") {
                console.log("hello")

                fs.readFile("mainpage.html", function (error, content) {
                    res.writeHead(200, {
                        "Content-Type": "text/html"
                    });
                    console.log(content.toString());
                    // res.write
                    res.end(content.toString(), "utf-8");
                });
            } else {
                console.log('try');
                sendFile(res,'accessdenied.html')
            }
        })
    }

}).listen(8080);


// console.log(req.url,req.method);
// fs.readFile("./index.html",function(error,content){
//     res.writeHead(200,{
//      "Content-Type" : "text/html"
//     });    

//     res.end(content,"utf-8");
// }); 
