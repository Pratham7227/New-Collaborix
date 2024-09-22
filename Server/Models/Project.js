
const mongoose=require('mongoose')

const projectSchema=new mongoose.Schema(
    {
        projectname:{
            type:String
        },
        projectdesc:{
            type:String
        },
        teammembers:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:'userSchema'
        }]
    }
)
module.exports=mongoose.model("projectSchema",projectSchema)