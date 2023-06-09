import React, { useEffect, useState } from 'react';
import UseAxiosSecure from '../../Hooks/UseAxiosSecure';
import MyClassCart from '../MyClassCart/MyClassCart';


const MyClass = () => {
    const [axiosSecure,] = UseAxiosSecure();
    const [MyClass, setMyClass] = useState([]);

    useEffect(() => {
        axiosSecure.get('/newClassAdd')
            .then(response => {
                const MyClass = response.data;
                setMyClass(MyClass);
                // console.log(MyClass);
            })
            .catch(error => {

            });
    }, []);
    return (
        <div className="w-11/12 md:10/12 mx-auto grid sm:grid-cols-1 
        md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12 py-3 px-3">

            {MyClass.map((cartClass)=>
            <MyClassCart
            key={cartClass._id}
            cartClass={cartClass}
            >
            </MyClassCart>)}

        </div>
    );
};

export default MyClass;