import { ElementType, HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'
interface NotificationActionProps extends HTMLAttributes<HTMLButtonElement> {
  icon: ElementType
}

export function NotificationAction({
  icon: Icon,
  ...rest
}: NotificationActionProps) {
  return (
    <button
      {...rest}
      className={twMerge(
        'w-8 h-8 rounded flex items-center justify-center bg-zinc-400 hover:bg-zinc-500 dark:bg-zinc-800 dark:hover:bg-zinc-600',
        rest.className,
      )}
    >
      <Icon className="w-e h-3 text-zinc-50" />
    </button>
  )
}
