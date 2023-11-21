import { Helmet } from "react-helmet-async";
import { FiSend } from "react-icons/fi";
import ContactUsDetails from "../../Components/ContactUsDetails/ContactUsDetails";
import Container from "../../Components/Container/Container";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import contactUsImage from "../../assets/contact/banner.jpg";
import Cover from "../Shared/Cover/Cover";

const ContactUs = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Contact Us</title>
            </Helmet>
            <Cover bgUrl={contactUsImage} title={"Contact Us"} />
            <Container>
                <ContactUsDetails/>
                <SectionTitle heading={"CONTACT FORM"} subHeading={"Send Us a Message"} />
                <section className="text-gray-600  relative py-10">
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label
                                        htmlFor="name"
                                        className="leading-7 text-sm text-gray-600"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label
                                        htmlFor="email"
                                        className="leading-7 text-sm text-gray-600"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label
                                        htmlFor="message"
                                        className="leading-7 text-sm text-gray-600"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                        defaultValue={""}
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <button className="flex items-center justify-center gap-3 mx-auto text-white bg-gradient-to-t from-[#835D23] to-[#B58130] border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                    Send Message <FiSend size={20}/>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </Container>
        </div>
    );
};

export default ContactUs;
