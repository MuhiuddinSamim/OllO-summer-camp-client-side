import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import UseAuth from '../../Hooks/UseAuth';
import UseAxiosSecure from '../../Hooks/UseAxiosSecure';
// import './CheckOutStudentPayment.css'

const CheckOutStudentPayment = ({ Price, Student }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { User } = UseAuth();
    const [axiosSecure] = UseAxiosSecure();
    const [clientSecret, setClientSecret] = useState('');
    const [cardError, setCardError] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');

    useEffect(() => {
        axiosSecure
            .post('/create-payment-intent', { Price })
            .then(res => {
                setClientSecret(res.data.clientSecret);
            })
            .catch(error => {
                console.log(error);
            });
    }, [axiosSecure, Price]);

    const handleSubmit = async event => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            setCardError(error.message);
            return;
        }

        setProcessing(true);

        try {
            const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
                payment_method: paymentMethod.id,
                receipt_email: User?.email || 'unknown',
                metadata: {
                    selectedClass: JSON.stringify(Student.map(student => student._id))
                }
            });

            if (confirmError) {
                console.log(confirmError);
            }

            setProcessing(false);

            if (paymentIntent && paymentIntent.status === 'succeeded') {
                setTransactionId(paymentIntent.id);
                const payment = {
                    email: User?.email,
                    transactionId: paymentIntent.id,
                    Price,
                    date: new Date(),
                    quantity: Student.length,
                    selectedClass: Student.map(student => student._id),
                    studentDetails: Student.map(student => ({
                        classId: student.student.class_id,
                        className: student.student.name,
                        classImage: student.student.image
                    }))
                };

                axiosSecure
                    .post('/payments', payment)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.insertResult && res.data.insertResult.insertedId) {
                            // Handle successful payment insertion
                        }
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: '16px',
                                    color: '#424770',
                                    '::placeholder': { color: '#aab7c4' }
                                },
                                invalid: {
                                    color: '#9e2146'
                                }
                            }
                        }}
                    />
                    <button className='btn btn-primary btn-sm mt-3' type="submit" disabled={!stripe || !clientSecret || processing}>
                        Pay
                    </button>
                </form>
                {cardError && <p className='text-red-600'>{cardError}</p>}
                {transactionId && <p className='text-green-600'>Transaction Complete with TransactionId: {transactionId}</p>}
            </div>
        </>
    );
};

export default CheckOutStudentPayment;
