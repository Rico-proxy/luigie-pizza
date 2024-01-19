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
    <div className=' z-20 h-32 flex  items-center w-full justify-around'>
      <div>
        <h1 className=' mx-16 md:mx-0  rubik w-0 text-[36px] text-red-200'>LUIGIE PIZZA</h1>
      </div>
      <div className='hidden md:cursor-pointer rubik  md:p-3 md:flex md:space-x-4 md:border-2 md:border-white md:rounded-2xl'>
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
