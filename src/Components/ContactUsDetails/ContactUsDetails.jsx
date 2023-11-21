import { FiClock, FiMapPin, FiPhoneCall } from 'react-icons/fi';
import SectionTitle from '../SectionTitle/SectionTitle';

const ContactUsDetails = () => {
    return (
        <>
                            <SectionTitle heading={"OUR LOCATION"} subHeading={"Visit Us"} />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
                    <div className=" border border-gray-200">
                        <div className="flex justify-center items-center py-2.5 px-3 bg-[#D1A054] text-white">
                            <FiPhoneCall size={25} />
                        </div>
                        <div className="bg-[#F3F3F3] py-2.5 px-3 mx-3 mb-2">
                            <h3 className="text-xl font-medium uppercase text-center">Phone</h3>
                            <p className="text-[#444] text-center">+38 (012) 34 56 789</p>
                        </div>
                    </div>
                    <div className=" border border-gray-200">
                        <div className="flex justify-center items-center py-2.5 px-3 bg-[#D1A054] text-white">
                            <FiMapPin size={25} />
                        </div>
                        <div className="bg-[#F3F3F3] py-2.5 px-3 mx-3 mb-2">
                            <h3 className="text-xl font-medium uppercase text-center">Address</h3>
                            <p className="text-[#444] text-center">+38 (012) 34 56 789</p>
                        </div>
                    </div>
                    <div className=" border border-gray-200">
                        <div className="flex justify-center items-center py-2.5 px-3 bg-[#D1A054] text-white">
                            <FiClock size={25} />
                        </div>
                        <div className="bg-[#F3F3F3] py-2.5 px-3 mx-3 mb-2">
                            <h3 className="text-xl font-medium uppercase text-center">
                                Working Hours
                            </h3>
                            <p className="text-[#444] text-center">Mon - Fri: 08:00 - 22:00</p>
                            <p className="text-[#444] text-center">Sat - Sun: 10:00 - 23:00</p>
                        </div>
                    </div>
                </div>
        </>
    );
};

export default ContactUsDetails;