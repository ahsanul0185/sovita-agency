

import SelectSiteType from "@/component/get-started/SelectSiteType";
import ProtectedRoute from "@/component/ProtectedRoute";

export default async function Select_choice() {

  
  return (
    <ProtectedRoute>
    <SelectSiteType
      routeVitrine="location/vitrine"
      routeEcommerce="location/ecommerce"
    /></ProtectedRoute>
  );
}
