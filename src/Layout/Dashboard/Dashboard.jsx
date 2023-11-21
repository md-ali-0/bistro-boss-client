import { AiOutlineMenuUnfold } from "react-icons/ai";
import { BsCalendar2HeartFill, BsCartDashFill } from "react-icons/bs";
import { FaBook, FaCalendarAlt, FaCommentAlt, FaListUl, FaShoppingCart, FaUsers, FaWallet } from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import { RiHomeSmileFill } from "react-icons/ri";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";
import useCart from "../../Hooks/useCart";
const Dashboard = () => {
    
    const [cart] = useCart();
    const [isAdmin] = useAdmin()

    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-[#D1A054]">
                <div className="text-center">
                    <h3 className="font-Cinzel text-2xl text-[#151515] font-bold">Bistro Boss</h3>
                    <p className="text-[#151515] text-lg font-bold tracking-[5.5px]">Restaurant</p>
                </div>
                <ul className="menu space-y-1">
                    {isAdmin ? (
                        <>
                            <li>
                                <NavLink to="/dashboard/home" className="font-Cinzel">
                                    {" "}
                                    <BsCartDashFill />
                                    Admin Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/add-item" className="font-Cinzel">
                                    {" "}
                                    <ImSpoonKnife />
                                    add items
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manage-items" className="font-Cinzel">
                                    {" "}
                                    <FaListUl />
                                    manage items
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/cart" className="font-Cinzel">
                                    {" "}
                                    <FaBook />
                                    Manage bookings
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/users" className="font-Cinzel">
                                    {" "}
                                    <FaUsers />
                                    all users
                                </NavLink>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <NavLink to="/dashboard/user-home" className="font-Cinzel">
                                    {" "}
                                    <BsCartDashFill />
                                    User Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/reservation" className="font-Cinzel">
                                    {" "}
                                    <FaCalendarAlt />
                                    Reservation
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/payment-history" className="font-Cinzel">
                                    {" "}
                                    <FaWallet />
                                    Payment History
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/cart" className="font-Cinzel">
                                    {" "}
                                    <FaShoppingCart />
                                    My Cart({cart.length})
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/add-review" className="font-Cinzel">
                                    {" "}
                                    <FaCommentAlt />
                                    Add Review
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/my-bookings" className="font-Cinzel">
                                    {" "}
                                    <BsCalendar2HeartFill />
                                    My Bookings
                                </NavLink>
                            </li>
                        </>
                    )}
                    <span className="py-3">
                        <hr className="my-3" />
                    </span>
                    <li>
                        <NavLink to="/" className="font-Cinzel">
                            {" "}
                            <BsCartDashFill />
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/menu" className="font-Cinzel">
                            {" "}
                            <AiOutlineMenuUnfold />
                            Menu
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/our-shop/salad" className="font-Cinzel">
                            {" "}
                            <RiHomeSmileFill />
                            Shop
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact-us" className="font-Cinzel">
                            {" "}
                            <RiHomeSmileFill />
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
