import Hero_paragraph from "../ui/hero-paragraph";
import Main_button from "../ui/main-button";
import Medium_title from "../ui/medium-title";
import Small_title from "../ui/small-title";
import Image from "next/image";
import image_1 from "../public/image.png";
import image_2 from "../public/image-2.png";
import image_3 from "../public/image-1.png";
import image_4 from "../public/image-3.png";

const Cta = () => {
  const imageBorder = {
      border: "1px solid rgba(255, 255, 255, 0.50)",
  };
  return (
    <div className='container mx-auto'>
      <div className='max-w-[850px] mx-auto text-center mb-15'>
        <Medium_title
          title='  Obtenez dès maintenant votre devis gratuit.'
          title_colored='Besoin d’un site web ?'
          data-aos="fade-up"
        />
        <Hero_paragraph
          paragraph='Obtenez gratuitement votre audit de site Internet et de visibilité locale en nous contactant simplement. Pour découvrir tous les avantages de notre service de référencement local, consultez dès maintenant notre page dédiée.'
          classes='text-center mb-10 fade_in_slide_up'
        />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:gap-15 gap-5'>
        <div className='image-container relative lg:pr-10'>
        <Image src='/yellow-blurb.png' className='absolute top-[50%] left-[50%] w-[200px] h-[200px] -z-10 blur-[200px] translate-x-[-50%] translate-y-[-50%]' alt='yellow blur' width={200} height={200} />
          <div className='grid grid-cols-3 gap-6'>
            <div className='col-span-2 aspect-2/1 rounded-2xl fade_in_slide_up' style={imageBorder}>
              <Image src={image_1} height={"100%"} width={"100%"} alt='image_1' className='aspect-2/1 size-full rounded-2xl' />
            </div>
            <div className='col-span-1 object-cover rounded-2xl fade_in_slide_up' style={imageBorder}>
              <Image src={image_2} height={"100%"} width={"100%"} alt='image_2' className=' object-cover size-full rounded-2xl' />
            </div>
            <div className='col-span-1 rounded-2xl object-cover fade_in_slide_up' style={imageBorder}>
              <Image src={image_4} height={"100%"} width={"100%"} alt='image_3' className=' size-full rounded-2xl object-cover' />
            </div>
            <div className='col-span-2 aspect-2/1 rounded-2xl fade_in_slide_up' style={imageBorder}>
              <Image src={image_3} height={"100%"} width={"100%"} alt='image_3' className='aspect-2/1 size-full rounded-2xl object-cover' />
            </div>
          </div>
        </div>
        <div className='text-container flex flex-col justify-center md:items-start items-center' >
          <Small_title title='ils ont hâte de vous faire briller sur internet' classes='text-center md:text-start mb-6 fade_in_slide_up'/>
          <Hero_paragraph
            paragraph='Nous sommes prêts à vous concocter quelque chose de spécial, répondant à vos besoins et vos envies.'
            classes='text-center md:text-start mb-10 fade_in_slide_up'
          />
          <Main_button button_title='Devis gratuit' button_url='/request-quote/' className="fade_in_slide_up"/>
        </div>
      </div>
    </div>
  );
};

export default Cta;
