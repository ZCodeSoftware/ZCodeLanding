"use client";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const ParallaxScroll = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ["start start", "end start"],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(images.length / 3);

  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  return (
    <div className={cn("h-screen w-full overflow-hidden", className)}>
      <div ref={gridRef} className="h-full w-full overflow-y-auto scrollbar-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 py-40 px-10">
          <motion.div style={{ translateY: translateFirst }} className="space-y-4">
            {firstPart.map((src, index) => (
              <Image key={index} src={src} alt={`Image ${index}`} width={500} height={500} className="w-full h-auto object-cover object-left-top rounded-lg" />
            ))}
          </motion.div>
          <motion.div style={{ translateY: translateSecond }} className="space-y-4">
            {secondPart.map((src, index) => (
              <Image key={index} src={src} alt={`Image ${index}`} width={500} height={500} className="w-full h-auto object-cover object-left-top rounded-lg" />
            ))}
          </motion.div>
          <motion.div style={{ translateY: translateThird }} className="space-y-4">
            {thirdPart.map((src, index) => (
              <Image key={index} src={src} alt={`Image ${index}`} width={500} height={500} className="w-full h-auto object-cover object-left-top rounded-lg" />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};