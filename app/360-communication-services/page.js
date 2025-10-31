// 'use server'

import Image from "next/image";
import Hero_paragraph from "@/ui/hero-paragraph";
import Main_button from "@/ui/main-button";
import Number_box from "@/ui/number-box";
import Timeline_Scroll from "@/component/timeline-scroll";
import Team_Scroll from "@/component/team-scroll";
import Link from "next/link";
import Medium_title from "@/ui/medium-title";
import { get_page_meta,PAGES } from "@/lib/api";

export const dynamic = 'force-dynamic';

export async function generateMetadata() {
  let data = await get_page_meta(PAGES.communication_service);

  return {
    title: data?.page_title,
    description: data?.page_desc?.map((cur) => cur.children.map((c) => c.text)).join(" "),
    keywords:data?.keywords?.map((k) => k.keyword),
  };
}

export default async function Communication_services() {

  return (
    <>
    <main className="communication-services-page">
      <section className="overflow-hidden">
        <Image src="/green-blurb.png" height={227} width={227} alt="Blue Blurb Image" className="absolute top-[40%] left-0 blur-[200px] w-[200px] h-[200px]" />
        <div className="container h-[calc(100vh-80px)] flex flex-col justify-center items-center" >
          <h5 className="text-white text-bold text-xl text-center pb-2 leading-[140%] fade_in_slide_up" >
            L&apos;agence media des artisans, des
            <span className="text-brand-color-1"> professions libérales et des commerçants.</span>
          </h5>
          <h1 className="text-white uppercase text-center font-bold text-small lg:text-medium leading-[120%]">
            Intermédiaire entre votre activité et \
            <span className="colored" data-color="blue"> votre croissance digitale, c’est nous.</span>
          </h1>
          <Hero_paragraph paragraph="Votre partenaire en Marketing Digital Local" classes="text-center mb-10" />
          <div className="flex items-center gap-8 justify-center">
            <Main_button className="!mb-0 fade_in_slide_up" button_title="Rencontrons-nous" button_url="/request-quote/"  />
            <Link href="/create-site/" className="text-base font-bold text-white capitalize fade_in_slide_up">
              Nos services ➜
            </Link>
          </div>
        </div>
        <Image src="/green-blurb.png" height={320} width={320} alt="Green Blurb Image" className="absolute top-[50%] right-0 blur-[200px] w-[200px] h-[200px]" />
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

      <section>
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-9 mb-30 " id="timeline-scroll-con">
          <div>
            <h2 className="text-[60px] lg:text-[80px] sticky top-25 font-normal uppercase text-brand-color-2 text-center lg:text-left fade_in_slide_up" >
              Notre histoire
            </h2>
          </div>
          <div>
            <Timeline_Scroll />
          </div>
        </div>
      </section>

      <section>

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

      <section>
        <div className="container">
          <div className=" p-5 lg:p-15 rounded-[40px] mb-10 lg:mb-30 bg-faqbg-normal">
            <h2 className="text-small uppercase lg:text-medium text-white mb-6 text-center fade_in_slide_up">
              SOVITA ET VOUS, C’EST UNE BELLE ET LONGUE \
              <span className="colored text-brand-color-1" data-color="blue">
                COLLABORATION QUI NE FAIT QUE COMMENCER…
              </span>
            </h2>
            <p className="text-sm text-white font-normal text-center  fade_in_slide_up" >
            Depuis 2022, SOVITA accompagne TPE, PME, artisans et professions libérales dans leur transition digitale, en faisant du Web un levier central de croissance et en maximisant leur visibilité pour booster leur développement.
            </p>
            <br />
            <p className="text-sm text-white font-normal text-center  fade_in_slide_up" >
            Chaque jour, nos 260 experts, animés par une passion constante pour le digital, conçoivent des stratégies de communication numérique sur-mesure pour votre entreprise. Le référencement local reste au cœur de nos priorités. Nous le développons, le renforçons et l’optimisons continuellement, avec un seul objectif : atteindre votre pleine satisfaction.
            </p>
            <br />
            <p className="text-sm text-white font-normal text-center  fade_in_slide_up" >
            Agence de communication 360, nous proposons une offre globale de services pour devenir un véritable moteur de votre digitalisation : SEO avancé, publicités en ligne percutantes, gestion active des réseaux sociaux, génération de leads qualifiés, et création de sites Web premium. Notre signature ? Une recherche constante de performance, véritable pilier de votre réussite digitale.
            </p>
            <br />
            <p className="text-sm text-white font-normal text-center  fade_in_slide_up" >
            Déjà plus de 3 000 professionnels ont boosté leur présence en ligne avec nos stratégies personnalisées. Leur visibilité web illustre notre savoir-faire. Rejoignez Sovita et amorcez votre transformation numérique. Nos experts du Web vous accompagnent dès aujourd’hui dans cette nouvelle aventure digitale.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <Medium_title title="les valeurs qui nous définissent"/>
          <div className="max-w-[1000px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10 lg:mb-30 mt-10 lg:mt-15">
            <div className="bg-[#ffffff1a] p-6 rounded-[16px] border border-[#62edaa33] flex flex-col justify-center items-center gap-4" data-aos="fade-up" data-aos-duration="1000" >
            <svg xmlns="http://www.w3.org/2000/svg" width="49" height="48" viewBox="0 0 49 48" fill="none">
  <path d="M30.6749 25.3464L27.8638 38.8824L25.6041 27.899L28.1272 24.4061H20.3684L22.8915 27.899L20.6318 38.8849L17.8232 25.3464C15.8417 26.0923 14.062 27.2541 12.5924 28.7237C9.92413 31.392 8.2749 35.0794 8.2749 39.1507C8.2749 41.1175 9.86752 42.7101 11.8318 42.7101H36.6663C37.6484 42.7101 38.5371 42.3114 39.182 41.6689C39.8244 41.024 40.2232 40.1354 40.2232 39.1507C40.2207 32.8344 36.2528 27.4486 30.6749 25.3464Z" fill="#62EDAA"/>
  <path d="M29.8901 18.9285C33.0091 15.8096 33.0091 10.7528 29.8901 7.63389C26.7712 4.51497 21.7145 4.51497 18.5955 7.63389C15.4766 10.7528 15.4766 15.8096 18.5955 18.9285C21.7145 22.0474 26.7712 22.0474 29.8901 18.9285Z" fill="#62EDAA"/>
</svg>
              <p className="text-base lg:text-xl text-white font-bold text-bold">
                Professionalisme
              </p>
            </div>

            <div className="bg-[#ffffff1a] p-6 rounded-[16px] border border-[#ff9b1233] flex flex-col justify-center items-center gap-4" data-aos="fade-up" data-aos-duration="1000" >
            <svg xmlns="http://www.w3.org/2000/svg" width="49" height="48" viewBox="0 0 49 48" fill="none">
  <path fillRule="evenodd" clipRule="evenodd" d="M27.7639 3.832L28.4419 5.468C28.6919 5.596 28.9359 5.736 29.1719 5.89L30.9279 5.66C31.4259 5.594 31.9219 5.782 32.2519 6.162C33.0999 7.134 33.7519 8.26 34.1699 9.482C34.3319 9.956 34.2459 10.48 33.9399 10.878L32.8639 12.284C32.8779 12.564 32.8779 12.848 32.8639 13.128L33.9399 14.532C34.2459 14.932 34.3319 15.456 34.1699 15.93C33.7519 17.152 33.0999 18.278 32.2519 19.25C31.9219 19.628 31.4259 19.816 30.9279 19.752L29.1739 19.522C28.9359 19.676 28.6919 19.816 28.4419 19.944L27.7639 21.578C27.5699 22.042 27.1599 22.378 26.6659 22.476C25.3999 22.724 24.0999 22.724 22.8339 22.476C22.3399 22.378 21.9299 22.042 21.7359 21.578L21.0579 19.944C20.8079 19.816 20.5639 19.676 20.3279 19.522L18.5719 19.752C18.0739 19.816 17.5779 19.628 17.2479 19.25C16.3999 18.278 15.7479 17.152 15.3299 15.93C15.1679 15.456 15.2539 14.932 15.5599 14.532L16.6359 13.128C16.6219 12.846 16.6219 12.564 16.6359 12.284L15.5599 10.878C15.2539 10.48 15.1679 9.956 15.3299 9.482C15.7479 8.26 16.3999 7.134 17.2479 6.162C17.5779 5.782 18.0739 5.594 18.5719 5.66L20.3259 5.89C20.5639 5.736 20.8079 5.596 21.0579 5.468L21.7359 3.832C21.9299 3.37 22.3399 3.032 22.8339 2.936C24.0999 2.688 25.3999 2.688 26.6659 2.936C27.1599 3.032 27.5699 3.37 27.7639 3.832ZM24.7499 10.206C23.3699 10.206 22.2499 11.326 22.2499 12.706C22.2499 14.086 23.3699 15.206 24.7499 15.206C26.1299 15.206 27.2499 14.086 27.2499 12.706C27.2499 11.326 26.1299 10.206 24.7499 10.206Z" fill="#FF9B12"/>
  <path fillRule="evenodd" clipRule="evenodd" d="M36.656 45.25H25.944V33.416C25.944 31.028 26.966 28.754 28.75 27.166L33.758 22.716C34.788 21.8 36.328 21.76 37.404 22.622L37.408 22.624C38.03 23.124 38.428 23.852 38.508 24.646C38.588 25.442 38.344 26.234 37.834 26.848L34.582 30.75C34.16 31.256 34.228 32.01 34.736 32.432C35.242 32.854 35.996 32.784 36.418 32.278L39.668 28.378C40.59 27.27 41.028 25.84 40.884 24.406C40.798 23.56 40.514 22.754 40.064 22.052L42.194 10.338C42.352 9.45801 43.118 8.82001 44.012 8.82001H44.018C44.61 8.82001 45.178 9.05401 45.596 9.47201C46.014 9.89201 46.25 10.458 46.25 11.05V25.896C46.25 27.8 45.744 29.668 44.786 31.312L36.656 45.25ZM23.556 45.25H12.844L4.714 31.312C3.756 29.668 3.25 27.8 3.25 25.896V11.05C3.25 10.458 3.486 9.89201 3.904 9.47201C4.322 9.05401 4.89 8.82001 5.482 8.82001H5.488C6.382 8.82001 7.148 9.45801 7.306 10.338L9.436 22.052C8.986 22.754 8.702 23.56 8.616 24.406C8.472 25.84 8.91 27.27 9.832 28.378L13.082 32.278C13.504 32.784 14.258 32.854 14.764 32.432C15.272 32.01 15.34 31.256 14.918 30.75L11.666 26.848C11.156 26.234 10.912 25.442 10.992 24.646C11.072 23.852 11.47 23.124 12.092 22.624L12.096 22.622C13.172 21.76 14.712 21.8 15.742 22.716L20.75 27.166C22.534 28.754 23.556 31.028 23.556 33.416V45.25Z" fill="#FF9B12"/>
</svg>
              <p className="text-base lg:text-xl text-white font-bold text-bold">
                Réactivité
              </p>
            </div>

            <div className="bg-[#ffffff1a] p-6 rounded-[16px] border border-[#ffd60033] flex flex-col justify-center items-center gap-4" data-aos="fade-up" data-aos-duration="1000" >
            <svg xmlns="http://www.w3.org/2000/svg" width="49" height="48" viewBox="0 0 49 48" fill="none">
  <g clipPath="url(#clip0_75_87)">
    <path d="M22.8436 3.29572C17.4228 3.60687 12.3393 5.71334 8.28174 9.32956L14.557 15.6048C16.9186 13.6388 19.786 12.4507 22.8436 12.1713V3.29572Z" fill="#FFD600"/>
    <path d="M12.5677 17.5928L6.29251 11.3177C2.6732 15.3742 0.564102 20.458 0.250977 25.8802H9.12695C9.4082 22.8219 10.5988 19.9542 12.5677 17.5928Z" fill="#FFD600"/>
    <path d="M39.3731 25.8802H48.2491C47.9359 20.458 45.8269 15.3742 42.2075 11.3177L35.9324 17.5928C37.9012 19.9541 39.0918 22.8219 39.3731 25.8802Z" fill="#FFD600"/>
    <path d="M39.3711 28.6927C39.1739 30.8586 38.5558 32.6652 37.8247 34.1143C38.5379 35.214 39.1325 36.1435 39.5253 36.7607C40.595 38.4418 40.3582 40.5998 38.9493 42.0087C38.6072 42.3508 38.2164 42.6265 37.793 42.8302L39.2544 44.2918C39.5295 44.5668 39.8901 44.7043 40.2505 44.7043C40.6111 44.7043 40.9716 44.5668 41.2465 44.2918C45.4582 40.0806 47.9139 34.5854 48.25 28.6927H39.3711Z" fill="#FFD600"/>
    <path d="M9.12906 28.6927H0.25C0.586094 34.5854 3.04188 40.0806 7.25341 44.2918C7.52847 44.5669 7.88894 44.7044 8.24941 44.7044C8.60988 44.7044 8.97044 44.5668 9.2455 44.2918L13.5123 40.0248C14.0623 39.4747 14.0623 38.5828 13.5123 38.0326C12.3988 36.9192 9.59406 33.8018 9.12906 28.6927Z" fill="#FFD600"/>
    <path d="M40.2182 9.32956C36.1606 5.71325 31.0771 3.60687 25.6562 3.29572V12.1713C28.7138 12.4507 31.5813 13.6388 33.9429 15.6048L40.2182 9.32956Z" fill="#FFD600"/>
    <path d="M27.3746 24.1854C25.6518 22.4625 22.8485 22.4625 21.1256 24.1854C19.4028 25.9082 19.4028 28.7115 21.1256 30.4344C23.3021 32.6109 33.9985 39.4406 35.2111 40.2121C35.7671 40.566 36.4943 40.4862 36.9605 40.0201C37.4265 39.5541 37.5064 38.8269 37.1525 38.2708C36.3808 37.0583 29.5511 26.3618 27.3746 24.1854Z" fill="#FFD600"/>
  </g>
  <defs>
    <clipPath id="clip0_75_87">
      <rect width="48" height="48" fill="white" transform="translate(0.25)"/>
    </clipPath>
  </defs>
</svg>
              <p className="text-base lg:text-xl text-white font-bold text-bold">
                Performance
              </p>
            </div>

            <div className="bg-[#ffffff1a] p-6 rounded-[16px] border border-[#8d29ff33] flex flex-col justify-center items-center gap-4" data-aos="fade-up" data-aos-duration="1000" >
            <svg xmlns="http://www.w3.org/2000/svg" width="49" height="48" viewBox="0 0 49 48" fill="none">
  <g clipPath="url(#clip0_75_98)">
    <path d="M4.96875 16.9673H2.15625C1.37897 16.9673 0.75 17.5963 0.75 18.3736C0.75 19.1509 1.37897 19.7798 2.15625 19.7798H4.96875C5.74603 19.7798 6.375 19.1509 6.375 18.3736C6.375 17.5963 5.74603 16.9673 4.96875 16.9673Z" fill="#8D29FF"/>
    <path d="M5.64488 9.9361L3.65635 7.94767C3.10707 7.39839 2.2171 7.39839 1.66782 7.94767C1.11854 8.49695 1.11854 9.38692 1.66782 9.9362L3.65635 11.9246C4.20573 12.474 5.09551 12.474 5.64488 11.9246C6.19416 11.3754 6.19416 10.4854 5.64488 9.9361Z" fill="#8D29FF"/>
    <path d="M5.64488 24.8226C5.0956 24.2734 4.20563 24.2733 3.65635 24.8226L1.66782 26.8112C1.11854 27.3605 1.11854 28.2504 1.66782 28.7997C2.2172 29.3491 3.10698 29.3491 3.65635 28.7997L5.64488 26.8112C6.19416 26.2619 6.19416 25.3719 5.64488 24.8226Z" fill="#8D29FF"/>
    <path d="M47.3438 16.9673H44.5312C43.754 16.9673 43.125 17.5963 43.125 18.3736C43.125 19.1509 43.754 19.7798 44.5312 19.7798H47.3438C48.121 19.7798 48.75 19.1509 48.75 18.3736C48.75 17.5963 48.121 16.9673 47.3438 16.9673Z" fill="#8D29FF"/>
    <path d="M47.8324 7.94754C47.2831 7.39826 46.3931 7.39826 45.8439 7.94754L43.8553 9.93608C43.306 10.4854 43.306 11.3753 43.8553 11.9246C44.4047 12.474 45.2945 12.474 45.8439 11.9246L47.8324 9.93608C48.3817 9.38679 48.3817 8.49683 47.8324 7.94754Z" fill="#8D29FF"/>
    <path d="M47.8324 26.8111L45.8439 24.8227C45.2946 24.2734 44.4046 24.2734 43.8553 24.8227C43.306 25.3719 43.306 26.2619 43.8553 26.8112L45.8439 28.7996C46.3932 29.349 47.283 29.349 47.8324 28.7996C48.3817 28.2504 48.3817 27.3604 47.8324 26.8111Z" fill="#8D29FF"/>
    <path d="M35.3861 3.77239C31.42 0.547957 26.2167 -0.69348 21.1259 0.377614C14.7786 1.70286 9.60948 6.94921 8.2637 13.2938C7.11976 18.6922 8.53145 24.1113 12.135 28.1625C13.5919 29.8019 14.4806 31.7806 14.7721 33.8424H19.125V21.1862C19.125 20.6416 23.2485 12.6067 23.4921 12.1197C23.97 11.1666 25.53 11.1666 26.008 12.1197C26.263 12.6299 30.375 20.6689 30.375 21.1862V33.8424H34.7328C35.0342 31.7904 35.949 29.7802 37.4474 28.0705C40.1419 24.9984 41.625 21.0543 41.625 16.9673C41.625 11.8628 39.3508 6.99411 35.3861 3.77239Z" fill="#8D29FF"/>
    <path d="M24.75 23.875C23.7992 23.875 22.8521 23.7094 21.9375 23.4069V33.8424H27.5625V23.4069C26.6479 23.7094 25.7008 23.875 24.75 23.875Z" fill="#8D29FF"/>
    <path d="M14.9062 36.6549V38.0612C14.9062 40.3875 16.7987 42.2799 19.125 42.2799H30.375C32.7013 42.2799 34.5938 40.3875 34.5938 38.0612V36.6549H14.9062Z" fill="#8D29FF"/>
    <path d="M24.75 15.8934L22.426 20.5414C23.9279 21.1567 25.5721 21.1567 27.074 20.5414L24.75 15.8934Z" fill="#8D29FF"/>
    <path d="M17.9778 45.0924C18.5603 46.7257 20.1066 47.9987 21.9375 47.9987H27.5625C29.3934 47.9987 30.9398 46.7257 31.5222 45.0924H17.9778Z" fill="#8D29FF"/>
  </g>
  <defs>
    <clipPath id="clip0_75_98">
      <rect width="48" height="48" fill="white" transform="translate(0.75)"/>
    </clipPath>
  </defs>
</svg>
              <p className="text-base lg:text-xl text-white font-bold text-bold">
                Créativité
              </p>
            </div>

            <div className="bg-[#ffffff1a] p-6 rounded-[16px] border border-[#62edaa33] flex flex-col justify-center items-center gap-4" data-aos="fade-up" data-aos-duration="1000" >
            <svg xmlns="http://www.w3.org/2000/svg" width="49" height="48" viewBox="0 0 49 48" fill="none">
  <path d="M10.9506 19.0377H27.682C28.8832 19.0377 29.63 17.7462 29.0294 16.7045L20.6637 2.21314C20.0632 1.17411 18.5696 1.17411 17.9691 2.21314L9.60328 16.7044C9.00272 17.7461 9.74944 19.0376 10.9507 19.0376L10.9506 19.0377ZM18.6599 5.60942C18.6599 5.24802 18.9548 4.95308 19.3163 4.95308C19.6778 4.95308 19.9727 5.24802 19.9727 5.60942V13.1726C19.9727 13.5367 19.6777 13.829 19.3163 13.829C18.9549 13.829 18.6599 13.5367 18.6599 13.1726V5.60942ZM18.6599 15.9789C18.6599 15.6175 18.9548 15.3226 19.3163 15.3226C20.1933 15.3226 20.1933 16.7417 19.3163 16.7417C18.9549 16.7417 18.6599 16.4494 18.6599 16.0853V15.9789ZM29.9569 22.6413C32.4124 20.1831 36.396 20.1831 38.8541 22.6413C41.3123 25.0994 41.3096 29.0803 38.8541 31.5385C36.396 33.994 32.4124 33.994 29.9569 31.5385C27.5014 29.083 27.4987 25.0968 29.9569 22.6413ZM46.8053 46.4363H22.0057C22.0057 39.6172 27.5838 34.0365 34.4056 34.0365C41.2274 34.0365 46.8053 39.6172 46.8053 46.4363ZM19.7974 25.8993V22.3967H2.06128V36.2688H19.7973V32.4394L25.4577 31.3843L19.7974 25.8993ZM16.4516 31.8653H5.40712C5.04572 31.8653 4.75078 31.573 4.75078 31.2089C4.75078 30.8475 5.04572 30.5526 5.40712 30.5526H16.4516C16.813 30.5526 17.1053 30.8475 17.1053 31.2089C17.1053 31.573 16.813 31.8653 16.4516 31.8653ZM16.4516 28.1103H5.40712C5.04572 28.1103 4.75078 27.818 4.75078 27.4539C4.75078 27.0925 5.04572 26.7975 5.40712 26.7975H16.4516C16.813 26.7975 17.1053 27.0924 17.1053 27.4539C17.1053 27.8181 16.813 28.1103 16.4516 28.1103ZM23.3903 34.4483L26.5953 32.5987C26.9089 32.4154 27.3101 32.5217 27.4909 32.8353C27.6715 33.1489 27.5653 33.5501 27.2517 33.7309L24.0468 35.5805C23.7332 35.7612 23.3346 35.6549 23.1539 35.3413C22.9705 35.0303 23.0768 34.6291 23.3904 34.4484L23.3903 34.4483ZM25.8352 26.6779C25.6546 26.9887 25.2532 27.095 24.9397 26.9144L22.0722 25.2588C21.7612 25.0781 21.6523 24.6768 21.8357 24.3659C22.0163 24.0523 22.4177 23.946 22.7286 24.1267L25.596 25.7824C25.9096 25.9631 26.0159 26.3644 25.8352 26.678L25.8352 26.6779Z" fill="#62EDAA"/>
</svg>
              <p className="text-base lg:text-xl text-white font-bold text-bold">
                Écoute
              </p>
            </div>

            <div className="bg-[#ffffff1a] p-6 rounded-[16px] border border-[#ff9b1233] flex flex-col justify-center items-center gap-4" data-aos="fade-up" data-aos-duration="1000" >
            <svg xmlns="http://www.w3.org/2000/svg" width="49" height="48" viewBox="0 0 49 48" fill="none">
  <path d="M36.7125 17.766C37.689 19.6335 38.25 21.7515 38.25 24C38.25 31.4445 32.1945 37.5 24.75 37.5C17.3055 37.5 11.25 31.4445 11.25 24C11.25 16.557 17.3055 10.5 24.75 10.5C26.9985 10.5 29.1165 11.061 30.984 12.0375L36.456 6.5655C33.111 4.3155 29.085 3 24.75 3C13.152 3 3.75 12.402 3.75 24C3.75 35.598 13.152 45 24.75 45C36.348 45 45.75 35.598 45.75 24C45.75 19.665 44.4345 15.639 42.1845 12.2925L36.7125 17.766Z" fill="#FF9B12"/>
  <path d="M42.675 6.07499C42.147 5.54699 41.292 5.54699 40.7655 6.07499L27.9165 18.924C26.994 18.348 25.9155 18 24.75 18C21.441 18 18.75 20.691 18.75 24C18.75 27.309 21.441 30 24.75 30C28.059 30 30.75 27.309 30.75 24C30.75 22.8345 30.402 21.756 29.826 20.835L42.6765 7.98449C43.203 7.45799 43.203 6.60149 42.675 6.07499Z" fill="#FF9B12"/>
</svg>
              <p className="text-base lg:text-xl text-white font-bold text-bold">
                Proximité
              </p>
            </div>

            <div className="bg-[#ffffff1a] p-6 rounded-[16px] border border-[#ffd60033] flex flex-col justify-center items-center gap-4" data-aos="fade-up" data-aos-duration="1000" >
            <svg xmlns="http://www.w3.org/2000/svg" width="49" height="48" viewBox="0 0 49 48" fill="none">
  <g clipPath="url(#clip0_75_145)">
    <path d="M33.9111 20.494C33.6611 20.0532 33.1943 19.7812 32.6876 19.7812H25.6563V12.75C25.6563 12.1183 25.2347 11.5635 24.625 11.3946C24.0193 11.2229 23.3697 11.4838 23.0443 12.0262L14.6068 26.0887C14.3459 26.5241 14.3391 27.0652 14.589 27.506C14.839 27.9468 15.3058 28.2187 15.8126 28.2187H22.8438V35.25C22.8438 36.6782 24.7277 37.1898 25.4558 35.9737L33.8933 21.9112C34.1542 21.4759 34.161 20.9348 33.9111 20.494Z" fill="#FFD600"/>
    <path d="M24.25 0C18.6532 0 13.4781 2.03438 9.39995 5.26884L7.09389 3.60938C6.6062 3.28444 6.0152 3.27806 5.57505 3.55303C5.09692 3.80625 4.8437 4.34063 4.87192 4.875L4.53442 14.5781C4.59227 15.5027 5.5713 16.1505 6.41871 15.7875C10.2384 14.5758 16.6216 12.448 16.2906 12.553C16.7968 12.3562 17.1625 11.9062 17.2188 11.4C17.2751 10.8656 17.0219 10.3594 16.6001 10.0499L14.4344 8.61572C17.3522 6.73791 20.8749 5.71875 24.25 5.71875C26.1169 5.71875 27.9332 6.01106 29.653 6.55031C29.4233 5.62491 29.5671 4.46531 30.1717 3.48441C30.732 2.57578 31.6087 1.93191 32.6074 1.64381C29.9923 0.657281 27.1809 0 24.25 0Z" fill="#FFD600"/>
    <path d="M16.0375 41.8314C14.8258 38.0117 12.698 31.6284 12.803 31.9595C12.6062 31.4532 12.1562 31.0876 11.65 31.0313C11.1156 30.9749 10.6094 31.2281 10.2999 31.6499L8.86572 33.8156C6.98791 30.8979 5.96875 27.3752 5.96875 24C5.96875 22.1361 6.25984 20.3225 6.79741 18.6052C6.53837 18.6605 6.24212 18.7018 5.92075 18.7018C4.01894 18.7018 2.39856 17.4166 1.891 15.6505C0.90625 18.2634 0.25 21.0722 0.25 24C0.25 29.5969 2.28438 34.772 5.51884 38.8501L3.85938 41.1562C3.53444 41.6439 3.52806 42.2349 3.80303 42.675C4.05625 43.153 4.59063 43.4063 5.125 43.3781L14.8281 43.7156C15.7527 43.6578 16.4005 42.6788 16.0375 41.8314Z" fill="#FFD600"/>
    <path d="M43.9657 33.4219C43.9078 32.4973 42.9288 31.8495 42.0814 32.2125C38.2617 33.4242 31.8785 35.552 32.2095 35.447C31.7033 35.6438 31.3376 36.0937 31.2813 36.6C31.2249 37.1344 31.4782 37.6406 31.8999 37.9501L34.0657 39.3843C31.1479 41.2621 27.6252 42.2812 24.25 42.2812C22.383 42.2812 20.5667 41.9887 18.8468 41.4496C19.0763 42.3758 18.9318 43.536 18.3271 44.517C17.7678 45.4248 16.8913 46.0686 15.8931 46.3564C18.5079 47.3427 21.3194 48 24.25 48C29.8469 48 35.022 45.9656 39.1001 42.7311L41.4062 44.3906C41.8939 44.7155 42.4849 44.7219 42.925 44.447C43.4031 44.1937 43.6563 43.6594 43.6282 43.125L43.9657 33.4219Z" fill="#FFD600"/>
    <path d="M42.9813 9.14989L44.6407 6.84383C44.9657 6.35614 44.972 5.76514 44.6971 5.32499C44.4439 4.84686 43.9095 4.59364 43.3751 4.62186L33.672 4.28436C32.7474 4.34221 32.0996 5.32124 32.4626 6.16864C33.6743 9.9883 35.8021 16.3716 35.6971 16.0405C35.894 16.5468 36.3439 16.9124 36.8501 16.9687C37.3845 17.0251 37.8907 16.7719 38.2002 16.3501L39.6344 14.1844C41.5122 17.1021 42.5314 20.6248 42.5314 24C42.5314 25.8639 42.2403 27.6775 41.7027 29.3948C41.9617 29.3395 42.258 29.2982 42.5794 29.2982C44.4812 29.2982 46.1953 30.5834 46.7029 32.3495C47.6876 29.7365 48.2501 26.9278 48.2501 24C48.2501 18.4031 46.2157 13.228 42.9813 9.14989Z" fill="#FFD600"/>
  </g>
  <defs>
    <clipPath id="clip0_75_145">
      <rect width="48" height="48" fill="white" transform="translate(0.25)"/>
    </clipPath>
  </defs>
</svg>
              <p className="text-base lg:text-xl text-white font-bold text-bold">
                Efficacité
              </p>
            </div>

            <div className="bg-[#ffffff1a] p-6 rounded-[16px] border border-[#8d29ff33] flex flex-col justify-center items-center gap-4" data-aos="fade-up" data-aos-duration="1000" >
            <svg xmlns="http://www.w3.org/2000/svg" width="49" height="48" viewBox="0 0 49 48" fill="none">
  <path d="M41.1917 11.8563C40.097 11.8563 39.2105 12.7414 39.2105 13.8376V18.9188C39.2105 19.6955 38.5808 20.3251 37.8042 20.3251C37.0276 20.3251 36.398 19.6955 36.398 18.9188V5.36878C36.398 4.27641 35.5092 3.38756 34.4166 3.38756C33.3221 3.38756 32.4353 4.27256 32.4353 5.36878V17.2251C32.4353 18.0017 31.8057 18.6313 31.0291 18.6313C30.2525 18.6313 29.6228 18.0017 29.6228 17.2251V1.98131C29.6229 0.88875 28.7341 0 27.6417 0C26.5492 0 25.6604 0.88875 25.6604 1.98131V17.2251C25.6604 18.0017 25.0308 18.6313 24.2541 18.6313C23.4775 18.6313 22.8479 18.0017 22.8479 17.2251V7.06256C22.8479 5.97009 21.9591 5.08125 20.8667 5.08125C19.7742 5.08125 18.8854 5.97 18.8854 7.06256V24.1658C21.0317 22.9299 23.8263 23.2274 25.6593 25.0602C26.3754 25.776 27.0913 26.4919 27.6417 27.0424C28.192 26.4919 28.9081 25.7758 29.6243 25.0599C31.8135 22.8709 35.376 22.8706 37.5654 25.0602C39.7549 27.2497 39.7549 30.8122 37.5654 33.0017C34.0392 36.5288 28.636 41.9319 28.636 41.9319C28.3723 42.1957 28.0146 42.3439 27.6417 42.3439C27.2688 42.3439 26.911 42.1957 26.6474 41.9319L13.0965 28.381C11.307 26.5915 8.41031 26.5891 6.61809 28.381C6.2834 28.7152 6.18102 29.3441 6.61631 29.7788L18.4736 41.6368C18.7373 41.9005 18.8855 42.2583 18.8855 42.6311V46.5938C18.8855 47.3704 19.5151 48 20.2917 48H38.3793C39.1559 48 39.7855 47.3704 39.7855 46.5938V44.3251C39.7855 44.1067 39.8363 43.8906 39.934 43.6953C42.0531 39.4573 43.1731 34.7128 43.1731 29.9747V13.8375C43.173 12.745 42.2842 11.8563 41.1917 11.8563Z" fill="#8D29FF"/>
  <path d="M35.5768 31.0131C36.6697 29.9201 36.6697 28.1418 35.5769 27.0489C34.4839 25.9563 32.7057 25.9563 31.6129 27.0489C30.1242 28.5368 28.6366 30.0254 28.6365 30.0255C28.3728 30.2893 28.015 30.4376 27.6419 30.4376C27.2688 30.4376 26.911 30.2894 26.6473 30.0255C26.6472 30.0254 25.1595 28.5369 23.6711 27.0492C22.5788 25.9569 20.8006 25.9553 19.7068 27.0489C18.614 28.1418 18.614 29.9201 19.7068 31.013C22.303 33.6097 25.9162 37.2231 27.642 38.9488C29.3674 37.2231 32.9806 33.6098 35.5768 31.0131Z" fill="#8D29FF"/>
</svg>
              <p className="text-base lg:text-xl text-white font-bold text-bold">
                Bienveillance
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container ">
          <div className="p-5 lg:p-15 rounded-[40px] mb-15 lg:mb-30 bg-faqbg-normal fade_in_slide_up">
            <p className="text-2xl text-white text-center font-normal fade_in_slide_up">
              Structurés en plusieurs pôles{" "}
              <span className="text-brand-color-3">d’expertise </span> avec une
              équipe professionnelle certifiée <br />
              Google Digital Active, Nous comptabilisons + de 260 collaborateurs
              avec des savoir-faire <br />
              diversifiés et synergiques pour vous
              <span className="text-brand-color-2">
                garantir 100% de satisfaction
              </span>
              à chaque étape de la <br /> collaboration.
            </p>
          </div>
        </div>
      </section>

      <section className="overflow-hidden mb-15">
        <div className="container grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-6 lg:gap-30 mb-15">
          <h2 className="text-[40px] font-bold uppercase text-brand-color-2 fade_in_slide_up">
            LE CAPITAL HUMAIN DE \SOVITA
          </h2>
          <p className="text-sm font-normal text-white fade_in_slide_up">
            La plus belle richesse de notre agence, c’est la qualité de ses femmes et ses hommes. En effet, ce que nous valorisons ce ne sont pas des « compétences » mais de vraies personnalités, des tempéraments avec une forte motivation et l’envie de grandir, dans un esprit d’intégrité.
          </p>
        </div>

        <div className="container">
          <div className="w-[200%]">
            <Team_Scroll />
          </div>
        </div>
      </section>

      <section className="pt-15">
        <div className="container">
          <h3 className="text-[28px] uppercase text-white font-bold text-center mb-15 fade_in_slide_up">
            Nous comptabilisons plusieurs agences commerciales en FRANCE\
            <span data-color="blue" className="colored text-brand-color-1 block">
              afin de garder une relation de proximité avec nos CLIENTS.
            </span>
          </h3>

          <div className="flex flex-wrap gap-4 lg:gap-6 mb-15 lg:mb-30 justify-center comunication-cards">
            <div className="bg-[#ffffff1a] p-6 rounded-[16px] border border-[#62edaa33] flex flex-col justify-center items-center w-[20%]" data-aos="fade-up">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
  <path d="M36.9446 8C36.9672 8 37.0123 8.02256 37.0123 8.06769C37.0123 8.06769 37.0123 8.09026 37.0123 8.11283L30.3556 14.7695C30.1525 14.9726 29.8591 15.0403 29.6109 14.9501C27.1513 14.1603 24.8046 14.4536 22.5706 15.8527C19.4115 17.8158 17.2452 21.4714 19.2535 24.9013C19.3664 25.0818 19.5694 25.1269 19.75 25.0367C19.7725 25.0367 19.7951 24.9915 19.8177 24.969C24.1953 20.5011 26.6549 17.9964 27.219 17.4322C27.8283 16.823 28.415 16.3491 29.0242 15.9881C29.3176 15.8075 29.7012 15.8527 29.9494 16.0783C33.447 19.2149 36.3128 22.3514 35.8615 27.406C35.523 31.2647 33.7629 34.4915 30.6038 37.0865C27.6252 39.5235 24.6466 40.0425 20.5623 39.9974C18.2155 39.9748 15.3949 39.9748 12.1004 39.9974C12.0327 39.9974 11.9875 39.9522 11.9875 39.8845C11.9875 39.862 11.9875 39.8169 12.0327 39.7943L18.193 33.9273C18.4637 33.6791 18.8248 33.5663 19.1633 33.634C19.7951 33.7243 20.9008 34.0176 21.8485 33.9725C24.7594 33.792 27.0611 32.5509 28.7986 30.2267C30.1525 28.3989 30.4007 26.0521 29.3176 23.9536C29.1822 23.7053 28.8888 23.6151 28.6181 23.7279C28.5729 23.7505 28.5278 23.773 28.4827 23.8182C26.5872 25.7136 24.3984 27.925 21.8936 30.4523C20.9459 31.4001 20.269 32.0319 19.8177 32.3252C19.231 32.7088 18.712 32.5057 18.1704 32.0544C16.9519 31.0616 15.8011 29.7979 14.7179 28.2409C11.9199 24.2018 12.1906 19.0569 14.7405 15.0178C16.6585 11.994 19.4115 9.91804 22.9768 8.76721C24.5338 8.27078 26.858 8.02256 29.9494 8.04513C33.7403 8.04513 36.0871 8.04513 36.9897 8H36.9446Z" fill="#62EDAA"/>
</svg>
              <p className="text-xl text-white font-bold text-bold mb-4 fade_in_slide_up">
              Paris
              </p>
              <p className="text-sm text-white font-normal text-center fade_in_slide_up">
              2 Rue Jean Lantier, 75001 Paris
              </p>
            </div>

            <div className="bg-[#ffffff1a] p-6 rounded-[16px] border border-[#ff9b1233] flex flex-col justify-center items-center w-[20%]" data-aos="fade-up">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
  <path d="M36.9446 8C36.9672 8 37.0123 8.02256 37.0123 8.06769C37.0123 8.06769 37.0123 8.09026 37.0123 8.11283L30.3556 14.7695C30.1525 14.9726 29.8591 15.0403 29.6109 14.9501C27.1513 14.1603 24.8046 14.4536 22.5706 15.8527C19.4115 17.8158 17.2452 21.4714 19.2535 24.9013C19.3664 25.0818 19.5694 25.1269 19.75 25.0367C19.7725 25.0367 19.7951 24.9915 19.8177 24.969C24.1953 20.5011 26.6549 17.9964 27.219 17.4322C27.8283 16.823 28.415 16.3491 29.0242 15.9881C29.3176 15.8075 29.7012 15.8527 29.9494 16.0783C33.447 19.2149 36.3128 22.3514 35.8615 27.406C35.523 31.2647 33.7629 34.4915 30.6038 37.0865C27.6252 39.5235 24.6466 40.0425 20.5623 39.9974C18.2155 39.9748 15.3949 39.9748 12.1004 39.9974C12.0327 39.9974 11.9875 39.9522 11.9875 39.8845C11.9875 39.862 11.9875 39.8169 12.0327 39.7943L18.193 33.9273C18.4637 33.6791 18.8248 33.5663 19.1633 33.634C19.7951 33.7243 20.9008 34.0176 21.8485 33.9725C24.7594 33.792 27.0611 32.5509 28.7986 30.2267C30.1525 28.3989 30.4007 26.0521 29.3176 23.9536C29.1822 23.7053 28.8888 23.6151 28.6181 23.7279C28.5729 23.7505 28.5278 23.773 28.4827 23.8182C26.5872 25.7136 24.3984 27.925 21.8936 30.4523C20.9459 31.4001 20.269 32.0319 19.8177 32.3252C19.231 32.7088 18.712 32.5057 18.1704 32.0544C16.9519 31.0616 15.8011 29.7979 14.7179 28.2409C11.9199 24.2018 12.1906 19.0569 14.7405 15.0178C16.6585 11.994 19.4115 9.91804 22.9768 8.76721C24.5338 8.27078 26.858 8.02256 29.9494 8.04513C33.7403 8.04513 36.0871 8.04513 36.9897 8H36.9446Z" fill="#FF9B12"/>
</svg>
              <p className="text-xl text-white font-bold mb-4 fade_in_slide_up">
              Nouvelle-Aquitaine
              </p>
              <p className="text-sm text-white font-normal text-center fade_in_slide_up">
              81 Bd Pierre 1er,
33110 Bordeaux

              </p>
            </div>

            <div className="bg-[#ffffff1a] p-6 rounded-[16px] border border-[#ffd60033] flex flex-col justify-center items-center" data-aos="fade-up">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
  <path d="M36.9446 8C36.9672 8 37.0123 8.02256 37.0123 8.06769C37.0123 8.06769 37.0123 8.09026 37.0123 8.11283L30.3556 14.7695C30.1525 14.9726 29.8591 15.0403 29.6109 14.9501C27.1513 14.1603 24.8046 14.4536 22.5706 15.8527C19.4115 17.8158 17.2452 21.4714 19.2535 24.9013C19.3664 25.0818 19.5694 25.1269 19.75 25.0367C19.7725 25.0367 19.7951 24.9915 19.8177 24.969C24.1953 20.5011 26.6549 17.9964 27.219 17.4322C27.8283 16.823 28.415 16.3491 29.0242 15.9881C29.3176 15.8075 29.7012 15.8527 29.9494 16.0783C33.447 19.2149 36.3128 22.3514 35.8615 27.406C35.523 31.2647 33.7629 34.4915 30.6038 37.0865C27.6252 39.5235 24.6466 40.0425 20.5623 39.9974C18.2155 39.9748 15.3949 39.9748 12.1004 39.9974C12.0327 39.9974 11.9875 39.9522 11.9875 39.8845C11.9875 39.862 11.9875 39.8169 12.0327 39.7943L18.193 33.9273C18.4637 33.6791 18.8248 33.5663 19.1633 33.634C19.7951 33.7243 20.9008 34.0176 21.8485 33.9725C24.7594 33.792 27.0611 32.5509 28.7986 30.2267C30.1525 28.3989 30.4007 26.0521 29.3176 23.9536C29.1822 23.7053 28.8888 23.6151 28.6181 23.7279C28.5729 23.7505 28.5278 23.773 28.4827 23.8182C26.5872 25.7136 24.3984 27.925 21.8936 30.4523C20.9459 31.4001 20.269 32.0319 19.8177 32.3252C19.231 32.7088 18.712 32.5057 18.1704 32.0544C16.9519 31.0616 15.8011 29.7979 14.7179 28.2409C11.9199 24.2018 12.1906 19.0569 14.7405 15.0178C16.6585 11.994 19.4115 9.91804 22.9768 8.76721C24.5338 8.27078 26.858 8.02256 29.9494 8.04513C33.7403 8.04513 36.0871 8.04513 36.9897 8H36.9446Z" fill="#FFD600"/>
</svg>
              <p className="text-xl text-white font-bold mb-4 fade_in_slide_up">PACA</p>
              <p className="text-sm text-white font-normal text-center fade_in_slide_up">
              1 Rue Jacqueline Auriol,
13700 Marignane

              </p>
            </div>

            <div className="bg-[#ffffff1a] p-6 rounded-[16px] border border-[#8d29ff33] flex flex-col justify-center items-center" data-aos="fade-up">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
  <path d="M36.9446 8C36.9672 8 37.0123 8.02256 37.0123 8.06769C37.0123 8.06769 37.0123 8.09026 37.0123 8.11283L30.3556 14.7695C30.1525 14.9726 29.8591 15.0403 29.6109 14.9501C27.1513 14.1603 24.8046 14.4536 22.5706 15.8527C19.4115 17.8158 17.2452 21.4714 19.2535 24.9013C19.3664 25.0818 19.5694 25.1269 19.75 25.0367C19.7725 25.0367 19.7951 24.9915 19.8177 24.969C24.1953 20.5011 26.6549 17.9964 27.219 17.4322C27.8283 16.823 28.415 16.3491 29.0242 15.9881C29.3176 15.8075 29.7012 15.8527 29.9494 16.0783C33.447 19.2149 36.3128 22.3514 35.8615 27.406C35.523 31.2647 33.7629 34.4915 30.6038 37.0865C27.6252 39.5235 24.6466 40.0425 20.5623 39.9974C18.2155 39.9748 15.3949 39.9748 12.1004 39.9974C12.0327 39.9974 11.9875 39.9522 11.9875 39.8845C11.9875 39.862 11.9875 39.8169 12.0327 39.7943L18.193 33.9273C18.4637 33.6791 18.8248 33.5663 19.1633 33.634C19.7951 33.7243 20.9008 34.0176 21.8485 33.9725C24.7594 33.792 27.0611 32.5509 28.7986 30.2267C30.1525 28.3989 30.4007 26.0521 29.3176 23.9536C29.1822 23.7053 28.8888 23.6151 28.6181 23.7279C28.5729 23.7505 28.5278 23.773 28.4827 23.8182C26.5872 25.7136 24.3984 27.925 21.8936 30.4523C20.9459 31.4001 20.269 32.0319 19.8177 32.3252C19.231 32.7088 18.712 32.5057 18.1704 32.0544C16.9519 31.0616 15.8011 29.7979 14.7179 28.2409C11.9199 24.2018 12.1906 19.0569 14.7405 15.0178C16.6585 11.994 19.4115 9.91804 22.9768 8.76721C24.5338 8.27078 26.858 8.02256 29.9494 8.04513C33.7403 8.04513 36.0871 8.04513 36.9897 8H36.9446Z" fill="#8D29FF"/>
</svg>
              <p className="text-xl text-white font-bold mb-4 fade_in_slide_up">Bretagne</p>
              <p className="text-sm text-white font-normal text-center fade_in_slide_up">
              Centre d&apos;affaire Alphasis
Espace Performance - bâtiment D2
35760 SAINT-GRÉGOIRE
              </p>
            </div>

            <div className="bg-[#ffffff1a] p-6 rounded-[16px] border border-[#62edaa33] flex flex-col justify-center items-center" data-aos="fade-up">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
  <path d="M36.9446 8C36.9672 8 37.0123 8.02256 37.0123 8.06769C37.0123 8.06769 37.0123 8.09026 37.0123 8.11283L30.3556 14.7695C30.1525 14.9726 29.8591 15.0403 29.6109 14.9501C27.1513 14.1603 24.8046 14.4536 22.5706 15.8527C19.4115 17.8158 17.2452 21.4714 19.2535 24.9013C19.3664 25.0818 19.5694 25.1269 19.75 25.0367C19.7725 25.0367 19.7951 24.9915 19.8177 24.969C24.1953 20.5011 26.6549 17.9964 27.219 17.4322C27.8283 16.823 28.415 16.3491 29.0242 15.9881C29.3176 15.8075 29.7012 15.8527 29.9494 16.0783C33.447 19.2149 36.3128 22.3514 35.8615 27.406C35.523 31.2647 33.7629 34.4915 30.6038 37.0865C27.6252 39.5235 24.6466 40.0425 20.5623 39.9974C18.2155 39.9748 15.3949 39.9748 12.1004 39.9974C12.0327 39.9974 11.9875 39.9522 11.9875 39.8845C11.9875 39.862 11.9875 39.8169 12.0327 39.7943L18.193 33.9273C18.4637 33.6791 18.8248 33.5663 19.1633 33.634C19.7951 33.7243 20.9008 34.0176 21.8485 33.9725C24.7594 33.792 27.0611 32.5509 28.7986 30.2267C30.1525 28.3989 30.4007 26.0521 29.3176 23.9536C29.1822 23.7053 28.8888 23.6151 28.6181 23.7279C28.5729 23.7505 28.5278 23.773 28.4827 23.8182C26.5872 25.7136 24.3984 27.925 21.8936 30.4523C20.9459 31.4001 20.269 32.0319 19.8177 32.3252C19.231 32.7088 18.712 32.5057 18.1704 32.0544C16.9519 31.0616 15.8011 29.7979 14.7179 28.2409C11.9199 24.2018 12.1906 19.0569 14.7405 15.0178C16.6585 11.994 19.4115 9.91804 22.9768 8.76721C24.5338 8.27078 26.858 8.02256 29.9494 8.04513C33.7403 8.04513 36.0871 8.04513 36.9897 8H36.9446Z" fill="#62EDAA"/>
</svg>
              <p className="text-xl text-white font-bold mb-4 fade_in_slide_up">Normandie</p>
              <p className="text-sm text-white font-normal text-center fade_in_slide_up">
              15 avenue Pierre Mendes France
14000 CAEN
              </p>
            </div>

            <div className="bg-[#ffffff1a] p-6 rounded-[16px] border border-[#ff9b1233] flex flex-col justify-center items-center" data-aos="fade-up">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
  <path d="M36.9446 8C36.9672 8 37.0123 8.02256 37.0123 8.06769C37.0123 8.06769 37.0123 8.09026 37.0123 8.11283L30.3556 14.7695C30.1525 14.9726 29.8591 15.0403 29.6109 14.9501C27.1513 14.1603 24.8046 14.4536 22.5706 15.8527C19.4115 17.8158 17.2452 21.4714 19.2535 24.9013C19.3664 25.0818 19.5694 25.1269 19.75 25.0367C19.7725 25.0367 19.7951 24.9915 19.8177 24.969C24.1953 20.5011 26.6549 17.9964 27.219 17.4322C27.8283 16.823 28.415 16.3491 29.0242 15.9881C29.3176 15.8075 29.7012 15.8527 29.9494 16.0783C33.447 19.2149 36.3128 22.3514 35.8615 27.406C35.523 31.2647 33.7629 34.4915 30.6038 37.0865C27.6252 39.5235 24.6466 40.0425 20.5623 39.9974C18.2155 39.9748 15.3949 39.9748 12.1004 39.9974C12.0327 39.9974 11.9875 39.9522 11.9875 39.8845C11.9875 39.862 11.9875 39.8169 12.0327 39.7943L18.193 33.9273C18.4637 33.6791 18.8248 33.5663 19.1633 33.634C19.7951 33.7243 20.9008 34.0176 21.8485 33.9725C24.7594 33.792 27.0611 32.5509 28.7986 30.2267C30.1525 28.3989 30.4007 26.0521 29.3176 23.9536C29.1822 23.7053 28.8888 23.6151 28.6181 23.7279C28.5729 23.7505 28.5278 23.773 28.4827 23.8182C26.5872 25.7136 24.3984 27.925 21.8936 30.4523C20.9459 31.4001 20.269 32.0319 19.8177 32.3252C19.231 32.7088 18.712 32.5057 18.1704 32.0544C16.9519 31.0616 15.8011 29.7979 14.7179 28.2409C11.9199 24.2018 12.1906 19.0569 14.7405 15.0178C16.6585 11.994 19.4115 9.91804 22.9768 8.76721C24.5338 8.27078 26.858 8.02256 29.9494 8.04513C33.7403 8.04513 36.0871 8.04513 36.9897 8H36.9446Z" fill="#FF9B12"/>
</svg>
              <p className="text-xl text-white font-bold mb-4 fade_in_slide_up text-center fade_in_slide_up">En cours d&apos;ouverture</p>
              <p className="text-sm text-white font-normal text-center fade_in_slide_up">
              Hauts-de-France (LILLE)
Occitanie (TOULOUSE)
              </p>
            </div>

            <div className="bg-[#ffffff1a] p-6 rounded-[16px] border border-[#8d29ff33] flex flex-col justify-center items-center" data-aos="fade-up">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
  <path d="M36.9446 8C36.9672 8 37.0123 8.02256 37.0123 8.06769C37.0123 8.06769 37.0123 8.09026 37.0123 8.11283L30.3556 14.7695C30.1525 14.9726 29.8591 15.0403 29.6109 14.9501C27.1513 14.1603 24.8046 14.4536 22.5706 15.8527C19.4115 17.8158 17.2452 21.4714 19.2535 24.9013C19.3664 25.0818 19.5694 25.1269 19.75 25.0367C19.7725 25.0367 19.7951 24.9915 19.8177 24.969C24.1953 20.5011 26.6549 17.9964 27.219 17.4322C27.8283 16.823 28.415 16.3491 29.0242 15.9881C29.3176 15.8075 29.7012 15.8527 29.9494 16.0783C33.447 19.2149 36.3128 22.3514 35.8615 27.406C35.523 31.2647 33.7629 34.4915 30.6038 37.0865C27.6252 39.5235 24.6466 40.0425 20.5623 39.9974C18.2155 39.9748 15.3949 39.9748 12.1004 39.9974C12.0327 39.9974 11.9875 39.9522 11.9875 39.8845C11.9875 39.862 11.9875 39.8169 12.0327 39.7943L18.193 33.9273C18.4637 33.6791 18.8248 33.5663 19.1633 33.634C19.7951 33.7243 20.9008 34.0176 21.8485 33.9725C24.7594 33.792 27.0611 32.5509 28.7986 30.2267C30.1525 28.3989 30.4007 26.0521 29.3176 23.9536C29.1822 23.7053 28.8888 23.6151 28.6181 23.7279C28.5729 23.7505 28.5278 23.773 28.4827 23.8182C26.5872 25.7136 24.3984 27.925 21.8936 30.4523C20.9459 31.4001 20.269 32.0319 19.8177 32.3252C19.231 32.7088 18.712 32.5057 18.1704 32.0544C16.9519 31.0616 15.8011 29.7979 14.7179 28.2409C11.9199 24.2018 12.1906 19.0569 14.7405 15.0178C16.6585 11.994 19.4115 9.91804 22.9768 8.76721C24.5338 8.27078 26.858 8.02256 29.9494 8.04513C33.7403 8.04513 36.0871 8.04513 36.9897 8H36.9446Z" fill="#FFD600"/>
</svg>
              <p className="text-xl text-white font-bold mb-4 fade_in_slide_up">Ouverture 2024</p>
              <p className="text-sm text-white font-normal text-center fade_in_slide_up">
              Grand Est (NANCY) Auvergne Rhône-Alpes (LYON)
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="p-5 lg:p-15 rounded-[40px] mb-15 lg:mb-30 bg-faqbg-normal grid grid-cols-1 lg:grid-cols-2 gap-13">
            <div>
              <div className="sticky top-25 z-10 flex flex-col items-center lg:items-start">
                <h3 className="mb-6 text-[32px] uppercase text-brand-color-1 font-bold text-center lg:text-left fade_in_slide_up">
                  Des prestations uniques pour\tisser votre toile sur le
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

      <section>
        <div className="container ">
          <div className="relative white_on_scroll bg-main-blue bg-cover bg-center px-6 py-6 lg:px-20 lg:py-25 rounded-[56px] overflow-hidden mb-15 lg:mb-30">
            <div className='absolute top-0 bottom-0 left-0 bg-[url("/grid-line.png")] bg-no-repeat bg-cover size-full'></div>
            <div className="flex flex-col justify-center z-10 relative cta-blue">
              <h2 className="font-bold uppercase text-center text-white text-small lg:text-medium mb-3 leading-[120%] fade_in_slide_up">
                Nos experts à vos côtés
              </h2>
              <p className="text-sm text-white text-center mb-10 leading-[170%] fade_in_slide_up" >
                Nos équipes et nos conseillers en ligne accompagnent le
                développement de votre marketing digital.
              </p>
              <Main_button button_title="Me faire rappeler" button_url="/request-quote/" className="w-fit m-auto border border-white transparent py-5 px-8 fade_in_slide_up" />
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
