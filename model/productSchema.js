const mongoose =require("mongoose");
const productSchema = new mongoose.Schema({
    productName:{
        type:String,
        require:true,
    },
    productPrice:{
        type:Number,
        require:true,
    },
    
    productQunatity:{
        type:Number,
        require:true,
    },
});
  productSchema.set("timestamps", true);
module.exports =mongoose.model("product",productSchema);