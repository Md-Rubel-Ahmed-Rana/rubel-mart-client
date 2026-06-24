"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import clsx from "clsx";

type Props = {
  label: string;
  href: string;
  icon: LucideIcon;
  isActive?: boolean;
};

const MobileNavItem = ({ label, href, icon: Icon, isActive }: Props) => {
  return (
    <Link href={href}>
      <motion.div
        whileTap={{ scale: 0.92 }}
        className={clsx(
          "relative flex min-w-10 flex-col items-center justify-center rounded-full px-3 py-2 transition-all duration-300",
          isActive
            ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
            : "text-muted-foreground hover:text-foreground",
        )}
      >
        {isActive && (
          <motion.div
            layoutId="mobile-nav-active"
            className="absolute inset-0 rounded-2xl bg-primary"
            transition={{
              type: "spring",
              bounce: 0.2,
              duration: 0.6,
            }}
          />
        )}

        <div className="relative z-10 flex flex-col items-center">
          <Icon size={18} />

          <span className="mt-1 text-[9px] font-medium">{label}</span>
        </div>
      </motion.div>
    </Link>
  );
};

export default MobileNavItem;
