let db=null
let coll= null
let mongodb= require("mongodb")
let mongoClient= mongodb.MongoClient

const url = 'mongodb://localhost:27017'
mongoClient.connect(url,{useNewUrlParser:true},(err,client)=>{
    if(err){
        console.log("err",err);
    }
    else{
        console.log("connected to mongodb");
        db= client.db('customerdb');
        db.createcollection("customer");
        coll = db.collection("customer");

    }
});

app.post("/newCustomer", function(req,res){
    console.log("obtained body", req.body)
    coll.insertOne(req.body,(err,result)=>{
        res.redirect("/getallcustomer");
    })
    
})

app.get('/getallcustomer',function(req,res){
    coll.find({}).toArray((err,result)=>{
        res.render('allcustomers.html',{
        customers: result
        });
    });
});

app.get("/updatecustomer/:oldNum/:newNum",function(req,res){
    let query = {
        phoneNumber: req.body.oldNum
    }
    col.updateMany(
        query,{
            $set: {phoneNumber: req.body.newNum}
        },
        {upsert:true},(err,obj)=>{
            console.log('updated'+Object.result.nModified);
            res.redirect("/getallcustomer");
        }
    )

})

//delete customer matching first name and lastname
app.get("/deleteCustByNmae/:firstname/:Lastname",function(req,res){
    let query={
        firstName: req.params.firstName,
        LastName: req.params.LastName
    }
    col.deleteMany(query,function(err,obj){});
})