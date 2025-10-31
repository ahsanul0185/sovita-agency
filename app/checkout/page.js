"use client";

import { Suspense } from "react";
import CheckoutContent from "./CheckoutContent";

export default function Checkout() {
  return (
    <Suspense fallback={<div className="h-screen grid place-items-center">Loading checkout...</div>}>
      <CheckoutContent />
    </Suspense>
  );
}
