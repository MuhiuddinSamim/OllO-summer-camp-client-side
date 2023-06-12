import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { MdAutoDelete } from 'react-icons/md';
import { AiFillEdit } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import UseAxiosSecure from '../../Hooks/UseAxiosSecure';




const Instructor = () => {
    const [axiosSecure] = UseAxiosSecure();
    const [Instructors, setInstructor] = useState([]);

    useEffect(() => {
        fetchInstructors();
    }, []);

    const fetchInstructors = () => {
        axiosSecure.get('/Instructor')
            .then(response => {
                const Instructors = response.data;
                setInstructor(Instructors);
                // console.log(Instructors);
            })
            .catch(error => {
                // console.error('Error:', error);
            });
    };

    const handelUserDelete = Instructor => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Class has been deleted",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
            .then(result => {
                if (result.isConfirmed) {
                    fetch(`http://localhost:5000/InstructorData/${Instructor._id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log('deleted res', data);
                            if (data.deletedCount > 0) {
                                fetchInstructors();
                                Swal.fire(
                                    'Data deleted successfully',
                                    'Thanks for deleting',
                                    'success'
                                )
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
        <div className='w-full'>

            <div className="overflow-x-auto">
                <table className="table ">

                    <thead>
                        <tr className='text-black font-semibold text-sm'>
                            <th>#</th>
                            <th>Instructor Img</th>
                            <th>Instructor Name</th>
                            <th>Instructor Email</th>
                            <th>Instructors Rating</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {Instructors.map((Instructor, index) =>
                            <tr
                                key={Instructor._id}
                            >
                                <th>{index + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={Instructor.InstructorImage} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>{Instructor.InstructorName}</td>
                                <td>{Instructor.InstructorEmail}</td>
                                <td>{Instructor.Rating}</td>
                                <td>
                                    <Link to={`/DashBoard/classUpdate/${Instructor._id}`}>
                                        <button className="btn btn-outline btn-secondary">
                                            <AiFillEdit />
                                        </button>
                                    </Link>
                                </td>



                                <td>
                                    <button
                                        onClick={() => handelUserDelete(Instructor)}
                                        className="btn btn-outline btn-secondary">
                                        <MdAutoDelete />
                                    </button>

                                </td>
                            </tr>)}







                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default Instructor;