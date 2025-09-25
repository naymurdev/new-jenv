import { MoveRight } from "lucide-react";
import AnimatedBackground from "@/components/ui/animated-gradient";
import Heading from "@/components/common/heading";
import Image from "next/image";
import { TimelineContent } from "@/components/ui/timeline-animation";

export default function TestimonialSection() {
  return (
    <section className="relative z-10 text-center 2xl:px-0 sm:px-10 px-4 2xl:max-w-7xl max-w-6xl mx-auto py-32">
      <Heading
        badge="Success Stories"
        title="People Who Actually Paid Us"
        description="Forget the buzzwords. Here’s what real clients have to say about their experience working with JENV—the wins, the process, and the results that truly matter."
      />
      <div className="xl:px-0 px-4 mt-10">
        <div className="md:grid grid-cols-1 md:grid-cols-12 border border-neutral-900 text-left">
          {/* 1st */}
          <TimelineContent
            animationNum={1}
            className="col-span-6 bg-neutral-950 p-8 rounded-l-xl"
          >
            <p className="text-neutral-300 mb-8 leading-[150%]">
              The team did an amazing job building a product website for my
              brand, which really elevated how we present ourselves to
              customers.
              <br />
              Their
              <span className="bg-orange-500/20 border px-1 border-orange-500">
                support
              </span>{" "}
              on the tech side made the whole
              <span className="bg-orange-500/20 border px-1 border-orange-500">
                process smooth and stress-free.
              </span>{" "}
              I’ve been working with them for a few months now, and their work
              has truly helped strengthen my brand.
            </p>
            <div className="border-t border-orange-900 pt-3 flex justify-between text-white items-center">
              <div className="flex items-center gap-2">
                <div className="h-14 w-14 rounded-full bg-emerald-500 flex items-center justify-center">
                  <Image
                    src="/koyal_kiran.jpg"
                    alt="logo"
                    width={100}
                    height={100}
                    className="w-full h-full rounded-full object-cover"
                  />
                  <span className="sr-only">Koyal Kiran</span>
                </div>
                <div>
                  <p className="font-medium">Koyal Kiran</p>
                  <p className="text-gray-300">CEO, Magniz</p>
                </div>
              </div>
              <div className="w-fit px-2 bg-neutral-900 gap-2 rounded-full flex items-center justify-center group">
                <span className="text-lg group-hover:text-orange-500">
                  Magniz
                </span>
                <MoveRight className="shrink-0 text-gray-400 group-hover:text-orange-500" />
              </div>
            </div>
          </TimelineContent>

          {/* 2nd */}
          <TimelineContent
            animationNum={2}
            className="col-span-6 bg-neutral-900 rounded-rt-lg p-8 text-white flex flex-col justify-between"
          >
            <p className="text-neutral-300 mb-8">
              JENV’s web development expertise gave us unmatched flexibility in
              creating digital experiences.{" "}
              <span className="italic text-white">
                No rigid templates, no limits.
              </span>{" "}
              Their modular approach helped us test ideas faster, iterate with
              ease, and launch a custom platform in record time. They saved us
              weeks of effort and made our site feel truly unique.
            </p>
            <div className="border-t border-dashed border-neutral-950 pt-6 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="h-8 w-8 rounded-full bg-orange-500 flex items-center justify-center">
                  <span className="sr-only">Jamir O.</span>
                </div>
                <div>
                  <p className="font-medium">Jamir O.</p>
                  <p className="text-gray-300">Creative Developer</p>
                </div>
              </div>
              <div className="w-fit px-2 bg-neutral-950 rounded-full flex items-center justify-center group">
                <img
                  src={`${process.env.NEXT_PUBLIC_URL}/customer/eventbrite.png`}
                  alt="logos"
                  className="w-24 grayscale group-hover:grayscale-0"
                />
                <MoveRight className="shrink-0 text-gray-400" />
              </div>
            </div>
          </TimelineContent>

          {/* 3rd */}
          <TimelineContent
            animationNum={3}
            className="col-span-6 bg-orange-600 p-8 relative flex flex-col justify-between"
          >
            <div className="space-y-4 py-2 pb-4">
              <h1 className="text-2xl space-y-2">
                We never imagined scaling with AI this easily{" "}
                <span className="bg-white/40 border border-white px-0.5 block w-fit">
                  Until JENV changed everything.
                </span>
              </h1>
              <p className="text-white/80 leading-relaxed">
                Our team went from handling repetitive tasks manually to
                streamlining everything with AI-powered solutions. From smart
                automation to advanced integrations, JENV gave us tools that
                saved time and boosted performance. It feels like our business
                finally runs on autopilot.
              </p>
            </div>
            <div className="border-t mt-auto border-orange-500 pt-6 flex justify-between items-center">
              <div>
                <p className="font-medium">Isabelle Thorne</p>
                <p className="text-gray-300">Co-Founder & Tech Lead</p>
              </div>
              <div className="h-12 w-12 rounded-full overflow-hidden bg-gray-200 relative">
                <img
                  src={`${process.env.NEXT_PUBLIC_URL}/people/aam3.jpg`}
                  alt="Isabelle Thorne"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
            </div>
          </TimelineContent>

          {/* 4th */}
          <TimelineContent
            animationNum={4}
            className="col-span-3 bg-neutral-950 relative grid place-content-center group overflow-hidden transition-all"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-96 object-cover"
            >
              <source
                src="https://www.pexels.com/download/video/7262257"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <div className="absolute transition-all duration-300 ease-in bottom-0 left-0 flex flex-col justify-between p-8">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-emerald-500 flex items-center justify-center">
                    <span className="sr-only">Nico R.</span>
                    <img
                      src={`${process.env.NEXT_PUBLIC_URL}/people/aam3.jpg`}
                      alt="Nico R"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Nico R.</p>
                    <p className="text-gray-600">Growth Marketer</p>
                  </div>
                </div>
              </div>
            </div>
          </TimelineContent>

          {/* 5th */}
          <TimelineContent
            animationNum={5}
            className="col-span-3 bg-neutral-900 p-8 flex flex-col justify-between relative"
          >
            <div className="absolute top-0 left-0 w-full h-0.5 border border-dashed border-neutral-950"></div>
            <AnimatedBackground />
            <p className="text-neutral-300 mb-8">
              Managing large teams became effortless with JENV’s systems. Their
              scalable solutions for collaboration and content management
              removed all technical roadblocks. Now, our designers, marketers,
              and developers work in sync — and our productivity has
              skyrocketed.
            </p>
            <div className="border-t border-neutral-950 pt-6 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-emerald-500 flex items-center justify-center">
                  <span className="sr-only">Rina A.</span>
                  <img
                    src={`${process.env.NEXT_PUBLIC_URL}/people/aam4.jpg`}
                    alt="Rina A."
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium">Rina A.</p>
                  <p className="text-gray-600">Operations Director</p>
                </div>
              </div>
            </div>
          </TimelineContent>
        </div>
      </div>
    </section>
  );
}
