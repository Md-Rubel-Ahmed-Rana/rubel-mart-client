"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function WishlistButton() {
  const wishlistCount = 2;

  return (
    <Link
      href="/wishlist"
      className="relative flex items-center justify-center"
    >
      <Heart className="h-6 w-6" />

      {wishlistCount > 0 && (
        <Badge className="absolute -right-2 -top-2">{wishlistCount}</Badge>
      )}
    </Link>
  );
}
