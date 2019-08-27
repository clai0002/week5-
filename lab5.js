let express = require('express');
let app = express();

let bodyParser = require('body-parser');
let db=[];
let viewsPath= __dirname+"/views";// dirname = the path fo this folder

//home page
// create new user page
//list all user page
app.use(express.static("public/img"))
app.use(bodyParser.urlencoded({
    extended: false
}));
app.engine("html",require('ejs').renderFile);
app.set("view engine",'html')
app.use(express.static('css'));
app.use(express.static('image'))


app.get("/",function(req,res){
    let fileName = viewsPath + "/work5.html"
    res.sendFile(fileName);
});

app.get("/addtask",function(req,res){
    let fileName = viewsPath + "/addtask.html"
    res.sendFile(fileName);
});



app.post("/addmytask",function(req,res){
    db.push(req.body);
    res.redirect("/listtask");
});

app.get('/listtask',function(req,res){
    let fileName = viewsPath + "/listtask.html"
    res.render(fileName,{
        task : db
    });
});


app.listen(8080)