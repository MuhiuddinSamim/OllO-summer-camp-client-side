import React, { useEffect, useState } from 'react';
import UseAxiosSecure from '../../Hooks/UseAxiosSecure';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link, } from 'react-router-dom';
import { motion } from "framer-motion"


const PopularClasses = () => {

    const [axiosSecure] = UseAxiosSecure();
    const [PopularClasses, setPopularClass] = useState([]);


    useEffect(() => {
        axiosSecure.get('/PopularClass?limit=6')
            .then(response => {
                const PopularClasses = response.data;
                setPopularClass(PopularClasses);
                console.log(PopularClasses);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);


    return (
        <div>
            <div>
                <h1 className='text-center text-4xl mb-5 font-extrabold'>
                    Popular Class
                    <div className="divider"></div>
                </h1>

            </div>

            <div className="w-11/12 md:10/12 mx-auto grid sm:grid-cols-1 
          md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12 py-3 px-3">

                {PopularClasses.map((Classes) => (
                    <div
                        key={Classes._id}
                    >

                        <motion.div
                            animate={{
                                scale: [1, 2, 2, 1, 1],
                                rotate: [0, 0, 270, 270, 0],
                                borderRadius: ['20%', '20%', '50%', '50%', '20%'],
                            }}>
                            <div className="card w-96 bg-base-100 shadow-xl mt-4">
                                <figure>

                                    <img className='rounded-2xl' src={Classes.ClassImage} alt="Shoes" />
                                </figure>
                                <div className="card-body">
                                    <div className='text-center font-extrabold text-2xl'>
                                        {Classes.ClassName}
                                    </div>
                                    <div className='font-bold text-center text-2xl'>
                                        {Classes.InstructorName}
                                    </div>

                                    <div className='flex justify-between font-bold text-lg'>
                                        <div>
                                            {Classes.AvailableSeats}
                                        </div>

                                        <div>
                                            {Classes.Price}
                                        </div>
                                    </div>

                                    <div className='flex justify-between items-center font-extrabold text-xl'>
                                        <div>
                                            <Rating
                                                readonly
                                                className="text-yellow-500"
                                                placeholderRating={Classes.rating}
                                                emptySymbol={<FaRegStar />}
                                                placeholderSymbol={<FaStar> </FaStar>}
                                                fullSymbol={<FaStar> </FaStar>}
                                            />
                                        </div>

                                        <div>
                                            <Link to='/myclass'>
                                                <button
                                                    className="btn btn-outline btn-secondary">
                                                    Visit to All Class
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                ))}

            </div>

        </div>
    );
};

export default PopularClasses;