"use client";

import React, { useRef, useState } from "react";
import { content, Project } from "@/content/content";
import { ArrowUpRight } from "lucide-react";

// Subtle 3D Tilt Card wrapper
function TiltCard({
    children,
    className,
    ...props
}: React.ComponentPropsWithoutRef<"div">) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [transformStyle, setTransformStyle] = useState("");

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = cardRef.current;
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Subtle 4-degree maximum tilt offset
        const rotateX = ((centerY - y) / centerY) * 4;
        const rotateY = ((x - centerX) / centerX) * 4;

        setTransformStyle(`rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`);
    };

    const handleMouseLeave = () => {
        setTransformStyle("rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
    };

    return (
        <div
            ref={cardRef}
            className={`transition-transform duration-200 ease-out ${className}`}
            style={{
                transform: transformStyle,
                transformStyle: "preserve-3d",
                perspective: "1000px",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            {...props}
        >
            {children}
        </div>
    );
}

// Procedural SVG visuals for placeholder zones
function ProjectVisual({ id }: { id: string }) {
    switch (id) {
        case "skillfulsense":
            return (
                <div className="w-full h-full bg-[#161616] relative flex items-center justify-center overflow-hidden">
                    {/* Abstract node grid & waveform */}
                    <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
                    <svg className="w-4/5 h-20 text-[#FF5A1F]/10" viewBox="0 0 400 100">
                        <path
                            d="M 10 50 Q 80 10, 150 50 T 290 50 T 390 50"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        />
                        <path
                            d="M 10 50 Q 60 80, 170 30 T 270 70 T 390 50"
                            fill="none"
                            stroke="#FF5A1F"
                            strokeWidth="1.5"
                            strokeOpacity="0.3"
                        />
                        <circle cx="150" cy="50" r="4" fill="#FF5A1F" />
                        <circle cx="270" cy="70" r="3" fill="#F5F5F0" fillOpacity="0.4" />
                    </svg>

                </div>
            );
        case "hyrsense":
            return (
                <div className="w-full h-full bg-[#161616] relative flex items-center justify-center overflow-hidden font-mono text-[10px]">
                    <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/60 pointer-events-none" />
                    {/* Audio voice waves */}
                    <div className="flex items-end gap-1.5 h-16 text-[#FF5A1F]/30">
                        {[20, 45, 90, 60, 30, 45, 80, 100, 70, 45, 90, 30, 50, 80, 10, 60, 20].map((h, i) => (
                            <div
                                key={i}
                                className="w-1.5 bg-current rounded-full transition-all duration-300"
                                style={{
                                    height: `${h}%`,
                                    animation: `pulse 1.5s ease-in-out infinite alternate`,
                                    animationDelay: `${i * 0.1}s`,
                                }}
                            />
                        ))}
                    </div>

                </div>
            );
        case "kingstrust":
            return (
                <div className="w-full h-full bg-[#161616] relative flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-[#0A0A0A]/40" />
                    {/* Youth cohort nodes */}
                    <svg className="w-1/2 h-1/2 text-[#F5F5F0]/5" viewBox="0 0 100 100">
                        <line x1="50" y1="50" x2="20" y2="20" stroke="currentColor" strokeWidth="0.5" />
                        <line x1="50" y1="50" x2="80" y2="20" stroke="currentColor" strokeWidth="0.5" />
                        <line x1="50" y1="50" x2="50" y2="85" stroke="currentColor" strokeWidth="0.5" />
                        <circle cx="50" cy="50" r="8" fill="#FF5A1F" fillOpacity="0.2" stroke="#FF5A1F" strokeWidth="0.5" />
                        <circle cx="20" cy="20" r="5" fill="currentColor" />
                        <circle cx="80" cy="20" r="5" fill="currentColor" />
                        <circle cx="50" cy="85" r="5" fill="currentColor" />
                    </svg>

                </div>
            );
        case "ukrail":
            return (
                <div className="w-full h-full bg-[#161616] relative flex items-center justify-center overflow-hidden">
                    {/* Grid of ML models */}
                    <div className="absolute inset-0 border border-white/[0.02] flex flex-col justify-around py-4">
                        <div className="h-[1px] w-full bg-white/5" />
                        <div className="h-[1px] w-full bg-white/5" />
                        <div className="h-[1px] w-full bg-white/5" />
                    </div>
                    <div className="absolute inset-0 flex justify-around px-4">
                        <div className="w-[1px] h-full bg-white/5" />
                        <div className="w-[1px] h-full bg-white/5" />
                        <div className="w-[1px] h-full bg-white/5" />
                    </div>
                    <svg className="w-2/3 h-1/2 text-[#FF5A1F]/20" viewBox="0 0 200 100">
                        <path d="M 0,20 L 80,20 L 120,80 L 200,80" fill="none" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M 0,80 L 80,80 L 120,20 L 200,20" fill="none" stroke="#F5F5F0" strokeWidth="1" strokeOpacity="0.2" />
                        <circle cx="100" cy="50" r="4" fill="#FF5A1F" />
                    </svg>

                </div>
            );
        default:
            return null;
    }
}

export default function Projects() {
    return (
        <section
            id="projects"
            className="relative min-h-screen w-full bg-[#0A0A0A] text-[#F5F5F0] py-24 md:py-32 overflow-hidden border-t border-white/5"
        >
            {/* Magazine spread number */}
            <div className="absolute top-12 right-6 md:right-12 font-mono text-[10px] tracking-widest text-[#F5F5F0]/30 select-none">
                [ 03 / 04 ]
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
                {/* Section Header */}
                <div className="mb-20">
                    <span className="font-mono text-xs text-[#FF5A1F] tracking-widest uppercase block mb-3">
                        [ PORTFOLIO ]
                    </span>
                    <h2 className="font-display font-semibold text-4xl md:text-7xl tracking-tight leading-none uppercase">
                        SELECTED WORK
                    </h2>
                </div>

                {/* Projects Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {content.projects.map((project: Project, index) => {
                        const isExternal = project.link !== "#";
                        return (
                            <TiltCard
                                key={project.id}
                                data-cursor={isExternal ? "OPEN" : "VIEW"}
                                className="group relative flex flex-col bg-[#121212] border border-[#F5F5F0]/5 hover:border-[#FF5A1F]/30 rounded-2xl overflow-hidden transition-colors duration-300 cursor-none"
                            >
                                {/* 1. Image Area / Procedural visual wrapper */}
                                <div className="aspect-[16/9] w-full overflow-hidden border-b border-[#F5F5F0]/5 relative">
                                    <div className="w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out">
                                        <ProjectVisual id={project.id} />
                                    </div>

                                    {/* Subtle color flare on hover */}
                                    <div className="absolute inset-0 bg-[#FF5A1F]/0 group-hover:bg-[#FF5A1F]/[0.02] transition-colors duration-300 pointer-events-none" />
                                </div>

                                {/* 2. Text Content */}
                                <div className="p-8 flex-1 flex flex-col justify-between">
                                    <div>
                                        {/* Index + Title Row */}
                                        <div className="flex justify-between items-start mb-4">
                                            <span className="font-mono text-[10px] text-[#F5F5F0]/30">
                                                [ PROJECT 0{index + 1} ]
                                            </span>
                                            {isExternal && (
                                                <ArrowUpRight className="w-4 h-4 text-[#F5F5F0]/30 group-hover:text-[#FF5A1F] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                                            )}
                                        </div>

                                        <h3 className="font-display font-semibold text-2xl md:text-3xl text-[#F5F5F0] mb-2 group-hover:text-white transition-colors duration-300">
                                            {project.title}
                                        </h3>

                                        <p className="text-sm text-[#F5F5F0]/70 leading-relaxed mb-6 font-light">
                                            {project.description}
                                        </p>
                                    </div>

                                    {/* 3. Tech Stack Tag Row */}
                                    <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                                        {project.stack.map((tag, idx) => (
                                            <span
                                                key={idx}
                                                className="font-mono text-[9px] tracking-wider uppercase px-2.5 py-1 rounded bg-white/5 text-[#F5F5F0]/60 border border-white/10 group-hover:border-[#FF5A1F]/20 group-hover:text-[#F5F5F0] transition-colors duration-300"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Anchor covering click area */}
                                {isExternal ? (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="absolute inset-0 w-full h-full z-20 cursor-none"
                                        aria-label={`Open ${project.title}`}
                                    />
                                ) : (
                                    <div className="absolute inset-0 w-full h-full z-20 cursor-none" />
                                )}
                            </TiltCard>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
