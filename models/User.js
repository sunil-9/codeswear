const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
    name:{type:String, required: true},
    email:{type:String, required: true, unique: true},
    password:{type:String, required: true},
   
},{timestamps: true})
mongoose.models={}

export default mongoose.model("order", OrderSchema);