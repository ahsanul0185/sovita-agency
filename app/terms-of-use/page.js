// "use server"

import Hero_paragraph from "@/ui/hero-paragraph";
import Image from "next/image";
import { get_page_meta, PAGES } from "@/lib/api";

export const dynamic = 'force-dynamic';

export async function generateMetadata() {
  let data = await get_page_meta(PAGES.terms_of_use);

  return {
    title: data?.page_title,
    description: data?.page_desc?.map((cur) => cur.children.map((c) => c.text))?.join(" "),
    keywords:data?.keywords?.map((k) => k.keyword),
  };
}

export default async function termsOfUse() {
  return (
    <>
    <div className='privacy-policy-page'>
      <section className='w-full py-15  md:py-30'>
        <Image
          src='/blue-blurb.png'
          height={227}
          width={227}
          alt='Blue Blurb Image'
          className='absolute top-[40%] left-0 blur-[200px]'
        />
        <Image
          src='/blue-blurb.png'
          height={320}
          width={320}
          alt='Green Blurb Image'
          className='absolute top-[50%] right-0 blur-[200px] w-[200px] h-[200px]'
        />
        <div className='container'>
          <div className='max-w-[1000px] p-7 md:p-15 rounded-[40px] bg-[#ffffff1a] mx-auto'>
            <div className='flex flex-col gap-10'>
              <div className='flex flex-col gap-6'>
                <h1 className='text-brand-color-1 text-[36px] text-center font-bold'>
                  CONDITIONS D’UTILISATIONS
                </h1>
                <Hero_paragraph
                  paragraph='L’utilisation de ce service est réservée à un usage strictement personnel et privé. Toute reproduction ou représentation partielle ou totale à d’autres fins sur un quelconque support est interdite, sauf autorisation expresse et préalable de Sovita Agency en sa qualité d’auteur. Le non-respect de cette interdiction constitue une contrefaçon pouvant engager la responsabilité civile et pénale du contrefacteur à l’encontre duquel Sovita Agency se réserve la possibilité de réclamer l’indemnisation de son entier préjudice.'
                  classes='text-center !text-base'
                />
              </div>
              <div className='flex flex-col gap-6'>
                <h3 className='text-brand-color-1 text-[20px] text-left font-bold uppercase'>
                  REMARQUES
                </h3>
                <Hero_paragraph
                  paragraph='Ce site internet permet un accès aux données de Sovita Agency dans son ensemble. Les données qui y sont publiées sont fournies à titre d’information et ne sont en aucun cas contractuelles, ainsi ces données peuvent inclure des références à des produits, services ou technologies utilisés par Sovita Agency mais non disponibles dans votre pays. La présence de'
                  classes='!text-base'
                />
              </div>
              <div className='flex flex-col gap-10'>``
                <p className='text-base text-white fade_in_slide_up'>
                  <b>Article 1 :</b> objet – ensemble contractuel – champ
                  d’application
                  <br />
                  Sovita Agency SAS au capital de 1 000 €, dont le siège social
                  est situé 58 rue de Monceau, 75008 Paris , ci après dénommée «
                  le prestataire » est une agence de publicité indépendante
                  spécialisée dans la mise en place de plans de communication et
                  plus particulièrement spécialisé dans la conception, la
                  réalisation et le développement de sites internet ( notamment
                  création et hébergements de sites internet, webdesign, achat
                  et gestion des noms de domaines et des e mails ). Dans le
                  cadre du présent contrat, le client a confié à Sovita Agency
                  la conception d’un site internet. Le présent contrat a pour
                  but de définir les prestations et les conditions
                  d’intervention de Sovita Agency dans la conception du projet
                  de site internet. Sovita Agency fournit à ses clients un
                  service payant comprenant la création d’un site Internet, et
                  des prestations de suivi, en contrepartie du paiement de frais
                  de création, et d’un abonnement.
                  <br />
                  Le contrat liant Sovita Agency à son client dès la signature
                  de celui-ci est un ensemble contractuel indivisible comprenant
                  un contrat de conception de site internet, les présentes
                  conditions générales de prestations de services (ci après «
                  les conditions »), le cahier de conception que le client a
                  expressément reconnu comme faisant partie intégrante d’un
                  ensemble contractuel indivisible. Toute modification du
                  Contrat intervenue entre les Parties ne peut s’effectuer que
                  par voie d’Avenant.7
                </p>
                <p className='text-base text-white fade_in_slide_up'>
                  <b>Article 2 </b>: prise d’effet – enregistrement électronique
                  – durée
                  <br />
                  Le contrat entre en vigueur à sa date de signature par les
                  deux parties.
                  <br />
                  Le prestataire peut proposer au client de signer le contrat
                  par voie électronique, par l’acceptation d’une offre en ligne,
                  respectant la procédure du «double clic». Le client a la
                  possibilité de vérifier la commande et de la modifier, puis de
                  la confirmer.
                  <br />
                  La confirmation de commande donne lieu à l’envoi immédiat par
                  email d’un avis de réception par le prestataire. Le contrat
                  est conclu pour la durée mentionnée dans le contrat de
                  conception de site internet exprimée en mois ou en année. Le
                  contrat de conception de site internet comprenant les
                  modalités d’abonnement est renouvelable par tacite
                  reconduction à chaque échéance à moins que le client ait opté
                  pour une formule sans abonnement
                </p>
                <p className='text-base text-white fade_in_slide_up'>
                  <b>Article 3</b> : obligations respectives des parties
                  <br />
                  3.1. Obligations du client
                  <br />
                  Dans le cadre de la conception de son site internet, le client
                  s’engage à :<br />
                  Respecter l’obligation générale de collaboration et
                  d’exécution de bonne foi du contrat. Fournir les éléments
                  demandés (chartes graphiques, logos, photos, vidéos et tous
                  documents existants et nécessaires à la réalisation du site
                  internet, etc.) dans un délai raisonnable ;<br />
                  Valider la proposition de Sovita Agency dans un délai maximum
                  de sept jours ;En cas de non respect de ces délais, la
                  proposition de Sovita Agency sera considérée comme acceptée de
                  manière tacite et Sovita Agency sera fondée à exiger le
                  règlement du solde de création, et à faire démarrer
                  l’abonnement du site.
                  <br />
                  Si des changements sont demandés après validation de la
                  proposition ou dans le cas d’une acceptation tacite en cas de
                  non respect du délai de sept jours, ils feront l’objet d’un
                  devis séparé.
                  <br />
                  Un refus, par le client, du devis proposé dans ce cas de
                  figure, ne peut en aucun cas remettre en cause le présent
                  contrat, et notamment les développements initialement prévus.
                  <br />
                  Le client est responsable pendant la durée de l’abonnement du
                  paiement de l’ensemble des sommes dues au titre de la
                  fourniture des services du prestataire.
                  <br />
                  Il s’engage également à respecter le mode et le délai de
                  règlement défini dans le contrat de conception de site
                  internet. Le client s’engage à :<br />
                  <br />
                  Fournir des informations exactes, complètes et à jour ;- à
                  être lié par les présentes conditions en son nom propre ou
                  pour celui d’une société dont il a reçu mandat
                  <br />
                  à respecter les informations reconnues et mentionnées par
                  Sovita Agency comme confidentielles sans limite de durée. Le
                  client déclare être titulaire de tous les droits et
                  autorisations permettant la reproduction, la représentation et
                  l’exploitation sous quelque forme que ce soit des éléments
                  transmis à Sovita Agency dans le cadre de la conception du
                  site internet.
                  <br />
                  3.2. Obligations du prestataire :<br />
                  <br />
                  Le prestataire s’engage à mettre tout en œuvre pour assurer la
                  permanence, la continuité et la qualité des services fournis
                  au client et souscrit à ce titre à une obligation de moyens.
                  Cependant, compte tenu de la nature du réseau Internet, le
                  prestataire ne peut garantir l’absence d’interruption ou de
                  dégradation de ses services. Le prestataire s’engage à
                  respecter le caractère strictement confidentiel des éléments
                  qui lui sont confiés par le client tels que sa stratégie et
                  ses objectifs.
                </p>
                <p className='text-base text-white fade_in_slide_up'>
                  <b>Article 4 </b>: tarifs et modalités de paiement – défaut de
                  paiement
                  <br />
                  Les prestations de services de Sovita Agency sont fournies au
                  prix annuel et/ou annuel mensuel mentionnés dans le contrat de
                  conception de site internet. Les prix, montants ou sommes
                  s’entendent en euros hors taxes, TVA en sus (sauf disposition
                  contraire). Les prestations de Sovita Agency comprennent les
                  coûts techniques de mise en service ainsi que l’abonnement
                  choisi selon les modalités définies dans le contrat de
                  conception de site internet. Certaines fonctionnalités en su
                  feront l’objet d’un devis séparé. En cas d’incident de
                  paiement, le prestataire pourra suspendre immédiatement les
                  services d’hébergement du site Internet et des emails du
                  client. Il pourra également résilier le contrat sans préavis.
                  En outre, tout retard de paiement fera l’objet d’une facture
                  d’intérêts de retard correspondant à deux fois le taux
                  d’intérêt légal appliqué aux sommes dues payable à réception
                  de facture. Ces pénalités seront exigibles de plein droit et
                  automatiquement acquises à Sovita Agency sans aucune formalité
                  ni mise en demeure préalable et sans préjudice de toute autre
                  action que Sovita Agency serait en droit d’intenter, à ce
                  titre et à l’encontre du client.
                              </p>

                              <p className='text-base text-white fade_in_slide_up'>
                              <b>Article 5 </b>: délai de rétractation<br/>
                              Conformément à l’article L121-16-1 du code de la consommation, les clients professionnels soumis aux dispositions du dit article et répondant aux conditions de l’article L121-16-1 du code de la consommation dispose d’un délai de quatorze jours à compter de la conclusion du contrat de prestations de service pour se rétracter.
                              </p>
                              <p className='text-base text-white fade_in_slide_up'>
                              <b>Article 6</b> : résiliation<br />
                                  Le client est libre de résilier ce contrat à n’importe quel moment, par courrier recommandé avec avis de réception adressé au siège social de Sovita Agency et en respectant un préavis de 60 jours (soixante jours). Le contrat d’hébergement prendra fin, sans aucune pénalité ou indemnité de quelque sorte que ce soit versée au client ou au prestataire. A la condition expresse que le client soit à jour de ses règlements, et sur simple demande, le prestataire lui livrera certains éléments relatifs à la réalisation du site internet tels que prévus à l’article 6 du présent contrat. La résiliation ne pourra donner lieu au remboursement de toute somme versée au titre du présent contrat.</p>
                              <p className='text-base text-white fade_in_slide_up'><b>Article 7</b> : propriété intellectuelle<br/>
                                  Les droits de propriété intellectuelle (droit de reproduction et de représentation) portant sur l’ensemble des créations réalisées par Sovita Agency en exécution des prestations de services commandées en particulier les créations graphiques réalisées par Sovita Agency dans le cadre de la conception d’un site internet comprenant notamment l’architecture du site, les animations, la charte graphique sont la propriété de Sovita Agency. Les codes sources, les pages HTML, les fichiers graphiques et les bases de données qui permettent la production du site, et le fonctionnement de l’outil de mise à jour, sont la propriété du prestataire et ne pourront en aucun cas être cédées et demeurent la propriété de Sovita Agency. Sur simple demande, et à la condition expresse que le client soit à jour de ses règlements, le prestataire lui fournira une sauvegarde des contenus exploitables sous format Word et une galerie d’image sous format compressé.</p>
                                  <p className='text-base text-white fade_in_slide_up'><b>Article 8</b>: droit de communication et de rectification<br/>
Conformément à la loi informatique et libertés N°78-17 du 6 janvier 1978, le client dispose d’un droit de communication et de rectification des informations nominatives le concernant.
                                  Toute demande est à adresser au siège social du prestataire par lettre simple.</p>
                              <p className='text-base text-white fade_in_slide_up'><b>Article 9</b> : etendue de responsabilité<br/>
Pour l’exécution des prestations de services souscrites par le client, Sovita Agency est débitrice à son égard d’une obligation de moyen.<br/>En cas de manquement par Sovita Agency à ses obligations ou en cas de dysfonctionnement, le client devra informer le prestataire dans les plus brefs délais, soit dans un délai de 5 jours à compter de la mise en ligne du site internet du client ou de la date à laquelle le service ou l’obligation contestée aurait dû être réalisée. Dans tous les cas, en cas de manquement avéré par le prestataire, l’éventuelle indemnisation du client ne pourra, en principal, en intérêts, frais et accessoires être supérieure au double du prix payé par le client pour la réalisation du service souscrit en cause avec un plafond de 1000 euros (mille euros). Dans la limite de la réglementation applicable, le prestataire n’offre aucune garantie expresse ou tacite concernant notamment, mais de manière non exhaustive ni limitative, la capacité de son service de mise à disposition de site internet à satisfaire les besoins propres, du client, ni l’adéquation de son service à la réglementation et aux normes applicables au secteur d’activité du client. En conséquence, le prestataire, ne pourra en aucun cas être tenu responsable d’une perte d’activité, d’un manque à gagner ou d’une perte d’actifs, d’une perte d’usage ou de données, du nombre de personnes qui accèderont au site du client, des profits que le client pourra tirer de l’utilisation du service, ou d’un dommage indirect ou spécial résultant, de quelque façon que ce soit. d’un aspect du service ou des moteurs et annuaires de recherche, notamment de l’utilisation. Néanmoins, il est convenu un engagement du prestataire sur le niveau de disponibilité du site. La disponibilité du site étant définie par l’accès aux pages sans message d’erreur. Sovita Agency sera dégagée de toute responsabilité envers le client en cas de mise en ligne de contenus illégaux, illicites ou portant atteinte à des droits de tiers notamment. Le client a en outre la responsabilité exclusive de recueillir, en temps utile, les éventuelles autorisations nécessaires portant sur le droit d’utiliser l’image de toutes personnes ou de tous éléments ou biens intervenant directement ou indirectement, dans les réalisations du site web ou de toutes autres prestations effectuées par Sovita Agency. Le client garantit Sovita Agency contre toute revendication de tiers sur ces éléments fournis et/ou à ce titre.</p>

                                  <p className='text-base text-white fade_in_slide_up'><b>Article 10</b>: cas de force majeure<br/>
                                  Aucune des deux parties ne sera tenue pour responsable vis-à-vis de l’autre de la non exécution ou des retards dans l’exécution d’une obligation née du présent contrat consécutive à la survenance d’un cas de force majeure habituellement reconnu par la jurisprudence. Le cas de force majeure suspend les obligations nées du présent contrat pendant toute la durée de son existence.</p>
                                  <p className='text-base text-white fade_in_slide_up'><b>Article 11</b>: litige – compétence – droit applicable<br/>
                                  Tout différend relatif à l’application du présent ensemble contractuel tel que défini à l’article 1 des présentes conditions sera soumis au tribunal de commerce de Paris quelque soit le lieu de la commande, de livraison, du paiement notamment sauf disposition impérative ou d’ordre public contraire. En cas d’action judiciaire ou toute autre action en recouvrement de créance par Sovita Agency les frais inhérents à l’action seront à la charge du client fautif. L’ensemble contractuel tel que défini à l’article 1 des présentes conditions est soumis à la loi française.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
