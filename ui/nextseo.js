"use client"

import { NextSeo as Seo } from "next-seo";

export function NextSeo({title,description}) {
  return (
    <Seo title={title} description={description} />
  )
}
