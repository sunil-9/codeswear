import User from "../../models/user"
import connectDb from "../../middleware/mongoose"

 const handler = async(req,res)=>{
     if(req.method == 'POST'){
         console.log('the body is ')
             console.log(res.body)
             const p = new User(req.body)
            //  console.log(p)
            try {
                await p.save()
            } catch (error) {
                res.status(200).json({'msg':error})
                return;
            }
         
         res.status(200).json({'msg':"post requst"})
     }else{
        res.status(200).json({'msg':"sorry"})
     }
    //  res.status(200).json({'msg':"done"})
 }

export default connectDb(handler) 