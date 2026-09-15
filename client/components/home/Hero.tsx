"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCreative,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-creative";

import { heroData } from "@/data/heroData";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const playFair_display = Playfair_Display({
  weight: "600",
  subsets: ["latin"],
  style: "normal",
});

function Hero() {
  return (
    <section>
      <article>
        <Swiper
          modules={[Autoplay, EffectCreative, Navigation, Pagination]}
          effect="creative"
          creativeEffect={{
            limitProgress: 2,
            perspective: true,

            prev: {
              translate: ["-18%", "-12%", -250],
              rotate: [0, 0, -5],
              scale: 0.9,
              opacity: 0,
            },

            next: {
              translate: ["100%", "12%", -180],
              rotate: [0, 0, 5],
              scale: 0.88,
              opacity: 0,
            },
          }}
          speed={1500}
          loop
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation
          pagination={{
            clickable: true,
          }}
          className="hero-swiper h-screen w-full"
        >
          {heroData.map((item, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <div className="relative h-screen w-full overflow-hidden">
                  {/* Background */}

                  <motion.div
                    initial={{
                      scale: 1.12,
                    }}
                    animate={
                      isActive
                        ? {
                            scale: 1,
                          }
                        : {
                            scale: 1.12,
                          }
                    }
                    transition={{
                      duration: 2,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={item.image}
                      alt="Fondo decorativo de AbrigCo con una chaqueta"
                      fill
                      priority={index === 0}
                      sizes="100vw"
                      className="object-cover object-center"
                    />
                  </motion.div>

                  {/* Dark gradient */}

                  <motion.div
                    initial={{
                      opacity: 0,
                    }}
                    animate={
                      isActive
                        ? {
                            opacity: 1,
                          }
                        : {
                            opacity: 0,
                          }
                    }
                    transition={{
                      duration: 1.2,
                      ease: "easeOut",
                    }}
                    className="
                      absolute
                      inset-0
                      bg-linear-to-r
                      from-black/80
                      via-black/40
                      to-transparent
                    "
                  />

                  {/* Content */}

                  <div
                    className="
                      relative
                      z-10
                      flex
                      h-full
                      w-full
                      items-start
                      pt-14
                      sm:pt-16
                      sm:w-[60%]
                      md:pt-16
                      md:w-[54%]
                      lg:pt-20
                      [@media(min-width:400px)_and_(max-width:640px)]:w-[65%]
                      [@media(min-width:640px)_and_(max-width:920px)]:w-[50%]
                    "
                  >
                    <div
                      className="
                        w-full
                        max-w-xl
                        px-6
                        text-white
                        sm:px-10
                        md:px-14
                        lg:px-20
                        xl:px-24
                      "
                    >
                      {/* Small label */}

                      <motion.div
                        initial={{
                          opacity: 0,
                          y: 20,
                        }}
                        animate={
                          isActive
                            ? {
                                opacity: 1,
                                y: 0,
                              }
                            : {
                                opacity: 0,
                                y: 20,
                              }
                        }
                        transition={{
                          duration: 0.7,
                          delay: 0.15,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="
                          mb-5
                          flex
                          items-center
                          gap-3
                          text-[9px]
                          uppercase
                          tracking-[0.3em]
                          text-white/60
                        "
                      >
                        <span className="h-px w-7 bg-white/60" />
                        <span>AbrigCo Collection</span>
                      </motion.div>

                      {/* Title */}

                      <div
                        className="
                          h-[120px]
                          sm:h-[150px]
                          md:h-[180px]
                          lg:h-[210px]
                        "
                      >
                        <motion.h1
                          initial={{
                            opacity: 0,
                            y: 45,
                            filter: "blur(8px)",
                          }}
                          animate={
                            isActive
                              ? {
                                  opacity: 1,
                                  y: 0,
                                  filter: "blur(0px)",
                                }
                              : {
                                  opacity: 0,
                                  y: 45,
                                  filter: "blur(8px)",
                                }
                          }
                          transition={{
                            duration: 1,
                            delay: 0.3,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className={`
                            ${playFair_display.className}
                            max-w-xl
                            text-3xl
                            font-semibold
                            leading-tight
                            sm:text-4xl
                            lg:text-6xl
                            [@media(min-width:420px)_and_(max-width:640px)]:text-4xl
                            [@media(min-width:720px)_and_(max-width:860px)]:text-[42px]
                            [@media(min-width:860px)_and_(max-width:1100px)]:text-[50px]
                          `}
                          dangerouslySetInnerHTML={{
                            __html: item.title,
                          }}
                        />
                      </div>

                      {/* Description */}

                      <div
                        className="
                          mt-3
                          h-[80px]
                          sm:mt-4
                          sm:h-[90px]
                          md:h-[100px]
                        "
                      >
                        <motion.p
                          initial={{
                            opacity: 0,
                            y: 25,
                          }}
                          animate={
                            isActive
                              ? {
                                  opacity: 1,
                                  y: 0,
                                }
                              : {
                                  opacity: 0,
                                  y: 25,
                                }
                          }
                          transition={{
                            duration: 0.8,
                            delay: 0.55,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="
                            max-w-lg
                            text-sm
                            leading-relaxed
                            text-white/80
                            sm:text-base
                            md:text-lg
                          "
                        >
                          {item.description}
                        </motion.p>
                      </div>

                      {/* Line */}

                      <motion.div
                        initial={{
                          width: 0,
                          opacity: 0,
                        }}
                        animate={
                          isActive
                            ? {
                                width: 80,
                                opacity: 1,
                              }
                            : {
                                width: 0,
                                opacity: 0,
                              }
                        }
                        transition={{
                          duration: 0.8,
                          delay: 0.8,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="
                          mt-12
                          h-0.5
                          rounded-full
                          bg-white-broken
                          md:mt-8
                          lg:mt-4
                        "
                      />

                      {/* Button */}

                      <motion.div
                        initial={{
                          opacity: 0,
                          y: 25,
                          scale: 0.95,
                        }}
                        animate={
                          isActive
                            ? {
                                opacity: 1,
                                y: 0,
                                scale: 1,
                              }
                            : {
                                opacity: 0,
                                y: 25,
                                scale: 0.95,
                              }
                        }
                        transition={{
                          duration: 0.8,
                          delay: 1,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        <Link
                          href="/productos"
                          className="
                            mt-12
                            inline-flex
                            h-11
                            min-w-[150px]
                            items-center
                            justify-center
                            rounded-xl
                            bg-white
                            px-6
                            text-sm
                            font-semibold
                            whitespace-nowrap
                            text-black
                            transition-transform
                            duration-300
                            hover:scale-105
                            sm:mt-12
                            sm:h-12
                            sm:min-w-[165px]
                            sm:px-7
                            sm:text-base
                            lg:mt-6
                          "
                        >
                          Comprar ahora
                        </Link>
                      </motion.div>
                    </div>
                  </div>

                  {/* Side numbers */}

                  <motion.div
                    initial={{
                      opacity: 0,
                      x: 30,
                    }}
                    animate={
                      isActive
                        ? {
                            opacity: 1,
                            x: 0,
                          }
                        : {
                            opacity: 0,
                            x: 30,
                          }
                    }
                    transition={{
                      duration: 0.8,
                      delay: 0.7,
                    }}
                    className="
                      absolute
                      bottom-10
                      right-8
                      z-20
                      hidden
                      text-[10px]
                      tracking-[0.3em]
                      text-white/50
                      md:block
                    "
                  >
                    0{index + 1}
                  </motion.div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </article>
    </section>
  );
}

export default Hero;
