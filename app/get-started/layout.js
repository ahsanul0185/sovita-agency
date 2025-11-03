"use client"

import Breadcrumb from "@/component/get-started/Breadcrumb";
import { usePathname } from "next/navigation";


export default function GetStartedLayout({ children }) {

   const pathname = usePathname();
  const showContactRoutes = ["vitrine", "ecommerce"];

  // Check if the current path includes any of the specified routes
  const showContactText = showContactRoutes.some(route =>
    pathname.includes(route)
  );
  return (
    <div className="p-6">
      <Breadcrumb /> {/* will appear on /get-started and all nested routes */}
      {showContactText && <div className="text-center px-6 py-4 border border-white/20 rounded w-fit mx-auto my-12">
      
                           
      
       <h2 className="mb-2">Une question sur votre commande ?</h2>
        <p className="text-main-blue">
          Contacter notre équipe de 9h à 18h au 07 44 31 33 49 (appel gratuit)
        </p>
      
      </div>}
      {children}    {/* renders the actual page content */}
    </div>
  );
}
