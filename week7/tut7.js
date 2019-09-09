let express = require("express");
let app = express();

let mongoose = require('mongoose');

let url="mongodb://localhost:27017/";


let warehouse = require('./models/warehous')
let item = require('./models/item')

mongoose.connect(url,function(err){
    if(err){
        throw err;
    }

    console.log("successfully connected");

});

//get warehouse
app.get("/getwarehouse",function(req,res){
    warehouse.find().exec(function(err,data){
        if(err){
            console.log("now warehouse found")
        }
        else res.send(data)
    })
});
app.listen(8080)
// create warehouse
app.get("/addwarehouse/:name/:capacity/:address",function(req,res){
    warehouse.create({
        _id: new mongoose.Types.ObjectId(),
        name: req.params.name,
        capacity: req.params.capacity,
        address: req.params.address
    },function(err){
        if(err){
            console.log(err,message);
        }
    })
    res.redirect('/getwarehouse')
})

//get item
app.get('/getitems',function(req,res){
    item.find().populate('').exec(function(err,data){
        data=JSON.stringify(data,null,4)// first param is the data, sec param: the type of 
        res.send(<pre>$pepe</pre>)
    })
})
//create item
app.get('/additem/:whID/:name/:cost/:quantity',function(req,res){
    let item = item({
        name: req.params.name,
        cost: req.params.cost,
        quantity: ParseInt(req.params.quantity)
    });
    item.save(function(err){
        if(err)
            throw err;
        else 
            res.redirect("/getitems");
    })
})
