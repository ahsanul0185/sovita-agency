"use client";
import "./globals.css";
import Main_Nav, { NavWithoutLink } from "../component/nav";
import { Mobile_Menu } from "../component/nav";
import { Footer } from "../component/footer";
import Head from "next/head";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import AOS from "aos";
import "aos/dist/aos.css";
import Script from "next/script";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const hideHeadFoot = pathname.split("/")[1]  === "get-started";
  const isCheckoutPage = pathname.split("/")[1] === "checkout";

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
        let span = document.createElement("span");
        if (char == "\\") {
          //use '\' (backslash) to break in to new line
          span = document.createElement("br");
        } else {
          span.textContent = char === " " ? "\u00A0" : char;
          span.style.transitionDelay = `${i * 40}ms`;
          span.classList.add("split-char");
          if (i >= coloredStart && i < coloredStart + coloredText.length) {
            span.classList.add(`text-main-${colorClass}`);
          }
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
        { threshold: 0.1 }
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
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
  }, [pathname]);


  return (
    <>
      <html lang="en">
        <Head>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        </Head>

        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-TZKN2MSW');
  `}
        </Script>

        <body>
          {/* Google Tag Manager (noscript) */}
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-TZKN2MSW"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>

          {hideHeadFoot ? <NavWithoutLink/> : isCheckoutPage ? "" : <Main_Nav/>}
          {!isCheckoutPage && <Mobile_Menu />}
          {children}
          {!hideHeadFoot && !isCheckoutPage && <Footer />}

                  {/* Tidio Script here */}
        <Script
          src="//code.tidio.co/nkisumk7vhucuw7sukdff1xownqwhoxe.js"
          strategy="afterInteractive"
        />

        </body>
      </html>
    </>
  );
}
