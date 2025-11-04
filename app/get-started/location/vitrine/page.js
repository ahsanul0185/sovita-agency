"use client";

import PriceCard from "@/component/get-started/PriceCard";
import Select_Duration from "@/component/get-started/SelectDuration";
import ProtectedRoute from "@/component/ProtectedRoute";
import { useState } from "react";

const plans = [
  {
    id: "simplicite",
    name: "Simplicité",
    subtitle: "Site sur une seule page",
    monthlyPrice: 8,
    annualSetupFee: 100,
    paymentUrls: {
      plan1:
        "https://billing.zohosecure.eu/subscribe/81b154bbf365d22b13a4400037b3f42adc1a4921d2db0ed8651bdda4a1c7d344/101",
      plan2:
        "https://billing.zohosecure.eu/subscribe/81b154bbf365d22b13a4400037b3f42adc1a4921d2db0ed8651bdda4a1c7d344/102",
      plan3:
        "https://billing.zohosecure.eu/subscribe/81b154bbf365d22b13a4400037b3f42adc1a4921d2db0ed8651bdda4a1c7d344/103",
      plan4:
        "https://billing.zohosecure.eu/subscribe/81b154bbf365d22b13a4400037b3f42adc1a4921d2db0ed8651bdda4a1c7d344/104",
    },
    features: [
      "Hébergement et maintenance inclus – Engagement 12 mois.",
      "Site sur une seule page créées et optimisées par Shikam",
      "Site optimisé pour les mobiles, tablettes et ordinateurs",
    ],
  },
  {
    id: "credibilite",
    name: "Crédibilité",
    subtitle: "Site sur plusieurs pages",
    monthlyPrice: 29,
    annualSetupFee: 100,
    paymentUrls: {
      plan1:
        "https://billing.zohosecure.eu/subscribe/81b154bbf365d22b13a4400037b3f42adc1a4921d2db0ed8651bdda4a1c7d344/201",
      plan2:
        "https://billing.zohosecure.eu/subscribe/81b154bbf365d22b13a4400037b3f42adc1a4921d2db0ed8651bdda4a1c7d344/202",
      plan3:
        "https://billing.zohosecure.eu/subscribe/81b154bbf365d22b13a4400037b3f42adc1a4921d2db0ed8651bdda4a1c7d344/203",
      plan4:
        "https://billing.zohosecure.eu/subscribe/81b154bbf365d22b13a4400037b3f42adc1a4921d2db0ed8651bdda4a1c7d344/204",
    },
    features: [
      "Hébergement et maintenance inclus – Engagement 12 mois.",
      "Site sur plusieurs pages",
      "10 pages créées et optimisées par Shikam",
      "Site optimisé pour les mobiles, tablettes et ordinateurs",
    ],
  },
  {
    id: "performance",
    name: "Performance",
    subtitle: "Site optimisé pour le référencement",
    monthlyPrice: 58,
    annualSetupFee: 100,
    paymentUrls: {
      plan1:
        "https://billing.zohosecure.eu/subscribe/81b154bbf365d22b13a4400037b3f42adc1a4921d2db0ed8651bdda4a1c7d344/301",
      plan2:
        "https://billing.zohosecure.eu/subscribe/81b154bbf365d22b13a4400037b3f42adc1a4921d2db0ed8651bdda4a1c7d344/302",
      plan3:
        "https://billing.zohosecure.eu/subscribe/81b154bbf365d22b13a4400037b3f42adc1a4921d2db0ed8651bdda4a1c7d344/303",
      plan4:
        "https://billing.zohosecure.eu/subscribe/81b154bbf365d22b13a4400037b3f42adc1a4921d2db0ed8651bdda4a1c7d344/304",
    },
    features: ["Hébergement et maintenance inclus – Engagement 12 mois."],
  },
  {
    id: "premium",
    name: "Premium",
    subtitle: "Site avec design et conseils premium",
    monthlyPrice: 99,
    annualSetupFee: 100,
    paymentUrls: {
      plan1:
        "https://billing.zohosecure.eu/subscribe/81b154bbf365d22b13a4400037b3f42adc1a4921d2db0ed8651bdda4a1c7d344/401",
      plan2:
        "https://billing.zohosecure.eu/subscribe/81b154bbf365d22b13a4400037b3f42adc1a4921d2db0ed8651bdda4a1c7d344/402",
      plan3:
        "https://billing.zohosecure.eu/subscribe/81b154bbf365d22b13a4400037b3f42adc1a4921d2db0ed8651bdda4a1c7d344/403",
      plan4:
        "https://billing.zohosecure.eu/subscribe/81b154bbf365d22b13a4400037b3f42adc1a4921d2db0ed8651bdda4a1c7d344/404",
    },
    features: [
      "Hébergement et maintenance inclus – Engagement 12 mois.",
      "Site sur plusieurs pages",
      "20 pages créées et optimisées par Shikam",
      "Site optimisé pour les mobiles, tablettes et ordinateurs",
      "Suivi de la position de votre site sur Google : 15 mots-clés",
      "Design premium",
    ],
  },
];

export default function LocationVitrine() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <ProtectedRoute>
    <div className="min-h-screen bg-[#0a0a0a] py-16 px-6">
      {!selectedPlan ? (
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Choisissez votre formule
            </h1>
            <p className="text-gray-400 text-lg">
              Des solutions adaptées à vos besoins
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {plans.map((plan) => (
              <PriceCard
                key={plan.id}
                plan={plan}
                onSelectPlan={handleSelectPlan}
              />
            ))}
          </div>
        </div>
      ) : (
        <Select_Duration
          setSelectedPlan={setSelectedPlan}
          planName={selectedPlan.name}
          monthlyPrice={selectedPlan.monthlyPrice}
          annualSetupFee={selectedPlan.annualSetupFee}
          paymentUrls={selectedPlan.paymentUrls}
        />
      )}
    </div>
    </ProtectedRoute>
  );
}
