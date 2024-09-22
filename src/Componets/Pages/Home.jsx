import React from 'react'
import { Navbar } from '../Navbar'
import { BsFillLightningChargeFill } from "react-icons/bs";
import { BiCheckShield } from "react-icons/bi";
import { FaRegLightbulb } from "react-icons/fa";
import { Footer } from './Footer';

export const Home = () => {
  return (
    <div className=''>
       

         {/* section1 */}
         <div className='w-11/12 mx-auto flex justify-center mt-16 flex-col items-center gap-3'>
               <div>
                    <h1 className='text-pure-greys-50 text-3xl'>What is <span className='text-yellow-50'>Collaborix ?</span></h1>
               </div>
               <div className='text-pure-greys-50 text-center sm:w-[60%]'>
                  <p>Collaborix is an innovative task management and collaboration tool designed to enhance productivity and streamline team interactions. With Collaborix, you can efficiently manage projects, track tasks, and communicate with your team—all in one integrated platform.</p>
               </div>
               <div className='my-4'>
                  <h1 className='text-pure-greys-50 text-3xl' >Key <span className='text-yellow-50'>Features</span>
                  </h1>
               </div>

               <div className='flex justify-center items-center flex-wrap gap-4 sm:gap-10'>

                   <div className='bg-richblack-800 bg-opacity-50 flex flex-col items-center h-[250px] w-[65%] p-2 sm:w-[250px] text-pure-greys-50 rounded-md gap-3'>
                        <h1 className='text-center font-semibold '>User Authentication and Authorization</h1>

                       <div className='flex items-center justify-center gap-2'>
                          <p><BsFillLightningChargeFill  className='text-yellow-50 text-2xl'/></p>
                          <p className=''>Secure sign-up, login, and logout functionality.</p>
                       </div>

                       <div className='flex items-center justify-center gap-2'>
                         <p><BsFillLightningChargeFill className='text-yellow-50 text-2xl'/></p>
                          <p>Role-based access control for different user levels (Admins and Team Members).</p>
                       </div>
                   </div>

                   <div className='bg-richblack-800 bg-opacity-30 flex flex-col items-center h-[250px] w-[65%] p-2 sm:w-[250px] text-pure-greys-50 rounded-md gap-3'>
                        <h1 className='text-center font-semibold p-2'>Dashboard</h1>

                       <div className='flex items-center justify-center gap-2'>
                          <p><BsFillLightningChargeFill  className='text-yellow-50 text-2xl'/></p>
                          <p className=''>Provides an overview of projects and tasks.</p>
                       </div>

                       <div className='flex items-center justify-center gap-2'>
                         <p><BsFillLightningChargeFill className='text-yellow-50 text-2xl'/></p>
                          <p>Displays recent activities and notifications to keep users updated.</p>
                       </div>
                   </div>

                   <div className='bg-richblack-800 bg-opacity-60 flex flex-col items-center h-[250px] w-[65%] p-2 sm:w-[250px] text-pure-greys-50 rounded-md gap-3 '>
                        <h1 className='text-center font-semibold p-2'>Project Management</h1>

                       <div className='flex items-center justify-center gap-2'>
                          <p><BsFillLightningChargeFill  className='text-yellow-50 text-2xl'/></p>
                          <p className=''>Create, view, update, and delete projects.</p>
                       </div>

                       <div className='flex items-center justify-center gap-2'>
                         <p><BsFillLightningChargeFill className='text-yellow-50 text-2xl'/></p>
                          <p>Assign team members, set deadlines, and track milestones.</p>
                       </div>
                   </div>
               </div>
         </div>
         {/* section2 */}
         <div className='w-11/12 mx-auto flex justify-center mt-16 flex-col items-center gap3 p-7'>
            <div>
                <h1  className='text-pure-greys-50 text-3xl mb-10' >Benefits</h1>
            </div>
            <div className='grid md:grid-cols-6 gap-3'>
                  <div className='box1 bg-pure-greys-500 rounded-md flex justify-center gap-4 p-2 items-center md:col-span-2 h-[200px]'>
                      <p><BiCheckShield className='text-4xl text-pure-greys-100'/></p>
                      <p className='text-pure-greys-25 font-medium'>Enhanced Productivity: Streamline task and project management with an intuitive dashboard.</p>
                  </div>

                  <div className='box2 bg-yellow-50 flex justify-center items-center rounded-md md:col-span-2 gap-4  h-[200px] p-2'>  <p><BiCheckShield className='text-4xl text-richblack-800'/></p>
                  <p className='text-richblack-800 font-medium'>Improved Communication: Foster team collaboration through real-time chat and file sharing.</p></div>

                  <div className='box3 bg-pure-greys-500 rounded-md  md:row-span-2 md:col-span-2 flex justify-center items-center gap-4 p-2 h-[200px] md:h-[100%]'>     <p><BiCheckShield className='text-4xl text-pure-greys-100'/></p>
                  <p className='text-pure-greys-25 font-medium'>Efficient Task Prioritization: Organize tasks by priority, due dates, and status to ensure the most critical work is completed first.</p></div>

                  <div className='box4 bg-yellow-50 rounded-md md:col-span-4 flex justify-center items-center gap-4 h-[200px] p-2'>  <p><BiCheckShield className='text-4xl text-richblack-800'/></p>
                  <p className='text-richblack-800  font-medium'>Real-Time Updates: Get instant updates on task progress, project changes, and team activities to stay informed.</p></div>
            </div>
         </div>
         {/* section3 */}
         <div className='w-11/12 mx-auto flex justify-center items-center mt-10 flex-col '>
          <h1 className='text-pure-greys-50 text-3xl mb-10'>How it <span className='text-yellow-50'>Works?</span></h1>
            <div className='text-richblack-50 flex flex-col gap-4 mb-16'>
               <div className='flex justify-center items-center gap-2 '>
                  <p><FaRegLightbulb className='text-yellow-50 text-3xl'/></p>
                  <p>Create Projects and Assign Tasks:
                  Set up projects and break them into tasks. Assign tasks to team members with clear deadlines and priorities.</p>
               </div>

               <div className='flex  items-center gap-2 '>
               <p><FaRegLightbulb className='text-yellow-50 text-3xl'/></p>
                  <p>Track Progress:
                  Use the dashboard to view project and task statuses, monitor progress, and stay updated with recent activities.</p>
               </div>

               <div className='flex  items-center gap-2'>
               <p><FaRegLightbulb className='text-yellow-50 text-3xl'/></p>
                  <p>Communicate via Chat:
                  Engage in real-time conversations and share updates directly within the platform to keep everyone on the same page.</p>
               </div>

               <div className='flex  items-center gap-2'>
               <p><FaRegLightbulb className='text-yellow-50 text-3xl'/></p>
                  <p>Create Projects and Assign Tasks:
                  Set up projects and break them into tasks. Assign tasks to team members with clear deadlines and priorities.</p>
               </div>

               <div className='flex  items-center gap-2'>
               <p><FaRegLightbulb className='text-yellow-50 text-3xl'/></p>
                  <p>Share Documents:Upload and attach files to tasks and projects for easy access and collaboration.</p>
               </div>

               <div className='flex   items-center gap-2'>
               <p><FaRegLightbulb className='text-yellow-50 text-3xl'/></p>
                  <p>Analyze Performance:Generate reports and visualize data to assess project progress and team performance.
                  Make Data-Driven Decisions:</p>
               </div>
            </div>

            <Footer/>
         </div>
    </div>
  )
}
