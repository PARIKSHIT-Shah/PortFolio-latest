import { motion } from "framer-motion";

const LINKS = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#work", label: "Work" },
    { href: "#journey", label: "Journey" },
    { href: "#contact", label: "Contact" },
];

export default function Nav() {
    return (
        <motion.header
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-40 flex justify-center pt-6 px-4"
            data-testid="site-nav"
        >
            <nav className="glass rounded-full px-3 py-2 flex items-center gap-1 md:gap-2">
                <a
                    href="#top"
                    className="magnetic px-4 py-2 text-xs font-body font-semibold uppercase tracking-[0.2em] text-white/90 hover:text-white"
                    data-testid="nav-logo"
                    data-cursor="home"
                >
                    PS.
                </a>
                <span className="h-4 w-px bg-white/10" />
                {LINKS.map((l) => (
                    <a
                        key={l.href}
                        href={l.href}
                        data-testid={`nav-link-${l.label.toLowerCase()}`}
                        data-cursor={l.label.toLowerCase()}
                        className="magnetic px-3 md:px-4 py-2 text-[11px] font-body font-medium uppercase tracking-[0.18em] text-white/60 hover:text-white transition-colors"
                    >
                        {l.label}
                    </a>
                ))}
            </nav>
        </motion.header>
    );
}
