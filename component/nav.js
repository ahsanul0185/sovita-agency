"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaPhoneAlt, } from "react-icons/fa";
import Main_button from "../ui/main-button";

function Active_Link({href, label, ...props}){
 const pathname = usePathname();
 const is_active = (href == pathname) || (`${href}/` == pathname);

  return <Link  {...props} className={`text-base ${is_active ? "font-bold active":"font-normal"} ${props.className}`} href={href}> {label} </Link>
}

export default function Main_Nav({}) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <header className={`hidden lg:block  sticky top-0 z-[99] ${ isSticky ? "bg-black" : "g-transparent"} transition-colors duration-300`} id="navbar">
      <nav>
        <div className='container mt-5 h-20 grid grid-cols-[1fr_2fr] gap-10 items-center'>
          <div className='logo pl-4'>
            <Link href='/'>
              <Image src='/logo.svg' alt='Logo' className='logo_img cover' width={200} height={44} />
            </Link>
          </div>
          <div className='links pr-4  justify-self-end'>
            <ul className='list-none menu flex items-center gap-6'>
              <li>
                <Active_Link href='/' label="Notre agence" />
              </li>
              <li className='relative group self-stretch flex'>
                <span className='font-normal cursor-pointer flex items-center gap-2'>
                  Solutions
                  <svg className='transform transition-transform duration-300 group-hover:rotate-180' width='12' height='7' viewBox='0 0 12 7' fill='none'>
                    <path d='M1 1L6 6L11 1' stroke='#fff' strokeWidth='1.66667' strokeLinecap='round' strokeLinejoin='round' />
                  </svg>
                </span>

                <ul className='absolute z-99 top-[48px] text-black left-0 w-[220px] flex flex-col gap-2 py-2 bg-white rounded shadow-lg opacity-0 translate-y-2 scale-95 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-300 ease-out'>
                  <li className='hover:bg-brand-color-1 hover:text-white py-2 px-4 cursor-pointer transition-all duration-300'>
                    <Active_Link href='/create-site' label="Création de site" />
                  </li>
                  <li className='hover:bg-brand-color-1 hover:text-white py-2 px-4 cursor-pointer transition-all duration-300'>
                    <Active_Link href='/local-seo' label="Référencement Local" />
                  </li>
                  <li className='hover:bg-brand-color-1 hover:text-white py-2 px-4 cursor-pointer transition-all duration-300'>
                    <Active_Link href='/google-ads-manager' label="Google Ads" />
                  </li>
                  <li className='hover:bg-brand-color-1 hover:text-white py-2 px-4 cursor-pointer transition-all duration-300'>
                    <Active_Link href='/google-business-profile' label="Référencement Google Maps" />
                  </li>
                  <li className='hover:bg-brand-color-1 hover:text-white py-2 px-4 cursor-pointer transition-all duration-300'>
                    <Active_Link href='/seo' label="Référencement Pages jaunes" />
                  </li>
                  <li className='hover:bg-brand-color-1 hover:text-white py-2 px-4 cursor-pointer transition-all duration-300'>
                    <Active_Link href='/tictok' label="TikTok Shop" />
                  </li>
                </ul>
              </li>
              <li>
                 <Active_Link href='/our-projects' label="Réalisations" />
              </li>
              <li>
                <Active_Link href='/360-communication-services' label="À propos" />
              </li>
              <li>
                <Main_button button_title='Contactez-nous' button_url='/request-quote'  />
              </li>
              <li>
                <Main_button button_title='Nous créons pour vous votre site' button_url='/get-started'  />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export function Mobile_Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleSubmenu = () => setIsSubmenuOpen(!isSubmenuOpen);

  return (
    <header className='block lg:hidden'>
      <div className='container h-20 grid grid-cols-[1fr_max-content] gap-5 items-center justify-between'>
        <div className='logo pl-4'>
          <Link href='/'>
            <Image src='/logo.svg' alt='Logo' className='logo_img cover' width={200} height={44} />
          </Link>
        </div>
        <button onClick={toggleMenu}>
          <svg width='32' height='18' viewBox='0 0 32 18' fill='none'>
            <line x1='32' y1='0.75' y2='0.75' stroke='white' strokeWidth='1.5' />
            <line x1='32' y1='8.75' x2='7' y2='8.75' stroke='white' strokeWidth='1.5' />
            <line x1='32' y1='16.75' y2='16.75' stroke='white' strokeWidth='1.5' />
          </svg>
        </button>
      </div>

      <div onClick={(e) => { const target = e.target; if (target.closest("a")) { setIsOpen(false); } }}
        className={`fixed top-0 left-0 w-full h-full bg-black text-white z-50 flex flex-col justify-between p-6 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}>
        <div className='flex justify-between items-center'>
          <Link href='/request-quote' className='px-6 py-[14px] bg-brand-color-1 font-bold rounded-[55px] block'>
            Rencontrons-nous
          </Link>
          <button onClick={toggleMenu} className='text-4xl font-light'>
            &times;
          </button>
        </div>

        <nav className='mt-10 [&_a]:py-3 [&_span]:py-3 [&_a]:block text-lg font-light'>
          <Active_Link href='/' label="Notre agence" className="[&.active]:text-color-brand-1" />
          <hr className='border-gray-700' />

          <li className='relative flex flex-col list-none'>
            <button onClick={toggleSubmenu} className='font-bold cursor-pointer flex items-center justify-between w-full'>
              <span className='flex items-center gap-2'>
                Solutions
                <svg className={`transform transition-transform duration-300 ${ isSubmenuOpen ? "rotate-180" : "rotate-0" }`} width='12' height='7' viewBox='0 0 12 7' fill='none'>
                  <path d='M1 1L6 6L11 1' stroke='#fff' strokeWidth='1.66667' strokeLinecap='round' strokeLinejoin='round' />
                </svg>
              </span>
            </button>

            <ul className={`flex flex-col gap-2 pl-4 mt-2 transition-all duration-300 overflow-hidden ${ isSubmenuOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0" }`}>
              <li>
                <Link className='font-bold transition-colors duration-300 hover:text-black' href='/create-site'>
                  Création de site 
                </Link>
              </li>
              <hr className='border-gray-700' />
              <li>
                <Link className='font-bold transition-colors duration-300 hover:text-black' href='/local-seo'>
                  Référencement Local
                </Link>
              </li>
              <hr className='border-gray-700' />
              <li>
                <Link className='font-bold transition-colors duration-300 hover:text-black' href='/google-ads-manager'>
                  Google Ads 
                </Link>
              </li>
              <hr className='border-gray-700' />
              <li>
                <Link className='font-bold transition-colors duration-300 hover:text-black' href='/google-business-profile'>
                  Référencement Google Maps
                </Link>
              </li>
              <hr className='border-gray-700' />
              <li>
                <Link className='font-bold transition-colors duration-300 hover:text-black' href='/seo'>
                  Référencement Pages jaunes
                </Link>
              </li>
              <hr className='border-gray-700' />
              <li>
                <Link className='font-bold transition-colors duration-300 hover:text-black' href='/tictok'>
                  TikTok Shop
                </Link>
              </li>
            </ul>
          </li>

          <hr className='border-gray-700' />

          <Link className='font-bold text-base' href='/our-projects'>
            Réalisations
          </Link>
          <hr className='border-gray-700' />

          <Link className='font-bold text-base' href='/360-communication-services'>
            À propos
          </Link>
        </nav>

        <div className='flex justify-between items-center mt-auto pt-10'>
          <div className='flex space-x-4 text-white'>
            <a href='#'>
              <FaFacebookF className='text-xl' />
            </a>
            <a href='#'>
              <FaInstagram className='text-xl' />
            </a>
            <a href='#'>
              <FaLinkedinIn className='text-xl' />
            </a>
            <a href='#'>
              <FaTwitter className='text-xl' />
            </a>
          </div>
          <div className='flex items-center space-x-2 text-white'>
            <FaPhoneAlt className='text-blue-500' />
            <a className='font-bold block text-xl' href='tel:+33187662512'>
              33 1 87 66 25 12
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}



export function NavWithoutLink({}) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <header className={`hidden lg:block  sticky top-0 z-[99] ${ isSticky ? "bg-black" : "g-transparent"} transition-colors duration-300`} id="navbar">
      <nav>
        <div className='container mt-5 h-20 grid grid-cols-[1fr_2fr] gap-10 items-center'>
          <div className='logo pl-4'>
            <Link href='/'>
              <Image src='/logo.svg' alt='Logo' className='logo_img cover' width={200} height={44} />
            </Link>
          </div>
          <div className='links pr-4  justify-self-end'>
            <ul className='list-none menu flex items-center gap-6'>
              <li>
                <Main_button button_title='☏ 07 44 31 33 49' button_url='/request-quote'  />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}