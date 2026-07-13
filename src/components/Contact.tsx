"use client";

import React, { useState } from "react";
import { content } from "@/content/content";
import { Copy, Check, Mail, Phone, ArrowUpRight } from "lucide-react";

export default function Contact() {
    const [copiedText, setCopiedText] = useState("");

    const handleCopy = (text: string, type: string) => {
        navigator.clipboard.writeText(text);
        setCopiedText(type);
        setTimeout(() => setCopiedText(""), 2000);
    };

    const contactLinks = [
        {
            label: "EMAIL",
            value: content.personal.email,
            href: `mailto:${content.personal.email}`,
            icon: <Mail className="w-5 h-5 text-[#FF5A1F]" />,
            type: "email"
        },
        {
            label: "LINKEDIN",
            value: content.personal.linkedin.replace("https://www.", "").replace("https://", "").replace(/\/$/, ""),
            href: content.personal.linkedin,
            icon: (
                <svg className="w-5 h-5 text-[#FF5A1F] fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
            ),
            type: "linkedin"
        },
        {
            label: "PHONE",
            value: content.personal.phone,
            href: `tel:${content.personal.phone}`,
            icon: <Phone className="w-5 h-5 text-[#FF5A1F]" />,
            type: "phone"
        }
    ];

    return (
        <section
            id="contact"
            className="relative min-h-[90vh] w-full bg-[#0A0A0A] text-[#F5F5F0] pt-24 pb-12 overflow-hidden border-t border-white/5 flex flex-col justify-between"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex-1 flex flex-col lg:flex-row lg:items-center justify-between gap-12 py-12">
                <div className="max-w-xl w-full">
                    {/* Confident big header */}
                    <div className="mb-16">
                        <span className="font-mono text-xs text-[#FF5A1F] tracking-widest uppercase block mb-3">
                            [ INITIATE ]
                        </span>
                        <h2 className="font-display font-bold text-4xl sm:text-6xl md:text-8xl tracking-tight leading-none uppercase">
                            {"LET'S BUILD"} <br />
                            <span className="text-[#FF5A1F]">SOMETHING.</span>
                        </h2>
                    </div>

                    {/* Contact links list */}
                    <div className="flex flex-col gap-0.5 mt-8">
                        {contactLinks.map((link) => (
                            <div
                                key={link.label}
                                className="group relative border-y border-white/5 hover:border-white/10 transition-colors duration-300 py-6 md:py-8 flex items-center justify-between gap-6"
                            >
                                <a
                                    href={link.href}
                                    target={link.type === "linkedin" ? "_blank" : undefined}
                                    rel={link.type === "linkedin" ? "noopener noreferrer" : undefined}
                                    className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 flex-1 outline-none decoration-transparent"
                                >
                                    {/* Eyebrow Label */}
                                    <div className="font-mono text-[10px] tracking-widest text-[#F5F5F0]/30 min-w-[100px] flex items-center gap-2">
                                        {link.icon}
                                        <span>{link.label}</span>
                                    </div>

                                    {/* Actual value */}
                                    <span className="font-display text-lg sm:text-xl md:text-3xl font-medium tracking-tight text-[#F5F5F0] group-hover:text-white transition-colors duration-300 relative inline-block">
                                        {link.value}

                                        {/* Drawing SVG Underline */}
                                        <svg
                                            className="absolute -bottom-1 left-0 w-full h-[1.5px] pointer-events-none"
                                            viewBox="0 0 100 2"
                                            preserveAspectRatio="none"
                                        >
                                            <line
                                                x1="0"
                                                y1="1"
                                                x2="100"
                                                y2="1"
                                                stroke="#FF5A1F"
                                                strokeWidth="2"
                                                strokeDasharray="100"
                                                strokeDashoffset="100"
                                                className="transition-all duration-500 ease-out group-hover:stroke-dashoffset-0"
                                                style={{
                                                    strokeDashoffset: "var(--stroke-offset, 100)",
                                                }}
                                            />
                                        </svg>
                                    </span>
                                </a>

                                {/* Copy shortcut */}
                                <button
                                    onClick={() => handleCopy(link.value, link.type)}
                                    className="p-3 rounded-lg border border-white/5 hover:border-[#FF5A1F]/30 hover:bg-[#FF5A1F]/5 text-[#F5F5F0]/40 hover:text-[#FF5A1F] transition-all duration-300 z-10"
                                    title={`Copy ${link.label}`}
                                >
                                    {copiedText === link.type ? (
                                        <Check className="w-4 h-4 text-emerald-400" />
                                    ) : (
                                        <Copy className="w-4 h-4" />
                                    )}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Resume block */}
                <div className="flex flex-col justify-center p-8 md:p-10 bg-[#121212] border border-white/5 hover:border-[#FF5A1F]/30 rounded-2xl transition-all duration-300 group w-full lg:max-w-md relative overflow-hidden">
                    <span className="font-mono text-[10px] tracking-widest text-[#FF5A1F] uppercase block mb-2">[ GENERALIST OPERATOR ]</span>
                    <h3 className="font-display font-semibold text-2xl md:text-3xl text-[#F5F5F0] mb-4">CURRICULUM VITAE</h3>
                    <p className="text-xs text-[#F5F5F0]/50 mb-8 leading-relaxed font-light">
                        Review the complete trace of my work: design prototypes, product requirements, growth stats, and technical execution.
                    </p>
                    <a
                        href="https://drive.google.com/file/d/1kiAtR4cYtRw-4tWOt_itmRrJq6IPVvUZ/view"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-between w-full bg-[#FF5A1F] hover:bg-[#FF5A1F]/90 text-black font-mono text-xs tracking-wider font-semibold py-4 px-6 rounded transition-all duration-300"
                    >
                        <span>VIEW RESUME</span>
                        <ArrowUpRight className="w-4 h-4" />
                    </a>
                </div>
            </div>

            {/* Footer credits */}
            <div className="max-w-7xl w-full mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-white/5 font-mono text-[10px] text-[#F5F5F0]/40 tracking-widest uppercase">
                <div>
                    DESIGNED & BUILD BY {content.personal.name}
                </div>
            </div>
        </section>
    );
}
