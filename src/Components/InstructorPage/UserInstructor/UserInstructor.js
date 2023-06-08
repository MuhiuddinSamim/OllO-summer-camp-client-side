import React, { useEffect, useState } from 'react';
import UseAxiosSecure from '../../Hooks/UseAxiosSecure';


const UserInstructor = () => {

    const [axiosSecure, refetch] = UseAxiosSecure();
    const [Instructors, setInstructor] = useState([]);

    useEffect(() => {
        axiosSecure.get('/Instructor')
            .then(response => {
                const Instructor = response.data;
                setInstructor(Instructor);
                console.log(Instructors);
            })
            .catch(error => {

            });
    }, []);
    return (
        <div>

        </div>
    );
};

export default UserInstructor;