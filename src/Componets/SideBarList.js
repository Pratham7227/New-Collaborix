import React from 'react'
import { Link } from 'react-router-dom'

export const SideBarList = ({data}) => {
  return (
    <div className="flex  gap-2  items-center">
    <p className="text-yellow-50">{data.icon}</p>
    <Link to={data.path}>{data.name}</Link>
    
    </div>
  )
}
