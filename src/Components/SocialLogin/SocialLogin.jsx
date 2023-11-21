import toast from "react-hot-toast";
import { BiLogoFacebook, BiLogoGithub, BiLogoGoogle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const SocialLogin = () => {
    const { googleLogin } = useAuth();
    const axios = useAxiosPublic();
    const navigate = useNavigate()
    const handleGoogleLogin = async () => {
        toast.loading("User Login In ... ");
        try {
            const {user} = await googleLogin();
            if (user?.email) {
                const newUser = {name:user.displayName, email:user?.email, createdAt: user?.metadata?.creationTime, lastSignInTime:user?.metadata?.lastSignInTime}
                await axios.post('/users', newUser)
                toast.dismiss();
                toast.success("User Success ... ");
                navigate('/')
            }
        } catch (error) {
            console.log(error.code);
        }
    };
    return (
        <div>
            <p className="text-[#444] text-sm text-center font-semibold">Or sign up with</p>
            <div className="flex justify-center items-center py-2 gap-5">
                <BiLogoFacebook className="border rounded-full border-[#444]" size={25} />
                <BiLogoGoogle
                    onClick={handleGoogleLogin}
                    className="border rounded-full border-[#444]"
                    size={25}
                />
                <BiLogoGithub className="border rounded-full border-[#444]" size={25} />
            </div>
        </div>
    );
};

export default SocialLogin;
