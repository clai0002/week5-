let mongoose = require("mongoose");
let warehouseSchema = mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    address:String,
    capacity:{
        type: Number,
        min: 250,
        max: 500
    }
})

let warehouseModel = mongoose.model("warehouse",warehouseSchema)