import React, { useEffect, useState } from 'react';
import UseAxiosSecure from '../../Hooks/UseAxiosSecure';
import InstructorPageDetails from '../InstructorPageDetails/InstructorPageDetails';
import InstructorPageCart from '../InstructorPageCart/InstructorPageCart';

const InstructorPage = () => {
    const [axiosSecure,] = UseAxiosSecure();
    const [Instructors, setInstructors] = useState([]);

    useEffect(() => {
        axiosSecure.get('/Instructor')
            .then(response => {
                const Instructors = response.data;
                setInstructors(Instructors);
                // console.log(Instructors);
            })
            .catch(error => {

            });
    }, []);

    return (
        <div className="w-11/12 md:10/12 mx-auto grid sm:grid-cols-1 
        md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 py-3 px-3">
            {Instructors.map((Instructor) =>
                <InstructorPageCart
                    key={Instructor._id}
                    Instructor={Instructor}
                ></InstructorPageCart>)}
        </div>
    );
};

export default InstructorPage;


