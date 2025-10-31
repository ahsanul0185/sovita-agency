"use client";

import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const paymentButtons = [
  {
    id: "plan1",
    duration: 1,
    discount: 0,
    label: "Payer 1 mois",
  },
  {
    id: "plan2",
    duration: 3,
    discount: 0.1,
    label: "Payer 3 mois (-10%)",
  },
  {
    id: "plan3",
    duration: 6,
    discount: 0.15,
    label: "Payer 6 mois (-15%)",
  },
  {
    id: "plan4",
    duration: 12,
    discount: 0.2,
    label: "Payer 12 mois (-20%)",
  },
];

function calculatePrice(monthlyPrice, annualSetupFee, duration, discount) {
  const subscriptionTotal = monthlyPrice * duration;
  const discountAmount = subscriptionTotal * discount;
  const discountedSubscription = subscriptionTotal - discountAmount;
  const total = annualSetupFee + discountedSubscription;

  return {
    subscriptionTotal,
    discountAmount,
    discountedSubscription,
    annualSetupFee,
    total,
  };
}

export default function Select_Duration({
  planName,
  monthlyPrice,
  annualSetupFee,
  paymentUrls,
  setSelectedPlan,
}) {
  const [selectedDuration, setSelectedDuration] = useState(null);
  const router = useRouter();

  const handlePayment = (buttonId) => {
    const paymentUrl = paymentUrls[buttonId];

    const splitUrl = paymentUrl.split("/");
    const plan =
      splitUrl[splitUrl.length - 2] + "/" + splitUrl[splitUrl.length - 1];

    // console.log(plan);
    if (paymentUrl) {
      router.push(`/checkout?plan=${plan}`);
      // window.location.href = paymentUrl;
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex items-center justify-center md:p-6">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Choisissez votre durée
          </h2>
          <div className="inline-block px-4 py-2 bg-[#007bf4]/10 border border-[#007bf4]/30 rounded-lg">
            <p className="md:text-xl text-white">
              {planName} -{" "}
              <span className="text-[#007bf4]">{monthlyPrice}€ HT/mois</span>
            </p>
          </div>
          <div className="mt-8 p-4 bg-gray-900/50 border border-gray-800 rounded-lg">
            <p className="text-sm text-gray-400 text-center">
              Le prix inclut {annualSetupFee}€ HT de frais de création +
              l'abonnement mensuel
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {paymentButtons.map((button) => {
            const isSelected = selectedDuration === button.id;
            const pricing = calculatePrice(
              monthlyPrice,
              annualSetupFee,
              button.duration,
              button.discount
            );

            return (
              // <button
              //   key={button.id}
              //   onClick={() => {
              //     setSelectedDuration(button.id);
              //     handlePayment(button.id);
              //   }}
              //   className={`w-full cursor-pointer py-5 px-8 rounded-xl text-lg font-medium transition-all duration-200 ${
              //     isSelected
              //       ? 'bg-[#007bf4] text-white border-2 border-[#007bf4]'
              //       : 'border-2 border-[#007bf4]/30 text-white hover:border-[#007bf4] hover:bg-[#007bf4]/5'
              //   }`}
              // >
              //   <div className="flex justify-between items-center">
              //     <span>{button.label}</span>
              //     <span className="font-bold">{pricing.total.toFixed(2)}€ HT</span>
              //   </div>
              // </button>
              <div
                key={button.id}
                onClick={() => {
                  setSelectedDuration(button.id);
                  handlePayment(button.id);
                }}
                className={`w-full cursor-pointer py-5 px-5 rounded-md text-lg font-medium transition-all duration-200 ${
                  isSelected
                    ? "bg-[#007bf4] text-white border-2 border-[#007bf4]"
                    : "border-2 border-[#007bf4]/30 text-white hover:border-[#007bf4] hover:bg-[#007bf4]/5"
                }`}
              >
                <div className="flex justify-between items-center">
                  <span>{button.label}</span>
                  <button className="flex gap-3 text-sm py-2 px-3 rounded cursor-pointer hover:bg-blue-600 duration-200 bg-main-blue">
                    <span>Choisir la formule</span>
                    <span className="">{pricing.total.toFixed(2)}€ HT</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={() => setSelectedPlan(null)}
          className="mt-6 px-4 group py-2 cursor-pointer hover:bg-blue-600 bg-main-blue flex gap-2 items-center rounded"
        >
          <ArrowLeft className="group-hover:-translate-x-1 duration-200" />
          Go back
        </button>
      </div>
    </div>
  );
}
