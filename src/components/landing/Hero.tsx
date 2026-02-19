import { motion } from "framer-motion";
import { GradientButton } from "@/components/ui/gradient-button";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } }
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Glow orbs */}
      <div className="absolute inset-0 glow-blue pointer-events-none" />
      <div className="absolute inset-0 glow-cyan pointer-events-none" />

      <motion.div
        className="container relative z-10 flex flex-col items-center text-center max-w-[860px]"
        variants={stagger}
        initial="hidden"
        animate="show">

        {/* Badge pill */}
        <motion.a
          href="#features"
          variants={fadeUp}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/[0.28] mb-8 bg-primary/[0.08]">

          <span className="font-mono text-xs text-primary">Introducing Zentro Workmark</span>
        </motion.a>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          className="font-display text-[40px] leading-[1.05] text-foreground mb-6 font-bold md:text-6xl">

          Your Workmark Speaks
          <br />
          Louder Than Your{" "}
          <span className="relative inline-block">
            <span className="animate-strikethrough relative">Resume</span>
          </span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          variants={fadeUp}
          className="font-body text-text-secondary text-lg md:text-[19px] max-w-[580px] leading-[1.75] mb-8">

          Zentro Workmark is the innovation ecosystem for students — connecting
          you to real challenges, expert feedback, and a verified proof-of-work
          that recruiters and industry leaders actually value.
        </motion.p>

        {/* CTA row */}
        <motion.div variants={fadeUp} className="flex justify-center mb-6">
          <GradientButton className="px-7 py-3.5 font-display font-semibold text-[15px] rounded-[10px]">
            Start Building Your Workmark
          </GradientButton>
        </motion.div>

        {/* Trust line */}
        <motion.p variants={fadeUp} className="font-mono text-[11px] text-text-muted mb-12">
          Free for students · No credit card · Join 2,000+ students across 12 universities
        </motion.p>

        {/* Platform mockup */}
        <motion.div
          variants={fadeUp}
          className="relative w-full max-w-[1100px]">

          <div className="relative rounded-xl border border-primary/15 overflow-hidden shadow-[0_40px_120px_hsl(213_100%_62%/0.15)]">
            {/* Browser chrome */}
            <div className="bg-secondary/80 px-4 py-2.5 flex items-center gap-2 border-b border-primary/10">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-muted/30" />
                <div className="w-3 h-3 rounded-full bg-muted/30" />
                <div className="w-3 h-3 rounded-full bg-muted/30" />
              </div>
              <div className="flex-1 mx-8">
                <div className="bg-background/50 rounded-md px-3 py-1 text-xs text-muted-foreground font-mono text-center max-w-xs mx-auto">
                  workmark.zentrosuite.com
                </div>
              </div>
            </div>
            <img src={`${import.meta.env.BASE_URL}mockup.png`} alt="Zentro Workmark Platform Dashboard" className="w-full" loading="lazy" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}