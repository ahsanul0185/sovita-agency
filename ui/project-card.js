"use client"
import Image from "next/image";
import CountUp from "react-countup";

export default function Project_Card({counters, title, tags, thumbnail_url }) {

  return (
    <div className='tab-panel-content-item border border-main-green rounded-3xl' data-aos="fade-up">
      <div className='project-image-container relative'>
        <div className="rounded-3xl h-[280px] overflow-hidden relative">
          <Image src={thumbnail_url} alt='project-image' height={280} width={600} className='w-full h-full object-cover object-top block' />
        </div>
        <div className='z-5 absolute bottom-[24px] left-0 px-5 w-full'>
          <div className='w-full flex justify-between gap-2'>
            {counters.map((count, index) => (
              <div key={index} className='text-center'>
                <h4 className='text-[24px] font-bold leading-10'>
                  <CountUp suffix={count.suffix} prefix={count.prefix} end={count.number} enableScrollSpy duration={3}/>
                </h4>
                <p className='text-sm font-normal leading-5'> {count.desc} </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='project-content p-6'>
        <h3 className='text-[27px] font-bold leading-8 uppercase mb-6 text-center lg:text-left'>{title}</h3>
        <div className='project-tags'>
          <ul className='flex gap-4 flex-wrap justify-center lg:justify-start'>
            {tags.map((tag, index) => (
              <li key={index} className='bg-main-green text-black font-bold text-[13px] px-3 py-2 rounded-full'>{tag}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
