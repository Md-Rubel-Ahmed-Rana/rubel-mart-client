import {
  House,
  LayoutGrid,
  Search,
  ShoppingCart,
  Heart,
  Package,
} from "lucide-react";

export const MOBILE_BOTTOM_BAR_ITEMS = [
  {
    label: "Home",
    href: "/",
    icon: House,
  },
  {
    label: "Categories",
    href: "/categories",
    icon: LayoutGrid,
  },
  {
    label: "Search",
    href: "/search",
    icon: Search,
  },
  {
    label: "Cart",
    href: "/cart",
    icon: ShoppingCart,
  },
  {
    label: "Wishlist",
    href: "/wishlist",
    icon: Heart,
  },
  {
    label: "Orders",
    href: "/orders",
    icon: Package,
  },
];
