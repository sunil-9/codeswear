import Product from "../../models/product"
import connectDb from "../../middleware/mongoose"

 const handler = async(req,res)=>{
     if(req.method == 'POST'){
         for (let i = 0; i < req.body.length; i++) {
        let p= await Product.findByIdAndUpdate(req.body[i]._id,req.body[i])
         }
     }else{
        res.status(200).json({'msg':"sorry!"})
     }
     let products =await Product.find()
     res.status(200).json({'msg':"done"})
 }

export default connectDb(handler) 