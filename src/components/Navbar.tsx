import { useState } from "react"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
import { useActiveSection } from "../hooks/useActiveSection"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    {id:"projects",label:"Projects"},
    {id:"achievements",label:"Achievements"},
    { id: "contact", label: "Contact" }
  ]

  const active = useActiveSection(
    links.map((l) => l.id)
  )

  const handleClick = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
    setIsMenuOpen(false)
  }

  return (
    <header className="
      fixed top-0 left-0 w-full z-50
      border-b border-white/10
      backdrop-blur bg-black/40
    ">

      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* LOGO */}
        <div className="font-mono text-primary text-lg tracking-wide">
          HP<span className="text-white">.</span>
        </div>

        {/* DESKTOP LINKS */}
        <nav className="hidden md:flex gap-8">

          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleClick(link.id)}
              className={`
                relative font-mono text-sm tracking-wide transition-colors duration-300
                ${
                  active === link.id
                    ? "text-primary"
                    : "text-gray-400 hover:text-white"
                }
              `}
            >
              {link.label}

              {/* ACTIVE UNDERLINE */}
              {active === link.id && (
                <span className="
                  absolute -bottom-1 left-0 w-full h-[2px]
                  bg-primary
                " />
              )}
            </button>
          ))}

        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white text-2xl"
        >
          {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <nav className="md:hidden border-t border-white/10 bg-black/40 backdrop-blur">
          <div className="px-6 py-4 flex flex-col gap-4">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => handleClick(link.id)}
                className={`
                  text-left font-mono text-sm tracking-wide transition-colors duration-300
                  ${
                    active === link.id
                      ? "text-primary"
                      : "text-gray-400 hover:text-white"
                  }
                `}
              >
                {link.label}
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}