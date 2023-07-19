import React from 'react';
import Countdown from 'react-countdown';

const CountDown = () => {
    const renderer = ({ days, hours, minutes, seconds }) => {
          return <div className='grid md:grid-cols-4 grid-cols-2 justify-center items-center md:gap-5 gap-3'>
            <div className='flex flex-col items-center bg-[#EEAD2E] p-4 rounded-md w-36'> 
            <div className='md:text-5xl text-4xl font-semibold font-["Caprasimo"]  border-b-4 border-amber-600 pb-2 border-dashed'>{days}</div> 
            <div className='text-3xl'>Days</div>
            </div>
            <div className='flex flex-col items-center bg-[#EEAD2E] p-4 rounded-md w-36'>
               <div className='md:text-5xl text-4xl font-semibold font-["Caprasimo"] border-b-4 border-amber-600 pb-2 border-dashed'>{hours}</div> 
               
            <div className='text-3xl'>Hours</div>
            </div>
            <div className='flex flex-col items-center bg-[#EEAD2E] p-4 rounded-md w-36'>
            <div className='md:text-5xl text-4xl font-semibold font-["Caprasimo"]  border-b-4 border-amber-600 pb-2 border-dashed'>{minutes} </div>
            <div className='text-3xl'>Minutes</div>
            </div>
            <div className='flex flex-col items-center bg-[#EEAD2E] p-4 rounded-md w-36'>
            <div className='md:text-5xl text-4xl font-semibold font-["Caprasimo"]  border-b-4 border-amber-600 pb-2 border-dashed'>{seconds} </div> 
            <div className='text-3xl'>Seconds</div>
            </div>
          </div>;
        }
      
    return (
        <div className='bg-[#FCC044] text-white py-10 md:px-24 px-4 flex flex-col gap-5 md:flex-row items-center justify-between'>
           <h2 className='text-center md:text-left md:md:text-5xl text-4xl text-4xl font-["Oleo"] font-semibold'> Don&apos;t Miss the First Day <br /> of Summer Camp!</h2>
           <Countdown date={Date.now() + 2592000000} renderer={renderer}/>
        </div>
    );
};

export default CountDown;