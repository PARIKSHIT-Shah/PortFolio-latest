import { motion } from "framer-motion";
import { SKILLS } from "../../data/portfolio";

// Bento layout: variable spans
const CELLS = [
    { key: "Languages", span: "md:col-span-4 md:row-span-2" },
    { key: "Frontend", span: "md:col-span-4 md:row-span-1" },
    { key: "Backend", span: "md:col-span-4 md:row-span-1" },
    { key: "Database", span: "md:col-span-3 md:row-span-1" },
    { key: "Tools", span: "md:col-span-5 md:row-span-1" },
    { key: "Foundations", span: "md:col-span-4 md:row-span-1" },
];

export default function Skills() {
    return (
        <section id="skills" data-testid="skills-section" className="section max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                <div>
                    <p className="text-[11px] uppercase tracking-[0.35em] text-white/40 font-body mb-4">
                        Tools & Stacks
                    </p>
                    <h2 className="font-display font-light text-4xl md:text-6xl leading-[1.05] tracking-tight">
                        Craft &<br />
                        <span className="italic text-white/60">instruments.</span>
                    </h2>
                </div>
                <p className="max-w-md text-white/60 font-body">
                    A honest map of what I build with — from foundational languages to LLM-driven stacks.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 md:auto-rows-[180px] gap-4">
                {CELLS.map((c, i) => (
                    <motion.div
                        key={c.key}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: i * 0.06 }}
                        whileHover={{ y: -4, borderColor: "rgba(255,255,255,0.25)" }}
                        className={`magnetic relative glass grain rounded-3xl p-6 md:p-7 overflow-hidden group ${c.span}`}
                        style={{ transition: "border-color 300ms ease" }}
                        data-testid={`skill-card-${c.key.toLowerCase()}`}
                        data-cursor={c.key.toLowerCase()}
                    >
                        <div className="h-full flex flex-col">
                            <div className="flex items-center justify-between">
                                <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-body">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <span className="text-[10px] uppercase tracking-[0.3em] text-[#d4af37]/70 font-body">
                                    {SKILLS[c.key].length} items
                                </span>
                            </div>
                            <h3 className="mt-4 font-display font-light text-2xl md:text-3xl tracking-tight">
                                {c.key}
                            </h3>
                            <div className="mt-5 flex flex-wrap gap-2">
                                {SKILLS[c.key].map((s) => (
                                    <span
                                        key={s}
                                        className="rounded-full border border-white/10 px-3 py-1 text-xs font-body text-white/75 bg-white/[0.02]"
                                    >
                                        {s}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div
                            className="pointer-events-none absolute -bottom-24 -right-24 w-52 h-52 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"
                            style={{ background: "radial-gradient(circle, #d4af37, transparent 70%)" }}
                        />
                    </motion.div>
                ))}
            </div>

            {/* Marquee */}
            <div className="mt-16 overflow-hidden border-y border-white/10 py-6">
                <div className="marquee-track gap-16 whitespace-nowrap">
                    {[...Array(2)].map((_, r) => (
                        <div key={r} className="flex gap-16 items-center">
                            {["JAVASCRIPT", "PYTHON", "REACT", "NODE.JS", "MONGODB", "LLM", "DSA", "AI/ML", "EXPRESS", "TAILWIND"].map((w) => (
                                <span
                                    key={w + r}
                                    className="font-display text-2xl md:text-4xl text-white/20 tracking-[0.2em] uppercase"
                                >
                                    {w} <span className="text-[#d4af37]/60">◆</span>
                                </span>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
