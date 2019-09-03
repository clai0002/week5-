let express = require('express');
let app = express();

let bodyParser = require('body-parser');
let mongodb= require("mongodb")
let mongoClient= mongodb.MongoClient
const url = 'mongodb://localhost:27017'


let viewsPath= __dirname+"/week6";// dirname = the path fo this folder

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

mongoClient.connect(url,{useNewUrlParser:true},(err,client)=>{
    if(err){
        console.log("err",err);
    }
    else{
        console.log("connected to mongodb");
        db= client.db('fit2095');
        col= db.collection('week5')

    }
});


app.get("/",function(req,res){
    let fileName = viewsPath + "/lab6.html"
    res.sendFile(fileName);
});

app.get("/newtask",function(req,res){
    let fileName = viewsPath + "/newtask.html"
    res.sendFile(fileName);
});


app.post("/addmytask",function(req,res){
    let taskDetails = req.body;
    taskDetails.taskID = getNewId()
    col.insertOne(taskDetails);
    res.redirect("/getalltask");
});

app.get('/getalltask', function (req, res) {
    let fileName =  viewsPath + "/getalltask.html" 
    db.collection('week5').find({}).toArray(function (err, result) {
        if (err) {
            res.redirect('/404');
        } else {
            res.render(fileName, { week5 : result })
        }
    })
})
app.post('/deletemyid',function(req,res){
    let taskDetails = req.body
    let ID = parseInt(taskDetails.taskID)
    col.deleteMany({
        taskID : ID
    });
    res.redirect('/getalltask')
})

app.get('/deleteID',function(req,res){
    let fileName = viewsPath + "/deleteID.html"
    res.sendFile(fileName);
})

app.get('/deleteCompleted',function(req,res){
    col.deleteMany({
        status : 'Completed'
    });
    res.redirect('/getalltask');
})

app.get('/updateTask',function(req,res){
    let fileName = viewsPath + "/updateTask.html"
    res.sendFile(fileName);
})

app.post('/updatemytask',function(req,res){
    let taskDetails= req.body
    col.updateOne({taskID: parseInt(taskDetails.taskID)},{$set:{status : taskDetails.status}},{ upsert: true }, function (err, result) {
    });
    res.redirect('/getalltask')
})

app.listen(8080)

function getNewId() {
    return (Math.floor(100000 + Math.random() * 900000));
}