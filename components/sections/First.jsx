"use client"
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { GiChefToque } from 'react-icons/gi';

const First = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      
      // Add more enchanting options as needed
    });
  }, []);

  return (
    <section id='home' data-aos-anchor-placement="bottom-bottom" className="lg:min-h-screen text-[50px] h-min-screen text-pink-200 px-5 pt-20 lg:pt-0 lg:text-[66px] lg:mx-[50vh] genos lg:animate-pulse lg:p-16 font-extrabold">
      <h1 className=" lg:flex lg:flex-row items-center lg:w-[2px] italic">
        <span
          data-aos="fade-right"
       
          data-aos-easing="ease-in-sine"
          data-aos-delay="50"
          className="pr-4 flex items-center"
        >
          Taste <GiChefToque />
        </span>
        <span
          data-aos="fade-left"
          data-aos-easing="ease-in-sine"
          data-aos-delay="50"
        >
          <p>Italy or risk a flavor frenzy.</p>
        </span>
      </h1>
    </section>
  );
};

export default First;
