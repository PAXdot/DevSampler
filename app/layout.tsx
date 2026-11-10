import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const description = "Make depth EZPZ. A local library of components, templates, themes, apps, icons and video.";

export const metadata: Metadata = {
  metadataBase: new URL("https://ezpz.stagingcompass.com"),
  title: {
    default: "EZPZ Components",
    template: "%s · EZPZ Components",
  },
  description,
  applicationName: "EZPZ Components",
  openGraph: {
    title: "EZPZ Components",
    description,
    url: "https://ezpz.stagingcompass.com",
    siteName: "EZPZ Components",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EZPZ Components",
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className={`${geist.className} min-h-full bg-background text-foreground`}>{children}</body>
    </html>
  );
}
