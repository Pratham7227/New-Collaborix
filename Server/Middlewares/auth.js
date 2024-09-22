const jwt=require('jsonwebtoken')
const user=require('../Models/User')
const { log } = require('console')
require('dotenv').config()
exports.auth=async(req,res,next)=>{
   try{
      console.log("Inside AUth");
      const token=req.cookies.token ||  req.header("Authorization").replace("Bearer ","")
      console.log(token);
      if(!token){
        res.json({
            info:"Token is missing",
            success:false
        })
      }
      console.log("Enter in checking jwt token");
        try{
          const decode=await jwt.verify(token,process.env.JWT_SECRET_KEY)
          console.log(decode);
          req.user=decode
        }catch(e){
          return res.json({
            info:"Token is invalid",
            success:false
          })
        }
        console.log("Cheking done");
      
      next()
   }
   catch(e){
        return res.json({
        info:"Something went wrong in validating token",
        e
       })
   }
}
exports.isAdmin=async(req,res,next)=>{
    try{
        const userDetails=await user.findOne({email:req.user.email})
        if(!userDetails){
            return res.json({
                info:"No user found!"
            })
        }
        if(userDetails.user!=req.user.role){
          return  res.json({
                info:"This is protected route only visible to admin only"
            })
        }
        next()

    }catch(e){
       res.json({
        info:"Somthing went wrong in admin checking",
        error:e
       })
    }
}