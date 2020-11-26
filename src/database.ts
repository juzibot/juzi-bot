const CHATOPS_ROOM_ID   = '20533169841@chatroom' // ChatOps - Juzi.BOT
const HEARTBEAT_ROOM_ID = '17376996519@chatroom'  // 'ChatOps - Heartbeat'

const TOKEN_ROOM_1_ID = '9223372041354269363@im.chatroom' // Puppet Service Provider (TOKEN) 1
const TOKEN_ROOM_2_ID = '9223372041357992643@im.chatroom' // Puppet Service Provider (TOKEN) 2

export {
  CHATOPS_ROOM_ID,
  HEARTBEAT_ROOM_ID,
}

export function getPuppetServiceProviderTokenList () {
  return [
    TOKEN_ROOM_1_ID,
    TOKEN_ROOM_2_ID,
  ]
}
