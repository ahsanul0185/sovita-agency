"use client";

import { ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SelectSiteType({routeVitrine, routeEcommerce}) {
    const router = useRouter();

    const handleNavigation = (route) => {
        router.push(route);
    };

    return (
        <div className="min-h-screen bg-[#0a0a0a] py-16 px-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
                    Quel type de site internet souhaitez-vous ?
                </h1>

                <div className="space-y-8">
                    {/* Site Vitrine */}
                    <div 
                        onClick={() => handleNavigation(routeVitrine)}
                        className="border-2 cursor-pointer border-[#007bf4]/30 rounded-xl p-8 hover:border-[#007bf4] relative hover:bg-[#007bf4]/5 transition-all duration-200"
                    ><ArrowUpRight className="absolute top-4 right-4 size-10" />
                        
                        <h2 className="text-2xl font-semibold text-white mb-2">
                            Site vitrine: <span className="text-[#007bf4]">Cliquez ICI</span>
                        </h2>
                        <h3 className="text-xl text-gray-300 mb-4">
                            Offrez-vous un site internet « clé en main »
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                            Qualité, originalité, design actuel et surtout hébergement sécurisé tels sont les objectifs que nous nous fixons au quotidien pour satisfaire nos clients. Notre studio graphique, fort de son expérience en création web et conception de sites depuis plusieurs années, vous offrira un site au design soigné, basé sur votre identité visuelle et optimisé pour votre activité. Pour plus de confort, nous gérons en interne le développement et l'hébergement de votre site pour un service totalement « clé en main »!
                        </p>
                    </div>

                    {/* Divider */}
                    <div className="flex items-center justify-center">
                        <div className="flex-1 h-px bg-gray-800"></div>
                        <span className="px-6 text-gray-500 font-medium">Ou</span>
                        <div className="flex-1 h-px bg-gray-800"></div>
                    </div>

                    {/* Site E-commerce */}
                    <div 
                        onClick={() => handleNavigation(routeEcommerce)}
                        className="border-2 cursor-pointer border-[#007bf4]/30 rounded-xl p-8 hover:border-[#007bf4] relative hover:bg-[#007bf4]/5 transition-all duration-200"
                    >
                        <ArrowUpRight className="absolute top-4 right-4 size-10" />
                        <h2 className="text-2xl font-semibold text-white mb-2">
                            Site e-commerce: <span className="text-[#007bf4]">Cliquez ICI</span>
                        </h2>
                        <h3 className="text-xl text-gray-300 mb-4">
                            Offrez-vous un site e-commerce « clé en main »
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                            Un site e-commerce est un site internet qui permet de créer sa boutique en ligne et de proposer ses produits et services directement à la vente avec paiement en ligne. Il permet soit de compléter votre activité, soit de vous lancer directement sur le web en pure-player!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}



// "use client";

// import Link from "next/link";

// export default function SelectSiteType({routeVitrine, routeEcommerce}) {
//     return (
//         <div className="min-h-screen bg-[#0a0a0a] py-16 px-6">
//             <div className="max-w-4xl mx-auto">
//                 <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
//                     Quel type de site internet souhaitez-vous ?
//                 </h1>

//                 <div className="space-y-8">
//                     {/* Site Vitrine */}
//                     <Link 
//                         href={routeVitrine}
//                         className="block border-2 cursor-pointer border-[#007bf4]/30 rounded-xl p-8 hover:border-[#007bf4] hover:bg-[#007bf4]/5 transition-all duration-200"
//                     >
//                         <h2 className="text-2xl font-semibold text-white mb-2">
//                             Site vitrine: <span className="text-[#007bf4]">Cliquez ICI</span>
//                         </h2>
//                         <h3 className="text-xl text-gray-300 mb-4">
//                             Offrez-vous un site internet « clé en main »
//                         </h3>
//                         <p className="text-gray-400 leading-relaxed">
//                             Qualité, originalité, design actuel et surtout hébergement sécurisé tels sont les objectifs que nous nous fixons au quotidien pour satisfaire nos clients. Notre studio graphique, fort de son expérience en création web et conception de sites depuis plusieurs années, vous offrira un site au design soigné, basé sur votre identité visuelle et optimisé pour votre activité. Pour plus de confort, nous gérons en interne le développement et l'hébergement de votre site pour un service totalement « clé en main »!
//                         </p>
//                     </Link>

//                     {/* Divider */}
//                     <div className="flex items-center justify-center">
//                         <div className="flex-1 h-px bg-gray-800"></div>
//                         <span className="px-6 text-gray-500 font-medium">Ou</span>
//                         <div className="flex-1 h-px bg-gray-800"></div>
//                     </div>

//                     {/* Site E-commerce */}
//                     <Link 
//                         href={routeEcommerce}
//                         className="block border-2 cursor-pointer border-[#007bf4]/30 rounded-xl p-8 hover:border-[#007bf4] hover:bg-[#007bf4]/5 transition-all duration-200"
//                     >
//                         <h2 className="text-2xl font-semibold text-white mb-2">
//                             Site e-commerce: <span className="text-[#007bf4]">Cliquez ICI</span>
//                         </h2>
//                         <h3 className="text-xl text-gray-300 mb-4">
//                             Offrez-vous un site e-commerce « clé en main »
//                         </h3>
//                         <p className="text-gray-400 leading-relaxed">
//                             Un site e-commerce est un site internet qui permet de créer sa boutique en ligne et de proposer ses produits et services directement à la vente avec paiement en ligne. Il permet soit de compléter votre activité, soit de vous lancer directement sur le web en pure-player!
//                         </p>
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     );
// }