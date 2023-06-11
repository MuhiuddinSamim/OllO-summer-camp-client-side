import React from 'react';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import UseAxiosSecure from '../../Hooks/UseAxiosSecure';


const img_hosting = process.env.REACT_APP_Image_Upload_token;




const InstructorAdd = () => {
    const [axiosSecure] = UseAxiosSecure();
    const { register, reset, handleSubmit } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting}`

    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.InstructorImage[0]);

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(result => {
                if (result.success) {
                    const imgUrl = result.data.display_url;
                    const { InstructorName, InstructorEmail, Rating } = data;
                    const AddInstructor = {
                        name: InstructorName,
                        email: InstructorEmail,
                        Rating: parseFloat(Rating), 
                        InstructorImage: imgUrl
                    }
                    // console.log(AddInstructor)
                    axiosSecure.post('/newInstructorAdd', AddInstructor)
                        .then(data => {
                            console.log(data)
                            if (data.data.insertedId) {
                                reset();
                                Swal.fire(
                                    'Instruct added successfully',
                                    'Instruct added and thanks for',
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
                <h1 className=' text-center font-extrabold text-3xl mb-5'>Instructor add</h1>
                <div className="divider"></div>

                <div className="px-24">




                    <div>
                        <label className="label">
                            <span className="text-center">Instructor name</span>
                        </label>
                        <input
                            type="name"
                            {...register('InstructorName')}
                            placeholder="Enter Your Class Name"
                            className="input input-bordered input-error w-full mb-2"
                            required
                        />
                    </div>


                    <div>
                        <label className="label">
                            <span className="text-center">Instructor Image</span>
                        </label>
                        <input
                            type="file"
                            {...register('InstructorImage')}
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
                        Add Instructor
                    </button>
                </div>
            </form>

        </div>
    );
};

export default InstructorAdd;



/*
name
img
email 
see class
*/