import React from 'react';
import { useParams } from 'react-router-dom';

const PaymentFail = () => {
    const {trans_Id} = useParams()
    return (
        <div>
            <h3>{`Payement Failed. Transaction Id : ${trans_Id}`}</h3>
        </div>
    );
};

export default PaymentFail;