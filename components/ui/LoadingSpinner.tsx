type Props = {
  message?: string
}

export function LoadingSpinner({ message = 'Cargando...' }: Props) {
  return (
    <main className="grid min-h-screen place-items-center bg-app-bg px-4 text-app-text">
      <div className="flex flex-col items-center  text-center ">
        <span className="grid size-14 place-items-center rounded-full bg-app-accent-soft text-3xl shadow-inner">
          🐕
        </span>
        <p className="text-base font-semibold text-app-muted">{message}</p>
      </div>
    </main>
  )
}
