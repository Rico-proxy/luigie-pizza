"use client"
import React from 'react'
import ScrollToTop from "react-scroll-to-top";
const Scroll = () => {
  return (
    <ScrollToTop className="hidden md:block" smooth style={{
        backgroundColor: 'white', // Choose your color
        color: 'purple', // Choose your text color
        padding: '5px', // Adjust the padding for comfort
        
      }}/>
  )
}

export default Scroll