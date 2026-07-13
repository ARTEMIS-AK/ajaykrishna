"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

export default function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("hero");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 80);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const sections = ["hero", "about", "experience", "projects", "skills", "contact"];
        const observerOptions = {
            root: null,
            rootMargin: "-30% 0px -40% 0px", // triggers when the section is in the middle of viewport
            threshold: 0.1,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, observerOptions);

        sections.forEach((id) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            // Find Lenis instance or standard scrollTo
            const offset = 0;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    const navItems = [
        { label: "ABOUT", id: "about", num: "01" },
        { label: "EXPERIENCE", id: "experience", num: "02" },
        { label: "PROJECTS", id: "projects", num: "03" },
        { label: "SKILLS", id: "skills", num: "04" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${scrolled
                ? "bg-[#0A0A0A]/80 backdrop-blur-md border-[#F5F5F0]/5 py-4"
                : "bg-transparent border-transparent py-8"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
                {/* LOGO */}
                <a
                    href="#hero"
                    onClick={(e) => scrollToSection(e, "hero")}
                    className="group flex items-center gap-3"
                >
                    <span className="font-mono text-xs text-[#FF5A1F] tracking-widest">[ AK ]</span>
                    <span className="font-display font-medium text-xs md:text-sm tracking-[0.25em] text-[#F5F5F0] group-hover:text-[#FF5A1F] transition-colors duration-300">
                        AJAY KRISHNA
                    </span>
                </a>

                {/* NAV ITEMS */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            onClick={(e) => scrollToSection(e, item.id)}
                            className="group flex items-center gap-1.5 py-1 text-[11px] font-mono tracking-widest text-[#F5F5F0]/60 hover:text-[#F5F5F0] transition-colors duration-300 relative"
                        >
                            <span className={`text-[9px] ${activeSection === item.id ? "text-[#FF5A1F]" : "text-[#F5F5F0]/30"}`}>
                                {item.num}.
                            </span>
                            <span className={activeSection === item.id ? "text-[#F5F5F0]" : ""}>{item.label}</span>
                            <span
                                className={`absolute bottom-0 left-0 h-[100%] w-full border-b border-[#FF5A1F] scale-x-0 transition-transform duration-300 origin-left ${activeSection === item.id ? "scale-x-100" : "group-hover:scale-x-50"
                                    }`}
                            />
                        </a>
                    ))}
                </div>

                {/* WORK/CONTACT CTA */}
                <div className="flex items-center gap-3">
                    <a
                        href="https://drive.google.com/file/d/1kiAtR4cYtRw-4tWOt_itmRrJq6IPVvUZ/view"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-[11px] font-mono tracking-widest py-2 px-4 rounded border border-[#F5F5F0]/25 text-[#F5F5F0] hover:border-[#FF5A1F] hover:text-[#FF5A1F] transition-all duration-300"
                    >
                        RESUME
                        <ArrowUpRight className="w-3 h-3" />
                    </a>
                    <a
                        href="#contact"
                        onClick={(e) => scrollToSection(e, "contact")}
                        className={`flex items-center gap-1 text-[11px] font-mono tracking-widest py-2 px-4 rounded border transition-all duration-300 ${activeSection === "contact"
                            ? "bg-[#FF5A1F] text-black border-[#FF5A1F]"
                            : "border-[#F5F5F0]/25 text-[#F5F5F0] hover:border-[#FF5A1F] hover:text-[#FF5A1F]"
                            }`}
                    >
                        CONTACT
                        <ArrowUpRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                </div>
            </div>
        </nav>
    );
}
