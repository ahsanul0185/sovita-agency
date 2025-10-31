import qs from "qs";
import { unstable_noStore as noStore } from "next/cache";

import { flattenAttributes, getStrapiURL } from "./util";

const baseUrl = getStrapiURL();

async function fetchData(url) {
  const authToken = null; // we will implement this later getAuthToken() later
  const headers = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
    cache: "no-store",
  };

  try {
    const response = await fetch(url, authToken ? headers : {});
    const data = await response.json();
    return flattenAttributes(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // or return null;
  }
}

export const PAGES = {
  home:"home-page",
  create_site:"create-site",
  local_seo:"local-seo",
  google_ads_manager:"google-ads-manager",
  google_bussiness_profile:"google-bussiness-profile",
  seo:"seo",
  tictok:"tictok",
  our_project:"our-project",
  communication_service:"communication-service",
  request_quote:"request-quote",
  privacy_policy:"privacy-policy",
  terms_of_use:"terms-of-use",
}

const dummyMeta = {
  page_title: "Default Title",
  page_desc: [
    {
      children: [
        { text: "Default description text." }
      ]
    }
  ],
  keywords: [
    { keyword: "default" },
    { keyword: "example" }
  ]
};

export async function get_page_meta(page) {
  const url = new URL(`/api/${page}`, baseUrl);
  url.search = qs.stringify({ populate: "*" })

  return dummyMeta
  // return await fetchData(url.href);
}


