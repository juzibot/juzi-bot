/* eslint-disable sort-keys */
import {
  WechatyQnAMaker,
  WechatyQnAMakerConfig,
}                           from 'wechaty-qnamaker'
import { PROVIDER_ROOM_LIST } from '../database'

const skipMessage = [
  /^wechaty$/i,
  /^token$/i,
]

const room = PROVIDER_ROOM_LIST

const minScore = 30

const config: WechatyQnAMakerConfig = {
  language: ['chinese'],

  skipMessage,
  room,
  mention: false,
  contact: true,
  minScore,

  endpointKey     : process.env.WECHATY_PLUGIN_QNAMAKER_ENDPOINT_KEY,
  knowledgeBaseId : process.env.WECHATY_PLUGIN_QNAMAKER_KNOWLEDGE_BASE_ID,
  resourceName    : process.env.WECHATY_PLUGIN_QNAMAKER_RESOURCE_NAME,
}

const QnAMakerPlugin = WechatyQnAMaker(config)

export {
  QnAMakerPlugin,
}
