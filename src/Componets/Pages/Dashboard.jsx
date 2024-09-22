import React from 'react'
import { Sidebar } from '../Sidebar'
import { Outlet } from 'react-router-dom'

export const Dashboard = () => {
  return (
    <div className="flex w-full min-h-[calc(100vh-4.0rem)] ">
        <Sidebar/>
        <div className="p-6 h-[calc(100vh-3.4rem)] overflow-auto w-full">
          <Outlet/>
        </div>
    </div>
  )
}
