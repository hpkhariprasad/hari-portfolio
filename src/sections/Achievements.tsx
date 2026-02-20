import { portfolio } from "../data/portfolio"

export default function Achievements() {

  const achievements = portfolio.achievements
  const certifications = portfolio.certifications

  // assume first achievement is strongest (patent)
  const featured = achievements[0]
  const rest = achievements.slice(1)

  return (
    <section id="achievements" className="py-32 px-6 relative overflow-hidden">

      {/* GRID */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgb(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* HEADER */}
        <div className="mb-14 text-center">
          <p className="text-primary font-mono text-sm mb-2">
            $ cat recognition.log
          </p>
          <h2 className="text-4xl font-semibold">
            Recognition & Certifications
          </h2>
        </div>

        {/* FEATURED ACHIEVEMENT */}
        {featured && (
          <div className="premium-card p-8 mb-10 text-center border-primary/40">

            <p className="text-xs font-mono text-white/40 mb-2">
              featured_achievement
            </p>

            <h3 className="text-xl text-primary font-semibold mb-3">
              {featured}
            </h3>

            <p className="text-white/60 text-sm">
              Demonstrates innovation, technical depth, and real-world problem solving beyond standard engineering responsibilities.
            </p>

          </div>
        )}

        {/* OTHER ACHIEVEMENTS */}
        {rest.length > 0 && (
          <div className="grid md:grid-cols-2 gap-6 mb-14">

            {rest.map((a, i) => (
              <div key={i} className="premium-card p-6">
                <p className="text-white/80 text-sm leading-relaxed">
                  {a}
                </p>
              </div>
            ))}

          </div>
        )}

        {/* CERTIFICATIONS */}
        {certifications.length > 0 && (
          <div className="text-center">

            <p className="text-xs font-mono text-white/40 mb-5">
              certifications
            </p>

            <div className="flex flex-wrap justify-center gap-4">

              {certifications.map((c, i) => (
                <span
                  key={i}
                  className="
                    px-5 py-2
                    rounded-full
                    text-sm
                    border border-primary/30
                    text-primary
                    font-mono
                    bg-primary/[0.05]
                    hover:bg-primary/[0.08]
                    transition
                  "
                >
                  {c}
                </span>
              ))}

            </div>

          </div>
        )}

      </div>
    </section>
  )
}