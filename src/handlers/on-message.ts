import {
  log,
  Message,
  Wechaty,
}             from 'wechaty'

// import moment from 'moment'

// import { Chatops } from '../chatops'

// import { VoteManager } from '../managers/vote-manager'

// const BORN_TIME = Date.now()

export default async function onMessage (
  this    : Wechaty,
  message : Message,
): Promise<void> {
  log.info('on-message', 'onMessage(%s)', message)

  const type = message.type()
  const text = message.text()

  try {
    if (message.self()) {
      return
    }

    if (type === Message.Type.Text) {
      if (text.match(/^#ding$/i)) {
        await message.say('dong')
      }
    }

  } catch (e) {
    log.error('on-message', 'Failed to chatops for the message: %s', e)
  }

}
