import Main_button from "../ui/main-button";
import Hero_paragraph from "../ui/hero-paragraph";
import Hero_subtitle from "../ui/hero-subtitle";
import Hero_title from "../ui/hero-title";
import Image from "next/image";
import Blue_blurb from "../public/blue-blurb.png";
import green_blurb from "../public/green-blurb.png";

const Hero_Banner = () => {
  return (
    <div className='h-[calc(100vh-80px)] flex flex-col justify-center'>
      <Image src={Blue_blurb} height='227px' width='227px' alt='Blue Blurb Image' className='absolute top-[40%] left-0 blur-[200px]' />
      <div className='w-full px-5 md:px-0 md:max-w-[900px] mx-auto h-[70vh] text-center py-15 flex flex-col items-center justify-center'>
        <Hero_title title='CRÉATION DE SITE ' title_colored='INTERNET' />
        <Hero_subtitle subtitle='Passez au digital ' subtitle_colored='maintenant !' />
        <Hero_paragraph paragraph="Fort de milliers de projets réalisés, SOVITA se positionne comme le partenaire idéal pour concevoir des sites web sur mesure et captivants. Notre agence web allie passion et expertise pour offrir des solutions digitales locales et performantes. Que vous soyez un artisan souhaitant élargir sa clientèle ou une entreprise désireuse de moderniser son site existant, nous vous accompagnons dans chaque étape pour dynamiser votre image en ligne avec professionnalisme."
          classes='text-center mb-10'
        />
        <Main_button button_title='Rencontrons-nous' button_url='/request-quote/' className="fade_in_slide_up"/>
      </div>
      <Image src={green_blurb} height='320px' width='320px' alt='Green Blurb Image' className='absolute top-[50%] right-0 blur-[200px]' />
  </div>
  );
};

export default Hero_Banner;
