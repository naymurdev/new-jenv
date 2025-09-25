import React from "react";
import TextAnimation from "../ui/scroll-text";
import { delay } from "motion/react";

function Heading({
  badge,
  title,
  description,
}: {
  badge?: string;
  title: string;
  description: string;
}) {
  return (
    <article>
      {badge && (
        <TextAnimation
          as="span"
          text={badge}
          lineAnime
          viewport={{ amount: 0.4, margin: "0px 0px -120px 0px", once: true }}
          variants={{
            hidden: { filter: "blur(10px)", opacity: 0, y: 20 },
            visible: {
              filter: "blur(0px)",
              opacity: 1,
              y: 0,
              transition: { ease: "linear" },
            },
          }}
          lineAnimeClassName="text-center block w-fit sm:text-base text-sm mx-auto bg-orange text-white sm:px-3 px-2 sm:py-1 py-1 rounded-full"
        />
      )}
      <TextAnimation
        text={title}
        viewport={{ amount: 0.4, margin: "0px 0px -120px 0px", once: true }}
        variants={{
          hidden: { filter: "blur(10px)", opacity: 0, y: 20 },
          visible: {
            filter: "blur(0px)",
            opacity: 1,
            y: 0,
            delay: 0.5,
            transition: { ease: "linear" },
          },
        }}
        className="2xl:text-8xl xl:text-7xl md:text-6xl w-fit mx-auto capitalize sm:text-5xl leading-[125%] text-4xl font-normal text-neutral-200 text-center"
      />
      {/* <p className="text-lg text-white 2xl:max-w-xl max-w-lg mx-auto pt-2 text-center">
        {description}
      </p> */}
      <TextAnimation
        as="p"
        text={description}
        lineAnime
        viewport={{ amount: 0.4, margin: "0px 0px -120px 0px", once: true }}
        variants={{
          hidden: { filter: "blur(10px)", opacity: 0, y: 2 },
          visible: {
            filter: "blur(0px)",
            opacity: 1,
            y: 0,
            delay: 1,
            transition: { ease: "linear" },
          },
        }}
        className="text-lg text-white 2xl:max-w-xl max-w-lg mx-auto pt-2 text-center"
      />
    </article>
  );
}

export default Heading;
