import React from 'react';
import Map from '../../Shared/Map';

const Contact = () => {
    return (
        <div className='px-10'>
            <h2 className="text-center md:border-b-8 border-b-4 border-amber-600 border-dashed md:w-4/12 mx-auto pb-5 text-3xl md:text-5xl font-['Caprasimo'] font-bold text-[#422C18] my-8">
        Contact Us
      </h2>
      <div className='grid grid-cols-2 gap-10'>
      <form action="">
        <div className='py-3 flex flex-col gap-4'>
        <div className='flex justify-between'>
            <div className='draw'>
            <input type="text" name="name" id="name" placeholder='Your Name*' className='absolute text-black p-4 focus:outline-none' />
            </div>
            <div className='draw1'>
            <input type="email" name="email" id="email" placeholder='Your Email*' className='absolute text-black p-4 focus:outline-none' />
            </div>
        
       
        </div>
        <textarea name="message" id="message" cols="30" rows="10" placeholder='Message*' className='bg-white text-black p-4 resize-none border border-black'></textarea>
        <input type="submit" value="Submit" className='btn btn-custom w-2/6 mx-auto' />
        </div>
      </form>
      <Map />
      </div>
      
        </div>
    );
};

export default Contact;