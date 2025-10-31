import Link from "next/link";

export default function Main_button({ button_title, button_url, ...props }) {
  return (
    <Link
      {...props}
      className={`py-5 px-8 bg-main-blue hover:bg-button-hover transition-all duration-300 rounded-full text-center inline-block cursor-pointer leading-[120%] font-bold z-10 ${props.className}`}
      href={button_url}>
      {button_title}
    </Link>
  );
}
