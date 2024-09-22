import React from 'react'
import { useSelector } from 'react-redux'
import { Bar, BarChart, CartesianGrid, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

export const ProjectOverview = () => {
    const {userData}=useSelector((state)=>state.user)
    console.log("Userdata is ",userData);
    
    const data=[
        {
           name:"OnGoing Projects",
           value:userData.projects.length
        },
        {
           name:'Completed Projects',
           value:userData.completedProject.length
        }
    ]
  return (
    <div className='flex justify-center items-center  flex-col h-5/6'>
        <p className='text-pure-greys-50 text-3xl mb-3'>Project Overview</p>

        <div className='text-pure-greys-50 text-center'>
            <h1 className='text-3xl font-semibold'>Comming Soon</h1>
            <p className=''>Stay tuned, we're launching something amazing!</p>
        </div>
        {/* <ResponsiveContainer height={100} width={100}>
        <BarChart width={600} height={600} data={data}>
          <Bar
            dataKey="value"
            isAnimationActive={false}
            
         
            fill='green'
            label
          />
          <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
         <Tooltip/>
          
        </BarChart>
        </ResponsiveContainer>
       */}
    </div>
  )
}
