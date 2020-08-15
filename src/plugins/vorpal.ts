import {
  WechatyVorpal,
  WechatyVorpalConfig,
}                         from 'wechaty-vorpal'
import {
  UrlLink,
}                         from 'wechaty-vorpal-contrib'

import { CHATOPS_ROOM_ID } from '../database'

const extensionList = [
  UrlLink(),
]

const config: WechatyVorpalConfig = {
  contact: false,
  room : CHATOPS_ROOM_ID,
  silent: true,
  use  : extensionList,
}

export const VorpalPlugin = WechatyVorpal(config)
