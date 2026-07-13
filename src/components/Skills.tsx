"use client";

import React from "react";
import { motion } from "framer-motion";
import { content } from "@/content/content";
import { Terminal, Cpu, PenTool, Layout } from "lucide-react";

// Get appropriate category icon
function getCategoryIcon(title: string) {
    switch (title.toLowerCase()) {
        case "development":
            return <Terminal className="w-4 h-4 text-[#FF5A1F]" />;
        case "ai":
            return <Cpu className="w-4 h-4 text-[#FF5A1F]" />;
        case "design":
            return <PenTool className="w-4 h-4 text-[#FF5A1F]" />;
        case "product":
            return <Layout className="w-4 h-4 text-[#FF5A1F]" />;
        default:
            return null;
    }
}

export default function Skills() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" as const }
        }
    };

    return (
        <section
            id="skills"
            className="relative min-h-screen w-full bg-[#0A0A0A] text-[#F5F5F0] py-24 md:py-32 overflow-hidden border-t border-white/5"
        >
            {/* Magazine spread number */}
            <div className="absolute top-12 right-6 md:right-12 font-mono text-[10px] tracking-widest text-[#F5F5F0]/30 select-none">
                [ 04 / 04 ]
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
                {/* Section Header */}
                <div className="mb-20">
                    <span className="font-mono text-xs text-[#FF5A1F] tracking-widest uppercase block mb-3">
                        [ ARCHITECTURE ]
                    </span>
                    <h2 className="font-display font-semibold text-4xl md:text-7xl tracking-tight leading-none uppercase">
                        SKILLS & TOOLSETS
                    </h2>
                </div>

                {/* 4 Cluster Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-10%" }}
                >
                    {content.skills.map((category) => (
                        <motion.div
                            key={category.title}
                            variants={cardVariants}
                            className="bg-[#121212] border border-[#F5F5F0]/5 hover:border-[#FF5A1F]/20 rounded-2xl p-8 transition-colors duration-300 group"
                        >
                            {/* Category Header */}
                            <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/5">
                                <div className="flex items-center gap-3">
                                    {getCategoryIcon(category.title)}
                                    <h3 className="font-mono text-xs font-bold tracking-[0.2em] text-[#F5F5F0] uppercase">
                                        {category.title}
                                    </h3>
                                </div>
                                <span className="font-mono text-[10px] text-[#F5F5F0]/30 select-none">
                                    [ 0{content.skills.findIndex(c => c.title === category.title) + 1} ]
                                </span>
                            </div>

                            {/* Skills Tag Area */}
                            <div className="flex flex-wrap gap-2.5">
                                {category.skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="font-mono text-xs md:text-sm px-4 py-2 rounded-lg border border-white/5 bg-white/[0.01] text-[#F5F5F0]/65 hover:border-[#FF5A1F]/30 hover:bg-[#FF5A1F]/[0.02] hover:text-[#FF5A1F] transition-all duration-300 cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
