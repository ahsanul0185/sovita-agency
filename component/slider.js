"use client"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { slides, settings } from "@/data/data";

export default function ReviewSlider() {

  return (
   <div className='testimonials-section mb-15 px-5 lg:px-0'>
     <div className='slider-container'>
       <Slider {...settings}>
         {slides.map((cur, index) => (
           <div key={index} className='border border-main-green rounded-2xl p-6 bg-faqbg-normal'>
             <h3 className='text-white mb-3'>{cur.name}</h3>
             <span className='icons mb-6 flex items-center gap-2'>
               {new Array(5).fill(1).map((cur, i) => (
                 <svg key={i} width='17' height='17' viewBox='0 0 17 17' fill='none'>
                   <path fillRule='evenodd' clipRule='evenodd' d='M7.49044 1.29676C7.86406 0.398475 9.13658 0.398474 9.5102 1.29676L11.2452 5.46819L15.7486 5.82923C16.7184 5.90697 17.1116 7.11722 16.3727 7.75014L12.9416 10.6893L13.9899 15.0838C14.2156 16.0302 13.1861 16.7781 12.3559 16.271L8.50032 13.9161L4.64477 16.271C3.81451 16.7781 2.78501 16.0302 3.01075 15.0838L4.05901 10.6893L0.627893 7.75014C-0.110975 7.11722 0.282253 5.90697 1.25203 5.82923L5.75544 5.46819L7.49044 1.29676Z' fill='#ffb800' />
                 </svg>
               ))}
             </span>
             <p className='text-normal text-md opacity-50 mb-6'>
                {cur.message}
             </p>
             <p className='text-md text-normal leading-[150%] text-white'>
                {cur.date}
             </p>
           </div>
         ))}
         {slides.map((cur, index) => (
           <div key={index + 30} className='border border-main-green rounded-2xl p-6 bg-faqbg-normal'>
             <h3 className='text-white mb-3'>{cur.name}</h3>
             <span className='icons mb-6 flex items-center gap-2'>
               {new Array(5).fill(1).map((cur, i) => (
                 <svg key={i} width='17' height='17' viewBox='0 0 17 17' fill='none'>
                   <path fillRule='evenodd' clipRule='evenodd' d='M7.49044 1.29676C7.86406 0.398475 9.13658 0.398474 9.5102 1.29676L11.2452 5.46819L15.7486 5.82923C16.7184 5.90697 17.1116 7.11722 16.3727 7.75014L12.9416 10.6893L13.9899 15.0838C14.2156 16.0302 13.1861 16.7781 12.3559 16.271L8.50032 13.9161L4.64477 16.271C3.81451 16.7781 2.78501 16.0302 3.01075 15.0838L4.05901 10.6893L0.627893 7.75014C-0.110975 7.11722 0.282253 5.90697 1.25203 5.82923L5.75544 5.46819L7.49044 1.29676Z' fill='#ffb800' />
                 </svg>
               ))}
             </span>
             <p className='text-normal text-md opacity-50 mb-6'>
                {cur.message}
             </p>
             <p className='text-md text-normal leading-[150%] text-white'>
                {cur.date}
             </p>
           </div>
         ))}
         {slides.map((cur, index) => (
           <div key={index + 50} className='border border-main-green rounded-2xl p-6 bg-faqbg-normal'>
             <h3 className='text-white mb-3'>{cur.name}</h3>
             <span className='icons mb-6 flex items-center gap-2'>
               {new Array(5).fill(1).map((cur, i) => (
                 <svg key={i} width='17' height='17' viewBox='0 0 17 17' fill='none'>
                   <path fillRule='evenodd' clipRule='evenodd' d='M7.49044 1.29676C7.86406 0.398475 9.13658 0.398474 9.5102 1.29676L11.2452 5.46819L15.7486 5.82923C16.7184 5.90697 17.1116 7.11722 16.3727 7.75014L12.9416 10.6893L13.9899 15.0838C14.2156 16.0302 13.1861 16.7781 12.3559 16.271L8.50032 13.9161L4.64477 16.271C3.81451 16.7781 2.78501 16.0302 3.01075 15.0838L4.05901 10.6893L0.627893 7.75014C-0.110975 7.11722 0.282253 5.90697 1.25203 5.82923L5.75544 5.46819L7.49044 1.29676Z' fill='#ffb800' />
                 </svg>
               ))}
             </span>
             <p className='text-normal text-md opacity-50 mb-6'>
                {cur.message}
             </p>
             <p className='text-md text-normal leading-[150%] text-white'>
                {cur.date}
             </p>
           </div>
         ))}
       </Slider>
     </div>
   </div>
  )
}



