import { useState, useEffect } from "react";

export function useCountUp(target: number, duration: number = 2000, start: boolean = false) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!start) return;

        let startTimestamp: number | null = null;
        const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);

            // Easing function (easeOutQuad)
            const easeProgress = progress * (2 - progress);

            setCount(Math.floor(easeProgress * target));

            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };

        window.requestAnimationFrame(step);
    }, [target, duration, start]);

    return count;
}
