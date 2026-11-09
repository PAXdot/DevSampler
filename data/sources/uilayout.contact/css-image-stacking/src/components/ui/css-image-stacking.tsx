"use client";
import { ReactLenis } from "lenis/react";

export default function CssImageStacking() {
  return (
    <ReactLenis root>
      <main className="bg-background">
        <div className="wrapper">
          <section className="text-foreground h-screen w-full bg-background grid place-content-center sticky top-0">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-size-[54px_54px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

            <h1 className="2xl:text-7xl text-5xl px-8 font-semibold text-center tracking-tight leading-[120%]">
              CSS Sticky Properties for <br /> Stacking Cards. Scroll down! 👇
            </h1>
          </section>
        </div>

        <section className="text-foreground w-full bg-background">
          <>
            <div className="sm:sticky sm:top-0 w-full">
              <figure className="w-full h-screen flex items-center justify-center">
                <img
                  src="https://cdn.21st.dev/assets/mirror/53/5305ede5b57ef15f0ba1ef9f825d6c274ea1ca7cd9254b83e70e5672b8357f5a.jpg"
                  alt=""
                  className="transition-all duration-300 h-[80%] w-[55%] align-bottom object-cover rounded-md"
                />
              </figure>
            </div>
            <div className="sm:sticky sm:top-2 w-full">
              <figure className="w-full h-screen flex items-center justify-center">
                <img
                  src="https://cdn.21st.dev/assets/mirror/8d/8d887bd823fbf50a3fa53d56e3a24f7f98e30c6f85f63837cd9392e65b312576.jpg"
                  alt=""
                  className="transition-all duration-300 h-[80%] w-[60%] align-bottom object-cover rounded-md [box-shadow:0_-5px_16px_4px_rgba(0,0,0,0.8),0_2px_4px_-1px_rgba(0,0,0,0.06)]"
                />
              </figure>
            </div>
            <div className="sm:sticky sm:top-4 w-full">
              <figure className="w-full h-screen flex items-center justify-center">
                <img
                  src="https://cdn.21st.dev/assets/mirror/40/40cecdbfff61bd0edb6ee2cfab4283eee3659385c1a0ec9acb8a7b4498f939af.jpg"
                  alt=""
                  className="transition-all duration-300 h-[80%] w-[65%] align-bottom object-cover rounded-md"
                />
              </figure>
            </div>
            <div className="sm:sticky sm:top-6 w-full">
              <figure className="w-full h-screen flex items-center justify-center">
                <img
                  src="https://cdn.21st.dev/assets/mirror/11/111ce6943e15078e2d7b1d837fc87b3d616a107400b94fb133981955f579bda7.jpg"
                  alt=""
                  className="transition-all duration-300 h-[80%] w-[70%] align-bottom object-cover rounded-md"
                />
              </figure>
            </div>
            <div className="sm:sticky sm:top-8 w-full">
              <figure className="w-full h-screen flex items-center justify-center">
                <img
                  src="https://cdn.21st.dev/assets/mirror/ef/ef333b9b5e8d36a47a2826e064df81fe45aef8a0e5a8c3614ae618b595c07663.jpg"
                  alt=""
                  className="transition-all duration-300 h-[80%] w-[75%] align-bottom object-cover rounded-md"
                />
              </figure>
            </div>
            <div className="sm:sticky sm:top-12 w-full">
              <figure className="w-full h-screen flex items-center justify-center">
                <img
                  src="https://cdn.21st.dev/assets/mirror/14/1482af442fe748efc49a8cac57704e0fda2d823bc046dcbd940ed7659577ee18.jpg"
                  alt=""
                  className="transition-all duration-300 h-[80%] w-[80%] align-bottom object-cover rounded-md"
                />
              </figure>
            </div>
          </>
        </section>

        <footer className="group bg-background">
          <h1 className="text-[16vw] translate-y-20 leading-[100%] uppercase font-semibold text-center bg-linear-to-r from-neutral-400 to-neutral-800 bg-clip-text text-transparent transition-all ease-linear">
            ui-layout
          </h1>
          <div className="bg-background h-40 relative z-10 grid place-content-center text-2xl rounded-tr-full rounded-tl-full"></div>
        </footer>
      </main>
    </ReactLenis>
  );
}
