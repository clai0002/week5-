let express = require("express");
let app  = express();
let db=[];
let costdb=[];

app.get("/newItem/:itemname/:quantity/:price",function(req,res){// colon specifies a route parmater, need : to retrieve data
    let newId=Math.round(Math.random()*100)
    let itemcost = costCal(parseInt(req.params.quantity),parseInt(req.params.price))
    let rec={id: newId, name: req.params.itemname, quantity: parseInt(req.params.quantity), price: parseInt(req.params.price), cost: itemcost }
    db.push(rec)
    res.send("you have added item");
    console.log(db)
});


app.get("/getall",function(req,res){
    res.send(generateList())
})

function generateList() {
    let st = 'id  name  quantity price cost   </br>';
    for (let i = 0; i < db.length; i++) {
        st += db[i].id + ' | ' + db[i].name + ' | ' + db[i].quantity + ' | '+  db[i].price + ' | ' + db[i].cost + '</br>';
    }
    return st;
}

app.get("/deleteNo/:no",function(req,res){
    removeElement(db,parseInt(req.params.no));
    res.send("you have deleted "+ req.params.no);
    console.log(db)

})

app.get("/totalValue",function(req,res){
    res.send("total value:" + sumall(db))
})

function removeElement(array,element){
    for(i = array.length - 1; i>= 0; --i){
        if(array[i].id == element){
            array.splice(i,1);

        }

    }
}

function costCal(quantity,price){
    let cost = quantity*price;
    return cost
}

function sumall(db){
    let sum = 0
    for (let i = 0; i < db.length; i++) {
        sum += db[i].cost;
    }
    return sum;
}

// function test(db){
//     for (let i = 0; i < db.length; i++) {
//         console.log(db[i])
//         console.log(i)
//     }
// }
app.listen(8080);