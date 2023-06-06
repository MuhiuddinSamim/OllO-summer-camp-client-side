import React from 'react';

const PopularInstructors = () => {
    return (

        <div className='mt-16'>
            <div>
                <h1 className='text-center text-2xl mb-5 font-extrabold'>
                    Popular Instructor
                </h1>
            </div>
            <div className='flex items-center justify-center'>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/vHFgT7f/20210902-224354-copy-300x300-1.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularInstructors;