import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import UseAuth from '../../Hooks/UseAuth';
import UseAxiosSecure from '../../Hooks/UseAxiosSecure';
import axios from 'axios';

const CheckOutStudentPayment = ({ Price }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { User } = UseAuth();
    const [axiosSecure] = UseAxiosSecure();
    const [cardError, setCartError] = useState('');
    const [clientSecret, setClientSecret] = useState('');

    useEffect(() => {
        console.log(Price);
        axiosSecure
            .post('/create-payment-intent', { Price })
            .then(res => {
                setClientSecret(res.data.clientSecret);
                console.log(res.data.clientSecret);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const handleSubmit = async event => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            console.log('error', error);
            setCartError(error.message);
        } else {
            setCartError('');
            console.log('payment method');
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: User?.email || 'unknown',
                        name: User?.displayName || 'anonymous'
                    }
                }
            }
        );

        if (confirmError) {
            console.log(confirmError);
        }

        console.log('payment intent', paymentIntent);
    };

    return (
        <>
            <form className="w-2/3 m-8" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4'
                                }
                            },
                            invalid: {
                                color: '#9e2146'
                            }
                        }
                    }}
                />
                <button className="btn btn-primary btn-sm mt-4"
                    type="submit"
                    disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
            {/* {transactionId && <p className="text-green-500">Transaction complete with transactionId: {transactionId}</p>} */}
        </>
    );
};

export default CheckOutStudentPayment;
