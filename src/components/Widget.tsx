import { Check, Rocket, X } from 'lucide-react'
import { Event } from './Event'
import { Header } from './Header'
import { Notification } from './Notification'
export function Widget() {
  return (
    <div className="w-full md:w-[448px] rounded overflow-hidden ">
      <Header text="Notificações" buttonText="MARCAR TODAS COMO VISTAS" />
      {/** RECENT SECTION  */}
      <Event text="Recente" />

      <Notification.Root>
        <Notification.Icon icon={Rocket} />
        <Notification.Content text="Seja bem vindo ao nosso time" />
        <Notification.Actions>
          <Notification.Action
            icon={Check}
            className="bg-violet-900 dark:bg-indigo-700 hover:bg-violet-400"
          />
        </Notification.Actions>
      </Notification.Root>

      {/** Old SECTION  */}
      <Event text="Antigas" />

      <Notification.Root>
        <Notification.Icon icon={Rocket} />
        <Notification.Content text="lorem" />
        <Notification.Actions>
          <Notification.Action icon={Check} />
          <Notification.Action icon={X} />
        </Notification.Actions>
      </Notification.Root>
    </div>
  )
}
