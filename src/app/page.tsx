"use client";
import Image from "next/image";
import Link from "next/link";
import bgimg from '../../public/bgimg.jpg'
import meeting from '../../public/meeting.jpg'
import workwithus from '../../public/workwithus.jpg'
import whatwedo from '../../public/whatwedo.jpg'
import { FaQuoteRight} from "react-icons/fa";

import  {titleClassName,headerclass,What_We_Do, quote,textclass}  from "../app/data";
import { useState,useEffect } from "react";
import { IoIosArrowRoundBack ,IoIosArrowRoundForward } from "react-icons/io";
import Footer from "@/components/Footer";


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

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // 5 seconds

    return () => clearInterval(interval); // cleanup
  }, [quote.length]);



  return (
   <div className="">

<section className="mt-0 md:mt-10">
  <div className="relative">
    <Image
      src={bgimg}
      alt="chia"
      className="w-full h-auto min-h-[90vh] object-cover blur-[2px]" // Increased image height
    />

    <div className="absolute top-1/4 sm:top-1/3 left-4 sm:left-8 md:left-16 max-w-[90%] sm:max-w-md md:max-w-lg lg:max-w-2xl p-4 sm:p-6">
      <div className="flex flex-col gap-6"> {/* Increased gap between elements */}
        <h1 className="text-[40px] sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug  text-[#ec5f74]">
          We Don’t Do PR. We Engineer Perception.
        </h1>

        <p className={`text-sm sm:text-base md:text-lg text-black ${textclass}`}>
          A referral-only strategic communications firm scaling influence across Africa, the diaspora, and the global stage.
        </p>

        <p className="text-black  font-medium  text-[18px] ">
          Slow loop of Lagos traffic at night → fade to Capitol Hill steps → aerial of Johannesburg skyline → sleek boardroom in Dubai.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <button className="relative overflow-hidden group px-6 py-3 w-fit font-medium text-white bg-[#ff2143] rounded shadow">
            <span className="relative z-10 group-hover:text-black transition duration-300">
              <Link href="#">For Vetted Partners Only</Link>
            </span>
            <span className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>



<section    className=" bg-[#f7f7f7] px-4 sm:px-6 md:px-12 lg:px-20 ">
  <div className="bg-[#f7f7f7] w-full justify-center text-center py-20">
    <p className={`text-[#ec5f74] font-semibold ${textclass}`}>What We Do</p>
<p className={`text-[#092c3f]  font-bold  ${headerclass}`}>We don’t offer services. We shift outcomes.</p>

 
<div className="flex flex-wrap gap-8 max-w-6xl mx-auto pt-20">
  {What_We_Do.map((item, index) => (
    <div
      key={index}
      className="relative group overflow-hidden rounded-xl shadow-md md:w-[calc(50%-1rem)] lg:w-[calc(32.333%-1rem)] text-center"
    >
      {/* Hover background slide */}
      <div className="absolute inset-0 bg-[#ff2143] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0" />

      {/* Card Content */}
      <div className="relative z-10 flex flex-col items-center bg-white p-10 gap-8 group-hover:bg-transparent transition-colors duration-500">
        {item.icon}

        <div className="flex flex-col gap-3">
          <p className={`text-[#1c1663] group-hover:text-white transition-colors duration-300 ${titleClassName}`}>
            {item.message}
          </p>
          <p className={`text-[#9189a4] font-medium  group-hover:text-white transition-colors duration-300 ${textclass}`}>
            {item.name}
          </p>
        </div>
      </div>
    </div>
  ))}
</div>



  </div>



</section>

<section className="px-6 py-16  space-y-20 bg-[#f7f7f7]">
   <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 items-center">
 
   <div className="space-y-6  max-w-6xl mx-auto">
        <h2 className={`text-[#092c3f]  font-bold  ${headerclass}`}>Who We Work With</h2>
        <p className={`text-[#ec5f74] ${textclass}`} >
          Selective. Sovereign. Scale-driven.
        </p>
        <div className="text-[#092c3f] space-y-2       font-medium text-[15.5px] md:text-[17px]">
          <p>We work with:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Diaspora-first institutions</li>
            <li>Municipalities and national agencies</li>
            <li>FMCG and utility brands expanding across Africa</li>
            <li>Public figures with purpose</li>
            <li>Founders scaling across continents</li>
          </ul>
          <p className="mt-4 ">
            If your story shifts the world, we’ll tell it before the world asks.
          </p>
        </div>
      </div>
      <div className="w-full md:w-[55%]">
      <Image src={whatwedo} alt="chia" className="w-full h-auto object-cover" />
    </div>
      </div>
</section>


<section className="bg-[#f7f7f7] text-black px-6 py-20 text-center">
  <div className="max-w-4xl mx-auto">
    <h2 className={`text-[#092c3f]  font-bold mb-4  ${headerclass}`}>Our Presence</h2>
    <p className="text-lg mb-2 font-medium text-[#ec5f74] text-[15.5px] md:text-[17px]">
      Chicago &nbsp;|&nbsp; Lagos &nbsp;|&nbsp; Accra &nbsp;|&nbsp; London &nbsp;|&nbsp; Dubai &nbsp;|&nbsp; Japan
    </p>
    <p className={`mt-4 ${textclass}`}>
      With partners in embassies, boardrooms, and backchannels.
    </p>
  </div>
</section>






<section className="px-6 py-20 text-center md:text-left bg-[#f7f7f7]">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 items-center">
    <div className="w-full md:w-[45%]">
      <h2 className={`text-[#092c3f] font-bold mb-6 ${headerclass}`}>Why Brando?</h2>
      <p className=" font-medium text-[15.5px] md:text-[17px]      mb-4">We are not like them. We’re not trying to be.</p>
      <p className="font-medium text-[15.5px] md:text-[17px] mb-4">Brando speaks to systems.</p>
      <p className="font-medium text-[15.5px] md:text-[17px] mb-4">They pitch for funding. <span className="font-semibold text-[#ec5f74]">We build legacies.</span></p>
      <p className="font-medium text-[15.5px] md:text-[17px]">They generate buzz. <span className="font-semibold text-[#ec5f74]">We manufacture belief.</span></p>
    </div>
    <div className="w-full md:w-[55%]">
      <Image src={meeting} alt="chia" className="w-full h-auto object-cover" />
    </div>
  </div>
</section>









<section className="pt-20 bg-[#f7f7f7] px-5 sm:px-0">
  <div className="max-w-6xl mx-auto px-4 ">
    <div className="flex flex-col md:flex-row gap-6">
      {/* Text Content */}
      <div className="w-full md:basis-1/2 lg:basis-[35%] p-6 md:p-10 space-y-6">
        <h2 className={`text-[#092c3f] font-bold flex justify-center md:justify-start items-center gap-2 ${headerclass}`}>
           Work With Us
        </h2>

        <p className={`text-black ${textclass}`}>
          We don’t accept cold pitches. If you're seeing this, someone opened a door.
        </p>

        <div className="space-y-2 ">
          <p className="text-blue-600 text-lg font-medium">
            → <Link href="#" className="underline hover:text-blue-800">
              referrals@brando.agency
            </Link>
          </p>

          <p className="text-blue-600 text-lg font-medium">
            → <Link href="#" className="underline hover:text-blue-800">
              Book a private consult
            </Link>
            <span className="text-sm text-gray-500 ml-1">(link behind referral wall)</span>
          </p>
        </div>
      </div>

      {/* Image */}
      <div className="w-full md:w-[55%]">
        <Image src={workwithus} alt="chia" className="w-full h-auto object-cover" />
        
      </div>
    </div>
  </div>
</section>





<section className="pt-20 bg-[#092c3f] mt-20 ">
  <div className=" w-full justify-center text-center ">
    <p  className={`text-[#43121d]  font-bold  ${headerclass}`} >Words We Live By

</p>
<div className="flex justify-center items-center mt-6">
<FaQuoteRight color="#f04e3c" size="55" /> </div>
   






<div className="flex flex-col sm:flex-row pt-20 w-full justify-center items-center">
      {/* Title Slider */}
      

      <div className="relative w-full max-w-xl overflow-hidden scrollbar-hide">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {quote.map((q, index) => (
            <div
              key={index}
              className="flex flex-col p-4 rounded-xl shadow-md w-full min-w-full"
            >
              <p className={`font-semibold text-[#788e9a] ${textclass}`}>
                {q.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      
    </div>















  </div>


</section>








<Footer/>




</div>
  );
}
