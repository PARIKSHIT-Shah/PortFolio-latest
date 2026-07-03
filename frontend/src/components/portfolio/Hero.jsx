import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import HeroScene from "./HeroScene";
import { PROFILE } from "../../data/portfolio";

const line = {
    hidden: { opacity: 0, y: 30 },
    show: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { delay: 0.2 + i * 0.12, duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    }),
};

export default function Hero() {
    return (
        <section
            id="top"
            data-testid="hero-section"
            className="relative min-h-screen w-full overflow-hidden"
        >
            <HeroScene />
            {/* Vignette */}
            <div className="pointer-events-none absolute inset-0 z-[1]"
                style={{ background: "radial-gradient(ellipse at center, transparent 30%, #050505 85%)" }} />

            <div className="relative z-[2] min-h-screen flex flex-col justify-between px-6 md:px-16 pt-32 pb-14">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <motion.div
                        initial="hidden"
                        animate="show"
                        variants={line}
                        className="flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-white/50 font-body"
                    >
                        <span className="h-1.5 w-1.5 rounded-full bg-[#d4af37] animate-pulse" />
                        Available for Product-Based Roles · 2026
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        animate="show"
                        custom={1}
                        variants={line}
                        className="text-[11px] uppercase tracking-[0.3em] text-white/40 font-body"
                    >
                        {PROFILE.location}
                    </motion.div>
                </div>

                <div className="max-w-6xl">
                    <motion.p
                        initial="hidden"
                        animate="show"
                        custom={1}
                        variants={line}
                        className="text-xs md:text-sm uppercase tracking-[0.35em] text-white/60 font-body mb-6"
                    >
                        Portfolio · {PROFILE.role}
                    </motion.p>

                    <motion.h1
                        initial="hidden"
                        animate="show"
                        custom={2}
                        variants={line}
                        className="font-display font-light leading-[0.95] tracking-tight text-[15vw] md:text-[10vw] lg:text-[8.5vw]"
                    >
                        Parikshit
                    </motion.h1>
                    <motion.h1
                        initial="hidden"
                        animate="show"
                        custom={3}
                        variants={line}
                        className="font-display italic font-light leading-[0.95] tracking-tight text-[15vw] md:text-[10vw] lg:text-[8.5vw] text-shimmer"
                    >
                        Shah.
                    </motion.h1>

                    <motion.p
                        initial="hidden"
                        animate="show"
                        custom={4}
                        variants={line}
                        className="mt-8 max-w-xl text-base md:text-lg text-white/70 font-body leading-relaxed"
                    >
                        {PROFILE.tagline} 3rd year <span className="text-white">B.Tech CSE (AI/ML)</span> student
                        crafting expressive, purposeful software.
                    </motion.p>

                    <motion.div
                        initial="hidden"
                        animate="show"
                        custom={5}
                        variants={line}
                        className="mt-10 flex flex-wrap items-center gap-4"
                    >
                        <a
                            href="#work"
                            data-testid="hero-view-work"
                            data-cursor="explore"
                            className="magnetic group inline-flex items-center gap-3 rounded-full bg-[#eae6d7] text-[#050505] px-7 py-3.5 font-body font-semibold text-sm tracking-wide hover:bg-white transition-colors"
                        >
                            View Selected Work
                            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </a>
                        <a
                            href="#contact"
                            data-testid="hero-contact"
                            data-cursor="say hi"
                            className="magnetic inline-flex items-center gap-3 rounded-full border border-white/15 px-7 py-3.5 font-body font-medium text-sm tracking-wide text-white/80 hover:text-white hover:border-white/40 transition-colors"
                        >
                            Get in touch
                        </a>
                        <div className="flex items-center gap-2 ml-2">
                            <SocialIcon href={PROFILE.github} testId="hero-social-github" label="github"><Github className="h-4 w-4" /></SocialIcon>
                            <SocialIcon href={PROFILE.linkedin} testId="hero-social-linkedin" label="linkedin"><Linkedin className="h-4 w-4" /></SocialIcon>
                            <SocialIcon href={`mailto:${PROFILE.email}`} testId="hero-social-mail" label="email"><Mail className="h-4 w-4" /></SocialIcon>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4, duration: 1.2 }}
                    className="flex items-end justify-between text-[10px] uppercase tracking-[0.3em] text-white/40 font-body"
                >
                    <div className="text-center">Scroll ↓</div>
                    <div className="hidden md:block">Est. 2023 · Techno India University</div>
                </motion.div>
            </div>
        </section>
    );
}

function SocialIcon({ href, children, testId, label }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            data-testid={testId}
            data-cursor={label}
            className="magnetic h-10 w-10 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:border-white/40 transition-colors"
        >
            {children}
        </a>
    );
}
