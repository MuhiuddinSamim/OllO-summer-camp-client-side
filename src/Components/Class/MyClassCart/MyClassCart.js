import React from 'react';

const MyClassCart = ({ cartClass }) => {

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl mt-4">
                <figure>
                    <img src={cartClass.ClassImage} alt="Shoes" /></figure>
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


                    <div>
                        {cartClass.Rating}
                    </div>

                    <div>
                        {cartClass.Rating}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyClassCart;