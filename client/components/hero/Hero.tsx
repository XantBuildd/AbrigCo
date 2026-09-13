"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { heroData } from "@/data/heroData";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

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
          modules={[Navigation, Pagination]}
          loop
          navigation
          pagination={{
            clickable: true,
          }}
          className="hero-swiper h-screen w-full"
        >
          {heroData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-screen w-full overflow-hidden">
                {/* Imagen */}
                <Image
                  src={item.image}
                  alt="Fondo decorativo de AbrigCo con una chaqueta"
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  className="object-cover object-center"
                />

                {/* Degradado */}
                <div
                  className="
                    absolute inset-0
                    bg-linear-to-r
                    from-black/80
                    via-black/40
                    to-transparent
                  "
                />

                {/* Contenido */}
                <div className="relative z-10 flex h-full items-start pt-14 sm:pt-16 sm:w-full md:pt-16 md:w-[40%] lg:pt-20">
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
                    {/* Título */}
                    <div className="h-[120px] sm:h-[150px] md:h-[180px] lg:h-[210px]">
                      <h1
                        className={`
                          ${playFair_display.className}
                          max-w-xl
                          text-3xl
                          font-semibold
                          leading-tight
                          sm:text-4xl
                          md:text-5xl
                          lg:text-6xl
                        `}
                      >
                        {item.title}
                      </h1>
                    </div>

                    {/* Descripción */}
                    <div className="mt-3 h-[80px] sm:mt-4 sm:h-[90px] md:h-[100px]">
                      <p
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
                      </p>
                    </div>

                    {/* Línea */}
                    <div className="mt-12 h-0.5 w-16 rounded-full bg-white-broken sm:w-20" />

                    {/* Botón */}
                    <Link
                      href="/productos"
                      className="
                        mt-20
                        inline-flex
                        h-11
                        min-w-[150px]
                        items-center
                        justify-center
                        rounded-full
                        bg-white
                        px-6
                        text-sm
                        font-semibold
                        whitespace-nowrap
                        text-black
                        transition-transform
                        duration-300
                        hover:scale-105
                        sm:h-12
                        sm:min-w-[165px]
                        sm:px-7
                        sm:text-base
                      "
                    >
                      Comprar ahora
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </article>
    </section>
  );
}

export default Hero;
