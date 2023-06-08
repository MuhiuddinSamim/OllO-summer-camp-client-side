import React from 'react';
import { useForm } from "react-hook-form";
import UseAxiosSecure from '../../Hooks/UseAxiosSecure';
import Swal from 'sweetalert2';


const ClassUpdate = () => {
 
   
    const onSubmit = data => {

    }
    return (
        <div>
            {/* <form data-aos="fade-up-right" onSubmit={handleSubmit(onSubmit)}>
                <h1 className=' text-center font-extrabold text-3xl mb-5'>Instructor add</h1>
                <div className="divider"></div>

                <div className="px-24">




                    <div>
                        <label className="label">
                            <span className="text-center">Class name</span>
                        </label>
                        <input
                            type="name"
                            {...register('ClassName')}
                            placeholder="Enter Your Class Name"
                            className="input input-bordered input-error w-full mb-2"
                            required
                        />
                    </div>


                    <div>
                        <label className="label">
                            <span className="text-center">Class Image</span>
                        </label>
                        <input
                            type="file"
                            {...register('ClassImage')}
                            className="input input-bordered input-error w-full mb-2"
                            required
                        />
                    </div>




                    <div>
                        <label className="label">
                            <span className="text-center">Instructor name</span>
                        </label>
                        <input
                            type="name"
                            {...register('InstructorName')}
                            placeholder="Enter Instructor Name "
                            className="input input-bordered input-error w-full mb-2"
                            required
                        />
                    </div>




                    <div>
                        <label className="label">
                            <span className="text-center">Instructor email</span>
                        </label>
                        <input
                            type="email"
                            {...register('InstructorEmail')}
                            placeholder="Enter your Toy name"
                            className="input input-bordered input-error w-full mb-2"
                            required
                        />
                    </div>




                    <div>
                        <label className="label">
                            <span className="text-center">Available Seats</span>
                        </label>
                        <input
                            type="number"
                            min={0}
                            {...register('AvailableSeats')}
                            placeholder="Available Seats"
                            className="input input-bordered input-error w-full mb-2"
                            required
                        />
                    </div>



                    <div>
                        <label className="label">
                            <span className="text-center">Price</span>
                        </label>
                        <input
                            type="number"
                            {...register('Price')}
                            placeholder="Price"
                            className="input input-bordered input-error w-full mb-2"
                            required
                        />
                    </div>




                    <div>
                        <label className="label">
                            <span className="text-center justify-center">Rating</span>
                        </label>
                        <input
                            type="number"
                            max={5}
                            min={0}
                            {...register('Rating')}
                            placeholder="Enter your Toy name"
                            className="input input-bordered input-error w-full mb-2"
                            required
                        />
                    </div>



                    <button className="btn btn-outline btn-secondary" type="submit">
                        Add Toy
                    </button>
                </div>
            </form> */}
            updated not working
        </div>
    );
};

export default ClassUpdate;