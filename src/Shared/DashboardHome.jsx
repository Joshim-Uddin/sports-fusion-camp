import React from 'react';
import useUsers from '../Hooks/useUsers';
import Tilt from 'react-parallax-tilt';

const DashboardHome = () => {
    const role = useUsers()
    const dashboardHead = <div className="md:grid md:grid-cols-3 flex flex-col items-center mx-auto md:gap-5 gap-3 text-white">
  
  <Tilt
    className="parallax-effect-glare-scale"
    perspective={500}
    glareEnable={true}
    glareMaxOpacity={0.45}
    scale={1.02}
  >
    <div className="statone w-72 rounded-md p-4 bg-amber-500 shadow-lg grid grid-cols-1 gap-6">
      <div className="stat-figure text-black">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      </div>
      <div className="stat-title text-black text-xl">
        {role==="admin"?"Payments":role==="instructor"?"Purchased":"Classes"}
      </div>
      <div className="stat-value">31K</div>
      <div className="stat-desc text-black text-xl">Jan 1st - Feb 1st</div>
    </div>
  </Tilt>
    
    
    <Tilt 
    className="parallax-effect-glare-scale"
    perspective={500}
    glareEnable={true}
    glareMaxOpacity={0.45}
    scale={1.02}>
    <div className="stattwo w-72 rounded-md p-4 bg-blue-700 shadow-lg grid grid-cols-1 gap-6">
      <div className="stat-figure text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
      </div>
      <div className="stat-title text-black text-xl">New Users</div>
      <div className="stat-value">4,200</div>
      <div className="stat-desc text-black text-xl">↗︎ 400 (22%)</div>
    </div>
    </Tilt>
    
    <Tilt
    className="parallax-effect-glare-scale"
    perspective={500}
    glareEnable={true}
    glareMaxOpacity={0.45}
    scale={1.02}
    >
    <div className="statthree w-72 rounded-md p-4 bg-purple-500 shadow-md grid grid-cols-1 gap-6">
      <div className="stat-figure text-yellow-400">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
      </div>
      <div className="stat-title text-black text-xl">New Registers</div>
      <div className="stat-value">1,200</div>
      <div className="stat-desc text-black text-xl">↘︎ 90 (14%)</div>
    </div>
    </Tilt>
    
  </div>
    return (
        role==='admin'?
        <div>
            {dashboardHead}
        </div>:role==='instructor'?
        <div>{dashboardHead}</div>:
        <div>{dashboardHead}</div>
        
    );
};

export default DashboardHome;