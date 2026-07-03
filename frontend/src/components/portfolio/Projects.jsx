import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "../../data/portfolio";

const THUMBS = [
    "https://images.unsplash.com/photo-1710438399422-2fca27686bcd?crop=entropy&cs=srgb&fm=jpg&w=800&q=80",
    "https://images.unsplash.com/photo-1637946175559-22c4fe13fc54?crop=entropy&cs=srgb&fm=jpg&w=800&q=80",
    "https://images.unsplash.com/photo-1622737133809-d95047b9e673?crop=entropy&cs=srgb&fm=jpg&w=800&q=80",
    "https://images.unsplash.com/photo-1678366633407-7f49da199a42?crop=entropy&cs=srgb&fm=jpg&w=800&q=80",
    "https://images.unsplash.com/photo-1710438399422-2fca27686bcd?crop=entropy&cs=srgb&fm=jpg&w=800&q=80",
    "https://images.unsplash.com/photo-1637946175559-22c4fe13fc54?crop=entropy&cs=srgb&fm=jpg&w=800&q=80",
];

export default function Projects() {
    return (
        <section id="work" data-testid="projects-section" className="section max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
                <div>
                    <p className="text-[11px] uppercase tracking-[0.35em] text-white/40 font-body mb-4">
                        Selected Work
                    </p>
                    <h2 className="font-display font-light text-4xl md:text-6xl leading-[1.05] tracking-tight">
                        Projects that <span className="italic text-white/60">solve</span>.
                    </h2>
                </div>
                <p className="max-w-md text-white/60 font-body">
                    A curated set of full-stack builds — from AI-assisted travel planners to network security tools.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {PROJECTS.map((p, i) => (
                    <motion.article
                        key={p.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: (i % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
                        whileHover={{ y: -6 }}
                        className={`magnetic group relative glass grain rounded-[28px] p-6 md:p-8 overflow-hidden ${i % 3 === 0 ? "md:col-span-2" : ""
                            }`}
                        data-testid={`project-card-${p.id}`}
                        data-cursor="view"
                    >
                        <div className={`grid ${i % 3 === 0 ? "md:grid-cols-2" : "grid-cols-1"} gap-8 items-center`}>
                            <div>
                                <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-white/40 font-body">
                                    <span>Case · {String(i + 1).padStart(2, "0")}</span>
                                    <span className="h-1 w-1 rounded-full bg-white/30" />
                                    <span style={{ color: p.accent }}>{p.year}</span>
                                </div>
                                <h3 className="mt-4 font-display text-3xl md:text-4xl font-light tracking-tight">
                                    {p.title}
                                </h3>
                                <p className="mt-2 text-white/50 font-body">{p.subtitle}</p>
                                <p className="mt-5 text-white/70 font-body leading-relaxed">
                                    {p.description}
                                </p>
                                <div className="mt-6 flex flex-wrap gap-2">
                                    {p.stack.map((s) => (
                                        <span
                                            key={s}
                                            className="rounded-full border border-white/10 px-3 py-1 text-xs font-body text-white/70"
                                        >
                                            {s}
                                        </span>
                                    ))}
                                </div>
                                <div className="mt-8 inline-flex items-center gap-2 text-white/80 font-body text-sm">
                                    Read case study
                                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </div>
                            </div>
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
                                <img
                                    src={THUMBS[i % THUMBS.length]}
                                    alt={p.title}
                                    loading="lazy"
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                <div className="absolute top-3 left-3 text-[10px] uppercase tracking-[0.3em] text-white/70 font-body px-2 py-1 rounded-full glass">
                                    {p.stack[0]}
                                </div>
                            </div>
                        </div>
                        <div
                            className="pointer-events-none absolute -top-24 -right-24 w-60 h-60 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-700"
                            style={{ background: `radial-gradient(circle, ${p.accent}, transparent 70%)` }}
                        />
                    </motion.article>
                ))}
            </div>
        </section>
    );
}
