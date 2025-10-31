"use client"

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Checkout() {

    const plan = useSearchParams().get("plan");
  
    return (<div className="bg-[#f8fcfe] h-screen">
        <Link href="/get-started" className="fixed top-8 left-8 text-black size-14"><ArrowLeft className="hover:text-main-blue duration-200" /></Link>
        <div className="container pt-20 text-black mx-auto flex justify-center flex-col items-center">
            <h2 className="mb-2">Une question sur votre commande ?</h2>
            <p>Contacter notre équipe de 9h à 18h au 07 44 31 33 49 (appel gratuit)</p>
        </div>

<iframe style={{width : "100%", height : "100%"}}  src={`https://billing.zohosecure.eu/subscribe/${plan}`} ></iframe>

    </div>)
}