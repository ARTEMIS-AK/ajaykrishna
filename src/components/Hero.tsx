"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Marquee from "./Marquee";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { content } from "@/content/content";

function HeroInteractiveBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        const mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000 };

        const handleResize = () => {
            if (!canvas) return;
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.targetX = e.clientX;
            mouse.targetY = e.clientY;
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("mousemove", handleMouseMove);

        // Grid details
        const dots: { x: number; y: number; baseSize: number }[] = [];
        const spacing = 40;

        const initDots = () => {
            dots.length = 0;
            for (let x = spacing / 2; x < width; x += spacing) {
                for (let y = spacing / 2; y < height; y += spacing) {
                    dots.push({ x, y, baseSize: 1 });
                }
            }
        };

        initDots();

        let mouseX = -1000;
        let mouseY = -1000;

        const render = () => {
            ctx.clearRect(0, 0, width, height);

            // Smooth mouse follow
            mouseX += (mouse.targetX - mouseX) * 0.08;
            mouseY += (mouse.targetY - mouseY) * 0.08;

            dots.forEach((dot) => {
                const dist = Math.hypot(dot.x - mouseX, dot.y - mouseY);
                let size = dot.baseSize;
                let opacity = 0.04;

                if (dist < 180) {
                    const factor = (180 - dist) / 180;
                    size = dot.baseSize + factor * 2;
                    opacity = 0.04 + factor * 0.25;
                    ctx.fillStyle = `rgba(255, 90, 31, ${opacity})`;
                } else {
                    ctx.fillStyle = `rgba(245, 245, 240, ${opacity})`;
                }

                ctx.beginPath();
                ctx.arc(dot.x, dot.y, size, 0, Math.PI * 2);
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-50 z-0" />;
}

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const line1Ref = useRef<HTMLSpanElement>(null);
    const line2Ref = useRef<HTMLSpanElement>(null);
    const line3Ref = useRef<HTMLSpanElement>(null);
    const eyebrowRef = useRef<HTMLDivElement>(null);
    const subheadRef = useRef<HTMLDivElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const scrollIndicatorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // GSAP staggered reveal
        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

        // Initial state setup to avoid flash
        gsap.set([line1Ref.current, line2Ref.current, line3Ref.current], { yPercent: 100 });
        gsap.set([eyebrowRef.current, subheadRef.current, ctaRef.current, scrollIndicatorRef.current], {
            opacity: 0,
            y: 20
        });

        // Animation sequence
        tl.to(eyebrowRef.current, {
            opacity: 1,
            y: 0,
            duration: 1,
        })
            .to(
                [line1Ref.current, line2Ref.current, line3Ref.current],
                {
                    yPercent: 0,
                    duration: 1.2,
                    stagger: 0.15,
                },
                "-=0.7"
            )
            .to(
                subheadRef.current,
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                },
                "-=0.8"
            )
            .to(
                [ctaRef.current, scrollIndicatorRef.current],
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.1,
                },
                "-=0.6"
            );
    }, []);

    const handleScrollClick = () => {
        const aboutSection = document.getElementById("about");
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section
            id="hero"
            ref={containerRef}
            className="relative min-h-screen w-full flex flex-col justify-between bg-[#0A0A0A] text-[#F5F5F0] overflow-hidden select-none"
        >
            {/* Background patterns */}
            <HeroInteractiveBackground />

            {/* Floating Section Index Indicator */}
            <div className="absolute top-28 right-6 md:right-12 font-mono text-[10px] tracking-widest text-[#F5F5F0]/30 select-none">
                [ 00 / 04 ]
            </div>

            {/* Main content grid */}
            <div className="flex-1 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center pt-24 pb-12 relative z-10">

                {/* Eyebrow */}
                <div ref={eyebrowRef} className="mb-6 overflow-hidden">
                    <span className="font-mono text-xs md:text-sm tracking-[0.25em] text-[#FF5A1F] uppercase block font-semibold">
                        {content.personal.role}
                    </span>
                </div>

                {/* Big Headline */}
                <h1 className="font-display font-bold text-4xl sm:text-6xl md:text-8xl tracking-tight leading-[0.95] max-w-5xl">
                    <span className="block overflow-hidden pb-1">
                        <span ref={line1Ref} className="block origin-bottom">
                            I BUILD PRODUCTS
                        </span>
                    </span>
                    <span className="block overflow-hidden pb-1">
                        <span ref={line2Ref} className="block origin-bottom">
                            FROM <span className="text-[#FF5A1F]">ZERO</span>
                        </span>
                    </span>
                    <span className="block overflow-hidden pb-1">
                        <span ref={line3Ref} className="block origin-bottom">
                            TO <span className="text-[#FF5A1F]">ONE.</span>
                        </span>
                    </span>
                </h1>

                {/* Subhead */}
                <div ref={subheadRef} className="mt-8 max-w-2xl">
                    <p className="font-mono text-sm sm:text-base text-[#F5F5F0]/70 leading-relaxed font-light">
                        {content.personal.subhead}
                    </p>
                </div>

                {/* CTA triggers */}
                <div ref={ctaRef} className="mt-10 flex flex-wrap gap-4 items-center">
                    <a
                        href="#projects"
                        className="group flex items-center gap-2 bg-[#FF5A1F] text-black font-mono text-xs tracking-wider font-semibold py-4 px-8 rounded hover:bg-[#ff723b] transition-all duration-300 transform active:scale-95"
                    >
                        VIEW MY WORK
                        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </a>
                    <a
                        href="#contact"
                        className="group flex items-center gap-2 bg-transparent text-[#F5F5F0] font-mono text-xs tracking-wider py-4 px-8 rounded border border-[#F5F5F0]/20 hover:border-[#FF5A1F] hover:text-[#FF5A1F] transition-all duration-300"
                    >
                        GET IN TOUCH
                    </a>
                </div>
            </div>

            {/* Footer of Hero */}
            <div className="w-full relative z-10 flex flex-col gap-6 select-none bg-[#0A0A0A]">
                {/* Marquee widget */}
                <Marquee />

                {/* Bottom row */}
                <div className="max-w-7xl w-full mx-auto px-6 md:px-12 pb-8 flex justify-end items-center bg-[#0A0A0A] z-20">
                    {/* Scroll Down Button */}
                    <div
                        ref={scrollIndicatorRef}
                        onClick={handleScrollClick}
                        className="group cursor-pointer flex items-center gap-3 text-[#F5F5F0]/40 hover:text-[#FF5A1F] transition-colors duration-300"
                    >
                        <span className="font-mono text-[10px] tracking-widest uppercase">SCROLL TO DISCOVER</span>
                        <div className="w-8 h-8 rounded-full border border-white/10 group-hover:border-[#FF5A1F] flex items-center justify-center transition-all duration-300 p-0">
                            <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#F5F5F0]/60 group-hover:text-[#FF5A1F]" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
