import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxios from './useAxios';

const useAdmin = () => {
    const {user, loading} = useAuth()
    const axios = useAxios()
    
    const {data: isAdmin, isPending: isAdminPending} = useQuery({
        queryKey:[user?.email, 'isAdmin'],
        // enabled: !!user?.email,
        enabled: !loading,
        queryFn: async()=>{
            const {data} = await axios.get(`/users/${user?.email}`)
            return data.admin
        }
    })

    return [isAdmin,isAdminPending]
};

export default useAdmin;