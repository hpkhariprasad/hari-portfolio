type Props = {
  command: string
  title: string
}

export default function TerminalHeader({ command, title }: Props) {
  return (
    <div className="mb-8">
      <p className="text-cyanAccent text-sm mb-2">
        $ {command}
      </p>

      <h2 className="text-3xl font-semibold tracking-wide">
        {title}
      </h2>

      <div className="h-[2px] w-16 bg-cyanAccent mt-3" />
    </div>
  )
}