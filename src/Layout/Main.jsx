import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Main = () => {
    const location = useLocation()
    const isNoHeaderFooter = location.pathname === '/login' || location.pathname === '/register'
    return (
        <>
            {
                !isNoHeaderFooter &&  <Navbar/>
            }
                <Outlet/>
            {
                !isNoHeaderFooter &&  <Footer/>
            }
        </>
    );
};

export default Main;