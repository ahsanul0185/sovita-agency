// "use server";

import Image from "next/image";
import Hero_paragraph from "@/ui/hero-paragraph";
import Main_button from "@/ui/main-button";
import Link from "next/link";
import { get_page_meta,PAGES } from "@/lib/api";
import Our_Porject_Tabs from "@/ui/tabs";

export const dynamic = 'force-dynamic';

export async function generateMetadata() {
  let data = await get_page_meta(PAGES.our_project);

  return {
    title: data?.page_title,
    description: data?.page_desc?.map((cur) => cur.children.map((c) => c.text)).join(" "),
    keywords:data?.keywords?.map((k) => k.keyword),
  };
}

export default async function Our_project() {
  return (
    <>
    <div className='our-projects-page'>
      <Image src='/blue-blurb.png' height={227} width={227} alt='Blue Blurb Image' className='absolute top-[40%] left-0 blur-[200px]' />
      <div className='w-full px-5 lg:px-0 md:max-w-[600px] mx-auto text-center py-15 h-[calc(100vh-80px)] flex flex-col items-center justify-center'>
            <h1 className='text-white uppercase text-center font-bold text-[40px] mb-4 leading-[120%] fade_in_slide_up'>
              Nos réalisations
            </h1>
            <Hero_paragraph
              paragraph='Depuis 14 ans, nous accompagnons toutes les typologies d’entreprises. Des petites aux grandes, des artisans aux PME, des commerçants aux professions libérables. Avec un seul mot d’ordre : performance.'
              classes='text-center mb-10'
            />
            <div className='buttons flex flex-col md:flex-row items-center justify-center'>
              <Main_button button_title='Me faire rappeler' button_url='/request-quote/'  className="fade_in_slide_up"/>
              <Link href='/create-site/' className='py-5 px-8 text-center inline-block cursor-pointer leading-[120%] font-bold fade_in_slide_up' >
                Nos services<span className='pl-2'> ➜ </span>
              </Link>
            </div>
      </div>
      <Image src='/blue-blurb.png' height={320} width={320} alt='Green Blurb Image' className='absolute top-[50%] right-0 blur-[200px]' />

      <section className='our-projects-tab-section relative overflow-hidden'>
        <div className='container mx-auto'>
          <Our_Porject_Tabs />
        </div>
        <Image
          src='/yellow-blurb.png'
          height={320}
          width={320}
          alt='Green Blurb Image'
          className='absolute bottom-[-200] right-[-200] blur-[300px] -z-10'
        />
      </section>
    </div>
    </>
  );
}
