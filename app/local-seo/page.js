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
  let data = await get_page_meta(PAGES.local_seo);

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
      <Image src='/violet-blurb.png' height={227} width={227} alt='Blue Blurb Image' className='absolute top-[40%] left-0 blur-[300px] -z-10' />
      <div className='md:max-w-[900px] px-5 lg:px-0 mx-auto text-center py-15 h-[calc(100vh-80px)] flex flex-col items-center justify-center fade_in_slide_up'>
        <Hero_title title='RÉFÉRENCEMENT LOCAL' title_colored='' />
        <Hero_subtitle subtitle='Attirez des clients près de ' subtitle_colored=' chez vous !' />
        <Hero_paragraph paragraph='Avec Sovita, touchez vos futurs clients locaux, dirigez-les vers votre site internet et transformez-les en clients fidèles. Notre expertise en SEO local vous permet de gagner en visibilité sur les moteurs de recherche comme Google ou Bing. Commerçants, artisans ou prestataires de services : nous vous accompagnons pour renforcer votre présence en ligne et vous démarquer dans votre zone géographique.' classes='text-center mb-10' />
        <Main_button button_title='Rencontrons-nous' button_url='/request-quote/' className="fade_in_slide_up"/>
      </div>
      <Image src='/violet-blurb.png' height={320} width={320} alt='Green Blurb Image' className='absolute top-[50%] right-0 blur-[300px] -z-10' />

      <div className='max-w-[900px] mx-auto text-center py-15 px-5 lg:px-0'>
        <Small_title title='DES CHIFFRES N’ONT JAMAIS AUSSI BIEN PARLÉ' classes='text-center mb-10' />
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <Number_box count_number='1200' text='entreprises en première page de Google' color='green' data-aos="fade-up" data-aos-duration="1000" />
          <Number_box count_number='15000' text='mots-clés géolocalisés positionnés' color='orange' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" />
          <Number_box count_number='1148' text='stratégies de longue traine' color='yellow' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600"/>
        </div>
      </div>

      <section className='faq mb-15 lg:mb-30'>
        <div className='container flex flex-col-reverse lg:flex-row  gap-9 justify-start items-start relative'>
          <div className='accourdion_left w-full'>
            <Accordion
              initial_state={true}
              title='Confier ma stratégie SEO à l’agence Sovita'>
              <p className="fade_in_slide_up" >
              <strong>Le référencement naturel est essentiel pour capter l’attention de vos clients lorsqu’ils recherchent vos services sur Internet.</strong>
 Dans un secteur local souvent très concurrentiel, il est vital de vous différencier pour attirer efficacement les clients proches de votre établissement.
 Fort de plus de 5 ans d’expérience, Sovita connaît en profondeur les exigences de Google et les leviers de performance de son algorithme.
 Nos méthodes de référencement local, éprouvées au fil du temps, sont conçues pour booster votre visibilité.
 Nous collaborons avec vous pour renforcer votre présence en ligne et positionner votre entreprise parmi les premiers résultats des recherches locales, augmentant ainsi vos opportunités commerciales.
<strong>L’avantage Sovita</strong> : chaque client bénéficie d’une stratégie de mots-clés sur mesure, ciblée géographiquement.
 Cette approche personnalisée évolue avec les objectifs et le développement de votre entreprise, pour vous garantir des résultats durables et adaptés.
              </p>
            </Accordion>

            <Accordion
              initial_state={false}
              title='Attirez des clients locaux et qualifiés grâce à un ciblage précis'>
              <p className="fade_in_slide_up" >
              Le référencement local vise à capter les recherches effectuées par les internautes situés dans votre secteur géographique. Qu’il s’agisse de requêtes liées à votre domaine d’activité, à vos produits ou à des services de proximité, nous optimisons votre référencement pour vous positionner dans les premiers résultats pertinents. L’objectif : que les clients proches de vous trouvent facilement votre entreprise au moment où ils en ont besoin.
L’avantage Sovita : notre équipe se charge d’étudier vos concurrents, les habitudes de recherche locales et les tendances actuelles, afin d’identifier les mots-clés les plus efficaces pour vous positionner durablement.
              </p>
            </Accordion>

            <Accordion
              initial_state={false}
              title='Votre stratégie locale clé en main efficace'>
              <p className="fade_in_slide_up" >
              Chez Sovita, nous adoptons une approche complète du référencement local, spécialement conçue pour répondre aux besoins de votre entreprise. En plus d’une analyse précise de votre secteur et de vos concurrents, nous vous aidons à renforcer votre présence locale et à soigner votre image grâce à Google My Business, aussi appelé fiche d’établissement. Cet outil vous permet de renseigner des informations essentielles comme votre adresse, vos horaires, votre numéro de téléphone, et de récolter des avis clients. Il vous permet aussi d’échanger avec votre clientèle, de gagner en visibilité sur Google, et de bâtir une solide réputation en ligne.
Chez Sovita, nous travaillons votre image avec un site internet professionnel, votre visibilité sur Google avec un bon référencement naturel, et votre notoriété locale grâce à une fiche Google bien animée.
Le + Sovita : nous nous occupons de tout ! Création, optimisation et gestion de votre fiche Google. Réponses aux avis, publications régulières, mises à jour… Notre équipe dédiée prend tout en main pour vous faire gagner en visibilité.
              </p>
            </Accordion>

            <Accordion
              initial_state={false}
              title='Une présence en ligne cohérente et engageante'>
              <p className="fade_in_slide_up" >
              Le référencement local ne repose pas uniquement sur l’optimisation de votre site web. Il s’agit d’un ensemble d’actions visant à construire une image forte sur tous les supports numériques. Chez Sovita, nous veillons d’abord à harmoniser vos informations commerciales sur les plateformes locales, les fiches d’établissement et les réseaux sociaux. Ensuite, nous produisons un contenu pertinent, original et adapté à votre activité, publié sur des pages dédiées à votre stratégie de visibilité. Résultat : vous gagnez en autorité et vous vous démarquez en tant que professionnel de confiance.
              L’avantage Sovita : chaque page conçue pour votre stratégie SEO est pensée comme une vraie landing page. Cela signifie qu’elle est optimisée pour transformer un visiteur en prospect, en l’incitant à prendre contact rapidement avec votre entreprise.
              </p>
            </Accordion>

            <Accordion
              initial_state={false}
              title='Une présence en ligne cohérente et engageante'>
              <p className="fade_in_slide_up" >
              Le référencement local ne se limite pas à votre site internet, il englobe toute votre visibilité en ligne. Nous commençons par garantir que vos informations (nom, adresse, téléphone…) soient identiques et à jour sur tous les supports : annuaires locaux, fiches établissement, plateformes sociales, etc. Ensuite, nous rédigeons des contenus pertinents et adaptés, intégrés à des pages spécifiques à votre stratégie, afin de renforcer votre crédibilité et votre expertise dans votre secteur.
L’avantage Sovita : nous construisons vos pages SEO de façon à ce qu’elles répondent aux exigences d’une landing page efficace. Cela signifie qu’elles sont pensées pour capter l’attention, mettre en valeur vos services et inciter clairement les visiteurs à passer à l’action en prenant contact avec votre entreprise.
              </p>
            </Accordion>
            <Accordion
              initial_state={false}
              title='Suivez l’évolution de votre présence en ligne en toute transparence'>
              <p className="fade_in_slide_up" >
              Chez Sovita, nous plaçons la réussite et la confiance au cœur de nos actions. Nous suivons avec rigueur l’évolution de votre visibilité sur les moteurs de recherche. Notre objectif : garantir que vos futurs clients vous trouvent dès la première page de Google. Nos experts s’engagent pleinement à optimiser votre site pour atteindre les meilleures positions et y rester durablement.
Grâce à votre espace client dédié, vous pourrez suivre les progrès réalisés, mot-clé par mot-clé, en toute transparence.
Le + Sovita : en moyenne, nos clients accèdent aux premières pages de Google en seulement 3 à 6 mois !
              </p>
            </Accordion>
          </div>
          <div className='img_right w-full md:sticky top-25 fade_in_slide_up'>
            <Image src='/violet-full-blurb.png' className=' blur-[300px] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]' alt='accordion image' width={300} height={300} />
            <Image src='/image-5.svg' className='w-ful obejct-cover' alt='accordion image' width={600} height={600} />
          </div>
        </div>
      </section>

      <section className='cta relative overflow-hidden  py-15 lg:py-30 white_on_scroll'>
        <div className=' container'>
          <div className='max-w-[800px] mx-auto text-center mb-15'>
            <h2 className='text-white text-center font-bold text-small uppercase lg:text-medium mb-4 leading-[120%]'>
              <span className='colored text-main-blue' data-color="blue">
                JE VEUX ÊTRE VISIBLE SUR GOOGLE !
              </span>{" "}
              <br />
              CONTACTEZ-MOI POUR UN AUDIT GRATUIT.
            </h2>
            <Hero_paragraph
              paragraph='Contactez-nous en deux clics, et bénéficiez d’un audit de site Internet et de visibilité gratuit.
Pour en savoir plus sur notre prestation de création et de fiche d’établissement, n’hésitez pas à consulter notre page dédiée.'
              classes='text-center mb-10'
            />
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-15'>
            <div className='image-container relative' >
            <Image src='/yellow-blurb.png' className='absolute top-[50%] left-[50%] w-[200px] h-[200px] -z-10 blur-[200px] translate-x-[-50%] translate-y-[-50%]' alt='yellow blur' width={200} height={200} />
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

            <div className='text-container flex flex-col justify-center items-center lg:items-start'>
              <Small_title
                title='ILS ONT HÂTE DE PRENDRE EN MAIN VOTRE
RÉFÉRENCEMENT ORGANIQUE'
                classes='text-center lg:text-left mb-6'
                data-aos="fade-up"
              />
              <Hero_paragraph
                paragraph='Nous sommes prêts à vous concocter quelque chose de spécial, répondant à vos besoins et vos envies.'
                classes='text-center lg:text-left mb-10'
                data-aos="fade-up"
              />
              <Main_button
                button_title='Audit digital gratuit'
                button_url='/request-quote/'
                data-aos="fade-up"
              />
            </div>
          </div>
        </div>
        <Image src='/green-blurb.png' height={320} width={320} alt='Green Blurb Image' className='absolute bottom-[-200] right-[-200] blur-[300px] -z-10' />
      </section>
    </div>
    </>
  );
}
