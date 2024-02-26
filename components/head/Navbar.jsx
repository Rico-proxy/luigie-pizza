"use client"
import React from 'react';
import { BiSolidFoodMenu } from 'react-icons/bi';
import { RiEBike2Line } from 'react-icons/ri';
import { TbInfoOctagon } from 'react-icons/tb';
import { TiContacts } from 'react-icons/ti';
import { LuSun } from 'react-icons/lu';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import {AiOutlineArrowUp} from 'react-icons/ai';
const Navbar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className='text-white z-20 md:h-32 flex  items-center w-full justify-around'>
      <div>
        <h1 className='text-[20px] mx-24 md:mx-[200px] lg:mx-0  rubik w-0 lg:text-[36px] text-red-200'>LUIGIE PIZZA</h1>
      </div>
      <div className='hidden lg:cursor-pointer rubik  lg:p-3 lg:flex lg:space-x-4 lg:border-2 lg:border-white lg:rounded-2xl'>
        <div className='hover:text-red-200 active:underline flex flex-row items-center'>
          <ScrollLink to='home' smooth={true} duration={500}>
            Home
          </ScrollLink>
          <BiSolidFoodMenu />
        </div>
        <div className='hover:text-red-200 active:underline flex flex-row items-center'>
          <ScrollLink to='about' smooth={true} duration={5000}>
            About
          </ScrollLink>
          <RiEBike2Line />
        </div>
        <div className='hover:text-red-200 active:underline flex flex-row items-center'>
        <ScrollLink to='menu' smooth={true} duration={5000}>
            Menu
          </ScrollLink>
          <TbInfoOctagon />
        </div>
        <div className='hover:text-red-200 active:underline flex flex-row items-center'>
        <ScrollLink to='contact' smooth={true} duration={5000}>
            Contact
          </ScrollLink>
          <TiContacts />
        </div>
      </div>
      <div>
        <button className='hidden pt-[440px] pl-20 text-red-200 hover:text-white' onClick={scrollToTop}>
          <AiOutlineArrowUp className='text-3xl' />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
