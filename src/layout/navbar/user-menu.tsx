"use client";

import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";
import LogoutButton from "@/features/auth/logout/logout-button";

type Props = {
  isLoggedIn: boolean;
  user_image_url?: string;
};

const UserMenu = ({ isLoggedIn, user_image_url }: Props) => {
  if (!isLoggedIn) {
    return (
      <div className="flex items-center gap-2">
        <Link href="/signin">Sign in</Link>
      </div>
    );
  }

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger>
        <Avatar className="cursor-pointer">
          {user_image_url ? (
            <Image
              src={user_image_url}
              alt="Profile"
              fill
              className="object-cover rounded-full"
            />
          ) : (
            <AvatarFallback>RA</AvatarFallback>
          )}
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuItem asChild>
          <Link href="/profile">Profile</Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link href="/orders">Orders</Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link href="/wishlist">Wishlist</Link>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <LogoutButton />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
