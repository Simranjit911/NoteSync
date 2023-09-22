
import { Navigate, Outlet } from 'react-router-dom'

const Protected = () => {
    const token=localStorage.getItem("token")
  return (
    <div>
        {token?<Outlet/>:<Navigate to={"/signin"}/>}
    </div>
  )
}

export default Protected