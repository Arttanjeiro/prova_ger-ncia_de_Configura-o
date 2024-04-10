import { Rocket, X, Check, ListChecks } from 'lucide-react'
import { NotificationAction } from './NotificationAction'
import { NotificationActions } from './NotificationActions'
import { NotificationContent } from './NotificationContent'
import { NotificationIcon } from './NotificationIcon'
import { NotificationRoot } from './NotificationRoot'
export default {
  title: 'components/NotificationRoot',
  component: NotificationRoot,
  decorators: [
    (Story) => {
      return (
        <NotificationRoot>
          <NotificationIcon icon={Rocket} />
          <NotificationContent text="lorem" />
          <NotificationActions>
            <NotificationAction icon={X} />
            <NotificationAction
              icon={Check}
              className="bg-violet-600 hover:bg-violet-800 dark:bg-violet-600 dark:hover:bg-violet-800 "
            />
          </NotificationActions>
          {Story()}
        </NotificationRoot>
      )
    },
    (Story) => {
      return (
        <NotificationRoot>
          <NotificationIcon icon={Rocket} />
          <NotificationContent text="Seja bem vindo ao nosso time" />
          <NotificationActions>
            <NotificationAction
              icon={Check}
              className="bg-violet-600 hover:bg-violet-900 dark:bg-violet-800 dark:hover:bg-violet-400"
            />
          </NotificationActions>
          {Story()}
        </NotificationRoot>
      )
    },
  ],
}

export const Default = {}
