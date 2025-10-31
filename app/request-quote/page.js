// "use server";

import Image from "next/image";
import Main_button from "@/ui/main-button";
import Hero_paragraph from "@/ui/hero-paragraph";
import Number_box from "@/ui/number-box";
import Small_title from "@/ui/small-title";
import Medium_title from "@/ui/medium-title";
import Link from "next/link";
import Team_Scroll from "@/component/team-scroll";
import { tabs_data } from "@/data/data";
import Project_Card from "@/ui/project-card";
import ReviewSlider from "@/component/slider";
import Contract_Form from "@/component/contract-form";
import { get_page_meta, PAGES } from "@/lib/api";

export const dynamic = 'force-dynamic';

export async function generateMetadata() {
  let data = await get_page_meta(PAGES.request_quote);

  return {
    title: data?.page_title,
    description: data?.page_desc?.map((cur) => cur.children.map((c) => c.text)).join(" "),
    keywords:data?.keywords?.map((k) => k.keyword),
  };
}

export default async function Request_quote() {

  return (
    <>
    <div className='request-quote-page overflow-hidden'>
      <Image src='/green-blurb.png' height={227} width={227} alt='Blue Blurb Image' className='absolute top-[40%] left-0 blur-[400px]' />
      {/* <div className='max-w-[900px] px-5 mx-auto text-center py-15  h-[calc(100vh-80px)] flex flex-col items-center justify-center'>
        <h5 className='text-white text-bold text-xl text-center pb-2 leading-[140%] fade_in_slide_up'>
          Devis création de site
        </h5>
        <h1 className='text-white uppercase text-center font-bold !text-[24px] lg:!text-[40px] mb-4 leading-[120%] fade_in_slide_up'>
          Découvrez comment nos solutions\ 
          <span className='text-brand-color-1 text-center font-bold text-[40px] mb-4 leading-[120%] colored' data-color='blue'>
           peuvent vous aider à développer\ votre entreprise.
          </span>
        </h1>
        <Hero_paragraph
          paragraph='Réservez un échange de 15 minutes avec l’un de nos experts.'
          classes='text-center mb-10'
        />
        <div className='buttons flex items-center justify-center'>
          <Main_button
            button_title='Audit Gratuit'
            button_url='/'
            className='fade_in_slide_up'
          />
          <Link href='/' className='py-5 px-8 text-center inline-block cursor-pointer leading-[120%] font-bold fade_in_slide_up'>
            Nos services
            <span className='pl-2' data-aos='fade-left' data-aos-delay='1000'> ➜ </span>
          </Link>
        </div>
      </div> */}
      <Image src='/green-blurb.png' height={320} width={320} alt='Green Blurb Image' className='absolute top-[50%] right-0 blur-[400px] w-[200px] h-[200px]' />

      <section className='py-20 px-5 lg:px-0'>
        <div className='container bg-faqbg-normal mx-auto border border-main-blue rounded-[40px] p-5 lg:p-10 flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-15 fade_in_slide_up'>
          <div className='w-full left-content flex flex-col gap-6 py-5 lg:py-0'>
            <Small_title
              title='Contactez-nous dès MAINTENANT'
              classes='text-center lg:text-left'
            />
            <p className='text-[20px] font-bold leading-[140%] text-center lg:text-left'>
              N&apos;hésitez pas à nous contacter pour plus d&apos;informations
            </p>
            <Hero_paragraph
              paragraph='Chez Sovita, nous allions l’expérience de nos projets et la modernité de nos méthodes pour offrir des services ultra-performants.'
              classes=' text-center lg:text-left'
            />
            <Hero_paragraph
              paragraph='Que vous ayez besoin de votre nouvelle vitrine Internet, de croissance digitale ou d’un accompagnement plus global, notre vivier de talents est à votre disposition pour l’atteinte de vos objectifs.'
              classes=' text-center lg:text-left'
            />
            {/* <div className='buttons flex items-center justify-center gap-5 flex-col md:flex-row'>
              <Main_button
                button_title='Audit Gratuit'
                button_url='/'
                className='w-full'
              />
              <Link href='/' className='py-3 px-6 text-center inline-block cursor-pointer leading-[120%] font-bold w-full border rounded-4xl'>
                Nos services<span className='pl-2'> ➜ </span>
              </Link>
            </div> */}
          </div>

          <div className=' w-full right-content px-6 py-6 md:px-8 md:py-10 bg-main-blue rounded-[24px] flex flex-col gap-4 my-5 xl:my-0'>
            <p className='text-[20px] font-bold leading-[140%]'>
              N&apos;hésitez pas à nous contacter pour plus d&apos;informations
            </p>

            <Contract_Form />

            <p className='text-[12px] font-bold leading-[120%]'>
              * Champs obligatoires
            </p>
            <p className='text-[12px] font-normal leading-[120%]'>
              Les informations recueillies font l&apos;objet d’un traitement
              informatique destiné à SOVITAL, responsable du traitement, aux
              fins de proposition de produits et/ou services et de prospection
              commerciale. Conformément à la réglementation en vigueur, vous
              disposez notamment d&apos;un droit d&apos;opposition,
              d&apos;accès, de rectification et d&apos;effacement sur les
              données personnelles qui vous concernent. Pour plus
              d&apos;informations, cliquez ici.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className='container mb-15'>
          <div className='px-6 lg:px-15 py-6 lg:py-15 flex flex-col-reverse md:flex-row gap-10 lg:gap-16 rounded-[40px] bg-[#ffffff0d]'>
            <div className='left w-full md:w-[70%] flex flex-col justify-center items-start'>
              <h6 className='text-xl md:text-2xl text-white font-normal !leading-[150%] mb-10 text-center md:text-left fade_in_slide_up'>
                En amont de toute mission d&apos;assistance, nous réalisons
                systématiquement un audit complet de votre site et de votre
                référencement (audit technique, sémantique et de popularité).
                Nous étudions votre secteur d&apos;activité et votre paysage
                concurrentiel afin d&apos;en tirer les meilleures pratiques.
              </h6>
            </div>
            <div className='right w-full md:w-[30%]'>
              <Image
                className='size-full fade_in_slide_up'
                src='/map.svg'
                alt='image'
                height={600}
                width={600}
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='container mb-15'>
          <div className='px-6 lg:px-15 py-6 lg:py-15 flex flex-col md:flex-row gap-[64px] rounded-[40px] bg-[#ffffff0d]'>
            <div className='right w-full'>
              <Image
                className='size-full fade_in_slide_up'
                src='/seo-image-4.svg'
                alt='image'
                height={600}
                width={600}
              />
            </div>

            <div className='left flex flex-col justify-center items-center md:items-start  w-full'>
              <h2 className='font-bold text-white text-[32px] mb-3 leading-[120%] text-center md:text-left fade_in_slide_up'>
                BÉNÉFICIEZ D’UN AUDIT GRATUIT DÈS MAINTENANT !
              </h2>
              <p className='text-base text-white leading-[170%] mb-10 text-center md:text-left fade_in_slide_up'>
                En amont de toute mission d&apos;assistance, nous réalisons
                systématiquement un audit complet de votre site et de votre
                référencement (audit technique, sémantique et de popularité).
                Nous étudions votre secteur d&apos;activité et votre paysage
                concurrentiel afin d&apos;en tirer les meilleures pratiques.
              </p>
              <Main_button
                button_title='Audit Gratuit'
                button_url='/'
                className='fade_in_slide_up'
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='w-full px-5 lg:px-0 lg:max-w-[900px] mx-auto text-center py-15'>
          <Small_title
            title='Des chiffres n’ont jamais aussi bien parlé'
            classes='text-center mb-10'
          />
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
            <Number_box
              count_number={200}
              text='Avis Google'
              color='green'
              prefix='+'
              data-aos='fade-up'
              data-aos-duration='1000'
            />
            <Number_box
              count_number={14}
              text='ans d’expérience'
              color='orange'
              data-aos='fade-up'
              data-aos-duration='1000'
              data-aos-delay='300'
            />
            <Number_box
              count_number={45}
              text='Note google'
              color='yellow'
              data-aos='fade-up'
              data-aos-duration='1000'
              data-aos-delay='600'
            />
          </div>
        </div>
      </section>

      <section>
        <div>
          <Team_Scroll />
        </div>

        <div className='mt-15 mb-30 flex items-center justify-center'>
          <Main_button
            button_title='Parlons de votre projet !'
            button_url='/'
            className='fade_in_slide_up'
          />
        </div>
      </section>

      <section className='testimonials overflow-hidden'>
        <div className='w-full px-5 lg:px-0 lg:w-[800px] mx-auto mb-15'>
          <Medium_title
            title='Ils nous font confiance'
            title_colored='Ce qui nous anime chaque jour'
          />
        </div>

        <ReviewSlider />

        <div className='container mx-auto text-center'>
          <Main_button
            button_title='Partagez-nous votre expérience'
            button_url='/'
            className='fade_in_slide_up'
          />
        </div>
      </section>

      <section>
        <div className='container mx-auto mb-25 mt-10'>
          <div className='w-full px-5 lg:px-0 mx-auto lg:w-[800px] mb-15'>
            <Medium_title title="Faire grandir son Business, c'est parfois accepter un coup de main." />
          </div>
          <div className='text-center'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10'>
              {tabs_data[0].slice(0, 3).map((card, index) => (
                <Project_Card
                  key={index}
                  counters={card.counters}
                  title={card.title}
                  tags={card.tags}
                  thumbnail_url={`/portfolio/${card.thumbnail_url}`}
                />
              ))}
            </div>
            <Main_button
              button_title='Plus de réalisations +'
              button_url='/'
              className='fade_in_slide_up'
            />
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
