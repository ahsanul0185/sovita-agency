import { ArrowRight } from "lucide-react";

export default function PriceCard({ plan, onSelectPlan  }) {
  return (
    <div className="border-2 flex flex-col justify-between border-[#007bf4]/30 rounded-xl p-6 hover:border-[#007bf4] transition-all duration-200">
      <div>
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
          <p className="text-gray-400 text-sm">{plan.subtitle}</p>
        </div>

        <div className="mb-6">
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-4xl font-bold text-white">
              {plan.monthlyPrice}€
            </span>
            <span className="text-gray-400">HT/mois</span>
          </div>
          <p className="text-sm text-gray-500">
            + {plan.annualSetupFee}€ HT frais de création
          </p>
        </div>

        <div className="mb-6 space-y-3">
          {plan.features.map((feature, index) => (
            <div key={index} className="flex items-start gap-2">
              <span className="bg-[#007bf4] size-1.5 mt-2 shrink-0 rounded-full"></span>
              <p className="text-gray-400 text-sm">{feature}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <button
          onClick={() => {onSelectPlan (plan)}}
          className={`w-full py-3 px-4 rounded-lg text-sm font-medium transition-all duration-200 border-2 border-[#007bf4]/30 text-center text-white bg-main-blue hover:bg-blue-700 cursor-pointer group flex items-center gap-3 justify-center`}
        >
          Choisir{" "}
          <ArrowRight className="group-hover:translate-x-1 duration-200 ease-out" />
        </button>
      </div>
    </div>
  );
}
