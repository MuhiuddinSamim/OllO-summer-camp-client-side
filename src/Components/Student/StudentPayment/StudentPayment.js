import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import UseClassCart from "../../Hooks/UseClassCart";
import CheckOutStudentPayment from "../CheckOutStudentPayment/CheckOutStudentPayment";



const stripePromise = loadStripe('pk_test_51NHEHMSJoHGOJgFG6Htgr1170WTs9SHx7DmSOcXkWowXtqNJZxNyeKR2sIomClpe623QCBtHGeH6xTamtBnUq8vx00SwnTKmDy');
// const stripePromise = loadStripe(process.env.REACT_APP_Payment_PK_Key);
// console.log(process.env.REACT_APP_Payment_PK_Key)


const StudentPayment = () => {

    // console.log(student._id)
    const [Student] = UseClassCart();
    // console.log(Student)

    const total = Student.reduce((sum, item) => sum + item.Price, 0);

    const Price = parseFloat(total.toFixed(2))



    return (
        <div className='w-full p-5'>
            <div className="flex justify-center items-center text-4xl">
                <h1>Payment Continue Please</h1>
            </div>
            <div className="divider"></div>

            <div className="w-2/3 m-8">
                <Elements stripe={stripePromise} >
                    <CheckOutStudentPayment
                        Price={Price}
                        Student={Student}
                    ></CheckOutStudentPayment>
                </Elements>
            </div>



        </div>
    );
};


export default StudentPayment;