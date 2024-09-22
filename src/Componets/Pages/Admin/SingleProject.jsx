import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getProjectDetails } from '../../../Services/Opertions/User'

export const SingleProject = ({data}) => {
  const {userData}=useSelector((state)=>state.user)
  const {token}=useSelector((state)=>state.user)
  const navigate=useNavigate()
  const dispatch=useDispatch()
  function handleGetFullDetails(){
    navigate('/dashboard/addtask')
    dispatch(getProjectDetails(data._id,token))
  }
  const projectdesc=data.projectdesc.substr(0,25)
  return (
    <div className='bg-richblack-800 text-pure-greys-100 m-2  h-44 rounded-md w-72  p-3 flex flex-col gap-1'>
        <p className='text-pure-greys-25 font-medium'>ProjectName: <span className='text-pure-greys-200'>{data.projectname}</span></p>
        <p className='text-pure-greys-25 font-semibold'>ProjectDescription: <span className='text-pure-greys-200'>{projectdesc}...</span></p>
        <p className='text-pure-greys-25 font-semibold'>Admin: <span className='text-pure-greys-200'>{userData.firstname} {userData.lastname}</span></p>
        {/* <p className='text-pure-greys-25 font-semibold'>TeamSize:<span className='text-pure-greys-200'>{data.teammembers.length}</span></p> */}
        <button className='bg-yellow-50 px-3 py-1 rounded-md text-richblack-900 font-semibold' onClick={handleGetFullDetails}>Get Full Details</button>
    </div>
  )
}
