let express = require("express");
let app  = express();
let db=[];
//we want to store numbers in the databse
//add numbers
//get all numbers saved
//delete number
//sum all numbers

//store numbers
app.get("/addNo/:newNo",function(req,res){// colon specifies a route parmater, need : to retrieve data
    db.push(parseInt(req.params.newNo));
    res.send("you have added:"+req.params.newNo);
    console.log(db)
});


//get all numbers in db
app.get("/getall",function(req,res){
    res.send(arraytoSTR(db))
})

function arraytoSTR(array){
    let string="";
    array.forEach(function(element,index){
        string += index + "-" +element+ "<br>" ; 
    });
    
    return string
}

//delete all numbers
app.get("/deleteNo/:no",function(req,res){
    removeElement(db,parseInt(req.params.no));
    res.send("you have deleted"+req.params.no);

})

function removeElement(array,index){
    let index = array.indexOf(element);
    if(index>-1){
        array.splice(index,1);
    }
}

//sum all numbers
app.get("/getsum",function(req,res){
    console.log(db.length)
    let sum = findsum(db)
    res.send("sum is "+ sum);
})

function findsum(array){
    let sum=0
    array.forEach(element => {
        sum+= element;
    })
}

app.listen(8080)