import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UseAxiosSecure from '../../Hooks/UseAxiosSecure';
import { MdAutoDelete } from 'react-icons/md';
import { AiFillEdit } from 'react-icons/ai';
import Swal from 'sweetalert2';

const Class = () => {
    const [axiosSecure] = UseAxiosSecure();
    const [newClass, setNewClass] = useState([]);

    useEffect(() => {
        fetchClass();
    }, []);

    const fetchClass = () => {
        axiosSecure.get('/newClassAdd')
            .then(response => {
                const ClassData = response.data;
                setNewClass(ClassData);
                // console.log(response);
            })
            .catch(error => {
                // console.error('Error:', error);
            });
    };

    const handelUserDelete = classItem => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(result => {
            if (result.isConfirmed) {
                fetch(`https://assignment-12-server-tawny.vercel.app/ClassData/${classItem._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('deleted res', data);
                        if (data.deletedCount > 0) {
                            fetchClass();
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Your work has been saved',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    })
                    .catch(error => {
                        console.error('Error deleting user:', error);
                        Swal.fire('Error', 'Failed to delete user.', 'error');
                    });
            }
        });
    };



    return (
        <div className='w-full p-5'>
            <div className='flex justify-end mb-5'>
                <Link to='/DashBoard/classAdd'>
                    <button className="btn btn-outline btn-secondary">
                        Add A New Class
                    </button>
                </Link>
            </div>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-black font-semibold text-sm'>
                            <th>#</th>
                            <th>Image</th>
                            <th>Class Name</th>
                            <th>Instructor name</th>
                            <th>AvailableSeats</th>
                            <th>Edited</th>
                            <th>Delete</th>

                        </tr>
                    </thead>
                    <tbody>
                        {newClass.map((classItem, index) => (
                            <tr key={classItem._id}
                            >
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="avatar offline">
                                        <div className="w-10 rounded-full">
                                            <img src={classItem.ClassImage} alt='' />
                                        </div>
                                    </div>
                                </td>
                                <td>{classItem.ClassName}</td>
                                <td>{classItem.InstructorName}</td>
                                <td>{classItem.AvailableSeats}</td>


                                <td>
                                    <Link to={`/DashBoard/classUpdate/${classItem._id}`}>
                                        <button className="btn btn-outline btn-secondary">
                                            <AiFillEdit />
                                        </button>
                                    </Link>
                                </td>



                                <td>
                                    <button
                                        onClick={() => handelUserDelete(classItem)}
                                        className="btn btn-outline btn-secondary">
                                        <MdAutoDelete />
                                    </button>

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Class;
