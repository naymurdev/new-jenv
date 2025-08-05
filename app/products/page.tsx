import Products from "@/components/view/products";
import { siteConfig } from "@/lib/utils";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Products | Evlogia Labs Pvt Ltd",
  description:
    "We are an AI-driven company creating intelligent solutions to empower businesses and individuals, from predictive analytics to automation.",
};

function page() {
  return (
    <main className="font-satoshi">
      <Products />
    </main>
  );
}

export default page;
