import Breadcrumb from "@/component/get-started/Breadcrumb";


export default function GetStartedLayout({ children }) {
  return (
    <div className="p-6">
      <Breadcrumb /> {/* will appear on /get-started and all nested routes */}
      <div className="text-center px-4 py-2 border border-gray-200/40 rounded w-fit mx-auto mt-6 mb-12 text-main-blue">Contacter notre équipe de 9h à 18h au 07 44 31 33 49 (appel gratuit)</div>
      {children}    {/* renders the actual page content */}
    </div>
  );
}
