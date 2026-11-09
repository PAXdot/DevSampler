"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const integrations = [
  "https://cdn.21st.dev/assets/mirror/a3/a33a47a20c0ec6b0c13af43ae681bf73023e4a35f792cb055700e94d467f236d.svg",
  "https://cdn.21st.dev/assets/mirror/9e/9eb6ffcfa297dc25aebd90fd7930e9d4ad724d8cd496d4621df28ddc29631d77.png", // LinkedIn
  "https://cdn.21st.dev/assets/mirror/db/dbb85b3a7c293aac2fcc7e88a233972ae11ec15e318701d8d827422a4424a055.png", // Slack
  "https://cdn.21st.dev/assets/mirror/a4/a4ba38daa74881eab0c9f6a6393238b573310b29c9988c3588b96e7f80bce625.png", // Spotify
  "https://cdn.21st.dev/assets/mirror/2f/2f54914b7ca6b3c1d20ecf16bdf9ebdbca0634f33198658b7e8562f9f01e75ee.png", // Facebook
  "https://cdn.21st.dev/assets/mirror/f0/f01a041f7fd30657029d43bcb9566df46d14d1f038e2ba916c3ea31787ee5bc0.png", // Stripe
  "https://cdn.21st.dev/assets/mirror/fe/fed9f47adb23b3cfc6f6980d51cd8d737c373e4400fc48c760643b972ac24047.png", // Instagram
  "https://cdn.21st.dev/assets/mirror/dd/dd9eb8e4bbb6f9a0c105f675c7671db68df66ae898ac5469e72630baad747103.png", // Dropbox
  "https://cdn.21st.dev/assets/mirror/e8/e899b6d586e1dc1058236c2f16969da36e3a7bdf126a51153ed723e710995823.png", // Jira
  "https://cdn.21st.dev/assets/localized/06ad69f12ef04e1f40fb3ec9db4220563891463dba3f8fe79723a89dae824206.png",
  "https://cdn.21st.dev/assets/mirror/0c/0c12d5374247e16fced565a207d010bf39f1eb55ee0394581ced67b2e6fa7b92.svg",
  "https://cdn.21st.dev/assets/mirror/0a/0a1384c5295deaba3199ca407d8b8d76f8533c66f997b91de272026d96588308.png", // Squ are
  "https://cdn.21st.dev/assets/mirror/97/97fecb1b86b6606ace15ead3ac4844f817022fc4fd500b6078f059e1ccbb33fb.png", // Shopify
  "https://cdn.21st.dev/assets/mirror/30/3065aadb366911a0ba17cef915e886b390862f2f4b2d03a6720196a4042f5add.png", // Zapier
  "https://cdn.21st.dev/assets/mirror/d6/d623224425e0c0d3a09680c6d24d7d903bf0e0bdce779d4c22a103845c19efe2.png", // Google Drive
  "https://cdn.21st.dev/assets/mirror/85/8593ddf29f1159a2aeda0a0e4de911aa1715b3b181c0f21e3ecd9d71904153d1.png", // YouTube
  "https://cdn.21st.dev/assets/mirror/86/8622b1a4306b413670d9d200591dac7a11d02f70dc525683e44ba14b91737a90.png", // Airtable
  "https://cdn.21st.dev/assets/mirror/fb/fb44e78f673e3ef0fd9a01512245c9922d4db99b2e8457f8f5ed41786c4e2de5.png", // Discord
];

export default function IntegrationsSection() {
  return (
    <section className="max-w-7xl mx-auto my-20 px-6 grid md:grid-cols-2 gap-10 items-center border border-gray-200 dark:border-gray-700 p-6 rounded-3xl">
      {/* Left Side */}
      <div>
        <p className="uppercase text-sm font-semibold text-gray-500 dark:text-gray-400">
          Components
        </p>
        <h2 className="text-7xl font-bold mt-2 mb-4">
          Supercharge your workflow
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Build sleek, responsive interfaces in record time with our carefully
          crafted React and Tailwind CSS components.
        </p>
        <div className="flex gap-4">
          <Button className="bg-black text-white px-5 py-2 rounded-lg font-medium">
            <Link href="https://ruixen.com/components" target="_blank">
              Browse Components
            </Link>
          </Button>
          <Button
            variant="outline"
            className="border border-gray-300 dark:border-gray-600 px-5 py-2 rounded-lg font-medium"
          >
            <Link href="https://ruixen.com" target="_blank">
              View Documentation →
            </Link>
          </Button>
        </div>
      </div>

      {/* Right Side */}
      <div className="grid grid-cols-6 gap-4">
        {integrations.map((url, idx) => (
          <div
            key={idx}
            className="relative w-16 h-16 p-2 bg-white dark:bg-gray-800 shadow-sm border-2 border-gray-200 dark:border-gray-700"
            style={{
              clipPath:
                "polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%)",
            }}
          >
            <Image
              src={url}
              alt={`integration-${idx}`}
              fill
              className="object-contain p-1.5"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
