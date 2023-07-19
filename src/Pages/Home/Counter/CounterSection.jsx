import React from 'react';
import Counter from './Counter';


const CounterSection = () => {
    return (
        <div className='grid md:grid-cols-3 gap-3 w-11/12 md:w-10/12 py-10 mx-auto my-8 items-center justify-center'>
           <div className='rounded-xl bg-indigo-300 text-3xl font-semibold p-10  text-center flex flex-col items-center justify-center text-[#DD5449]'>
            <h3 className='text-4xl font-bold mb-3'>Vistiors</h3>
           <Counter endNumber={20220} time='30' />
           </div>
      <div className='rounded-xl bg-amber-300 text-3xl font-semibold p-10 text-center flex flex-col items-center justify-center text-[#422C18]'>
        <h3 className='text-4xl font-bold mb-3'>Reviews</h3>
      <Counter endNumber={10780} time='30' />
      </div>
      <div className='rounded-xl bg-blue-300 text-3xl font-semibold p-10 text-center flex flex-col items-center justify-center text-white'>
        <h3 className='text-4xl font-bold mb-3'>Our Students</h3>
      <Counter endNumber={1780} time='30' />
      </div>
        </div>
    );
};

export default CounterSection;