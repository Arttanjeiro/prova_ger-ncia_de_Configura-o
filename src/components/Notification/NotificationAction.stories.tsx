import { NotificationAction } from './NotificationAction'
import { Check, List } from 'lucide-react'
import { NotificationActions } from './NotificationActions'
export default {
  title: 'components/Notification',
  component: NotificationAction,
  decorators: [
    (Story) => {
      return (
        <NotificationActions>
          <NotificationAction
            className="bg-violet-600 hover:bg-violet-800 dark:bg-violet-600 dark:hover:bg-violet-800 "
            icon={List}
          />
          {Story()}
        </NotificationActions>
      )
    },
  ],
}

export const Default = () => <NotificationAction icon={Check} />
