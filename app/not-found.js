import Main_button from "@/ui/main-button";

export default function NotFound() {
  return (
   <section>
       <div className="container z-10 pt-[50px]">
         <div className="p-5 text-center md:p-15 rounded-[40px] mb-15 lg:mb-30 bg-faqbg-normal z-10 fade_in_slide_up" >
           <p className="text-[80px] md:text-[200px] mb-10 text-main-blue text-center font-bold">
              404
           </p>
           <Main_button button_title="Retour à l'accueil" button_url='/'  />
         </div>
       </div>
   </section>
  );
}
