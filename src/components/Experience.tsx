"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { content } from "@/content/content";
import { Briefcase } from "lucide-react";

export default function Experience() {
    const containerRef = useRef<HTMLDivElement>(null);
    const progressBarRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Register ScrollTrigger inside the component
        gsap.registerPlugin(ScrollTrigger);

        const progressBar = progressBarRef.current;
        const trigger = triggerRef.current;

        if (!progressBar || !trigger) return;

        // Timeline line fill animation
        const progressAnimation = gsap.fromTo(
            progressBar,
            { scaleY: 0 },
            {
                scaleY: 1,
                ease: "none",
                scrollTrigger: {
                    trigger: trigger,
                    start: "top 25%",
                    end: "bottom 70%",
                    scrub: true,
                },
            }
        );

        // Cards fade/reveal
        const cards = gsap.utils.toArray<HTMLElement>(".timeline-card");
        cards.forEach((card) => {
            gsap.fromTo(
                card,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        });

        return () => {
            progressAnimation.scrollTrigger?.kill();
            ScrollTrigger.getAll().forEach(st => st.kill());
        };
    }, []);

    return (
        <section
            id="experience"
            ref={containerRef}
            className="relative min-h-screen w-full bg-[#0A0A0A] text-[#F5F5F0] py-24 md:py-32 overflow-hidden border-t border-white/5"
        >
            {/* Magazine spread number */}
            <div className="absolute top-12 right-6 md:right-12 font-mono text-[10px] tracking-widest text-[#F5F5F0]/30 select-none">
                [ 02 / 04 ]
            </div>

            <div className="max-w-5xl mx-auto px-6 md:px-12 w-full">
                {/* Section Header */}
                <div className="mb-20">
                    <span className="font-mono text-xs text-[#FF5A1F] tracking-widest uppercase block mb-3">
                        [ JOURNEY ]
                    </span>
                    <h2 className="font-display font-semibold text-4xl md:text-7xl tracking-tight leading-none uppercase">
                        EXPERIENCE
                    </h2>
                </div>

                {/* Timeline trigger parent */}
                <div ref={triggerRef} className="relative pl-6 md:pl-20">
                    {/* Vertical base line */}
                    <div className="absolute left-1.5 md:left-[35px] top-0 bottom-0 w-[2px] bg-white/5 origin-top" />

                    {/* Vertical scroll-active indicator */}
                    <div
                        ref={progressBarRef}
                        className="absolute left-1.5 md:left-[35px] top-0 bottom-0 w-[2px] bg-[#FF5A1F] origin-top scale-y-0"
                    />

                    {/* Timeline Entry */}
                    {content.experience.map((exp, index) => (
                        <div key={index} className="relative mb-20 last:mb-5 group timeline-card">

                            {/* Timeline Bullet Node */}
                            <div className="absolute -left-[29px] md:-left-[53px] top-1.5 w-4 h-4 rounded-full bg-[#0A0A0A] border-2 border-white/20 group-hover:border-[#FF5A1F] flex items-center justify-center transition-colors duration-300 z-10">
                                <div className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-[#FF5A1F] transition-colors duration-300" />
                            </div>

                            {/* Main Timeline Card Box */}
                            <div className="bg-[#121212] border border-[#F5F5F0]/5 rounded-2xl p-6 md:p-10 hover:border-[#FF5A1F]/20 transition-all duration-300 relative group-hover:bg-[#141414]">

                                {/* Meta details */}
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-display font-bold text-[#F5F5F0]">
                                            {exp.role}
                                        </h3>
                                        <div className="text-sm font-mono text-[#FF5A1F] mt-1 flex items-center gap-2">
                                            <Briefcase className="w-3.5 h-3.5" />
                                            <span>{exp.company}</span>
                                        </div>
                                    </div>
                                    <div className="md:text-right">
                                        <span className="font-mono text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#F5F5F0]/60">
                                            {exp.period}
                                        </span>
                                    </div>
                                </div>

                                {/* Bullets */}
                                <ul className="space-y-4 mb-8 text-[#F5F5F0]/85 text-sm md:text-base leading-relaxed">
                                    {exp.bullets.map((bullet, idx) => (
                                        <li key={idx} className="flex gap-3">
                                            <span className="text-[#FF5A1F] mt-1.5 shrink-0 select-none font-mono text-xs">↳</span>
                                            <p>{bullet}</p>
                                        </li>
                                    ))}
                                </ul>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                                    {exp.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="font-mono text-[10px] tracking-wider uppercase px-2.5 py-1 rounded bg-[#FF5A1F]/5 text-[#FF5A1F] border border-[#FF5A1F]/15"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
