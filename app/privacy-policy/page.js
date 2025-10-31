// "use server"

import Hero_paragraph from "@/ui/hero-paragraph";
import Image from "next/image";
import { get_page_meta, PAGES } from "@/lib/api";

export const dynamic = 'force-dynamic';

export async function generateMetadata() {
  let data = await get_page_meta(PAGES.privacy_policy);

  return {
    title: data?.page_title,
    description: data?.page_desc?.map((cur) => cur.children.map((c) => c.text)).join(" "),
    keywords:data?.keywords?.map((k) => k.keyword),
  };
}

export default async function privacyPolicy() {
  return (
    <>
    <div className='privacy-policy-page'>
      <section className='w-full py-15  md:py-30'>
        <Image src='/blue-blurb.png' height={227} width={227} alt='Blue Blurb Image' className='absolute top-[40%] left-0 blur-[200px]' />
        <Image src='/blue-blurb.png' height={320} width={320} alt='Green Blurb Image' className='absolute top-[50%] right-0 blur-[200px] w-[200px] h-[200px]' />

        <div className='container'>
          <div className='max-w-[1000px] p-7 md:p-15 rounded-[40px] bg-[#ffffff1a] mx-auto'>
            <div className='flex flex-col gap-10'>
              <div className='flex flex-col gap-6'>
                <h1 className='text-brand-color-1 text-[36px] text-center font-bold'>
                  Mentions légales
                </h1>
                <Hero_paragraph
                  paragraph='Conformément aux dispositions des Articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 pour la Confiance dans l’économie numérique, dite L.C.E.N., il est porté à la connaissance des utilisateurs et visiteurs du site sovita.agency les présentes mentions légales.'
                  classes='text-center !text-base'
                />
                <Hero_paragraph
                  paragraph='Le site sovita.agency est accessible à l’adresse suivante : www.sovita.agency (ci-après « le Site »). L’accès et l’utilisation du Site sont soumis aux présentes » Mentions légales » détaillées ci-après ainsi qu’aux lois et/ou règlements applicables. La connexion, l’utilisation et l’accès à ce Site impliquent l’acceptation intégrale et sans réserve de l’internaute de toutes les dispositions des présentes Mentions Légales.'
                  classes='text-center !text-base'
                />
              </div>
              <div className='flex flex-col gap-6'>
                <h3 className='text-brand-color-1 text-[20px] text-left font-bold uppercase'>
                  INFORMATIONS LÉGALES
                </h3>
                <Hero_paragraph
                  paragraph='En vertu de l’Article 6 de la Loi n° 2004-575 du 21 juin 2004 pour la confiance dans l’économie numérique, il est précisé dans cet article l’identité des différents intervenants dans le cadre de sa réalisation et de son suivi.'
                  classes='!text-base'
                />
              </div>
              <div className='flex flex-col gap-6'>
                <h3 className='text-brand-color-1 text-[20px] text-left font-bold uppercase'>
                  A. EDITEUR DU SITE
                </h3>
                <p className='text-base text-white fade_in_slide_up'>
                  Le site sovita.agency est édité par :<br />
                  Société Sovita Agency, 58 rue de Monceau, 75008 Paris 
                  <br />
                  Adresse e-mail :marketing.ceo@sovita.agency ci-après »
                  l’Éditeur «
                </p>
              </div>
              <div className='flex flex-col gap-6'>
                <h3 className='text-brand-color-1 text-[20px] text-left font-bold uppercase'>
                  B. DIRECTEUR DE PUBLICATION
                </h3>
                <p className='text-base text-white fade_in_slide_up'>
                  Le Directeur de publication est :<br />
                  <b>Sovita Agency </b>
                  <br />
                  Adresse e-mail de contact :marketing.ceo@sovita.agency
                  <br />
                  ci-après » le Directeur de publication
                </p>
              </div>
              <div className='flex flex-col gap-6'>
                <h3 className='text-brand-color-1 text-[20px] text-left font-bold uppercase'>
                  C. Hébergeur du site
                </h3>
                <p className='text-base text-white fade_in_slide_up'>
                  Le site sovita.agency est hébergé par :<br />
                  1&1 Internet SARL dont le siège est situé à l’adresse suivante
                  :<br />
                  Siège Social : 7, place de la Gare, BP 70109, 57201
                  Sarreguemines Cedex
                  <br />
                  Adresse e-mail : contact@1and1.fr
                  <br />
                  ci-après » l’Hébergeur «
                </p>
              </div>
              <div className='flex flex-col gap-6'>
                <h3 className='text-brand-color-1 text-[20px] text-left font-bold uppercase'>
                  D. UTILISATEURS
                </h3>
                <p className='text-base text-white fade_in_slide_up'>
                  Sont considérés comme utilisateurs tous les internautes qui
                  naviguent, lisent, visionnent et utilisent le site
                  sovita.agency ci-après les » Utilisateurs « .
                </p>
              </div>
              <div className='flex flex-col gap-6'>
                <h3 className='text-brand-color-1 text-[20px] text-left font-bold uppercase'>
                  ACCESSIBILITÉ
                </h3>
                <Hero_paragraph
                  paragraph='Le Site est par principe accessible aux Utilisateurs 24/24h et 7/7j, sauf interruption, programmée ou non, pour des besoins de maintenance ou en cas de force majeure. En cas d’impossibilité d’accès au Site, l’Editeur s’engage à faire son maximum afin d’en rétablir l’accès. L’Éditeur ne saurait être tenu pour responsable de tout dommage, quelle qu’en soit la nature, résultant de son indisponibilité.'
                  classes='!text-base'
                />
              </div>
              <div className='flex flex-col gap-6'>
                <h3 className='text-brand-color-1 text-[20px] text-left font-bold uppercase'>
                LOI APPLICABLE ET JURIDICTION
                </h3>
                <Hero_paragraph
                  paragraph='Les présentes Mentions Légales sont régies par la loi française. En cas de différend et à défaut d’accord amiable, le litige sera porté devant les tribunaux français conformément aux règles de compétence en vigueur.'
                  classes='!text-base'
                />
              </div>
              <div className='flex flex-col gap-6'>
                <h3 className='text-brand-color-1 text-[20px] text-left font-bold uppercase'>
                CONTACT
                </h3>
                <Hero_paragraph
                  paragraph='Pour tout signalement de contenus ou d’activités illicites, l’Utilisateur peut contacter l’Éditeur à l’adresse suivante :marketing.ceo@sovita.agency, ou par courrier recommandé avec accusé de réception adressé à l’Éditeur aux coordonnées précisées dans les présentes mentions légales.'
                  classes='!text-base'
                />
              </div>
              <div className='flex flex-col gap-6'>
                <h3 className='text-brand-color-1 text-[20px] text-left font-bold uppercase'>
                DROITS D’AUTEUR
                </h3>
                <Hero_paragraph
                  paragraph='Le présent site constitue une œuvre de l’esprit au sens des dispositions des articles L 111-1 et suivants du Code de la Propriété Intellectuelle et, à ce titre, Sovita Agency bénéficie en sa qualité d’auteur d’une protection et des droits réservés par la loi. Les photographies, textes, slogans, noms commerciaux, dessins, images, logos, vidéos, séquences animées sonores ou non ainsi que toutes œuvres intégrées dans le site sont également, sauf mention contraire, la propriété de Sovita Agency. A ce titre Sovita Agency ne concède aucune de ses licences ni aucun autre droit que celui de consulter le site.
Les noms et marques citées, mais non propriétés de Sovita Agency, sont copyright de leurs auteurs respectifs.'
                  classes='!text-base'
                />
              </div>
              <div className='flex flex-col gap-6'>
                <h3 className='text-brand-color-1 text-[20px] text-left font-bold uppercase'>
                VIE PRIVÉE
                </h3>
                <Hero_paragraph
                  paragraph='Ce site utilise Google Analytics, un service d’analyse de site internet fourni par Google Inc. (« Google »). Google Analytics utilise des cookies, qui sont des fichiers texte placés sur votre ordinateur, pour aider le site internet à analyser l’utilisation du site par ses utilisateurs. Les données générées par les cookies concernant votre utilisation du site (y compris votre adresse IP) seront transmises et stockées par Google sur des serveurs situés aux Etats-Unis. Google utilisera cette information dans le but d’évaluer votre utilisation du site, de compiler des rapports sur l’activité du site à destination de son éditeur et de fournir d’autres services relatifs à l’activité du site et à l’utilisation d’Internet. Google est susceptible de communiquer ces données à des tiers en cas d’obligation légale ou lorsque ces tiers traitent ces données pour le compte de Google, y compris notamment l’éditeur de ce site. Google ne recoupera pas votre adresse IP avec toute autre donnée détenue par Google. Vous pouvez désactiver l’utilisation de cookies en sélectionnant les paramètres appropriés de votre navigateur. Cependant, une telle désactivation pourrait empêcher l’utilisation de certaines fonctionnalités de ce site. En utilisant ce site internet, vous consentez expressément au traitement de vos données nominatives par Google dans les conditions et pour les finalités décrites ci-dessus. En tant que prestataire tiers, Google utilise des cookies pour diffuser des annonces sur ce site. Grâce au cookie DART, Google adapte les annonces diffusées aux utilisateurs en fonction de leur navigation sur ce site Web ou d’autres sites. Vous pouvez désactiver l’utilisation du cookie DART en vous rendant sur la page des règles de confidentialité s’appliquant au réseau de contenu et aux annonces Google (http://www.google.com/privacy_ads.html).'
                  classes='!text-base'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
