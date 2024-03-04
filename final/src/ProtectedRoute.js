import { Outlet, Navigate } from 'react-router-dom'

export const ProtectedRoute = () => {
      let auth = localStorage.getItem('authToken') || null;
      {console.log("tokkk ",auth)}
      return(
          auth != null ? <Outlet/> : <Navigate to="/login"/>
      )
  }
  