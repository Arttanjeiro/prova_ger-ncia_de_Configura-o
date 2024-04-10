import { ReactNode } from 'react'

interface NotificationActionsProps {
  children: ReactNode
}

export function NotificationActions({ children }: NotificationActionsProps) {
  return <div className="hidden md:flex gap-2 self-center">{children}</div>
}
