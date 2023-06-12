import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import UseAuth from '../../../Hooks/UseAuth';
import UseAdmin from '../../../Hooks/UseAdmin';

const AdminRoute = ({children}) => {

    const { User, Loading } = UseAuth();
    const location = useLocation();    
    const [isAdmin,isAdminLoading] = UseAdmin();

    if (Loading || isAdminLoading) {
        return <progress className="progress w-56"></progress>;
    }

    if (User && isAdmin) {
        return children;
    }


    return <Navigate to="/" state={{ from: location }}  replace />;
};

export default AdminRoute;