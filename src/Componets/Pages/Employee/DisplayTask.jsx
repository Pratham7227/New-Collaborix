import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { taskWorkingDone } from '../../../Services/Opertions/User';

export const DisplayTask = ({data}) => {
    const date=data.duedate.split('T')[0]
    console.log("here is",date);
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const {userData}=useSelector((state)=>state.user)
    console.log("Employee data:",userData);
    
    function handleStartworkbutton(){
      dispatch(taskWorkingDone(userData._id,userData.token))
      navigate('/dashboard/submittask')
    }
    
  return (
    <div>
        <div className='text-2xl text-yellow-50 mb-2'>
          New task alert! Let's make it happen.
        </div>
        <div className='bg-richblack-800 w-fit p-2 rounded-md flex flex-col gap-2'>
            <div>
             <p className='text-richblack-300 font-bold'>TaskName:</p>
              <div>{data.taskname}</div>
            </div>

            <div>
                <p className='text-richblack-300 font-bold'>Taskdescription:</p>
                <p>{data.taskdesc}</p>
            </div>

            <div>
                <p className='text-richblack-300 font-bold'>Attached File:</p>
                <img src={data.file} className='w-5/6'/>
            </div>

            <div>
                <p className='text-richblack-300 font-bold'>Deadline Date:</p>
                <p>{date}</p>
            </div>
             {/* {
              userData.completedtask==null && <button className='bg-yellow-50 px-3 w-fit py-1 text-richblack-900 rounded-md font-semibold mt-2' onClick={handleStartworkbutton}>Start The Work!</button>
             }
             {
              userData.status==null?(<div className='w-fit bg-yellow-25 px-3 py-1 rounded-md text-richblack-900 font-semibold'>Pending</div>):(userData.status=='Approved'?(<div className='w-fit bg-caribbeangreen-50 px-3 py-1 rounded-md text-richblack-900 font-semibold'>Approved</div>):(<div className='w-fit bg-red-5 px-3 py-1 rounded-md text-richblack-900 font-semibold'>Not Approved</div>))
             } */}

             {
              userData.task.taskstatus==null?(<button className='bg-yellow-50 px-3 w-fit py-1 text-richblack-900 rounded-md font-semibold mt-2' onClick={handleStartworkbutton}>Start The Work!</button>):
              (
                userData.task.taskstatus=="pending" && <div className='bg-yellow-50 px-3 py-1  w-fit text-richblack-900 rounded-md font-semibold'>pending</div>
              )
             }

        </div>
    </div>

  )
}
