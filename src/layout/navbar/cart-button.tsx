"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function CartButton() {
  const cartCount = 3;

  return (
    <Link href="/cart" className="relative flex items-center justify-center">
      <ShoppingCart className="h-6 w-6" />

      {cartCount > 0 && (
        <Badge className="absolute -right-2 -top-2 bg-accent text-accent-foreground">
          {cartCount}
        </Badge>
      )}
    </Link>
  );
}
