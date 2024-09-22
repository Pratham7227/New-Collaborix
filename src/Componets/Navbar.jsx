import React from 'react'
import img from '../assets/Logo/collaborix-high-resolution-logo-white-transparent.png'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logoutDone } from '../Services/Opertions/User'

export const Navbar = () => {
   const {token}=useSelector((state)=>state.user)
   const dispatch=useDispatch()
   const navigate=useNavigate()
   function handleLogout(){
      dispatch(logoutDone(navigate))
   }


  return (
    <div className='bg-richblack-800 w-full flex justify-between items-center p-3'>
         <div>
         <Link to={'/'}><img src={img}  className='w-[150px] sm:ml-9 sm:w-[200px]'/></Link> 
         </div>
         <div className='sm:mr-9 flex gap-4'>
         {
          token==null?(
            <div >
            <Link to={'/login'} className='bg-richblack-300 px-2 py-1 rounded-sm  font-semibold mr-2'>Login</Link> 
            <Link to={'/signup'} className='bg-yellow-50 px-2 py-1 rounded-sm font-semibold'>Signup</Link>
            </div>):
            (<div>
              <Link to={'/dashboard'} className='bg-richblack-300 px-2 py-1 rounded-sm  font-semibold mr-2'>Dashboard</Link> 
              <Link to={'/'} className='bg-yellow-50 px-2 py-1 rounded-sm font-semibold' onClick={handleLogout}>Logout</Link>
            </div>)
         }
           
         </div>
    </div>
  )
}
