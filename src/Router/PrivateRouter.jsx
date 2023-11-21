import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Components/Loading/Loading";
import useAuth from "../Hooks/useAuth";

const PrivateRouter = ({children}) => {
    const { user, loading } = useAuth();
    const location = useLocation()

    if (loading) {
        return <Loading/>
    }
    if (user) {
        return children;
    }
    
    return <Navigate to='/login' state={{from: location}}/>
};

export default PrivateRouter;