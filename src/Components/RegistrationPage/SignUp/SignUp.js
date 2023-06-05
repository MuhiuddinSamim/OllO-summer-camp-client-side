import React, { useContext, useState, } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { updateProfile } from 'firebase/auth';



const SignUp = () => {

    const { CreateNewUser, updateUserProfile } = useContext(AuthContext);
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);
    const [photoUrl, setPhotoUrl] = useState('');

    const handelRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        const photoUrl = form.photoUrl.value;
        console.log(name, email, password, confirmPassword, photoUrl);


        // Passwords match, proceed with registration
        if (password === confirmPassword) {
            CreateNewUser(email, password)
                .then((result) => {
                    const createdUser = result.user;
                    console.log(createdUser);

                    // Set success message and show alert
                    setSuccess(
                        Swal.fire({
                            icon: 'success',
                            title: 'Success',
                            text: 'Registered successfully',
                        })
                    );

                    // Update user profile with name and photo URL
                    updateProfile(createdUser, {
                        displayName: name || null, 
                        photoURL: photoUrl || null, 
                    });
                })
                .catch((error) => {
                    setError(
                        Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: 'Registration failed. Please try again.',
                        })
                    );
                });
        } else {
            // Passwords do not match, handle the error
            alert('Passwords do not match. Please try again.');
        }
    };






    return (
        <div>
            <form onSubmit={handelRegister}>
                <div className="hero min-h-screen bg-base-200 mt-5">
                    <div className="hero-content flex-col">
                        <div className="text-center">
                            <h1 className="text-5xl font-bold mb-10">Register Now</h1>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-5">
                            <div className="card-body">

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input

                                        required
                                        type="name"
                                        placeholder="Enter your name"
                                        className="input input-bordered"
                                        name="name"
                                    />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo Url</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter your Photo Url here"
                                        name="photoUrl"
                                        className="input input-bordered"
                                        value={photoUrl}
                                        onChange={(e) => setPhotoUrl(e.target.value)}
                                        required
                                    />


                                </div>



                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        required
                                        type="email"
                                        placeholder="email"
                                        className="input input-bordered"
                                        name="email"
                                    />
                                </div>


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input

                                        required
                                        type="password"
                                        placeholder="Password"
                                        className="input input-bordered"
                                        name="password"
                                    />
                                </div>


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">confirm Password</span>
                                    </label>
                                    <input

                                        required
                                        type="password"
                                        placeholder="confirm Password"
                                        className="input input-bordered"
                                        name="confirmPassword"
                                    />
                                </div>






                                <div className="form-control mt-6 mb-5">
                                    <button type="submit" className="btn btn-outline btn-secondary">
                                        Sing Up
                                    </button>
                                </div>


                                <Link to="/login"
                                    className=" mt-3  mx-auto label-text-alt link link-hover text-blue-500 text-lg"
                                >Already member? Login here.
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SignUp;