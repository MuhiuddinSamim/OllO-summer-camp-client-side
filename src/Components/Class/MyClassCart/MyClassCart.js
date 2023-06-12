import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';
import { motion } from "framer-motion"




const MyClassCart = ({ cartClass }) => {
    const { User } = UseAuth();
    const navigate = useNavigate();
    const location = useLocation();


    const { InstructorName, ClassName, ClassImage, Price, AvailableSeats } = cartClass;



    const handleCourseAdToCart = (cartClass) => {
        // console.log(cartClass);
        if (User) {
            const { InstructorName, ClassName, ClassImage, Price, _id } = cartClass;
            const ClassCartItem = {
                cartItemId: _id,
                InstructorName,
                ClassName,
                AvailableSeats,
                userEmail: User.email,
                userName: User.displayName,
                ClassImage,
                Price,
            };

            fetch('https://assignment-12-server-tawny.vercel.app/student', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(ClassCartItem),
            })
                .then((res) => res.json())
                .then((data) => {
                    // refetch();
                    if (data.insertedId) {
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
            <motion.div
                animate={{
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 270, 270, 0],
                    borderRadius: ['20%', '20%', '50%', '50%', '20%'],
                }}
            >
                <div className="card w-96 bg-base-100 shadow-xl mt-4 p-2">
                    <figure>
                        <img className="rounded-2xl" src={ClassImage} alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <div className="text-center font-extrabold text-2xl">{ClassName}</div>
                        <div className="font-bold text-center text-2xl">{InstructorName}</div>

                        <div className="flex justify-between font-bold text-lg">
                            <div>{AvailableSeats}</div>

                            <div>{Price}</div>
                        </div>

                        <div className="flex justify-between items-center font-extrabold text-xl">
                            <div>
                                <Rating
                                    readonly
                                    className="text-yellow-500"
                                    placeholderRating={Rating}
                                    emptySymbol={<FaRegStar />}
                                    placeholderSymbol={<FaStar />}
                                    fullSymbol={<FaStar />}
                                />
                            </div>

                            <div>
                                <button
                                    onClick={() => handleCourseAdToCart(cartClass)}
                                    className="btn btn-outline btn-secondary"
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default MyClassCart;