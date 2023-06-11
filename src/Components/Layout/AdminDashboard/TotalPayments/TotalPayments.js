import React, { useEffect, useState } from 'react';
import UseAxiosSecure from '../../../Hooks/UseAxiosSecure';
import { key } from 'localforage';
import Swal from 'sweetalert2';


const TotalPayments = () => {

    const [axiosSecure] = UseAxiosSecure();
    const [TotalPayment, setTotalPayments] = useState([]);

    useEffect(() => {
        fetchInstructors();
    }, []);

    const fetchInstructors = () => {
        axiosSecure.get('/payments')
            .then(response => {
                const TotalPayment = response.data;
                setTotalPayments(TotalPayment);
                console.log(TotalPayment)
            })
            .catch(error => {
                // console.error('Error:', error);
            });
    };



    const handelPaymentapproved = (payments) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Changes Updated Instructor",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/payments/Approve/${payments._id}`, {
                    method: 'PATCH',
                })
                    .then((response) => response.json())
                    .then((data) => {
                        console.log(data);
                        if (data.modifiedCount) {
                            fetchInstructors();
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'instructor Successfully Updated',
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
                    .catch((error) => {
                        console.error(error);
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Something went wrong!',
                        });
                    });


            };


        })
    }



    const handelPaymentDeny = (payments) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Changes Updated Instructor",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/payments/Deny/${payments._id}`, {
                    method: 'PATCH',
                })
                    .then((response) => response.json())
                    .then((data) => {
                        console.log(data);
                        if (data.modifiedCount) {
                            fetchInstructors();
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'instructor Successfully Updated',
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
                    .catch((error) => {
                        console.error(error);
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Something went wrong!',
                        });
                    });


            };


        })
    }




    return (
        <div className='w-full p-5'>

            <div className='uppercase flex justify-evenly'>
                <h1 className='text-2xl'>Total Payment Student:{TotalPayment.length}</h1>
                <h1 className='text-2xl'>total Collation: $</h1>
            </div>
            <div className="divider"></div>


            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class Image</th>
                            <th> Class name</th>
                            <th>Instructor name</th>
                            <th>Instructor email</th>
                            <th>Available seats</th>
                            <th>Price</th>
                            <th>Padding</th>
                            <th>approved</th>
                            <th>Denied</th>
                        </tr>
                    </thead>
                    <tbody>

                        {TotalPayment.map((payments, index) =>
                            <tr
                                key={payments._id}
                            >

                                <th>{index + 1}</th>
                                <th>
                                    <div className="avatar">
                                        <div className="w-14 rounded-full">
                                            <img src={payments.classImg} alt='' />
                                        </div>
                                    </div>
                                </th>
                                <td>{payments.classNames}</td>
                                <td>{payments.instructorNames}</td>
                                <th>{payments.email}</th>
                                <td>Available</td>
                                <th>{payments.price}</th>

                                <th>
                                    <button>
                                        {payments.status}
                                    </button>

                                </th>


                                <th>
                                    {payments.status === 'Approve' ? 'Approve' :
                                        <button
                                            onClick={() => handelPaymentapproved(payments)}
                                            className="btn btn-outline btn-secondary btn-sm">
                                            Approve
                                        </button>
                                    }

                                </th>


                                <th>
                                    {
                                        payments.status === 'Deny ' ? 'Deny' :
                                            <button
                                                onClick={() => handelPaymentDeny(payments)}
                                                className="btn btn-outline btn-secondary btn-sm">
                                                Deny
                                            </button>
                                    }
                                </th>
                            </tr>
                        )}




                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TotalPayments;