import {
  Contact,
  Room,
}                       from 'wechaty'
import {
  RoomInviter,
  RoomInviterConfig,
  talkers,
}                       from 'wechaty-plugin-contrib'
import { PROVIDER_ROOM_LIST } from '../database'

const repeat: talkers.ContactTalkerOptions = async (contact: Contact, room?: Room) => {
  await contact.say('You are already in our room: ' + await room?.topic())
}

const tokenConfig: RoomInviterConfig = {
  password : [
    /^token$/i,
    /^wechaty-puppet-padplus$/i,
    /^wechaty-puppet-donut$/i,
    /^padplus$/i,
    /^donut$/i,
  ],
  repeat,
  room: PROVIDER_ROOM_LIST,
  rule: [
    'Thanks for asking me to invite you for joining the "Wechaty Puppet Service Provider" WeChat Room!',
    'Wechaty is a Conversational RPA for WeChat for connecting Chatbots in ease.',
    'You can find our documentation at https://wechaty.js.org',
    'Please introduce yourself after you join the room, cheers!',
  ],
  welcome: 'is joining us as a new Wechaty Puppet Service Consumer, welcome!',
}

const TokenRoomInviterPlugin = RoomInviter(tokenConfig)

export const RoomInviterPluginList = [
  TokenRoomInviterPlugin,
]
