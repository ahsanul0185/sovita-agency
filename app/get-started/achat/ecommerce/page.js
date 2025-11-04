"use client";

import Purchase_form from "@/component/get-started/PurchaseForm";
import SitePlanCard from "@/component/get-started/SitePlanCard";
import ProtectedRoute from "@/component/ProtectedRoute";
import { useState } from "react";

export const plans = [
  {
    id: "starter",
    name: "Starter",
    subtitle: "Idéal pour débuter rapidement",
    price: 599,
    features: [
      "Payer 50% acompte, le reste à la livraison",
      "10 produits intégrés par Shikam sur votre boutique",
      "5 catégories de produits intégrées par Shikam sur votre boutique",
      "Choix d’un thème graphique design prêt à l’emploi pour un gain de temps et de budget",
    ],
  },
  {
    id: "open-un",
    name: "Open Un",
    subtitle: "Démarrage rapide avec options complémentaires",
    price: 999,
    features: [
      "Payer 50% acompte, le reste à la livraison",
      "20 produits intégrés par Shikam sur votre boutique",
      "10 catégories de produits intégrées par Shikam sur votre boutique",
      "Choix d’un thème graphique design prêt à l’emploi pour un gain de temps et de budget",
    ],
  },
  {
    id: "essentiel",
    name: "Essentiel",
    subtitle: "Un site internet personnalisé à budget maîtrisé",
    price: 1499,
    features: [
      "Payer 50% acompte, le reste à la livraison",
      "10 produits intégrés par Shikam sur votre boutique",
      "5 catégories de produits intégrées par Shikam sur votre boutique",
      "Adaptation du thème choisi avec nos graphistes en adéquation avec votre activité",
      "Personnalisation du thème avec le service",
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
