import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import useAxios from "../../../Hooks/useAxios";
import useCart from "../../../Hooks/useCart";

const RecomendCard = ({ item }) => {
    const { name, image, price } = item;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axios = useAxios();
    const [,refetch]= useCart()
    const handleDelete = (item) => {
        if (user) {
            const newCart = {
                menuID: item._id,
                email: user.email,
                name: item.name,
                price: item.price,
                image: item.image,
            };
            axios
                .post("/carts", newCart)
                .then((res) => {
                    console.log(res.data);
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${name} added to cart`,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            Swal.fire({
                title: "You are not Logged In",
                text: "Please login to Add Cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!",
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", { state: { form: location } });
                }
            });
        }
    };
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure className="relative">
                <img className="object-cover object-center w-full h-48" src={image} alt="Shoes" />
                <p className="absolute top-4 right-5 text-white bg-black rounded py-0.5 px-2">
                    {price}
                </p>
            </figure>
            <div className="card-body bg-[#F3F3F3]">
                <h2 className="card-title text-[#151515] justify-center">{name}</h2>
                <p className="text-center">
                    Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
                </p>
                <div className="card-actions justify-center">
                    <button
                        onClick={() => handleDelete(item)}
                        className="btn btn-ghost uppercase bg-[#E8E8E8] hover:bg-black border-b-2 border-[#BB8506] text-[#BB8506]"
                    >
                        add to cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RecomendCard;
