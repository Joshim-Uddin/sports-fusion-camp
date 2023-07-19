import React from 'react';
import Counter from './Counter';

const CounterSection = () => {
    return (
        <div className='grid md:grid-cols-3 gap-3 w-10/12 mx-auto my-8'>
           <div className='h-32 rounded-xl bg-indigo-300 text-3xl font-semibold p-3 text-center'>
            <h3 className=''>Vistiors</h3>
           <Counter endNumber={20220} time='30' />
           </div>
      <div className='h-32 rounded-xl bg-amber-300 text-3xl font-semibold p-3 text-center'>
        <h3>Reviews</h3>
      <Counter endNumber={10780} time='30' />
      </div>
      <div className='h-32 rounded-xl bg-blue-300 text-3xl font-semibold p-3 text-center'>
        <h3>Our Students</h3>
      <Counter endNumber={1780} time='30' />
      </div>
        </div>
    );
};

export default CounterSection;