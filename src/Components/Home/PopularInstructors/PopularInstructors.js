import React, { useEffect, useState } from 'react';
import UseAxiosSecure from '../../Hooks/UseAxiosSecure';
import { Link } from 'react-router-dom';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';


const PopularInstructors = () => {
    const [axiosSecure] = UseAxiosSecure();
    const [PopularInstructor, setPopularInstructor] = useState([]);


    useEffect(() => {
        axiosSecure.get('/PopularInstructor?limit=6')
            .then(response => {
                const PopularInstructor = response.data;
                setPopularInstructor(PopularInstructor);
                // console.log(PopularInstructor);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);
    return (

        <div className='mt-16'>
            <div>
                <h1 className='text-center text-4xl mb-5 font-extrabold'>
                    Popular Instructor
                    <div className="divider"></div>
                </h1>
            </div>


            <div className="w-11/12 md:w-10/12 mx-auto grid sm:grid-cols-1 
          md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12 py-3 px-3">

                {PopularInstructor.map((Instructor) => (
                    <div
                    key={Instructor._id}
                    >
                        <div className="card md:w-96 bg-base-100 shadow-xl mt-4">
                            <figure>

                                <img className='rounded-2xl w-full h-[255px]' src={Instructor.InstructorImage} alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <div className='text-center font-extrabold text-2xl'>
                                    {Instructor.InstructorName}
                                </div>
                                <div className='font-bold text-center text-black '>
                                    {Instructor.InstructorEmail}
                                </div>


                                <div className='flex justify-between items-center font-extrabold text-xl'>
                                    <div>
                                        <Rating
                                            readonly
                                            className="text-yellow-500"
                                            placeholderRating={Instructor.rating}
                                            emptySymbol={<FaRegStar />}
                                            placeholderSymbol={<FaStar> </FaStar>}
                                            fullSymbol={<FaStar> </FaStar>}
                                        />
                                    </div>

                                    <div>
                                        <Link to='/Instructor'>
                                            <button
                                                className="btn btn-outline btn-secondary">
                                                Visit to Instructor
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default PopularInstructors;