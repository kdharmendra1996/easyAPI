const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    title:{
        type:String,
        required:[true,"Please enter product name.."],
        trim:true
    },
    description:{
        type:String,
        required:[true,"Please enter product description.."]
    },
    price:{
        type:Number,
        required:[true,"Please enter price.."],
        maxLength:[8,"price cannot exceed 8 characters"]
    },    
    discountPercentage:{
        type:Number,
        min: [0, "Discount percentage cannot be negative."],
        max: [100, "Discount percentage cannot exceed 100."]
    },
    rating:{
        type:Number,
        default:0
    },
    images: [{
        type: String,
    }],
    category:{
        type:String,
        required:[true,"Please enter product category"]
    },
    brand:{
        type:String,
        required:[true,"Please enter product brand"]
    },
    stock:{
        type:Number,
        required:[true,"Please enter product stock"],
        maxLength:[4,"Stock cannot exceed 4 characters"],
        default:1
    },
    thumbnail:{
        type:String,
        required: true
    },
    feature: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Myproduct", productSchema);
