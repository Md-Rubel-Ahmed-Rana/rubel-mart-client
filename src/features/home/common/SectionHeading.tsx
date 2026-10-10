"use client";

import { motion, useReducedMotion } from "motion/react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  id?: string;
}

const SectionHeading = ({
  eyebrow = "Discover more",
  title,
  description,
  id,
}: SectionHeadingProps) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="max-w-2xl"
    >
      <div className="mb-3 flex items-center gap-3">
        <span className="h-0.5 w-8 rounded-full bg-primary" />

        <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary sm:text-sm">
          {eyebrow}
        </p>
      </div>

      <h2
        id={id}
        className="text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]"
      >
        {title}
        <span className="ml-2 inline-block text-primary">.</span>
      </h2>

      {description && (
        <p className="mt-3 max-w-lg text-sm leading-7 text-muted-foreground sm:text-base">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
