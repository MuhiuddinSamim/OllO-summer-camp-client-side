import React, { useEffect, useState } from 'react';
import UseAxiosSecure from '../../Hooks/UseAxiosSecure';
import UseAuth from '../../Hooks/UseAuth';

const StudentPaymentHistory = () => {

    const [axiosSecure] = UseAxiosSecure();
    const [PaymentHistory, setPaymentHistory] = useState([]);
    const { User } = UseAuth();

    useEffect(() => {
        fetchInstructors();
    }, []);

    const fetchInstructors = () => {
        axiosSecure.get(`/PaymentHistory/${User.email}`)
            .then(response => {
                const PaymentHistory = response.data;
                setPaymentHistory(PaymentHistory);
                console.log(PaymentHistory)
            })
            .catch(error => {
                // console.error('Error:', error);
            });
    };
    return (
        <div className='w-full p-5'>
            <div className="overflow-x-auto">
                <table className="table">

                    <thead className='text-xl font-semibold text-black'>
                        <tr clg>
                            <th>#</th>
                            <th>Class Names</th>
                            <th>transactionId</th>
                            <th>Buy Date</th>
                            <th>price</th>
                            <th>instructorNames</th>
                            <th>Payment Recessive</th>

                        </tr>
                    </thead>
                    <tbody className='text-lg font-semibold text-black'>
                        {PaymentHistory.map((History, index) =>
                            <tr>
                                <th>{index + 1}</th>
                                <td>{History.classNames}</td>
                                <td>{History.transactionId}</td>
                                <td>{History.date}</td>
                                <td>{History.price}</td>
                                <td>{History.instructorNames}</td>
                                <td>
                                    <button className="btn btn-outline btn-secondary">
                                    Download now
                                    </button>

                                </td>

                            </tr>)}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default StudentPaymentHistory;