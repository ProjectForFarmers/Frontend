import  {useLocation, Navigate, Outlet} from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const RequireAuth = ({allowedRoles}) => {
    const {auth} = useAuth();
    const location = useLocation();
    console.log('auth.roles', auth.roles[0]);
    
        if (auth?.roles?.find(role => allowedRoles?.includes(role))) {
         return   <Outlet /> 
        } else if (auth?.email) {
         return   <Navigate to="/unauthorized" state={{ from: location }} replace />
        } else { return <Navigate to="/login" state={{ from: location }} replace />}


        // auth?.roles?.find(role => allowedRoles?.includes(role)) ? <Outlet />
        //     : auth?.email
        //         ? <Navigate to="/unauthorized" state={{ from: location }} replace />
        //         : <Navigate to="/login" state={{ from: location }} replace />
  

}

export default RequireAuth;
