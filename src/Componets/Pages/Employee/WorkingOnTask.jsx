import React from 'react'
import { useSelector } from 'react-redux'
import { SubmitTask } from './SubmitTask'
import { SingleCompletedTask } from './SingleCompletedTask'

export const WorkingOnTask = () => {
    const {userData}=useSelector((state)=>state.user)
  return (
    <div className='text-pure-greys-50 font-semibold '>
        <p className='text-3xl mb-3'>Task Submission Board</p>
         {
           userData.completedtask.length<=0?(<p>No task recorded!</p>):
           (
            <div className='flex flex-wrap gap-2'>
               {userData.completedtask.map((element)=>{
                 return <SingleCompletedTask data={element}/>
               })}
            </div>
           )

         }
    </div>
  )
}
