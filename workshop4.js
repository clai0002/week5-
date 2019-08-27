let express = require('express')
let app = express()
let morgan= require('morgan')
let bodyParser = require('body-parser')
let ejs= require('ejs')

app.engine('html',require('ejs').renderFile);
app.set('view engine','html');
app.set('views','public');

app.use(express.static('public'));
app.use(express.static('image'));
app.use(morgan('common'));

let ar=[{name:'Tim', age:23},{name:'john' , age:24}];

app.use(bodyParser.urlencoded({
    extended : false
}));
app.get('/',function(req,res){
    console.log("hello from app.get ")
    res.render('index.html',{username : 'Tim', data : ar})
    // res.sendFile("index.html")
});     

app.post('/data',function(req,res){
    console.log('i got a request');
    console.log(req.body);
})
app.listen(8080)

// app.use('/',function(req,res,next){
//     console.log("hello dome midleware... 1")
//     next()
// });  
// app.use('/about',function(req,res,next){
//     console.log("hello dome midleware... 2")
//     next()
// });   