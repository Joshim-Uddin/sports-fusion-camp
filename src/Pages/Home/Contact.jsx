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
        <div className='py-10 bg-slate-100'>
            <h2 className="text-center md:border-b-8 border-b-4 border-amber-600 border-dashed md:w-4/12 w-8/12 mx-auto pb-5 text-3xl md:text-5xl font-['Caprasimo'] font-bold text-[#422C18] md:mb-20 mb-8">
        Contact Us
      </h2>
      <div className='grid md:grid-cols-2 grid-cols-1 gap-10 w-10/12 mx-auto '>
      <form ref={form} onSubmit={sendEmail} >
        <div className='py-3 flex flex-col justify-center items-center gap-4'>
        <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
            <div className='draw w-full'>
            <input type="text" name="user_name" id="name" placeholder='Your Name*' className='absolute left-0 w-full text-black p-4 focus:outline-none shadow-inner shadow-indigo-100' />
            </div>
            <div className='draw1'>
            <input type="email" name="user_email" id="email" placeholder='Your Email*' className='absolute left-0 w-full text-black p-4 focus:outline-none shadow-inner shadow-indigo-100' />
            </div>
        
       
        </div>
        <textarea name="user_message" id="message" rows="7" placeholder='Message*' className='w-full bg-white text-black p-4 resize-none shadow-inner shadow-indigo-100'></textarea>
        <input type="submit" value="Submit" className='btn btn-custom w-[120px] mx-auto' />
        </div>
      </form>
      <Map />
      </div>
      
        </div>
    );
};

export default Contact;