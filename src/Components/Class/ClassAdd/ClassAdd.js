import React from 'react';
import { useForm } from "react-hook-form";


const ClassAdd = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col w-full">
                        <div className="text-center">
                            <h1 className="text-xl font-bold mb-5">Add Instructor </h1>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-5">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name </span>
                                    </label>
                                    <input
                                        type="name"
                                        placeholder="name"
                                        {...register("name", { required: true })}
                                        className="input input-bordered"
                                        name="name" />
                                    {errors.name && <span className="text-red-800">Name field is required</span>}
                                </div>


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text"> email</span>
                                    </label>
                                    <input
                                        required
                                        type="email"
                                        {...register("email", { required: true })}
                                        placeholder="email"
                                        className="input input-bordered"
                                        name="email"
                                    />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">image </span>
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        {...register("image", { required: true })}
                                        placeholder="image"
                                        className="input input-bordered"
                                        name="image"
                                    />
                                </div>


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">image </span>
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        {...register("image", { required: true })}
                                        placeholder="image"
                                        className="input input-bordered"
                                        name="image"
                                    />
                                </div>


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">image </span>
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        {...register("image", { required: true })}
                                        placeholder="image"
                                        className="input input-bordered"
                                        name="image"
                                    />
                                </div>


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">image </span>
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        {...register("image", { required: true })}
                                        placeholder="image"
                                        className="input input-bordered"
                                        name="image"
                                    />
                                </div>


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">image </span>
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        {...register("image", { required: true })}
                                        placeholder="image"
                                        className="input input-bordered"
                                        name="image"
                                    />
                                </div>



                                <div className="form-control mt-6 mb-5">
                                    <button type="submit" className="btn btn-outline btn-secondary">
                                        add
                                    </button>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ClassAdd;