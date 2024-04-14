import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import { BsInfoCircle } from "react-icons/bs";

const Register = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: '',
            email: '',
            photoURL: '',
            password: ''
        },
    });

    const password = watch("password");
    // console.log(password)
    // if (password === "") {
    //     console.log("password is required")
    // }

    const onSubmit = (data) => {
        console.log(data);
        if (password.length < 6) {
            console.log("password")

        }
    };

    return (
        <div className="hero card-body px-0 md:px-12 min-h-screen bg-red">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left text-white lg:ml-8">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">Welcome to BB-RealEstate Registration!</h1>
                    <p className="py-6 text-base md:text-md">
                        Create an account to unlock exclusive features and access premium content. <br /> Once registered, you will be able to browse our listings, schedule property tours, and more.
                        If you have any questions or need assistance, feel free to contact our support team.
                    </p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="flex justify-center w-full mt-8">
                        <div>
                            <h5 className="text-blue font-bold text-4xl">Register Here</h5>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input {...register("name", {
                                required: {
                                    value: true,
                                    message: "Please input your name"
                                }
                            })} type="name" placeholder="your full name" className="input input-bordered" />
                            {errors?.name && <span className="text-red text-sm mt-1 items-center flex"><BsInfoCircle className="mr-1 font-bold" />{errors?.name?.message}</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email", {
                                required: {
                                    value: true,
                                    message: "Please enter your email"
                                }, pattern: {
                                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,9}$/,
                                    message: "Invalid email format"
                                }
                            })} type="email" placeholder="your email" className="input input-bordered" />
                            {errors?.email && <span className="text-red text-sm mt-1 items-center flex"><BsInfoCircle className="mr-1 font-bold" />{errors?.email?.message}</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input {...register("photoURL", {
                                required: {
                                    value: true,
                                    message: "Please enter a photo URL"
                                }
                                // , pattern: {
                                //     value: /^https?:/i,
                                //     message: "Invalid image url format"
                                // } 
                            })} type="photoURL" placeholder="your photoURL" className="input input-bordered" />
                            {errors?.photoURL && <span className="text-red text-sm mt-1 items-center flex"><BsInfoCircle className="mr-1 font-bold" />{errors?.photoURL?.message}</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input {...register("password", {
                                required: {
                                    value: true,
                                    message: "Password is required"
                                }, minLength: {
                                    value: 6,
                                    message: "Minimum length of 6 characters"
                                }, validate: {
                                    uppercase: value => value === value.toLowerCase() ? "Password must contain at least one uppercase letter" : undefined,
                                    lowercase: value => value === value.toUpperCase() ? "Password must contain at least one lowercase letter" : undefined
                                }
                            })} type="password" placeholder="your password" className="input input-bordered" />
                            {errors?.password && <span className="text-red text-sm mt-1 items-center flex"><BsInfoCircle className="mr-1 font-bold" />{errors?.password?.message}</span>}
                        </div>
                        <div className="items-center flex">
                            <input {...register("checkbox", {
                                required: {
                                    value: true,
                                    message: "Checkbox must be checked"
                                }
                            })} type="checkbox" default className="checkbox checkbox-xs mr-1" />
                            <label htmlFor="terms" className="text-xs text-tertiary">I agree to the <a href="#" className="text-blue underline">terms and conditions!</a></label>
                            {errors?.checkbox && <span className="text-red text-xs mt-1 flex items-center"><BsInfoCircle className="mr-1 font-bold text-base" />{errors?.checkbox?.message}</span>}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-blue hover:bg-transparent border-blue text-white hover:text-blue hover:border-blue w-full transition-all duration-200 font-bold shadow-2xl">Register</button>
                        </div>
                        <div className="mt-1">
                            <p className="text-xs md:text-sm">Or, Already have an account? <Link to="/login" className="text-blue underline font-semibold">Login here</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;