
import EntrySelection from "@/component/get-started/EntrySelection";
import Our_Porject_Tabs from "@/ui/tabs";
import Image from "next/image";

export default function Get_started() {

  return (
    <div className="bg-[#0a0a0a] flex flex-col gap-10 items-center p-6 pt-20">
        <EntrySelection/>

        <section className='our-projects-tab-section relative overflow-hidden mt-40'>
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
  );
}