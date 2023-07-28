import React from 'react';
import Map from '../../Shared/Map';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import Swal from 'sweetalert2';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_mrgxj5k', 'template_x0l8ybq', form.current, 'N-WXnQCmAF7r3XgTZ')
        .then((result) => {
            console.log(result.text);
            Swal.fire({
                icon: 'success',
                title: 'Message sent successfully',
                showConfirmButton: false,
                timer: 1500
              })
              e.target.reset()
        }, (error) => {
            console.log(error.text);
        });
    }
    return (
        <div className='px-10'>
            <h2 className="text-center md:border-b-8 border-b-4 border-amber-600 border-dashed md:w-4/12 mx-auto pb-5 text-3xl md:text-5xl font-['Caprasimo'] font-bold text-[#422C18] my-8">
        Contact Us
      </h2>
      <div className='grid grid-cols-2 gap-10'>
      <form ref={form} onSubmit={sendEmail}>
        <div className='py-3 flex flex-col gap-4'>
        <div className='flex justify-between'>
            <div className='draw'>
            <input type="text" name="user_name" id="name" placeholder='Your Name*' className='absolute text-black p-4 focus:outline-none' />
            </div>
            <div className='draw1'>
            <input type="email" name="user_email" id="email" placeholder='Your Email*' className='absolute text-black p-4 focus:outline-none' />
            </div>
        
       
        </div>
        <textarea name="user_message" id="message" cols="30" rows="10" placeholder='Message*' className='bg-white text-black p-4 resize-none border border-black'></textarea>
        <input type="submit" value="Submit" className='btn btn-custom w-2/6 mx-auto' />
        </div>
      </form>
      <Map />
      </div>
      
        </div>
    );
};

export default Contact;