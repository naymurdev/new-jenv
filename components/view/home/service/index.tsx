"use client";

import BuildIcon from "./build";
import IntegrationIcon from "./integration";
import LearnIcon from "./learn";
import StrategyIcon from "./strategy";

const services = [
  {
    id: "01",
    name: "Strategy Sprint",
    icon: () => <img src="/strategy-icon.png" alt="strategy" />,
    description:
      "Cut through the noise. We map your idea, giving you a plan that’s  buildable",
    image: "/placeholder.svg?height=200&width=280",
  },
  {
    id: "02",
    name: "Zero-to-One Build",
    icon: () => <img src="/zero-to-one-build2.png" alt="strategy" />,
    description:
      "We design & engineer the MVP in parallel so you get a market-ready product fast",
    image: "/placeholder.svg?height=200&width=280",
  },
  {
    id: "03",
    name: "Smart Integrations",
    icon: () => <img src="/integrations.png" alt="strategy" />,
    description:
      "We plug in what matters — payments, automations, AI where it’s useful",
    image: "/placeholder.svg?height=200&width=280",
  },
  {
    id: "04",
    name: "Pilot & Learn",
    icon: () => <img src="/learn2.png" alt="strategy" />,
    description: "Launch to real users, gather signals, and refine",
    image: "/placeholder.svg?height=200&width=280",
  },
];

function Service() {
  return (
    <section className="relative z-10 text-center pt-32 xl:container mx-auto 2xl:px-0 px-10">
      <article>
        <span className="text-center block w-fit mx-auto bg-orange text-white px-5 py-2 rounded-full">
          Service
        </span>
        <h1 className="xl:text-8xl md:text-7xl sm:text-6xl text-4xl text-transparent bg-clip-text bg-gradient-to-b from-neutral-100 via-neutral-50 to-neutral-500 text-center">
          How we help you
        </h1>
      </article>
      <div className="px-10 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-20">
          {services.map((service) => (
            <div key={service.id} className="overflow-hidden border-l border-neutral-500 first:border-none p-4">
              <div className="relative aspect-[4/3]">
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-gray-200 text-lg font-medium">
                    {service.id}
                  </span>
                </div>
                <service.icon/>
             
              </div>
              <div className="text-left">
                <h1 className="text-white text-4xl">{service.name}</h1>
                <p className="text-gray-400 text-sm mt-2">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Service;
