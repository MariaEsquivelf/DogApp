type Props = {
  label: string
  min: number
  max: number
  unit: string
}

export function BreedStatCard({ label, min, max, unit }: Props) {
  return (
    <div className="px-6 py-5 sm:px-8">
      <p className="text-xs font-semibold uppercase tracking-wide text-app-muted-light">
        {label}
      </p>
      <p className="mt-1 text-2xl font-bold text-app-accent">
        {min} - {max}
      </p>
      <p className="text-xs text-app-muted-light">{unit}</p>
    </div>
  )
}
