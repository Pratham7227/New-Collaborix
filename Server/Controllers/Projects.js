

const project=require('../Models/Project')
const user=require("../Models/User")
exports.createProject=async(req,res)=>{
    try{
       const {projectname,projectdesc,adminid}=req.body
       console.log(projectname);
       console.log(projectdesc);

       if(!projectname || !projectdesc){
        return res.json({
            info:"Please fill thsi details",
            success:false
        })
       }
       console.log("Crating project");
       const craetenewProject=await project.create({projectname:projectname,projectdesc:projectdesc})
       console.log("Crating project done");
       const updateProjectOnAdmin=await user.findByIdAndUpdate({_id:adminid},{$push:{projects:craetenewProject._id}},{new:true}).populate({path:"projects",populate:{path:"teammembers"}})
       console.log("updat on user project done");
       if(!craetenewProject){
          res.json({
            info:"Not creating project name",
            success:false

          })
       }
       res.json({
        info:"Project name created!",
        user:updateProjectOnAdmin,
        success:true
       })

       

    }catch(e){
        res.json({
            info:"Something went wrong in that creating project",
            success:false
        })
    }
}

exports.addTeamMate=async(req,res)=>{
    try{
       const {projectid,employeeid}=req.body
       console.log("PROJECT ID:",projectid);
       console.log("EMP ID:",employeeid);
       
       if(!projectid){
          res.json({
            info:"Not getting project id",
            success:false
          })
       }

       const getProject=await project.findByIdAndUpdate({_id:projectid},{$push:{teammembers:employeeid},},{new:true})
       const updateonisprojectedAssigned=await user.findByIdAndUpdate({_id:employeeid},{isprojectAssigned:true})
       res.json({
        info:"Team member added successfully!",
        success:true
       })

    }catch(e){
       res.json({
        info:"Something went wrong in adding teammamtes!",
        success:false,
       })
    }
}

exports.getProjectDetails=async(req,res)=>{
    const {projectid}=req.body;
    try{
        const getProject=await project.findById({_id:projectid}).populate('teammembers')
        if(!getProject){
            res.json({
                success:false,
                info:"project info not getting"
            })
        }
        res.json({
            project:getProject,
            success:true
        })
    }catch(e){
        res.json({
            info:"Something went wrong",
            success:false
        })
    }
}

exports.deleteProject=async(req,res)=>{
    try{
       const {projectid,userid}=req.body
       console.log("Projectid",projectid);
       console.log("Usertid",userid);
       console.log("Start");
       const updateProjectOfUser=await user.findByIdAndUpdate({_id:userid},{$pull:{projects:projectid}})
       console.log("update on userproject delete done!");
       const updateProjectOfUserCompleted=await user.findByIdAndUpdate({_id:userid},{$push:{completedProject:projectid}})
       console.log("Update on completed projects is done");
       const findproject=await project.findById({_id:projectid})

       //copy all teammates userid
       const teamMembersUserId= findproject.teammembers.map(user=>user._id)
       console.log("userid",teamMembersUserId);
       
      await user.updateMany(
        {_id:{$in:teamMembersUserId}},
        {$set:{isprojectAssigned:false}}
       )
       console.log("last done");
       
       
       res.json({
        info:"project delete successfully",
        success:true,
       
       })
       
    }catch(e){
       res.json({
        info:"something went wrong",
        success:false,
        error:e
       })
    }
}