import { seoFaqsData } from "@/constants/seo-faqs";

const defaultDescription =
  "Rubel Mart is a modern and trusted e-commerce marketplace in Bangladesh, offering a seamless online shopping experience with a wide range of products including electronics, smartphones, gadgets, fashion, clothing, footwear, beauty products, home and kitchen essentials, lifestyle accessories, groceries, health and personal care items, and more. Shop authentic products from trusted local and international brands, enjoy competitive prices, secure payments, fast nationwide delivery, easy returns, flash sales, exclusive discounts, and exceptional customer support. Discover everything you need in one place with Rubel Mart, your reliable online shopping destination in Bangladesh.";

const defaultKeywords = [
  "online shopping Bangladesh",
  "ecommerce Bangladesh",
  "online marketplace",
  "buy electronics online",
  "fashion online Bangladesh",
  "mobile phones Bangladesh",
  "home appliances",
  "beauty products",
  "online grocery",
  "flash sale",
  "secure online shopping",
  "Rubel Mart",
];

type SchemaType =
  | "Organization"
  | "WebSite"
  | "OnlineStore"
  | "Product"
  | "Article"
  | "BlogPosting"
  | "BreadcrumbList"
  | "FAQPage"
  | string;

type SeoParams = {
  title: string;
  description: string;
  url?: string;
  image?: string;
  keywords?: string[];
  schemaTypes?: SchemaType[];
  breadcrumbs?: { name: string; url: string }[];
  faqs?: { question: string; answer: string }[];
  authorName?: string;
  appDetails?: {
    operatingSystem: string;
    applicationCategory: string;
    offers?: { price: string; priceCurrency: string };
  };
};

export const generateSeoMetadata = ({
  title,
  description = defaultDescription,
  url = "https://rubelmart.com",
  image = "https://res.cloudinary.com/dv2ocmcyo/image/upload/v1782229601/rubel-mart-logo_ihlhjn.png",
  keywords = defaultKeywords,
  schemaTypes = ["Organization"],
  breadcrumbs,
  faqs = seoFaqsData,
}: SeoParams) => {
  const socialLinks = [
    "https://facebook.com/rubelmart",
    "https://instagram.com/rubelmart",
    "https://linkedin.com/company/rubelmart",
    "https://youtube.com/@rubelmart",
    "https://tiktok.com/@rubelmart",
  ];

  const buildSchema = (schemaType: SchemaType) => {
    switch (schemaType) {
      case "Organization":
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Rubel Mart",
          url,
          logo: image,
          image,
          sameAs: socialLinks,
          description,
        };

      case "WebSite":
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Rubel Mart",
          url,
          description,
          potentialAction: {
            "@type": "SearchAction",
            target: `${url}/search?q={search_term_string}`,
            "query-input": "required name=search_term_string",
          },
        };

      case "OnlineStore":
        return {
          "@context": "https://schema.org",
          "@type": "OnlineStore",
          name: "Rubel Mart",
          url,
          image,
          description,
          currenciesAccepted: "BDT",
          paymentAccepted: [
            "Cash On Delivery",
            "bKash",
            "Nagad",
            "Rocket",
            "Visa",
            "MasterCard",
          ],
        };

      case "Product":
        return {
          "@context": "https://schema.org",
          "@type": "Product",
          name: title,
          image,
          description,
          brand: {
            "@type": "Brand",
            name: "Rubel Mart",
          },
        };

      case "Article":
      case "BlogPosting":
        return {
          "@context": "https://schema.org",
          "@type": schemaType,
          headline: title,
          image,
          author: {
            "@type": "Organization",
            name: "Rubel Mart",
          },
          publisher: {
            "@type": "Organization",
            name: "Rubel Mart",
            logo: {
              "@type": "ImageObject",
              url: image,
            },
          },
          datePublished: new Date().toISOString(),
          description,
          url,
        };

      case "BreadcrumbList":
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement:
            breadcrumbs?.map((b, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: b.name,
              item: b.url,
            })) || [],
        };

      case "FAQPage":
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity:
            faqs?.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })) || [],
        };

      default:
        return {};
    }
  };

  const schemas = schemaTypes.map(buildSchema);

  return {
    title,
    description,
    keywords: keywords.join(", "),
    metadataBase: new URL(url),

    openGraph: {
      title,
      description,
      url,
      siteName: "Rubel Mart",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "Rubel Mart",
        },
      ],
      locale: "en_US",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },

    schemas,
  };
};
