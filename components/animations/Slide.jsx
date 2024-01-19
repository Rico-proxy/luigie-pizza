import React from 'react';
import Marquee from 'react-fast-marquee';
import { IoFlameOutline } from 'react-icons/io5';

const Slide = () => {
  return (
    <Marquee className='pt-10 md:p-0 md:border-t border-b border-red-200 text-center items-center genos font-semibold text-red-200'>
      {Array.from({ length: 8 }, (_, index) => (
        <div key={index} className='hidden md:flex items-center justify-center pr-4'>
          <span>MADE WITH LOVE</span>
          <IoFlameOutline className='ml-2' />
        </div>
      ))}
    </Marquee>
  );
};

export default Slide;
