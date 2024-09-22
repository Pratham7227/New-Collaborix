import React, { useEffect } from 'react'
import { RiLoginCircleFill } from "react-icons/ri";
import { Footer } from './Footer';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { signupDone } from '../../Services/Opertions/User';
export const Signup = () => {
    const {register,handleSubmit,reset,watch,formState:{errors,isSubmitSuccessful}}=useForm()
    const password=watch('password')
    const dispatch=useDispatch()

    const submitHandle = async (data)=>{
         console.log(data);
         dispatch(signupDone(data))
         console.log("data is send!");
         console.log("SUBMITVALUE:",isSubmitSuccessful);
         
         
    }

    useEffect(()=>{
        if(isSubmitSuccessful){
            reset({
                firstname:"",
                lastname:"",
                email:"",
                password:"",
                confirmpassword:""
            }
        )
        }
    },[isSubmitSuccessful,reset])
  return (
    <div className='w-11/12 flex flex-col justify-between items-center mx-auto mt-20 text-pure-greys-100 font-medium min-h-[500px]'>
       <div className='h-96 flex justify-center items-center'>
            <form>
                <div className='flex justify-center items-center gap-1 mb-5'>
                    <h1 className='text-2xl'>SignUp</h1>
                    <RiLoginCircleFill className='text-pure-greys-100 text-2xl'/>
                </div>
                <div className='flex flex-col gap-2'>
                     <div className='flex flex-row justify-center items-center gap-3 z' >
                        <div className='flex flex-col gap-2'>
                        <label>FirstName</label>
                        <input type='text' className='bg-transparent outline-none  border-b-2 w-full' name='' {...register('firstname',{required:'firstname can not be empty'})}/>
                         {errors.firstname && <span className='text-red-5 font-semibold'>{errors.firstname.message}</span>}
                        </div>

                        <div className='flex flex-col gap-2'>
                        <label>LastName</label>
                        <input type='text' className='bg-transparent outline-none  border-b-2 w-full' name='lastname' {...register('lastname',{required:"lastname can not be empty"})}/>
                        {errors.lastname && <span className='text-red-5 font-semibold'>{errors.lastname.message}</span>}
                        </div>

                     </div>
                     <div className='flex flex-col'>
                        <label>Email</label><input type='email' className='bg-transparent w-full outline-none  border-b-2 ' name='email' {...register('email',{required:'email can not be empty'})}/>
                        {errors.email && <span className='text-red-5 font-semibold'>{errors.email.message}</span>}
                     </div>

                     <div className='flex flex-col gap-1'>
                        <labe>Password</labe><input type='password' className='bg-transparent w-full outline-none  border-b-2 ' name='password' {...register('password',{required:'password can not be empty',minLength:{value:5,message:"password length must be > 5"},maxLength:{value:12,message:"password not be > 12"}})}/>
                        {errors.password && <span className='text-red-5 font-semibold'>{errors.password.message}</span>}
                        <labe>ConfirmPassword</labe><input type='password' className='bg-transparent w-full outline-none  border-b-2 ' name='confirmpassword' {...register('confirmpassword',{required:'password can not be empty',minLength:{value:5,message:"password length must be > 5"},maxLength:{value:12,message:"password not be > 12"},validate:value=>value===password || 'password is not matched!'})}/>
                        {errors.confirmpassword && <span className='text-red-5 font-semibold'>{errors.confirmpassword.message}</span>}
                     </div>

                     <div className='flex gap-2'>
                      
                        <label htmlFor='emp'>Employee</label><input type='radio' id='emp' value={'Employee'} name='user' checked={"checked"} {...register('user')}/>
                        <label htmlFor='admin'>Admin</label><input type='radio' id='admin' value={'Admin'} name='user' {...register('user')}/>
                     </div>

                     <button className='bg-yellow-100 text-richblack-800 rounded-md' onClick={handleSubmit(submitHandle)}>SignUp</button>

                </div>
            </form>
       </div>
      <Footer/>
    </div> 
  )
}
