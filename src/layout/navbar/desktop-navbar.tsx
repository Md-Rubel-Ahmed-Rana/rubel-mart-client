"use client";

import Link from "next/link";
import SearchBar from "./search-bar";
import CartButton from "./cart-button";
import UserMenu from "./user-menu";
import WishlistButton from "./wishlist-button";
import CategoriesMenu from "./categories-menu";
import Image from "next/image";
import ThemeToggle from "@/common/ThemeToggle";
import { ICurrentUser } from "@/types/auth.type";
import { Loader2 } from "lucide-react";

type Props = {
  user: ICurrentUser;
  isLoading: boolean;
};

const DesktopNavbar = ({ isLoading, user }: Props) => {
  return (
    <div className="hidden lg:block pr-2">
      <div className="container mx-auto">
        <div className="flex h-18 items-center gap-6">
          <Link
            style={{ height: "72px", width: "180px" }}
            href="/"
            className="relative shrink-0"
          >
            <Image
              src={"/logo.png"}
              alt="Rubel Mart"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </Link>

          <CategoriesMenu />

          <div className="flex-1">
            <SearchBar />
          </div>

          <div className="flex items-center gap-5">
            <WishlistButton />
            <CartButton />
            {isLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <UserMenu
                isLoggedIn={user?.id ? true : false}
                user_image_url={user?.image}
              />
            )}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopNavbar;
