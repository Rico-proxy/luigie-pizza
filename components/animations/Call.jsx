"use client"
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import animationData from '../../public/assets/red.json';
import Lottie from 'react-lottie';

const Call = () => {
  useEffect(() => {
    AOS.init({
      duration: 400,
      // Add more enchanting options as needed
    });
  }, []);

  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

 

 

  return (
    <div
      data-aos="fade-up"
      data-aos-offset="100"
      data-aos-easing="ease-in-sine"
      data-aos-delay="50"
      className=""
    >
      
      <Lottie  options={lottieOptions} className='h-[20px] w-[20px] lg:h-[20px] lg:w-[20px]'/>

    </div>
  );
};

export default Call;
