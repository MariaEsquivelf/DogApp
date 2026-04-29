// app/page.tsx
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-app-bg flex items-center justify-center">
      <div className="text-center flex flex-col items-center gap-6">
        <span className="text-8xl">🐾</span>
        <h1 className="text-4xl font-bold text-app-heading">
          Dog Breeds
        </h1>
        <p className="text-app-muted max-w-sm">
          Explorá cientos de razas de perros, sus características y grupos.
        </p>
        <Link
          href="/breeds"
          className="rounded-full bg-app-accent px-6 py-3 text-sm font-semibold text-app-primary-text hover:bg-app-accent-hover transition-colors"
        >
          Ver razas →
        </Link>
      </div>
    </main>
  )
}