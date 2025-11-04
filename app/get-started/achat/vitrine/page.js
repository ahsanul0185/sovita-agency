"use client";

import Purchase_form from "@/component/get-started/PurchaseForm";
import SitePlanCard from "@/component/get-started/SitePlanCard";
import ProtectedRoute from "@/component/ProtectedRoute";
import { useState } from "react";

export const plans = [
  {
    id: "simplicite",
    name: "Simplicité",
    subtitle: "Site sur une seule page",
    price: 249,
    features: [
      "Payer 50% acompte, le reste à la livraison",
      "Site sur une seule page créé et optimisé par Shikam",
      "Site optimisé pour les mobiles, tablettes et ordinateurs",
      "Hors hébergement et maintenance",
    ],
  },
  {
    id: "credibilite",
    name: "Crédibilité",
    subtitle: "Site sur plusieurs pages",
    price: 599,
    features: [
      "Payer 50% acompte, le reste à la livraison",
      "Site sur plusieurs pages (jusqu’à 10 pages) créé et optimisé par Shikam",
      "Site optimisé pour les mobiles, tablettes et ordinateurs",
      "Hors hébergement et maintenance",
    ],
  },
  {
    id: "performance",
    name: "Performance",
    subtitle: "Site optimisé pour le référencement",
    price: 1020,
    features: [
      "Payer 50% acompte, le reste à la livraison",
      "Site sur plusieurs pages (jusqu’à 10 pages) créé et optimisé par Shikam",
      "Site optimisé pour les mobiles, tablettes et ordinateurs",
      "Suivi de la position du site sur Google : 10 mots-clés",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    subtitle: "Site avec design et conseils premium",
    price: 1796,
    features: [
      "Payer 50% acompte, le reste à la livraison",
      "Site sur plusieurs pages (jusqu’à 20 pages) créé et optimisé par Shikam",
      "Site optimisé pour les mobiles, tablettes et ordinateurs",
      "Suivi de la position du site sur Google : 15 mots-clés",
      "Design premium",
    ],
  },
];

export default function Achat_vitrine() {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);

    console.log(selectedPlan) 
  };

  return (
    <ProtectedRoute>
    <div className="max-w-7xl mx-auto">
      {!selectedPlan ? <div>
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
          <SitePlanCard
            key={plan.id}
            plan={plan}
            onSelectPlan={handleSelectPlan}
          />
        ))}
      </div>
      </div> : <Purchase_form selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan}/>}
    </div>
    </ProtectedRoute>
  );
}
