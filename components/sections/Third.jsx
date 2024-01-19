"use client"
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image'
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';

const Third = () => {
  useEffect(() => {
    AOS.init({
      duration: 400,
     
      // Add more enchanting options as needed
    });
  }, []);
  return (
    <section id='menu' className='md:min-h-screen p-16  genos '>
          <div className='text-center text-4xl pb-10'>Available now</div>
        <div className='grid grid-cols-1 gap-5 md:grid md:grid-cols-3 md:gap-4'>
             
              <div data-aos="fade-left"
          data-aos-offset="150"
          data-aos-easing="ease-in-sine"
          data-aos-delay="150" className='mx-auto border border-white p-4 space-y-3 rounded-3xl text-center max-w-xs'>
                  <div>
                    <Image src="/assets/pizza.webp" alt="" height={220} width={220} className='rounded-[73px] mx-auto' />
                  </div>
                  <div>
                    <p className='font-bold text-lg'>Pizza Napoletana</p>
                    <p className='text-sm'>
                      Giovanni Santarpia, a Neapolitan pizza virtuoso, enchants Tuscany with a thin, crispy masterpiece — a culinary sonnet embodying Italy's rich flavors.
                    </p>
                  </div>
                  <button className='font-bold hover:bg-black hover:border hover:border-red-200 hover:text-red-200 bg-white text-black border-red-200 border px-4 py-2 rounded-full'>
                    Explore More
                  </button>
              </div>
             
              <div data-aos="fade-up"
          data-aos-offset="150"
          data-aos-easing="ease-in-sine"
          data-aos-delay="150" className='mx-auto border border-white p-4 space-y-3 rounded-3xl text-center max-w-xs'>
                  <div>
                    <Image src="/assets/pizza2.webp" alt="" height={220} width={220} className='rounded-[73px] mx-auto' />
                  </div>
                  <div className=''>
                    <p className='font-bold text-lg '>Pizza Tonda Romana</p>
                    <p className='text-sm'>
                    Pizza alla pala isn’t the only variety of pizza from Italy’s capital city.This kind is flat and round and it has a very thin crust.  
                    </p>
                  </div>
                  <button className='font-bold hover:bg-black hover:border hover:border-red-200 hover:text-red-200 bg-white text-black border-red-200 border px-4 py-2 rounded-full'>
                    Explore More
                  </button>
              </div>
              <div data-aos="fade-right"
          data-aos-offset="150"
          data-aos-easing="ease-in-sine"
          data-aos-delay="150" className='mx-auto border border-white p-4 space-y-3 rounded-3xl text-center max-w-xs'>
                  <div>
                    <Image src="/assets/pizza3.webp" alt="" height={220} width={220} className='rounded-[73px] mx-auto' />
                  </div>
                  <div>
                    <p className='font-bold text-lg'>Pizza Fritta</p>
                    <p className='text-sm'>
                    A classic Neapolitan street food, pizza fritta is fried pizza dough. It comes in many different shapes and forms.
                    </p>
                  </div>
                  <button className='font-bold hover:bg-black hover:border hover:border-red-200 hover:text-red-200 bg-white text-black border-red-200 border px-4 py-2 rounded-full'>
                    Explore More
                  </button>
              </div>
              <div className='flex items-center text-3xl text-red-200 pt-10 md:hidden'>
                <Link href=''>see more </Link>
                <BsArrowRight  className='text-pink-200 pl-2' />
                </div>
              <div data-aos="fade-left"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
          data-aos-delay="150" className='hidden md:block mx-auto border border-white p-4 space-y-3 rounded-3xl text-center max-w-xs'>
                  <div>
                    <Image src="/assets/pizza4.jpg" alt="" height={220} width={220} className='rounded-[73px] mx-auto' />
                  </div>
                  <div>
                    <p className='font-bold text-lg'>Pizza Margherita</p>
                    <p className='text-sm'>
                    There's not much more to say when it comes to this classic Italian pizza – it is quite simply the queen of the table.
                    </p>
                  </div>
                  <button className='font-bold hover:bg-black hover:border hover:border-red-200 hover:text-red-200 bg-white text-black border-red-200 border px-4 py-2 rounded-full'>
                    Explore More
                  </button>
              </div>
              <div data-aos="fade-up"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
          data-aos-delay="200" className='hidden md:block mx-auto border border-white p-4 space-y-3 rounded-3xl text-center max-w-xs'>
                  <div>
                    <Image src="/assets/pizza5.jpg" alt="" height={220} width={220} className='rounded-[73px] mx-auto' />
                  </div>
                  <div>
                    <p className='font-bold text-lg'>Pizza Marinara</p>
                    <p className='text-sm'>
                    For this traditional Italian pizza, the secret lies in its simplicity. Ordering this pizza is an excellent way to test the dough and the quality of the ingredients of the pizzeria
                    </p>
                  </div>
                  <button className='font-bold hover:bg-black hover:border hover:border-red-200 hover:text-red-200 bg-white text-black border-red-200 border px-4 py-2 rounded-full'>
                    Explore More
                  </button>
              </div>
              <div data-aos="fade-right"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
          data-aos-delay="150" className='hidden md:block mx-auto border border-white p-4 space-y-3 rounded-3xl text-center max-w-xs'>
                  <div>
                    <Image src="/assets/pizza6.jpg" alt="" height={220} width={220} className='rounded-[73px] mx-auto' />
                  </div>
                  <div>
                    <p className='font-bold text-lg'>Pizza Prosciutto e funghi</p>
                    <p className='text-sm'>
                    Simplicity is also the name of the game with this pizza – it’s a ham and mushroom pizza, but turbo charged because it’s Italian-style. 
                    </p>
                  </div>
                  <button className='font-bold hover:bg-black hover:border hover:border-red-200 hover:text-red-200 bg-white text-black border-red-200 border px-4 py-2 rounded-full'>
                    Explore More
                  </button>
              </div>
              <div data-aos="fade-left"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
          data-aos-delay="200" className='hidden md:block mx-auto border border-white p-4 space-y-3 rounded-3xl text-center max-w-xs'>
                  <div>
                    <Image src="/assets/pizza7.jpg" alt="" height={220} width={220} className='rounded-[73px] mx-auto' />
                  </div>
                  <div>
                    <p className='font-bold text-lg'>Pizza Quattro Stagioni</p>
                    <p className='text-sm'>
                    Another of the Italians' favourite pizzas is undoubtedly the Quattro Stagioni, which means "Four Seasons". 
                    </p>
                  </div>
                  <button className='font-bold hover:bg-black hover:border hover:border-red-200 hover:text-red-200 bg-white text-black border-red-200 border px-4 py-2 rounded-full'>
                    Explore More
                  </button>
              </div>
              <div data-aos="fade-up"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
          data-aos-delay="200" className='hidden md:block mx-auto border border-white p-4 space-y-3 rounded-3xl text-center max-w-xs'>
                  <div>
                    <Image src="/assets/pizza8.jpg" alt="" height={220} width={220} className='rounded-[73px] mx-auto' />
                  </div>
                  <div>
                    <p className='font-bold text-lg'>Pizza Capricciosa</p>
                    <p className='text-sm'>
                    Very similar to the Quattro Stagioni is the classic Capricciosa pizza. The ingredients are the pretty much same.
                    </p>
                  </div>
                  <button className='font-bold hover:bg-black hover:border hover:border-red-200 hover:text-red-200 bg-white text-black border-red-200 border px-4 py-2 rounded-full'>
                    Explore More
                  </button>
              </div>
              <div data-aos="fade-right"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
          data-aos-delay="200" className='hidden md:block mx-auto border border-white p-4 space-y-3 rounded-3xl text-center max-w-xs'>
                  <div>
                    <Image src="/assets/pizza9.png" alt="" height={220} width={220} className='rounded-[73px] mx-auto' />
                  </div>
                  <div>
                    <p className='font-bold text-lg'>Pizza Quattro Formaggi</p>
                    <p className='text-sm'>
                    You have to be a true cheese lover to appreciate this creamy, delicious and attractive white pizza. 
                    </p>
                  </div>
                  <button className='font-bold hover:bg-black hover:border hover:border-red-200 hover:text-red-200 bg-white text-black border-red-200 border px-4 py-2 rounded-full'>
                    Explore More
                  </button>
              </div>
        </div>
    </section>
  )
}

export default Third