import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, ArrowUpRight } from "lucide-react";
import { PROFILE } from "../../data/portfolio";

export default function Contact() {
    return (
        <section id="contact" data-testid="contact-section" className="section max-w-7xl mx-auto pt-24 md:pt-32 pb-14">
            <div className="mb-10">
                <p className="text-[11px] uppercase tracking-[0.35em] text-white/40 font-body mb-4">
                    Contact
                </p>
            </div>

            <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="font-display font-light leading-[0.95] tracking-tight text-[12vw] md:text-[9vw]"
            >
                Let's build
            </motion.h2>
            <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="font-display italic font-light leading-[0.95] tracking-tight text-[12vw] md:text-[9vw] text-shimmer"
            >
                something.
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mt-8 max-w-2xl text-white/60 font-body text-lg"
            >
                Have an idea, an internship opportunity, or a wild build in mind? I'd love to talk.
            </motion.p>

            <div className="mt-16 grid md:grid-cols-2 gap-4">
                <ContactCard
                    testId="contact-email"
                    href={`mailto:${PROFILE.email}`}
                    icon={<Mail className="h-5 w-5" />}
                    label="Email"
                    value={PROFILE.email}
                    cursor="email"
                />
                <ContactCard
                    testId="contact-phone"
                    href={`tel:${PROFILE.phone.replace(/\s/g, "")}`}
                    icon={<Phone className="h-5 w-5" />}
                    label="Phone"
                    value={PROFILE.phone}
                    cursor="call"
                />
                <ContactCard
                    testId="contact-github"
                    href={PROFILE.github}
                    icon={<Github className="h-5 w-5" />}
                    label="GitHub"
                    value="@PARIKSHIT-Shah"
                    cursor="github"
                />
                <ContactCard
                    testId="contact-linkedin"
                    href={PROFILE.linkedin}
                    icon={<Linkedin className="h-5 w-5" />}
                    label="LinkedIn"
                    value="parikshit-shah"
                    cursor="linkedin"
                />
            </div>

            <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs uppercase tracking-[0.3em] text-white/40 font-body">
                <div>© {new Date().getFullYear()} Parikshit Shah — All rights reserved.</div>
                <div>Crafted by Parikshit Shah</div>
            </div>
        </section>
    );
}

function ContactCard({ href, icon, label, value, testId, cursor }) {
    return (
        <a
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            data-testid={testId}
            data-cursor={cursor}
            className="magnetic group glass grain rounded-3xl p-6 md:p-8 flex items-center justify-between hover:border-white/25"
            style={{ transition: "border-color 300ms ease" }}
        >
            <div className="flex items-center gap-5">
                <div className="h-11 w-11 rounded-full border border-white/15 flex items-center justify-center text-white/70 group-hover:text-white group-hover:border-white/40 transition-colors">
                    {icon}
                </div>
                <div>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-body">
                        {label}
                    </div>
                    <div className="font-display text-xl md:text-2xl text-white mt-1 tracking-tight">
                        {value}
                    </div>
                </div>
            </div>
            <ArrowUpRight className="h-5 w-5 text-white/50 group-hover:text-white transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>
    );
}
