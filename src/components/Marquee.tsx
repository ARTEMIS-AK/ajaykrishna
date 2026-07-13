import { content } from "@/content/content";

export default function Marquee() {
    const items = content.marquee;
    // Duplicate three times to ensure screen coverage and seamless looping
    const repeatedItems = [...items, ...items, ...items];

    return (
        <div className="w-full overflow-x-hidden border-y border-white/10 bg-black/40 py-5 backdrop-blur-sm relative z-10 select-none">
            <div className="flex pointer-events-auto">
                <div className="flex gap-12 shrink-0 animate-marquee hover:[animation-play-state:paused] pr-12 min-w-full items-center">
                    {repeatedItems.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-4 text-xs md:text-sm font-mono tracking-[0.2em] text-[#F5F5F0]/40 hover:text-[#FF5A1F] transition-colors duration-300 uppercase cursor-default"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A1F] block" />
                            <span>{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
