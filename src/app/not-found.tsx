import NotFound from "@/common/not-found";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 Not Found - Rubel Mart",
  description:
    "Rubel Mart is a modern online marketplace offering quality products, secure shopping, fast delivery, and a seamless e-commerce experience for modern living.",
};

const NotFoundPage = () => {
  return (
    <div>
      <NotFound />
    </div>
  );
};

export default NotFoundPage;
