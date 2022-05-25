import Product from "../../models/product"
import connectDb from "../../middleware/mongoose"

 const handler = async(req,res)=>{
     if(req.method == 'POST'){
         for (let i = 0; i < req.body.length; i++) {
             const p = new Product({
                title: req.body[i].title,
                slug: req.body[i].slug,
                desc: req.body[i].desc,
                img: req.body[i].img,
                category: req.body[i].category,
                size: req.body[i].size,
                color: req.body[i].color,
                price: req.body[i].price,
                availableQty: req.body[i].availableQty
             })
            //  console.log(p)
            try {
                await p.save()
            } catch (error) {
                continue
            }
         }
         
     }else{
        res.status(200).json({'msg':"sorry"})
     }
     res.status(200).json({'msg':"done"})
 }

export default connectDb(handler) 