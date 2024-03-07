const jwt=require("jsonwebtoken")

const verify=async(req,res,next)=>{
    try {
        const token=req.headers.authorization
        const isVerified=jwt.verify(token,"secretkey");
        if(isVerified){
            console.log(isVerified)
            req.user = {...isVerified}
            req.body.userId=isVerified.id
            next()
        }else{
            res.status(401).send({auth:false,message:"Please login to access this route"})
        }
    } catch (error) {
        res.json({msg:"Something Went Wrong", error:error.message})
    }
}

module.exports={verify}