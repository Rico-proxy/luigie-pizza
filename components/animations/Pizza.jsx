"use client"
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import rico from "@/public/assets/rico.json"
import Lottie from 'react-lottie';

const Pizza = () => {
    const lottieOptions = {
      loop: true,
      autoplay: true,
      animationData: rico,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };

    useEffect(() => {
      AOS.init({
        duration: 400,
        // Add more enchanting options as needed
      });
    }, []);
  
  
    return (
      <div data-aos="fade-up"
      data-aos-offset="100"
      data-aos-easing="ease-in-sine"
      data-aos-delay="50"
      className='hidden lg:block'>
        <Lottie options={lottieOptions} height={470} width={470} />
      </div>
    );
  };
  

export default Pizza