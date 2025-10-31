import SelectSiteType from "@/component/get-started/SelectSiteType";

export default async function Select_choice() {
  return (
    <SelectSiteType
      routeVitrine="location/vitrine"
      routeEcommerce="location/ecommerce"
    />
  );
}
