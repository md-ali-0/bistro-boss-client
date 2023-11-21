import { useQuery } from "@tanstack/react-query";
import useAxios from './useAxios';

const useMenu = () => {
    const axios = useAxios()
    const {data:menus=[], refetch, isLoading} = useQuery({
        queryKey: ['menus'],
        queryFn: async()=>{
            try {
                const {data} = await axios.get('/menus')
                return data
            } catch (error) {
                console.log(error);
            }
        }
    })
    return [menus, isLoading, refetch]
};

export default useMenu;