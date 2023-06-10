import React from "react";
import CheckOutStudentPayment from "../CheckOutStudentPayment/CheckOutStudentPayment";
// import { loadStripe } from '@stripe/stripe-js';
// import { Elements } from '@stripe/react-stripe-js';

// const stripePromise = loadStripe(process.env.payment_getway);


const StudentPayment = () => {
    return (
        <div className='w-full p-5'>
            <div className="flex justify-center items-center text-4xl">
                <h1>Payment Continue Please</h1>
            </div>
            <div className="divider"></div>

            {/* <Elements stripe={stripePromise}>
                <CheckOutStudentPayment></CheckOutStudentPayment>
            </Elements> */}



        </div>
    );
};

export default StudentPayment;
