import SelectSiteType from "@/component/get-started/SelectSiteType";
import ProtectedRoute from "@/component/ProtectedRoute";

export default async function Select_choice() {
    return (
      <ProtectedRoute>
       <SelectSiteType routeVitrine="achat/vitrine" 
  routeEcommerce="achat/ecommerce" />
  </ProtectedRoute>
    );
}