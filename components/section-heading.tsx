import { Reveal } from './reveal'

interface SectionHeadingProps {
  index: string
  label: string
  title: React.ReactNode
  lede?: React.ReactNode
}

export function SectionHeading({ index, label, title, lede }: SectionHeadingProps) {
  return (
    <Reveal>
      <div className="flex items-center gap-3 text-xs text-muted-foreground sm:text-sm">
        <span className="font-mono text-accent">{index}</span>
        <span className="h-px w-6 bg-border sm:w-8" />
        <span className="uppercase tracking-[0.18em]">{label}</span>
      </div>
      <h2 className="mt-4 text-balance text-2xl tracking-tight sm:text-3xl md:text-4xl">{title}</h2>
      {lede && (
        <p className="mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">{lede}</p>
      )}
    </Reveal>
  )
}
