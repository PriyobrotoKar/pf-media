"use client";
import React, { useRef } from "react";
import HightlightText from "./HightlightText";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  wrap,
} from "motion/react";
import Image from "next/image";

interface FeatureInfiniteProps {
  features: { title: string; description: string }[];
}

const FeatureInfinite = ({ features }: FeatureInfiniteProps) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 2], {
    clamp: false,
  });
  const x = useTransform(baseX, (v) => `${wrap(0, -50.5, v)}%`);

  const directionFactor = useRef<number>(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * 4 * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <motion.div
      style={{ x }}
      className="flex w-fit will-change-transform gap-8"
    >
      {[...features, ...features].map((feature, index) => (
        <div
          key={index}
          className="flex flex-col min-w-0 w-[18.5rem] relative z-0 overflow-hidden shrink-0 bg-background text-primary items-center gap-56 py-10 px-8 rounded-[3.125rem]"
        >
          <Image
            src={`/features/feature${(index % features.length) + 1}.png`}
            alt={`Feature${index + 1}`}
            width={300}
            height={200}
            className="absolute inset-0 w-full h-full -z-10 opacity-30"
          />
          <h3 className="text-2xl text-primary italic">
            <HightlightText text={feature.title} />
          </h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </motion.div>
  );
};

export default FeatureInfinite;
