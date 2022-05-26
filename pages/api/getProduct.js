import Product from "../../models/product"
import connectDb from "../../middleware/mongoose"
import product from "../../models/product"
import Tshirts from "../tshirts"

 const handler = async(req,res)=>{
     let products =await Product.find()
     let tshirts ={}
    for (let item of products) {
        if (item.title in tshirts){
            console.log(item.title)
            if(!tshirts[item.title].color.includes(item.color) && item.availableQty > 0){
                tshirts[item.title].color.push(item.color)
            }
            if(!tshirts[item.title].size.includes(item.size) && item.availableQty > 0){
                tshirts[item.title].size.push(item.size)
            }
        }else{
            tshirts[item.title]=JSON.parse(JSON.stringify(item))
            if(item.availableQty > 0){
                console.log(tshirts[item.title].color +" = "+ [item.color])
                tshirts[item.title].color = [item.color]
                tshirts[item.title].size = [item.size]
            }
        }
    }
    console.log(tshirts)
     res.status(200).json({tshirts})
 }

export default connectDb(handler) 