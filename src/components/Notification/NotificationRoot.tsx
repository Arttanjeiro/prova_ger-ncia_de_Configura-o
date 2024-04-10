import { ReactNode } from 'react'

interface NotificationRootProps {
  children: ReactNode
}

export function NotificationRoot({ children }: NotificationRootProps) {
  return (
    <div className="bg-zinc-200 dark:bg-zinc-900 px-8 py-4 flex flex-col md:flex-row items-center gap-6">
      {children}
    </div>
  )
}