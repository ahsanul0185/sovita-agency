"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import AOS from "aos";
import "aos/dist/aos.css";

export default function ClientScripts() {
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({ duration: 500, once: true });
  }, [pathname]);

  useEffect(() => {
    const headings = document.querySelectorAll("h1, h2, h3");

    headings.forEach((el) => {
      if (el.classList.contains("animated-heading")) return;

      el.classList.add("animated-heading");

      // Parse original DOM to separate colored content
      const coloredSpan = el.querySelector(".colored");
      const fullText = el.textContent || "";
      const coloredText = coloredSpan?.textContent || "";
      const coloredStart = coloredSpan
        ? fullText.indexOf(coloredText)
        : fullText.length;

      const colorClass = coloredSpan?.dataset.color || "blue"; // default color
      el.innerHTML = ""; // Clear

      fullText.split("").forEach((char, i) => {
        const span = document.createElement("span");
        span.textContent = char === " " ? "\u00A0" : char;
        span.style.transitionDelay = `${i * 40}ms`;
        span.classList.add("split-char");
        if (i >= coloredStart && i < coloredStart + coloredText.length) {
          span.classList.add(`text-main-${colorClass}`);
        }
        el.appendChild(span);
      });

      // IntersectionObserver animation
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add("visible");
            observer.unobserve(el);
          }
        },
        { threshold: 0.1 },
      );

      observer.observe(el);
    });

    return () => {
      document
        .querySelectorAll("h1, h2, h3")
        .forEach((el) => el.classList.remove("animated-heading", "visible"));
    };
  }, [pathname]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const white_sections = document.querySelectorAll(".white_on_scroll");
      white_sections.forEach((section) => {
        ScrollTrigger.create({
          trigger: section,
          start: "top center",
          end: "bottom center",
          toggleActions: "play reverse play reverse",
          // markers: true,
          onEnter: () => {
            section.classList.add("active");
          },
          onLeave: () => {
            section.classList.remove("active");
          },
          onLeaveBack: () => {
            section.classList.remove("active");
          },
          onEnterBack: () => {
            section.classList.add("active");
          },
        });
        return () => ctx.revert();
      });
    });
  }, [pathname]);

  useEffect(() => {
    const elements = document.querySelectorAll(".fade_in_slide_up");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    elements.forEach((el) => observer.observe(el));
  }, [pathname]);


  return null;
}
