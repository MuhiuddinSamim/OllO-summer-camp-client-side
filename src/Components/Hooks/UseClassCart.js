import { useQuery } from '@tanstack/react-query'
import UseAuth from './UseAuth';
import UseAxiosSecure from './UseAxiosSecure';


const useClassCart = () => {
    const { User, loading } = UseAuth();   
    const [axiosSecure] = UseAxiosSecure();
    const { refetch, data: student = [] } = useQuery({
        queryKey: ['student', User?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/student?email=${User?.email}`)
            // console.log('res from axios', res)
            return res.data;
        },
    })

    return [student, refetch]

}
export default useClassCart;

