import { RiDeleteBin5Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAxios from "../../../Hooks/useAxios";
import useCart from "../../../Hooks/useCart";

const MyCart = () => {
    const [cart, refetch] = useCart();
    const axios = useAxios();
    const total = cart.reduce((total, item) => total + item.price, 0);
    
    const handleDelete = async (id) => {
        try {
            const swalConfirm = await Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!",
            });
            if (swalConfirm.isConfirmed) {
                const { data } = await axios.delete(`/carts/${id}`);
                console.log(data);
                if (data.deletedCount) {
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success",
                    });
                }
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="py-5 px-3">
            <SectionTitle heading={"WANNA ADD MORE?"} subHeading={"My Cart"} />
            <div className="bg-white border border-gray-200/20 shadow-xl rounded-lg p-5">
                <div className="flex justify-between items-center py-3">
                    <h3 className="text-xl font-bold font-Cinzel text--[#151515]">
                        Total orders: {cart.length}
                    </h3>
                    <h3 className="text-xl font-bold font-Cinzel text--[#151515]">
                        total price: {total}
                    </h3>
                    {
                        cart.length?
                        <Link to='/dashboard/payment'>
                            <button className="bg-[#D1A054] text-white  py-0.5 px-3">Pay</button>
                        </Link>:
                        <button disabled className="bg-[#D1A054] text-white disabled:bg-[#ecd4af]  py-0.5 px-3">Pay</button>
                    }
                </div>
                <div className="relative rounded-xl overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                        <thead className="text-xs text-white uppercase bg-[#D1A054]">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    No.
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    ITEM IMAGE
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    ITEM NAME
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    PRICE
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    ACTION
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item, idx) => (
                                <tr key={item._id} className="bg-white border-b ">
                                    <td className="px-6 py-4">{idx + 1}</td>
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                                    >
                                        <img className="w-20 rounded" src={item.image} alt="" />
                                    </th>
                                    <td className="px-6 py-4">{item.name}</td>
                                    <td className="px-6 py-4">$ {item.price}</td>
                                    <td className="px-6 py-4">
                                        <button
                                            onClick={() => handleDelete(item._id)}
                                            className=" text-red-500 "
                                        >
                                            <RiDeleteBin5Line size={25} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyCart;
