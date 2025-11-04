"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function CheckoutContent() {
  const plan = useSearchParams().get("plan");
   const router = useRouter();

     const handleBack = () => {
    router.back();
  };

  return (
    <div className="bg-[#f8fcfe] h-screen">
      <button
        onClick={handleBack}
        className="fixed top-8 left-8 text-black size-14 cursor-pointer"
      >
        <ArrowLeft className="hover:text-main-blue duration-200" />
      </button>
      <div className="container pt-20 text-black mx-auto flex justify-center flex-col items-center">
        <h2 className="mb-2">Une question sur votre commande ?</h2>
        <p>
          Contacter notre équipe de 9h à 18h au 07 44 31 33 49 (appel gratuit)
        </p>
      </div>

      <iframe
        style={{ width: "100%", height: "100%" }}
        allow="payment"
        src={`https://billing.zohosecure.eu/subscribe/${plan}`}
        // src={`https://billing.zohosecure.eu/subscribe/1b4940b1bc785016b3eeb4ceaf28aa3cda4aa14d21d8c1ad651bdda4a1c7d344/101`}
      ></iframe>
    </div>
  );
}
