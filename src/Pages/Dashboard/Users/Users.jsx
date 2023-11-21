import { useQuery } from "@tanstack/react-query";
import { FaUsers } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import Swal from "sweetalert2";
import Loading from "../../../Components/Loading/Loading";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAxios from "../../../Hooks/useAxios";

const Users = () => {
    const axios = useAxios();
    const {
        data: allUsers = [],
        refetch,
        isLoading,
    } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            try {
                const { data } = await axios.get("/users");
                return data;
            } catch (error) {
                console.log(error);
            }
        },
    });
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
                const { data } = await axios.delete(`/users/${id}`);
                console.log(data);
                if (data.deletedCount) {
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: "User has been deleted.",
                        icon: "success",
                    });
                }
            }
        } catch (error) {
            console.log(error);
        }
    };
    const makeAdmin = async (id) => {
        try {
            const swalConfirm = await Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Make Admin!",
            });
            if (swalConfirm.isConfirmed) {
                const { data } = await axios.patch(`/users/${id}`);
                console.log(data);
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        title: "Admin Made!",
                        text: "User is Now Admin.",
                        icon: "success",
                    });
                }
            }
        } catch (error) {
            console.log(error);
        }
    };
    if (isLoading) {
        return <Loading/>
    }
    return (
        <div className="py-5 px-3">
            <SectionTitle heading={"How many?"} subHeading={"MANAGE ALL USERS"} />
            <div className="bg-white border border-gray-200/20 shadow-xl rounded-lg p-5">
                <div className="flex justify-between items-center py-3">
                    <h3 className="text-xl font-bold font-Cinzel text--[#151515]">
                        Total Users: {allUsers.length}
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
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Email
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Role
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    ACTION
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {allUsers.map((user, idx) => (
                                <tr key={user._id} className="bg-white border-b ">
                                    <td className="px-6 py-4">{idx + 1}</td>
                                    <td className="px-6 py-4">{user.name}</td>
                                    <td className="px-6 py-4">{user.email}</td>

                                    <td className="px-6 py-4">
                                        {user.role == "admin" ? (
                                            <span className="bg-green-600 text-white px-1 py-0.5 rounded-md">Admin</span>
                                        ) : (
                                            <button
                                                onClick={() => makeAdmin(user._id)}
                                                className=" text-white bg-orange-400 p-1 rounded"
                                            >
                                                <FaUsers size={25} />
                                            </button>
                                        )}
                                    </td>
                                    <td className="px-6 py-4">
                                        <button
                                            onClick={() => handleDelete(user._id)}
                                            className=" text-white bg-red-700 p-1 rounded"
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

export default Users;
