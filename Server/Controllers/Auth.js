

const user=require('../Models/User')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
require('dotenv').config()
exports.signup=async(req,res)=>{
    try{
        const {firstname,lastname,email,password,confirmpassword,USER}=req.body;
        console.log(firstname);
        console.log(lastname);
        console.log(email);
        console.log(password);
        console.log(confirmpassword);
        console.log(USER);
        
        if(!firstname || !lastname || !email || !password || !confirmpassword || !USER){
          return  res.json({
                info:"Please fill the details",
                success:false
            })
        }
        if(password !=confirmpassword){
            return res.json({
                info:"Password is not matched",
                success:false,
            })
        }
        const checkInDbEmail=await user.findOne({email:email})
        if(checkInDbEmail){
           return res.json({
                info:"You already regitser!",
                success:false
            })
        }

        const hashpassword=await bcrypt.hash(password,10);
     

       
        
        const createEntryInDatabase=await user.create({firstname:firstname,lastname:lastname,email:email,password:hashpassword,user:USER.toLowerCase(),task:null,})
      
        return res.json({
            info:"User is created!",
            success:true
        })

    }catch(e){
       res.json({
        info:"Something went Wrong in that code",
        success:false,
        error:e,
       
       })
    }
}
exports.login=async(req,res)=>{
    try{
       const {email,password}=req.body
       //checking user in database
       if(!email || !password){
        return res.json({
            info:"Please fill the details",
            success:false
        })
       }
       const checkUserInDatabase=await user.findOne({email:email}).populate({path:"projects",populate:{path:"teammembers"}}).populate('task').populate('completedtask').populate('completedProject')

       if(!checkUserInDatabase){
          return res.json({
            info:"Please regitser",
            success:false
          })
       }
       const payload={
         email:checkUserInDatabase.email,
         role:checkUserInDatabase.user,
         id:checkUserInDatabase._id
       }
       const userPassword=checkUserInDatabase.password
       if(await bcrypt.compare(password,userPassword)){
             const token=jwt.sign(payload,process.env.JWT_SECRET_KEY,{expiresIn:'24h'})

             checkUserInDatabase.token=token
             checkUserInDatabase.password=undefined

             const options={
                expires:new Date(Date.now()+3*24*24*60*1000),
                httpOnly:true
             }

             res.cookie("token",token,options).json({
                info:"User Login successfull!",
                token,
                checkUserInDatabase,
                success:true
             })

       }else{
          res.json({
            info:"Password is not correct",
            success:false,
          })
       }


    }catch(e){
       res.json({
        info:"Login fail due to some problem",
        success:false
       })
    }
}