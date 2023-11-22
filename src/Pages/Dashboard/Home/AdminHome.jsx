import { useQuery } from "@tanstack/react-query";
import { FaBox, FaUsers, FaWallet } from "react-icons/fa";
import { FaVanShuttle } from "react-icons/fa6";
import Loading from "../../../Components/Loading/Loading";
import useAxios from "../../../Hooks/useAxios";
import Chart from "./BarChart";
import PieChartComponent from "./PieChart";

const AdminHome = () => {
    const axios = useAxios();
    const { data: adminStats=[], isLoading } = useQuery({
        queryKey: ["adminStats"],
        queryFn: async () => {
            const { data } = await axios.get("/admin-stats");
            return data;
        },
    });
    const { data: dashStats=[] } = useQuery({
        queryKey: ["dashStats"],
        queryFn: async () => {
            const { data } = await axios.get("/order-stats");
            return data;
        },
    });
    if (isLoading) {
        return <Loading />;
    }
    const { totalUsers, totalOrders, totalMenus, totalRevenue } = adminStats;
    return (
        <div className="px-5 py-10">
            <h3 className="font-Cinzel text-[#151515] text-xl font-bold">Hi, Welcome Back!</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-5">
                <div className="bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] rounded-xl py-5">
                    <div className="flex justify-center items-center gap-2 px-3">
                        <FaWallet size={40} fill="white" />
                        <dir>
                            <h3 className="text-2xl font-extrabold text-white">{totalRevenue}</h3>
                            <p className="text-lg font-medium text-white">Revenue</p>
                        </dir>
                    </div>
                </div>
                <div className="bg-gradient-to-r from-[#D3A256] to-[#FCDBFF] rounded-xl py-5">
                    <div className="flex justify-center items-center gap-2 px-3">
                        <FaUsers size={40} fill="white" />
                        <dir>
                            <h3 className="text-2xl font-extrabold text-white">{totalUsers}</h3>
                            <p className="text-lg font-medium text-white">Customers</p>
                        </dir>
                    </div>
                </div>
                <div className="bg-gradient-to-r from-[#FE4880] to-[#FCDBFF] rounded-xl py-5">
                    <div className="flex justify-center items-center gap-2 px-3">
                        <FaBox size={40} fill="white" />
                        <dir>
                            <h3 className="text-2xl font-extrabold text-white">{totalMenus}</h3>
                            <p className="text-lg font-medium text-white">Products</p>
                        </dir>
                    </div>
                </div>
                <div className="bg-gradient-to-r from-[#6AAEFF] to-[#FCDBFF] rounded-xl py-5">
                    <div className="flex justify-center items-center gap-2 px-3">
                        <FaVanShuttle size={40} fill="white" />
                        <dir>
                            <h3 className="text-2xl font-extrabold text-white">{totalOrders}</h3>
                            <p className="text-lg font-medium text-white">Orders</p>
                        </dir>
                    </div>
                </div>
            </div>
            <div className="flex">
                <div className="md:w-1/2">
                    <Chart dashStats={dashStats}/>
                </div>
                <div className="md:w-1/2">
                    <PieChartComponent dashStats={dashStats}/>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;
