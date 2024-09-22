const mongoose=require('mongoose')


const taskSchema=new mongoose.Schema(
    {
        taskname:{
            type:String
        },
        taskdesc:{
            type:String
        },
        file:{
            type:String
        },
        employeeid:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"userSchema"
        },
        adminid:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"userSchema"
        },
        duedate:{
            type:Date
        },
        taskstatus:{
            type:String,
            enum:['Approved','Not Approved','pending']
        }
    }
)

module.exports=mongoose.model('taskSchema',taskSchema)   