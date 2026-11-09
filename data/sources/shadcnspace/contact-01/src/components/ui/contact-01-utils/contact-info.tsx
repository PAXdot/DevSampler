"use client";

import { Separator } from "@/components/ui/separator";
import { Marquee } from "@/components/ui/contact-01-utils/marquee";

type BrandList = {
  image: string;
  name: string;
  lightimg: string;
};

const brandList: BrandList[] = [
  {
    image:
      "https://cdn.21st.dev/assets/localized/06b923e801ddc120d59ea319f883b9e7c6393206d3a19efb8b1b0cc3e69b0726.svg",
    lightimg:
      "https://cdn.21st.dev/assets/localized/e2595ac3105497eea778b085f6011b1ffce03a484dd36d8a0e56c8a194051de8.svg",
    name: "Brand 1",
  },
  {
    image:
      "https://cdn.21st.dev/assets/localized/1cae4f7b5e3c17d538fa82d1a5d364a147b33ceeb676bfb7df9928b18c97915b.svg",
    lightimg:
      "https://cdn.21st.dev/assets/localized/348896643843e76455068d47a9ff48e4ad2d2d1e16431274e60b081f211d3658.svg",
    name: "Brand 2",
  },
  {
    image:
      "https://cdn.21st.dev/assets/localized/f5b89f822fb43fb4ff08063a07f6747db47b2ede5af4baa5e9b1a3a36f366073.svg",
    lightimg:
      "https://cdn.21st.dev/assets/localized/46753cadec5f27c33cde1879234dd7543529955915365f4fd5e09d483161e1cb.svg",
    name: "Brand 3",
  },
  {
    image:
      "https://cdn.21st.dev/assets/localized/a09ab47a557260b047a09b5a525ab77938ae8f63372d8cf736c9bbea35ea45e2.svg",
    lightimg:
      "https://cdn.21st.dev/assets/localized/8e6b3409f8d84aa92a109d2fb5658e85744ddf8ebaaa0f927822bbad1c107714.svg",
    name: "Brand 4",
  },
  {
    image:
      "https://cdn.21st.dev/assets/localized/46ae0ae90e5b7703a37a5a0bf835f0ffc07c0ded408fc35f5d899f33ad000872.svg",
    lightimg:
      "https://cdn.21st.dev/assets/localized/7df328938f41858f52bf617bc37a6a396240799cd6908d832e4cd13e19c4d5e8.svg",
    name: "Brand 5",
  },
];

const ContactInfo = () => {
  return (
    <div className="flex flex-col md:gap-12 gap-8">
      <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-left-10 duration-1000 ease-in-out fill-mode-both">
        <div className="flex gap-3 items-center">
          <div className="w-2 h-2 rounded-full bg-teal-400"></div>
          <p className="text-base font-normal text-muted-foreground">
            We can help
          </p>
        </div>
        <p className="text-3xl  md:text-4xl font-medium text-foreground">
          Let’s discuss about your project and take it the next level.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row justify-between gap-6 animate-in fade-in slide-in-from-left-10 duration-1000 delay-100 ease-in-out fill-mode-both">
        <div className="flex flex-col gap-1">
          <p className="text-sm font-normal text-muted-foreground">Phone</p>
          <a
            href="tel:+323-25-8964"
            className="text-base font-medium text-primary"
          >
            +323-25-8964
          </a>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm font-normal text-muted-foreground">Email</p>
          <a
            href="mailto:me@shadcnspace.com"
            className="text-base font-medium text-primary"
          >
            me@shadcnspace.com
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-1 animate-in fade-in slide-in-from-left-10 duration-1000 delay-100 ease-in-out fill-mode-both">
        <p className="text-sm font-normal text-muted-foreground">Location</p>
        <p className="text-base font-medium text-primary">
          Mark Avenue, Dalls Road, New York
        </p>
      </div>
      <Separator orientation="horizontal" />
      <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-100 ease-in-out fill-mode-both">
        <p className="text-base font-normal text-muted-foreground ">
          Trusted by
        </p>
        <Marquee pauseOnHover className="[--duration:20s] p-0">
          {brandList.map((brand, index) => (
            <div key={index}>
              <img
                src={brand.image}
                alt={brand.name}
                className="w-36 h-8 mr-6 lg:mr-20 dark:hidden"
              />
              <img
                src={brand.lightimg}
                alt={brand.name}
                className="hidden dark:block w-36 h-8 mr-12 lg:mr-20"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default ContactInfo;
