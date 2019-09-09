let mongoose = require('mongoose');
let url="mongodb://localhost:27017/week6lec1";


let User = require('./models/user')
let car = require('./models/car')

mongoose.connect(url,function(err){
    if(err) console.log(err);
    else{
        let user = new User({
            name: "Tim",
            age: 22,
            address: "Mel"
        });
        user.save(function(err){

            if(err)console.log(err);
            else {
                console.log('saved!!!')
                let car= new CaretPosition({
                    mkaer:'maserati',
                    year:2019,
                    user: user._id
                })
                car.save(function(err){
                    if(err)console.log(err);
                    else console.log('car saved!!!')
                })

            }
            
            
            
        })
    }
})
app.get('/getusers',function(req,res){
    User.find().limit(3).sort({age:-1}).exec(function(err,data){
        res.send(data)
    })
})
app.get('/getcars',function(req,res){
    car.find().populate('user').exec(function(err,data){
        res.send(data);
    })
})
app.get('/deleteall', function(req,res){
    User.deleteMany({},function(err,obj){
        car.deleteMany({},function(err,obj){

        })
    })
})

app.listen(8080)