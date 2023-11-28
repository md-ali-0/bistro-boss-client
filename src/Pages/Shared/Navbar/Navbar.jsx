import { BsCart4 } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import useAdmin from "../../../Hooks/useAdmin";
import useAuth from "../../../Hooks/useAuth";
import useCart from "../../../Hooks/useCart";

const Navbar = () => {
    const { user, logOut } = useAuth();
    const [isAdmin] = useAdmin();
    const [cart] = useCart();
    const navOptions = (
        <>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/menu">Our Manu</NavLink>
            </li>
            <li>
                <NavLink to="/our-food/salad">Our Shop</NavLink>
            </li>
            <li>
                <NavLink to="/contact-us">Contact Us</NavLink>
            </li>
            {user && (
                <li>
                    <NavLink to={isAdmin ? "/dashboard/home" : "/dashboard/user-home"}>
                        Dashboard
                    </NavLink>
                </li>
            )}

            <li>
                <Link
                    to="/dashboard/cart"
                    className="ms-0 relative inline-flex items-center text-sm font-medium rounded-full bg-green-800  shadow-sm text-white"
                >
                    <BsCart4 size={20} />
                    <span className="flex absolute top-0 end-0 mt-4 -me-3">
                        <span className="relative inline-flex text-xs bg-red-500 text-white rounded-full py-0.5 px-1.5">
                            {cart.length}
                        </span>
                    </span>
                </Link>
            </li>
        </>
    );
    const handleLogOut = () => {
        logOut();
    };
    return (
        <>
            <div className="navbar fixed z-10 text-white w-full bg-opacity-30 bg-black">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            {navOptions}
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost normal-case text-xl font-Cinzel">
                        Bistro Boss
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">{navOptions}</ul>
                </div>
                {user ? (
                    <div className="navbar-end gap-3">
                        <span>{user?.displayName}</span>
                        <button onClick={handleLogOut} className="btn btn-outline">
                            Logout
                        </button>
                    </div>
                ) : (
                    <div className="navbar-end gap-3">
                        <Link to="/login" className="btn">
                            Login
                        </Link>
                        <Link
                            to="/register"
                            className="flex items-center justify-center rounded-lg text-white bg-gradient-to-t from-[#835D23] to-[#B58130] border-0 py-2 px-2.5 focus:outline-none hover:bg-[#835D23] text-lg"
                        >
                            Register
                        </Link>
                    </div>
                )}
            </div>
        </>
    );
};

export default Navbar;
