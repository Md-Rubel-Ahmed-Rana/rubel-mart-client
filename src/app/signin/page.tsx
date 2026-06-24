import Signin from "@/features/auth/signin";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Signin - Rubel Mart",
  description:
    "Rubel Mart is a modern online marketplace offering quality products, secure shopping, fast delivery, and a seamless e-commerce experience for modern living.",
};

const SigninPage = () => {
  return (
    <div className="h-screen">
      <div className="max-w-3xl mx-auto w-full flex justify-center items-center h-full max-h-[70dvh]">
        <Signin />
      </div>
    </div>
  );
};

export default SigninPage;
