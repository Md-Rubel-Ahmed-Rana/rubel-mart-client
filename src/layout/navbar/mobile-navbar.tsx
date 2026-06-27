"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import SearchBar from "./search-bar";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import UserMenu from "./user-menu";
import { ICurrentUser } from "@/types/auth.type";

type Props = {
  user: ICurrentUser;
};

const MobileNavbar = ({ user }: Props) => {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScrollY.current && currentScroll > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      lastScrollY.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-background/80 border-b px-2 lg:px-4"
        >
          <div className="lg:hidden">
            <div className="container mx-auto px-4">
              <div className="flex h-16 items-center justify-between">
                <Sheet>
                  <SheetTrigger>
                    <Menu className="h-6 w-6" />
                  </SheetTrigger>

                  <SheetContent side="left">
                    <nav className="mt-8 flex flex-col gap-1 pl-2">
                      <Link href="/" className="py-2">
                        Home
                      </Link>

                      <Link href="/brands" className="py-2">
                        Brands
                      </Link>

                      <Link href="/offers" className="py-2">
                        Offers & Coupons
                      </Link>

                      <Link href="/new-arrivals" className="py-2">
                        New Arrivals
                      </Link>

                      <Link href="/best-selling-products" className="py-2">
                        Best Sellers
                      </Link>

                      <div className="mt-4 border-t pt-4">
                        <Link href="/about-us" className="block py-2">
                          About Us
                        </Link>

                        <Link href="/contact-us" className="block py-2">
                          Contact Us
                        </Link>

                        <Link href="/become-a-seller" className="block py-2">
                          Become a Seller
                        </Link>

                        <Link href="/affiliate-program" className="block py-2">
                          Affiliate Program
                        </Link>

                        <Link href="/careers" className="block py-2">
                          Careers
                        </Link>
                      </div>

                      <div className="mt-4 border-t pt-4">
                        <Link href="/help-center" className="block py-2">
                          Help Center
                        </Link>

                        <Link href="/track-order" className="block py-2">
                          Track Order
                        </Link>

                        <Link
                          href="/return-refund-policy"
                          className="block py-2"
                        >
                          Return & Refund
                        </Link>

                        <Link href="/shipping-policy" className="block py-2">
                          Shipping Policy
                        </Link>

                        <Link href="/privacy-policy" className="block py-2">
                          Privacy Policy
                        </Link>

                        <Link
                          href="/terms-and-conditions"
                          className="block py-2"
                        >
                          Terms & Conditions
                        </Link>
                      </div>
                    </nav>
                  </SheetContent>
                </Sheet>

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
                <UserMenu
                  isLoggedIn={user?.id ? true : false}
                  user_image_url={user?.image}
                />
              </div>

              <SearchBar />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNavbar;
