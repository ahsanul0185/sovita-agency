'use client'
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const items = [
  {
    year:2023,
    dot_color:"#ff9b12",
    titles: [
      {color:"#ff9b12", text:"Création de l'agence"},
      {color:"#ffd600", text:"Conception de Sites Web"},
      {color:"#8d29ff", text:"SEO & référencement local"},
    ]
  },
  {
    year:2023,
    dot_color:"#ff9b12",
    titles:[
      {color:"#ff9b12", text:"Développement de notre CMS propre"},
    ]
  },
  {
    year:2023,
    dot_color:"#ff9b12",
    titles:[
      {color:"#ff9b12", text:"Ouverture de notre 1ère agence"},
      {color:"#ffd600", text:"commerciale"},
      {color:"#8d29ff", text:"en région"},
    ]
  },
  {
    year:2023,
    dot_color:"#ff9b12",
    titles:[
      {color:"#ff9b12", text:"Sites Responsives"},
      {color:"#ffd600", text:"Module de Chat"},
    ]
  },
  {
    year:2024,
    dot_color:"#ff9b12",
    titles:[
      {color:"#ff9b12", text:"SEA (Google, Bing Ads) & Social Ads"},
    ]
  },
  {
    year:2024,
    dot_color:"#ff9b12",
    titles:[
      {color:"#ffd600", text:"Stratégie de référencement de longue traîne"},
    ]
  },
  {
    year:2024,
    dot_color:"#ff9b12",
    titles:[
      {color:"#8d29ff", text:"Référencement local Google My Business"},
    ]
  },
  {
    year:2025,
    dot_color:"#ff9b12",
    titles:[
      {color:"#ff9b12", text:"Référencement Prioritaire PagesJaunes"},
    ]
  }
]


export default function Timeline_Scroll({}) {

  const container_ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
    const timelines = gsap.utils.toArray('.single-timeline');

      // Animate each content block
      timelines.forEach((timeline) => {
        const content = timeline.querySelector('.timeline-content');
        const year_dot = timeline.querySelector('.timeline-title .dot');
        const year = timeline.querySelector('.timeline-title .title');

        gsap.fromTo(
          content,
          { autoAlpha: 0, y: 50 },
          {
            autoAlpha: 1,
            y: 0,
            scrollTrigger: {
              trigger: timeline,
              start: 'top center',
              end: 'bottom center',
              scrub: true,
              onEnter: () => {
                year_dot.classList.add('active');
                year.classList.add('active');
                // document.querySelectorAll('.timeline-content').forEach(c => c.classList.remove('active'));
                content.classList.add('active');
              },
              onLeave: () => {
                year_dot.classList.remove('active');
                year.classList.remove('active');
                // document.querySelectorAll('.timeline-content').forEach(c => c.classList.remove('active'));
                content.classList.add('active');
              },
              onEnterBack: () =>{
                year_dot.classList.add('active');
                year.classList.add('active');
                content.classList.add('active');
              },
              onLeaveBack: () => {
                year_dot.classList.add('active');
                year.classList.add('active');
                content.classList.add('active');
              },
            },
          }
        );
      });

      // Pin the entire scroll section
      ScrollTrigger.create({
        trigger: '.timeline-scroll',
        start: 'top center',
        end: () => `+=${timelines.length * window.innerHeight}`,
        pin: true,
        scrub: true,
      });
    }, container_ref );

    return () => ctx.revert(); // Clean up on unmount
  }, []);


  return (
    <div className="timeline-scroll" ref={container_ref}>
      {items.map((item, index) => (
          <div key={index} className="single-timeline mb-6">
            <div className="timeline-title mb-6 flex items-center gap-2">
              <span className="dot block w-2 h-2 rounded-full bg-white [&.active]:bg-brand-color-2"></span>
              <span className="title block text-base font-bold text-white [&.active]:text-brand-color-2">{item.year}</span>
            </div>
            <div className="timeline-content ml-5">
              {item.titles.map((title, index) => (
                  <p key={index} className="title flex items-center gap-3 text-[26px] lg:text-medium font-bold" style={{color:title.color}}>
                    <span className="dot block w-3 h-3 rounded-full bg-brand-color-3"></span>
                    {title.text}
                  </p>
              ))}
            </div>
          </div>
      ))}
    </div>
  );
}
