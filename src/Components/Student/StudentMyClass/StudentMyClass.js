import React, { useEffect, useState } from 'react';
import UseAxiosSecure from '../../Hooks/UseAxiosSecure';
import UseAuth from '../../Hooks/UseAuth';

const StudentMyClass = () => {


    const [axiosSecure] = UseAxiosSecure();
    const [MyClasses, setMyClasses] = useState([]);
    const { User } = UseAuth();

    useEffect(() => {
        fetchInstructors();
    }, []);

    const fetchInstructors = () => {
        axiosSecure.get(`/CourseEnrollClass/${User.email}`)
            .then(response => {
                const MyClasses = response.data;
                setMyClasses(MyClasses);
                console.log(MyClasses)
            })
            .catch(error => {
                // console.error('Error:', error);
            });
    };
    return (
        <div className='w-full p-5'>

            <div className="w-11/12 md:10/12 mx-auto grid sm:grid-cols-1 
        md:grid-cols-2 lg:grid-cols-2 gap-5 mt-12 py-3 px-3">
                {MyClasses.map((myClass, index) =>
                    <div className="card card-compact w-96 bg-base-200 shadow-xl lg:mt-11 sm:mt-5 md:mt-5">
                        <figure>
                            <img className='rounded-3xl' src={myClass?.classImg} alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{myClass?.classNames}</h2>
                            <h2 className="card-title">{myClass?.instructorNames}</h2>
                            <div className="card-actions justify-end">
                                <button className="btn btn-outline btn-secondary">
                                    Continue Course
                                </button>

                            </div>
                        </div>
                    </div>

                )}
            </div>
        </div>
    );
};

export default StudentMyClass;