import { portfolio } from "../data/portfolio"

export default function Experience() {

  const experience = portfolio.experience

  return (
    <section id="experience" className="py-32 px-6">

      <div className="max-w-4xl mx-auto">

        {/* HEADER */}
        <div className="mb-12">
          <p className="text-primary font-mono text-sm mb-2">
            $ cat experience.log
          </p>
          <h2 className="text-3xl font-semibold">
            Experience
          </h2>
        </div>

        {/* TIMELINE */}
        <div className="relative">

          {/* vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/60 via-primary/30 to-transparent" />

          <div className="space-y-16">

            {experience.map((job, i) => (
              <div key={i} className="relative pl-12">

                {/* dot */}
                <div className="absolute left-0 top-2 w-8 h-8 rounded-full bg-[#070b11] border border-primary flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                </div>

                {/* card */}
                <div className="premium-card p-6 hover:-translate-y-[2px] transition-all duration-300">

                  {/* role + duration */}
                  <div className="flex flex-wrap justify-between gap-2 mb-2">
                    <h3 className="text-lg font-semibold">
                      {job.role}
                    </h3>

                    <span className="text-sm text-gray-400 font-mono">
                      {job.duration}
                    </span>
                  </div>

                  {/* company + location */}
                  <p className="text-primary font-medium mb-4">
                    {job.company}
                    {job.location && (
                      <span className="text-gray-400 font-normal ml-2">
                        • {job.location}
                      </span>
                    )}
                  </p>

                  {/* RESPONSIBILITIES */}
                  <ul className="mb-5 space-y-2 text-gray-300 text-sm leading-relaxed">
                    {job.responsibilities.map((r, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="text-primary mt-[2px]">▸</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>

                  {/* tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {job.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs border border-primary/30 rounded-full text-primary font-mono bg-primary/[0.05]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  )
}