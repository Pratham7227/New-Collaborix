
import { apiConnector } from "./apiConector"
import { authApis,projectApis, taskApis } from "./apis"
import { setToken, setUserData } from "../../Redux/Store/Sliceses/user"
import  {  toast } from "react-hot-toast"
import { setEmpData, setEmpFullDetailsData, } from "../../Redux/Store/Sliceses/emp"
import { setProjectInfo } from "../../Redux/Store/Sliceses/project"



export function signupDone(data){
   return async()=>{
      const {firstname,lastname,email,password,confirmpassword,user}=data
      try{
         const toastid= toast.loading("please wait!")
          const res=await apiConnector('POST',authApis.signup,{firstname,lastname,email,password,confirmpassword,USER:user})
          console.log("Resposne from server:",res);
          toast.dismiss(toastid)
         if(res.data.success==false){
            toast.error(res.data.info)
            return
         }
         toast.success("Done!")
       }catch(e){
          toast.error(e)
       }

   }
     

}

export function loginDone(data,navigate){
   return async(dispatch)=>{
      const {email,password}=data
      try{
         const toastid=toast.loading("please wait!")

         const response=await apiConnector("POST",authApis.login,{email,password})
         console.log("API RESPONSE____",response);

         if(response.data.success==true){
            dispatch(setUserData(response.data.checkUserInDatabase))
            dispatch(setToken(response.data.token))

            localStorage.setItem('user',JSON.stringify(response.data.checkUserInDatabase))
            localStorage.setItem('token',JSON.stringify(response.data.token))

            toast.dismiss(toastid)
            toast.success("login successfull!")
            if(response.data.checkUserInDatabase.user=="admin"){
               navigate('/dashboard/ongoingproject')
            }else{
               navigate("/dashboard/task")
            }
         }else{
            toast.dismiss(toastid)
            toast.error(response.data.info)

         }
         
         
         


         
      }catch(e){
          toast.error(e)
      }
   }
}

export function logoutDone(navigate){
    return (dispatch)=>{
       localStorage.removeItem('user')
       localStorage.removeItem('token') 

       dispatch(setUserData(null))
       dispatch(setToken(null)) 
       
      navigate('/')
      toast.success("logout successfully!")

    }
}

export function getAllEmployees(token){
   return async(dispatch)=>{
         try{
            const toastid=toast.loading("Loading employees data..")
            console.log("TOKEN",token);
            
            const res=await apiConnector('GET',authApis.getAllEmployees,null,{
               "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`,
             })
             if(res.data.success==true){
                dispatch(setEmpData(res.data.employeeData))
                console.log("Data successfully getting");
                console.log("API RESPONSE_____",res.data)

                toast.dismiss(toastid)     
             }else{
                console.log("Not getting data");
             }
         }catch(e){
            console.log("ERROR",e);
            
         }
   }
}

export function createProject(projectname,projectdesc,adminid,token){
   console.log("PROJECT NAME:",projectname);
   console.log("PROJET DESCL",projectdesc);
   console.log("ADMIN ID:",adminid);
   console.log("token:",token);
   
   return async(dispatch)=>{
      try{
        const toastid=toast.loading("loading..")
        const res=await apiConnector("POST",projectApis.createProject,{projectname,projectdesc,adminid},
       {
         "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
       })
       if(res.data.success==true){
         toast.dismiss(toastid)
       
         localStorage.setItem('user',JSON.stringify(res.data.user))
         dispatch(setUserData(res.data.user))
         console.log("Project name created");
       }else{
         console.log("Project name is not created");
         
       }
      }catch(e){
        console.log(e);
        
      }
   }
}

export function addEmployees(projectid,employeeid,token){
   return async(dispatch)=>{
      try{
         const res=await apiConnector('PUT',projectApis.addTeamMembers,{projectid,employeeid,token},{
            
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
         })
         console.log("API RESPONSE______",res);
         
         if(res.data.success==true){
            toast.success("Employee Added!")
         }else{
            toast.error("Employee not Added")
         }
       }catch(e){
         console.log("Something went wrong");
         
       }

   }
}

export function getFullInformation(userid){
   return async (dispatch)=>{
      console.log("USER ID frontend:",userid);
      
      try{
          const res=await apiConnector('POST',authApis.getFullInformation,{userid})
         console.log("Api response-----",res);
         if(res.data.success==true){
            dispatch(setEmpFullDetailsData(res.data.user))
            console.log("emp full deatils fetch done!");  
           
         }else{
            console.log("Error in setting full info of user ion operration");
            
         }
         
      }catch(e){
        console.log("something went wrong in code in user setting full info");
        
      }
   }
}

export function getProjectDetails(projectid,token){
   return async(dispatch)=>{
      try{
         const res=await apiConnector("POST",projectApis.getProjecInfo,{projectid,token},{
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
         })
         console.log("RESPONSE API______",res);
         if(res.data.success==true){
            console.log(res.data.project);
            dispatch(setProjectInfo(res.data.project))
            console.log("Project data getting successfull");
         }else{
            console.log("Project data not getting successfull");
            
         }
      }catch(e){
           console.log("Something went wrong in getting full info of project");
                  
      }
   }
}

export function createTaskDone(data,token,employeeid,adminid){
    

   
   return async()=>{
       const {taskname,taskdesc,file,taskdeadline}=data
       console.log("taskname apicall:",taskname);
       console.log("taskdesc:",taskdesc);
       console.log("file:",file);
       console.log("date:",taskdeadline);
       console.log("employeeid:",employeeid);
       console.log("adminid:",adminid);
       
      try{
         const toastid=toast.loading("loading...")
         const res=await apiConnector('POST',taskApis.createtask,{taskname,taskdesc,img:file,date:taskdeadline,token,employeeid,adminid},{
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
         })
         console.log("API RESPONSE OF TASK>>>>>",res);
         if(res.data.success==true){
            toast.dismiss(toastid)
            toast.success(res.data.info)
            console.log("task created done!!");
         }else{
            toast.dismiss(toastid)
            toast.error(res.data.info)
         }
      }catch(e){
         console.log("Something went wrong",e);
         
      }
      
   }
}

export function taskWorkingDone(employeeid,token){
   return async()=>{
      try{
         const res=await apiConnector("PUT",taskApis.workingontask,{employeeid},{
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
         })
        console.log("API RESPONSE+++",res);
        if(res.data.success==true){
         console.log("API IS CORRECT");
        }else{
         console.log("API IS INCORRECT");
        }
      }catch(e){
        console.log("Something went wrong please check");
        
      }

   }
}

export function tasksubmitByEmployeeDone(data){
   const {whatyoudid,file,employeeid,token,taskid}=data
   console.log("whatyoudid:",whatyoudid);
   console.log("file:",file);
   console.log("employeeid:",employeeid);
   console.log("token:",token);
   console.log("taskid",taskid);
   
   
   return async()=>{
      try{
         const toastid=toast.loading("loading...")
       const res=await apiConnector("POST",taskApis.tasksubmitbyemployee,{whatyoudid,img:file,token,employeeid,taskid},{
         "Content-Type": "multipart/form-data",
         Authorization: `Bearer ${token}`,
      })
      console.log("API RESPONSE+++++",res)
      toast.dismiss(toastid)
      if(res.data.success==true){
         toast.success(res.data.info)
      }else{
         toast.error(res.data.info)
      }
      }catch(e){
       console.log("somwthingb went wrong please wait",e);
       
      }
   }
}

export function taskCheckByAdminDone(status,employeeid,token,taskid,submittaskid){
    console.log("status:::",status);
    console.log("taskid",taskid);
    console.log("token",token);
    console.log("employeeid",employeeid);
    
    
   return async(dispatch)=>{
      try{
        const res=await apiConnector("PUT",taskApis.taskcheckbyadmin,{taskStatus:status,employeeid,taskid,submittaskid},{
         "Content-Type": "multipart/form-data",
         Authorization: `Bearer ${token}`,
      })
      console.log("API RESPONSE ++++",res);

      if(res.data.success){
         console.log(res.data.info);
         toast.success("Response Recorded!")
      }else{
         console.log(res.data.info);
         toast.error("Something went wrong please wait")
         
      }
      
      }catch(e){
         console.log("Something went wrong please wait");
         console.log(e);
         
         
      }
   }
      

}

export function deleteProjectDone(projectid,userid,token){
   return async()=>{
      try{
         const res=await apiConnector("PUT",projectApis.deleteproject,{projectid,userid},{
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
         })
         console.log("API RESPONSE+++",res);

         if(res.data.success==true){
            toast.success("project data store successfully")
         }else{
            toast.error(res.data.info)
         }
         
      }catch(e){
       console.log("Something went wrong in front-end",e);
       
      }
   }
}