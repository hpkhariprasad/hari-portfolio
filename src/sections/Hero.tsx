import { useEffect, useState } from "react"
import {portfolio} from "../data/portfolio"

export default function Hero() {
  const [typedText, setTypedText] = useState("")
  const title = portfolio.title

  const [firstName, lastName] = portfolio.name.split(" ")

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i <= title.length) {
        setTypedText(title.slice(0, i))
        i++
      } else {
        clearInterval(timer)
      }
    }, 50)

    return () => clearInterval(timer)
  }, [title])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">

      {/* GRID BACKGROUND */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgb(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">

        {/* TERMINAL PROMPT */}
        <div className="mb-6 font-mono text-muted-foreground text-sm tracking-widest uppercase">
          <span className="text-primary">$</span> whoami
        </div>

        {/* NAME */}
        <h1 className="font-mono font-bold tracking-tight leading-none">
          
          <span className="block text-5xl md:text-7xl text-foreground">
            {firstName}
          </span>

          <span className="block text-5xl md:text-7xl mt-2 
          bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 
          bg-clip-text text-transparent">
            {lastName}
          </span>

        </h1>

        {/* TITLE */}
        <div className="font-mono text-xl md:text-2xl text-muted-foreground mt-6 h-8">
          {typedText}
          <span className="text-primary animate-pulse">|</span>
        </div>

        {/* SUMMARY */}
        <p className="text-secondary-foreground max-w-2xl mx-auto text-lg leading-relaxed mt-8 mb-10">
          {portfolio.summary[0]}
        </p>

        {/* BUTTONS */}
        <div className="flex gap-4 justify-center flex-wrap">

          <a
            href="#experience"
            className="px-6 py-3 btn-primary text-primary-foreground font-mono font-medium rounded-md hover:opacity-90 transition-all"
          >
            View Experience
          </a>

          <a
            href="#contact"
            className="px-6 py-3 btn-outline text-primary font-mono font-medium rounded-md hover:btn-primary/10 transition-all"
          >
            Get in Touch
          </a>

        </div>

      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-xs font-mono">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-primary/50 to-transparent" />
      </div>

    </section>
  )
}