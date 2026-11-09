'use client';

import React, { useEffect, useRef } from 'react';
import { ImageTrailController } from '@/lib/utils';

const flairImages = [
  "https://cdn.21st.dev/assets/mirror/7f/7fa03f07d6ecc851e6f9ecfc2fa3d401ee781e1c3ac345d57697b9792a349b32.png",
  "https://cdn.21st.dev/assets/mirror/eb/eb232a2025c87072e321d8b18a63130ebd6c2cf17360721a13152411548b8064.png",
  "https://cdn.21st.dev/assets/mirror/b8/b8d012bb9179f6ddf83cfb8e9f0d536bda7444a4838c5e691427c5f1a9e78d0e.png",
  "https://cdn.21st.dev/assets/mirror/61/6182e640b5507304132cfa3b61cc62ec45f0b0a85a883ad80a5ff5a397748a5a.png",
  "https://cdn.21st.dev/assets/mirror/b6/b636532c14ec5ec65e1bcb697a4d374f688783477a605ced41bca4606c38b9b0.png",
  "https://cdn.21st.dev/assets/mirror/7f/7f7a80245c0e9bbb97db3b452322f89b7666e27cf41eae1cf235a4c186637d5b.png",
  "https://cdn.21st.dev/assets/mirror/b2/b2d22aafe57a2ab515ef4f48cbc934db635b091d726ad3a946b3d0853bfd249e.png",
  "https://cdn.21st.dev/assets/mirror/bc/bc221d73136c58033b7c56f88f0de1874969299d8132b636e93279a9d1f5f0c3.png",
  "https://cdn.21st.dev/assets/mirror/ee/ee76d11e20654a6f2b0ab123614c71fbf74d82d5c2ac9563de88bcfcf195ee75.png",
  "https://cdn.21st.dev/assets/mirror/7f/7fa03f07d6ecc851e6f9ecfc2fa3d401ee781e1c3ac345d57697b9792a349b32.png",
  "https://cdn.21st.dev/assets/mirror/eb/eb232a2025c87072e321d8b18a63130ebd6c2cf17360721a13152411548b8064.png",
  "https://cdn.21st.dev/assets/mirror/b8/b8d012bb9179f6ddf83cfb8e9f0d536bda7444a4838c5e691427c5f1a9e78d0e.png",
  "https://cdn.21st.dev/assets/mirror/61/6182e640b5507304132cfa3b61cc62ec45f0b0a85a883ad80a5ff5a397748a5a.png",
  "https://cdn.21st.dev/assets/mirror/b6/b636532c14ec5ec65e1bcb697a4d374f688783477a605ced41bca4606c38b9b0.png",
  "https://cdn.21st.dev/assets/mirror/7f/7f7a80245c0e9bbb97db3b452322f89b7666e27cf41eae1cf235a4c186637d5b.png",
  "https://cdn.21st.dev/assets/mirror/b2/b2d22aafe57a2ab515ef4f48cbc934db635b091d726ad3a946b3d0853bfd249e.png",
  "https://cdn.21st.dev/assets/mirror/bc/bc221d73136c58033b7c56f88f0de1874969299d8132b636e93279a9d1f5f0c3.png",
  "https://cdn.21st.dev/assets/mirror/ee/ee76d11e20654a6f2b0ab123614c71fbf74d82d5c2ac9563de88bcfcf195ee75.png",
];

export function MouseTrailComponent() {
  const contentRef = useRef<HTMLDivElement>(null);
  const controllerRef = useRef<ImageTrailController | null>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    const flairElements = Array.from(
      contentRef.current.querySelectorAll('.flair')
    ) as HTMLElement[];

    const controller = new ImageTrailController(flairElements, 100);
    controllerRef.current = controller;
    controller.init();

    const handleMouseMove = (e: MouseEvent) => {
      controller.setMousePos(e.clientX, e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      controller.destroy();
    };
  }, []);

  return (
    <>
      <p>wiggle your mouse around.</p>
      <div className="content" ref={contentRef}>
        {flairImages.map((src, index) => (
          <img
            key={index}
            className="flair"
            src={src}
            alt=""
          />
        ))}
      </div>
    </>
  );
}
