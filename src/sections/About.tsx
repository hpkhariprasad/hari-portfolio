import { portfolio } from "../data/portfolio"
import useReveal from "../hooks/useReveal"

export default function About() {

  const { ref, visible } = useReveal<HTMLDivElement>()

  const first = portfolio.summary.slice(0, 2)
  const middle = portfolio.summary.slice(2, 5)
  const last = portfolio.summary.slice(5)

  const identity = [
    portfolio.title,
    Object.keys(portfolio.skills).includes("AI & LLM") && "AI Workflow Builder",
    Object.keys(portfolio.skills).includes("Cloud & DevOps") && "Cloud-Native Engineer",
    "Enterprise Software Engineer"
  ].filter(Boolean)

  const strengths = [
    `${portfolio.experience.length}+ production roles across enterprise environments`,
    "Hands-on experience integrating AI into production systems",
    "Led modernization initiatives using .NET 8 and cloud-native architecture",
    "End-to-end delivery across Windows, Web, Cloud and AI stacks"
  ]

  // dynamic years calculation (simple safe fallback)
  const yearsExperience = "8+" // replace later with real calculation if needed

  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">

      {/* GRID */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgb(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* REVEAL WRAPPER */}
      <div
        ref={ref}
        className={`max-w-6xl mx-auto relative z-10 reveal ${visible ? "show" : ""}`}
      >

        {/* HEADER */}
        <p className="text-primary font-mono text-sm mb-4">
          $ cat about.txt
        </p>

        <h2 className="text-4xl font-semibold mb-10">
          About Me
        </h2>

        {/* IDENTITY STRIP */}
        <div className="flex flex-wrap gap-3 mb-12">
          {identity.map((item, i) => (
            <span
              key={i}
              className="px-4 py-2 rounded-full text-sm font-mono border border-primary/40 text-primary bg-primary/10 backdrop-blur"
            >
              {item}
            </span>
          ))}
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT TEXT */}
          <div className="space-y-5 text-white/80 leading-relaxed text-lg">

            {first.map((line, i) => <p key={i}>{line}</p>)}
            {middle.map((line, i) => <p key={i}>{line}</p>)}
            {last.map((line, i) => <p key={i}>{line}</p>)}

          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-6">

            {/* LOCATION */}
            <InfoCard
              label="location"
              value={portfolio.contact?.location || "Hyderabad, India"}
            />

            {/* EXPERIENCE */}
            <InfoCard
              label="experience"
              value={yearsExperience}
              sub="years building production systems"
              highlight
            />

            {/* STRENGTHS */}
            <div className="p-6 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur hover:border-primary/40 transition">

              <p className="text-xs font-mono text-white/40 mb-4">
                strengths
              </p>

              <ul className="space-y-3">
                {strengths.map((s, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/80">
                    <span className="text-primary mt-[2px]">▸</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}


function InfoCard({
  label,
  value,
  sub,
  highlight
}: {
  label: string
  value: string
  sub?: string
  highlight?: boolean
}) {
  return (
    <div className="p-6 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur hover:border-primary/40 transition">
      <p className="text-xs text-white/40 mb-1 font-mono">
        {label}
      </p>

      <p className={`${highlight ? "text-primary text-3xl font-semibold" : "text-white text-lg"}`}>
        {value}
      </p>

      {sub && (
        <p className="text-white/50 text-sm">
          {sub}
        </p>
      )}
    </div>
  )
}