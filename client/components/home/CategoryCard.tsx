"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import * as motion from "motion/react-client";

import type { StaticImageData } from "next/image";

interface Category {
  title: string;
  image: StaticImageData;
  url: string;
  imageScale?: number;
}

interface CategoryCardProps {
  category: Category;
}

function CategoryCard({ category }: CategoryCardProps) {
  const imageScale = category.imageScale ?? 1;

  return (
    <Link href={category.url} className="group block w-full max-w-52">
      {/* Card */}
      <motion.div
        initial="rest"
        whileHover="hover"
        animate="rest"
        className="relative aspect-square w-full"
      >
        {/* Outer circle */}
        <motion.div
          variants={{
            rest: {
              scale: 1,
              rotate: 0,
            },
            hover: {
              scale: 1.045,
              rotate: 3,
            },
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            absolute
            inset-0
            rounded-full
            border
            border-taupe-beige/50
          "
        />

        {/* Secondary circle */}
        <motion.div
          variants={{
            rest: {
              scale: 1,
              opacity: 0.3,
              rotate: 0,
            },
            hover: {
              scale: 1.08,
              opacity: 0.7,
              rotate: -5,
            },
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            absolute
            inset-1
            rounded-full
            border
            border-taupe-beige/30
          "
        />

        {/* Main circle */}
        <motion.div
          variants={{
            rest: {
              scale: 1,
            },
            hover: {
              scale: 0.965,
            },
          }}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            absolute
            inset-3
            overflow-hidden
            rounded-full
            bg-light-beige
          "
        >
          {/* Light glow */}
          <motion.div
            variants={{
              rest: {
                scale: 0.8,
                opacity: 0.3,
              },
              hover: {
                scale: 1.25,
                opacity: 0.7,
              },
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            className="
              absolute
              left-1/2
              top-[30%]
              h-32
              w-32
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-white/30
              blur-2xl
            "
          />

          {/* Inner circle */}
          <motion.div
            variants={{
              rest: {
                scale: 1,
                opacity: 0.45,
              },
              hover: {
                scale: 0.98,
                opacity: 0.9,
              },
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              absolute
              inset-6
              rounded-full
              border
              border-taupe-beige/40
            "
          />

          {/* Number */}
          <motion.span
            variants={{
              rest: {
                x: 0,
                opacity: 0.65,
              },
              hover: {
                x: 5,
                opacity: 1,
              },
            }}
            transition={{
              duration: 0.45,
              ease: "easeOut",
            }}
            className="
              absolute
              left-8
              top-8
              z-30
              font-sans
              text-[9px]
              tracking-[0.2em]
              text-medium-taupe
            "
          >
            01
          </motion.span>

          {/* Product */}
          <motion.div
            variants={{
              rest: {
                y: 0,
                scale: imageScale,
                rotate: 0,
              },
              hover: {
                y: -10,
                scale: imageScale * 1.075,
                rotate: -2,
              },
            }}
            transition={{
              type: "spring",
              stiffness: 130,
              damping: 15,
              mass: 0.7,
            }}
            className="
              absolute
              inset-8
              z-20
            "
          >
            <Image
              src={category.image}
              alt={category.title}
              fill
              sizes="208px"
              className="object-contain"
            />
          </motion.div>

          {/* Shine */}
          <motion.div
            variants={{
              rest: {
                x: "-130%",
                opacity: 0,
              },
              hover: {
                x: "130%",
                opacity: 0.35,
              },
            }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              absolute
              -left-1/2
              top-0
              z-30
              h-full
              w-1/2
              rotate-[25deg]
              bg-gradient-to-r
              from-transparent
              via-white
              to-transparent
              blur-sm
            "
          />

          {/* Bottom glow */}
          <motion.div
            variants={{
              rest: {
                opacity: 0,
                y: 15,
              },
              hover: {
                opacity: 1,
                y: 0,
              },
            }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              absolute
              bottom-0
              left-0
              right-0
              z-10
              h-1/3
              bg-gradient-to-t
              from-white/20
              to-transparent
            "
          />

          {/* Arrow */}
          <motion.div
            variants={{
              rest: {
                opacity: 0,
                scale: 0.4,
                rotate: -45,
              },
              hover: {
                opacity: 1,
                scale: 1,
                rotate: 0,
              },
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 16,
              delay: 0.05,
            }}
            className="
              absolute
              right-5
              top-5
              z-40
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-dark-grey
              text-white-broken
              shadow-lg
            "
          >
            <FiArrowUpRight size={17} />
          </motion.div>

          {/* Bottom dot */}
          <motion.div
            variants={{
              rest: {
                scale: 1,
                opacity: 0.4,
              },
              hover: {
                scale: 1.8,
                opacity: 1,
              },
            }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
            }}
            className="
              absolute
              bottom-8
              left-1/2
              z-40
              h-1
              w-1
              -translate-x-1/2
              rounded-full
              bg-dark-grey
            "
          />
        </motion.div>
      </motion.div>

      {/* Title */}
      <div className="mt-5 text-center">
        <motion.h3
          variants={{
            rest: {
              y: 0,
            },
            hover: {
              y: -4,
            },
          }}
          transition={{
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            font-serif
            text-xl
            text-dark-grey
          "
        >
          {category.title}
        </motion.h3>

        {/* Explore */}
        <motion.div
          variants={{
            rest: {
              y: 0,
            },
            hover: {
              y: -2,
            },
          }}
          transition={{
            duration: 0.35,
          }}
          className="
            mt-2
            flex
            items-center
            justify-center
            gap-2
            text-[9px]
            uppercase
            tracking-[0.22em]
            text-medium-taupe
          "
        >
          {/* Text */}
          <motion.span
            variants={{
              rest: {
                opacity: 0.65,
                x: 0,
              },
              hover: {
                opacity: 1,
                x: -2,
              },
            }}
          >
            Explorar
          </motion.span>

          {/* Line */}
          <motion.span
            variants={{
              rest: {
                width: 12,
              },
              hover: {
                width: 28,
              },
            }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              block
              h-px
              bg-medium-taupe
            "
          />

          {/* Arrow */}
          <motion.span
            variants={{
              rest: {
                x: 0,
                opacity: 0.5,
              },
              hover: {
                x: 4,
                opacity: 1,
              },
            }}
            transition={{
              duration: 0.35,
            }}
          >
            →
          </motion.span>
        </motion.div>
      </div>
    </Link>
  );
}

export default CategoryCard;
