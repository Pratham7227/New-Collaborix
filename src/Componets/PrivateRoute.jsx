
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export const PrivateRoute = ({children}) => {
    const {token} =useSelector((state)=>state.user)
    const navigate=useNavigate()
    if(token!=null){
        return children
    }else{
        navigate('/')
    }
  return (
    <div>PrivateRoute</div>
  )
}
