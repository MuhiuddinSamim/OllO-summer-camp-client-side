import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import UseAuth from '../../Hooks/UseAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useClassCart from '../../Hooks/UseClassCart';


const MyClassCart = ({ cartClass }) => {    
    const { User } = UseAuth();
    const navigate = useNavigate();
    const location = useLocation();



    const handleCourseAdToCart = (cartClass) => {
        // console.log(cartClass)
        if (User && User.email) {
            const CartItem = {
                CartMenu: cartClass._id,
                InstructorName: cartClass.InstructorName,
                ClassName: cartClass.ClassName,
                ClassImage: cartClass.ClassImage,
                InstructorEmail: User.email,
            };
            fetch('http://localhost:5000/student}', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(CartItem),
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.insertedId) {
                        console.log(data)
                        Swal.fire(
                            'Class Cart added successfully',
                            'Cart check and proceed to payment',
                            'success'
                        );
                    }
                })
                .catch((error) => {
                    console.error('Error:', error);
                    // Handle error if necessary
                });
        } else {
            Swal.fire({
                title: 'Please login to continue',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login',
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } });
                }
            });
        }
    };


    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl mt-4">
                <figure>
                    <img className='rounded-2xl' src={cartClass.ClassImage} alt="Shoes" />
                </figure>
                <div className="card-body">
                    <div className='text-center font-extrabold text-2xl'>
                        {cartClass.ClassName}
                    </div>
                    <div className='font-bold text-center text-2xl'>
                        {cartClass.InstructorName}
                    </div>

                    <div className='flex justify-between font-bold text-lg'>
                        <div>
                            {cartClass.AvailableSeats}
                        </div>

                        <div>
                            {cartClass.Price}
                        </div>
                    </div>

                    <div className='flex justify-between items-center font-extrabold text-xl'>
                        <div>
                            <Rating
                                readonly
                                className="text-yellow-500"
                                placeholderRating={cartClass.rating}
                                emptySymbol={<FaRegStar />}
                                placeholderSymbol={<FaStar> </FaStar>}
                                fullSymbol={<FaStar> </FaStar>}
                            />
                        </div>

                        <div>
                            <button
                                onClick={() => handleCourseAdToCart(cartClass._id)}
                                className="btn btn-outline btn-secondary"
                            >
                                Continue Course
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyClassCart;