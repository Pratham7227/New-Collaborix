import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setEmpData } from '../../../Redux/Store/Sliceses/emp'
import { getFullInformation } from '../../../Services/Opertions/User'

export const AddTaskTab = ({data}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function handleAddTask() {
    if (!data.istaskedAssigned) {
      dispatch(setEmpData(data))
      navigate('/dashboard/createtask')
    }
  }

  function handleViewTask() {
    if (data.isTaskedSubmit) {
      console.log("employee data:", data)
      dispatch(getFullInformation(data._id))
      navigate('/dashboard/viewtask')
    }
  }

  return (
    <div className='relative'>
      <div className='flex flex-col gap-1 lg:flex-row justify-between p-2 border bg-richblack-600 text-pure-greys-50'>
        <p className=' w-40'>{data.firstname} {data.lastname}</p>
        <p className=' w-72'> {data.email}</p>
        
        {/* Add Task Button */}
        <button 
          className={`${data.istaskedAssigned ? 'bg-caribbeangreen-600 cursor-not-allowed p-1 font-semibold' : 'bg-yellow-50 text-richblack-900 p-1 font-semibold'}`} 
          onClick={handleAddTask} 
          disabled={data.istaskedAssigned} // Disabled condition
        >
          Add Task
        </button>
        
        <p className={`${data.istaskedAssigned ? 'bg-caribbeangreen-600 cursor-not-allowed p-1' : ''}`}>
          Task Assigned!
        </p>
        
        <p className={`${data.isWorkingOnTask ? 'bg-caribbeangreen-600 cursor-progress p-1' : ''}`}>
          In Progress...
        </p>
        
        {/* View Task Button */}
        <button 
          onClick={handleViewTask} 
          className={`${data.isTaskedSubmit ? 'bg-caribbeangreen-600 cursor-pointer p-1' : 'cursor-not-allowed p-1'}`} 
          disabled={!data.isTaskedSubmit} // Disabled condition
        >
          View Task
        </button>
      </div>
    </div>
  )
}
