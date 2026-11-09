import React from 'react';
import { motion } from 'framer-motion';
import { GridPattern } from '@/components/ui/grid-pattern';

type Testimonial = {
	name: string;
	role: string;
	image: string;
	company: string;
	quote: string;
};

const testimonials: Testimonial[] = [
	{
		quote:
			'Multi Techno transformed the way we manage our operations. Their ERP system is reliable, scalable, and truly easy to use.',
		name: 'Ali Khan',
		role: 'HR Manager',
		company: 'Pak Mission Society',
		image: 'https://cdn.21st.dev/assets/mirror/35/3560ff7cbc9e86c333fccefe248e3ea5cdade4e46f6b2fc85d84755896cb2e5a.jpg',
	},
	{
		quote:
			'Their ERP platform streamlined our business processes. What impressed me most is their dedication to client success and support.',
		name: 'Sara Ahmed',
		role: 'CEO',
		company: 'Galaxy Five Home',
		image: 'https://cdn.21st.dev/assets/mirror/aa/aa4787be04406deac036c92ff766754aa511214f00a4ee181ada4fc2c6622b6f.jpg',
	},
	{
		quote:
			'They took time to understand our unique requirements and delivered a system that fits seamlessly into daily operations.',
		name: 'Imran Hussain',
		role: 'Manager',
		company: 'Al-Tayyab Foods',
		image: 'https://cdn.21st.dev/assets/mirror/ca/ca627d33f20754d25814a1d622a9f4837d56d5809c6fa7c14f2f2be7e3f36a05.jpg',
	},
	{
		quote:
			'From onboarding to ongoing support, the Multi Techno team has been responsive, professional, and incredibly easy to work with.',
		name: 'Fatima Noor',
		role: 'Director',
		company: 'Shafiqe Foods',
		image: 'https://cdn.21st.dev/assets/mirror/aa/aaab4a0fbd8e2ad7a7ec4ccaa827918df0d6af1732227caa84d309cb49b45c21.jpg',
	},
	{
		quote:
			'Their collaborative approach makes us feel like partners, not just clients. Every strategy session brings new value to our business.',
		name: 'Usman Raza',
		role: 'CTO',
		company: 'NextGen Solutions',
		image: 'https://cdn.21st.dev/assets/mirror/f6/f61f4b3793465be0aa4c3b577a6ccb95ae48ccfb751e7aaa6b5477aadc5255a8.jpg',
	},
	{
		quote:
			'We rely on their ERP to manage critical operations. The platform is intuitive, and the support team is always proactive.',
		name: 'Ayesha Siddiqui',
		role: 'Product Lead',
		company: 'Bright Future Tech',
		image: 'https://cdn.21st.dev/assets/mirror/f9/f90a38d15ecefa1704387dfba523d1c3e78b6344bcee586e0378e6af5e5f7cd0.jpg',
	},
	{
		quote:
			'Multi Techno gave us better visibility across departments. The insights and efficiency gains have been game-changing for our company.',
		name: 'Bilal Sheikh',
		role: 'Operations Head',
		company: 'Metro Logistics',
		image: 'https://cdn.21st.dev/assets/mirror/09/0939e4e89294f566a05be48754bd62dab535e01a85e1f96b6bcc7b26a968f294.jpg',
	},
	{
		quote:
			'The ERP system brought structure to our finance operations. It’s user-friendly and perfectly tailored to our organizational needs.',
		name: 'Nadia Karim',
		role: 'Finance Manager',
		company: 'Alpha Traders',
		image: 'https://cdn.21st.dev/assets/mirror/5b/5bd4960f310603d603fb4643b0b5042bc8ed664dc75c2403c1fda586f1eca17c.jpg',
	},
	{
		quote:
			'Dependable, efficient, and forward-thinking. Multi Techno has become a trusted partner in helping us scale confidently worldwide.',
		name: 'Omar Farooq',
		role: 'Managing Director',
		company: 'VisionX Global',
		image: 'https://cdn.21st.dev/assets/mirror/ee/ee463534f5237559e041e9525c2c8475402585f4c4dbb469d3d89df4da3665bf.jpg',
	},
	{
		quote:
			'Their attention to detail and continuous improvements keep us ahead of the curve. Working with them feels effortless every time.',
		name: 'Sana Iqbal',
		role: 'Head of Strategy',
		company: 'BlueWave Consulting',
		image: 'https://cdn.21st.dev/assets/mirror/8d/8d0417f0910586650f889adf5f72fb8ad336f07247cbfd9da9dd6db02546dd00.jpg',
	},
	{
		quote:
			'We’ve tested other ERPs, but nothing matched their level of customization and hands-on support. Highly recommend their services.',
		name: 'Hamza Tariq',
		role: 'Operations Manager',
		company: 'Green Valley Farms',
		image: 'https://cdn.21st.dev/assets/mirror/85/858ff02a00279d25f120a1b6bf7c56a18bd1e0130a5745a6d109de0cade1a26c.jpg',
	},
	{
		quote:
			'Multi Techno’s system made our business smarter, not harder. The partnership has been valuable for both efficiency and growth.',
		name: 'Mehwish Zafar',
		role: 'COO',
		company: 'Skyline Apparel',
		image: 'https://cdn.21st.dev/assets/mirror/55/55cf6231499bcdc496f15ff1d28d4170ac9b99e9279495caa44fca70886d8b2e.jpg',
	},
];

export function TestimonialsSection() {
	return (
		<section className="relative w-full pt-10 pb-20 px-4">
			<div aria-hidden className="absolute inset-0 isolate z-0 contain-strict">
				<div className="bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,--theme(--color-foreground/.06)_0,hsla(0,0%,55%,.02)_50%,--theme(--color-foreground/.01)_80%)] absolute top-0 left-0 h-320 w-140 -translate-y-87.5 -rotate-45 rounded-full" />
				<div className="bg-[radial-gradient(50%_50%_at_50%_50%,--theme(--color-foreground/.04)_0,--theme(--color-foreground/.01)_80%,transparent_100%)] absolute top-0 left-0 h-320 w-60 [translate:5%_-50%] -rotate-45 rounded-full" />
				<div className="bg-[radial-gradient(50%_50%_at_50%_50%,--theme(--color-foreground/.04)_0,--theme(--color-foreground/.01)_80%,transparent_100%)] absolute top-0 left-0 h-320 w-60 -translate-y-87.5 -rotate-45 rounded-full" />
			</div>
			<div className="mx-auto max-w-5xl space-y-8">
				<div className="flex flex-col gap-2">
					<h1 className="text-3xl font-bold tracking-wide text-balance md:text-4xl lg:text-5xl xl:text-6xl xl:font-extrabold">
						Real Results, Real Voices
					</h1>
					<p className="text-muted-foreground text-sm md:text-base lg:text-lg">
						See how businesses are thriving with our ERP — real stories, real
						impact, real growth.
					</p>
				</div>
				<div className="relative grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
					{testimonials.map(({ name, role, company, quote, image }, index) => (
						<motion.div
							initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
							whileInView={{
								filter: 'blur(0px)',
								translateY: 0,
								opacity: 1,
							}}
							viewport={{ once: true }}
							transition={{ delay: 0.1 * index + 0.1, duration: 0.8 }}
							key={index}
							className="border-foreground/25 relative grid grid-cols-[auto_1fr] gap-x-3 overflow-hidden border border-dashed p-4"
						>
							<div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)]">
								<div className="from-foreground/5 to-foreground/2 absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]">
									<GridPattern
										width={25}
										height={25}
										x={-12}
										y={4}
										strokeDasharray="3"
										className="stroke-foreground/20 absolute inset-0 h-full w-full mix-blend-overlay"
									/>
								</div>
							</div>
							<img
								alt={name}
								src={image}
								loading="lazy"
								className="size-9 rounded-full"
							/>
							<div>
								<div className="-mt-0.5 -space-y-0.5">
									<p className="text-sm md:text-base">{name}</p>
									<span className="text-muted-foreground block text-[11px] font-light tracking-tight">
										{role} at {company}
									</span>
								</div>
								<blockquote className="mt-3">
									<p className="text-foreground text-sm font-light tracking-wide">
										{quote}
									</p>
								</blockquote>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
