import React from 'react'
import { useSelector } from 'react-redux'
import { SingleProject } from './SingleProject'
import { TfiFaceSad } from "react-icons/tfi";
export const OnGoingProject = () => {
   const {userData}=useSelector((state)=>state.user)
   console.log("on going project user data is :",userData);
   
  return (
    <div>
      <p className='text-pure-greys-100 text-3xl font-semibold mb-3'> On Going Projects</p>
       {
        userData?.projects?.length<=0?(
        <div className='text-pure-greys-300 mt-6 flex gap-2 justify-center items-center'>
         <p>Projects Are Not Created</p>
         <TfiFaceSad />
        </div>):(
        <div className='bg-richblack-600 flex flex-wrap'>
           {userData?.projects.map((element)=>{
            return <SingleProject data={element}/>
           })}
        </div>)
       }
    </div>
  )
}
