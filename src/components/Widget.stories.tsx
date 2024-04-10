import { Rocket, X, Check, ListChecks } from 'lucide-react'
import { Notification } from './Notification'
import { Widget } from './Widget'
import { Event } from './Event'
import { Header } from './Header'
export default {
  title: 'components/Widget',
  component: Widget,
  decorators: [
    (Story) => {
      return (
        <div className="w-full md:w-[448px] rounded overflow-hidden ">
          <Header text="Notificações" buttonText="MARCAR TODAS COMO VISTAS" />
          <Event text="Recente" />
          <Notification.Root>
            <Notification.Icon icon={Rocket} />
            <Notification.Content text="lorem" />
            <Notification.Actions>
              <Notification.Action icon={X} />
              <Notification.Action
                icon={Check}
                className="bg-violet-600 hover:bg-violet-800 dark:bg-violet-600 dark:hover:bg-violet-800 "
              />
            </Notification.Actions>
          </Notification.Root>
          {Story()}
        </div>
      )
    },
    (Story) => {
      return (
        <div className="w-full md:w-[448px] rounded overflow-hidden ">
          <Header text="Notificações" buttonText="MARCAR TODAS COMO VISTAS" />
          <Event text="Recente" />
          <Notification.Root>
            <Notification.Icon icon={Rocket} />
            <Notification.Content text="lorem" />
            <Notification.Actions>
              <Notification.Action icon={X} />
              <Notification.Action
                icon={Check}
                className="bg-violet-600 hover:bg-violet-800 dark:bg-violet-600 dark:hover:bg-violet-800 "
              />
            </Notification.Actions>
          </Notification.Root>
          {Story()}
        </div>
      )
    },
  ],
}

export const Default = {}
