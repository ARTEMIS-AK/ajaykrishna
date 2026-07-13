import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import CustomCursor from "@/components/CustomCursor";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Ajay Krishna — Product Associate & Generalist Builder",
  description: "Personal portfolio of Ajay Krishna, designing and building intelligent AI products from hypothesis to production.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased bg-[#0A0A0A] text-[#F5F5F0] overflow-x-hidden selection:bg-[#FF5A1F] selection:text-black`}
      >
        {/* Grainy Noise Overlay */}
        <div className="noise-bg" />

        {/* Custom Dot/Hover Cursor */}
        <CustomCursor />

        {/* Smooth Lenis Page Scroll Wrapper */}
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
