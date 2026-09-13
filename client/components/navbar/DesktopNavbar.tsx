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

function DesktopNavbar() {
  const [active, setActive] = useState(0);
  const [hover, setHover] = useState<number | null>(null);

  const current = hover ?? active;

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <div className="mx-auto flex h-20 w-full items-center justify-between px-8">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image src={Logo} alt="AbrigCo" width={60} height={60} priority />
        </Link>

        {/* Navigation */}
        <nav className="absolute left-1/2 -translate-x-1/2 text-white-broken">
          <ul className="flex items-center gap-10">
            {desktopNav.map((item, index) => {
              const isSelected = current === index;

              return (
                <li key={item.url} className="relative">
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

                    {/* Fondo activo */}
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
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-5 text-white-broken">
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
        </div>
      </div>
    </header>
  );
}

export default DesktopNavbar;
