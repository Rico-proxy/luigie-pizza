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
    <section id='home' data-aos-anchor-placement="bottom-bottom" className="md:min-h-screen text-[50px] h-min-screen text-pink-200 px-5 pt-20 md:pt-0 md:text-[66px] md:mx-[50vh] genos md:animate-pulse md:p-16 font-extrabold">
      <h1 className="md:flex md:flex-row items-center md:w-[2px] italic">
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
