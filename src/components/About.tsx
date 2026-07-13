"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { content } from "@/content/content";
import { useCountUp } from "@/lib/useCountUp";
import { MapPin, GraduationCap, Flame, Sparkles } from "lucide-react";

// Individual metric counter inside the Bento Card
function StatItem({ value, suffix, prefix, label, startCount }: {
    value: number;
    suffix?: string;
    prefix?: string;
    label: string;
    startCount: boolean;
}) {
    const count = useCountUp(value, 2000, startCount);
    return (
        <div className="flex flex-col">
            <div className="text-4xl md:text-5xl font-display font-bold text-[#FF5A1F] tracking-tight">
                {prefix}{count}{suffix}
            </div>
            <div className="text-xs font-mono text-[#F5F5F0]/50 mt-1 uppercase tracking-wider">
                {label}
            </div>
        </div>
    );
}

export default function About() {
    const [startCount, setStartCount] = useState(false);

    // Animation variants for bento cards (staggered scaling and fade)
    const cardVariants = {
        hidden: { opacity: 0, scale: 0.96 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.6, ease: "easeOut" as const }
        }
    };

    return (
        <section
            id="about"
            className="relative min-h-screen w-full bg-[#0A0A0A] text-[#F5F5F0] py-24 md:py-32 overflow-hidden border-t border-white/5"
        >
            {/* Magazine spread number */}
            <div className="absolute top-12 right-6 md:right-12 font-mono text-[10px] tracking-widest text-[#F5F5F0]/30 select-none">
                [ 01 / 04 ]
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
                {/* Section Header */}
                <div className="mb-16">
                    <span className="font-mono text-xs text-[#FF5A1F] tracking-widest uppercase block mb-3">
                        [ INTRODUCTION ]
                    </span>
                    <h2 className="font-display font-semibold text-4xl md:text-7xl tracking-tight leading-none uppercase">
                        WHO IS AJAY
                    </h2>
                </div>

                {/* Bento Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-10%" }}
                    onViewportEnter={() => setStartCount(true)}
                    transition={{ staggerChildren: 0.08 }}
                >
                    {/* Card 1: Bio */}
                    <motion.div
                        variants={cardVariants}
                        className="col-span-1 md:col-span-2 bg-[#121212] border border-[#F5F5F0]/5 hover:border-[#FF5A1F]/30 rounded-2xl p-8 flex flex-col justify-between transition-colors duration-300 min-h-[300px] group relative overflow-hidden"
                    >
                        <div className="flex justify-between items-center mb-6">
                            <span className="font-mono text-[10px] tracking-widest text-[#F5F5F0]/50">[ IDENTITY ]</span>
                            <Sparkles className="w-4 h-4 text-[#FF5A1F]/70" />
                        </div>
                        <div>
                            <p className="font-display text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-[#F5F5F0] leading-snug group-hover:text-white transition-colors duration-300">
                                {content.personal.bio}
                            </p>
                        </div>
                        <div className="mt-8 font-mono text-xs text-[#FF5A1F] tracking-wider uppercase">
                            GENERALIST BUILDER
                        </div>
                    </motion.div>

                    {/* Card 2: Location/Availability */}
                    <motion.div
                        variants={cardVariants}
                        className="col-span-1 bg-[#121212] border border-[#F5F5F0]/5 hover:border-[#FF5A1F]/30 rounded-2xl p-8 flex flex-col justify-between transition-colors duration-300 group"
                    >
                        <div className="flex justify-between items-center mb-8">
                            <span className="font-mono text-[10px] tracking-widest text-[#F5F5F0]/50">[ SETTING ]</span>
                            <MapPin className="w-4 h-4 text-[#F5F5F0]/50" />
                        </div>
                        <div>
                            <div className="text-xl font-display font-medium leading-snug text-[#F5F5F0]">
                                {content.personal.location}
                            </div>
                        </div>
                        <div className="mt-8">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 font-mono text-[10px] tracking-widest text-emerald-400 bg-emerald-950/40 rounded-full border border-emerald-900/30">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                AVAILABLE FOR HIRE
                            </span>
                        </div>
                    </motion.div>

                    {/* Card 3: Metrics / Counters */}
                    <motion.div
                        variants={cardVariants}
                        className="col-span-1 md:col-span-1 bg-[#121212] border border-[#F5F5F0]/5 hover:border-[#FF5A1F]/30 rounded-2xl p-8 flex flex-col justify-between transition-colors duration-300"
                    >
                        <div className="font-mono text-[10px] tracking-widest text-[#F5F5F0]/50 mb-8">[ PROVEN TRACTION ]</div>

                        <div className="flex flex-col gap-6">
                            {content.stats.map((stat, i) => (
                                <StatItem
                                    key={i}
                                    value={stat.value}
                                    suffix={stat.suffix}
                                    prefix={stat.prefix}
                                    label={stat.label}
                                    startCount={startCount}
                                />
                            ))}
                        </div>

                        <div className="mt-8 font-mono text-[9px] text-[#F5F5F0]/30 tracking-widest uppercase">
                            data verified in production
                        </div>
                    </motion.div>

                    {/* Card 4: Currently Building side project */}
                    <motion.div
                        variants={cardVariants}
                        className="col-span-1 bg-[#121212] border border-[#F5F5F0]/5 hover:border-[#FF5A1F]/30 rounded-2xl p-8 flex flex-col justify-between transition-colors duration-300 group"
                    >
                        <div className="flex justify-between items-center mb-8">
                            <span className="font-mono text-[10px] tracking-widest text-[#F5F5F0]/50">[ NOW BUILDING ]</span>
                            <Flame className="w-4 h-4 text-[#FF5A1F]/70" />
                        </div>
                        <div>
                            <div className="text-xl font-display font-medium text-[#F5F5F0]">
                                {content.personal.buildingNext}
                            </div>
                            <p className="font-mono text-xs text-[#F5F5F0]/50 mt-2 leading-relaxed font-light">
                                {content.personal.buildingNextSub}
                            </p>
                        </div>
                        <div className="mt-8">
                            <span className="font-mono text-[10px] text-[#FF5A1F] tracking-widest hover:underline cursor-pointer flex items-center gap-1">
                                SIDE PRODUCT →
                            </span>
                        </div>
                    </motion.div>

                    {/* Card 5: Education */}
                    <motion.div
                        variants={cardVariants}
                        className="col-span-1 bg-[#121212] border border-[#F5F5F0]/5 hover:border-[#FF5A1F]/30 rounded-2xl p-8 flex flex-col justify-between transition-colors duration-300 group"
                    >
                        <div className="flex justify-between items-center mb-8">
                            <span className="font-mono text-[10px] tracking-widest text-[#F5F5F0]/50">[ CREDENTIALS ]</span>
                            <GraduationCap className="w-4 h-4 text-[#F5F5F0]/50" />
                        </div>
                        <div>
                            <div className="text-xl font-display font-medium text-[#F5F5F0]">
                                {content.personal.education}
                            </div>
                            <p className="font-mono text-xs text-[#F5F5F0]/50 mt-2 leading-relaxed font-light">
                                {content.personal.educationSub}
                            </p>
                        </div>
                        <div className="mt-8 font-mono text-[10px] text-[#F5F5F0]/30 tracking-widest uppercase">
                            B.TECH COMPUTER SCIENCE
                        </div>
                    </motion.div>

                    {/* Card 6: Skills quick pills cloud */}
                    <motion.div
                        variants={cardVariants}
                        className="col-span-1 md:col-span-2 bg-[#121212] border border-[#F5F5F0]/5 hover:border-[#FF5A1F]/30 rounded-2xl p-8 flex flex-col justify-between transition-colors duration-300 group"
                    >
                        <div className="mb-6">
                            <span className="font-mono text-[10px] tracking-widest text-[#F5F5F0]/50">[ PRODUCT & DESIGN ]</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {content.skills
                                .filter(cat => cat.title === "Product" || cat.title === "Design")
                                .flatMap(cat => cat.skills)
                                .slice(0, 12)
                                .map((skill, index) => (
                                    <span
                                        key={index}
                                        className="font-mono text-xs md:text-sm px-3.5 py-1.5 rounded-full border border-white/5 bg-white/[0.02] text-[#F5F5F0]/70 hover:border-[#FF5A1F]/30 hover:text-[#FF5A1F] transition-all duration-300 cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                        </div>
                        <div className="mt-8 font-mono text-[9px] text-[#F5F5F0]/30 tracking-widest uppercase">
                            scroll down to see full mapping
                        </div>
                    </motion.div>

                    {/* Card 7: Personal Hobby info */}
                    <motion.div
                        variants={cardVariants}
                        className="col-span-1 md:col-span-1 bg-[#121212] border border-[#F5F5F0]/5 hover:border-[#FF5A1F]/30 rounded-2xl p-8 flex flex-col justify-between transition-colors duration-300 group"
                    >
                        <div className="mb-6">
                            <span className="font-mono text-[10px] tracking-widest text-[#F5F5F0]/50">[ PERSONAL ]</span>
                        </div>
                        <p className="font-mono text-xs text-[#F5F5F0]/65 leading-relaxed">
                            {content.personal.hobby}
                        </p>
                        <div className="mt-8 font-mono text-[10px] text-[#FF5A1F]/80 tracking-widest uppercase">
                            prototypes / gym
                        </div>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
}
