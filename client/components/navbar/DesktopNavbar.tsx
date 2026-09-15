"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/Logo.png";
import { motion } from "motion/react";
import { useState } from "react";
import { FiSearch, FiShoppingCart } from "react-icons/fi";

const desktopNav = [
  {
    title: "Inicio",
    url: "/",
  },
  {
    title: "Tienda",
    url: "/tienda",
  },
  {
    title: "Nosotros",
    url: "/nosotros",
  },
];

const navContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.25,
    },
  },
};

const navItem = {
  hidden: {
    opacity: 0,
    y: -12,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

function DesktopNavbar() {
  const [active, setActive] = useState(0);
  const [hover, setHover] = useState<number | null>(null);

  const current = hover ?? active;

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      className="fixed left-0 right-0 top-0 z-50"
    >
      <div className="mx-auto flex h-20 w-full items-center justify-between px-8">
        {/* Logo */}
        <motion.div
          initial={{
            opacity: 0,
            y: -18,
            scale: 0.92,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Link href="/" className="block shrink-0">
            <Image src={Logo} alt="AbrigCo" width={60} height={60} priority />
          </Link>
        </motion.div>

        {/* Navigation */}
        <motion.nav
          variants={navContainer}
          className="absolute left-1/2 -translate-x-1/2 text-white-broken"
        >
          <ul className="flex items-center gap-10">
            {desktopNav.map((item, index) => {
              const isSelected = current === index;

              return (
                <motion.li
                  key={item.url}
                  variants={navItem}
                  transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative"
                >
                  <Link
                    href={item.url}
                    onMouseEnter={() => setHover(index)}
                    onMouseLeave={() => setHover(null)}
                    onClick={() => setActive(index)}
                    className="
                      relative
                      z-10
                      block
                      rounded-2xl
                      px-5
                      py-2
                      text-sm
                      font-medium
                      text-white-broken
                    "
                  >
                    <motion.span
                      animate={{
                        color: isSelected
                          ? "#000000"
                          : "var(--color-white-broken)",
                      }}
                      transition={{
                        duration: 0.2,
                        ease: "easeOut",
                      }}
                    >
                      {item.title}
                    </motion.span>

                    {isSelected && (
                      <motion.div
                        layoutId="navbar-active"
                        className="
                          absolute
                          inset-0
                          -z-10
                          rounded-2xl
                          bg-white-broken
                        "
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 35,
                        }}
                      />
                    )}
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </motion.nav>

        {/* Actions */}
        <motion.div
          initial={{
            opacity: 0,
            x: 18,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex items-center gap-5 text-white-broken"
        >
          <button
            type="button"
            aria-label="Buscar"
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              transition-transform
              duration-200
              hover:scale-110
            "
          >
            <FiSearch className="text-xl" strokeWidth={1.5} />
          </button>

          <Link
            href="/carrito"
            aria-label="Carrito"
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              transition-transform
              duration-200
              hover:scale-110
            "
          >
            <FiShoppingCart className="text-xl" strokeWidth={1.5} />
          </Link>
        </motion.div>
      </div>
    </motion.header>
  );
}

export default DesktopNavbar;
