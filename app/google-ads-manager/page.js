// "use server"

import Image from "next/image";
import Accordion from "@/ui/accordion";
import Hero_paragraph from "@/ui/hero-paragraph";
import Hero_subtitle from "@/ui/hero-subtitle";
import Hero_title from "@/ui/hero-title";
import Small_title from "@/ui/small-title";
import Main_button from "@/ui/main-button";
import Number_box from "@/ui/number-box";
import { get_page_meta, PAGES } from "@/lib/api";

export const dynamic = 'force-dynamic';

export async function generateMetadata() {
  let data = await get_page_meta(PAGES.google_ads_manager);

  return {
    title: data?.page_title,
    description: data?.page_desc?.map((cur) => cur.children.map((c) => c.text)).join(" "),
    keywords:data?.keywords?.map((k) => k.keyword),
  };
}

export default async function Google_Ads_Manager() {
  return (
    <>
    <div className='local-seo-page'>
      <Image src='/green-blurb.png' height={227} width={227} alt='Blue Blurb Image' className='absolute top-[40%] left-0 blur-[200px] opacity-40 lg:opacity-100' />
      <div className='w-full px-5 lg:px-0 lg:max-w-[900px] mx-auto text-center py-15 h-[calc(100vh-80px)] flex flex-col items-center justify-center'>
        <Hero_title title='Google Ads' title_colored=''/>
        <Hero_subtitle subtitle='Maximisez votre visibilité et boostez vos ' subtitle_colored='performances en ligne' />
        <Hero_paragraph
          paragraph='Google Ads est une solution publicitaire en ligne qui permet aux entreprises de concevoir et diffuser des annonces sur les plateformes de Google, comme le moteur de recherche ou YouTube. Elle offre la possibilité de cibler précisément une audience, de renforcer la visibilité en ligne et d’attirer un trafic qualifié vers leur site. En tant que partenaire Google, Futur Digital vous accompagne pour atteindre vos objectifs commerciaux grâce à des résultats concrets et mesurables.'
          classes='text-center mb-10 fade_in_slide_up'
        />
        <Main_button button_title='Rencontrons-nous' button_url='/request-quote/'  className="fade_in_slide_up"/>
      </div>

      <div className='w-full px-5 lg:px-0 lg:max-w-[900px] mx-auto text-center py-15' >
        <Small_title title='DES CHIFFRES N’ONT JAMAIS AUSSI BIEN PARLE' classes='text-center mb-10 z-10'/>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <Number_box count_number={50}  prefix="+" suffix="%" text='de leads constatés' color='green' data-aos="fade-up" data-aos-duration="1000" />
          <Number_box count_number={8}   suffix="%" text="de taux d'engagement sur nos campagnes (CTR moyen)" color='orange' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" />
          <Number_box count_number={100} suffix="%" text='de collaborateurs certifiés Google' color='yellow' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600"/>
        </div>
      </div>

      <section className='faq mb-15 lg:mb-30'>
        <div className='container flex flex-col-reverse lg:flex-row gap-9 justify-center items-start relative'>
          <div className='accourdion_left w-full fade_in_slide_up'>
            <Accordion
              initial_state={true}
              title='SEA et Réseau de recherche : Soyez en tête des résultats pertinents'>
              <p className="fade_in_slide_up" >
              La publicité Google Ads, aussi appelée SEA (Search Engine Advertising), permet de capter votre audience idéale exactement au moment où elle recherche des produits ou services similaires aux vôtres. Son principe repose sur le ciblage par mots-clés, comme en SEO, mais ici Google affiche les annonces les plus pertinentes en fonction de la requête, du budget alloué et de la qualité de l’annonce.
Notre agence spécialisée Google Ads conçoit, optimise et pilote vos campagnes pour vous placer en tête des résultats de recherche les plus stratégiques. Cela vous assure une visibilité forte et un trafic qualifié vers votre site.
Le petit plus de SOVITA : nous analysons et ajustons vos campagnes chaque semaine. Cela nous permet de rester alignés avec les évolutions des recherches et de maximiser les performances en continu, tout en exploitant chaque opportunité de conversion
              </p>
            </Accordion>

            <Accordion
              initial_state={false}
              title='Google Ads Display : Faites briller votre marque devant des millions de personnes'>
              <p className="fade_in_slide_up" >
             <strong> Google Ads Display : Donnez un coup d’éclat à votre image de marque</strong>
 Grâce au réseau Display de Google Ads, nous vous permettons de diffuser des visuels percutants sur une multitude de sites partenaires. Vous élargissez ainsi votre audience et augmentez la visibilité de votre marque auprès de millions d’internautes. Notre équipe prend tout en charge : création d’annonces efficaces, ciblage des bonnes audiences et sélection des supports les plus adaptés pour maximiser votre présence en ligne et renforcer votre notoriété.
<strong>Le + Sovita</strong> : Nous réalisons pour vous des visuels attractifs pour vos bannières. Inutile de faire appel à un graphiste, tout est inclus dans notre offre !
              </p>
            </Accordion>

            <Accordion
              initial_state={false}
              title='Google Shopping : Présentez vos produits de manière attractive'>
              <p className="fade_in_slide_up" >
              Avec Google Shopping, vos produits gagnent en visibilité et attirent l’attention des internautes, ce qui vous aide à augmenter vos ventes. Chez Sovita, nous nous occupons de tout le processus : création de votre compte Merchant Center, intégration et optimisation des fiches produits, puis mise en place de campagnes performantes. Vos articles apparaîtront dans les résultats Google avec visuels, tarifs et détails essentiels, pour capter rapidement l’intérêt des acheteurs.
Le + Sovita : Notre équipe s’ajuste à vos besoins. Que vous souhaitiez optimiser une campagne en cours ou que vous ayez besoin d’aide pour créer et gérer votre compte Merchant Center, nous sommes là pour accompagner votre développement.
              </p>
            </Accordion>

            <Accordion
              initial_state={false}
              title='Performance Max : Maximisez votre ROI avec une publicité multicanale'>
              <p className="fade_in_slide_up" >
              La campagne Performance Max allie les forces du référencement payant (SEA) et du Display pour maximiser votre retour sur investissement. Avec une seule campagne, vos annonces peuvent apparaître sur les moteurs de recherche, Google My Business, YouTube, Gmail et bien d’autres plateformes. Nous gérons et optimisons votre budget publicitaire pour assurer une diffusion stratégique sur tous les canaux disponibles. Performance Max vous aide à capter une audience qualifiée, à générer davantage de leads et à renforcer votre notoriété. Une solution publicitaire complète et performante. Pour en profiter, contactez dès maintenant notre agence spécialisée Google Ads.
Le + Sovita : nous adaptons les budgets entre les canaux selon vos objectifs, les données de performance et la saisonnalité.
              </p>
            </Accordion>

            <Accordion
              initial_state={false}
              title='Annonces Local Service Ads : Dominez votre marché local'>
              <p className="fade_in_slide_up" >
              Grâce à Google My Business et aux Local Service Ads, nous boostons votre visibilité locale. En choisissant notre offre GMB, nous optimisons votre fiche pour qu’elle apparaisse efficacement dans les résultats de recherche autour de vous. Avec les annonces LSA, vous passez à la vitesse supérieure : votre fiche est sponsorisée tout en haut de la première page ! Profitez pleinement de votre investissement GMB grâce à notre expertise en sponsorisation et en gestion de campagnes.
Important : les annonces LSA concernent uniquement les professionnels du service.
Le + Sovita : nous renforçons votre e-réputation et vous aidons à obtenir des avis clients authentiques. Une fois votre fiche optimisée et valorisée, vous vous distinguez clairement de vos concurrents avec une présence premium sur Google. Sovita vous accompagne à chaque étape, de l’optimisation à la visibilité maximale, pour faire de votre présence locale une véritable force commerciale.
              </p>
            </Accordion>
          </div>
          <div className='img_right md:sticky top-25 w-full fade_in_slide_up'>
            <Image src='/violet-full-blurb.png' className=' blur-[300px] absolute top-[100px] left-[50%] -translate-x-[100px] -translate-y-[50%] -z-10' alt='accordion image' width={300} height={300} />
            <Image className='w-full object-cover' src='/google-ads-faq-image.svg' alt='image' height={600} width={600} />
          </div>
        </div>
      </section>

      <section className='cta relative overflow-hidden py-15 lg:py-30 white_on_scroll'>
        <div className='container'>
          <div className='max-w-[850px] mx-auto text-center mb-8 lg:mb-15'>
            <h2 className='text-white text-center font-bold text-small uppercase lg:text-medium mb-4 leading-[120%]'>
              <span className='colored text-main-blue' data-color="blue">
                  JE SOUHAITE FAIRE DE LA PUBLICITÉ EN LIGNE ET BOOSTER MON ENTREPRISE.
              </span>
              <br />
             ENVOYEZ-MOI UN DEVIS GOOGLE ADS !
            </h2>
            <Hero_paragraph
              paragraph='Contactez-nous en deux clics, et bénéficiez d’une étude Google Ads personnalisée à partir des meilleurs mots-clés pour votre business, et un tarif calculé selon votre besoin.
Notre offre est multicanale, et comprend la publicité sur les réseaux sociaux. Pour en savoir plus sur notre prestation Social Ads (SMA), n’hésitez pas à consulter notre page dédiée.'
              classes='text-center mb-10 fade_in_slide_up'
            />
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-15'>
            <div className='image-container relative' data-aos="fade-up">
            <Image src='/green-blurb.png' className='absolute top-[50%] left-[50%] w-[200px] h-[200px] -z-10 blur-[200px] translate-x-[-50%] translate-y-[-50%]' alt='yellow blur' width={200} height={200} />
              <div className='grid grid-cols-3 gap-6'>
                <div className='col-span-2 aspect-2/1  rounded-2xl border fade_in_slide_up border-[rgba(255, 255, 255, 0.50)]'>
                  <Image src='/image.png' height={100} width={100} alt='image_1' className='aspect-2/1 size-full rounded-2xl' />
                </div>
                <div className='col-span-1 object-cover  rounded-2xl border fade_in_slide_up border-[rgba(255, 255, 255, 0.50)]'>
                  <Image src='/image-2.png' height={100} width={100} alt='image_2' className=' object-cover size-full rounded-2xl' />
                </div>
                <div className='col-span-1 rounded-2xl fade_in_slide_up object-cover border border-[rgba(255, 255, 255, 0.50)]'>
                  <Image src='/image-3.png' height={100} width={100} alt='image_3' className=' size-full rounded-2xl object-cover' />
                </div>
                <div className='col-span-2 aspect-2/1  rounded-2xl border fade_in_slide_up border-[rgba(255, 255, 255, 0.50)]'>
                  <Image src='/image-1.png' height={100} width={100} alt='image_3' className='aspect-2/1 size-full rounded-2xl object-cover' />
                </div>
              </div>
            </div>

            <div className='text-container flex flex-col justify-center items-center md:items-start'>
              <Small_title
                title='ILS ONT HÂTE DE PRENDRE EN MAIN VOTRE VISIBILITÉ SUR GOOGLE'
                classes='text-center md:text-left mb-6 fade_in_slide_up'
              />
              <Hero_paragraph
                paragraph='Nous sommes prêts à vous concocter quelque chose de spécial, répondant à vos besoins et vos envies.'
                classes='text-center md:text-left mb-10 fade_in_slide_up'
              />
              <Main_button
                button_title='Audit digital gratuit'
                button_url='/request-quote/'
                className="fade_in_slide_up"
              />
            </div>
          </div>
        </div>
        <Image src='/violet-full-blurb.png' height={320} width={320} alt='Green Blurb Image' className='absolute bottom-[-200] right-[-200] blur-[300px] -z-10' />
      </section>
      <Image src='/green-blurb.png' height={320} width={320} alt='Green Blurb Image' className='absolute top-[50%] right-0 blur-[200px] -z-1 opacity-40 lg:opacity-100' />
    </div>
    </>
  );
}
