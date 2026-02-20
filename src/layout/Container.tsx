export default function Container({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="max-w-6xl mx-auto px-6 relative z-10">
      {children}
    </div>
  )
}