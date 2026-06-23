"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function SearchBar() {
  return (
    <div className="relative w-full max-w-2xl">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

      <Input
        placeholder="Search products, brands, categories..."
        className="pl-10 rounded-full bg-muted border-border focus-visible:ring-primary"
      />
    </div>
  );
}
