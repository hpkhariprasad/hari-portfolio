type Props = {
  id?: string
  children: React.ReactNode
}

export default function Section({ id, children }: Props) {
  return (
    <section id={id} className="py-28">

      <div className="max-w-6xl mx-auto px-6">
        {children}
      </div>

    </section>
  )
}