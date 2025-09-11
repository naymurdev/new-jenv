"use client";

import Heading from "@/components/common/heading";
import BuildIcon from "./build";
import IntegrationIcon from "./integration";
import LearnIcon from "./learn";
import StrategyIcon from "./strategy";

const services = [
  {
    id: "01",
    name: "Strategy Sprint",
    icon: () => <StrategyIcon />,
    description:
      "Forget the post-it notes. We cut through the noise and hand you a plan that won’t collapse the second code touches it.",
    image: "/placeholder.svg?height=200&width=280",
  },
  {
    id: "02",
    name: "Zero-to-One Build",
    icon: () => <BuildIcon />,
    description:
      "Designers and engineers, side by side, moving fast. You’ll get a market-ready product before most teams finish “alignment workshops.”",
    image: "/placeholder.svg?height=200&width=280",
  },
  {
    id: "03",
    name: "Smart Integrations",
    icon: () => <IntegrationIcon />,
    description:
      "Payments? Automations? AI that actually earns its keep? We wire it in without the shiny nonsense no one uses.",
    image: "/placeholder.svg?height=200&width=280",
  },
  {
    id: "04",
    name: "Pilot & Learn",
    icon: () => <LearnIcon />,
    description: "Launch. Break it. Fix it. Repeat. That’s how you turn half-baked ideas into real businesses.",
    image: "/placeholder.svg?height=200&width=280",
  },
];

function Service() {
  return (
    <section className="relative z-10 text-center pt-32 2xl:container max-w-6xl mx-auto 2xl:px-0 px-10">
      <Heading badge="Service" title="What We Actually Do" description="Strategy is useless until it survives production"/>
      {/* <article>
        <span className="text-center block w-fit mx-auto bg-orange text-white px-5 py-2 rounded-full">
          Service
        </span>
        <h1 className="xl:text-8xl md:text-7xl sm:text-6xl text-4xl text-transparent bg-clip-text bg-gradient-to-b from-neutral-100 via-neutral-50 to-neutral-500 text-center">
        What We Actually Do
        </h1>
        <p className="text-lg text-white max-w-md mx-auto pt-2 text-center">
        Strategy is useless until it survives production
        </p>
      </article> */}
      <div className="px-10 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-20">
          {services.map((service) => (
            <div key={service.id} className="border-l group border-neutral-500 first:border-none p-4">
              <div className="relative aspect-[4/3]">
              {/* <div className="absolute top-10 left-0 h-50 w-[70%] rounded-2xl bg-gradient-to-b from-orange via-orange-800/20 to-orange-900/20 -z-10 blur-xl"></div> */}
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
