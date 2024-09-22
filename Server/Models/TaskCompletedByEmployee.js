const mongoose=require('mongoose')


const tasksubmitbyemployeeSchema=new mongoose.Schema(
    {
        whatyoudid:{
            type:String
        },
        file:{
            type:String
        },
        submissiondate:{
            type:Date,
            default:Date.now()
        },
        ispending:{
            type:Boolean,
            default:false
        },
        submittaskstatus:{
            type:String,
            enum:["Approved","Not Approved",'null']
        }
        
    }
)

module.exports=mongoose.model('tasksubmitbyemployeeSchema',tasksubmitbyemployeeSchema)