import { portfolio } from "../data/portfolio"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export default function Footer() {

  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 mt-24 py-10 px-6">

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* LEFT */}
        <p className="text-gray-500 text-sm font-mono text-center md:text-left">
          © {year} {portfolio.name}. All rights reserved.
        </p>

        {/* CENTER NAV */}
        <div className="flex gap-6 text-sm font-mono text-gray-400">

          <a href="#about" className="hover:text-primary transition">
            About
          </a>

          <a href="#skills" className="hover:text-primary transition">
            Skills
          </a>

          <a href="#experience" className="hover:text-primary transition">
            Experience
          </a>

          <a href="#projects" className="hover:text-primary transition">
            Projects
          </a>

          <a href="#achievements" className="hover:text-primary transition">
            Achievements
          </a>

          <a href="#contact" className="hover:text-primary transition">
            Contact
          </a>

        </div>

        {/* RIGHT SOCIAL */}
        <div className="flex gap-4">

          <a
            href={portfolio.contact.linkedin}
            target="_blank"
            className="text-gray-400 hover:text-primary transition"
          >
            <FaLinkedin size={18} />
          </a>

          <a
            href={portfolio.contact.github}
            target="_blank"
            className="text-gray-400 hover:text-primary transition"
          >
            <FaGithub size={18} />
          </a>

        </div>

      </div>

    </footer>
  )
}