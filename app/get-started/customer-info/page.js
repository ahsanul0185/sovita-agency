"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Shield, ArrowRight, ChevronLeft } from "lucide-react";
import { GoArrowLeft } from "react-icons/go";
import Loader from "@/component/Loader";

export default function Customer_info() {
  const { register, handleSubmit } = useForm();
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
    const searchParams = new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '');
  const redirectTo = searchParams.get('redirect') || '/';

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setStatus("Submitting...");
    
    try {
      const payload = {
        name: data.firstName + " " + data.lastName,
        email: data.email,
        phone: data.phone,
        company: "",
        message: "",
      };

      const res = await fetch("/api/submit-bigin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (result.success) {
        setStatus("Form submitted successfully!");
        
        // Store in localStorage that customer info is submitted
        localStorage.setItem("customerInfoSubmitted", "true");
        localStorage.setItem("customerInfo", JSON.stringify({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone,
          submittedAt: new Date().toISOString()
        }));

        // Navigate to next page after a short delay
        setTimeout(() => {
          router.push(redirectTo);
        }, 1500);
      } else {
        setStatus("Error: " + (result.error || "Unknown error"));
        setIsSubmitting(false);
      }
    } catch (err) {
      setStatus("Error submitting form. Please try again.");
      setIsSubmitting(false);
      console.log(err);
    }
  };

  const handleBack = () => {
    router.back();
  };

  const handleContinue = () => {
    handleSubmit(onSubmit)();
  };

  return (
    <div className="min-h-screenpt-12 pb-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Main content */}
        <div className="relative border-2 border-white/10 rounded-xl p-8 md:p-12 transition-all duration-200">

                {/* Back button */}
        <button
          onClick={handleBack}
          className="flex items-center cursor-pointer gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
          type="button"
        >
          <GoArrowLeft className="size-9" />
        </button>

              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                C’est parti ! Qui effectue la démarche sur Sovita ?
              </h1>
              <p className="text-gray-400 mb-8 leading-relaxed">
            Ces informations nous permettront de vous assister au cours de votre création, et seront nécessaires pour votre dossier.
              </p>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Form section */}
            <div>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Prénom"
                    className="w-full  border border-white/30 rounded-lg px-4 py-3 text-white placeholder-gray-300/80 focus:outline-none focus:ring-2 focus:ring-[#007bf4] focus:border-transparent"
                    {...register("firstName", { required: true })}
                  />
                  <input
                    type="text"
                    placeholder="Nom"
                    className="w-full  border border-white/30 rounded-lg px-4 py-3 text-white placeholder-gray-300/80 focus:outline-none focus:ring-2 focus:ring-[#007bf4] focus:border-transparent"
                    {...register("lastName", { required: true })}
                  />
                </div>

                <input
                  type="email"
                  placeholder="E-mail"
                  className="w-full  border border-white/30 rounded-lg px-4 py-3 text-white placeholder-gray-300/80 focus:outline-none focus:ring-2 focus:ring-[#007bf4] focus:border-transparent"
                  {...register("email", { required: true })}
                />

                <div className="flex gap-2">
                  <input
                    type="tel"
                    placeholder="06 72 30 65 79"
                    className="flex-1  border border-white/30 rounded-lg px-4 py-3 text-white placeholder-gray-300/80 focus:outline-none focus:ring-2 focus:ring-[#007bf4] focus:border-transparent"
                    {...register("phone", { required: true })}
                  />
                </div>

                {/* {status && (
                  <div className={`p-3 rounded-lg text-sm ${
                    status.includes("Error") 
                      ? "bg-red-500/10 text-red-400 border border-red-500/20" 
                      : "bg-green-500/10 text-green-400 border border-green-500/20"
                  }`}>
                    {status}
                  </div>
                )} */}
              </div>
            </div>

            {/* Image section */}
            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                alt="Team collaboration"
                className="rounded-xl w-full h-52 object-cover"
              />
            </div>
          </div>

          {/* Footer section */}
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
            {/* <div className="flex items-start gap-3">
              <div className="bg-[#007bf4]/10 p-3 rounded-lg">
                <Shield className="w-6 h-6 text-[#007bf4]" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Vos données sont en sécurité</h3>
                <p className="text-sm text-gray-400">
                  They will only be transmitted to the French administration to register your company.
                </p>
              </div>
            </div> */}

            <div className="flex justify-end w-full">
                <button
              onClick={handleContinue}
              disabled={isSubmitting}
              className="bg-[#007bf4] w-full md:w-56 hover:bg-[#0066cc] disabled:bg-[#007bf4]/50 text-white font-semibold px-8 py-3 rounded cursor-pointer flex items-center justify-center gap-2 transition-colors disabled:cursor-not-allowed"
            >
              {isSubmitting ? <Loader/> : <>Continuer
              <ArrowRight className="w-5 h-5" /></>}
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}