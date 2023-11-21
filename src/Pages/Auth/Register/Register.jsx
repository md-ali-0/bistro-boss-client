import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { Link, Navigate, useNavigate } from "react-router-dom";
import SocialLogin from "../../../Components/SocialLogin/SocialLogin";
import useAuth from "../../../Hooks/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import authBg from "../../../assets/others/authentication.png";
import authImage from "../../../assets/others/authentication2.png";


const Register = () => {
    const { createRegister, setLoading, logOut, userUpdate } = useAuth();
    const navigate = useNavigate()
    const axios = useAxiosPublic()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const { name, image, email, password} = data
        toast.loading('User Creating ... ');

        try {
            const {user} = await createRegister(email, password)
            if (user.email) {
                try {
                    await userUpdate(name,image)
                    const newUser = {name, email, createdAt: user?.metadata?.creationTime, lastSignInTime:user?.metadata?.lastSignInTime}
                    const userSaved = await axios.post('/users', newUser)
                    console.log(userSaved.data);
                    toast.dismiss()
                    toast.success('User Created ... ');
                    
                    <Navigate to='/login' replace/>
                    logOut();
                    navigate('/login');
                } catch (err) {
                    toast.dismiss()
                    toast.error(err.code);
                }

            } else{
                toast.dismiss()
                setLoading(false)
                toast.error('Something Went Wrong ... ');
            }
        } catch (err) {
            toast.dismiss()
            toast.error(err.code);
        }
        
    };

    return (
        <div
            className="bg-cover bg-center min-h-screen md:px-16 md:py-10"
            style={{ backgroundImage: `url(${authBg})` }}
        >
            <Helmet>
                <title>Bistro Boss | Register</title>
            </Helmet>
            <div className="flex justify-between items-center py-10 rounded-xl border border-gray-300 shadow-xl shadow-gray-400 px-10">
                <div className="flex min-h-full flex-col justify-center  md:w-1/2">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Sign Up
                        </h2>
                    </div>
                    <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form
                            className="space-y-6"
                            action="#"
                            method="POST"
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="name"
                                        {...register("name", {
                                            required: "Name is Required",
                                            maxLength: {
                                                value: 30,
                                                message:
                                                    "Name Can not be grater then 30 characters",
                                            },
                                            minLength: {
                                                value: 3,
                                                message: "Name Can not be less then 3 characters",
                                            },
                                        })}
                                        type="text"
                                        className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 px-3 ${
                                            errors.name && "input-error"
                                        }`}
                                        aria-invalid={errors.name ? "true" : "false"}
                                    />

                                    {errors.name && (
                                        <div className="text-md text-red-500">
                                            <span>{errors.name.message}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="image"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Photo Url
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="image"
                                        {...register("image", {
                                            required: "Image is Required",
                                        })}
                                        type="link"
                                        className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 px-3 ${
                                            errors.image && "input-error"
                                        }`}
                                        aria-invalid={errors.image ? "true" : "false"}
                                    />

                                    {errors.image && (
                                        <div className="text-md text-red-500">
                                            <span>{errors.image.message}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Email
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        {...register("email", {
                                            required: "Email is Required",
                                            pattern: {
                                                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                                                message: "Invalid Email format",
                                            },
                                        })}
                                        type="email"
                                        className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 px-3 ${
                                            errors.email && "input-error"
                                        }`}
                                        aria-invalid={errors.mail ? "true" : "false"}
                                    />

                                    {errors.email && (
                                        <div className="text-md text-red-500">
                                            <span>{errors.email.message}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between">
                                    <label
                                        htmlFor="password"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Password
                                    </label>
                                    <div className="text-sm">
                                        <a href="#" className="font-semibold text-primary">
                                            Forgot password?
                                        </a>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        {...register("password", {
                                            required: "Password is Required",
                                            minLength: {
                                                value: 6,
                                                message: "Password Must be Grater then 6",
                                            },
                                            maxLength: {
                                                value: 20,
                                                message: "Password Must be Less then 20",
                                            },
                                            pattern: {
                                                value: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])/,
                                                message:
                                                    "Invalid password: no capitals, specials or numbers.",
                                            },
                                        })}
                                        type="password"
                                        className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 px-3 ${
                                            errors.email && "input-error"
                                        }`}
                                        aria-invalid={errors.mail ? "true" : "false"}
                                    />
                                </div>
                                {errors.password && (
                                    <div className="text-md text-red-500">
                                        <span>{errors.password.message}</span>
                                    </div>
                                )}
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                >
                                    Sign Up
                                </button>
                            </div>
                        </form>
                        <p className="mt-5 text-center text-sm text-gray-500">
                            Already registered ?
                            <Link
                                to="/login"
                                className="font-bold px-1 leading-6 text-primary hover:text-primary"
                            >
                                Go to log in
                            </Link>
                        </p>
                    </div>
                    <SocialLogin/>
                </div>
                <img className="hidden md:block md:w-1/2" src={authImage} alt="" />
            </div>
        </div>
    );
};

export default Register;
