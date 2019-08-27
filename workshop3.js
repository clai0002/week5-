// why express important?
// let http=require('http');
// http.createServer(function(req,res){
//     if(req.method === "get"){
//         //do something
//         if(req.url === '/about'){
//             // send about page
//         }
    
//     }
//     if(req.method === "post"){

//         //do something else
//     }


// });

let express = require("express")
let app = express();
app.get("/", function(req,res){
    res.send('hello world');
});

app.get("/about",function(req,res){
    res.send("this is about page");
});

// app.post('/cal')// the param is the action in the html
app.get("/wiki/:keyword/FIT2095/:id",function(req,res){
    console.log(req.url);
    console.log(req.params);
    res.send("hello bello")
})

app.get("/report",function(req,res){
    console.log(req.url);
    console.log(req.query);
    console.log("the name is" ===+ req.query.name)
    console.log("the age is" ===+ req.query.age)
    console.log("the address is" ===+ req.query.address)
})









app.listen(8080);

