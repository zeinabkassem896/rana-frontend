
import { Outlet, Navigate } from 'react-router-dom'
export const ProtectedRouteAdmin = () => {
    let auth = localStorage.getItem('authToken') || null;
    let userType = localStorage.getItem('userType') || null; // Assuming userType is stored in localStorage
   
    return (
        auth != null && userType === 'Admin' ? <Outlet /> : <Navigate to="/accessDenied" />
       );
   };
   