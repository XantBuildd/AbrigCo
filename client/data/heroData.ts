import Background1 from "@/assets/HeroBackground.webp";
import Background2 from "@/assets/Herobackground2.webp";
import type { StaticImageData } from "next/image";

interface HeroData {
  title: string;
  description: string;
  image: StaticImageData;
}

export const heroData: HeroData[] = [
  {
    title: "Chaqueta que se siente como hogar.",
    description:
      "Encuentra buzos, chaquetas y prendas pensadas para acompañarte todos los días, con comodidad y estilo para cada momento.",
    image: Background1,
  },
  {
    title: "Tu estilo, tu vibra. Como tu quieras.",
    description:
      "Descubre nuestra selección de buzos, chaquetas y prendas para todos los días. Elige tus favoritos y haz tu pedido fácil y rápido por WhatsApp.",
    image: Background2,
  },
];
