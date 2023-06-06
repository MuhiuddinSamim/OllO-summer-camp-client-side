import React from 'react';

const PopularClasses = () => {
    return (
        <div>
            <div>
                <h1 className='text-center text-2xl mb-5 font-extrabold'>
                    Popular Class
                </h1>
            </div>
            <div className='flex items-center justify-center'>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/Ryg0xwx/2.png" alt="Shoes" /></figure>
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

export default PopularClasses;