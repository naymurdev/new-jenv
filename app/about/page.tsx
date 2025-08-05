import React from "react";
import About from "@/components/view/about";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Evlogia Labs Pvt Ltd",
  description:
    "We are an AI-driven company creating intelligent solutions to empower businesses and individuals, from predictive analytics to automation.",
};

function page() {
  return (
    <main className="font-satoshi">
      <About />;
    </main>
  );
}

export default page;
