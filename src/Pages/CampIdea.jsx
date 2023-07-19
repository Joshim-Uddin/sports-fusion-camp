import React from 'react';
import campIdea from './../assets/campidea.jpg'
import { Parallax } from 'react-parallax';

const CampIdea = () => {
    return (
        <>
        <Parallax blur={{ min: -15, max: 15 }}
        bgImage={campIdea}
        bgImageAlt="the dog"
        strength={-200}>

        <div className='h-screen flex flex-col items-center justify-center'>
            <p className='bg-blend-multiply text-red-600 bg-blue-400 w-11/12 p-10'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, perferendis ipsam expedita accusantium praesentium dicta nihil asperiores laboriosam hic ex, rem quam officiis aut. Blanditiis animi enim nam! Reiciendis impedit ut exercitationem id nobis dignissimos voluptatibus beatae alias. Accusantium eos repellat nesciunt illo ipsa nisi explicabo corporis consequuntur sapiente facilis.</p>
        </div>
        </Parallax>
        
        </>
    );
};

export default CampIdea;