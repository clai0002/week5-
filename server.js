let express = require();
let app = express();

app.get("/add/:no1/:no2",function(req,res){
    let n1=parseInt(req.params.no1);
    let n2=parseInt(req.params.no2)

    let result= n1+n2

    res.send(n1+'+'+n2+ " = "+ result)
})
app.get("/sub",function(req,res){
    let n1=parseInt(req.params.no1);
    let n2=parseInt(req.params.no2)

    let result =  n1 - n2

    res.send(n1+'-'+n2+ " = "+ result)
})