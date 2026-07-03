import { motion } from "framer-motion";
import AboutScene from "./AboutScene";
import { PROFILE } from "../../data/portfolio";

export default function About() {
    return (
        <section id="about" data-testid="about-section" className="section max-w-7xl mx-auto">
            <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
                <div className="md:col-span-7">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-[11px] uppercase tracking-[0.35em] text-white/40 font-body mb-4"
                    >
                        About
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.05 }}
                        className="font-display font-light text-4xl md:text-6xl leading-[1.05] tracking-tight text-white"
                    >
                        Curious student.<br />
                        <span className="italic text-white/60">Meticulous builder.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.15 }}
                        className="mt-8 text-white/70 font-body text-base md:text-lg leading-relaxed max-w-2xl"
                    >
                        {PROFILE.about}
                    </motion.p>

                    <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
                        {[
                            { k: "Yrs coding", v: "3+" },
                            { k: "Projects", v: "6" },
                            { k: "Internships", v: "4" },
                        ].map((s) => (
                            <div key={s.k} className="border-l border-white/10 pl-4">
                                <div className="font-display text-3xl md:text-4xl text-white">{s.v}</div>
                                <div className="mt-1 text-[10px] uppercase tracking-[0.25em] text-white/40 font-body">
                                    {s.k}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="md:col-span-5">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative aspect-square rounded-3xl overflow-hidden glass grain"
                        data-testid="about-3d-canvas"
                    >
                        <AboutScene />
                        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[10px] uppercase tracking-[0.28em] text-white/50 font-body">
                            <span>Neural · Nodes · 8</span>
                            <span className="text-[#d4af37]">AI/ML</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
