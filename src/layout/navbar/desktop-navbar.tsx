import Link from "next/link";

import SearchBar from "./search-bar";
import CartButton from "./cart-button";
import UserMenu from "./user-menu";
import WishlistButton from "./wishlist-button";
import CategoriesMenu from "./categories-menu";
import Image from "next/image";
import ThemeToggle from "@/common/ThemeToggle";

export default function DesktopNavbar() {
  return (
    <div className="hidden lg:block">
      <div className="container mx-auto">
        <div className="flex h-18 items-center gap-6">
          <Link href="/" className="relative h-18 w-45 shrink-0">
            <Image
              src="/logo.png"
              alt="Rubel Mart"
              fill
              className="object-contain"
              priority
            />
          </Link>

          <CategoriesMenu />

          <div className="flex-1">
            <SearchBar />
          </div>

          <div className="flex items-center gap-5">
            <WishlistButton />
            <CartButton />
            <UserMenu />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  );
}
