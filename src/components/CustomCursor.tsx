"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const [hoverText, setHoverText] = useState("");
    const [isActive, setIsActive] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Only enable on desktop/non-touch
        if (typeof window !== "undefined") {
            const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
            if (isTouch) return;
        }

        setIsVisible(true);

        const cursor = cursorRef.current;
        if (!cursor) return;

        gsap.set(cursor, { xPercent: -50, yPercent: -50, scale: 1 });

        const moveCursor = (e: MouseEvent) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: "power2.out",
            });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const clickable = target.closest("a, button, [role='button'], input, textarea");
            const cursorTextAttr = target.closest("[data-cursor]");

            if (cursorTextAttr) {
                setIsActive(true);
                const text = cursorTextAttr.getAttribute("data-cursor") || "VIEW";
                setHoverText(text);
            } else if (clickable) {
                setIsActive(true);
                setHoverText("");
            } else {
                setIsActive(false);
                setHoverText("");
            }
        };

        const handleMouseDown = () => {
            gsap.to(cursor, { scale: 0.85, duration: 0.1 });
        };

        const handleMouseUp = () => {
            gsap.to(cursor, { scale: 1, duration: 0.15 });
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleMouseOver);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <div
            ref={cursorRef}
            className={`fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-[99999] transition-all duration-300 ease-out flex items-center justify-center ${isActive
                    ? "w-16 h-16 bg-[#FF5A1F] text-black scale-100 opacity-100"
                    : "bg-white/80 mix-blend-difference"
                }`}
            style={{
                transform: "translate(-50%, -50%)",
            }}
        >
            {isActive && hoverText && (
                <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-black select-none pointer-events-none">
                    {hoverText}
                </span>
            )}
        </div>
    );
}
