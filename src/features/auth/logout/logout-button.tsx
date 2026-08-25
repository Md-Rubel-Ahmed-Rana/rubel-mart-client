"use client";

import { useRouter } from "next/navigation";
import { LogOut, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useLogoutMutation } from "@/apis/authApi";

const LogoutButton = () => {
  const router = useRouter();

  const [userLogout, { isLoading }] = useLogoutMutation();

  const handleUserLogout = async () => {
    try {
      const response = await userLogout().unwrap();
      if (response?.status_code === 200) {
        toast.success(
          response?.message ||
            response?.data?.message ||
            "Logged out successfully.",
        );

        router.replace("/signin");
        router.refresh();
      }
    } catch (error: any) {
      console.error(error);
      toast.error(
        error?.message ||
          error?.data?.message ||
          "Failed to logout. Please try again.",
      );
    }
  };

  return (
    <button
      onClick={handleUserLogout}
      disabled={isLoading}
      className="w-full justify-start items-center gap-2 flex cursor-pointer"
    >
      {isLoading ? (
        <Loader2 className="size-4 animate-spin" />
      ) : (
        <LogOut className="size-4" />
      )}

      <span>{isLoading ? "Logging out..." : "Logout"}</span>
    </button>
  );
};

export default LogoutButton;
