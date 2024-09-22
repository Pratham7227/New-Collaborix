import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { tasksubmitByEmployeeDone } from '../../../Services/Opertions/User'

export const SubmitTask = () => {
    const {register,handleSubmit,reset,formState:{errors,isSubmitSuccessful}}=useForm()
    const {userData}=useSelector((state)=>state.user)
    const dispatch=useDispatch()

    function submitTask(data){
        const formdata=new FormData()
        formdata.append('whatyoudid',data.whatyoudid)
        formdata.append('file',data.file[0])

        const empdata={
            employeeid:userData._id,
            token:userData.token,
            taskid:userData.task._id
        }

        formdata.forEach((value,key)=>{
            empdata[key]=value
        })

        console.log("EMPLOYEE DATA:",empdata);
        dispatch(tasksubmitByEmployeeDone(empdata))
        
              
    }

    useEffect(()=>{
        if(isSubmitSuccessful){
            reset({
                whatyoudid:"",
                file:""
            })
        }
    },[isSubmitSuccessful])
  return (
    <div>
        <form>
        <div className='flex flex-col gap-2 text-pure-greys-50'>
            <div className='flex flex-col gap-1'>
             <label>Briefly explain what you did in the task!</label>
              <textarea  {...register("whatyoudid",{required:"this is requried!"})} className='h-32 bg-richblack-600 p-1'/>
              {errors.whatyoudid && <p>{errors.whatyoudid.message}</p>}
            </div>
 
             <div className='flex flex-col'>
               <label>Upload Document</label>
               <input type='file' {...register("file",{required:"this is requried!"})}/>
               {errors.file && <p>{errors.file.message}</p>}
             </div>
             

             <button className='bg-yellow-50 px-3 py-1 rounded-md font-semibold w-fit text-richblack-900 mt-2' onClick={handleSubmit(submitTask)}>Submit</button>
         </div>
        </form>
    </div>
  )
}
