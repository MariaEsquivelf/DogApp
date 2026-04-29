'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <main className="grid min-h-screen place-items-center bg-app-bg px-4 text-app-text">
      <section className="w-full max-w-lg rounded-2xl border border-app-border bg-app-surface px-6 py-8 text-center shadow-sm sm:px-8">
        <span className="mx-auto mb-4 grid size-14 place-items-center rounded-full bg-app-accent-soft text-3xl shadow-inner">
          🐕
        </span>
        <h2 className="text-2xl font-bold tracking-tight text-app-heading">
          Algo salió mal
        </h2>
        <p className="mt-3 text-sm leading-6 text-app-muted">
          {error.message}
        </p>
        <button
          className="mt-6 rounded-full bg-app-primary px-5 py-2.5 text-sm font-semibold text-app-primary-text shadow-sm transition hover:bg-app-accent-hover"
          onClick={reset}
          type="button"
        >
          Intentar de nuevo
        </button>
      </section>
    </main>
  )
}
