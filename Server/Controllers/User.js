
const user=require('../Models/User')
exports.getFullInformation=async(req,res)=>{
    try{
        const {userid}=req.body
        console.log("BACKEND USER ID:");
        
        console.log(userid);
        
            const getInfoUser=await user.findById({_id:userid}).populate({path:"projects",populate:{path:"teammembers"}}).populate('completedtask').populate('task')
            console.log(getInfoUser);
       
          
        
            console.log("getting full deatils");
 
        if(!getInfoUser){
          return  res.json({
                info:"No user found",
                success:false
            })
        } 
        console.log("Inside");
        res.json({
            success:true,
            info:"user details is shown below:",
            user:getInfoUser,
        })
        console.log("outside");
    }catch(e){
        res.json({
            success:false,
            info:"something went wrong in getInfoUser",
            e
        })
    }
}
exports.getAllEmployees=async(req,res)=>{
    try{
        const employees=await user.find({user:'employee'})
        if(employees){
           res.json({
             success:true,
             employeeData:employees,
             info:"data get successfully"
           })
        }else{
            res.json({
                success:false,
                info:"not getting data"
            })
        }
    }catch(e){
        res.json({
            success:false,
            info:"something went wrong getting all employees"
        })
    }

}