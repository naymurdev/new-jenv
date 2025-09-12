"use client";

import Heading from "@/components/common/heading";
import BuildIcon from "./build";
import IntegrationIcon from "./integration";
import LearnIcon from "./learn";
import StrategyIcon from "./strategy";
import { cn } from "@/lib/utils";

const services = [
  {
    id: "01",
    name: "Strategy Sprint",
    icon: () => <StrategyIcon className="w-full h-full p-2" />,
    description:
      "Forget the post-it notes. We cut through the noise and hand you a plan that won’t collapse the second code touches it.",
    image: "/placeholder.svg?height=200&width=280",
  },
  {
    id: "02",
    name: "Zero-to-One Build",
    icon: () => <BuildIcon className="w-full h-full p-2" />,
    description:
      "Designers and engineers, side by side, moving fast. You’ll get a market-ready product before most teams finish “alignment workshops.”",
    image: "/placeholder.svg?height=200&width=280",
  },
  {
    id: "03",
    name: "Smart Integrations",
    icon: () => <IntegrationIcon className="w-full h-full p-2" />,
    description:
      "Payments? Automations? AI that actually earns its keep? We wire it in without the shiny nonsense no one uses.",
    image: "/placeholder.svg?height=200&width=280",
  },
  {
    id: "04",
    name: "Pilot & Learn",
    icon: () => <LearnIcon className="w-full h-full p-2" />,
    description:
      "Launch. Break it. Fix it. Repeat. That’s how you turn half-baked ideas into real businesses.",
    image: "/placeholder.svg?height=200&width=280",
  },
];

function Service() {
  return (
    <section className="relative z-10 text-center pt-32 2xl:max-w-7xl max-w-6xl mx-auto 2xl:px-0 sm:px-10 px-4">
      <Heading
        badge="Service"
        title="What We Actually Do"
        description="Strategy is useless until it survives production."
      />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:py-20 py-10">
          {services.map((service) => (
            <div
              key={service.id}
              className={cn("border-r group border-neutral-500 last:border-none sm:p-4 p-1", service.id === "02" && "lg:border-r border-0")}
            >
              <div className="relative w-full lg:h-52 sm:h-48 h-40">
                <service.icon />
              </div>
              <div className="text-left pt-1.5">
                <h1 className="text-white 2xl:text-4xl lg:text-3xl md:text-5xl sm:text-4xl text-xl">{service.name}</h1>
                <p className="text-gray-400 text-sm mt-2">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
    </section>
  );
}

export default Service;
