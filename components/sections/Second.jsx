"use client"
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Pizza from '../animations/Pizza';
import Link from 'next/link'
import Slide from '../animations/Slide';

const Second = () => {
    useEffect(() => {
      AOS.init({
        duration: 500,
        
        // Add more enchanting options as needed
      });
    }, []);
  
  return (
    <main className="lg:min-h-screen">
    <section id='about' data-aos-anchor-placement="top-bottom" className=" lg:grid grid-cols-2 px-5 lg:p-16 ">
          <div data-aos="fade-down"
     data-aos-offset="100"
     data-aos-easing="ease-in-sine"
     data-aos-delay="50"
      className="space-y-4 genos lg:text-2xl text-white">
                <p>Indulge in zee slice of <span className="text-red-200">our pizzas</span>, and let zee essence of "desiderio interiore" come alive. Our artisinal pizzas are more than just food- zey are a masterpeice of flavors that ignite zee soul. <span className="text-red-200">Taste zee passion</span>, mon ami!</p>
                <p><span className="text-red-200">Our pizzas</span> are not just a feast for the palate; they are a symphony of flavors meticulously composed to ignite the very depths of your soul. Each bite is a brushstroke, painting a canvas of passion and culinary finesse.<span className="text-red-200">The crispy crust, kissed by the flames of perfection, whispers tales of artisanal dedication🍕🎉.</span></p>
                <button className='hidden font-bold hover:bg-black lg:block hover:border hover:border-red-200 hover:text-red-200  rounded-2xl py-1 px-6  bg-white text-black border-red-200 border-4'>
                  <Link href='#'>MENU</Link>
                </button>
          </div>
          <div>
             <Pizza/>
          </div>
      </section>
      <Slide/>
      </main>
  )
}

export default Second