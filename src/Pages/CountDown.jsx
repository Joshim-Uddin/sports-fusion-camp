import React from 'react';
import Countdown from 'react-countdown';

const CountDown = () => {
    const renderer = ({ days, hours, minutes, seconds }) => {
          return <span>{days}:{hours}:{minutes}:{seconds}</span>;
        }
      
    return (
        <div className='bg-[#848C2F] text-white p-10'>
           <h2 className='text-3xl font-semibold'> Don&apos;t miss till</h2>
           <Countdown date={Date.now() + 50000000000} renderer={renderer}/>
        </div>
    );
};

export default CountDown;