// "use server"

import Cta from "@/Components/Cta";
import Hero_Banner from "@/Components/Hero-Banner";
import Number_Counter from "@/Components/Number-Counter";
import Image from "next/image";
import Accordion from "@/ui/accordion";
import { get_page_meta,PAGES } from "@/lib/api";

export const dynamic = 'force-dynamic';

export async function generateMetadata() {
  let data = await get_page_meta(PAGES.create_site);

  return {
    title: data?.page_title,
    description: data?.page_desc?.map((cur) => cur.children.map((c) => c.text)).join(" "),
    keywords:data?.keywords?.map((k) => k.keyword),
  };
}

export default async function Home() {
  return (
    <>
    <div className='home-page'>
      <section>
        <Hero_Banner />
      </section>

      <div>
        <Number_Counter className='mb-20' />
      </div>

      <section className='faq mb-15 lg:mb-30'>
        <div className='container flex flex-col-reverse lg:flex-row  gap-9 justify-start items-start relative'>
          <div className='accourdion_left w-full'>
            <Accordion
              initial_state={true}
              title='Depuis 2023, SOVITA a réalisé des sites web pour plus de 800 entreprises satisfaites.'>
              <p className="fade_in_slide_up" >
                  Chez SOVITA, nous savons qu’un site Internet soigné est essentiel pour représenter votre entreprise. Il reflète votre image en ligne tout en jouant un rôle stratégique : attirer des visiteurs et les transformer en clients engagés. Notre équipe créative conçoit votre site main dans la main avec vous, afin qu’il incarne fidèlement votre identité et propose une navigation agréable aux utilisateurs. L’avantage SOVITA : nos sites s’adaptent à tous les métiers. De plus, certains modèles sont spécialement pensés pour atteindre des objectifs précis (vente, acquisition de prospects) ou pour des domaines ciblés comme la restauration ou l’entretien automobile.
              </p>
            </Accordion>

            <Accordion
              initial_state={false}
              title='Des sites sur mesure adaptés aux besoins de votre activité'>
              <p className="fade_in_slide_up" >
                Chaque entreprise est unique, et nous concevons des sites web fidèles à votre image et alignés sur vos ambitions.Notre méthode est fondée sur l’écoute : nous analysons votre activité, vos enjeux et votre audience pour construire un site pertinent et efficace. Qu’il s’agisse d’un site vitrine, d’une boutique en ligne ou d’un blog professionnel, nous élaborons une solution personnalisée et impactante, à la hauteur de votre marque. Explorez une large sélection de modèles adaptables, enrichis en permanence selon les tendances du moment.L’atout Sovita : un site totalement gérable par vos soins.Publiez vos actualités, ajoutez vos photos, accédez aux statistiques de fréquentation ou gérez vos demandes de contact en toute autonomie.
              </p>
            </Accordion>

            <Accordion
              initial_state={false}
              title='Une équipe digitale complète à votre service'>
              <p className="fade_in_slide_up" >
                Créer un site Internet, c’est bien plus qu’un simple visuel : cela demande un design soigné, des fonctionnalités sur-mesure et une base technique solide. Chez Sovita, notre équipe réunit des experts du digital (designers, développeurs, rédacteurs…) pour concevoir des sites performants et modernes. Que vous recherchiez un site responsive, une connexion fluide avec les réseaux sociaux, une page optimisée pour la conversion ou un bon positionnement sur Google, nous maîtrisons chaque levier pour répondre à vos besoins. Le + Sovita : vous êtes accompagné par un interlocuteur unique, présent à chaque étape. Conception, formation à vos outils, mises à jour : notre mission est de vous simplifier la vie et de garantir un résultat à la hauteur de vos attentes.
              </p>
            </Accordion>

            <Accordion
              initial_state={false}
              title='Un beau site, oui, mais pas que ! Découvrez nos offres visibilité.'>
              <p className="fade_in_slide_up" >
                Un site web attrayant, c’est bien. Mais encore faut-il qu’il soit trouvé par vos futurs clients ! Depuis 2009, Sovita est une agence web spécialisée dans le référencement naturel (SEO). Nous optimisons votre site pour les moteurs de recherche comme Google afin de positionner votre entreprise sur la première page des résultats. Grâce à des techniques éprouvées et des stratégies ciblées, le SEO améliore la visibilité en ligne et attire un trafic qualifié vers votre site. Nous vous accompagnons également dans votre croissance avec des solutions de référencement payant, comme les campagnes Google Ads. Tous les sites que nous créons intègrent une stratégie SEO complète, alliant contenus optimisés, expérience utilisateur soignée et respect des dernières exigences de Google. L’atout Sovita : chaque stratégie SEO est conçue sur-mesure. Un expert dédié vous accompagnera à chaque étape, de la mise en œuvre jusqu’au suivi régulier des résultats.
              </p>
            </Accordion>

            <Accordion
              initial_state={false}
              title='Des résultats mesurables grâce à nos outils de suivi'>
              <p className="fade_in_slide_up" >
                Créer un site vitrine représente un investissement essentiel pour votre entreprise. C’est pourquoi nous vous offrons un espace en ligne dédié, vous permettant de gérer votre site, suivre vos performances SEO, consulter vos demandes de contact, et bien plus encore. L’avantage Sovita : un accompagnement complet avec un support client accessible en ligne via chat, et également par téléphone pour répondre à toutes vos questions rapidement et efficacement.
              </p>
            </Accordion>
          </div>
          <div className='img_right w-full md:sticky top-25 fade_in_slide_up'>
            <Image src='/image-4.png' className='w-ful obejct-cover' alt='accordion image' width={600} height={600} />
          </div>
        </div>
      </section>

      <section className='home-cta relative overflow-hidden py-15 lg:py-30 white_on_scroll'>
        <Cta />
        <Image src='/blue-blurb.png' height={320} width={320} alt='Green Blurb Image' className='absolute bottom-[-200] right-[-200] blur-[300px] -z-10' />
      </section>
    </div>
    </>
  );
}

