interface HeaderProps {
  text: string
  buttonText: string
}

export function Header({ buttonText, text }: HeaderProps) {
  return (
    <div className="flex items-center justify-between py-4 px-6 bg-zinc-200 dark:bg-zinc-800 ">
      <span className="font-bold">{text}</span>
      <button className="text-violet-500 font-bold font-sans text-xs hover:text-violet-300">
        {buttonText}{' '}
      </button>
    </div>
  )
}
