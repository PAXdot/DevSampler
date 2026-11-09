import React from "react";

export const BoldStats = () => {
  return (
    <section className="bg-background flex flex-col justify-center">
      <div className="flex flex-col gap-20 py-16 max-w-7xl mx-auto px-5 w-full">
        <div className="md:flex justify-between items-center border-b border-border pb-5 gap-8">
          <div className="flex flex-col md:flex-row items-baseline gap-4">
            <span className="md:text-8xl text-8xl lg:text-9xl font-medium tracking-tighter text-foreground shrink-0">
              10B+
            </span>
            <div className="max-w-xs">
              <h3 className="text-xl font-semibold tracking-tight">
                API Calls Monthly
              </h3>
              <p className="text-sm text-muted-foreground text-pretty">
                Serving the world's most demanding applications with zero
                latency.
              </p>
            </div>
          </div>
          <img
            src="https://cdn.21st.dev/assets/mirror/9e/9e304f5e96261a40685f083c0dfd1af95278a6f956a1143f2f7425c38b10b21b.jpg"
            alt="supportive img"
            className="sm:w-96 w-full h-52 object-cover rounded-lg shrink-0 mt-6 md:mt-0"
          />
        </div>

        <div className="flex justify-between items-center gap-5">
          <div>
            <p className="md:text-5xl text-4xl font-medium tracking-tighter text-foreground mb-2 ">
              0.1ms
            </p>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              P99 Latency
            </p>
          </div>
          <div>
            <p className="md:text-5xl text-4xl font-medium tracking-tighter text-foreground mb-2 ">
              142
            </p>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Global Regions
            </p>
          </div>
          <div>
            <p className="md:text-5xl text-4xl font-medium tracking-tighter text-foreground mb-2 ">
              24/7
            </p>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Human Support
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoldStats;
