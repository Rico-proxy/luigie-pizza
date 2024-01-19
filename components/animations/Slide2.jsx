import React from 'react';
import Marquee from 'react-fast-marquee';
import { IoFlameOutline } from 'react-icons/io5';

const Slide2 = () => {
  return (
    <Marquee direction='left' className='border border-red-200 rounded-3xl p-4 text-center genos font-semibold text-red-200'>
      {Array.from({ length: 8 }, (_, index) => (
        <div key={index} className='flex items-center justify-center pr-4'>
          <span>MADE WITH LOVE</span>
          <IoFlameOutline className='ml-2' />
        </div>
      ))}
    </Marquee>
  );
};

export default Slide2;
