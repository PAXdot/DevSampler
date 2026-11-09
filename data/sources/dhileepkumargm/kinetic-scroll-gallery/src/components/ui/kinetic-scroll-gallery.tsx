import React from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const images = [
    "https://cdn.21st.dev/assets/mirror/7f/7fb62730e8781c568dc55eaa0b496550c309bf38e364c09bad513287a4ef521f.jpg",
    "https://cdn.21st.dev/assets/mirror/0a/0aefc11f1129786bae887e632eeaba7bc29b3ab01f915a65944d5fc1540d3e4e.jpg",
    "https://cdn.21st.dev/assets/mirror/24/247113ea79ebac4ec16c17a59582055298faae89a3d1af82ba04619aa606b1ab.jpg",
    "https://cdn.21st.dev/assets/mirror/f8/f8f825984936e0a885572197bcf88262b8755686e9106c74ddb71ec4e44f0d78.jpg",
    "https://cdn.21st.dev/assets/mirror/94/94156fdf4cc4f4e646b9529c954fe242bee3fc7a2c45527fcf77aaa0cf7c3b57.jpg",
    "https://cdn.21st.dev/assets/mirror/c1/c185e1603319f7efc20ba98f5ee461e47800c59d345a2177ce3cc90cf57755bf.jpg",
    "https://cdn.21st.dev/assets/mirror/cb/cb82d711358a692321c88ed996d37553b3e3a0ef6e129b0101f5ec9ea9812e27.jpg",
    "https://cdn.21st.dev/assets/mirror/e9/e967e58c7e0b3cb5afbf9b9a030cf04a858cb3b656daa3a97f98c29cd2e08bea.jpg",
    "https://cdn.21st.dev/assets/mirror/20/20bb204c74441d7aa3933faec6aecd6a505e167b0e42b6cfa18246fb85c402be.jpg",
    "https://cdn.21st.dev/assets/mirror/00/000407abec2003a6181a21c4ed45d6bf95aae8e3ef775292ad85f41e4dc22462.jpg",
    "https://cdn.21st.dev/assets/mirror/71/71a9ab45c2a8a399f6d0d0644179dc0662a711799172f1bf4fa6a69c95878402.jpg",
    "https://cdn.21st.dev/assets/mirror/13/136a9ebd61301d447caa0b36be502f9ee34efbf02d3fc5b486d4e1b58665e325.jpg",
];

const KineticGridItem = ({ image, scrollVelocity }) => {
    // Smooth the velocity value for a more gradual effect
    const smoothedVelocity = useSpring(scrollVelocity, {
        mass: 0.1,
        stiffness: 80,
        damping: 40,
    });

    // Transform the smoothed velocity into a skew value.
    // The faster the scroll, the more it skews.
    const skew = useTransform(smoothedVelocity, [-1500, 0, 1500], [-15, 0, 15]);

    return (
        <motion.div
            className="w-full h-80 relative overflow-hidden rounded-lg"
            style={{ skewX: skew }}
        >
            <img
                src={image}
                alt="A landscape"
                className="absolute inset-0 h-full w-full object-cover"
                style={{
                     transform: "scale(1.15)" // Slight zoom to prevent edges showing on skew
                }}
            />
        </motion.div>
    );
};

export default function KineticScrollGallery() {
    const { scrollYProgress } = useScroll();
    
    // Framer Motion's useScroll provides scrollYVelocity, which is a MotionValue
    // representing the velocity of the scroll in pixels per second.
    const scrollYVelocity = useTransform(
        scrollYProgress,
        [0, 1],
        [0, 1000], 
        { clamp: false }
    );

    return (
         <div className="bg-neutral-900 text-neutral-50 min-h-screen">
            <div className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
                 <div className="mb-12 text-center">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                        Kinetic Scroll Gallery
                    </h1>
                    <p className="mt-4 text-lg text-neutral-300">
                        The faster you scroll, the more the images will distort.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {images.map((img, index) => (
                        <KineticGridItem 
                            key={index} 
                            image={img} 
                            scrollVelocity={scrollYVelocity} 
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

