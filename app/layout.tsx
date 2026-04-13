import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PixeltoneAI - Website Development & AI Automation",
  description:
    "We build high-converting websites and AI systems that help businesses get more customers automatically.",
  keywords: [
    "website development",
    "AI automation",
    "business website India",
    "lead generation",
    "web design agency",
  ],
  authors: [{ name: "PixeltoneAI" }],
  openGraph: {
    title: "PixeltoneAI",
    description:
      "Websites & AI systems that bring customers automatically.",
    url: "https://pixeltoneai.com",
    siteName: "PixeltoneAI",
    type: "website",
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      
      </body>
    </html>
  );
}
<a
  href="https://wa.me/919512260104"
  target="_blank"
  className="fixed bottom-6 right-6 z-50"
>
  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#EB5002] shadow-lg hover:scale-110 transition">
    <span className="text-white text-xl">💬</span>
  </div>
</a>