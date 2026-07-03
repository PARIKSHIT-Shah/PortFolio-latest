import { motion } from "framer-motion";
import { EDUCATION, ACHIEVEMENTS } from "../../data/portfolio";
import { GraduationCap, Award } from "lucide-react";

export default function Journey() {
    return (
        <section id="journey" data-testid="timeline-section" className="section max-w-7xl mx-auto">
            <div className="mb-14">
                <p className="text-[11px] uppercase tracking-[0.35em] text-white/40 font-body mb-4">
                    Journey
                </p>
                <h2 className="font-display font-light text-4xl md:text-6xl leading-[1.05] tracking-tight">
                    Milestones <span className="italic text-white/60">in motion.</span>
                </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
                {/* Education */}
                <div>
                    <div className="flex items-center gap-3 mb-8">
                        <GraduationCap className="h-4 w-4 text-[#d4af37]" />
                        <span className="text-[11px] uppercase tracking-[0.3em] text-white/60 font-body">Education</span>
                    </div>
                    <div className="relative border-l border-white/10 pl-8 space-y-10">
                        {EDUCATION.map((e, i) => (
                            <motion.div
                                key={e.school}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: i * 0.1 }}
                                className="relative"
                                data-testid={`education-item-${i}`}
                            >
                                <span className="absolute -left-[41px] top-1 h-2.5 w-2.5 rounded-full bg-[#eae6d7]" />
                                <div className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-body">
                                    {e.period}
                                </div>
                                <h3 className="mt-2 font-display text-xl md:text-2xl font-light tracking-tight text-white">
                                    {e.school}
                                </h3>

                                <div className="text-white/70 font-body mt-1">{e.degree}</div>
                                <div className="text-white/50 font-body text-sm mt-1">{e.detail}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Achievements */}
                <div>
                    <div className="flex items-center gap-3 mb-8">
                        <Award className="h-4 w-4 text-[#d4af37]" />
                        <span className="text-[11px] uppercase tracking-[0.3em] text-white/60 font-body">Achievements & Certificates</span>
                    </div>
                    <div className="space-y-3">
                        {ACHIEVEMENTS.map((a, i) => (
                            <motion.div
                                key={a.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.06 }}
                                whileHover={{ borderColor: "rgba(255,255,255,0.25)" }}
                                className="magnetic glass grain rounded-2xl px-5 py-4 flex items-center justify-between gap-4"
                                data-testid={`achievement-item-${i}`}
                                data-cursor="cert"
                            >
                                <div>
                                    <div className="font-display text-lg text-white tracking-tight">{a.title}</div>
                                    <div className="text-white/50 font-body text-xs mt-0.5">{a.org}</div>
                                </div>
                                <div className="text-[#d4af37]/80 font-body text-xs uppercase tracking-[0.25em]">
                                    {a.year}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
