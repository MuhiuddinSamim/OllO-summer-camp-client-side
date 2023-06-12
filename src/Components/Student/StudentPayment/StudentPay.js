import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import StudentData from './StudentData';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutStudentPayment from '../CheckOutStudentPayment/CheckOutStudentPayment';
import { Helmet } from 'react-helmet-async';

const stripePromise = loadStripe(process.env.REACT_APP_Payment_PK_Key);


const StudentPay = ({ p }) => {
    const [selects, refetch] = StudentData()
    const { Price } = p
    const payPrice = parseFloat(Price.toFixed(2))
    // console.log(p)

    return (
        <div>
            <Helmet>
                <title>Payment || Dance School </title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>

            <Elements stripe={stripePromise}>
                <CheckOutStudentPayment
                    refetch={refetch}
                    selects={selects}
                    price={payPrice}>
                </CheckOutStudentPayment>
            </Elements>
        </div>

    );
};

export default StudentPay;