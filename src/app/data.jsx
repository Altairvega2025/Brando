import { title } from "process";

import { FaPaintBrush, FaFileImage} from "react-icons/fa";

import { GiOrganigram,GiSatelliteCommunication} from "react-icons/gi";

import { HiMiniIdentification} from "react-icons/hi2";

import { MdPolicy} from "react-icons/md";

export const titleClassName = "font-semibold text-[21px]";
export const headerclass="font-bold text-[30px] md:text-[34px] text-[#092c3f]"
export const textclass="text-[#9189a4] font-medium text-[20px] "


export const our_order = [
  {
    img: "/sandwich.jpg",
    message: "Rainbow Vegetable Sandwich",
    time: "Time: 15 - 20 Minutes | Serves: 1",
    price1:"$10.50 ",
    price2:" $11.70",
    order: "Order Now"
  },
  {
    img: "/tacos.jpg",
    message: "Vegetarian Burger",
    time: "Time: 30 - 45 Minutes | Serves: 1",
     price1:"$9.20",
      price2:"$10.50",
    order: "Order Now"
  },
  {
    img: "/strawberry.jpg",
    message: "Raspberry Stuffed French Toast",
    time: "Time: 10 - 15 Minutes | Serves: 1",
     price1:"$12.50 ",
     price2:" $13.20",
    order: "Order Now"
  }
 
];





export const What_We_Do = [
  {
    img: "/Testimonials.jpg",
     icon: <GiSatelliteCommunication size={50} className="text-[#ec5f74]" />,
    message: "Strategic Communications",
    name:"Messaging architecture, market positioning, narrative control. ",
  },{img: "/Testimonials.jpg",
     icon: <FaFileImage size={50} className="text-[#ec5f74]" />,
    message: "Public Relations & Media Ops",
    name:"International press, crisis strategy, long-term narrative warfare. ",
  },{img: "/Testimonials.jpg",
     icon: <HiMiniIdentification size={50} className="text-[#ec5f74]" />,
    message: "Omnichannel Branding",
    name:"Identity cohesion across digital, cultural, and physical domains.",
  },{img: "/Testimonials.jpg",
     icon: <GiOrganigram size={50} className="text-[#ec5f74]" />,
    message: "Organizational Systems & Scale Consulting",
    name:"Power mapping, corporate structure design, growth war rooms",
  },{img: "/Testimonials.jpg",
    icon: <FaPaintBrush size={50} className="text-[#ec5f74]" />,
    message: "Joint Ventures & Market Expansion",
    name:"From partnership strategy to regulatory brand entry and funding optics.",
  },{img: "/Testimonials.jpg",
     icon: <MdPolicy size={50} className="text-[#ec5f74]" />,
    message: "Emerging Markets Thought Leadership",
    name:"Policy, perception, and profitability alignment from Lagos to D.C.",
  }]




  
export const quote = [
  {
    title:" There’s always a diplomatic method to stabilizing chaos.",
    
  },{
    title:"We don’t scale noise. We scale nations.”",
     },
  {
    title:" Influence isn’t loud. It’s aligned.",
    }
]





export const socialm = [
  {
    img: "/Testimonials.jpg",
  },{

  }]