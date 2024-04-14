import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import { FaFacebook } from "react-icons/fa6";
import { AiFillGoogleCircle } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { AuthContext } from "../../ContextApi/AuthProvider/AuthProvider";
import { useContext } from "react";

const Login = () => {
    const { loginUser } = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    const onSubmit = (data) => {
        // console.log(data);
        const { email, password } = data;
        loginUser(email, password)
            .then((res) => {
                const { user } = res;
                console.log(user);
            }
            )
            .catch((error) =>{
                console.log(error);
            })
    };

    return (
        <div className="hero card-body px-0 md:px-12 min-h-screen bg-red">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left text-white lg:ml-8">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">Welcome to BB-RealEstate Login!</h1>
                    <p className="py-6 md:text-md text-xs md:text-sm lg:text-base md:px-24 lg:px-0">
                        Please login to access your account. <br />
                        If you have any questions or need assistance, feel free to contact our support team.

                    </p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="flex justify-center w-full mt-8">
                        <div>
                            <h5 className="text-blue font-bold text-4xl">Login Here</h5>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
                        <div className="form-control mt-6">
                            <button className="btn bg-blue hover:bg-transparent border-blue text-white hover:text-blue hover:border-blue w-full transition-all duration-200 font-bold shadow-2xl">Login</button>
                        </div>
                        <div className="mt-1">
                            <p className="text-xs md:text-sm">New user? <Link to="/register" className="text-blue underline font-semibold">Register here</Link></p>
                        </div>
                        <div className="divider text-tertiary font-semibold">or continue with</div>
                        <div className="grid grid-cols-2 gap-4 mb-2">
                            <div className="form-control mt-0">
                                <button className="btn bg-[#1877F2] hover:bg-transparent border-[#1877F2] text-white hover:text-[#1877F2] hover:border-[#1877F2] w-full transition-all duration-200 font-bold shadow-2xl"><FaFacebook /> Facebook</button>
                            </div>
                            <div className="form-control mt-0">
                                <button className="btn bg-[#EA4335] hover:bg-transparent border-[#EA4335] text-white hover:text-[#EA4335] hover:border-[#EA4335] w-full transition-all duration-200 font-bold shadow-2xl"><AiFillGoogleCircle />Google</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;