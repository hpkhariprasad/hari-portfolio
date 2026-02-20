import { portfolio } from "../data/portfolio"

export default function Skills() {

  // convert skills object -> array to match your UI structure
  const skills = Object.entries(portfolio.skills).map(
    ([category, items]) => ({
      category,
      items,
    })
  )

  return (
    <section id="skills" className="py-32 px-6">

      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="mb-14">
          <h2 className="text-3xl font-semibold flex items-center gap-3">
            <span className="text-primary font-mono">#</span>
            Skills
          </h2>
          <div className="w-14 h-[2px] bg-primary mt-3 ml-6 opacity-60" />
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10">

          {skills.map((group, i) => (
            <div
              key={i}
              className="border border-white/15 rounded-xl p-7 bg-white/[0.02] backdrop-blur hover:border-primary/40 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
            >

              {/* CATEGORY TITLE */}
              <h3 className="text-sm font-semibold mb-5 text-primary tracking-widest uppercase">
                {group.category}
              </h3>

              {/* TAGS */}
              <div className="flex flex-wrap gap-3">

                {group.items.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 text-sm rounded-md border border-white/15 bg-white/[0.03] text-gray-200 font-mono hover:border-primary/40 hover:text-white transition"
                  >
                    {skill}
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