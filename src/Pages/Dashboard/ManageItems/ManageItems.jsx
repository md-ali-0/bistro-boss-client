import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAxios from "../../../Hooks/useAxios";
import useMenu from "../../../Hooks/useMenu";

const ManageItems = () => {
    const axios = useAxios()
    const [menus, , refetch] = useMenu();
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
            })
            if (swalConfirm.isConfirmed) {
                const { data } = await axios.delete(`/menus/${id}`);
                console.log(data);
                if (data.deletedCount) {
                    refetch()
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
                <div className="flex items-center py-3">
                    <h3 className="text-xl font-bold font-Cinzel text--[#151515]">
                        Total orders: {menus.length}
                    </h3>
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
                                <th scope="col" className="px-6 py-3">
                                    ACTION
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {menus.map((item, idx) => (
                                <tr key={item._id} className="bg-white border-b ">
                                    <td className="px-6 py-4">{idx + 1}</td>
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                                    >
                                        <img
                                            className="w-20 rounded"
                                            // draggable="false"
                                            src={item.image}
                                            alt=""
                                        />
                                    </th>
                                    <td className="px-6 py-4">{item.name}</td>
                                    <td className="px-6 py-4">$ {item.price}</td>
                                    <td className="px-6 py-4">
                                        <Link
                                            className="text-[#D1A054] p-1.5 rounded"
                                            to={`/dashboard/edit-item/${item._id}`}
                                        >
                                            <FiEdit  size={25} />
                                        </Link>
                                    </td>
                                    <td className="px-6 py-4">
                                        <button
                                            onClick={() => handleDelete(item._id)}
                                            className="bg-red-500 text-white p-1.5 rounded"
                                        >
                                            <RiDeleteBin5Line size={20} />
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

export default ManageItems;
