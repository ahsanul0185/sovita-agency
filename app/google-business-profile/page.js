// "use server"

import Image from "next/image";
import Accordion from "@/ui/accordion";
import Hero_paragraph from "@/ui/hero-paragraph";
import Hero_subtitle from "@/ui/hero-subtitle";
import Hero_title from "@/ui/hero-title";
import Small_title from "@/ui/small-title";
import Main_button from "@/ui/main-button";
import Number_box from "@/ui/number-box";
import { get_page_meta,PAGES } from "@/lib/api";

export const dynamic = 'force-dynamic';

export async function generateMetadata() {
  let data = await get_page_meta(PAGES.google_bussiness_profile);

  return {
    title: data?.page_title,
    description: data?.page_desc?.map((cur) => cur.children.map((c) => c.text)).join(" "),
    keywords:data?.keywords?.map((k) => k.keyword),
  };
}

export default async function Google_Business_Profile() {
  return (
    <>
    <div className='local-seo-page overflow-hidden'>
      <Image src='/blue-blurb.png' height={227} width={227} alt='Blue Blurb Image' className='absolute top-[20%] left-0 blur-[200px] -z-5 opacity-40 lg:opacity-100' />
      <div className='w-full px-5 lg:px-0 lg:max-w-[900px] mx-auto text-center py-15 h-[calc(100vh-80px)] flex flex-col items-center justify-center'>
          <Hero_title title='Google My Business' title_colored=''  />
          <Hero_subtitle subtitle='Gérez votre visibilité et votre ' subtitle_colored='image avec efficacité'/>
          <Hero_paragraph
            paragraph="Notre agence web est spécialisée dans la création de sites internet, ainsi que dans le référencement naturel et local. Mais ce n’est pas tout ! Nous vous accompagnons également dans la création et la gestion de votre fiche Google My Business, en valorisant les informations clés de votre entreprise pour capter l’attention de vos clients locaux. Profitez de cette opportunité pour devancer vos concurrents."
            classes='text-center mb-10 fade_in_slide_up'
          />
          <Main_button button_title='Rencontrons-nous' button_url='/request-quote/'  className="fade_in_slide_up"/>
       </div>
      <Image src='/blue-blurb.png' height={320} width={320} alt='Green Blurb Image' className='absolute top-[30%] right-0 blur-[200px] -z-10 opacity-40 lg:opacity-100'/>

      <div className='w-full px-5 lg:px-0 lg:max-w-[900px] mx-auto text-center py-15'>
        <Small_title title='DES CHIFFRES N’ONT JAMAIS AUSSI BIEN PARLÉ' classes='text-center mb-10'/>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <Number_box count_number={1000} prefix="+" text="fiches d'établissement gérées" color='green' data-aos="fade-up" data-aos-duration="1000"/>
          <Number_box count_number={80} suffix="%" text="d'apparition dans le Pack local" color='orange' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" />
          <Number_box count_number={42} text='note moyenne des fiches' color='yellow' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600"/>
        </div>
      </div>

      <section className='faq mb-15 lg:mb-30'>
        <div className='container flex flex-col-reverse lg:flex-row gap-9 justify-center items-start relative'>
          <div className='accourdion_left w-full fade_in_slide_up'>
            <Accordion
              initial_state={true}
              title='Google My Business : une fiche simple, mais un puissant levier pour booster votre visibilité locale.'>
              <p className="fade_in_slide_up" >
              Fort de milliers de stratégies SEO menées avec succès pour nos clients, Futur Digital est aujourd’hui partenaire Google My Business. Avec un large portefeuille de fiches d’établissements en gestion, nous vous accompagnons pour booster votre visibilité locale. Google My Business est un levier marketing indispensable pour toute entreprise souhaitant optimiser sa présence sur Google et apparaître dans les résultats locaux. Nous maîtrisons parfaitement l’optimisation de ces profils pour vous aider à vous distinguer efficacement dans votre zone géographique.
L’atout Sovita : nous gérons entièrement votre fiche ! De sa création à la modération des avis en passant par sa mise à jour régulière, nous assurons un suivi complet. Bien plus qu’une simple agence de communication, Sovita est également spécialisée en e-réputation pour garantir une image positive et cohérente de votre activité en ligne.
              </p>
            </Accordion>

            <Accordion
              initial_state={false}
              title='Respectez les règles Google pour booster efficacement votre visibilité en ligne.'>
              <p className="fade_in_slide_up" >
              Saviez-vous qu’environ 50 critères peuvent impacter le positionnement de votre fiche d’établissement ? Notre équipe experte se charge de tout.
 Google Business Profile permet à votre entreprise de ressortir dans les recherches locales quand les internautes cherchent des services ou produits à proximité. Mais encore faut-il que votre fiche respecte les exigences de Google !
 Nous optimisons votre profil afin qu’il soit parfaitement visible et nous maîtrisons les leviers essentiels pour améliorer votre référencement local.
Le + Sovita : Nos spécialistes du SEO étaient déjà actifs lors du lancement de Google My Business en France. Depuis près de 10 ans, nous en maîtrisons chaque rouage et accompagnons nos clients avec cette expertise.
              </p>
            </Accordion>

            <Accordion
              initial_state={false}
              title='Contrôlez votre réputation grâce aux avis Google'>
              <p className="fade_in_slide_up" >
              Les internautes ont un réflexe bien ancré : vérifier les avis avant de faire appel à un service ou d’acheter un produit. Avoir des avis positifs est donc essentiel, mais ce n’est pas suffisant. Les réponses à ces avis jouent également un rôle crucial : elles permettent de créer un lien direct avec vos clients tout en renforçant votre image de marque. Pour cela, deux éléments sont indispensables : la neutralité dans les réponses et une gestion régulière.
Les avis négatifs, quant à eux, sont souvent mal gérés sous le coup de l’émotion, ce qui peut nuire à votre réputation. Pourtant, Google vous offre une opportunité unique de vous exprimer, de valoriser votre sens du service et votre bienveillance. C’est pourquoi nous nous chargeons de répondre à votre place, avec tact et professionnalisme.
Nous déployons également des stratégies concrètes pour favoriser la collecte d’avis clients.
 Le + Sovita : une plateforme centralisée pour visualiser en temps réel toutes vos prestations et avis, comme sur Google My Business.
              </p>
            </Accordion>

            <Accordion
              initial_state={false}
              title='Valorisez l’image professionnelle de votre entreprise'>
              <p className="fade_in_slide_up" >
              Avez-vous entendu parler du « marketing de contenu » ? Contrairement aux publicités traditionnelles souvent intrusives, cette approche plus stratégique valorise votre expertise en partageant des contenus informatifs, pertinents et accessibles, sous forme de textes et de visuels impactants.
 En mettant en lumière vos connaissances, vous instaurez un climat de confiance et positionnez votre entreprise comme une référence dans son domaine.
 Notre agence Futur Digital s’occupe de la création régulière de vos publications, en se basant sur les tendances de votre secteur et les recherches populaires des internautes.
 Renforcez votre image sur le web grâce à notre accompagnement sur mesure.
 <strong>L’atout Sovita</strong> : Une étude de marché est réalisée en amont afin de garantir la pertinence et l’impact de chaque contenu publié
              </p>
            </Accordion>
          </div>
          <div className='img_right w-full sticky top-25'>
            <Image src='/violet-full-blurb.png' className=' blur-[200px] absolute top-[100px] left-[50%] -translate-x-[100px] -translate-y-[50%] -z-10' alt='accordion image' width={300} height={300} />
            <Image className='w-full object-cover fade_in_slide_up' src='/google-business-faq-image.svg' alt='image' width={600} height={600} />
          </div>
        </div>
      </section>

      <section className='cta relative overflow-hidden  py-15 lg:py-30 white_on_scroll'>
        <div className=' container'>
          <div className='w-full mx-auto text-center mb-15'>
            <h2 className='text-white text-center font-bold text-small uppercase lg:text-medium mb-4 leading-[120%]'>
              <span className='colored text-main-blue' data-color="blue">
                 J’AI BESOIN DE TRAVAILLER MON IMAGE EN LIGNE.
              </span>
              <br />
              CONTACTEZ-MOI POUR OPTIMISER MA FICHE !
            </h2>
            <Hero_paragraph
              paragraph="Ne laissez pas l’image de votre entreprise se dégrader dans les résultats de recherche locaux. Contactez  Sovita dès aujourd'hui pour bénéficier de notre expertise en optimisation de Google My Business. Saviez-vous que vous pouvez aussi la sponsoriser ? Pour en savoir plus sur notre prestation Google Ads, n’hésitez pas à consulter notre page dédiée."
              classes='text-center mb-5 fade_in_slide_up'
            />
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-15'>
            <div className='image-container relative'>
              <Image src='/green-blurb.png' className='absolute top-[50%] left-[50%] w-[200px] h-[200px] -z-10 blur-[200px] translate-x-[-50%] translate-y-[-50%]' alt='yellow blur' width={200} height={200} />
              <div className='grid grid-cols-3 gap-6'>
                <div className='col-span-2 aspect-cover  rounded-2xl border fade_in_slide_up border-[rgba(255, 255, 255, 0.50)]'>
                  <Image src='/image.png' height={100} width={100} alt='image_1' className='aspect-cover size-full rounded-2xl' />
                </div>
                <div className='col-span-1 object-cover  rounded-2xl border fade_in_slide_up border-[rgba(255, 255, 255, 0.50)]'>
                  <Image src='/image-2.png' height={100} width={100} alt='image_2' className=' object-cover size-full rounded-2xl' />
                </div>
                <div className='col-span-1 rounded-2xl fade_in_slide_up object-cover border border-[rgba(255, 255, 255, 0.50)]'>
                  <Image src='/image-3.png' height={100} width={100} alt='image_3' className=' size-full rounded-2xl object-cover' />
                </div>
                <div className='col-span-2 aspect-cover  rounded-2xl border fade_in_slide_up border-[rgba(255, 255, 255, 0.50)]'>
                  <Image src='/image-1.png' height={100} width={100} alt='image_3' className='aspect-cover size-full rounded-2xl object-cover'/>
                </div>
              </div>
            </div>

            <div className='text-container flex flex-col justify-center items-center md:items-start'>
              <Small_title
                title='ILS ONT HÂTE DE FAIRE BRILLER VOTRE FICHE GOOGLE'
                classes=' text-center md:text-left mb-6'
              />
              <Hero_paragraph
                paragraph='Nous sommes prêts à vous concocter quelque chose de spécial, répondant à vos besoins et vos envies.'
                classes='text-center md:text-left mb-10'
              />
              <Main_button
                button_title='Audit digital gratuit'
                button_url='/request-quote/'
                className="fade_in_slide_up"
              />
            </div>
          </div>
        </div>

        <Image src='/yellow-blurb.png' height={320} width={320} alt='Green Blurb Image' className='absolute bottom-[-200] right-[-200] blur-[300px] -z-10' />
      </section>
    </div>
    </>
  );
}
