// "use server"

import Image from "next/image";
import Accordion from "@/ui/accordion";
import Hero_paragraph from "@/ui/hero-paragraph";
import Main_button from "@/ui/main-button";
import { get_page_meta, PAGES } from "@/lib/api";

export const dynamic = 'force-dynamic';

export async function generateMetadata() {
  let data = await get_page_meta(PAGES.seo);

  return {
    title: data?.page_title,
    description: data?.page_desc?.map((cur) => cur.children.map((c) => c.text)).join(" "),
    keywords:data?.keywords?.map((k) => k.keyword),
  };
}

export default async function Local_Seo() {
  return (
    <>
    <div className='local-seo-page'>
      <Image src='/blue-blurb.png' height={227} width={227} alt='Blue Blurb Image' className='absolute top-[40%] left-0 blur-[200px]' />
      <div className='w-full px-5 lg:px-0 lg:max-w-[900px] mx-auto text-center py-15 h-[calc(100vh-80px)] flex flex-col items-center justify-center' >
        <h5 className='text-white text-bold text-xl text-center pb-2 leading-[140%] fade_in_slide_up' >
          Référencement Prioritaire{" "}
          <span className='text-brand-color-1'> PagesJaunes </span>
        </h5>
        <h1 className='text-white text-center font-bold text-medium lg:text-large uppercase  leading-[120%]'>
          Maximisez vos chances d’être\ 
          <span className="colored text-brand-color-1" data-color="blue">sélectionné en priorité par les\consommateurs exigeants. </span>
        </h1>
        <Hero_paragraph
          paragraph='On vous aide à bien choisir vos parutions sur les Pages Jaunes pour être plus visible.'
          classes='text-center mb-10'
        />
        <Main_button button_title='Me faire rappeler' button_url='/request-quote/' className="fade_in_slide_up"/>
      </div>
      <Image src='/blue-blurb.png' height={320} width={320} alt='Green Blurb Image' className='absolute top-[50%] right-0 blur-[200px] -z-5' />

      <div className='w-full px-5 lg:px-0 lg:max-w-[900px] mx-auto text-center py-15 z-10'>
        <h2 className='text-white text-center uppercase font-bold text-[40px] mb-4 leading-[120%] z-10 fade_in_slide_up' >
            Ne laissez plus vos concurrents apparaître avant vous sur les Pages Jaunes.
        </h2>
      </div>

      <section>
        <div className='container mb-10 lg:mb-15'>
          <div className='px-6 py-6 lg:px-15 lg:py-15 flex flex-col lg:flex-row gap-16 bg-[#ffffff0d] rounded-[40px] fade_in_slide_up '>
            <div className='left flex flex-col justify-center w-full'>
              <h2 className='font-bold text-brand-color-2 uppercase text-small mb-3 lg:text-left text-center leading-[120%] fade_in_slide_up'>
                Laissez vos concurrents \ derrière vous
              </h2>
              <p className='text-base text-white leading-[170%] text-center lg:text-left fade_in_slide_up'>
                La solution Référencement Prioritaire vous offre une visibilité accrue en apparaissant avant vos concurrents sur le site PagesJaunes.
              </p>
            </div>
            <div className='right relative w-full'>
              <Image className='size-full object-cover fade_in_slide_up' src='/image-6.svg' alt='image' width={600} height={600} />
              <Image className='w-[300px] blur-[400px] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]' src='/violet-full-blurb.png' alt='image' width={300} height={300}
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='container mb-10 lg:mb-15' >
          <div className='px-6 lg:px-15 py-6 lg:py-15 flex flex-col-reverse lg:flex-row gap-16 rounded-[40px] bg-[#ffffff0d] fade_in_slide_up'>
            <div className='right w-full fade_in_slide_up'>
              <Image className='size-full object-cover' src='/seo-image-2.svg' alt='image' width={600} height={600} />
            </div>

            <div className='left flex flex-col justify-center w-full'>
              <h2 className='font-bold text-brand-color-3 uppercase text-center lg:text-left text-small mb-3 leading-[120%] fade_in_slide_up'>
                Augmentez vos chances \ d’être sélectionné
              </h2>
              <p className='text-base text-white leading-[170%] text-center lg:text-left fade_in_slide_up'>
                Quand un internaute recherche votre service sur PagesJaunes, votre entreprise apparaît dans les premiers résultats, augmentant ainsi vos chances d’être sélectionné et contacté rapidement par les utilisateurs intéressés par vos prestations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='container mb-10 lg:mb-15 '>
          <div className='px-6 lg:px-15 py-6 lg:py-15 flex flex-col lg:flex-row gap-16 rounded-[40px] bg-[#ffffff0d]' >
            <div className='left flex flex-col justify-center w-full' >
              <h2 className='font-bold text-brand-color-4 uppercase text-small mb-3 leading-[120%] text-center lg:text-left fade_in_slide_up' >
                Multipliez votre visibilité dès maintenant
              </h2>
              <p className='text-base text-white leading-[170%] text-center lg:text-left fade_in_slide_up' >
                Être référencé sur PagesJaunes avec l’option Référencement Prioritaire permet d’augmenter la visibilité de votre établissement auprès des internautes en quête d’un professionnel pour un service ou une prestation.
              </p>
            </div>

            <div className='right w-full' >
              <Image className='size-full object-cover fade_in_slide_up' src='/seo-image-3.svg' alt='image' width={600} height={600} />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='container mb-10 lg:mb-15 '>
          <div className='px-6 lg:px-13 py-6 lg:py-15 flex flex-col-reverse lg:flex-row gap-[64px] rounded-[40px] bg-[#ffffff0d]' >
            <div className='right w-full' >
              <Image className='size-full object-cover fade_in_slide_up' src='/seo-image-4.svg' alt='image' width={600} height={600} />
            </div>

            <div className='left flex flex-col justify-center w-full'>
              <h2 className='font-bold text-brand-color-5 uppercase text-small mb-3 leading-[120%] text-center lg:text-left fade_in_slide_up' >
              Soyez visible aux meilleurs emplacements Google
              </h2>
              <p className='text-base text-white leading-[170%] text-center lg:text-left fade_in_slide_up' >
                Depuis l’application du DMA en mars 2024, Google a mis en place de nouvelles règles d’affichage. Grâce à ses listes enrichies et ses mots-clés pertinents, PagesJaunes apparaît fréquemment dans les nouveaux emplacements, notamment celui intitulé « Sites de lieux », qui couvre désormais l’ensemble des recherches liées aux activités locales sur Google.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='container mb-10 lg:mb-15 '>
          <div className='px-6 lg:px-15 py-6 lg:py-15 flex flex-col lg:flex-row gap-16 rounded-[40px] bg-[#ffffff0d]'>
            <div className='left flex flex-col justify-center w-full'>
              <h2 className='font-bold text-brand-color-1 uppercase text-[32px] mb-3 leading-[120%] text-center lg:text-left fade_in_slide_up' >
              Gérez votre activité et \ suivez votre campagne via Solocal Manager
              </h2>
              <p className='text-base text-white leading-[170%] text-center lg:text-left fade_in_slide_up' >
              Accédez à toutes les données de votre campagne : impressions, clics, contacts, mots-clés, zones géographiques, et suivez précisément le nombre de demandes de clients générées en temps réel.
              </p>
            </div>
            <div className='right w-full' >
              <Image className='size-full object-cover fade_in_slide_up' src='/seo-image-5.svg' alt='image' width={600} height={600} />
            </div>
          </div>
        </div>
      </section>

      <section className='referance-section py-10 lg:py-20 white_on_scroll'>
        <div className='container mx-auto '>
          <div className='w-full lg:max-w-[1000px] mx-auto text-center mb-15 ' >
            <h5 className='text-main-yellow mb-3 lg:mb-6 ' >
                Présence Prioritaire Pages Jaunes
            </h5>
            <h2 className='text-white text-center font-bold text-small uppercase lg:text-medium mb-4 leading-[120%]'>
              Faites-vous connaitre auprès des internautes \
              <span className='colored text-main-blue' data-color="blue">
                 en recherche de professionnels comme vous
              </span>
            </h2>
          </div>

          <div className='referance-items-container'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
              <div className='referance-item p-6 border border-main-blue rounded-2xl flex flex-col gap-8' data-aos="fade-up" >
                <h4 className='text-[40px] font-bold text-main-green text-center md:text-left'>
                  1
                </h4>
                <div className='icon flex justify-center items-center md:items-start md:justify-start'>
                  <svg xmlns='http://www.w3.org/2000/svg' width='90' height='23' viewBox='0 0 90 23' fill='none'>
                    <path d='M89.0607 12.6027C89.6464 12.0169 89.6464 11.0671 89.0607 10.4813L79.5147 0.93539C78.9289 0.349604 77.9792 0.349604 77.3934 0.93539C76.8076 1.52118 76.8076 2.47092 77.3934 3.05671L85.8787 11.542L77.3934 20.0273C76.8076 20.6131 76.8076 21.5628 77.3934 22.1486C77.9792 22.7344 78.9289 22.7344 79.5147 22.1486L89.0607 12.6027ZM0 11.542V13.042H88V11.542V10.042H0V11.542Z' fill='#007BF4' />
                  </svg>
                </div>
                <p className='text-sm font-normal leading-6 text-center md:text-left'>
                  Nous déterminons
                  <strong className='font-bold'>
                    les mots-clés et localités avec le meilleur potentiel
                    business
                  </strong>
                  pour votre entreprise sur PagesJaunes
                </p>
              </div>
              <div className='referance-item p-6 border border-main-blue rounded-2xl flex flex-col gap-8 'data-aos="fade-up">
                <h4 className='text-[40px] font-bold text-main-orange text-center md:text-left'>
                  2
                </h4>
                <div className='icon flex justify-center items-center md:items-start md:justify-start'>
                  <svg xmlns='http://www.w3.org/2000/svg' width='90' height='23' viewBox='0 0 90 23' fill='none'>
                    <path d='M89.0607 12.6027C89.6464 12.0169 89.6464 11.0671 89.0607 10.4813L79.5147 0.93539C78.9289 0.349604 77.9792 0.349604 77.3934 0.93539C76.8076 1.52118 76.8076 2.47092 77.3934 3.05671L85.8787 11.542L77.3934 20.0273C76.8076 20.6131 76.8076 21.5628 77.3934 22.1486C77.9792 22.7344 78.9289 22.7344 79.5147 22.1486L89.0607 12.6027ZM0 11.542V13.042H88V11.542V10.042H0V11.542Z' fill='#007BF4' />
                  </svg>
                </div>
                <p className='text-sm font-normal leading-6 text-center md:text-left'>
                  Nous déterminons
                  <strong className='font-bold'>
                    les mots-clés et localités avec le meilleur potentiel
                    business
                  </strong>
                  pour votre entreprise sur PagesJaunes
                </p>
              </div>
              <div className='referance-item p-6 border border-main-blue rounded-2xl flex flex-col gap-8 'data-aos="fade-up">
                <h4 className='text-[40px] font-bold text-main-yellow text-center md:text-left'>
                  3
                </h4>
                <div className='icon flex justify-center items-center md:items-start md:justify-start'>
                  <svg xmlns='http://www.w3.org/2000/svg' width='90' height='23' viewBox='0 0 90 23' fill='none'>
                    <path d='M89.0607 12.6027C89.6464 12.0169 89.6464 11.0671 89.0607 10.4813L79.5147 0.93539C78.9289 0.349604 77.9792 0.349604 77.3934 0.93539C76.8076 1.52118 76.8076 2.47092 77.3934 3.05671L85.8787 11.542L77.3934 20.0273C76.8076 20.6131 76.8076 21.5628 77.3934 22.1486C77.9792 22.7344 78.9289 22.7344 79.5147 22.1486L89.0607 12.6027ZM0 11.542V13.042H88V11.542V10.042H0V11.542Z' fill='#007BF4' />
                  </svg>
                </div>
                <p className='text-sm font-normal leading-6 text-center md:text-left'>
                  Nous déterminons
                  <strong className='font-bold'>
                    les mots-clés et localités avec le meilleur potentiel
                    business
                  </strong>
                  pour votre entreprise sur PagesJaunes
                </p>
              </div>
              <div className='referance-item p-6 border border-main-blue rounded-2xl flex flex-col gap-8 'data-aos="fade-up">
                <h4 className='text-[40px] font-bold text-main-purple text-center md:text-left'>
                  4
                </h4>
                <div className='icon flex justify-center items-center md:items-start md:justify-start'>
                  <svg xmlns='http://www.w3.org/2000/svg' width='90' height='23' viewBox='0 0 90 23' fill='none'>
                    <path d='M89.0607 12.6027C89.6464 12.0169 89.6464 11.0671 89.0607 10.4813L79.5147 0.93539C78.9289 0.349604 77.9792 0.349604 77.3934 0.93539C76.8076 1.52118 76.8076 2.47092 77.3934 3.05671L85.8787 11.542L77.3934 20.0273C76.8076 20.6131 76.8076 21.5628 77.3934 22.1486C77.9792 22.7344 78.9289 22.7344 79.5147 22.1486L89.0607 12.6027ZM0 11.542V13.042H88V11.542V10.042H0V11.542Z' fill='#007BF4' />
                  </svg>
                </div>
                <p className='text-sm font-normal leading-6 text-center md:text-left'>
                  Nous déterminons
                  <strong className='font-bold'>
                    les mots-clés et localités avec le meilleur potentiel
                    business
                  </strong>
                  pour votre entreprise sur PagesJaunes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='px-5 xl:px-0 py-15'>
        <div className='container white_on_scroll relative bg-main-blue bg-cover bg-center px-20 py-25 rounded-4xl lg:rounded-[56px] overflow-hidden mb-20 '>
          <div className='absolute top-0 bottom-0 left-0 right-0 bg-[url("/grid-line.png")] bg-cover bg-no-repeat size-full'></div>
          <div className='flex flex-col justify-center z-10 relative px-6 py-6  cta-blue'>
            <h2 className='font-bold text-center uppercase text-white text-[40px] mb-3 leading-[120%] '>
              Nos experts à vos côtés
            </h2>
            <p className='text-sm text-white text-center mb-10 leading-[170%] ' >
              Nos équipes et nos conseillers en ligne accompagnent le
              développement de votre marketing digital.
            </p>
            <Main_button
              button_title='Me faire rappeler'
              button_url='/request-quote/'
              className='w-fit m-auto border border-white transparent py-5 px-8 mb-0 fade_in_slide_up'
            />
          </div>
        </div>
      </section>

      <section className='faq relative overflow-hidden pb-30'>
        <div className=' w-full px-5 lg:px-0 lg:max-w-[900px] mx-auto'>
          <h2 className='font-bold text-center uppercase text-white text-small lg:text-medium mb-8 lg:mb-15 leading-[120%] fade_in_slide_up' >
            Questions fréquentes
          </h2>
          <div className='accourdion_left'>
            <Accordion
              initial_state={true}
              title='Confier ma stratégie SEO à l’agence Sovita'>
              <p className="fade_in_slide_up" >
                Chez SOVITA, nous savons qu’un site Internet soigné est
                essentiel pour représenter votre entreprise. Il reflète votre
                image en ligne tout en jouant un rôle stratégique : attirer des
                visiteurs et les transformer en clients engagés. Notre équipe
                créative conçoit votre site main dans la main avec vous, afin
                qu’il incarne fidèlement votre identité et propose une
                navigation agréable aux utilisateurs. L’avantage SOVITA : nos
                sites s’adaptent à tous les métiers. De plus, certains modèles
                sont spécialement pensés pour atteindre des objectifs précis
                (vente, acquisition de prospects) ou pour des domaines ciblés
                comme la restauration ou l’entretien automobile.
              </p>
            </Accordion>

            <Accordion
              initial_state={false}
              title='Des sites sur mesure adaptés aux besoins de votre activité'>
              <p className="fade_in_slide_up" >
                Chez SOVITA, nous savons qu’un site Internet soigné est
                essentiel pour représenter votre entreprise. Il reflète votre
                image en ligne tout en jouant un rôle stratégique : attirer des
                visiteurs et les transformer en clients engagés. Notre équipe
                créative conçoit votre site main dans la main avec vous, afin
                qu’il incarne fidèlement votre identité et propose une
                navigation agréable aux utilisateurs. L’avantage SOVITA : nos
                sites s’adaptent à tous les métiers. De plus, certains modèles
                sont spécialement pensés pour atteindre des objectifs précis
                (vente, acquisition de prospects) ou pour des domaines ciblés
                comme la restauration ou l’entretien automobile.
              </p>
            </Accordion>

            <Accordion
              initial_state={false}
              title='Une équipe digitale complète à votre service'>
              <p className="fade_in_slide_up" >
                Chez SOVITA, nous savons qu’un site Internet soigné est
                essentiel pour représenter votre entreprise. Il reflète votre
                image en ligne tout en jouant un rôle stratégique : attirer des
                visiteurs et les transformer en clients engagés. Notre équipe
                créative conçoit votre site main dans la main avec vous, afin
                qu’il incarne fidèlement votre identité et propose une
                navigation agréable aux utilisateurs. L’avantage SOVITA : nos
                sites s’adaptent à tous les métiers. De plus, certains modèles
                sont spécialement pensés pour atteindre des objectifs précis
                (vente, acquisition de prospects) ou pour des domaines ciblés
                comme la restauration ou l’entretien automobile.
              </p>
            </Accordion>

            <Accordion
              initial_state={false}
              title='Un beau site, oui, mais pas que ! Découvrez nos offres visibilité.'>
              <p className="fade_in_slide_up" >
                Chez SOVITA, nous savons qu’un site Internet soigné est
                essentiel pour représenter votre entreprise. Il reflète votre
                image en ligne tout en jouant un rôle stratégique : attirer des
                visiteurs et les transformer en clients engagés. Notre équipe
                créative conçoit votre site main dans la main avec vous, afin
                qu’il incarne fidèlement votre identité et propose une
                navigation agréable aux utilisateurs. L’avantage SOVITA : nos
                sites s’adaptent à tous les métiers. De plus, certains modèles
                sont spécialement pensés pour atteindre des objectifs précis
                (vente, acquisition de prospects) ou pour des domaines ciblés
                comme la restauration ou l’entretien automobile.
              </p>
            </Accordion>

            <Accordion
              initial_state={false}
              title='Des résultats mesurables grâce à nos outils de suivi'>
              <p className="fade_in_slide_up" >
                Chez SOVITA, nous savons qu’un site Internet soigné est
                essentiel pour représenter votre entreprise. Il reflète votre
                image en ligne tout en jouant un rôle stratégique : attirer des
                visiteurs et les transformer en clients engagés. Notre équipe
                créative conçoit votre site main dans la main avec vous, afin
                qu’il incarne fidèlement votre identité et propose une
                navigation agréable aux utilisateurs. L’avantage SOVITA : nos
                sites s’adaptent à tous les métiers. De plus, certains modèles
                sont spécialement pensés pour atteindre des objectifs précis
                (vente, acquisition de prospects) ou pour des domaines ciblés
                comme la restauration ou l’entretien automobile.
              </p>
            </Accordion>
          </div>
        </div>
        <Image
          src='/yellow-blurb.png'
          height={220}
          width={220}
          alt='Green Blurb Image'
          className='absolute bottom-[-100] right-[-200] blur-[200px] -z-10'
        />
      </section>
    </div>
    </>
  );
}
