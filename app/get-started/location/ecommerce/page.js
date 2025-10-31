"use client";

import PriceCard from "@/component/get-started/PriceCard";
import Select_Duration from "@/component/get-started/SelectDuration";
import { useState } from "react";

const plans = [
  {
    id: "starter",
    name: "Starter",
    subtitle: "Idéal pour débuter rapidement",
    monthlyPrice: 69,
    annualSetupFee: 100,
    paymentUrls: {
      plan1: "https://billing.zohosecure.eu/subscribe/81b154bbf365d22b13a4400037b3f42adc1a4921d2db0ed8651bdda4a1c7d344/501",
      plan2: "https://billing.zohosecure.eu/subscribe/81b154bbf365d22b13a4400037b3f42adc1a4921d2db0ed8651bdda4a1c7d344/502",
      plan3: "https://billing.zohosecure.eu/subscribe/81b154bbf365d22b13a4400037b3f42adc1a4921d2db0ed8651bdda4a1c7d344/503",
      plan4: "https://billing.zohosecure.eu/subscribe/81b154bbf365d22b13a4400037b3f42adc1a4921d2db0ed8651bdda4a1c7d344/504",
    },
    features: [
      "Hébergement et maintenance inclus – Engagement 12 mois.",
      "10 produit Intégré par Shikam sur votre boutique",
      "5 categorie de produit intégré par Shikam sur votre boutique",
      "Choix d’un thème graphique Design prêt à l’emploi pour un gain de temps et de budget",
      "Hébergement et maintenance inclus – Engagement 12 mois.",
    ],
  },
  {
    id: "open-un",
    name: "Open Un",
    subtitle: "Démarrage rapide avec options complémentaires",
    monthlyPrice: 99,
    annualSetupFee: 100,
    paymentUrls: {
      plan1: "https://billing.zohosecure.eu/subscribe/81b154bbf365d22b13a4400037b3f42adc1a4921d2db0ed8651bdda4a1c7d344/601",
      plan2: "https://billing.zohosecure.eu/subscribe/81b154bbf365d22b13a4400037b3f42adc1a4921d2db0ed8651bdda4a1c7d344/602",
      plan3: "https://billing.zohosecure.eu/subscribe/81b154bbf365d22b13a4400037b3f42adc1a4921d2db0ed8651bdda4a1c7d344/603",
      plan4: "https://billing.zohosecure.eu/subscribe/81b154bbf365d22b13a4400037b3f42adc1a4921d2db0ed8651bdda4a1c7d344/604",
    },
    features: [
      "Hébergement et maintenance inclus – Engagement 12 mois.",
      "20 produit Intégré par Shikam sur votre boutique",
      "10 categorie de produit intégré par Shikam sur votre boutique",
      "Choix d’un thème graphique Design prêt à l’emploi pour un gain de temps et de budget",
    ],
  },
  {
    id: "essentiel",
    name: "Essentiel",
    subtitle: "Un site internet personnalisé à budget maitrisé",
    monthlyPrice: 129,
    annualSetupFee: 100,
    paymentUrls: {
      plan1: "https://billing.zohosecure.eu/subscribe/81b154bbf365d22b13a4400037b3f42adc1a4921d2db0ed8651bdda4a1c7d344/701",
      plan2: "https://billing.zohosecure.eu/subscribe/81b154bbf365d22b13a4400037b3f42adc1a4921d2db0ed8651bdda4a1c7d344/702",
      plan3: "https://billing.zohosecure.eu/subscribe/81b154bbf365d22b13a4400037b3f42adc1a4921d2db0ed8651bdda4a1c7d344/703",
      plan4: "https://billing.zohosecure.eu/subscribe/81b154bbf365d22b13a4400037b3f42adc1a4921d2db0ed8651bdda4a1c7d344/704",
    },
    features: [
      "Hébergement et maintenance inclus – Engagement 12 mois.",
      "10 produit Intégré par Shikam sur votre boutique",
      "5 categorie de produit intégré par Shikam sur votre boutique",
      "Adaptation du thème choisi avec nos graphistes en adéquation avec votre activité",
      "Personnalisation du theme avec le service",
    ],
  },
  {
    id: "premium-creation",
    name: "Premium Création",
    subtitle: "100% sur-mesure",
    monthlyPrice: 199,
    annualSetupFee: 100,
    paymentUrls: {
      plan1: "https://billing.zohosecure.eu/subscribe/81b154bbf365d22b13a4400037b3f42adc1a4921d2db0ed8651bdda4a1c7d344/801",
      plan2: "https://billing.zohosecure.eu/subscribe/81b154bbf365d22b13a4400037b3f42adc1a4921d2db0ed8651bdda4a1c7d344/802",
      plan3: "https://billing.zohosecure.eu/subscribe/81b154bbf365d22b13a4400037b3f42adc1a4921d2db0ed8651bdda4a1c7d344/803",
      plan4: "https://billing.zohosecure.eu/subscribe/81b154bbf365d22b13a4400037b3f42adc1a4921d2db0ed8651bdda4a1c7d344/804",
    },
    features: [
      "Hébergement et maintenance inclus – Engagement 12 mois.",
      "20 produit Intégré par Shikam sur votre boutique",
      "10 categorie de produit intégré par Shikam sur votre boutique",
      "Conception graphique 100% sur-mesure avec le service création",
      "Démarrage à partir d’une page blanche pour correspondre parfaitement à vos attentes",
    ],
  },
];



export default function LocationEcommerce() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
  };

  return (
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
  );
}
