"use client";
import Image from "next/image";
import Link from "next/link";
import bgimg from '../../public/bgimg.jpg'
import footer_bg from '../../public/footer_bg.jpg'
import { FaLinkedinIn,FaQuoteRight,} from "react-icons/fa";
import { SiNotion } from "react-icons/si";
import  {titleClassName,headerclass,our_order,What_We_Do, quote,textclass}  from "../app/data";
import { useState } from "react";
import { IoIosArrowRoundBack ,IoIosArrowRoundForward } from "react-icons/io";


export default function Home() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? quote.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === quote.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
   <div className="">
     <section>
  <div className="relative">
    <Image src={bgimg} alt="chia" className="bg-cover w-full h-auto" />

    <div className=" absolute top-1/3 left-4 md:left-16 max-w-md lg:max-w-xl w-full p-4 md:p-6 text-[#43121d]">
      <div className="flex flex-col gap-4">
        
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug text-black">
         We Don’t Do PR. We Engineer Perception.
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-[#000000]">
          A referral-only strategic communications firm scaling influence across Africa, the diaspora, and
the global stage.
        </p>
<p className="text-[#000000] text-sm font-semibold">Slow loop of Lagos traffic at night → fade to Capitol Hill steps → aerial of Johannesburg skyline
→ sleek boardroom in Dubai.</p>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-2">
  <button className="bg-[#ff2143] text-white px-6 py-3 rounded-none shadow hover:bg-[#92203c] transition w-fit whitespace-nowrap">
    <Link href="#">For vetted partners only</Link>
  </button>
</div>

      </div>
    </div>
  </div>
</section>




<section className="pt-20 bg-[#f7f7f7] ">
  <div className="bg-[#f7f7f7] w-full justify-center text-center py-20">
    <p className={`text-[#ec5f74] ${titleClassName}`}>What We Do</p>
<p className={`text-[#092c3f] ${headerclass}`}>We don’t offer services. We shift outcomes.</p>

   

<div className="flex flex-wrap gap-8 max-w-6xl mx-auto pt-20">
  {What_We_Do.map((item, index) => (
    <div
      key={index}
      className="flex flex-col items-center bg-white p-4 rounded-xl shadow-md  md:w-[calc(50%-1rem)] lg:w-[calc(32.333%-1rem)] text-center hover:bg-[#ff2143] py-10 gap-8"
    >
       {item.icon}
       <div className="flex flex-col gap-3">
      <p className={` text-[#1c1663]  ${titleClassName}`}>{item.message}</p>
      
      <p className={textclass}>{item.name}</p>
    </div></div>
  ))}
</div>
  </div>



</section>

<section className="px-6 py-16  space-y-20 bg-[#f7f7f7]">
   <div className="space-y-6 text-left max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-[#092c3f]">Who We Work With</h2>
        <p className="text-lg text-[#ec5f74] italic">
          Selective. Sovereign. Scale-driven.
        </p>
        <div className="text-[#092c3f] text-base space-y-2">
          <p>We work with:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Diaspora-first institutions</li>
            <li>Municipalities and national agencies</li>
            <li>FMCG and utility brands expanding across Africa</li>
            <li>Public figures with purpose</li>
            <li>Founders scaling across continents</li>
          </ul>
          <p className="mt-4 text-lg font-medium">
            If your story shifts the world, we’ll tell it before the world asks.
          </p>
        </div>
      </div>
</section>


<section className="bg-[#f7f7f7] text-black px-6 py-20 text-center">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold mb-4">Our Presence</h2>
    <p className="text-lg mb-2 font-medium text-[#ec5f74]">
      Chicago &nbsp;|&nbsp; Lagos &nbsp;|&nbsp; Accra &nbsp;|&nbsp; London &nbsp;|&nbsp; Dubai &nbsp;|&nbsp; Japan
    </p>
    <p className={`mt-4 ${textclass}`}>
      With partners in embassies, boardrooms, and backchannels.
    </p>
  </div>
</section>


<section className=" px-6 py-20 text-center md:text-left bg-[#f7f7f7]">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-4xl font-bold mb-6 text-[#092c3f]">Why Brando?</h2>
    <p className="text-lg mb-4">We are not like them. We’re not trying to be.</p>
    <p className="text-lg mb-4">Brando speaks to systems.</p>
    <p className="text-lg mb-4">They pitch for funding. <span className="font-semibold text-[#ef96a0]">We build legacies.</span></p>
    <p className="text-lg">They generate buzz. <span className="font-semibold text-[#ef96a0]">We manufacture belief.</span></p>
  </div>
</section>








<section className="pt-20 bg-[#f7f7f7]">
 
  <div className="py-20 px-6 flex justify-center items-center">
  <div className="max-w-2xl w-full text-center   p-10 space-y-6">
    
    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 flex justify-center items-center gap-2">
      🤝 Work With Us
    </h2>

    <p className="text-gray-700 text-lg">
      We don’t accept cold pitches. If you're seeing this, someone opened a door.
    </p>

    <div className="space-y-2">
      <p className="text-blue-600 text-lg font-medium">
        → <a href="mailto:referrals@brando.agency" className="underline hover:text-blue-800">
          referrals@brando.agency
        </a>
      </p>

      <p className="text-blue-600 text-lg font-medium">
        → <a href="/referral-wall" className="underline hover:text-blue-800">
          Book a private consult
        </a>
        <span className="text-sm text-gray-500 ml-1">(link behind referral wall)</span>
      </p>
    </div>
  </div>
</div>

</section>






<section className="pt-20 bg-[#092c3f]">
  <div className=" w-full justify-center text-center ">
    <p className={`text-[#43121d] font-semibold ${headerclass}`}>Words We Live By

</p>
<div className="flex justify-center items-center">
<FaQuoteRight color="#f04e3c" size="55" /> </div>
   



<div className="flex  pt-20 w-full  justify-between items-center  ">
  <div className="flex mt-6 border-1 border-black">
       
   <button
          onClick={handlePrev}
          className="p-2  rounded-full hover:bg-gray-300"
        >
          <IoIosArrowRoundBack size="40"/>
        </button></div>
      <div className="relative w-full max-w-xl overflow-hidden">
        {/* Quote Slide */}
        <div className="flex transition-transform duration-500 ease-in-out w-full">
          <div
            key={currentIndex}
            className="flex flex-col  p-4 rounded-xl shadow-md w-full "
          >
            <p className={`font-medium text-[#788e9a] ${titleClassName}`}>
              {quote[currentIndex].title}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-center gap-4 mt-6 border-1 border-black">
       
        <button
          onClick={handleNext}
          className="p-2  hover:bg-gray-300"
        >
          <IoIosArrowRoundForward size="40" />
        </button>
      </div>
    </div>



  </div>










</section>








<section className="relative    py-12  text-center space-y-4">

  <p className="text-lg font-semibold mt-6">
    Brando & Associates · Est. Globally · Black-Owned · System-Built
  </p>

  {/* Links */}
  <div className="flex justify-center gap-6 mt-2 text-sm underline">
    <a href="#" target="_blank" rel="noopener noreferrer"><FaLinkedinIn size={20} color="white" /></a>
    <a href="#" target="_blank" rel="noopener noreferrer"><SiNotion color="white" /></a>
    <a href="#" target="_blank" rel="noopener noreferrer">Media Kit Access – Password Only</a>
  </div>

  <p className="text-xs text-gray-400 mt-6">© 2025 Brando Agency. All systems protected.</p>
</section>



   </div>
  );
}
