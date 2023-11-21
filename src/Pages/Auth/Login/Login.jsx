import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
    LoadCanvasTemplate,
    loadCaptchaEnginge as loadCaptchaEngine,
    validateCaptcha,
} from "react-simple-captcha";
import Swal from "sweetalert2";
import SocialLogin from "../../../Components/SocialLogin/SocialLogin";
import useAuth from "../../../Hooks/useAuth";
import authBg from "../../../assets/others/authentication.png";
import authImage from "../../../assets/others/authentication2.png";

const Login = () => {
    const [captchaValue, setCaptchaValue] = useState(null);
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const { createLogin, setLoading } = useAuth();
    const location = useLocation()
    const navigate = useNavigate()

    let from = location?.state?.from?.pathname || '/'
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const { email, password } = data;
        createLogin(email, password)
            .then((res) => {
                if (res.user.email) {
                    Swal.fire({
                        title: "Login Successful",
                        showClass: {
                          popup: `
                            animate__animated
                            animate__fadeInUp
                            animate__faster
                          `
                        },
                        hideClass: {
                          popup: `
                            animate__animated
                            animate__fadeOutDown
                            animate__faster
                          `
                        }
                      });
                      navigate(from, {replace: true})
                } else {
                    Swal.fire({
                        title: "Can't Login. Something Wrong...",
                        showClass: {
                          popup: `
                            animate__animated
                            animate__fadeInUp
                            animate__faster
                          `
                        },
                        hideClass: {
                          popup: `
                            animate__animated
                            animate__fadeOutDown
                            animate__faster
                          `
                        }
                      });
                }
            })
            .catch((err) => {
                Swal.fire({
                    title: err.code,
                    showClass: {
                      popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                    },
                    hideClass: {
                      popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                    }
                  });
            });
    };

    const handleValidCaptcha = () => {
        if (validateCaptcha(captchaValue)) {
            setDisabled(false);
            setError("");
        } else {
            setError("Captcha is Invalid");
        }
    };
    useEffect(() => {
        loadCaptchaEngine(6);
    }, []);
    return (
        <div
            className="bg-cover bg-center min-h-screen md:px-16 md:py-10"
            style={{ backgroundImage: `url(${authBg})` }}
        >
            <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>
            <div className="flex justify-between items-center py-10 rounded-xl border border-gray-300 shadow-xl shadow-gray-400 px-10">
                <img className="hidden md:block md:w-1/2" src={authImage} alt="" />
                <div className="flex min-h-full flex-col justify-center  md:w-1/2">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Login
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
                                        autoComplete="email"
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
                                        })}
                                        type="password"
                                        autoComplete="current-password"
                                        className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 px-3 ${
                                            errors.email && "input-error"
                                        }`}
                                        aria-invalid={errors.mail ? "true" : "false"}
                                    />
                                    {errors.password && (
                                        <div className="text-md text-red-500">
                                            <span>{errors.password.message}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Captcha
                                </label>
                                <LoadCanvasTemplate />
                                {error && (
                                    <span className="text-center font-semibold text-lg text-red-500">
                                        {error}
                                    </span>
                                )}
                                <div className="flex items-center gap-5">
                                    <div className="mt-2">
                                        <input
                                            onBlur={(e) => setCaptchaValue(e.target.value)}
                                            name="captcha"
                                            type="text"
                                            required=""
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 px-3"
                                        />
                                    </div>
                                    <div>
                                        <span
                                            onClick={handleValidCaptcha}
                                            className=" bg-black text-white cursor-pointer border-0 rounded-md px-3 py-1.5"
                                        >
                                            Valid
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-primary disabled:bg-primary/30 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                    disabled={false}
                                >
                                    Sign in
                                </button>
                            </div>
                        </form>
                        <p className="mt-5 text-center text-sm text-gray-500">
                            New Here ?
                            <Link
                                to="/register"
                                className="font-bold px-1 leading-6 text-primary hover:text-primary"
                            >
                                Create a New Account
                            </Link>
                        </p>
                    </div>

                    <SocialLogin/>
                </div>
            </div>
        </div>
    );
};

export default Login;
