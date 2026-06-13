export function SectionHeading({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <h2 className="font-heading text-2xl font-bold text-gold-gradient sm:text-3xl">
        {children}
      </h2>
      <span className="mt-3 h-px w-24 bg-gradient-to-l from-transparent via-gold to-transparent" />
    </div>
  )
}
