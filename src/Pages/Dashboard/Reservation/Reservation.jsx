import ContactUsDetails from "../../../Components/ContactUsDetails/ContactUsDetails";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Reservation = () => {
    return (
        <div>
            <div>
                <SectionTitle heading={"BOOK A TABLE"} subHeading={"Reservation"} />
                <div>
                    <form>
                        <div className="grid grid-cols-1 md:grid-cols-3 px-3 py-5 max-w-screen-lg mx-auto gap-5">
                            <div className="space-y-3">
                                <label
                                    className="block text-lg font-semibold text-[#444]"
                                    htmlFor="date"
                                >
                                    Date*
                                </label>
                                <input
                                    className="border border-[#E8E8E8] outline-none rounded-lg py-1.5 px-3 w-full"
                                    type="date"
                                    name="date"
                                    id="date"
                                />
                            </div>
                            <div className="space-y-3">
                                <label
                                    className="block text-lg font-semibold text-[#444]"
                                    htmlFor="time"
                                >
                                    Time*
                                </label>
                                <input
                                    className="border border-[#E8E8E8] outline-none rounded-lg py-1.5 px-3 w-full"
                                    type="time"
                                    name="time"
                                    id="time"
                                />
                            </div>
                            <div className="space-y-3">
                                <label
                                    className="block text-lg font-semibold text-[#444]"
                                    htmlFor="guest"
                                >
                                    Guest*
                                </label>
                                <select
                                    className="border border-[#E8E8E8] outline-none rounded-lg py-2 px-3 w-full"
                                    name="guest"
                                    id="guest"
                                >
                                    <option value="person-one">1 Person</option>
                                    <option value="person-two">2 Person</option>
                                    <option value="person-three">3 Person</option>
                                </select>
                            </div>
                            <div className="space-y-3">
                                <label
                                    className="block text-lg font-semibold text-[#444]"
                                    htmlFor="name"
                                >
                                    Name*
                                </label>
                                <input
                                    className="border border-[#E8E8E8] outline-none rounded-lg py-1.5 px-3 w-full"
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="space-y-3">
                                <label
                                    className="block text-lg font-semibold text-[#444]"
                                    htmlFor="phone"
                                >
                                    Phone*
                                </label>
                                <input
                                    className="border border-[#E8E8E8] outline-none rounded-lg py-1.5 px-3 w-full"
                                    type="tel"
                                    name="phone"
                                    id="phone"
                                    placeholder="Phone Number"
                                />
                            </div>
                            <div className="space-y-3">
                                <label
                                    className="block text-lg font-semibold text-[#444]"
                                    htmlFor="email"
                                >
                                    Email*
                                </label>
                                <input
                                    className="border border-[#E8E8E8] outline-none rounded-lg py-1.5 px-3 w-full"
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                />
                            </div>
                        </div>
                        <div className="flex justify-center items-center py-3">
                            <button
                                type="submit"
                                className="text-white bg-gradient-to-t from-[#835D23] to-[#B58130] border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                            >
                                Book A Table
                            </button>
                        </div>
                    </form>
                </div>
                <div className="px-5">
                    <ContactUsDetails/>
                </div>
            </div>
        </div>
    );
};

export default Reservation;
