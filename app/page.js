"use client"
import First from "@/components/sections/First";
import Fourth from "@/components/sections/Fourth";
import Second from "@/components/sections/Second";
import Third from "@/components/sections/Third";
import ScrollToTop from "react-scroll-to-top";

export default function Home() {
  
  
  return (
    <main  className="bg-black  overflow-hidden   flex flex-col justify-between space-y-[100px] ">
      <First/>
      
      <Second/>
     
      <Third/>

      <Fourth/>
      <ScrollToTop smooth style={{
          backgroundColor: 'white', // Choose your color
          color: 'purple', // Choose your text color
          padding: '5px', // Adjust the padding for comfort
          
        }}/>
    </main>
  )
}
