import React from 'react';

const InstructorPageCart = ({ Instructor }) => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl mt-4">
                <figure>
                    <img src={Instructor.InstructorImage} alt="Shoes" /></figure>
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