const mongoose=require('mongoose')

const OrderSchema=new mongoose.Schema({
    userId:{type:String,required:true,unique:false},
    products:[
        {
            productId:{
                type:String
            },
            quantity:{
                type:Number,
                default:1,
            },
    }],
    amount:{type:Number,required:true},
    address:{type:Object,required:true},
    status:{ type :String,default:"pending"}
},
{timestamps:true}
) 

const YourModel=mongoose.model("Order",OrderSchema);

YourModel.collection.dropIndex('userId_1');
YourModel.collection.createIndex({ userId: 1 }, { unique: false });

module.exports=YourModel