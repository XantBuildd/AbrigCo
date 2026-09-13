"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/Logo.png";
import { nav } from "@/data/navData";
import { motion } from "motion/react";
import { useState } from "react";

function MobileNavbar() {
  const [active, setActive] = useState(0);
  const [hover, setHover] = useState<number | null>(null);

  const current = hover ?? active;

  return (
    <>
      {/* Mobile Logo */}
      <header className="fixed left-0 right-0 top-0 z-50">
        <div className="flex h-16 items-center justify-center">
          <Link href="/">
            <Image src={Logo} alt="AbrigCo" width={50} height={50} priority />
          </Link>
        </div>
      </header>

      {/* Mobile Bottom Navbar */}
      <div className="fixed bottom-0 left-0 right-0 z-50">
        <div
          className="
            relative
            h-16
            w-full
            rounded-t-xl
            bg-dark-grey
          "
        >
          <motion.div
            className="
              pointer-events-none
              absolute
              left-0
              top-1/2
              h-14
              w-14
              rounded-full
              bg-white-broken
            "
            animate={{
              left: `${(current + 0.5) * (100 / nav.length)}%`,

              scaleX: [1, 1.3, 1.08, 1],
              scaleY: [1, 0.78, 0.94, 1],

              rotate: [0, 6, -2, 0],
            }}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              translateX: "-50%",
              translateY: "-50%",
            }}
          />

          <ul
            className="
              relative
              z-10
              flex
              h-full
              w-full
              items-center
              justify-around
              text-white-broken/70
            "
          >
            {nav.map((item, index) => {
              const Icon = item.icon;
              const isSelected = current === index;

              return (
                <Link
                  key={item.url}
                  href={item.url}
                  onMouseEnter={() => setHover(index)}
                  onMouseLeave={() => setHover(null)}
                  onClick={() => setActive(index)}
                  className="
                    flex
                    h-full
                    w-full
                    items-center
                    justify-center
                  "
                >
                  <motion.div
                    animate={{
                      scale: isSelected ? 1.08 : 1,

                      rotate: isSelected ? [0, -8, 3, 0] : 0,

                      color: isSelected ? "#000000" : "var(--white-broken)",
                    }}
                    transition={{
                      scale: {
                        type: "spring",
                        stiffness: 450,
                        damping: 25,
                        mass: 0.7,
                      },

                      rotate: {
                        duration: 0.45,
                        ease: [0.34, 1.56, 0.64, 1],
                      },

                      color: {
                        duration: 0.2,
                        ease: "easeOut",
                      },
                    }}
                    className="
                      flex
                      flex-col
                      items-center
                      justify-center
                    "
                  >
                    <Icon
                      className="text-2xl"
                      strokeWidth={isSelected ? 2 : 1.3}
                    />

                    <span className="text-[12px]">{item.title}</span>
                  </motion.div>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default MobileNavbar;
