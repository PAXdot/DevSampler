"use client";

import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Brand {
  name: string;
  logo: string;
  href?: string;
  productCount?: number;
}

interface Ecommerce32Props {
  badge?: {
    label: string;
    variant?: "default" | "secondary" | "outline";
  };
  heading?: string;
  description?: string;
  brands?: Brand[];
  productCountLabel?: string;
  className?: string;
}

export const ecommerce32Demo: Ecommerce32Props = {
  badge: { label: "Brands", variant: "secondary" },
  heading: "Shop by Brand",
  description: "Discover your favorite brands all in one place",
  productCountLabel: "products",
  brands: [
    {
      name: "Nike",
      logo: "https://cdn.21st.dev/assets/localized/25c1a531576ebf955657b3e926b62a5da994292f6429a56bf8700021871b993d.png",
      href: "https://beste.co",
      productCount: 342,
    },
    {
      name: "Adidas",
      logo: "https://cdn.21st.dev/assets/localized/f6213d396bec055b075ee6cdc461d8ced5e086cb2411e2aa4e260b8b5135c22c.png",
      href: "https://beste.co",
      productCount: 287,
    },
    {
      name: "Puma",
      logo: "https://cdn.21st.dev/assets/localized/8fc20985c7b88bfbc6abc29ece54dc3355fad2281d76af039ea5ef3ffe8bedf3.png",
      href: "https://beste.co",
      productCount: 198,
    },
    {
      name: "New Balance",
      logo: "https://cdn.21st.dev/assets/localized/131ac4e1eaa009c1835baeb58954754925f48f86a2dec01b6b6afa3dcd48e499.png",
      href: "https://beste.co",
      productCount: 234,
    },
    {
      name: "Converse",
      logo: "https://cdn.21st.dev/assets/localized/116b235857b64f2d253469401a87db39504b21ea3bdc45ad4e02bdddceb4979f.png",
      href: "https://beste.co",
      productCount: 189,
    },
  ],
};

export function Ecommerce32({
  badge,
  heading,
  description,
  brands = [],
  productCountLabel,
  className,
}: Ecommerce32Props) {
  return (
    <section className={cn("py-16 md:py-24 w-full", className)}>
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {/* Header */}
        {(badge || heading || description) && (
          <div className="mx-auto mb-12 max-w-3xl text-center">
            {badge && (
              <div className="mb-4 flex justify-center">
                <Badge variant={badge.variant ?? "default"}>
                  {badge.label}
                </Badge>
              </div>
            )}
            {heading && (
              <h2 className="text-2xl font-semibold md:text-4xl">{heading}</h2>
            )}
            {description && (
              <p className="mt-4 text-base text-muted-foreground md:text-lg">
                {description}
              </p>
            )}
          </div>
        )}

        {/* Brand Grid */}
        <div className="flex flex-wrap justify-center gap-4">
          {brands.map((brand, index) => (
            <Link
              key={index}
              href={brand.href ?? "#"}
              className="group/ecommerce32-brand flex w-[calc(50%-0.5rem)] flex-col items-center justify-center rounded-xl border bg-background p-6 transition-all hover:border-primary hover:shadow-lg md:w-[calc(33.333%-0.75rem)] lg:w-[calc(16.666%-0.85rem)]"
            >
              <div className="relative mb-3 flex h-12 w-full items-center justify-center grayscale transition-all group-hover/ecommerce32-brand:grayscale-0">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  width={100}
                  height={48}
                  className="max-h-full object-contain opacity-50 dark:invert dark:group-hover/ecommerce32-brand:invert-0 group-hover/ecommerce32-brand:opacity-100 transition-all duration-300"
                />
              </div>
              <p className="text-center text-sm font-medium">{brand.name}</p>
              {brand.productCount && productCountLabel && (
                <p className="mt-1 text-xs text-muted-foreground">
                  {brand.productCount} {productCountLabel}
                </p>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Ecommerce32;
