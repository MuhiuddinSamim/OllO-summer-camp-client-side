import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import UseAxiosSecure from '../../Hooks/UseAxiosSecure';


const AdminStatus = () => {

    const [axiosSecure] = UseAxiosSecure();
    const [Statuss, setStatus] = useState([]);

    useEffect(() => {
        fetchInstructors();
    }, []);

    const fetchInstructors = () => {
        axiosSecure.get('/option')
            .then(response => {
                const Statuss = response.data;
                setStatus(Statuss);
                console.log(Statuss)
            })
            .catch(error => {
                // console.error('Error:', error);
            });
    };



    const handelPaymentapproved = (Status) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Approve order",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/AdminStatus/Approve/${Status._id}`, {
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
                                title: 'Approve Successfully',
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
            title: 'Your Deny feedback please',
            input: 'textarea',
            inputAttributes: {
                autocapitalize: 'on',
            },
            showCancelButton: true,
            confirmButtonText: 'Submit',
            preConfirm: (inputValue) => {
                return fetch(`http://localhost:5000/AdminStatus/Deny/${payments._id}`, {
                    method: 'POST',
                    body: JSON.stringify({ feedback: inputValue }),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                    .then((response) => {
                        console.log(response);
                        return response.json();
                    })
                    .then((data) => {
                        console.log(data);
                        return data;
                    })
                    .catch((error) => {
                        console.error(error);
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Something went wrong!',
                        });
                    });
            },
        })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`http://localhost:5000/AdminStatus/Deny/${payments._id}`, {
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ status: 'Deny' }),
                    })
                        .then((response) => response.json())
                        .then((data) => {
                            console.log(data);
                            if (data.modifiedCount) {
                                fetchInstructors();
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Deny Successfully',
                                    showConfirmButton: false,
                                    timer: 1500,
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
                }
            });
    };







    return (
        <div className='w-full p-5'>

            <div className='uppercase flex justify-evenly font-extrabold'>
                <h1 className='text-2xl'>Total Class :{Statuss?.length}</h1>

            </div>
            <div className="divider"></div>


            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class Image</th>
                            <th>Class name</th>
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

                        {Statuss?.map((Status, index) =>
                            <tr
                                key={Status._id}
                            >

                                <th>{index + 1}</th>
                                <th>
                                    <div className="avatar">
                                        <div className="w-14 rounded-full">
                                            <img src={Status?.ClassImage} alt='' />
                                        </div>
                                    </div>
                                </th>
                                <td>{Status?.ClassName}</td>
                                <td>{Status?.InstructorName}</td>
                                <th>{Status?.InstructorEmail}</th>
                                <td>{Status?.AvailableSeats}</td>
                                <th>{Status?.Price}</th>

                                <th>
                                    <button>
                                        {Status?.status}
                                    </button>

                                </th>


                                <th>
                                    {Status.status === 'Approve' ? 'Approve' :
                                        <button
                                            onClick={() => handelPaymentapproved(Status)}
                                            className="btn btn-outline btn-secondary btn-sm">
                                            Approve
                                        </button>
                                    }

                                </th>


                                <th>
                                    {Status.status === 'Deny ' ? 'Deny' :
                                        <button
                                            onClick={() => handelPaymentDeny(Status)}
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



export default AdminStatus;