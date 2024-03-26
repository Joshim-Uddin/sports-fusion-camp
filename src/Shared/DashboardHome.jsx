import React from 'react';
import useUsers from '../Hooks/useUsers';

const DashboardHome = () => {
    const role = useUsers()
    return (
        role==='admin'?<div>This is Admin Home</div>:role==='instructor'?<div>This instructor Home</div>:<div>This is User Home</div>
        
    );
};

export default DashboardHome;