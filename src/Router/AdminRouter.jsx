import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Components/Loading/Loading";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";

const AdminRouter = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useAuth();
    const [isAdmin, isAdminPending] = useAdmin();

    if (loading || isAdminPending) {
        return <Loading />;
    }
    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />;
};

export default AdminRouter;
