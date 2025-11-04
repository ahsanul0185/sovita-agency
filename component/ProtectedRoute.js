"use client"

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProtectedRoute({ children }) {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const submitted = localStorage.getItem("customerInfoSubmitted");
    if (submitted !== "true") {
      router.push("/get-started/customer-info");
    } else {
      setIsAuthorized(true);
    }
  }, [router]);

  if (!isAuthorized) {
    return null; // or a loading spinner
  }

  return <>{children}</>;
}