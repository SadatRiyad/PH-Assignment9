import { Link } from "react-router-dom";
import { useForm} from "react-hook-form"

const Register = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();

    const password = watch("password");
    console.log(password)

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="hero card-body min-h-screen bg-red">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left text-white lg:ml-8">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">Welcome to BB-RealEstate Login!</h1>
                    <p className="py-6 text-base md:text-md">
                        Please sign in to access your account. If you do not have an account yet, <br /> you can <Link to="/register" className="text-blue underline shadow-md font-medium">register here</Link>.

                        If you have any questions or need assistance, feel free to contact our support team.

                    </p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email", { required: true })} type="email"  placeholder="email" className="input input-bordered" />
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
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;