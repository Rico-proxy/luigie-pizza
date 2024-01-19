"use client"
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaEnvelope, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';
import Link from 'next/link';
import Call from '../animations/Call';

const Fourth = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      // Add more enchanting options as needed
    });
  }, []);

  return (
    <main>
      <section
        id='contact'
        className='text-white pb-[200px] grid grid-cols-1 md:min-h-screen md:grid md:grid-cols-2 px-5 md:px-16 md:pt-40 md:pb-0'
      >
        <div
          data-aos='fade-down'
          data-aos-offset='100'
          data-aos-easing='ease-in-sine'
          data-aos-delay='50'
          className='genos md:text-2xl'
        >
          <p className='text-red-200'>
            Ready to embark on a culinary journey with us? Feel free to reach out! Our virtual trattoria doors are always open.
          </p>
          <div
            id='contact-info'
            data-aos-anchor-placement='top-bottom'
            className='grid grid-cols-1'
          >
            <div className='pt-5 space-y-2 md:space-y-4'>
              <h2 className='text-xl md:text-5xl font-bold text-red-200'>Contact Information</h2>
              <p>
                <span className='font-bold'>Twitter:</span> <FaTwitter className='inline' />{' '}
                @YourWebDevMaestro
              </p>
              <p>
                <span className='font-bold'>Instagram:</span> <FaInstagram className='inline' />{' '}
                @YourWebDevMaestro
              </p>
              <p>
                <span className='font-bold'>Facebook:</span> <FaFacebook className='inline' />{' '}
                YourWebDevMaestro
              </p>
            </div>
          </div>
        </div>

        <div >
          <Call />
        </div>
      </section>
    </main>
  );
};

export default Fourth;
