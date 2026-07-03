import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Magnetic Trail Cursor.
 * A blend of:
 *  - A large soft "aura" that snaps/scales on `.magnetic` targets.
 *  - A crisp inner dot that leads the aura.
 *  - A subtle particle trail (last N positions fading out).
 */
export default function CustomCursor() {
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);
    const auraX = useSpring(mouseX, { stiffness: 200, damping: 22, mass: 0.6 });
    const auraY = useSpring(mouseY, { stiffness: 200, damping: 22, mass: 0.6 });

    const [scale, setScale] = useState(1);
    const [label, setLabel] = useState("");
    const [isDown, setIsDown] = useState(false);
    const trailRef = useRef([]);
    const [, force] = useState(0);

    useEffect(() => {
        // Skip on touch devices
        if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return;

        let raf = 0;
        const onMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            const now = performance.now();
            trailRef.current = [
                { x: e.clientX, y: e.clientY, t: now },
                ...trailRef.current.slice(0, 11),
            ];

            // Magnetic detection
            const el = document.elementFromPoint(e.clientX, e.clientY);
            const magnet = el && el.closest && el.closest(".magnetic");
            if (magnet) {
                const rect = magnet.getBoundingClientRect();
                const cx = rect.left + rect.width / 2;
                const cy = rect.top + rect.height / 2;
                mouseX.set(cx + (e.clientX - cx) * 0.25);
                mouseY.set(cy + (e.clientY - cy) * 0.25);
                setScale(2.8);
                setLabel(magnet.getAttribute("data-cursor") || "");
            } else {
                setScale(1);
                setLabel("");
            }
        };
        const onDown = () => setIsDown(true);
        const onUp = () => setIsDown(false);

        const tick = () => {
            force((n) => (n + 1) % 1000);
            raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);

        window.addEventListener("mousemove", onMove, { passive: true });
        window.addEventListener("mousedown", onDown);
        window.addEventListener("mouseup", onUp);
        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener("mousemove", onMove);
            window.removeEventListener("mousedown", onDown);
            window.removeEventListener("mouseup", onUp);
        };
    }, [mouseX, mouseY]);

    return (
        <div
            data-testid="custom-magnetic-cursor"
            className="pointer-events-none fixed inset-0 z-[9999] hidden md:block"
            aria-hidden
        >
            {/* Trail dots */}
            {trailRef.current.map((p, i) => (
                <div
                    key={i}
                    style={{
                        position: "absolute",
                        left: p.x,
                        top: p.y,
                        width: 6 - i * 0.35,
                        height: 6 - i * 0.35,
                        borderRadius: "50%",
                        background: "rgba(234, 230, 215, " + (0.5 - i * 0.04) + ")",
                        transform: "translate(-50%, -50%)",
                        mixBlendMode: "screen",
                        filter: "blur(" + i * 0.4 + "px)",
                    }}
                />
            ))}
            {/* Aura */}
            <motion.div
                style={{ x: auraX, y: auraY, scale: isDown ? scale * 0.85 : scale }}
                transition={{ scale: { type: "spring", stiffness: 250, damping: 20 } }}
                className="absolute -translate-x-1/2 -translate-y-1/2"
            >
                <div
                    className="relative rounded-full"
                    style={{
                        width: 40,
                        height: 40,
                        border: "1px solid rgba(234, 230, 215, 0.7)",
                        background: scale > 1 ? "rgba(234, 230, 215, 0.08)" : "transparent",
                        backdropFilter: "invert(1) hue-rotate(180deg)",
                        WebkitBackdropFilter: "invert(1) hue-rotate(180deg)",
                        transition: "background 200ms ease",
                        mixBlendMode: "difference",
                    }}
                >
                    {label && (
                        <span
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[10px] uppercase tracking-widest text-white font-body font-semibold whitespace-nowrap"
                            style={{ mixBlendMode: "difference" }}
                        >
                            {label}
                        </span>
                    )}
                </div>
            </motion.div>
            {/* Inner Dot */}
            <motion.div
                style={{ x: mouseX, y: mouseY }}
                className="absolute -translate-x-1/2 -translate-y-1/2"
            >
                <div
                    className="rounded-full bg-white"
                    style={{ width: 4, height: 4, mixBlendMode: "difference" }}
                />
            </motion.div>
        </div>
    );
}
