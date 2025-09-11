"use client";
import React, { useEffect, useState } from "react";
import GridDistortion from "@/components/common/grid-distortion";
import { AnimatePresence, motion, stagger, useAnimate } from "motion/react";
import { TeamImage } from "@/assets/team";
import Image from "next/image";
import { Plus, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import XStreamlineIcon from "../../icons/x";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ProfileCardIcon from "../../icons/linkedin";
import GlobeIcon from "../../icons/globe";

const teamPeople = [
  {
    memberName: "Ethan Kiran D’souza",
    id: 2,
    memeberHoverImg: TeamImage.team2,
    memberImage: TeamImage.EthanSprite,
    role: "Strategy Guy",
    description: [
      "Ethan is a natural leader—wise beyond his years and always getting things done right while making an impact on his community. He’s built strong connections through hard work and dedication.",
      "But, whatever you do, don’t let him drive. Ethan’s idea of road safety is “Did I hit the brake or the gas?” Also, he’s still unsure if it’s time to sleep or time to wake up. He might just stay awake all night, then wonder why he’s late for everything the next day!",
    ],
  },
  {
    memberName: "Naymur Rahman Ripon",
    id: 1,
    memeberHoverImg: TeamImage.team3,
    memberImage: TeamImage.NaymurSprite,
    role: "Web Guy",

    // description:
    //   "The creative genius behind all things visual. Naymur turns vague concepts into stunning designs while juggling endless revisions. Even when the vision keeps changing, he finds a way to bring it to life with precision and style.",
    description: [
      "Naymur is a frontend developer, UI designer, and animator.",
      "He responds to messages faster than we can type them.",
      "His designs? They're... Amazing. His ability to show up on time for meetings? He's still working on that feature. We think.",
    ],
  },
  {
    memberName: "Vaibhav K Salian",
    id: 3,
    memeberHoverImg: TeamImage.team1,
    memberImage: TeamImage.vaibhavSprite,
    role: "AI  Guy",

    description: [
      "Vaibhav is a genius when it comes to AI and development—solving complex problems like it’s second nature. Backend? Machine learning? Scalable solutions? He’s got it all covered effortlessly.",
      "But when it comes to UI/UX, that’s a different story. His design choices are… questionable at best. Color theory is just an abstract concept to him, and user experience? Let’s just say users experience something, but we’re not sure it’s good.",
      "Thankfully, his code speaks for itself—because his designs definitely shouldn’t.",
    ],
  },
  {
    memberName: "Joshua Jacob",
    id: 4,
    memeberHoverImg: TeamImage.team4,
    memberImage: TeamImage.joshua,
    role: "Consultant",
    description: [
      "JJ is the kind of developer who doesn’t say much—but when he does, it’s probably a genius solution to a problem no one else even saw coming. A master of app development, he makes things work smoothly while the rest of us just nod and pretend to understand how he does it.",
      "He’s reliable, skilled, and efficient… almost too efficient. We’re starting to think he might actually be an AI in disguise—never causing trouble, always delivering quality work… yet somehow still debugging his own ability to talk to a girl.",
    ],
  },
];

function People() {
  const [scope, animate] = useAnimate();
  const [index, setIndex] = useState(5);
  const [open, setOpen] = useState(false);
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);
  console.log(hoveredMember);
  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);
  return (
    <>
      <section
        className="2xl:container 2xl:px-0 px-10 h-full rounded-md relative z-10 mx-auto pb-5  "
        ref={scope}
      >
        <div className="h-full py-16 text-white">
          <motion.h2 className="xl:text-8xl md:text-7xl sm:text-6xl text-4xl text-transparent bg-clip-text bg-gradient-to-b from-neutral-100 via-neutral-50 to-neutral-500 text-center">
            Who we are
          </motion.h2>
          <motion.p className="text-lg text-white max-w-md mx-auto pt-2 text-center">
            We’re a small, senior team. Designers and engineers who love to
            ship.
          </motion.p>

     
          <div className="grid xl:grid-cols-4 grid-cols-2 w-full pt-10 gap-5 ">

            {teamPeople.map((member, i) => (
              <motion.div
                key={member.id}
                className={cn(
                  "relative z-2 group "
                  // "hover:-rotate-0 hover:-translate-y-24 hover:z-10"
                )}
              >
                <div className="flex items-center cursor-pointer transition-all hover: justify-center h-[25rem] rounded-lg bg-gradient-to-b from-orange via-[#f56632] to-[#fc6846]">
                  <figure className="relative h-full">
                    <motion.img
                      width={500}
                      height={600}
                      alt={member.memberName}
                      src={member.memberImage.src}
                      className="w-full h-full object-cover rounded-lg"
                      initial={{ opacity: 1 }}
                    />
                  </figure>
                  <ProgressiveBlur
                    className="pointer-events-none absolute -bottom-0 left-0 h-[35%] w-full rounded-lg"
                    blurIntensity={4}
                  />
                  <article className="text-left flex absolute bottom-0 px-4 w-full justify-between items-center text-white p-2 mt-3 rounded-lg">
                    <div className="relative w-full">
                      <h1 className=" sm:text-2xl text-sm  leading-[100%] duration-500 transition-opacity font-medium">
                        {member.memberName}{" "}
                        <span className="sm:text-xl text-sm block pt-1 text-white/80 font-normal">
                          {member.role}
                        </span>
                      </h1>
                 
                    </div>
                  </article>
                </div>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-orange via-[#f56632] to-[#fc6846] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center rounded-lg items-center w-full h-full p-4">
             
                  {/* Social icons */}
                  <div className="flex gap-4 mt-4">
                    <a
                      href="#"
                      className="hover:text-orange-400 transition-colors"
                    >
                      <XStreamlineIcon hrefLink={member.memberImage.src} />
                    </a>
                    <a
                      href="#"
                      className="hover:text-orange-400 transition-colors"
                    >
                      <ProfileCardIcon hrefLink={member.memberImage.src} />
                    </a>
                    <a
                      href="#"
                      className="hover:text-orange-400 transition-colors"
                    >
                      <GlobeIcon hrefLink={member.memberImage.src} />
                    </a>
                  </div>

                  {/* Short description (optional) */}
                  <p className="mt-4 text-center">
                    {member.description[0]}
                    {member.memberName === "Naymur Rahman Ripon" && member.description[1]}
                  </p>
                  <p className="mt-2 text-center">
                    {member.memberName === "Naymur Rahman Ripon" && member.description[2]}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </section>
    </>
  );
}

export default People;
