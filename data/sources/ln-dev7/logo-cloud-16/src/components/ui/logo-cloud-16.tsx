const logos = [
  {
    name: "Vercel",
    src: "https://cdn.21st.dev/assets/localized/9ab122a189ccd2d20a69055dec17a47bd884f17964a566f146c7d37a5415b4f9.svg",
  },
  {
    name: "Stripe",
    src: "https://cdn.21st.dev/assets/localized/fb22a81ae77c0e51c1d76cfaea2cdd606bb5cb9b61bfa6d9e69a3627d6cec930.svg",
  },
  {
    name: "Linear",
    src: "https://cdn.21st.dev/assets/localized/4ccee1015b0a3ac9befa693a822ba9e3b6e7caee4ecc7611943b105ca5885b45.svg",
  },
  {
    name: "Notion",
    src: "https://cdn.21st.dev/assets/localized/1cb8fa170f5ce095201559ef7a04910a7254f09835b42164ef6a89b5f0143c16.svg",
  },
  {
    name: "Supabase",
    src: "https://cdn.21st.dev/assets/localized/40978c2f31871f0448520b3b7a678ec4ed8f286d88f9ce8599b1d6760342ca01.svg",
  },
  {
    name: "Figma",
    src: "https://cdn.21st.dev/assets/localized/fd9a203fbb40cd727cc31504d662ef724ad4cc55a0620e99d29038831673a1ed.svg",
  },
  {
    name: "Anthropic",
    src: "https://cdn.21st.dev/assets/localized/d1d32df582207632d46b9139e1360b9755d1a815bebfbb7978bd8db2dec68b54.svg",
  },
];

export default function LogoCloud16() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-6 sm:px-10">
        <p className="text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Trusted by teams at
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-14">
          {logos.map((logo) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={logo.name}
              src={logo.src}
              alt={logo.name}
              className="h-6 w-auto opacity-50 grayscale transition-all duration-200 hover:opacity-90 dark:invert sm:h-7"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
