import React from 'react'
import { AddTaskTab } from './AddTaskTab'
import { useDispatch, useSelector } from 'react-redux';
import { deleteProjectDone } from '../../../Services/Opertions/User';

export const AddTaskToEmployees = ({data}) => {
    console.log("PROJECT DATA:",data);
    const {token}=useSelector((state)=>state.user) 
    const {userData}=useSelector((state)=>state.user) 
    const dispatch=useDispatch()
    function handleCompleteButton(){
       dispatch(deleteProjectDone(data._id,userData._id,token))
    }
  return (
    <div className='mt-3 flex flex-col gap-2'>
       <p className='text-pure-greys-100 font-semibold'>ProjectName:<span className='text-pure-greys-200'>{data.projectname}</span></p>
       <p className='text-pure-greys-100 font-semibold'>ProjectDescription:<span className='text-pure-greys-200'>{data.projectdesc}</span></p>
       <p className='text-pure-greys-100 font-semibold'>TeamSize:<span className='text-pure-greys-200'>{data.teammembers.length}</span></p>
       <p className='text-pure-greys-100 font-semibold'>"If your project work is completed, mark it as 'Complete' and store it under 'Completed Projects.<span className='ml-2'><button className='bg-yellow-50 text-richblack-900 font-semibold px-3 py-1 rounded-md' onClick={handleCompleteButton}>Complete</button></span></p>
       {
        data.teammembers.length==0?(<div className='text-red-5 font-semibold '>team member not addeed!</div>):
        (
          data.teammembers.map((element)=>{
            return <AddTaskTab data={element}/>
        })
        )
        
       }
    </div>
  )
}
