"use client"
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image'
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import pizzaData from '@/pizzadata/pizza';
const Third = () => {
  useEffect(() => {
    AOS.init({
      duration: 400,
     
      // Add more enchanting options as needed
    });
  }, []);
  return (
    <section id='menu' className='text-white md:min-h-screen p-16 genos'>
    <div className='text-center text-4xl pb-10'>Available now</div>
    <div className='grid grid-cols-1 gap-5 md:grid md:grid-cols-3 md:gap-4'>
      {pizzaData.map((pizza, index) => (
        <div
          key={index}
          data-aos={index % 3 === 0 ? "fade-left" : (index % 3 === 1 ? "fade-down" : "fade-right")}
          data-aos-offset="150"
          data-aos-easing="ease-in-sine"
          data-aos-delay={100 * index} // Adding delay based on index
          className='mx-auto border border-white p-4 space-y-3 rounded-3xl text-center max-w-xs'
        >
          <div>
            <Image src={pizza.image} alt={pizza.title} height={220} width={220} className='rounded-[73px] mx-auto' />
          </div>
          <div>
            <p className='font-bold text-lg'>{pizza.title}</p>
            <p className='text-sm'>{pizza.description}</p>
          </div>
          <button className='font-bold hover:bg-black hover:border hover:border-red-200 hover:text-red-200 bg-white text-black border-red-200 border px-4 py-2 rounded-full'>
            Explore More
          </button>
        </div>
      ))}
      <div className='flex items-center text-3xl text-red-200 pt-10 md:hidden'>
        <Link href=''>see more </Link>
        <BsArrowRight className='text-pink-200 pl-2' />
      </div>
    </div>
  </section>
  )
}

export default Third