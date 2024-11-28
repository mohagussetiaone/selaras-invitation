"use client";

import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("scrollYProgress:", latest);

    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
      const distance = Math.abs(latest - breakpoint);
      if (distance < Math.abs(latest - cardsBreakpoints[acc]) || latest >= 1) {
        return index;
      }
      return acc;
    }, 0);

    console.log("closestBreakpointIndex:", closestBreakpointIndex);
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = ["var(--background)", "var(--background)", "var(--background)", "var(--background)"];
  const images = [
    "https://img.freepik.com/premium-photo/wedding-invitation-phone_1029473-748930.jpg?w=900",
    "https://img.freepik.com/free-vector/wedding-rsvp-card_23-2147967734.jpg?t=st=1732788385~exp=1732791985~hmac=bfc7017d89280e93de5ffa12594056dd706927419bf7d1d3dea9646a269fe4eb&w=740",
    "https://img.freepik.com/free-vector/wedding-menu-template_23-2148046554.jpg?t=st=1732788396~exp=1732791996~hmac=36238cf5d8bf52aabaa492889197ad2f8dc36162bff1a78d3b2daef31b158223&w=740",
    "https://img.freepik.com/free-vector/boho-frame-wedding-card-template_23-2149268489.jpg?t=st=1732802929~exp=1732806529~hmac=78a85abc538e22a573320d3b2c83f10a38a45145dfe690f07281676218962080&w=740",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(images[0]);

  useEffect(() => {
    setBackgroundGradient(images[activeCard % images.length]);
  }, [activeCard]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="h-[30rem] overflow-y-auto no-scrollbar flex justify-center relative space-x-10 rounded-md"
      ref={ref}
    >
      <div className="div relative flex items-start md:px-4">
        <div className="max-w-sm px-4">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-lg max-w-sm mt-10"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div className={cn("hidden lg:block h-80 min-w-[40%] rounded-md bg-white sticky top-10 overflow-hidden", contentClassName)}>
        <Image src={backgroundGradient} alt="background" className="w-full h-full object-cover" width={1000} height={1000} priority />
      </div>
    </motion.div>
  );
};
