import { useScrollReveal } from "./useScrollReveal";

export default function FinalCTA() {
  const ref = useScrollReveal();

  return (
    <section className="relative section-padding overflow-hidden bg-background">
      <div ref={ref} className="container relative z-10 flex flex-col items-center text-center max-w-[700px] [&:not(.revealed)]:opacity-0 [&.revealed]:animate-[fade-in_0.5s_ease-out_forwards]">
        {/* Badge */}
        <span
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/[0.08] mb-8 font-mono text-xs text-text-secondary bg-black/[0.02]">

          ✦ FREE · NO CREDIT CARD · START TODAY
        </span>

        <h2 className="font-display font-extrabold text-[48px] md:text-[76px] text-foreground leading-[1.0] mb-6">
          Start building your
          <br />
          <span className="text-primary">
            Workmark.
          </span>
        </h2>

        <p className="font-body text-text-secondary text-xl max-w-[500px] leading-[1.75] mb-8">
          Every week you wait is a week your proof-of-work trail doesn't grow. Every challenge you skip is a story never told. Join Zentro Workmark today and start building what actually matters.
        </p>

        <a href="https://tally.so/r/mZ0jgy" target="_blank" rel="noopener noreferrer" className="px-9 py-4 font-display font-semibold text-base text-primary-foreground bg-primary rounded-xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:scale-[1.03] transition-all animate-shimmer inline-block">
          Join the Waitlist →
        </a>

        <p className="font-mono text-[11px] text-text-muted mt-6">
          No credit card required · No resume needed · Just your work
        </p>
      </div>
    </section>);

}