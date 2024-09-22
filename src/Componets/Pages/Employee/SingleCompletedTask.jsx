import React from 'react'

export const SingleCompletedTask = ({data}) => {
  return (
    <div className='bg-pure-greys-600 p-3 rounded-md  flex flex-col gap-1 text-pure-greys-50'>
        <p className='text-pure-greys-300 font-semibold'>Your Submission Info: <span className='text-pure-greys-50'>{data.whatyoudid}</span></p>
        <p className='text-pure-greys-300 font-semibold'>Submission Date: <span className='text-pure-greys-50'>{data.submissiondate.split('T')[0]}</span> </p>
        <p className='flex gap-2 items-center font-semibold'>Status: {data.submittaskstatus=="null"?(<p className='bg-yellow-100 px-3 py-1 rounded-md font-semibold w-fit text-richblack-900'>Pending</p>):(data.submittaskstatus=="Approved"?(<p className='bg-caribbeangreen-100 px-3 py-1 rounded-md font-semibold w-fit text-richblack-900'>{data.submittaskstatus}</p>):(<p className='bg-red-5 px-3 py-1 rounded-md font-semibold w-fit'>{data.submittaskstatus}</p>))}</p>
    </div>
  )
}
