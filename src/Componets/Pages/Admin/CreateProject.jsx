import React from 'react'
import { useForm } from 'react-hook-form'
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { createProject, getAllEmployees, getFullInformation } from '../../../Services/Opertions/User';
export const CreateProject = () => {
    const {register,reset,handleSubmit,formState:{isSubmitSuccessful,errors}}=useForm()
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const {token}=useSelector((state)=>state.user)
    const {userData}=useSelector((state)=>state.user)
    function handleCreate(data){
        console.log(data);
        navigate('/dashboard/addemployees')
        dispatch(getAllEmployees(token))
        dispatch(createProject(data.projectname,data.projectdesc,userData._id,token))
        
    }
  return (
    <div className="text-pure-greys-100 flex gap-5 flex-wrap">
       <div className='flex flex-col md:w-2/4 gap-1 ' >
       <p className="text-2xl">Create Project</p>
          <label>Project Name</label>
          <input type='text' className='bg-richblack-600 p-1 rounded-md' {...register('projectname',{required:"please enter project name"})}/>
          {errors.projectname && <span className='text-red-5 font-semibold'>{errors.projectname.message}</span>}
          <label>Project Description </label>
          <textarea  type='text' className='bg-richblack-600 h-16 p-1 rounded-md' {...register('projectdesc',{required:"please mention description  of project"})}/>
          {errors.projectdesc && <span className='text-red-5 font-semibold'>{errors.projectdesc.message}</span>}
          <button className='bg-yellow-100 rounded-md p-1 text-richblack-900 'onClick={handleSubmit(handleCreate)}>Create</button>
       </div>

       <div className=''>
           <p className='text-2xl'>Instructions for Creating a Project Name and Description</p>
           <div className='text-richblack-400'>
             

              <div className='flex  items-center gap-1'>
              <FaStar className='text-yellow-50 text-5xl sm:text-[20px]'/>
              <p>Be Unique: Ensure the name is distinct and not similar to other existing projects to avoid confusion.</p>
              </div>

              <div className='flex  items-center gap-1 '>
              <FaStar className='text-yellow-50 text-5xl sm:text-[20px]'/>
              <p>Avoid Abbreviations: Use full words unless the abbreviation is widely recognized and understood.</p>
              </div>

              <div className='flex  items-center gap-1'>
              <FaStar className='text-yellow-50 text-5xl sm:text-[20px]'/>
              <p>Provide a Brief Overview: Start with a concise summary of what the project does. What problem does it solve or what need does it fulfill?</p>
              </div>

              <div className='flex  items-center gap-1'>
              <FaStar className='text-yellow-50 text-5xl sm:text-[20px]'/>
              <p>Highlight Key Features: List the main functionalities or unique features that make your project stand out.</p>
              </div>

              <div className='flex  items-center gap-1'>
              <FaStar className='text-yellow-50 text-5xl sm:text-[20px]'/>
              <p>Explain the Purpose: Articulate why this project is important or necessary. What value does it provide?</p>
              </div>
           </div>
       </div>
    </div>
  )
}
