import Chaqueta from "@/assets/chaqueta-blanca.png";
import Buzo from "@/assets/buzo-blanco.png";
import Impermeable from "@/assets/impermeable-blanco.png";
import type { StaticImageData } from "next/image";

interface CategoriaData {
  title: string;
  image: StaticImageData;
  url: string;
}

export const categoriesData: CategoriaData[] = [
  {
    title: "Chaquetas",
    image: Chaqueta,
    url: "/explorar/chaquetas",
  },
  {
    title: "Buzos",
    image: Buzo,
    url: "/explorar/Buzo",
  },
  {
    title: "Impermeables",
    image: Impermeable,
    url: "/explorar/impermeables",
  },
];
