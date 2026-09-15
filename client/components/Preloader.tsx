"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

import Logo from "@/assets/Logo.png";
import Background1 from "@/assets/HeroBackground.webp";
import Background2 from "@/assets/Herobackground2.webp";

interface PreloaderProps {
  children: React.ReactNode;
}

function Preloader({ children }: PreloaderProps) {
  const [loaded, setLoaded] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const images = [Background1.src, Background2.src, Logo.src];

    const loadImages = images.map(
      (src) =>
        new Promise<void>((resolve) => {
          const image = new window.Image();

          image.onload = () => resolve();
          image.onerror = () => resolve();

          image.src = src;
        }),
    );

    Promise.all(loadImages).then(() => {
      setLoaded(true);
    });
  }, []);

  useEffect(() => {
    if (!loaded) return;

    const timer = setTimeout(() => {
      setVisible(false);
    }, 700);

    return () => clearTimeout(timer);
  }, [loaded]);

  return (
    <>
      {children}

      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: loaded ? 0 : 1,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          onAnimationComplete={() => {
            if (loaded) {
              setVisible(false);
            }
          }}
          className="
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            bg-dark-grey
          "
        >
          <div className="flex w-[280px] flex-col items-center">
            {/* Logo */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Image src={Logo} alt="AbrigCo" width={70} height={70} priority />
            </motion.div>

            {/* Brand */}
            <motion.p
              initial={{
                opacity: 0,
                y: 8,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
              className="
                mt-5
                text-[10px]
                uppercase
                tracking-[0.45em]
                text-white-broken/70
              "
            >
              AbrigCo
            </motion.p>

            {/* Progress */}
            <div className="mt-10 w-full">
              <div className="h-px w-full bg-white-broken/10">
                <motion.div
                  initial={{
                    scaleX: 0,
                  }}
                  animate={{
                    scaleX: loaded ? 1 : 0.75,
                  }}
                  transition={{
                    duration: loaded ? 0.5 : 1.5,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  style={{
                    transformOrigin: "left",
                  }}
                  className="h-full w-full bg-sand-beige"
                />
              </div>

              <div className="mt-3 flex justify-between">
                <span
                  className="
                    text-[8px]
                    uppercase
                    tracking-[0.3em]
                    text-white-broken/30
                  "
                >
                  {loaded ? "Listo" : "Preparando"}
                </span>

                <span
                  className="
                    text-[8px]
                    tracking-[0.2em]
                    text-white-broken/30
                  "
                >
                  {loaded ? "100" : "—"}%
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}

export default Preloader;
