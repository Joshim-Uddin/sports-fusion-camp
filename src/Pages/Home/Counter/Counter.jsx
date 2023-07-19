import React from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

const Counter = ({endNumber, time}) => {
    const [ref, inView] = useInView({
        triggerOnce: false, // Animation triggers only once when component enters the viewport
      });
    
      return (
        <div ref={ref}>
          {inView ? (
            <CountUp start={0} end={endNumber} duration={time} separator="" />
          ) : (
            <span>Scroll to see the animation</span>
          )}
        </div>
      );
};

export default Counter;