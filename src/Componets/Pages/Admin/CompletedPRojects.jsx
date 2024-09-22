import React from 'react'
import { useSelector } from 'react-redux'
import { DisplaySingleProject } from './DisplaySingleProject'

export const CompletedPRojects = () => {
  const {userData}=useSelector((state)=>state.user)
  return (
    <div >
       <p className='text-3xl font-semibold text-pure-greys-50 mb-3 '>Your Projects</p>
       {
        userData.completedProject.length<=0?(<p className='text-pure-greys-200 text-center font-semibold'>No Project Are Created Yet!</p>):
        (
         <div className='flex flex-wrap gap-2'>
            {
              userData.completedProject.map((element)=>{
                return <DisplaySingleProject data={element}/>
              })
            }
         </div>
        )
       } 
    </div>
  )
}
