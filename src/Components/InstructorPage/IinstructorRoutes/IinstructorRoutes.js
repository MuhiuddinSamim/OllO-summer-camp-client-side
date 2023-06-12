import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';
import UseInstructor from '../../Hooks/UseInstructor';


const IinstructorRoutes = ({children}) => {

    const { User, Loading } = UseAuth();
    const location = useLocation();    
    const [isInstructor,isInstructorLoading] = UseInstructor();

    if (Loading || isInstructorLoading) {
        return <progress className="progress w-56"></progress>;
    }

    if (User && isInstructor) {
        return children;
    }


    return <Navigate to="/" state={{ from: location }}  replace />;
};


export default IinstructorRoutes;