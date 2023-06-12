import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StudentData from "./StudentData";
import StudentPay from "./StudentPay";




// const stripePromise = loadStripe(process.env.REACT_APP_Payment_PK_Key);
// console.log(process.env.REACT_APP_Payment_PK_Key)


const StudentPayment = () => {

    const { id } = useParams()
    const [selects] = StudentData();
    console.log(selects);
    const [paymentData, setPaymentData] = useState([])

    useEffect(() => {
        if (selects) {
            const payData = selects?.filter(data => data?._id === id)
            setPaymentData(payData);
        }
    }, [selects, id]);


    return (
        <div>
            <h3 className="text-3xl font-semibold">Payment GateWay Management system by user</h3>
            {paymentData?.map(p =>
                <StudentPay
                    key={p._id}
                    p={p}
                ></StudentPay>)

            }

        </div>
    );
};

export default StudentPayment;