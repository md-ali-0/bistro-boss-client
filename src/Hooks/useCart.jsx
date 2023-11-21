import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxios from './useAxios';

const useCart = () => {
    const axios=useAxios()
    const { user } = useAuth()
    const email = user?.email
    const {data:cart=[], refetch} = useQuery({
        queryKey: ['cart',email],
        queryFn: async()=>{
            try {
                const {data} = await axios.get(`/carts?email=${email}`)
                return data
            } catch (error) {
                console.log(error);
            }
        }
    })
    return [cart, refetch]
};

export default useCart;