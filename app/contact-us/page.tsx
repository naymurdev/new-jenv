import ContactUs from "@/components/view/contact-us";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact Us | Evlogia Labs Pvt Ltd",
  description:
    "We are an AI-driven company creating intelligent solutions to empower businesses and individuals, from predictive analytics to automation.",
};

function page() {
  return (
    <main className="font-satoshi">
      <ContactUs />
    </main>
  );
}

export default page;
