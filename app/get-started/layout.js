import Breadcrumb from "@/component/get-started/Breadcrumb";


export default function GetStartedLayout({ children }) {
  return (
    <div className="p-6">
      <Breadcrumb /> {/* will appear on /get-started and all nested routes */}
      {children}    {/* renders the actual page content */}
    </div>
  );
}
