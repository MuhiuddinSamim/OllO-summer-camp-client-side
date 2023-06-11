import UseAuth from "./UseAuth";
import UseAxiosSecure from "./UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const UseInstructor = () => {
    const { User, Loading } = UseAuth();
    const [axiosSecure] = UseAxiosSecure();
  
    const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
        queryKey: ['isInstructor', User?.email],
        enabled: !Loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/instructor/${User?.email}`);
            return res.data.instructor;
        }
    });
    return [isInstructor, isInstructorLoading]
};

export default UseInstructor;



/*
 const { user } = UseAuth();
    const [axiosSecure] = UseAxiosSecure();
    const { data: isInstructor, isLoading: isInstructorLoading } = useQuery(
        ['isInstructor', user?.email],
        async () => {
            const res = await axiosSecure.get(`/users/instructor/:${user?.email}`);
            // console.log('is Instructor', res);
            return res.data.instructor
        }
    );

    return [isInstructor, isInstructorLoading];
*/