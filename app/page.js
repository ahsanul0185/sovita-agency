// "use server"

import Image from "next/image";
import Main_button from "@/ui/main-button";
import Link from "next/link";
import Number_box from "@/ui/number-box";
import Team_Scroll from "@/component/team-scroll";
import { tabs_data } from "@/data/data";
import Project_Card from "@/ui/project-card";
import Small_title from "@/ui/small-title";
import Medium_title from "@/ui/medium-title";
import Accordion from "@/ui/accordion";
import Hero_paragraph from "@/ui/hero-paragraph";
import { get_page_meta, PAGES } from "@/lib/api";
import ReviewSlider from "@/component/slider";

export const dynamic = 'force-dynamic';

export async function generateMetadata() {
  let data = await get_page_meta(PAGES.home);

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
            <Image src='/blue-blurb.png' height={227} width={227} alt='Blue Blurb Image' className='absolute top-[40%] left-0 blur-[200px]' />
            <div className='w-full px-5 lg:px-0 lg:max-w-[900px] mx-auto text-center py-15 h-[calc(100vh-80px)] flex flex-col items-center justify-center' >
                <h1 className='text-white text-center font-bold text-medium lg:text-large uppercase  leading-[120%]'>
                  Créer un site web c’est bien. \ {/* use '\' (backslash) to break in to new line */}
                  <span className="colored text-brand-color-1" data-color="blue">Le rendre visible, c’est mieux.</span>
                </h1>
                <Hero_paragraph
                  paragraph='Pour une stratégie digitale réussie, vous avez besoin de services performants & complémentaires. Votre professionnalisme est votre force, il doit être communiqué par des experts.'
                  classes='text-center mb-10'
                />
                <div className="flex items-center gap-8 justify-center">
                  <Main_button className="!mb-0 fade_in_slide_up" button_title="Rencontrons-nous" button_url="/request-quote/"  />
                  <Link href="/create-site/" className="text-base font-bold text-white capitalize fade_in_slide_up">
                    Nos services ➜
                  </Link>
                </div>
            </div>
            <Image src='/blue-blurb.png' height={320} width={320} alt='Green Blurb Image' className='absolute top-[50%] right-0 blur-[200px] -z-5' />
       </section>

       <section>
           <div className="container z-10 ">
             <div className="p-5 md:p-15 rounded-[40px] mb-15 lg:mb-30 bg-faqbg-normal z-10 fade_in_slide_up" >
               <p className="text-2xl text-white text-center font-normal fade_in_slide_up">
                 Créée en 2023, Sovita est une agence Web experte en <span className="text-brand-color-1">communication digitale</span>. Elle aide les entreprises françaises à accroître leur <span className="text-brand-color-3">visibilité</span> locale et à augmenter leur chiffre d’affaires grâce à des leads <span className="text-brand-color-2">qualifiés</span> générés via leur site Internet.
               </p>
             </div>
           </div>
       </section>


       <section className="mb-30">
           <div className="container mb-5 lg:mb-10">
             <h2 className="text-small uppercase text-white mb-6 text-center font-bold">
               <span className="colored text-main-yellow" data-color="yellow"> VOUS AVEZ DÉJÀ PERDU TROP DE TEMPS. </span> \
               FAITES PARTIE DE CEUX QUI OBTIENNENT DES RÉSULTATS.
             </h2>
           </div>

           <div className="container mb-15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             <Number_box count_number={3000} text="Sites Web créés pour des TPE et PME" color="green" data-aos="fade-up" data-aos-duration="1000" />
             <Number_box
               count_number={7}
               text="Agences proches de chez vous"
               color="orange"
               data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300"
             />
             <Number_box
               count_number={260}
               text="collaborateurs passionnés"
               color="yellow"
               data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600"
             />
             <Number_box
               count_number={100}
               suffix="%"
               text="De satisfaction client"
               color="purple"
               data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800"
             />
           </div>
       </section>

       <section className="overflow-hidden mb-30">
           <div className="container">
             <div className="w-[200%]">
               <Team_Scroll />
             </div>
           </div>
       </section>


       <section className="mb-30">
           <div className="container grid grid-cols-1 lg:grid-cols-[1.4fr_1.5fr] gap-4 lg:gap-30 mb-15">
               <h2 className="text-[40px] font-bold uppercase text-brand-color-1 fade_in_slide_up">
                 Faire grandir son business,\c&apos;est parfois accepter\un coup de main.
               </h2>
               <p className="text-sm font-normal text-white fade_in_slide_up">
                 La plus belle richesse de notre agence, c’est la qualité de ses femmes et ses hommes. En effet, ce que nous valorisons ce ne sont pas des « compétences » mais de vraies personnalités, des tempéraments avec une forte motivation et l’envie de grandir, dans un esprit d’intégrité.
               </p>
           </div>

           <div className='text-center container mx-auto mb-25 mt-10'>
               <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10'>
                 {tabs_data[0].slice(0, 3).map((card, index) => (
                    <Project_Card key={index} counters={card.counters} title={card.title} tags={card.tags} thumbnail_url={`/portfolio/${card.thumbnail_url}`}/>
                 ) )}
               </div>
               <Main_button button_title='Charger plus de résultats' button_url='/'  className="fade_in_slide_up"/>
           </div>
       </section>


       <section>
         <div className="container">
           <div className="p-5 lg:p-15 rounded-[40px] mb-15 lg:mb-30 bg-faqbg-normal grid grid-cols-1 lg:grid-cols-2 gap-13">
               <div>
                 <div className="sticky top-25 z-10 flex flex-col items-center lg:items-start">
                   <h3 className="mb-6 text-[32px] uppercase text-brand-color-1 font-bold text-center lg:text-left fade_in_slide_up">
                     Des prestations uniques pour \ tisser votre toile sur le
                     Web
                   </h3>
                   <p className="mb-10 text-base text-white font-normal text-center lg:text-left fade_in_slide_up">
                     Pour une stratégie digitale réussie, vous avez besoin de services performants et complémentaires. Sovita déploie son savoir-faire multicanal pour vous assurer une visibilité là où se trouvent vos prochains clients.
                   </p>
                   <Main_button button_title="Rencontrons-nous" button_url="/request-quote/"  className="fade_in_slide_up"/>
                 </div>
               </div>

               <div>
                 <div className="mb-20" data-aos="fade-up">
                   <div className="flex items-center justify-between mb-6" >
                     <Image src="/image-4.png" height={106} width={150} alt="Image" className="object-cover w-[150px]" />
                     <p className="text-[48px] font-bold text-transparent stroke-2-green">
                       01
                     </p>
                   </div>
                   <h4 className="mb-6 uppercase text-2xl text-white font-bold">
                     Création de site
                   </h4>
                   <p className="text-sm text-white font-normal">
                     Votre site est la vitrine devant laquelle de potentiels clients passent. Elle doit être personnalisée et être le reflet de vos compétences et de votre expertise.
                   </p>
                 </div>

                 <div className="mb-20" data-aos="fade-up">
                   <div className="flex items-center justify-between mb-6" >
                     <Image src="/image-5.svg" height={106} width={150} alt="Image" className="object-cover w-[150px]" />
                     <p className="text-[48px] font-bold text-transparent stroke-2-orange">
                       02
                     </p>
                   </div>
                   <h4 className="mb-6 uppercase text-2xl text-white font-bold">
                      Référencement local
                   </h4>
                   <p className="text-sm text-white font-normal">
                      L’algorithme de Google n’a aucun secret pour nos équipes. Grimpez dans le classement et apparaissez sur la première page des principaux moteurs de recherche auprès de prospects situés dans votre zone de chalandise.
                   </p>
                 </div>

                 <div className="mb-20" data-aos="fade-up">
                   <div className="flex items-center justify-between mb-6" >
                     <Image src="/google-business-faq-image.svg" height={106} width={150} alt="Image" className="object-cover  w-[150px]"/>
                     <p className="text-[48px] font-bold text-transparent stroke-2-blue">
                       03
                     </p>
                   </div>
                   <h4 className="mb-6 uppercase text-2xl text-white font-bold">
                     Google Ads
                   </h4>
                   <p className="text-sm text-white font-normal">
                     L’étape supérieure pour une stratégie d’acquisition digitale réussie, se trouve  dans l’achat de liens sponsorisés Google. Notre équipe d’experts, certifiés Google, vous accompagne pour créer une campagne marketing sur-mesure, et vous assurer un ROI.
                   </p>
                 </div>

                 <div className="mb-20" data-aos="fade-up">
                   <div className="flex items-center justify-between mb-6" >
                     <Image src="/seo-image-3.svg" height={106} width={150} alt="Image" className="object-cover w-[150px]"  />
                     <p className="text-[48px] font-bold text-transparent stroke-2-purple">
                       04
                     </p>
                   </div>
                   <h4 className="mb-6 uppercase text-2xl text-white font-bold">
                     Social Ads
                   </h4>
                   <p className="text-sm text-white font-normal">
                     Multipliez les canaux et vos cibles grâce à la publicité sur les différents réseaux sociaux. Notre équipe sélectionne les meilleures audiences, en fonction de votre objectif marketing et de votre cible.
                   </p>
                 </div>

                 <div className="mb-20" data-aos="fade-up">
                   <div className="flex items-center justify-between mb-6" >
                     <Image src="/google-ads-faq-image.svg" height={106} width={150} alt="Image" className="object-cover w-[150px]" />
                     <p className="text-[48px] font-bold text-transparent stroke-2-yellow">
                       05
                     </p>
                   </div>
                   <h4 className="mb-6 uppercase text-2xl text-white font-bold">
                     Google Business Profile
                   </h4>
                   <p className="text-sm text-white font-normal">
                     Devenez un référent local. Travaillez votre image de marque sur le Web. Nous prenons en charge votre e-reputation et améliorons le positionnement de votre fiche dans les résultats de Google Maps.
                   </p>
                 </div>
               </div>
           </div>
         </div>
       </section>

       <section className="mb-30">
          <div className='max-w-[900px] mx-auto text-center py-15 px-5 lg:px-0'>
            <Small_title title='Parler de vous sur le web ?' classes='text-center !text-main-blue colored' data-color="blue" />
            <Small_title title='C’est notre langue maternelle.' classes='text-center mb-10' />
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              <Number_box count_number='2581' prefix="+" text='Avis Google' color='green' data-aos="fade-up" data-aos-duration="1000" />
              <Number_box count_number='15' text='ans d’expérience' color='orange' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" />
              <Number_box count_number='260' text='Note google' color='purple' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600"/>
            </div>

            <div className='flex flex-col gap-10 items-center justify-center mt-10 fade_in_slide_up'>
                <Link href='/' className='px-8 text-center flex items-center gap-3 cursor-pointer leading-[120%] font-bold'>
                  On vous offre un café ?
                  <span className='pl-2'>
                     <svg width="24" height="25" viewBox="0 0 24 25" fill="none">
                        <g clipPath="url(#clip0_299_123)">
                          <path d="M3.05395 23.8236H6.32204C6.36746 24.1083 6.60343 24.3309 6.90144 24.3309H14.3316C14.6308 24.3309 14.8656 24.1094 14.911 23.8236H18.1791C18.7319 23.8236 19.1795 23.376 19.1795 22.8232H2.05469C2.05469 23.376 2.50225 23.8236 3.05395 23.8236Z" fill="white"/>
                          <path d="M23.1148 13.5424C22.2818 12.8677 21.1086 12.8566 20.3364 12.9419C20.3586 12.4036 20.3708 11.853 20.3708 11.2803H0C0 16.7859 0.833088 20.7584 6.10524 22.2406H14.2655C16.3538 21.6546 17.7386 20.6698 18.6569 19.3604C20.6577 19.3216 23.8759 18.534 23.9967 15.7712C24.0487 14.5615 23.5458 13.8902 23.1148 13.5424ZM19.4956 17.7807C19.8789 16.7959 20.106 15.6881 20.2312 14.4707C20.7718 14.382 21.7035 14.3256 22.1743 14.7088C22.2607 14.7797 22.5299 14.9991 22.4989 15.707C22.4357 17.1382 20.6588 17.619 19.4956 17.7807Z" fill="white"/>
                          <path d="M8.29883 10.5072C8.29883 10.5072 12.1762 10.2225 10.3993 6.95345C8.97239 4.32913 9.29809 2.78932 11.1238 1.39795C11.1238 1.39795 5.14373 2.92114 8.63118 7.63474C9.91072 9.68856 8.29883 10.5072 8.29883 10.5072Z" fill="white"/>
                          <path d="M10.9141 10.2458C10.9141 10.2458 14.0204 9.59111 12.3299 7.09307C11.7161 6.00966 12.5625 5.62305 12.5625 5.62305C12.5625 5.62305 10.5629 5.68619 11.407 7.40435C12.0828 8.78575 11.8823 9.57006 10.9141 10.2458Z" fill="white"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_299_123">
                            <rect width="24" height="24" fill="white" transform="translate(0 0.865234)"/>
                          </clipPath>
                        </defs>
                     </svg>
                  </span>
                </Link>
                <Main_button button_title='Rencontrons-nous' button_url='/request-quote/'  className="fade_in_slide_up"/>
            </div>
          </div>
       </section>


       <section className='testimonials overflow-hidden mb-40'>
         <div className='w-full px-5 lg:px-0 lg:w-[800px] mx-auto mb-15'>
           <Medium_title title='' title_colored='Ce qui nous anime chaque jour' color="orange" />
           <Medium_title title='Ils nous font confiance' title_colored='' className="mb-6" />
           <Hero_paragraph paragraph="Découvrez ce que les clients pensent de nous. Promis, ce sont des vrais clients contents, allez voir sur  Google !" />
         </div>
         <ReviewSlider />
         <div className='container mx-auto text-center'>
           <Main_button button_title='Partagez-nous votre expérience' button_url='https://g.co/kgs/8kW3ngg' className="fade_in_slide_up" />
         </div>
       </section>


      <section className="mb-30">
        <div className="container">
          <Medium_title title="la performance" title_colored="Nous délivrons de " />
          <Hero_paragraph paragraph="Nos priorités sont la performance, la qualité du travail et de l'expérience client." classes="text-center" />

          <div className="max-w-[1000px] mx-auto grid grid-cols-2 lg:grid-cols-3 gap-6 mb-10 lg:mb-15 mt-10 lg:mt-15">
            <div className="bg-[#ffffff1a] p-6 rounded-[16px] border border-[#62edaa33] flex flex-col justify-center items-center gap-4" data-aos="fade-up" data-aos-duration="1000" >
              <svg xmlns="http://www.w3.org/2000/svg" width="49" height="48" viewBox="0 0 49 48" fill="none">
                <path d="M31.0899 25.3466L28.2789 38.8826L26.0192 27.8992L28.5423 24.4062H20.7835L23.3066 27.8992L21.0469 38.885L18.2382 25.3466C16.2567 26.0924 14.477 27.2543 13.0075 28.7238C10.3392 31.3921 8.68994 35.0795 8.68994 39.1509C8.68994 41.1176 10.2826 42.7102 12.2469 42.7102H37.0813C38.0635 42.7102 38.9521 42.3115 39.597 41.669C40.2395 41.0241 40.6383 40.1355 40.6383 39.1509C40.6358 32.8346 36.6678 27.4487 31.0899 25.3466Z" fill="#62EDAA"/>
                <path d="M30.3037 18.9285C33.4226 15.8096 33.4226 10.7529 30.3037 7.63395C27.1848 4.51504 22.128 4.51503 19.0091 7.63395C15.8902 10.7529 15.8902 15.8096 19.0091 18.9285C22.128 22.0475 27.1848 22.0475 30.3037 18.9285Z" fill="#62EDAA"/>
              </svg>
              <p className="text-base lg:text-[18px] text-white font-bold text-bold text-center">
                Chef de projet dédié
              </p>
            </div>

            <div className="bg-[#ffffff1a] p-6 rounded-[16px] border border-[#ff9b1233] flex flex-col justify-center items-center gap-4" data-aos="fade-up" data-aos-duration="1000" >
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                <path d="M30.4234 25.3466L27.6124 38.8826L25.3527 27.8992L27.8757 24.4062H20.117L22.6401 27.8992L20.3804 38.885L17.5717 25.3466C15.5902 26.0924 13.8105 27.2543 12.341 28.7238C9.67267 31.3921 8.02344 35.0795 8.02344 39.1509C8.02344 41.1176 9.61605 42.7102 11.5804 42.7102H36.4148C37.397 42.7102 38.2856 42.3115 38.9305 41.669C39.573 41.0241 39.9717 40.1355 39.9717 39.1509C39.9693 32.8346 36.0013 27.4487 30.4234 25.3466Z" fill="#FF9B12"/>
                <path d="M29.6372 18.9285C32.7561 15.8096 32.7561 10.7529 29.6372 7.63395C26.5183 4.51504 21.4615 4.51503 18.3426 7.63395C15.2237 10.7529 15.2237 15.8096 18.3426 18.9285C21.4615 22.0475 26.5183 22.0475 29.6372 18.9285Z" fill="#FF9B12"/>
              </svg>
              <p className="text-base lg:text-[18px] text-white font-bold text-bold text-center">
                Chargé de stratégie digitale
              </p>
            </div>

            <div className="bg-[#ffffff1a] p-6 rounded-[16px] border border-[#ffd60033] flex flex-col justify-center items-center gap-4" data-aos="fade-up" data-aos-duration="1000" >
              <svg xmlns="http://www.w3.org/2000/svg" width="49" height="48" viewBox="0 0 49 48" fill="none">
                <path d="M47.1517 4.75593L46.5933 7.31578C46.5059 7.72031 46.1071 7.97737 45.7026 7.89C45.4236 7.82971 45.2148 7.62131 45.1407 7.365L31.0544 24.7633C30.7631 25.1707 30.1539 25.1852 29.8474 24.779L24.2055 17.3366L14.7768 24.7041C14.4516 24.958 13.982 24.9004 13.728 24.5752C13.474 24.2499 13.5317 23.7803 13.8569 23.5263L23.8841 15.6911C24.2138 15.4337 24.6893 15.4962 24.9417 15.8288L30.4651 23.1149L44.2668 6.06834L44.1488 6.10593C43.7556 6.23053 43.3359 6.01284 43.2113 5.61965C43.0867 5.22646 43.3044 4.80675 43.6977 4.68215L46.1938 3.88584C46.7457 3.7109 47.2711 4.20646 47.1517 4.75593ZM7.10707 21.5079C8.70447 21.5079 9.99954 20.213 9.99954 18.6156C9.99954 17.0182 8.70457 15.7231 7.10707 15.7231C5.50957 15.7231 4.21469 17.0181 4.21469 18.6156C4.21469 20.213 5.50966 21.5079 7.10707 21.5079ZM12.6107 27.3772C12.7027 27.2638 12.7355 27.1284 12.7055 26.9855C12.1614 24.3925 9.86172 22.4454 7.10707 22.4454C4.35241 22.4454 2.05263 24.3925 1.5086 26.9856C1.4786 27.1285 1.51141 27.2638 1.60347 27.3772C1.69554 27.4907 1.82125 27.5506 1.96741 27.5506H12.2467C12.3929 27.5505 12.5186 27.4906 12.6107 27.3772ZM8.34738 14.4011V13.2546C8.34738 13.0375 8.52504 12.8599 8.74207 12.8599H36.8378L38.7647 10.48H8.8135C7.24825 10.48 5.96763 11.7607 5.96763 13.326V14.3728C6.3311 14.2754 6.71304 14.2231 7.10716 14.2231C7.53785 14.2231 7.9541 14.2854 8.34738 14.4011ZM40.6073 15.3481V30.9566H8.34738V29.0505H5.96754V32.9046C5.96754 34.4698 7.24816 35.7505 8.81341 35.7505H18.66V40.272H14.328C12.9932 40.272 11.9011 41.1446 11.9011 42.2111V44.1502H37.0535V42.2111C37.0535 41.1446 35.9614 40.272 34.6265 40.272H30.2946V35.7505H40.1411C41.7063 35.7505 42.9871 34.4699 42.9871 32.9046V13.326C42.9871 13.0552 42.9486 12.7929 42.8772 12.5444L40.6073 15.3481Z" fill="#8D29FF"/>
              </svg>
              <p className="text-base lg:text-[18px] text-white font-bold text-bold text-center">
                Augmentation du trafic
              </p>
            </div>

            <div className="bg-[#ffffff1a] p-6 rounded-[16px] border border-[#8d29ff33] flex flex-col justify-center items-center gap-4" data-aos="fade-up" data-aos-duration="1000" >
              <svg  width="49" height="48" viewBox="0 0 49 48" fill="none">
                <g clipPath="url(#clip0_331_110)">
                  <mask id="mask0_331_110" maskUnits="userSpaceOnUse" x="0" y="0" width="49" height="48">
                    <path d="M0.666504 0H48.6665V48H0.666504V0Z" fill="white"/>
                  </mask>
                  <g mask="url(#mask0_331_110)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M34.0337 19.2C34.1777 20.7096 34.2665 22.3008 34.2665 24C34.2665 24.6365 34.0135 25.247 33.5635 25.697C33.1135 26.147 32.503 26.4 31.8665 26.4C31.23 26.4 30.6195 26.147 30.1695 25.697C29.7195 25.247 29.4665 24.6365 29.4665 24C29.4665 22.2888 29.3729 20.6928 29.2145 19.2H20.0873C19.7538 22.3911 19.7505 25.6082 20.0777 28.8H24.6665C25.303 28.8 25.9135 29.053 26.3635 29.503C26.8135 29.953 27.0665 30.5635 27.0665 31.2C27.0665 31.8365 26.8135 32.447 26.3635 32.897C25.9135 33.347 25.303 33.6 24.6665 33.6H20.8649C21.9905 38.592 23.7497 41.784 24.6689 43.2C24.6689 43.2 26.5625 43.2312 26.8913 43.2048C27.5251 43.1638 28.1496 43.3735 28.6301 43.7887C29.1106 44.2042 29.4084 44.7917 29.4593 45.4248C29.5056 46.0594 29.298 46.6862 28.8821 47.1679C28.4662 47.6494 27.8763 47.9462 27.2417 47.9928C27.0161 48.0096 24.6665 48 24.6665 48C11.4329 48 0.666504 37.2336 0.666504 24C0.666504 10.764 11.4329 0 24.6665 0C37.9001 0 48.6665 10.764 48.6665 24C48.6665 24.9096 48.5801 25.7976 48.4769 26.6784C48.3816 27.2928 48.0519 27.8462 47.557 28.2226C47.0621 28.5986 46.4405 28.7686 45.8232 28.6961C45.2057 28.6236 44.6403 28.3147 44.2459 27.8342C43.8514 27.3538 43.6587 26.7389 43.7081 26.1192C43.7921 25.4208 43.8665 24.72 43.8665 24C43.8665 22.3392 43.6313 20.736 43.2353 19.2H34.0337ZM24.6377 4.8864C23.7113 6.3408 21.9977 9.5208 20.8841 14.4H28.4129C27.2945 9.5208 25.5689 6.3408 24.6377 4.8864ZM6.0977 28.8H15.2633C15.1241 27.2904 15.0353 25.704 15.0353 24.0096C15.0368 22.4037 15.1137 20.7987 15.2657 19.2H6.0977C5.6993 20.736 5.4665 22.3392 5.4665 24C5.47248 25.6202 5.68457 27.2333 6.0977 28.8ZM8.0633 33.6C10.4333 37.6889 14.223 40.7645 18.7121 42.2424C17.4616 39.4783 16.5369 36.5779 15.9569 33.6H8.0633ZM15.9617 14.4C16.6841 10.7976 17.7257 7.9128 18.7217 5.7528C14.2281 7.22957 10.4346 10.3073 8.0633 14.4H15.9617ZM33.3353 14.4H41.2673C38.8863 10.288 35.07 7.20077 30.5513 5.7312C31.8171 8.50121 32.7516 11.4109 33.3353 14.4Z" fill="#007BF4"/>
                    <path d="M37.2022 45.4691L31.0819 32.0044C30.6231 30.995 31.6615 29.9567 32.671 30.4154L46.1355 36.5358C47.0544 36.9534 47.0784 38.2502 46.1755 38.7016L41.995 40.7918C41.7627 40.9079 41.5745 41.0963 41.4583 41.3284L39.3679 45.5092C38.9165 46.4121 37.62 46.3881 37.2022 45.4691Z" fill="#007BF4"/>
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_331_110">
                    <rect width="48" height="48" fill="white" transform="translate(0.666504)"/>
                  </clipPath>
                </defs>
              </svg>
              <p className="text-base lg:text-[18px] text-white font-bold text-bold text-center">
                Site administrable
              </p>
            </div>

            <div className="bg-[#ffffff1a] p-6 rounded-[16px] border border-[#62edaa33] flex flex-col justify-center items-center gap-4" data-aos="fade-up" data-aos-duration="1000" >
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                <g clipPath="url(#clip0_331_118)">
                  <path d="M2.0451 37.8052C-0.526052 39.9054 -0.701188 44.0072 1.68068 46.3191V46.3192C3.99532 48.7025 8.09441 48.5248 10.1945 45.9548L10.7728 45.268L2.73186 37.2271L2.0451 37.8052Z" fill="#62EDAA"/>
                  <path d="M38.0152 23.7332C39.7776 23.4439 40.9719 21.7806 40.6826 20.0182C40.3933 18.2557 38.7301 17.0614 36.9676 17.3507C35.2051 17.64 34.0109 19.3033 34.3002 21.0657C34.5894 22.8282 36.2527 24.0225 38.0152 23.7332Z" fill="#62EDAA"/>
                  <path d="M28.052 0C17.0526 0 8.10403 8.9486 8.10403 19.9478C8.10403 23.7246 9.15915 27.2594 10.9899 30.2733L4.89111 35.4087L12.591 43.1086L17.7264 37.0098C20.7403 38.8405 24.2752 39.8957 28.052 39.8957C39.0512 39.8957 47.9998 30.9471 47.9998 19.9477C47.9997 8.9486 39.0512 0 28.052 0ZM13.4188 22.7594C13.9367 22.2899 14.7371 22.3293 15.2066 22.8473C15.7275 23.4221 16.5491 23.7654 17.4043 23.7654C18.2811 23.7654 18.7701 23.2351 18.8374 22.8586C18.9409 22.2788 18.0294 21.8946 17.7475 21.7907C16.125 21.1743 15.5405 21.0977 14.8767 20.602C13.9248 19.8911 13.3687 18.8155 13.5385 17.6328C13.7189 16.376 14.6356 15.353 15.9308 14.9628C18.4612 14.2006 20.5416 15.9161 20.6288 15.9895C21.1524 16.4526 21.2014 17.2525 20.7382 17.7761C20.2894 18.2835 19.525 18.3437 19.0015 17.9253L19.0005 17.9266C19.0005 17.9266 17.8661 17.0234 16.6609 17.3865C16.1589 17.5389 16.0631 17.8597 16.0436 17.9957C16.0145 18.2068 16.1368 18.41 16.3324 18.4945C16.7549 18.6772 17.6603 19.0603 18.6236 19.4157C20.9755 20.2831 21.5633 21.9928 21.3293 23.3035C21.0196 25.0379 19.3689 26.2969 17.4042 26.2969C15.8231 26.2969 14.3384 25.6591 13.3308 24.5473C12.8614 24.0292 12.9008 23.2288 13.4188 22.7594ZM28.2894 19.2664C28.9885 19.2664 29.5551 19.8331 29.5551 20.5321C29.5551 21.2312 28.9885 21.7978 28.2894 21.7978H26.0754V23.7243H28.5664C29.2654 23.7243 29.8321 24.291 29.8321 24.99C29.8321 25.6891 29.2654 26.2557 28.5664 26.2557H24.8097C24.1107 26.2557 23.544 25.6891 23.544 24.99V16.0743C23.544 15.3753 24.1107 14.8086 24.8097 14.8086H28.5664C29.2654 14.8086 29.8321 15.3753 29.8321 16.0743C29.8321 16.7734 29.2654 17.34 28.5664 17.34H26.0754V19.2664H28.2894ZM37.4855 26.2968C34.3069 26.2968 31.7208 23.7107 31.7208 20.5321C31.7208 17.3535 34.3069 14.7675 37.4855 14.7675C40.6641 14.7675 43.2501 17.3535 43.2501 20.5321C43.2501 23.7107 40.6641 26.2968 37.4855 26.2968Z" fill="#62EDAA"/>
                </g>
                <defs>
                  <clipPath id="clip0_331_118">
                    <rect width="48" height="48" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
              <p className="text-base lg:text-[18px] text-white font-bold text-bold text-center">
                Optimisé pour le SEO
              </p>
            </div>

            <div className="bg-[#ffffff1a] p-6 rounded-[16px] border border-[#ff9b1233] flex flex-col justify-center items-center gap-4" data-aos="fade-up" data-aos-duration="1000" >
              <svg xmlns="http://www.w3.org/2000/svg" width="49" height="48" viewBox="0 0 49 48" fill="none">
                <path d="M24.3333 4C13.2994 4 4.33325 12.9662 4.33325 24C4.33325 34.3249 12.1754 42.8406 22.2317 43.8906C23.9272 44.0677 25.3333 42.6467 25.3333 41V33C25.3333 32.4359 25.7691 32 26.3333 32H39.3333C41.2771 32 43.2268 30.7491 43.7278 28.7617C44.119 27.2098 44.3226 25.6149 44.3333 24.0078V24.0038V24C44.3333 12.9662 35.3671 4 24.3333 4ZM18.3333 12C19.9783 12 21.3333 13.355 21.3333 15C21.3333 16.645 19.9783 18 18.3333 18C16.6882 18 15.3333 16.645 15.3333 15C15.3333 13.355 16.6882 12 18.3333 12ZM30.3333 12C31.9783 12 33.3333 13.355 33.3333 15C33.3333 16.645 31.9783 18 30.3333 18C28.6882 18 27.3333 16.645 27.3333 15C27.3333 13.355 28.6882 12 30.3333 12ZM13.3333 20C14.9783 20 16.3333 21.355 16.3333 23C16.3333 24.645 14.9783 26 13.3333 26C11.6882 26 10.3333 24.645 10.3333 23C10.3333 21.355 11.6882 20 13.3333 20ZM35.3333 20C36.9783 20 38.3333 21.355 38.3333 23C38.3333 24.645 36.9783 26 35.3333 26C33.6882 26 32.3333 24.645 32.3333 23C32.3333 21.355 33.6882 20 35.3333 20Z" fill="#FF9B12"/>
              </svg>
              <p className="text-base lg:text-[18px] text-white font-bold text-bold text-center">
                Thèmes personnalisés
              </p>
            </div>

            <div className="bg-[#ffffff1a] p-6 rounded-[16px] border border-[#ffd60033] flex flex-col justify-center items-center gap-4" data-aos="fade-up" data-aos-duration="1000" >
              <svg xmlns="http://www.w3.org/2000/svg" width="49" height="48" viewBox="0 0 49 48" fill="none">
                <path d="M28.9143 37.1039H28.2654L26.6487 33.6191H17.1639L15.5472 37.1039H11.8743C11.4807 37.1039 11.1543 37.4304 11.1543 37.8239C11.1543 38.2271 11.4807 38.5439 11.8743 38.5439H14.8791H28.9143H28.9335L28.9143 38.5025V37.1039Z" fill="#8D29FF"/>
                <path d="M28.9143 26.832H1.98633V29.3857C1.98633 30.9313 3.23432 32.1792 4.7799 32.1792H28.9143V26.832ZM23.4519 29.8657H20.3607C19.9575 29.8657 19.6407 29.5488 19.6407 29.1457C19.6407 28.752 19.9575 28.4257 20.3607 28.4257H23.4519C23.8455 28.4257 24.1719 28.752 24.1719 29.1457C24.1719 29.5488 23.8455 29.8657 23.4519 29.8657Z" fill="#8D29FF"/>
                <path d="M44.5145 19.3921H33.1865C31.6313 19.3921 30.3545 20.6689 30.3545 22.2337V42.5665C30.3545 44.1217 31.6313 45.3985 33.1865 45.3985H44.5145C46.0697 45.3985 47.3465 44.1217 47.3465 42.5665V22.2337C47.3465 20.6689 46.0697 19.3921 44.5145 19.3921ZM37.8079 21.9314H39.8938C40.2913 21.9314 40.6138 22.2539 40.6138 22.6514C40.6138 23.0489 40.2913 23.3714 39.8938 23.3714H37.8079C37.4104 23.3714 37.0879 23.0489 37.0879 22.6514C37.0879 22.2539 37.4104 21.9314 37.8079 21.9314ZM39.5207 42.8597H38.181C37.7835 42.8597 37.461 42.5372 37.461 42.1397C37.461 41.7422 37.7835 41.4197 38.181 41.4197H39.5207C39.9182 41.4197 40.2407 41.7422 40.2407 42.1397C40.2407 42.5372 39.9182 42.8597 39.5207 42.8597ZM45.0359 39.8831H32.6651V24.9075H45.0359V39.8831Z" fill="#8D29FF"/>
                <path d="M41.8263 17.952V5.3952C41.8263 3.85916 40.5783 2.60156 39.0327 2.60156H4.7799C3.23432 2.60156 1.98633 3.85916 1.98633 5.3952V25.392H28.9143V22.2336C28.9143 19.872 30.8343 17.952 33.1863 17.952H41.8263ZM5.4423 9.82078C5.15432 9.5424 5.15432 9.08156 5.4423 8.80318L7.94789 6.28799C8.23594 6.00955 8.68711 6.00955 8.96549 6.28799C9.25353 6.56637 9.25353 7.02715 8.96549 7.30559L6.4599 9.82078C6.1633 10.1175 5.69186 10.0882 5.4423 9.82078ZM12.6999 8.5152L7.6599 13.5552C7.38715 13.8278 6.95332 13.8454 6.6423 13.5552C6.36393 13.2671 6.36393 12.816 6.6423 12.5376L11.6823 7.4976C11.9607 7.21916 12.4215 7.21916 12.6999 7.4976C12.9783 7.77598 12.9783 8.23676 12.6999 8.5152Z" fill="#8D29FF"/>
              </svg>
              <p className="text-base lg:text-[18px] text-white font-bold text-bold text-center">
                Responsive design
              </p>
            </div>

            <div className="bg-[#ffffff1a] p-6 rounded-[16px] border border-[#8d29ff33] flex flex-col justify-center items-center gap-4" data-aos="fade-up" data-aos-duration="1000" >
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                <g clipPath="url(#clip0_331_139)">
                  <path d="M41.4505 2.0654C41.625 1.82163 41.6486 1.50077 41.5115 1.23414C41.3745 0.96751 41.0999 0.799861 40.8001 0.799805H38.6857C38.4286 0.800089 38.1875 0.924665 38.0385 1.1342L33.8473 7.0262C33.6985 7.23592 33.4573 7.36053 33.2001 7.36053C32.943 7.36053 32.7018 7.23592 32.5529 7.0262L28.3617 1.1342C28.2128 0.924665 27.9717 0.800089 27.7145 0.799805H25.6001C25.3009 0.801056 25.0274 0.969165 24.8912 1.23556C24.755 1.50195 24.7788 1.8221 24.9529 2.0654L25.6945 3.1054L27.3361 5.4126L30.8353 10.3318C31.0346 10.6102 31.0346 10.9846 30.8353 11.263L24.9497 19.5342C24.7753 19.778 24.7517 20.0988 24.8888 20.3655C25.0258 20.6321 25.3004 20.7997 25.6001 20.7998H27.7177C27.9749 20.7995 28.216 20.6749 28.3649 20.4654L32.5561 14.5734C32.7048 14.3634 32.946 14.2385 33.2033 14.2385C33.4606 14.2385 33.7019 14.3634 33.8505 14.5734L38.0417 20.4654C38.1907 20.6749 38.4318 20.7995 38.6889 20.7998H40.8001C41.0993 20.7986 41.3728 20.6304 41.5091 20.3641C41.6453 20.0977 41.6215 19.7775 41.4473 19.5342L35.5681 11.2654C35.3689 10.987 35.3689 10.6126 35.5681 10.3342L41.4505 2.0654Z" fill="#007BF4"/>
                  <path d="M9.5999 0.799805H7.1999C6.75807 0.799805 6.3999 1.15798 6.3999 1.5998V13.5998C6.3999 15.5927 7.22593 17.4965 8.68136 18.858C10.1368 20.2194 12.0914 20.9167 14.0799 20.7838C17.9204 20.4489 20.8518 17.2073 20.7999 13.3526V1.5998C20.7999 1.15798 20.4417 0.799805 19.9999 0.799805H17.5999C17.1581 0.799805 16.7999 1.15798 16.7999 1.5998V13.5998C16.7999 14.5029 16.4183 15.364 15.7493 15.9706C15.0802 16.5773 14.1859 16.8729 13.2871 16.7846C11.6176 16.578 10.3724 15.1458 10.3999 13.4638V1.5998C10.3999 1.15798 10.0417 0.799805 9.5999 0.799805Z" fill="#007BF4"/>
                  <path d="M19.9999 27.1997H17.5999C17.1581 27.1997 16.7999 27.5579 16.7999 27.9997V39.9997C16.7999 40.9028 16.4183 41.7639 15.7493 42.3705C15.0802 42.9772 14.1859 43.2728 13.2871 43.1845C11.6176 42.9779 10.3724 41.5457 10.3999 39.8637V27.9997C10.3999 27.5579 10.0417 27.1997 9.5999 27.1997H7.1999C6.75807 27.1997 6.3999 27.5579 6.3999 27.9997V39.9997C6.3999 41.9926 7.22593 43.8964 8.68136 45.2579C10.1368 46.6193 12.0914 47.3166 14.0799 47.1837C17.9204 46.8488 20.8518 43.6072 20.7999 39.7525V27.9997C20.7999 27.5579 20.4417 27.1997 19.9999 27.1997Z" fill="#007BF4"/>
                  <path d="M40.8001 27.1997H26.4001C25.9583 27.1997 25.6001 27.5579 25.6001 27.9997V30.3997C25.6001 30.8415 25.9583 31.1997 26.4001 31.1997H31.2001C31.6419 31.1997 32.0001 31.5579 32.0001 31.9997V42.3997C32.0001 42.8415 31.6419 43.1997 31.2001 43.1997H26.4001C25.9583 43.1997 25.6001 43.5579 25.6001 43.9997V46.3997C25.6001 46.8415 25.9583 47.1997 26.4001 47.1997H40.8001C41.2419 47.1997 41.6001 46.8415 41.6001 46.3997V43.9997C41.6001 43.5579 41.2419 43.1997 40.8001 43.1997H36.0001C35.5583 43.1997 35.2001 42.8415 35.2001 42.3997V31.9997C35.2001 31.5579 35.5583 31.1997 36.0001 31.1997H40.8001C41.2419 31.1997 41.6001 30.8415 41.6001 30.3997V27.9997C41.6001 27.5579 41.2419 27.1997 40.8001 27.1997Z" fill="#007BF4"/>
                  <path d="M47.2 23.1997H0.8C0.358172 23.1997 0 23.5579 0 23.9997C0 24.4415 0.358172 24.7997 0.8 24.7997H47.2C47.6418 24.7997 48 24.4415 48 23.9997C48 23.5579 47.6418 23.1997 47.2 23.1997Z" fill="#007BF4"/>
                </g>
                <defs>
                  <clipPath id="clip0_331_139">
                    <rect width="48" height="48" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
              <p className="text-base lg:text-[18px] text-white font-bold text-bold text-center">
                Expérience utilisateur
              </p>
            </div>

            <div className="bg-[#ffffff1a] p-6 rounded-[16px] border border-[#8d29ff33] flex flex-col justify-center items-center gap-4" data-aos="fade-up" data-aos-duration="1000" >
               <svg xmlns="http://www.w3.org/2000/svg" width="49" height="48" viewBox="0 0 49 48" fill="none">
                  <g clipPath="url(#clip0_331_150)">
                    <path d="M23.6547 29.9902C23.6547 29.1028 22.9327 28.3809 22.0454 28.3809C19.9133 28.4617 19.9139 31.519 22.0454 31.5996C22.9327 31.5995 23.6547 30.8776 23.6547 29.9902Z" fill="#62EDAA"/>
                    <path d="M47.3194 26.1264L43.0683 20.4583C42.1581 -2.69301 10.7516 -7.80845 2.3801 13.4894H10.8976L13.5032 10.8837C13.7675 10.6196 14.1258 10.4711 14.4995 10.4711H17.8492C19.5028 5.78548 26.3739 6.85067 26.4726 11.8802C26.3734 16.9104 19.5019 17.974 17.8492 13.2891H15.0831L12.4773 15.8947C12.2131 16.159 11.8547 16.3074 11.4811 16.3074H1.53133C1.29556 17.3532 1.13841 18.4283 1.06543 19.5261H26.9043C28.5579 14.8405 35.429 15.9057 35.5278 20.9352C35.4286 25.9655 28.5571 27.029 26.9043 22.3441H1.06571C1.13832 23.435 1.29462 24.5105 1.53124 25.5629H11.4812C11.8548 25.5629 12.2132 25.7113 12.4774 25.9755L15.0832 28.5812H17.8493C19.5029 23.8956 26.374 24.9608 26.4727 29.9903C26.3735 35.0205 19.502 36.0841 17.8493 31.3991H14.4996C14.1259 31.3991 13.7676 31.2506 13.5033 30.9865L10.8977 28.3808H2.37616C3.55369 31.4919 5.4668 34.3072 8.00334 36.5832L5.58675 46.2493C5.48155 46.6702 5.57614 47.1162 5.84309 47.4581C6.11014 47.8001 6.51978 48 6.95365 48H26.5729C27.2195 48 27.7831 47.56 27.9398 46.9328L29.1408 42.1288L38.4471 43.4582C39.1614 43.5603 39.8381 43.1056 40.0132 42.4052L42.8994 30.8603L46.9737 28.144C47.296 27.9292 47.5155 27.5912 47.5809 27.2096C47.6463 26.828 47.5517 26.4362 47.3194 26.1264Z" fill="#62EDAA"/>
                    <path d="M23.6547 11.8798C23.6547 10.9925 22.9327 10.2705 22.0454 10.2705C19.9133 10.3514 19.9139 13.4087 22.0454 13.4893C22.9327 13.4892 23.6547 12.7672 23.6547 11.8798Z" fill="#62EDAA"/>
                    <path d="M32.7099 20.935C32.7099 20.0476 31.9879 19.3257 31.1005 19.3257C28.9685 19.4066 28.969 22.4639 31.1005 22.5445C31.9879 22.5444 32.7099 21.8224 32.7099 20.935Z" fill="#62EDAA"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_331_150">
                      <rect width="48" height="48" fill="white" transform="translate(0.333252)"/>
                    </clipPath>
                  </defs>
                </svg>
                <p className="text-base lg:text-[18px] text-white font-bold text-bold text-center">
                  Mises à jour technologiques
                </p>
            </div>
          </div>
        </div>

        <div className='container mx-auto text-center'>
          <Main_button button_title='Prenons un café' button_url="/request-quote/" className="fade_in_slide_up" />
        </div>
      </section>

      <section className='faq relative overflow-hidden mb-30'>
        <div className=' w-full px-5 lg:px-0 lg:max-w-[900px] mx-auto'>
          <h2 className='font-bold text-center uppercase text-white text-small lg:text-medium mb-3 leading-[120%] fade_in_slide_up' >
            Foire aux questions
          </h2>
          <Hero_paragraph paragraph="Les informations & explications les plus demandées."  classes="text-center"/>

          <div className='mt-15'>
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
      </section>

      <section className='px-5 xl:px-0 py-15'>
        <div className='container white_on_scroll relative bg-main-blue bg-cover bg-center px-20 py-25 rounded-4xl lg:rounded-[56px] overflow-hidden mb-20 '>
          <div className='absolute top-0 bottom-0 left-0 right-0 bg-[url("/grid-line.png")] bg-cover bg-no-repeat size-full'></div>
          <div className='flex flex-col justify-center z-10 relative px-6 py-6  cta-blue'>
            <h2 className='font-bold text-center uppercase text-white text-[40px] mb-3 leading-[120%] '>
              IL EST TEMPS DE PRENDRE EN MAIN <br/> VOTRE PRÉSENCE DIGITALE
            </h2>
            <p className='text-sm text-white text-center mb-10 leading-[170%] ' >
              Nous sommes prêts à vous concocter quelque chose de spécial, répondant à vos besoins et vos envies.
            </p>
            <Main_button button_title='Rencontrons-nous' button_url='/request-quote/' className='w-fit m-auto border border-white transparent py-5 px-8 mb-0 fade_in_slide_up'
            />
          </div>
        </div>
      </section>

    </div>
    </>
  );
}
