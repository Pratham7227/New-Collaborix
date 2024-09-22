import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { taskCheckByAdminDone } from '../../../Services/Opertions/User';

export const ViewTask = () => {
     const {empFulldetailData} =useSelector((state)=>state.emp)
     const {userData} =useSelector((state)=>state.user)
     console.log("emp data",empFulldetailData);
    
    
     const dispatch=useDispatch()
     
     function handleApprovedButton(){
       
    
      
         const tempvalue="Approved"
         const submittaskid=empFulldetailData.completedtask[empFulldetailData.completedtask.length-1]._id
         dispatch(taskCheckByAdminDone(tempvalue,empFulldetailData._id,userData.token,empFulldetailData.task._id,submittaskid))
     


     }
     function handleNotApprovedButton(){

     
          const tempvalue="Not Approved"
          const submittaskid=empFulldetailData.completedtask[empFulldetailData.completedtask.length-1]._id
          dispatch(taskCheckByAdminDone(tempvalue,empFulldetailData._id,userData.token,empFulldetailData.task._id,submittaskid))
      


     }
  return (
    <div className='text-richblack-50 flex gap-2 '>
    {empFulldetailData==null?(<p>No response found</p>):
    (
      <div className='flex gap-4 flex-col'>
      <div className=' bg-richblack-800 p-2 flex flex-col gap-2'>
          <p className='text-yellow-50 text-2xl'>Assigned Task</p>
           <div>
              <p className='text-pure-greys-200  font-bold'>TaskName:</p>
              <p>{empFulldetailData.task.taskname}</p>
           </div>   
           <div>
             <p className='text-pure-greys-200  font-bold'>TaskDescription :</p>
             <p>{empFulldetailData.task.taskdesc}</p>
           </div>
           <div>
              <p className='text-pure-greys-200  font-bold'>File:</p>
              <img src={empFulldetailData.task.file} className='w-3/4'/>
           </div>
           <div>
             <p className='text-pure-greys-200  font-bold'>Due Date:</p>
             <p>{empFulldetailData.task.duedate.split('T')[0]}</p>
           </div> 
       </div>

       <div className=' bg-richblack-800 flex flex-col p-2 gap-2'>
          <p className='text-caribbeangreen-100 text-2xl'>Submited Task By {empFulldetailData.firstname} {empFulldetailData.lastname}</p>
          <div>
             <p className='text-pure-greys-200  font-bold'>Submited task Description :</p>
             <p>{empFulldetailData.completedtask[empFulldetailData.completedtask.length-1].whatyoudid}</p>
          </div>
          <div>
             <p className='text-pure-greys-200  font-bold'>Attached file</p>
             <img src={empFulldetailData.completedtask[empFulldetailData.completedtask.length-1].file} className='w-3/4'/>
          </div>
          <div>
            <p className='text-pure-greys-200  font-bold'>Submited date</p>
            <p>{empFulldetailData.completedtask[empFulldetailData.completedtask.length-1].submissiondate.split('T')[0]}</p>
          </div>
       </div>
       <div className='flex gap-2'>
       <button className='bg-caribbeangreen-50 w-fit rounded-md px-3 py-1 text-richblack-900 font-semibold' onClick={handleApprovedButton}>Approved</button>
       <button className='bg-red-5 rounded-md px-3 py-1 text-pure-greys-25 font-semibold w-fit' onClick={handleNotApprovedButton}>Not Approved</button>
       </div>
      </div>
    )}
       
    </div>
  )
}
