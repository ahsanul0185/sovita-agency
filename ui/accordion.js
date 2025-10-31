"use client";

import { useEffect, useState } from "react";
import { X, Plus } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Accordion({
  title,
  children,
  initial_state = false,
  ...props
}) {
  const [is_open, set_is_opne] = useState(initial_state);

  function toggle() {
      set_is_opne((p) => !p);
      setTimeout(() => {
      ScrollTrigger.refresh(); // trigger layout recalculation
      }, 300); 
  }

  useEffect(() => {
    setTimeout(() => {
    ScrollTrigger.refresh(); // trigger layout recalculation
    }, 300); 
   },[])

  return (
    <div className="fade_in_slide_up">
        <div {...props} className={`z-10 accordion rounded-xl ${is_open ? "open" : "close"}`} >
          <h4 onClick={toggle} className={`accordion-title mb-6 [&.close]:bg-faqbg-normal bg-faqbg-purple relative pl-6 py-4 pr-8 rounded-lg border border-border-purple text-sm/[180%] font-bold ${ is_open ? "open" : "close" }`} >
            {title}
            {is_open ? (
              <X size={20} className='absolute right-3 cursor-pointer top-[50%] -translate-y-[50%]' />
            ) : (
              <Plus size={20} className='absolute right-3 cursor-pointer top-[50%] -translate-y-[50%]' />
            )}
          </h4>
          <div className={`accordion-content text-white overflow-hidden text-sm/[180%] [&.open]:mb-6 font-normal px-6 h-auto ${ is_open ? "open" : "close" }`}>
            {children}
          </div>
        </div>
    </div>
  );
}
