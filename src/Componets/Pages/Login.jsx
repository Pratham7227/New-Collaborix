import React, { useEffect } from 'react'
import loginpageimg from "../../../src/assets/Images/vecteezycyber_security-illustrationSS1221_generated.jpg"
import { useForm } from 'react-hook-form'
import { RiLoginCircleFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { Footer } from './Footer';
import { useDispatch, useSelector } from 'react-redux';
import { getFullInformation, loginDone } from '../../Services/Opertions/User';
import { useNavigate } from 'react-router-dom';
export const Login = () => {
  const {register,handleSubmit,reset,formState:{errors,isSubmitSuccessful}}=useForm()
  const dispatch=useDispatch()
  const navigate=useNavigate()

  const submitForm=async(data)=>{
    console.log(data);
    dispatch(loginDone(data,navigate))
  
  }
  useEffect(()=>{
    if(isSubmitSuccessful){
      reset({
        email:"",
        password:""
      })
    }
  },[reset,isSubmitSuccessful])
  return (
    <div className='flex   w-11/12 mx-auto mt-10 text-pure-greys-100 rounded-xl flex-col items-center justify-center gap-5'>


        <div className='h-96 flex items-center '>
            <form>

            <div className='flex justify-center items-center gap-2 mb-2'>
                <h1 className='text-center text-2xl'>Login</h1>
                <RiLoginCircleFill className='text-pure-greys-100 text-2xl'/>
            </div>

                <div className='flex flex-col font-medium'>
                  <label>Email:</label>
                  <input type='text' name='email' {...register('email',{required:"email is requried!"})} className='bg-transparent border-b-2 outline-none mb-1'/>
                  {errors.email && (<span className='text-red-5 font-bold mb-2'>{errors.email.message}</span>)}
                  <label>Password:</label>
                  <input type='password' name='password' {...register('password',{required:"password is requried!"})} className='bg-transparent border-b-2 outline-none mb-1'/>
                  {errors.password && (<span className='text-red-5 font-bold mb-2'>{errors.password.message}</span>)}
                  <button onClick={handleSubmit(submitForm)} className='bg-yellow-100 rounded-md text-richblack-800 font-medium mt-3'>Login</button>
                </div>

            </form>
        </div>
        <Footer/> 
    </div>
  )
}
