import UserProfile from "@/features/profile";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile - Rubel Mart",
  description:
    "Rubel Mart is a modern online marketplace offering quality products, secure shopping, fast delivery, and a seamless e-commerce experience for modern living.",
};

const Profile = () => {
  return <UserProfile />;
};

export default Profile;
