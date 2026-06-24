import Signup from "@/features/auth/signup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Signup - Rubel Mart",
  description:
    "Rubel Mart is a modern online marketplace offering quality products, secure shopping, fast delivery, and a seamless e-commerce experience for modern living.",
};

const SignUpPage = () => {
  return (
    <div className="max-w-3xl mx-auto w-full flex justify-center items-center h-screen">
      <Signup />
    </div>
  );
};

export default SignUpPage;
