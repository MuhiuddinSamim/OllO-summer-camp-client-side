import UseAuth from "./UseAuth";
import UseAxiosSecure from "./UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const UseInstructor = () => {
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
};

export default UseInstructor;