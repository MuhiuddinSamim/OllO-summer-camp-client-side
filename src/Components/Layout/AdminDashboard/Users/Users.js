import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import React from 'react';
import { MdAutoDelete } from 'react-icons/md';
import { FaUsers } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';



const Users = () => {
    const { data: users = [], refetch } = useQuery('users', async () => {
        const res = await fetch('https://assignment-12-server-tawny.vercel.app/users');
        return res.json();
    });

    console.log(users)

    const handleChangeAdmin = (user) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Changes Updated For Admin",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, update it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://assignment-12-server-tawny.vercel.app/users/admin/${user._id}`, {
                    method: 'PATCH',
                })
                    .then((response) => response.json())
                    .then((data) => {
                        if (data.modifiedCount) {
                            refetch();
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Admin successfully updated',
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
            }
        });
    };


    const handleChangeInstructor = (user) => {
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
                fetch(`https://assignment-12-server-tawny.vercel.app/users/instructor/${user._id}`, {
                    method: 'PATCH',
                })
                    .then((response) => response.json())
                    .then((data) => {
                        console.log(data);
                        if (data.modifiedCount) {
                            refetch();
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
            }
        });
    };


    const handelUserDelete = user => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
            .then(result => {
                if (result.isConfirmed) {
                    fetch(`https://assignment-12-server-tawny.vercel.app/users/${user._id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log('deleted res', data);
                            if (data.deletedCount > 0) {
                                refetch();
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

        <>

            <div className='w-full'>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) =>
                                    <tr
                                        key={user._id}
                                    >
                                        <th>{index + 1}</th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <div>
                                            <td>
                                                {user.role === 'admin' ? 'admin' :
                                                    <button
                                                        onClick={() => handleChangeAdmin(user)}
                                                        className="btn btn-outline btn-secondary">
                                                        <FaUsers />
                                                    </button>

                                                }
                                            </td>

                                            <td>
                                                {user.role === 'instructor' ? 'instructor' :
                                                    <button
                                                        onClick={() => handleChangeInstructor(user)}
                                                        className="btn btn-outline btn-secondary">
                                                        <FaUsers />
                                                    </button>

                                                }
                                            </td>
                                        </div>
                                        <td>
                                            <button
                                                onClick={() => handelUserDelete(user)}
                                                className="btn btn-outline btn-secondary">
                                                <MdAutoDelete />
                                            </button>

                                        </td>
                                    </tr>)
                            }



                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
};

const App = () => {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <Users />
        </QueryClientProvider>
    );
};

export default App;
