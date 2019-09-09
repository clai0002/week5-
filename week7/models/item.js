let mongoose = require('mongoose');
let ItemSchema = ItemSchema.mongoose({
    name: String,
    cost: Number,
    quantity: {
        type : Number,
        min:0
    },
    warehouse : {
        type:mongoose.Schema.Types.ObjectId,
        ref: "warehouse"
    },
    created:{
        type: Date,
        default: Date.now
    }
})

let ItemModel = mongoose.model('item',ItemSchema);