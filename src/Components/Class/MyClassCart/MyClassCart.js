import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';


const MyClassCart = ({ cartClass }) => {
    const {ClassImage,ClassName,InstructorName,AvailableSeats,Price,Rating:rating} = cartClass;

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl mt-4">
                <figure>
                    <img className='rounded-2xl' src={ClassImage} alt="Shoes" />
                </figure>
                <div className="card-body">
                    <div className='text-center font-extrabold text-2xl'>
                        {ClassName}
                    </div>
                    <div className='font-bold text-center text-2xl'>
                        {InstructorName}
                    </div>

                    <div className='flex justify-between font-bold text-lg'>
                        <div>
                            {AvailableSeats}
                        </div>

                        <div>
                            {Price}
                        </div>
                    </div>

                    <div className='flex justify-between items-center font-extrabold text-xl'>
                        <div>
                            <Rating
                                readonly
                                className="text-yellow-500"
                                placeholderRating={rating}
                                emptySymbol={<FaRegStar/>}
                                placeholderSymbol={<FaStar> </FaStar>}
                                fullSymbol={<FaStar> </FaStar>}
                            />
                        </div>

                        <div>
                            <button className="btn btn-outline btn-secondary">
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