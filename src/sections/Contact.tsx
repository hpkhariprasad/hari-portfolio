import { portfolio } from "../data/portfolio"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import { useState } from "react"
import { HiOutlineLocationMarker } from "react-icons/hi"

export default function Contact() {

    const [copied, setCopied] = useState(false)

    const contacts = [
        {
            label: "LinkedIn",
            icon: <FaLinkedin size={18} />,
            action: () => window.open(portfolio.contact.linkedin, "_blank"),
        },
        {
            label: "GitHub",
            icon: <FaGithub size={18} />,
            action: () => window.open(portfolio.contact.github, "_blank"),
        },
        {
            label: "Email",
            icon: <HiOutlineMail size={18} />,
            action: async () => {
                await navigator.clipboard.writeText(portfolio.contact.email)
                setCopied(true)
                setTimeout(() => setCopied(false), 2000)
            },
        },
    ]

    return (
        <section id="contact" className="py-32 px-6">

            <div className="max-w-3xl mx-auto text-center">

                {/* HEADER */}
                <p className="text-primary font-mono text-sm mb-3">
                    $ contact.sh
                </p>

                <h2 className="text-4xl font-semibold mb-4">
                    Contact
                </h2>

                {/* AVAILABILITY */}
                <div className="flex items-center justify-center gap-2 mb-6">
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-gray-400 font-mono text-sm">
                        Open to opportunities
                    </span>
                </div>

                {/* MESSAGE */}
                <p className="text-gray-300 max-w-xl mx-auto mb-12 leading-relaxed">
                    I’m open to discussing new opportunities, architecture challenges,
                    or building intelligent and scalable systems together.
                </p>

                {/* BUTTONS */}
                {/* BUTTONS */}
                <div className="flex flex-wrap justify-center gap-6">

                    {contacts.map((c) => (
                        <button
                            key={c.label}
                            onClick={c.action}
                            className="border border-white/15 rounded-xl px-6 py-3 bg-white/[0.02] backdrop-blur hover:border-primary/40 transition-all duration-300 hover:-translate-y-[2px] font-mono text-sm flex items-center gap-3"
                        >
                            <span className="text-primary flex items-center">
                                {c.icon}
                            </span>
                            {c.label}
                        </button>
                    ))}

                    {/* RESUME BUTTON */}
                    <a
                        href="/HariPrasad_Kasavajjala_Resume.pdf"
                        download
                        className="border border-primary/40 rounded-xl px-6 py-3 bg-primary/[0.06] backdrop-blur hover:bg-primary/[0.1] transition-all duration-300 hover:-translate-y-[2px] font-mono text-sm flex items-center gap-3 text-primary"
                    >
                        ⬇ Download Resume
                    </a>

                </div>

                {/* COPY FEEDBACK */}
                {copied && (
                    <div className="mt-6 text-primary font-mono text-sm">
                        ✔ Email copied to clipboard
                    </div>
                )}

                {/* LOCATION */}

                <div className="mt-12 flex items-center justify-center gap-2 text-gray-500 font-mono text-sm">
                    <HiOutlineLocationMarker className="text-primary" size={16} />
                    <span>Hyderabad, India</span>
                </div>

            </div>
        </section>
    )
}