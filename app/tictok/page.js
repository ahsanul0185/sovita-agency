// "use server"

import Image from "next/image"
import Main_button from "@/ui/main-button"
import Number_box from "@/ui/number-box"
import Link from "next/link";
import Accordion from "@/ui/accordion";
import { get_page_meta,PAGES } from "@/lib/api";

export const dynamic = 'force-dynamic';

function Card({image_url, title, label, border_color, label_bg, label_color="text-black", ...props}) {
  return (
    <div {...props} className={`w-full p-6 rounded-xl border ${border_color} bg-[#ffffff1a] text-white space-y-3 fade_in_slide_up`}>
      <div className="relative rounded-lg">
        <Image src={image_url} height={100} width={100} alt="TikTok Live" className="w-full h-auto object-cover" />
        <span className={`absolute bottom-[60px] left-[-15px] ${label_bg} ${label_color} text-sm font-semibold px-3 py-1 rounded-full`}>
          {label}
        </span>
      </div>
      <div className="text-white text-[16px] font-bold leading-[120%]">
        {title}
      </div>
    </div>
  )
}

function Card_Image({image_url, title, border_color, ...props}) {
  return (
      <div {...props} className={`bg-[#ffffff1a] p-6 rounded-[16px] border ${border_color} flex flex-col justify-center items-center gap-4 mb-6" data-aos="fade-up" data-aos-duration="1000"`} >
        <Image src={image_url} height={100} width={100} alt="TikTok Live" className="w-[120px] h-[120px] rounded-[120px] object-cover" />
        <p className="text-base lg:text-xl text-white font-bold text-bold">
          {title}
        </p>
      </div>
  )
}

export async function generateMetadata() {
  let data = await get_page_meta(PAGES.tictok);

  return {
    title: data?.page_title,
    description: data?.page_desc?.map((cur) => cur.children.map((c) => c.text)).join(" "),
    keywords:data?.keywords?.map((k) => k.keyword),
  };
}

export default async function Tictok() {

  return (
    <>
    <div className="tictoc-page">
      <section className="mb-[56px]">
         <Image src='/green-blurb.png' height={227} width={227} alt='Blue Blurb Image' className='absolute top-[40%] left-0 blur-[200px]' />
          <div className='container px-5 lg:px-0 mx-auto text-center py-15 h-[calc(100vh-80px)] grid md:grid-cols-1 gap:10 lg:grid-cols-[1fr_1fr]'>
            <div className="flex flex-col justify-center items-center lg:items-start">
                <h1 className='text-white text-center font-bold lg:text-left text-medium lg:text-large uppercase  leading-[120%] mb-6'>
                  <span className="colored text-brand-color-1" data-color="blue">Turn your TikTok views into real sales</span>
                  with our done-for-you service
                </h1>
                <div className="flex flex-col gap-6 mb-11 items-center lg:items-start">
                  <p className="text-white flex gap-3 items-center font-normal text-sm leading-[170%] z-10 fade_in_slide_up bg-[#ffffff1a] py-[4px] px-[16px] rounded-[55px] w-max">
                      <svg  width="16" height="17" viewBox="0 0 16 17" fill="none">
                        <g clipPath="url(#clip0_351_867)">
                          <path fillRule="evenodd" clipRule="evenodd" d="M8 0.5C3.5875 0.5 0 4.0875 0 8.5C0 12.9125 3.5875 16.5 8 16.5C12.4125 16.5 16 12.9125 16 8.5C16 4.0875 12.4125 0.5 8 0.5Z" fill="#8D29FF"/>
                          <path d="M6.45937 12.1594C5.4375 11.1375 4.42188 10.1062 3.39687 9.08437C3.28437 8.97187 3.28437 8.78437 3.39687 8.67187L4.575 7.49374C4.6875 7.38124 4.875 7.38124 4.9875 7.49374L6.67188 9.17812L11.0031 4.84374C11.1188 4.73124 11.3031 4.73124 11.4187 4.84374L12.6 6.02499C12.7156 6.14062 12.7156 6.32499 12.6 6.43749L6.87187 12.1594C6.75937 12.275 6.575 12.275 6.45937 12.1594Z" fill="white"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_351_867">
                            <rect width="16" height="16" fill="white" transform="translate(0 0.5)"/>
                          </clipPath>
                        </defs>
                      </svg>
                      90-minute live with a pro seller
                  </p>
                  <p className="text-white flex gap-3 items-center font-normal text-sm leading-[170%] z-10 fade_in_slide_up bg-[#ffffff1a] py-[4px] px-[16px] rounded-[55px] w-max">
                      <svg  width="16" height="17" viewBox="0 0 16 17" fill="none">
                        <g clipPath="url(#clip0_351_867)">
                          <path fillRule="evenodd" clipRule="evenodd" d="M8 0.5C3.5875 0.5 0 4.0875 0 8.5C0 12.9125 3.5875 16.5 8 16.5C12.4125 16.5 16 12.9125 16 8.5C16 4.0875 12.4125 0.5 8 0.5Z" fill="#8D29FF"/>
                          <path d="M6.45937 12.1594C5.4375 11.1375 4.42188 10.1062 3.39687 9.08437C3.28437 8.97187 3.28437 8.78437 3.39687 8.67187L4.575 7.49374C4.6875 7.38124 4.875 7.38124 4.9875 7.49374L6.67188 9.17812L11.0031 4.84374C11.1188 4.73124 11.3031 4.73124 11.4187 4.84374L12.6 6.02499C12.7156 6.14062 12.7156 6.32499 12.6 6.43749L6.87187 12.1594C6.75937 12.275 6.575 12.275 6.45937 12.1594Z" fill="white"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_351_867">
                            <rect width="16" height="16" fill="white" transform="translate(0 0.5)"/>
                          </clipPath>
                        </defs>
                      </svg>
                      TikTok Shopping integration
                  </p>
                  <p className="text-white max-w-[300px] md:max-w-fit flex gap-3 items-center font-normal text-sm leading-[170%] z-10 fade_in_slide_up bg-[#ffffff1a] py-[4px] px-[16px] rounded-[55px] w-max">
                      <svg  width="16" height="17" viewBox="0 0 16 17" fill="none">
                        <g clipPath="url(#clip0_351_867)">
                          <path fillRule="evenodd" clipRule="evenodd" d="M8 0.5C3.5875 0.5 0 4.0875 0 8.5C0 12.9125 3.5875 16.5 8 16.5C12.4125 16.5 16 12.9125 16 8.5C16 4.0875 12.4125 0.5 8 0.5Z" fill="#8D29FF"/>
                          <path d="M6.45937 12.1594C5.4375 11.1375 4.42188 10.1062 3.39687 9.08437C3.28437 8.97187 3.28437 8.78437 3.39687 8.67187L4.575 7.49374C4.6875 7.38124 4.875 7.38124 4.9875 7.49374L6.67188 9.17812L11.0031 4.84374C11.1188 4.73124 11.3031 4.73124 11.4187 4.84374L12.6 6.02499C12.7156 6.14062 12.7156 6.32499 12.6 6.43749L6.87187 12.1594C6.75937 12.275 6.575 12.275 6.45937 12.1594Z" fill="white"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_351_867">
                            <rect width="16" height="16" fill="white" transform="translate(0 0.5)"/>
                          </clipPath>
                        </defs>
                      </svg>
                      Multi-platform retargeting  (TikTok, Meta, Google, YouTube)
                  </p>
                </div>

                <Main_button button_title='Book my TikTok Live' button_url='/' className="fade_in_slide_up w-max"/>
            </div>

            <div className="overflow-hidden flex flex-col items-center justify-center">
                <Image src='/ticktok-hero.png' height={320} width={320} alt='hero' className='h-[250px] lg:h-[450px]  w-[376px]' />
            </div>
          </div>
          <Image src='/blue-blurb.png' height={320} width={320} alt='Green Blurb Image' className='absolute top-[50%] right-0 blur-[200px] -z-5' />
      </section>

      <section className="mb-25">
          <h2 className='text-white text-center font-bold text-medium lg:text-large uppercase  leading-[120%]'>
            What’s Included
          </h2>

          <div className="container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 my-12">
             <Card image_url="/tictok-card-1.png" title="1h30 TikTok Live with a professional seller" label="Live:" border_color="border-main-green" label_bg="bg-main-green"  />
             <Card image_url="/tictok-card-2.png" title="Product catalog integration" label="Catalog" border_color="border-main-orange" label_bg="bg-main-orange"  />
             <Card image_url="/tictok-card-3.png" title="Boosted through TikTok Ads" label="Boost" border_color="border-main-yellow" label_bg="bg-main-yellow"  />
             <Card image_url="/tictok-card-4.png" title="Ads to viewers, commenters, site visitors" label="Retargeting" border_color="border-main-purple" label_bg="bg-main-purple" label_color="text-white"  />
             <Card image_url="/tictok-card-5.png" title="Performance report & recommendations" label="Report" border_color="border-main-blue" label_bg="bg-main-blue" label_color="text-white" />
          </div>
          <h3 className='text-white text-center font-bold text-[18px] lg:text-[24px] leading-[120%]'>
             Price: <span className="text-main-yellow colored" data-color="yellow">€1500 excl.</span> VAT + commission on sales
          </h3>
      </section>


      <section>
          <div className="container">
            <div className=" p-5 lg:p-15 rounded-[40px] mb-10 lg:mb-30 bg-faqbg-normal">
              <h2 className="text-small lg:text-medium text-white mb-6 text-center fade_in_slide_up">
                Why It <span className="colored text-brand-color-1" data-color="blue"> Works </span>
              </h2>
              <p className="text-sm text-white font-normal text-center fade_in_slide_up mb-10" >
                “A TikTok Live isn’t the finish line — it’s the starting point of your conversion funnel.”
              </p>

              <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8">
                 <div className="flex flex-col gap-6">
                    <Number_box count_number={79} text="of TikTok users purchase after a live" suffix="%" color="green" data-aos="fade-up" data-aos-duration="1000" />
                    <Number_box count_number={300} suffix="%" prefix="+" text="increase in sales from retargeting" color="orange" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" />
                 </div>
                 <div className="p-10 bg-main-blue rounded-[16px] grid grid-cols-1 md:grid-cols-[1fr_150px] gap-10">
                    <div className="flex flex-col items-start justify-center">
                        <p className="text-[20px] text-white font-bold text-left fade_in_slide_up" > Happy Client </p>
                        <div className="flex items-center gap-2 mb-6">
                           {[1,2,3,4,5].map((i) => (
                             <svg key={i} width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M8.99044 2.67555C9.36406 1.77726 10.6366 1.77726 11.0102 2.67555L12.7452 6.84698L17.2486 7.20801C18.2184 7.28576 18.6116 8.496 17.8727 9.12892L14.4416 12.068L15.4899 16.4626C15.7156 17.4089 14.6861 18.1569 13.8559 17.6498L10.0003 15.2948L6.14477 17.6498C5.31451 18.1569 4.28501 17.4089 4.51075 16.4626L5.55901 12.068L2.12789 9.12892C1.38903 8.496 1.78225 7.28576 2.75203 7.20801L7.25544 6.84698L8.99044 2.67555Z" fill="#FFB800"/>
                             </svg>
                           ))}
                        </div>
                        <p className="text-normal text-white font-thin fade_in_slide_up mb-6">
                          We saw 3x ROI within a week — amazing service!
                        </p>
                        <span>
                            <svg width="29" height="24" viewBox="0 0 29 24" fill="none">
                              <path d="M16.4702 24C21.6091 23.6375 28.9959 22.8139 29 12.7111V0L17.5328 0V13.6H21.3405C21.5817 17.2314 18.6028 18.1691 15.3634 18.8889L16.4702 24ZM1.10688 24C6.24578 23.6375 13.6326 22.8139 13.6367 12.7111L13.6367 0L2.16944 0L2.16944 13.6H5.97712C6.21835 17.2314 3.2394 18.1691 0 18.8889L1.10688 24Z" fill="white"/>
                            </svg>
                        </span>
                    </div>
                    <div>
                      <Image src="/tictok-cta.png" height={100} width={100} alt="TikTok Live" className="w-full h-[250px] md:h-auto object-contain md:object-cover" />
                    </div>
                 </div>
              </div>
            </div>
          </div>
      </section>


      <section className="py-25 white_on_scroll mb-20">
         <div className="container grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-5 md:gap-[40px] lg:gap-[64px]">
            <div>
                <Image src="/tictok-white-cta.png" height={100} width={100} alt="TikTok Live" className="w-full h-auto object-cover" />
            </div>
            <div>
                <h2 className="text-[24px] lg:text-[38px] text-white mb-6 fade_in_slide_up">
                  Ready to sell <span className="colored text-brand-color-1" data-color="blue">  LIVE on TikTok? </span>
                </h2>
                <div className="flex flex-wrap gap-3">
                  <p className="text-white flex gap-3 items-center font-normal text-sm leading-[170%] z-10 fade_in_slide_up py-[4px]  rounded-[55px] w-max">
                      <svg  width="16" height="17" viewBox="0 0 16 17" fill="none">
                        <g clipPath="url(#clip0_351_867)">
                          <path fillRule="evenodd" clipRule="evenodd" d="M8 0.5C3.5875 0.5 0 4.0875 0 8.5C0 12.9125 3.5875 16.5 8 16.5C12.4125 16.5 16 12.9125 16 8.5C16 4.0875 12.4125 0.5 8 0.5Z" fill="#8D29FF"/>
                          <path d="M6.45937 12.1594C5.4375 11.1375 4.42188 10.1062 3.39687 9.08437C3.28437 8.97187 3.28437 8.78437 3.39687 8.67187L4.575 7.49374C4.6875 7.38124 4.875 7.38124 4.9875 7.49374L6.67188 9.17812L11.0031 4.84374C11.1188 4.73124 11.3031 4.73124 11.4187 4.84374L12.6 6.02499C12.7156 6.14062 12.7156 6.32499 12.6 6.43749L6.87187 12.1594C6.75937 12.275 6.575 12.275 6.45937 12.1594Z" fill="white"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_351_867">
                            <rect width="16" height="16" fill="white" transform="translate(0 0.5)"/>
                          </clipPath>
                        </defs>
                      </svg>
                      You don’t need to be on camera
                  </p>
                  <p className="text-white flex gap-3 items-center font-normal text-sm leading-[170%] z-10 fade_in_slide_up py-[4px]  rounded-[55px] w-max">
                      <svg  width="16" height="17" viewBox="0 0 16 17" fill="none">
                        <g clipPath="url(#clip0_351_867)">
                          <path fillRule="evenodd" clipRule="evenodd" d="M8 0.5C3.5875 0.5 0 4.0875 0 8.5C0 12.9125 3.5875 16.5 8 16.5C12.4125 16.5 16 12.9125 16 8.5C16 4.0875 12.4125 0.5 8 0.5Z" fill="#8D29FF"/>
                          <path d="M6.45937 12.1594C5.4375 11.1375 4.42188 10.1062 3.39687 9.08437C3.28437 8.97187 3.28437 8.78437 3.39687 8.67187L4.575 7.49374C4.6875 7.38124 4.875 7.38124 4.9875 7.49374L6.67188 9.17812L11.0031 4.84374C11.1188 4.73124 11.3031 4.73124 11.4187 4.84374L12.6 6.02499C12.7156 6.14062 12.7156 6.32499 12.6 6.43749L6.87187 12.1594C6.75937 12.275 6.575 12.275 6.45937 12.1594Z" fill="white"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_351_867">
                            <rect width="16" height="16" fill="white" transform="translate(0 0.5)"/>
                          </clipPath>
                        </defs>
                      </svg>
                      Your catalog is clickable during the live
                  </p>
                  <p className="text-white flex gap-3 items-center font-normal text-sm leading-[170%] z-10 fade_in_slide_up py-[4px]  rounded-[55px] w-max">
                      <svg  width="16" height="17" viewBox="0 0 16 17" fill="none">
                        <g clipPath="url(#clip0_351_867)">
                          <path fillRule="evenodd" clipRule="evenodd" d="M8 0.5C3.5875 0.5 0 4.0875 0 8.5C0 12.9125 3.5875 16.5 8 16.5C12.4125 16.5 16 12.9125 16 8.5C16 4.0875 12.4125 0.5 8 0.5Z" fill="#8D29FF"/>
                          <path d="M6.45937 12.1594C5.4375 11.1375 4.42188 10.1062 3.39687 9.08437C3.28437 8.97187 3.28437 8.78437 3.39687 8.67187L4.575 7.49374C4.6875 7.38124 4.875 7.38124 4.9875 7.49374L6.67188 9.17812L11.0031 4.84374C11.1188 4.73124 11.3031 4.73124 11.4187 4.84374L12.6 6.02499C12.7156 6.14062 12.7156 6.32499 12.6 6.43749L6.87187 12.1594C6.75937 12.275 6.575 12.275 6.45937 12.1594Z" fill="white"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_351_867">
                            <rect width="16" height="16" fill="white" transform="translate(0 0.5)"/>
                          </clipPath>
                        </defs>
                      </svg>
                      We retarget all visitors automatically
                  </p>
                  <p className="text-white flex gap-3 items-center font-normal text-sm leading-[170%] z-10 fade_in_slide_up py-[4px]  rounded-[55px] w-max">
                      <svg  width="16" height="17" viewBox="0 0 16 17" fill="none">
                        <g clipPath="url(#clip0_351_867)">
                          <path fillRule="evenodd" clipRule="evenodd" d="M8 0.5C3.5875 0.5 0 4.0875 0 8.5C0 12.9125 3.5875 16.5 8 16.5C12.4125 16.5 16 12.9125 16 8.5C16 4.0875 12.4125 0.5 8 0.5Z" fill="#8D29FF"/>
                          <path d="M6.45937 12.1594C5.4375 11.1375 4.42188 10.1062 3.39687 9.08437C3.28437 8.97187 3.28437 8.78437 3.39687 8.67187L4.575 7.49374C4.6875 7.38124 4.875 7.38124 4.9875 7.49374L6.67188 9.17812L11.0031 4.84374C11.1188 4.73124 11.3031 4.73124 11.4187 4.84374L12.6 6.02499C12.7156 6.14062 12.7156 6.32499 12.6 6.43749L6.87187 12.1594C6.75937 12.275 6.575 12.275 6.45937 12.1594Z" fill="white"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_351_867">
                            <rect width="16" height="16" fill="white" transform="translate(0 0.5)"/>
                          </clipPath>
                        </defs>
                      </svg>
                      You collect the sales, we do the rest
                  </p>
                </div>

                <div className="my-10 flex flex-col items-start md:flex-row md:items-center gap-8">
                    <Main_button button_title='Request a Callback' button_url='/' className="fade_in_slide_up"/>
                    <Link href='/' className='btn py-4 px-7 text-center inline-block cursor-pointer leading-[120%] font-bold border rounded-4xl'>
                       Book my Live
                    </Link>
                </div>
                <p className="text-normal text-white font-bold fade_in_slide_up">
                   Only <span className="text-brand-color-1">10 slots available </span> per month
                </p>
            </div>
         </div>
      </section>


      <section className="mb-20">
          <div className="container">
              <h2 className="text-small lg:text-[40px] text-white text-center fade_in_slide_up">
                Who Is <span className="colored text-brand-color-1" data-color="blue"> This For? </span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-12 ">
                  <Card_Image image_url="/tictok-people-4.png" title="Gadgets / Visual Products" border_color="border-main-green" />
                  <Card_Image image_url="/tictok-people-3.png" title="Home & Decor" border_color="border-main-purple" />
                  <Card_Image image_url="/tictok-people-2.png" title="Beauty & Cosmetics" border_color="border-main-yellow" />
                  <Card_Image image_url="/tictok-people-1.png" title="Fashion & Accessories" border_color="border-main-orange" />
              </div>
              <h3 className='text-white text-center font-bold text-[18px] lg:text-[24px] leading-[120%]'>
                 Price: <span className="text-main-yellow colored" data-color="yellow">€1500 excl.</span> VAT + commission on sales
              </h3>
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

      <section className='px-5 xl:px-0 py-15'>
        <div className='container white_on_scroll relative bg-main-blue bg-cover bg-center px-20 py-25 rounded-4xl lg:rounded-[56px] overflow-hidden mb-20 '>
          <div className='absolute top-0 bottom-0 left-0 right-0 bg-[url("/grid-line.png")] bg-cover bg-no-repeat size-full'></div>
          <div className='flex flex-col justify-center z-10 relative px-6 py-6  cta-blue'>
            <h2 className='font-bold text-center uppercase text-white text-[40px] mb-3 leading-[120%] '>
              Launch Offer: No setup fee until June 30th
            </h2>
            <p className='text-[24px] text-white text-center mb-10 leading-[170%] ' >
               Only <span className="text-bold">4/10 live</span> slots remaining this month
            </p>
            <Main_button
              button_title='Book my TikTok Live'
              button_url='/'
              className='w-fit m-auto border border-white transparent py-5 px-8 mb-0 fade_in_slide_up'
            />
          </div>
        </div>
      </section>

    </div>
    </>
  )

}
