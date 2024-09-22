import React from 'react'

export const DisplaySingleProject = ({data}) => {
  return (
    <div className='bg-pure-greys-400 p-3 rounded-md text-richblack-900 flex gap-1 flex-col'>
       <p className='font-semibold'>Project Name:<span>{data.projectname}</span></p>
       <p className='font-semibold'>Project Description:<span>{data.projectdesc}</span></p>
       <p className='font-semibold'>Team Size :<span>{data.teammembers.length}</span></p>
       <p className='font-semibold'>Status:<span className='bg-caribbeangreen-100 ml-1 font-semibold px-3 py-1 rounded-md '>Completed</span></p>
    </div>
  )
}
