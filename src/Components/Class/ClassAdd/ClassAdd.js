import React from 'react';
import { useForm } from "react-hook-form";


const ClassAdd = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <form data-aos="fade-up-right" onSubmit={handleSubmit(onSubmit)}>
                <h1 className=' text-center font-extrabold text-3xl mb-5'>Class add</h1>
                <div className="divider"></div>

                <div className="px-24">

                    <div>
                        <label className="label">
                            <span className="text-center">Photo Url</span>
                        </label>
                        <input
                            type="text"
                            {...register('photoUrl')}
                            placeholder="Enter your Photo Url here"
                            className="input input-bordered input-error w-full mb-2"
                            required
                        />
                    </div>

                    <div>
                        <label className="label">
                            <span className="text-center">Toy Name</span>
                        </label>
                        <input
                            type="text"
                            {...register('ToyName')}
                            placeholder="Enter your Toy name"
                            className="input input-bordered input-error w-full mb-2"
                            required
                        />
                    </div>



                    <div>
                        <label className="label">
                            <span className="text-center">Description Product</span>
                        </label>
                        <textarea
                            {...register('detailsPage')}
                            placeholder="Enter your toy details"
                            rows={5}
                            cols={50}
                            required
                            className="input input-bordered input-error w-full h-52 mb-2 p-5"
                        />
                    </div>

                    <button className="btn btn-outline btn-secondary" type="submit">
                        Add Toy
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ClassAdd;