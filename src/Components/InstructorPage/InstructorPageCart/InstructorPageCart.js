import React from 'react';

const InstructorPageCart = ({ Instructor }) => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-2xl shadow-red-300 mt-4">                
                    <div className="avatar flex items-center justify-center ">
                        <div className="w-56 mt-5 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={Instructor.InstructorImage} alt='' />
                        </div>
                    </div>                  

                <div className="card-body">
                    <h2 className="card-title text-center">
                        {Instructor.InstructorName}
                        {Instructor.InstructorEmail}

                    </h2>

                </div>
            </div>
        </div>
    );
};

export default InstructorPageCart;