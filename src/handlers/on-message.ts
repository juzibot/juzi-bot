import { CHATOPS_ALARM_ROOM_ID } from './../config'
import {
  log,
  Message,
  Wechaty,
}             from 'wechaty'
import { DONUT_MONITOR_OA_ID } from '../config'

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

      if (message.from() && message.from().id === DONUT_MONITOR_OA_ID) {
        const alarmRoom = this.Room.load(CHATOPS_ALARM_ROOM_ID)
        await message.forward(alarmRoom)
      }
    }

  } catch (e) {
    log.error('on-message', 'Failed to chatops for the message: %s', e)
  }

}
