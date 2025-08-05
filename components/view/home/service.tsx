"use client";

const services = [
  {
    id: "01",
    name: "Service Name",
    description: "We tactically expand your brand into the digital world.",
    image: "/placeholder.svg?height=200&width=280",
  },
  {
    id: "02",
    name: "Service Name",
    description: "We tactically expand your brand into the digital world.",
    image: "/placeholder.svg?height=200&width=280",
  },
  {
    id: "03",
    name: "Service Name",
    description: "We tactically expand your brand into the digital world.",
    image: "/placeholder.svg?height=200&width=280",
  },
  {
    id: "04",
    name: "Service Name",
    description: "We tactically expand your brand into the digital world.",
    image: "/placeholder.svg?height=200&width=280",
  },
];

function Service() {
  return (
    <section className="relative z-10 text-center pt-32 container mx-auto 2xl:px-0 px-10">
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
            <div
              key={service.id}
              className="overflow-hidden border-r border-neutral-400"
            >
              <div className="relative">
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-gray-200 text-lg font-medium">
                    {service.id}
                  </span>
                </div>
                <div className="aspect-[4/3] ">
                  {/* <img
                    src={service.image || "/placeholder.svg"}
                    alt={`${service.name} illustration`}
                    className="w-full h-full object-cover"
                  /> */}
                </div>
              </div>
              <div className="p-2 text-left">
                <h3 className="text-white text-2xl font-semibold tracking-wider">
                  {service.name}
                </h3>
                <p className="text-gray-400 leading-relaxed">
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
