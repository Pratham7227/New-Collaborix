import React from 'react'
import { useSelector } from 'react-redux'
import { DisplayTask } from './DisplayTask'

export const Task = () => {
    const {userData}=useSelector((state)=>state.user)
  return (
    <div className='text-pure-greys-100'>
       <p className='text-3xl font-semibold '>Task</p>
        {
            userData.task==null?(<p className='text-pure-greys-300 mt-3 text-center'>"Nothing to do right now—enjoy the break!"</p>):
            (
              <div>
                 <DisplayTask data={userData.task}/>
              </div>
            )
        }
    </div>
  )
}
