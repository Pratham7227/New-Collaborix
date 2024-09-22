import React from 'react'
import { useSelector } from 'react-redux'
import { AddTaskToEmployees } from './AddTaskToEmployees'

export const AddTask = () => {
    const {project}=useSelector((state)=>state.project)
  return (
    <div>
     <h1 className='text-4xl text-pure-greys-50 '>Add Task</h1>
        {project==null?(<p className='font-semibold'>No data found</p>):
        (
            <div>
                <AddTaskToEmployees data={project}/>
            </div>
        )}
    </div>
  )
}
