
const nodemailer=require('nodemailer')
require('dotenv').config()
exports.sendMail=async(email,subject,text)=>{
    try{

        let transporter=nodemailer.createTransport(
            {
                host:process.env.NODEMAILERHOST,
                auth:{
                    user:process.env.NODEMAILERUSER,
                    
                    pass:process.env.NODEMAILERPASS
                },
                secure:false,
                
            }
           )
           
        let info=await transporter.sendMail({
            from:`${process.env.NODEMAILERUSER}`,
            to:`${email}`,
            subject:`${subject}`,
            html:`${text}`
        })
        console.log(info.response);
        console.log("Mail send to user");
    }catch(e){
       console.log("Somthing went wrong while sending mail to user"),
       console.log(e);
       
    }
    

}