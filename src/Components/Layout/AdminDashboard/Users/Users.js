import React from 'react';
import { useQuery } from 'react-query';

const Users = () => {
    const {data: Users=[], refetch} = useQuery(['users', async()=>{
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    }])
    return (
        <div>
            all users
        </div>
    );
};

export default Users;