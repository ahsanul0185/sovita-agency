"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import Image from "next/image";

const items = [];

export default function Team_Scroll({}) {
  const container_ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const strip = document.querySelector(".team-scroll");
      const totalScroll = strip.scrollWidth - window.innerWidth;

      gsap.to(strip, {
        x: () => -totalScroll,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: strip,
          start: "center center",
          end: () => "+=" + totalScroll,
          scrub: 1,
          pin: true,
          // anticipatePin: 1,
        },
      });
    }, container_ref);

    return () => ctx.revert();
  }, []);

  return (
    <div className="overflow-hidden width-full team-scroll-con">
      <div className="team-scroll flex items-center gap-5 will-change-transform" ref={container_ref} >
        {new Array(8).fill(1).map((cur, index) => (
          <Image
            key={index}
            src={`/sovita-team/image-${index}.png`}
            width={180}
            height={340}
            className="rounded-full w-[180px] h-[340px] object-cover"
            alt="team photo"
          />
        ))}

        {new Array(8).fill(1).map((cur, index) => (
          <Image
            key={index + 20}
            src={`/sovita-team/image-${index}.png`}
            width={180}
            height={340}
            className="rounded-full w-[180px] h-[340px] object-cover"
            alt="team photo"
          />
        ))}
      </div>
    </div>
  );
}
