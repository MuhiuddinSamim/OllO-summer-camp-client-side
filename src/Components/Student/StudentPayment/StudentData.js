import { useQuery } from '@tanstack/react-query'
import UseAuth from '../../Hooks/UseAuth';
import UseAxiosSecure from '../../Hooks/UseAxiosSecure';



const StudentData = () => {
    const { User, loading } = UseAuth();
    const [axiosSecure] = UseAxiosSecure();
    // const token = localStorage.getItem('access_token');


    const { refetch, data: selects = [] } = useQuery({
        queryKey: ['carts', User?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/student?email=${User?.email}`)
            // console.log(res.data)
            return res.data;
        },
    })

    return [selects, refetch];

}
export default StudentData;

