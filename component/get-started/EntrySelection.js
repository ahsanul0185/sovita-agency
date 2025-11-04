"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function EntrySelection() {
  const router = useRouter();

  const handleNavigation = (route) => {
    const submitted = localStorage.getItem("customerInfoSubmitted");
    
    if (submitted === "true") {
      router.push(route);
    } else {
      // Redirect to customer-info with the intended route as query param
      router.push(`/get-started/customer-info?redirect=${encodeURIComponent(route)}`);
    }
  };

  return (
    <div className="max-w-2xl w-full">
      <div className="text-center mb-12">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
          Je souhaite
        </h2>
      </div>

      <div className="space-y-4">
        <div
          
          className="w-full cursor-pointer text-white font-medium text-lg py-5 px-8 rounded-xl border-2 border-[#007bf4]/30 hover:border-[#007bf4] hover:bg-[#007bf4]/5 transition-all duration-200 flex items-center justify-center gap-3"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          Louer mon site internet (à partir 8€ HT/mois)
          <button onClick={() => handleNavigation("/get-started/location")} className="px-5 py-2 rounded ml-4 cursor-pointer hover:bg-main-blue/80 bg-main-blue text-sm">Sélectionner </button>

        </div>

        <div
          
          className="w-full cursor-pointer text-white font-medium text-lg py-5 px-8 rounded-xl border-2 border-[#007bf4]/30 hoverborder-[#007bf4] hover:bg-[#007bf4]/5 transition-all duration-200 flex items-center justify-center gap-3"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
          Acheter mon site internet (à partir 249€ HT)
          <button onClick={() => handleNavigation("/get-started/achat")} className="px-5 py-2 rounded ml-4 cursor-pointer hover:bg-main-blue/80 bg-main-blue text-sm">Sélectionner </button>
        </div>
      </div>
    </div>
  );
}