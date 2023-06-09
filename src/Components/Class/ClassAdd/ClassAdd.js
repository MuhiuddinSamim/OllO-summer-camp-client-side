import React from 'react';
import { useForm } from "react-hook-form";
import UseAxiosSecure from '../../Hooks/UseAxiosSecure';
import Swal from 'sweetalert2';
import UseAuth from '../../Hooks/UseAuth';


const img_hosting = process.env.REACT_APP_Image_Upload_token;



const ClassAdd = () => {
    const [axiosSecure] = UseAxiosSecure();
    const { User } = UseAuth();
    console.log(User.email)
    console.log(User.displayName)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting}`

    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.ClassImage[0]);

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(result => {
                if (result.success) {
                    const imgUrl = result.data.display_url;
                    const { ClassName, InstructorName, Price, InstructorEmail, AvailableSeats, Rating } = data;
                    const AddClass = { ClassName, InstructorName, Price: parseFloat(Price), Rating: parseFloat(Rating), InstructorEmail, AvailableSeats: parseFloat(AvailableSeats), ClassImage: imgUrl }
                    console.log(AddClass)
                    axiosSecure.post('/newClassAdd', AddClass)
                        .then(data => {
                            if (data.data.insertedId) {
                                reset();
                                Swal.fire(
                                    'Class added successfully',
                                    'Class added and Thanks for',
                                    'success'
                                )

                            }

                        })



                }
            })

    };



    return (
        <div className='w-full mb-5'>
            <form data-aos="fade-up-right" onSubmit={handleSubmit(onSubmit)}>
                <h1 className=' text-center font-extrabold text-3xl mb-5'>Class add</h1>
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
                            value={User.displayName}
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
                            value={User.email}
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
                        Add Class
                    </button>
                </div>
            </form>

        </div>
    );
};

export default ClassAdd;