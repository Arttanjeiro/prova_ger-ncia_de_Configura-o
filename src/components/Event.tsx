interface EventProps {
  text: string
}

export function Event({ text }: EventProps) {
  return (
    <div className="divide-y divide-zinc-500 dark:divide-zinc-950">
      <div className="bg-zinc-300 dark:bg-zinc-950 px-5 py-2 text-sm text-zinc-500 dark:text-zinc-400">
        {text}
      </div>
    </div>
  )
}
