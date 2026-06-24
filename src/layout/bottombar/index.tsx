"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { MOBILE_BOTTOM_BAR_ITEMS } from "./mobile-nav.constant";
import MobileNavItem from "./MobileNavItem";

const MobileBottomNavbar = () => {
  const activeRoute = usePathname();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let lastScroll = window.scrollY;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{
            duration: 0.35,
          }}
          className="w-full fixed bottom-0 left-1/2 z-50 flex -translate-x-1/2 items-center justify-center gap-1 border border-border/50 bg-background/70 py-1 px-3 shadow-2xl backdrop-blur-xl md:hidden"
        >
          {MOBILE_BOTTOM_BAR_ITEMS.map((item) => {
            return (
              <MobileNavItem
                key={item.label}
                label={item.label}
                href={item.href}
                icon={item.icon}
                isActive={item.href === activeRoute}
              />
            );
          })}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileBottomNavbar;
