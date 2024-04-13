import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import { FaFacebook } from "react-icons/fa6";
import { AiFillGoogleCircle } from "react-icons/ai";

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="hero card-body min-h-screen bg-red">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left text-white lg:ml-8">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">Welcome to BB-RealEstate Login!</h1>
                    <p className="py-6 md:text-md text-xs md:text-sm lg:text-base md:px-24 lg:px-0">
                        Please sign in to access your account. If you do not have an account yet, <br /> you can <Link to="/register" className="text-blue underline shadow-md font-medium">register here</Link>.

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
                            <input {...register("email", { required: true })} type="email" placeholder="email" className="input input-bordered" />
                            {errors.email && <span className="text-red text-sm mt-1">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input {...register("password", { required: true })} type="password" placeholder="password" className="input input-bordered" />
                            {errors.password && <span className="text-red text-sm mt-1">This field is required</span>}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-blue hover:bg-transparent border-blue text-white hover:text-blue hover:border-blue w-full transition-all duration-200 font-bold shadow-2xl">Login</button>
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