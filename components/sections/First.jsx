"use client"
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { GiChefToque } from 'react-icons/gi';

const First = () => {
  useEffect(() => {
    AOS.init({
      
      once: true, // Whether to only animate once
    });
  }, []);
  return (
    <div data-aos="zoom-in" data-aos-delay="100"  data-aos-easing="linear" data-aos-duration="2000" className=' min-h-screen p-16 flex items-center  justify-center text-white   pt-0 pb-10 '> 
           
            <h1 className='text-[60px] neonText  lg:w-1/2  lg:text-[100px]  rubik text-center'>
               <p className='leading-none'> Taste Italy Or Risk A Flavor Frenzy.</p>
            </h1>
    </div>
  )
}

export default First