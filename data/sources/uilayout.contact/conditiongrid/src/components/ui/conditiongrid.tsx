"use client";
import { MoveUpRight } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import React from "react";

interface ProjectsTypes {
  id: string;
  img: string;
  title: string;
  des: string;
}
const projects: ProjectsTypes[] = [
  {
    id: "01",
    img: "https://cdn.21st.dev/assets/mirror/f2/f267202371f1d7603ebceea7cbcac251b6a9f5b035f6ff48146e0e29f85736d8.jpg",
    title: "Distrokings",
    des: "We make your logo communicate with your customers more than words ever could",
  },
  {
    id: "02",
    img: "https://cdn.21st.dev/assets/mirror/ac/ac1b54879a9289f1cf908a8e6e7e4da09828ddd43eef95cae78a0c71cb748c29.jpg",
    title: "Profitables",
    des: "We are dedicated to unlocking your business potential through precision development",
  },
  {
    id: "03",
    img: "https://cdn.21st.dev/assets/mirror/94/94876618573b337e94fc0f2716364c23a6f4e486ccb75e5a25a91af75dd30ca5.jpg",
    title: "Topserve-copiers",
    des: "We are dedicated to unlocking your business potential through precision development",
  },
  {
    id: "04",
    img: "https://cdn.21st.dev/assets/mirror/fc/fc8b7c4531f5c2a277663830ae19cac5569b9e36c97a65e3bd6a515f4435aeb9.jpg",
    title: "Labramart.",
    des: "We specialize in crafting marketing solutions that propel your brand to new heights",
  },
];

export default function ConditionGrid() {
  return (
    <>
      <div className="grid grid-cols-12  gap-4 overflow-hidden px-5 lg:pb-5 pb-2">
        {projects.map((project, index) => {
          let colSpanClass = "sm:col-span-6 col-span-12 ";
          if (index === 0) {
            colSpanClass = " sm:col-span-5 col-span-12 ";
          } else if (index === 1) {
            colSpanClass = "sm:col-span-7 col-span-12 ";
          } else if (index === projects.length - 2) {
            colSpanClass = "sm:col-span-7 col-span-12 ";
          } else if (index === projects.length - 1) {
            colSpanClass = "sm:col-span-5 col-span-12 ";
          }
          return (
            <>
              <motion.article
                key={project.id ?? project.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeOut" }}
                viewport={{ once: false }}
                className={` relative  ${colSpanClass} `}
              >
                <div className="w-auto h-full">
                  <Image
                    src={project?.img}
                    alt={"image"}
                    height={600}
                    width={1200}
                    className="h-full w-full object-cover rounded-xl"
                  />
                </div>
                <div className="absolute lg:bottom-2 bottom-0 text-black w-full p-4 flex justify-between items-center">
                  <h3 className="lg:text-xl text-sm bg-black text-white rounded-xl p-2 px-4">
                    {project.title}
                  </h3>
                  <div className="lg:w-12 w-10 lg:h-12 h-10 text-white grid place-content-center rounded-full bg-black">
                    <MoveUpRight />
                  </div>
                </div>
              </motion.article>
            </>
          );
        })}
      </div>
    </>
  );
}
