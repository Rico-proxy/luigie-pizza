
import First from "@/components/sections/First";
import Fourth from "@/components/sections/Fourth";
import Scroll from "@/components/sections/Scroll";
import Second from "@/components/sections/Second";
import Third from "@/components/sections/Third";


export default function Home() {
  
  
  return (
    <main  className="bg-black  overflow-hidden   flex flex-col justify-between space-y-[100px] ">
      <First/>
      
      <Second/>
     
      <Third/>

      <Fourth/>
      <Scroll/>
    </main>
  )
}
