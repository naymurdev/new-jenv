import People from "@/components/view/home/people";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Creative People | Evlogia Labs Pvt Ltd",
  description:
    "We are an AI-driven company creating intelligent solutions to empower businesses and individuals, from predictive analytics to automation.",
};
function page() {
  return (
    <main className="font-satoshi">
      <People />
    </main>
  );
}

export default page;
