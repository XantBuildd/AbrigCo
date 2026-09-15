"use client";

import { Playfair_Display } from "next/font/google";
import { motion } from "motion/react";

import { categoriesData } from "@/data/categoriesData";
import CategoryCard from "./CategoryCard";

const playFair_display = Playfair_Display({
  weight: "600",
  subsets: ["latin"],
  style: "normal",
});

function Categories() {
  return (
    <section className="rounded-xl bg-white-broken px-6 py-14 md:px-10 md:py-16 lg:px-16 lg:py-18">
      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.3,
        }}
        className="mx-auto mb-8 max-w-5xl"
      >
        <motion.p
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
            },
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="mb-2 text-[10px] font-medium uppercase tracking-[0.25em] text-medium-taupe"
        >
          Explora nuestra colección
        </motion.p>

        <motion.h2
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
            },
          }}
          transition={{
            duration: 0.8,
            delay: 0.12,
            ease: "easeOut",
          }}
          className={`${playFair_display.className} text-3xl text-dark-grey md:text-[34px]`}
        >
          Categorías
        </motion.h2>

        <motion.div
          variants={{
            hidden: {
              scaleX: 0,
              opacity: 0,
            },
            visible: {
              scaleX: 1,
              opacity: 1,
            },
          }}
          transition={{
            duration: 0.7,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            transformOrigin: "left",
          }}
          className="mt-3 h-px w-10 bg-sand-beige"
        />
      </motion.div>

      {/* Cards — completamente estáticas */}
      <div className="mx-auto grid max-w-4xl grid-cols-1 justify-items-center gap-9 sm:grid-cols-3 sm:gap-5 lg:gap-8">
        {categoriesData.map((category) => (
          <CategoryCard key={category.title} category={category} />
        ))}
      </div>
    </section>
  );
}

export default Categories;
