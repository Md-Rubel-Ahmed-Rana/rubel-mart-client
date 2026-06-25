import Link from "next/link";
import Image from "next/image";
import DownloadAppButton from "@/pwa/DownloadAppButton";
import { SiFacebook, SiGithub, SiWhatsapp } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="mb-4 inline-flex items-center gap-3">
              <Image
                src={"/logo.png"}
                alt="Rubel Mart"
                width={140}
                height={80}
              />

              <div>
                <h3 className="text-xl font-bold">Rubel Mart</h3>
                <p className="text-xs text-muted-foreground">
                  Digital Marketplace
                </p>
              </div>
            </Link>

            <p className="max-w-md text-sm leading-7 text-muted-foreground">
              Your trusted destination for premium digital templates, creative
              assets, and professional resources. Shop confidently with secure
              payments, instant delivery, and dedicated customer support.
            </p>

            <div className="mt-6 flex gap-3">
              <Link
                href="https://www.facebook.com/mdrubelahmedrana521"
                target="_blank"
                className="rounded-lg border p-2 transition hover:bg-accent hover:text-accent-foreground"
              >
                <SiFacebook className="h-4 w-4" />
              </Link>

              <Link
                href="https://www.linkedin.com/in/md-rubel-ahmed-rana"
                target="_blank"
                className="rounded-lg border p-2 transition hover:bg-accent hover:text-accent-foreground"
              >
                <FaLinkedin className="h-4 w-4" />
              </Link>

              <Link
                href="https://github.com/Md-Rubel-Ahmed-Rana"
                target="_blank"
                className="rounded-lg border p-2 transition hover:bg-accent hover:text-accent-foreground"
              >
                <SiGithub className="h-4 w-4" />
              </Link>

              <Link
                href="https://wa.link/63ahuf"
                target="_blank"
                className="rounded-lg border p-2 transition hover:bg-accent hover:text-accent-foreground"
              >
                <SiWhatsapp className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Get the App</h4>

            <p className="mb-4 text-sm text-muted-foreground">
              Install Rubel Mart for faster browsing, offline support, and
              instant notifications.
            </p>

            <DownloadAppButton />
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Shop</h4>

            <div className="space-y-3 text-sm">
              <Link href="/templates" className="block hover:text-primary">
                Templates
              </Link>

              <Link href="/categories" className="block hover:text-primary">
                Categories
              </Link>

              <Link href="/new-arrivals" className="block hover:text-primary">
                New Arrivals
              </Link>

              <Link href="/offers" className="block hover:text-primary">
                Offers
              </Link>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Customer Care</h4>

            <div className="space-y-3 text-sm">
              <Link href="/account" className="block hover:text-primary">
                My Account
              </Link>

              <Link href="/orders" className="block hover:text-primary">
                Orders
              </Link>

              <Link href="/wishlist" className="block hover:text-primary">
                Wishlist
              </Link>

              <Link href="/contact" className="block hover:text-primary">
                Contact
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-6">
          <div className="flex flex-col gap-3 text-center text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} Rubel Mart. All rights reserved.</p>

            <p>Built with ❤️ in Bangladesh</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
