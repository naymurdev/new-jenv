import AiAgents from "@/components/view/ai-agents";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "AI Agents | Evlogia Labs Pvt Ltd",
  description:
    "We are an AI-driven company creating intelligent solutions to empower businesses and individuals, from predictive analytics to automation.",
};

function page() {
  return (
    <main className="font-satoshi">
      <AiAgents />
    </main>
  );
}

export default page;
