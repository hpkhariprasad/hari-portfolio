import { portfolio } from "../data/portfolio"

export default function Projects() {

  const projects = portfolio.projects

  return (
    <section id="projects" className="py-32 px-6">

      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="mb-14">
          <p className="text-primary font-mono text-sm mb-2">
            $ cat projects.log
          </p>
          <h2 className="text-3xl font-semibold">
            Projects
          </h2>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10">

          {projects.map((project, i) => (
            <div
              key={i}
              className="border border-white/15 rounded-xl p-7 bg-white/[0.02] backdrop-blur hover:border-primary/40 transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
            >

              {/* TITLE */}
              <h3 className="text-lg font-semibold mb-2">
                {project.name}
              </h3>

              {/* OBJECTIVE */}
              <p className="text-gray-300 mb-4 leading-relaxed">
                {project.objective}
              </p>

              {/* RESPONSIBILITIES */}
              <ul className="mb-5 space-y-2 text-gray-300 text-sm">
                {project.responsibilities.slice(0, 3).map((r, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="text-primary">▸</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>

              {/* TECH */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs border border-primary/30 rounded-full text-primary font-mono bg-primary/[0.05]"
                  >
                    {t}
                  </span>
                ))}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}