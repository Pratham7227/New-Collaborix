
const cloudinary=require('cloudinary').v2
require('dotenv').config()
exports.cloudinaryConnection=(req,res)=>{
    try{
        const connect=cloudinary.config({
            cloud_name:process.env.CLOUD_NAME,
            api_key:process.env.API_KEY,
            api_secret:process.env.API_SECRET
        })
        console.log("connect to cloudinary");
    }catch(e){
      console.log("Not connected to cloudinary");
    }
}