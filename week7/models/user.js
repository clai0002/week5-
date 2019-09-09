let mongoose = require("mongoose");

let userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    age:{type:Number,
        validator:function(value){// boolena function
            if(value%2 === 0)
                return true;
            else
                return false;
        },
        message:"should be an even age!!! sorry:("
        // min:17,
        // max:80,
        // required : true        
    },
    address:{
        type:String,
        set:function(value){// parameter can be any name
            return "you live in " + value; // set is not a boolean it return value that will be saved in string( it depend on the data type that is stated)
        }
    },
    created:{
        type:Date,
        default:Date.now()
    }
});

userSchema.pre('save',function(){
    console.log('pre save')
    this.address= this.address+"city";
    this.age=this.age+2// any logic

});

let userModel = mongoose.model("UserCol", userSchema);

module.exports=userModel