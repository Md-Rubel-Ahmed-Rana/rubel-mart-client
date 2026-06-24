"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import SearchBar from "./search-bar";
import CartButton from "./cart-button";
import Image from "next/image";

export default function MobileNavbar() {
  return (
    <div className="lg:hidden">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Sheet>
            <SheetTrigger>
              <Menu className="h-6 w-6" />
            </SheetTrigger>

            <SheetContent side="left">
              <nav className="mt-8 flex flex-col gap-4">
                <Link href="/">Home</Link>
                <Link href="/categories">Categories</Link>
                <Link href="/deals">Deals</Link>
                <Link href="/orders">Orders</Link>
              </nav>
            </SheetContent>
          </Sheet>

          <Link
            style={{ height: "72px", width: "180px" }}
            href="/"
            className="relative shrink-0"
          >
            <Image
              src="/logo.png"
              alt="Rubel Mart"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </Link>

          <CartButton />
        </div>

        <div className="pb-4">
          <SearchBar />
        </div>
      </div>
    </div>
  );
}
