import React from 'react';
import Marquee from "react-fast-marquee";
import google from './../../assets/google.png'
import amazon from './../../assets/amazon.png'
import tesla from './../../assets/tesla.png'
import toyota from './../../assets/toyota.png'
import honda from './../../assets/honda.png'
import harvard from './../../assets/harvard.png'
import oxford from './../../assets/oxford.png'
import cambridge from './../../assets/cambridge.png'
import bmw from './../../assets/bmw.png'

const Sponsor = () => {
    return (
        <div className='py-10 md:h-[500px]'>
            <h2 className="text-center md:border-b-8 border-b-4 border-amber-600 border-dashed md:w-4/12 w-8/12 mx-auto pb-5 text-3xl md:text-5xl font-['Caprasimo'] font-bold text-[#422C18] mb-8">
        Our Sponsors
      </h2>
      <Marquee className='py-5 mt-20'>
        <img src={google} alt="" className='w-24 h-24 me-20'/>
        <img src={amazon} alt="" className='w-24 h-24 me-20'/>
        <img src={tesla} alt="" className='w-24 h-24 me-20'/>
        <img src={harvard} alt="" className='w-24 h-24 me-20'/>
        <img src={honda} alt="" className='w-24 h-24 me-20'/>
        <img src={cambridge} alt="" className='w-24 h-24 me-20'/>
        <img src={toyota} alt="" className='w-24 h-24 me-20'/>
        <img src={oxford} alt="" className='w-24 h-24 me-20'/>
        <img src={bmw} alt="" className='w-24 h-24 me-20'/>
  </Marquee>
      
        </div>
    );
};

export default Sponsor;