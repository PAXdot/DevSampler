// shadcn
import { Button } from "@/components/ui/button";

//  ------------------------------ | PORTFOLIO 9 | ------------------------------  //

const projects = [
  {
    title: "Breathe In",
    description:
      "Better a diamond with a flaw than a pebble without one. It's about creating yourself.",
    bgColor: "bg-[#80b3ad]",
    image:
      "https://cdn.21st.dev/assets/localized/468ea6763477bf62330b8bd6830ab925cb20d121f4bdbfc8ce8847dd68f3e46a.png",
    isWide: true,
  },
  {
    title: "Clock Me",
    description: "Better a diamond with a flaw than a pebble without one.",
    bgColor: "bg-[#f48c68]",
    image:
      "https://cdn.21st.dev/assets/localized/3f52b612abfb1c1fe0d488e46d2ee18266f68d5215a1a8b98c588aa5b4e0dfb4.png",
    isWide: false,
  },
  {
    title: "Stream Co",
    description: "Better a diamond with a flaw than a pebble without one.",
    bgColor: "bg-[#3c9bf2]",
    image:
      "https://cdn.21st.dev/assets/localized/d8bddc6a71e5c9991c88edeb5eb231813cae0ac23b1cadc12e66fd8f29454040.png",
    isWide: false,
  },
  {
    title: "Nirvanous",
    description:
      "Better a diamond with a flaw than a pebble without one. It's about creating yourself.",
    bgColor: "bg-[#7a60f9]",
    image:
      "https://cdn.21st.dev/assets/localized/f06acde1d097f0af17ee009592294311872511c272ba7a85e3517d789748b742.png",
    isWide: true,
  },
];

export default function Portfolio9() {
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <h2 className="text-3xl text-foreground sm:text-4xl lg:text-5xl">
              Creative Solutions To <br className="hidden sm:inline" />
              Improve Your Business
            </h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              Only those who risk going too far can possibly find out how far
              one can go.
            </p>
          </div>
          <Button
            size="lg"
            className="rounded-full hover:translate-y-1 hover:opacity-90"
          >
            View Portfolio
          </Button>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12 lg:gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-[2rem] ${project.bgColor} ${
                project.isWide ? "md:col-span-7" : "md:col-span-5"
              } h-[380px] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:h-[450px] lg:h-[480px]`}
            >
              {/* Text Content */}
              <div className="absolute top-8 right-8 left-8 z-20 flex flex-col gap-2 sm:top-10 sm:right-10 sm:left-10">
                <h3 className="text-2xl font-bold text-white sm:text-3xl">
                  {project.title}
                </h3>
                <p className="max-w-md text-sm leading-relaxed text-white/90 sm:text-base">
                  {project.description}
                </p>
              </div>

              {/* Mockup Image */}
              <div className="mt-auto flex w-full justify-center overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
