import { useQuery } from "@tanstack/react-query";
import Loading from "../../../Components/Loading/Loading";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAuth from "../../../Hooks/useAuth";
import useAxios from "../../../Hooks/useAxios";

const PaymentHistory = () => {
    const { user } = useAuth();
    const axios = useAxios();
    const email = user?.email;
    const { data: payments, isLoading } = useQuery({
        queryKey: ["payments", email],
        queryFn: async () => {
            const { data } = await axios.get(`/payments/${email}`);
            console.log(data);
            return data;
        },
    });

    if (isLoading) {
        return <Loading />;
    }
    return (
        <div>
            <SectionTitle heading={"Payment History"} subHeading={"At a Glance!"} />
            <div className="bg-white border border-gray-200/20 shadow-xl rounded-lg p-5">
                <div className="flex justify-between items-center py-3">
                    <h3 className="text-xl font-bold font-Cinzel text--[#151515]">
                        Total Payments: {payments.length}
                    </h3>
                </div>
                <div className="relative rounded-xl overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                        <thead className="text-xs text-white uppercase bg-[#D1A054]">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    EMAIL
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Transaction ID
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    TOTAL PRICE
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    STATUS
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    PAYENT DATE
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {payments.map((item) => (
                                <tr key={item._id} className="bg-white border-b ">
                                    {/* <td className="px-6 py-4">{idx + 1}</td> */}
                                    <td className="px-6 py-4">{item.email}</td>
                                    <td className="px-6 py-4">{item.transaction_id}</td>
                                    <td className="px-6 py-4">$ {item.price}</td>
                                    <td className="px-6 py-4">{item.status}</td>
                                    <td className="px-6 py-4">{item.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;
