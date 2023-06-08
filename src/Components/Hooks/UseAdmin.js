import UseAuth from "./UseAuth";
import UseAxiosSecure from "./UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const UseAdmin = () => {
    const { user } = UseAuth();
    const [axiosSecure] = UseAxiosSecure();
    const { data: isAdmin, isLoading: isAdminLoading } = useQuery(
        ['isAdmin', user?.email],
        async () => {
            const res = await axiosSecure.get(`/users/admin/:${user?.email}`);
            // console.log('is admin', res);
            return res.data.admin
        }
    );

    return [isAdmin, isAdminLoading];
};

export default UseAdmin;

