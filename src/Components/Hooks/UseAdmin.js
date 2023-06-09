import { Query } from "react-query";
import UseAuth from "./UseAuth";
import UseAxiosSecure from "./UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const UseAdmin = () => {
    const { User, Loading } = UseAuth();
    const [axiosSecure] = UseAxiosSecure();
    // use axios secure with react query
    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
        queryKey: ['isAdmin', User?.email],
        enabled: !Loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${User?.email}`);
            return res.data.admin;
        }
    });
    return [isAdmin, isAdminLoading]
};

export default UseAdmin;



/*
  const { User, Loading } = UseAuth();
    const [axiosSecure] = UseAxiosSecure();
    const { data: isAdmin, isLoading: isAdminLoading } = useQuery(
        queryKey : ['isAdmin', User?.email],
        enabled:!Loading,

       queryFn: async() => {
            const res = await axiosSecure.get(`/users/admin/:${User?.email}`);
            // console.log('is admin', res);
            return res.data.admin
        }
    );
*/