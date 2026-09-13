import { IconType } from "react-icons";
import {
  FiHome,
  FiShoppingBag,
  FiSearch,
  FiShoppingCart,
} from "react-icons/fi";

interface Nav {
  icon: IconType;
  title: string;
  url: string;
  isSearch?: boolean;
  isCartOpen?: boolean;
}

export const nav: Nav[] = [
  {
    icon: FiHome,
    title: "Inicio",
    url: "/",
  },
  {
    icon: FiShoppingBag,
    title: "Explorar",
    url: "/shop",
  },
  {
    icon: FiShoppingCart,
    title: "Carrito",
    url: "/cart",
    isCartOpen: false,
  },
  {
    icon: FiSearch,
    title: "Buscar",
    url: "/search",
    isSearch: false,
  },
];
