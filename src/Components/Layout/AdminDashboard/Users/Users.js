import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import React from 'react';
import { MdAutoDelete } from 'react-icons/md';
import { FaUsers } from 'react-icons/fa';
import Swal from 'sweetalert2';



const Users = () => {
    const { data: users = [], refetch } = useQuery('users', async () => {
        const res = await fetch('http://localhost:5000/users');
        return res.json();
    });


    const handleChangeAdmin = user => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH',
        })
            .then((response) => response.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'changes updated admin',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

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
        }).then(result => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/users/${user._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('deleted res', data);
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
                        }
                    })
                    .catch(error => {
                        console.error('Error deleting user:', error);
                        Swal.fire('Error', 'Failed to delete user.', 'error');
                    });
            }
        });
    };


    return <div>
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
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
                                <td>
                                    {user.role === 'admin' ? 'admin' :
                                        <button
                                            onClick={() => handleChangeAdmin(user)}
                                            className="btn btn-outline btn-secondary">
                                            <FaUsers />
                                        </button>}
                                </td>
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
    </div>;
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
