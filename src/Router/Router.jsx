import axios from 'axios';
import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../Layout/Dashboard/Dashboard';
import Main from '../Layout/Main';
import Login from '../Pages/Auth/Login/Login';
import Register from '../Pages/Auth/Register/Register';
import ContactUs from '../Pages/ContactUs/ContactUs';
import AddItem from '../Pages/Dashboard/AddItem/AddItem';
import AddReview from '../Pages/Dashboard/AddReview/AddReview';
import MyCart from '../Pages/Dashboard/Cart/MyCart';
import EditItem from '../Pages/Dashboard/EditItem/EditItem';
import AdminHome from '../Pages/Dashboard/Home/AdminHome';
import DashboardHome from '../Pages/Dashboard/Home/DashbordHome';
import ManageItems from '../Pages/Dashboard/ManageItems/ManageItems';
import MyBookings from '../Pages/Dashboard/MyBookings/MyBookings';
import Payment from '../Pages/Dashboard/Payment/Payment';
import PaymentHistory from '../Pages/Dashboard/PaymentHistory/PaymentHistory';
import Reservation from '../Pages/Dashboard/Reservation/Reservation';
import Users from '../Pages/Dashboard/Users/Users';
import Home from '../Pages/Home/Home';
import Menu from '../Pages/Menu/Menu';
import OurShop from '../Pages/OurShop/OurShop';
import AdminRouter from './AdminRouter';
import PrivateRouter from './PrivateRouter';


const Router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/menu',
                element: <Menu/>
            },
            {
                path: '/our-food/:category',
                element: <OurShop/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            },
            {
                path: '/contact-us',
                element: <ContactUs/>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard/>,
        children: [
            {
                path:'home',
                element: <AdminRouter><AdminHome/></AdminRouter>
            },
            // Admin Routes
            {
                path:'manage-items',
                element: <AdminRouter><ManageItems/></AdminRouter>
            },
            {
                path:'edit-item/:id',
                loader: ({params}) => axios.get(`https://bistro-boss-server-two-wine.vercel.app/menus/${params.id}`),
                element: <AdminRouter><EditItem/></AdminRouter>
            },
            {
                path:'add-item',
                element: <AdminRouter><AddItem/></AdminRouter>
            },
            {
                path:'users',
                element: <AdminRouter><Users/></AdminRouter>
            },
            // Users Routes
            {
                path:'user-home',
                element: <PrivateRouter><DashboardHome/></PrivateRouter>
            },
            {
                path:'reservation',
                element: <PrivateRouter><Reservation/></PrivateRouter>
            },
            {
                path:'cart',
                element: <PrivateRouter><MyCart/></PrivateRouter>
            },
            {
                path:'payment-history',
                element: <PrivateRouter><PaymentHistory/></PrivateRouter>
            },
            {
                path:'payment',
                element: <PrivateRouter><Payment/></PrivateRouter>
            },
            {
                path:'add-review',
                element: <PrivateRouter><AddReview/></PrivateRouter>
            },
            {
                path:'my-bookings',
                element: <PrivateRouter><MyBookings/></PrivateRouter>
            },
        ]
    }
]);
export default Router;
