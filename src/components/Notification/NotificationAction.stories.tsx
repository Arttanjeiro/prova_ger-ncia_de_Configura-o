import { NotificationAction } from './NotificationAction'
import { Check } from 'lucide-react'
import { Meta } from '@storybook/react'
export default {
  title: 'components/Notification',
  component: NotificationAction,
} as Meta

export const Default = () => <NotificationAction icon={Check} />
