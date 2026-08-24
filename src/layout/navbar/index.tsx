"use client";

import { useGetCurrentUserQuery } from "@/apis/authApi";
import DesktopNavbar from "./desktop-navbar";
import MobileNavbar from "./mobile-navbar";
import { ICurrentUser } from "@/types/auth.type";

const Navbar = () => {
  const { data, isLoading } = useGetCurrentUserQuery();
  const user = data?.data as ICurrentUser;
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <DesktopNavbar user={user} isLoading={isLoading} />
      <MobileNavbar user={user} />
    </header>
  );
};

export default Navbar;
