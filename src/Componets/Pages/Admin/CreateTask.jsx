import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { createTaskDone } from '../../../Services/Opertions/User'

export const CreateTask = () => {
    const {empData}=useSelector((state)=>state.emp)
    const {userData}=useSelector((state)=>state.user)
    const {token}=useSelector((state)=>state.user)
    const {register,reset,handleSubmit,formState:{errors,isSubmitSuccessful}}=useForm()
    const dispatch=useDispatch()
    function  handleTask(data){
        const formdata=new FormData()
        formdata.append("taskname",data.taskname)
        formdata.append("taskdesc",data.taskdesc)
        formdata.append("taskdeadline",data.deadlinedate)
        formdata.append("file",data.file[0])
        console.log("TASK DATA:",formdata);
        console.log('TASK DATA:');
        const formdataobj={}
        formdata.forEach((value, key) => {
            formdataobj[key]=value
        });
        dispatch(createTaskDone(formdataobj,token,empData._id,userData._id))
    }
    useEffect(()=>{
        if(isSubmitSuccessful){
            reset({
                taskname:"",
                taskdesc:"",
                file:"",
                deadlinedate:""
            })
        }
    },[isSubmitSuccessful])
  return (
    <div className=''>
       <p className='text-pure-greys-50 text-2xl font-semibold'>CreateTask</p>
       {empData==null?(<p>No data found</p>):
       (
        <div className='bg-richblack-800 text-pure-greys-50 p-2 flex flex-col'>
             <form>

             <div className='flex justify-between mb-2 flex-wrap'>
                <p>Id: {empData._id}</p>
                <p>EmployeeName: {empData.firstname}</p>
             </div>
            <div className='flex flex-col gap-3'>

                 <div className='flex flex-col'>
                   <label>TaskName:</label>
                    <input type='text' className='bg-richblack-600 p-2'{...register('taskname',{required:"task name cant empty!"})}/>
                    {errors.taskname && <p>{errors.taskname.message}</p>}
                 </div>

                <div className='flex flex-col'>
                    <label>Summary:</label>
                    <textarea className='w-full h-40 bg-richblack-600 p-2' {...register('taskdesc',{required:"task desc cant empty!"})}/>
                    {errors.taskdesc && <p>{errors.taskdesc.message}</p>}
                </div>

              
                 <div className=' flex flex-col sm:w-fit'>
                    <label>File:</label>
                    <input type='file' className='bg-richblack-600 p-2' {...register("file",{required:"file cant empty!"})}/>
                    {errors.file && <p>{errors.file.message}</p>}
                 </div>

                 <div className='flex items-center gap-4'>
                  <div className='flex flex-col w-fit'>
                    <label>Deadline Date:</label>
                    <input type='date' className='bg-richblack-600 p-2' {...register("deadlinedate",{required:"please mention deadline!"})}/>
                    {errors.deadlinedate && <p>{errors.deadlinedate.message}</p>}
                  </div>
                  <div className='mt-5'>
                    <button className='bg-yellow-50 text-richblack-900 px-3 py-1 font-semibold rounded-md' onClick={handleSubmit(handleTask)}>Create</button>
                  </div>
                 </div>

              

              </div>
               

               

             </form>
        </div>
       )}
     </div>
  )
}
