import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import UseAuth from "../../Hooks/UseAuth";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";



const CheckOutStudentPayment = ({ selects, price: payPrice }) => {
    console.log(selects);
    const stripe = useStripe();
    const elements = useElements();
    const { User } = UseAuth();
    const [axiosSecure] = UseAxiosSecure();
    const [cardError, setCardError] = useState("");
    const [clientSecret, setClientSecret] = useState("");
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState("");

    useEffect(() => {
        if (payPrice > 0) {
            axiosSecure
                .post("/create-payment-intent", { price: payPrice })
                .then((res) => {
                    setClientSecret(res.data.clientSecret);
                })
                .catch((error) => {
                    console.log("Error creating payment intent:", error);
                });
        }
    }, [payPrice, axiosSecure]);

    // console.log(clientSecret)

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        // console.log(card)

        setProcessing(true);


        const { error, } = await stripe.createPaymentMethod({
            type: "card",
            card,
        });

        if (error) {
            setCardError(error.message);
            setProcessing(false);
            return;
        }
        // console.log(clientSecret)
        // console.log(paymentMethod)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: User?.displayName || 'Anonymous',
                        email: User?.email || 'unknown'
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError);
            return;
        }
        setProcessing(false);

        // console.log("paymentIntent", paymentIntent);

        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);
            // save payment information to the server

            const payment = {
                email: User?.email,
                transactionId: paymentIntent.id,
                payPrice,
                date: new Date(),
                classImg: selects?.map(item => item?.ClassImage),
                InstructorEmail: selects?.map(item => item?.InstructorEmail),
                classNames: selects?.map(item => item?.ClassName),
                status: 'pending',
                instructorNames: selects?.map(item => item?.InstructorName),
                AvailableSeats: selects?.map(item => item?.AvailableSeats),
                addItems: selects?.map(item => item?._id),
                quantity: selects.length,
                selectedItems: selects?.map(item => item?.cartItemId),
            };


            axiosSecure
                .post("/payments", payment)
                .then((res) => {
                    // console.log(res.data);
                    if (res?.data?.result?.insertedId) {
                        // Display confirmation message
                    }
                })
                .catch((error) => {
                    console.log("Error saving payment:", error);
                });
        }



        setProcessing(false);
    };



    return (
        <>
            <form className="w-2/3 m-8" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: "16px",
                                color: "#424770",
                                "::placeholder": {
                                    color: "#aab7c4",
                                },
                            },
                            invalid: {
                                color: "#9e2146",
                            },
                        },
                    }}
                />
                <button
                    className="btn btn-primary btn-sm mt-4"
                    type="submit"
                    disabled={!stripe || !clientSecret || processing}
                >
                    Pay
                </button>
            </form>
            {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
            {transactionId && (
                <p className="text-green-500 ml-8">
                    Transaction complete with transactionId: {transactionId}
                </p>
            )}
        </>
    );
};

export default CheckOutStudentPayment;
