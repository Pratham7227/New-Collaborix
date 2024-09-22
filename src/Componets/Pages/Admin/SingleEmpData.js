import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addEmployees } from '../../../Services/Opertions/User'

export const SingleEmpData = ({data}) => {
    const {userData}=useSelector((state)=>state.user)
    const {token}=useSelector((state)=>state.user)
    const dispatch=useDispatch()
    const employeeId=data._id
    console.log("USER DATA++++ :",userData);
    console.log("Employee Data +++",data);
    
    
    function handleAddButton(){
        const latestProjectId=userData.projects[userData.projects.length-1]._id
        console.log("PROJect id:",latestProjectId);

        
        dispatch(addEmployees(latestProjectId,employeeId,token))
    }
  return (
   
    <div className='flex flex-col xl:flex-row justify-between  border border-pure-greys-200 p-2 mb-2 w-full rounded-md '>
        <div className=' w-[10%] flex gap-2'>
            <p>{data.firstname.toUpperCase()}</p>
            <p>{data.lastname.toUpperCase()}</p>
         
        </div>
        <div className=' w-[20%]'>
            <p className=''>{data.email}</p>
        </div>
        {/* <div className=''>
            <button>View</button>
        </div> */}
        <div className=''>
            {data.isprojectAssigned==false ? <button className='bg-yellow-100 text-richblack-900 rounded-md px-3 py-1 font-medium' onClick={handleAddButton}>Add</button>: <div className='bg-caribbeangreen-100 w-fit rounded-md px-3 py-1 font-medium text-richblue-900'>Already On Project</div> }

        </div>
    </div>
  )
}
