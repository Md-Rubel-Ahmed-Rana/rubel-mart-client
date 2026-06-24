"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const BottomToTopScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const checkScrollTop = () => {
    setVisible(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 30 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed bottom-6 right-6 z-50"
        >
          <Button
            size="icon"
            onClick={scrollToTop}
            className="rounded-full shadow-lg transition-transform hover:scale-110 bg-primary hover:bg-primary/90 text-white"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BottomToTopScrollButton;
