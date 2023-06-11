import React, { useEffect, useState } from 'react';
import UseAxiosSecure from '../../Hooks/UseAxiosSecure';

const InstructorFeedback = () => {

    const [axiosSecure] = UseAxiosSecure();
    const [Feedbacks, setFeedbacks] = useState([]);

    useEffect(() => {
        fetchInstructors();
    }, []);

    const fetchInstructors = () => {
        axiosSecure.get('/InstructorFeedback')
            .then(response => {
                const Feedbacks = response.data;
                setFeedbacks(Feedbacks);
               
            })
            .catch(error => {
                
            });
    };
    return (
        <div className='w-full p-5'>
            <div className="overflow-x-auto">
                <table className="table">

                    <thead className='text-xl font-semibold text-black'>
                        <tr clg>
                            <th>#</th>
                            <th>Feedbacks</th>

                        </tr>
                    </thead>
                    <tbody className='text-lg font-semibold text-black'>
                        {Feedbacks.map((feedback, index) =>
                            <tr>
                                <th>{index + 1}</th>
                                <td>{feedback.feedback}</td>

                            </tr>)}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default InstructorFeedback;