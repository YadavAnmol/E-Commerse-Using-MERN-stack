const express=require('express')
const cors = require('cors');
const app=express()
const mongoose=require("mongoose")
const dotenv=require('dotenv')
const userRoute=require("./routes/user")
const authRoute=require("./routes/auth")
const productRoute=require("./routes/product")
const orderRoute=require("./routes/order")
const cartRoute=require("./routes/cart")

dotenv.config()

mongoose.connect
(process.env.MONGO_URL)
.then(()=>console.log("DB connection successfull"))
.catch((err)=>{console.log(err)})

app.use(cors());
app.use(express.json());

app.use("/user/api/auth",authRoute);
app.use("/user/api/user",userRoute);
app.use("/user/api/product",productRoute);
app.use("/user/api/order",orderRoute); 
app.use("/user/api/cart",cartRoute);

app.listen(5000,()=>{
    console.log("Backend is running")
})