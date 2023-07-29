import React from 'react';
import { useParams } from 'react-router-dom';

const Success = () => {
    const {trans_Id} = useParams()
    return (
        <div>
            <h3>{`Payment is successfull. Transaction Id : ${trans_Id}`}</h3>
        </div>
    );
};

export default Success;