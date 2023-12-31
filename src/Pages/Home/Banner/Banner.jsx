import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { Autoplay, EffectCards } from "swiper";
import imgOne from "./../../../assets/1.jpg";
import imgTwo from "./../../../assets/2.jpg";
import imgThree from "./../../../assets/3.jpg";
import imgFour from "./../../../assets/4.jpg";
import imgFive from "./../../../assets/5.jpg";
import { Link } from "react-router-dom";
import Typewriter from "react-ts-typewriter";

const Banner = () => {
  return (
    <div className="md:text-left text-center md:flex justify-center items-center md:w-10/12 w-11/12 gap-5 mx-auto my-5 md:min-h-screen">
      <div className="md:w-1/2 md:me-8">
        <h2 className="md:text-5xl text-3xl font-extrabold">
          <Typewriter text={['Welcome To', 'The Best Camp', 'Safety First At']} loop={true} speed={600} /> <br /> 
          <span className="mt-5 block md:text-6xl text-[44px] font-['Luckiest Guy']">Sports Fusion Camp</span>
        </h2>
        <p className="my-4 text-justify">
          A thrilling and dynamic sports experience that combines a variety of
          athletic activities, fostering teamwork, skill development, and an
          unforgettable summer adventure for participants of all ages.
        </p>
        <Link to="/signup">
          <button className="btn btn-custom">Register Now</button>
        </Link>
      </div>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[EffectCards, Autoplay]}
        className="mySwiper md:w-1/2 md:overflow-visible overflow-hidden md:h-[450px] h-[320px] mt-5 px-2"
      >
        <SwiperSlide className="rounded-xl">
          <img src={imgOne} className="w-full h-full" alt="" />
        </SwiperSlide>
        <SwiperSlide className="rounded-xl">
          <img src={imgTwo} className="w-full h-full" alt="" />
        </SwiperSlide>
        <SwiperSlide className="rounded-xl">
          <img src={imgThree} className="w-full h-full" alt="" />
        </SwiperSlide>
        <SwiperSlide className="rounded-xl">
          <img src={imgFour} className="w-full h-full" alt="" />
        </SwiperSlide>
        <SwiperSlide className="rounded-xl">
          <img src={imgFive} className="w-full h-full" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
