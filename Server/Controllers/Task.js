const { fileUploadOnCloud } = require("../Utils/FileUploadOnCloud");
const task=require('../Models/Task')
const user=require('../Models/User');
const { sendMail } = require("../Utils/SendMail");
const submittedTaskEmployee=require('../Models/TaskCompletedByEmployee')
const schedule=require('node-schedule')
require('dotenv').config()

exports.createTask=async(req,res)=>{
    try{
        const {employeeid,adminid,taskname,taskdesc,date}=req.body;
        const file=req.files.img;

        console.log("EmployeeId:",employeeid);
        console.log("AdminId:",adminid);
        console.log("TaskName:",taskname);
        console.log("Taskdesc:",taskdesc);
        console.log("FILE:",file);

     

        const formateDate=new Date(date)
        
        
        const cloudinaryResponse=await fileUploadOnCloud(file,process.env.FOLDER_NAME)
        console.log("CLOUD RESPONSE:",cloudinaryResponse);

        const createTask=await task.create({taskname:taskname,taskdesc:taskdesc,employeeid:employeeid,adminid:adminid,file:cloudinaryResponse.secure_url,duedate:formateDate,taskstatus:null})

        console.log("TASK IS CREATED");
        //update on employee task
        const updateEmployeeTask=await user.findByIdAndUpdate({_id:employeeid},{task:createTask._id})
        //change status of tasked
        if(updateEmployeeTask.status=="Approved" || updateEmployeeTask=="Not Approved"){
            await user.findByIdAndUpdate({_id:employeeid},{status:null})
        }
        console.log("TASK IS ADDED TO EMPLOYEE");
        const updateIstaskedAssigned=await user.findByIdAndUpdate({_id:employeeid},{istaskedAssigned:true},{new:true})

        const mailsend=await sendMail(updateEmployeeTask.email,"NEW TASK IS ASSIGNED!","Complete this task before deadline")
        
        const currentDate=new Date()

        console.log("CURRENT DATE:",currentDate);
        console.log("DEAD LINE DATE:",formateDate);
        

        const miliSecondsOfDealineDate=formateDate.getTime()
        const miliSecondsOfCurrentDate=currentDate.getTime()


        const setNotification=(miliSecondsOfCurrentDate+miliSecondsOfDealineDate)/2

        const setReminder=new Date(setNotification)

        
        console.log("REMINDER DATE:",setReminder);
        
        await schedule.scheduleJob('job',setReminder.toString(),async()=>{
            await sendMail(updateEmployeeTask.email,"please complete the task before dealine","Please complete")
        })
        

        res.json({
            info:"task is created",
            ReminderDate:setReminder,
            success:true
        })



    }catch(e){
        info:"Something went wrong in creating task"
        success:false
    }
}
exports.taskSubmittedByEmployee=async(req,res)=>{
    const{whatyoudid,employeeid,taskid}=req.body
    const file=req.files.img
    
    try{
        console.log("1");
    
    if(!whatyoudid || !file){
        res.josn({
            info:"Please upload file of you task and add what you did please!"
        })
    }
    console.log("2");
    const responseFromCloudinary=await fileUploadOnCloud(file,process.env.FOLDER_NAME)
    console.log("3");
    const submittedTask=await submittedTaskEmployee.create({whatyoudid:whatyoudid,file:responseFromCloudinary.secure_url,submittaskstatus:"null"})
    console.log("4");
    //update on user model like updating submitted task
    const updatesubmittaskidstatus=await submittedTaskEmployee.findByIdAndUpdate({_id:submittedTask._id},{ispending:true})
    const updateUser=await user.findByIdAndUpdate({_id:employeeid},{$push:{completedtask:submittedTask._id}})
    const updatetaskstatus=await task.findByIdAndUpdate({_id:taskid},{taskstatus:"pending"})
    console.log('5');
    
    const updateUserTask=await user.findByIdAndUpdate({_id:employeeid},{isTaskedSubmit:true})
    console.log("6");

    res.json({
        info:"Tasked send from employee to admin DONE!",
        success:true
    })
    }catch(e){
        res.json({
            info:"Something went wrong while upload task from employee",
            error:e
            
        })
    }


}
exports.checkingTaskByAdmin=async(req,res)=>{
    const {taskStatus,employeeid,taskid,submittaskid}=req.body
    console.log("status:",taskStatus);
    console.log("employeeid:",employeeid);
    console.log("taskid",taskid);
    
    
    try{
        if(!taskStatus || !employeeid){
            res.json({
                success:false,
                info:"Please fill the details"
            })
        }
    
        const employee=await user.findByIdAndUpdate({_id:employeeid},{task:null,istaskedAssigned:false,isTaskedSubmit:false,isWorkingOnTask:false})
        const checkingTaskStatus=await task.findByIdAndUpdate({_id:taskid},{taskstatus:taskStatus})
        if(taskStatus=="Approved"){
           const updateSubmittaskStatus=await submittedTaskEmployee.findByIdAndUpdate({_id:submittaskid},{submittaskstatus:"Approved"})
           console.log('Task is Approved IN BE');
           
        }else if(taskStatus=="Not Approved"){
           const updateSubmittaskStatus=await submittedTaskEmployee.findByIdAndUpdate({_id:submittaskid},{submittaskstatus:"Not Approved"})
           console.log('Task is NOT Approved IN BE');
        }
        res.json({
            success:true,
            info:"YES TASKED IS APPROVED!",
            user:employee
        })
    }catch(e){
        res.json({
            info:"Something went wrong while approved from admin"
        })
    }
}
exports.workingOnTask=async(req,res)=>{
  try{
    const {employeeid}=req.body

    const findUser=await user.findByIdAndUpdate({_id:employeeid},{isWorkingOnTask:true})

    res.json({
        info:"Task in progress",
        success:true
    })
  }catch(e){
     res.json({
        info:"Something went wrong in working on task ",
        success:false
     })
  }
}