import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "500", "700"],
  variable: "--font-space-grotesk",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Aura Art | The All-in-One Creator Engine",
  description: "The all-in-one workspace blending smart templates, pro editing, and generative AI. Create faster with Aura Art.",
  keywords: ["creative tools", "AI generation", "video editing", "templates", "content creation", "design tools"],
  authors: [{ name: "Aura Art" }],
  creator: "Aura Art",
  publisher: "Aura Art",
  openGraph: {
    title: "Aura Art | The All-in-One Creator Engine",
    description: "The all-in-one workspace blending smart templates, pro editing, and generative AI.",
    type: "website",
    locale: "en_US",
    siteName: "Aura Art",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aura Art | The All-in-One Creator Engine",
    description: "The all-in-one workspace blending smart templates, pro editing, and generative AI.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased selection:bg-laser-blue selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}

