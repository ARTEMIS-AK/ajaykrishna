"use client";

import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        // Register GSAP ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);

        const lenis = new Lenis({
            duration: 1.4,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            wheelMultiplier: 1,
            // For buttery smooth experience
        });

        // Update ScrollTrigger on Lenis scroll
        lenis.on("scroll", () => {
            ScrollTrigger.update();
        });

        // Integration of Lenis with GSAP Ticker
        const gsapTicker = (time: number) => {
            lenis.raf(time * 1000);
        };

        gsap.ticker.add(gsapTicker);
        gsap.ticker.lagSmoothing(0);

        // Clean up
        return () => {
            gsap.ticker.remove(gsapTicker);
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
}
