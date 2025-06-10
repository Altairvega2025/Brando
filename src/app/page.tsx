import Image from "next/image";
import Link from "next/link";
import bgimg from '../../public/bgimg.jpg'

export default function Home() {
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

        <p className="text-sm sm:text-base md:text-lg text-[#404041]">
          A referral-only strategic communications firm scaling influence across Africa, the diaspora, and
the global stage.
        </p>
<p className="text-[#404041]">Slow loop of Lagos traffic at night → fade to Capitol Hill steps → aerial of Johannesburg skyline
→ sleek boardroom in Dubai.</p>
        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <button className="bg-[#ff2143] text-white px-6 py-2 rounded-none shadow hover:bg-[#92203c] transition w-1/3">
            <Link href="#">For vetted partners only</Link>
          </button>

          
        </div>
      </div>
    </div>
  </div>
</section>

   </div>
  );
}
