/* eslint-disable sort-keys */
import {
  WechatyQnAMaker,
  WechatyQnAMakerConfig,
}                           from 'wechaty-plugin-qnamaker'

import {
  TOKEN_ROOM_ID,
}                                   from '../database'

const skipMessage = [
  /^wechaty$/i,
]

const room = [
  TOKEN_ROOM_ID,
]

const minScore = 30

const configEnglish: WechatyQnAMakerConfig = {
  language: ['english'],

  skipMessage,
  room,
  at: false,
  contact: true,
  minScore,

  endpointKey     : process.env.WECHATY_PLUGIN_QNAMAKER_ENDPOINT_KEY,
  knowledgeBaseId : process.env.WECHATY_PLUGIN_QNAMAKER_KNOWLEDGE_BASE_ID,
  resourceName    : process.env.WECHATY_PLUGIN_QNAMAKER_RESOURCE_NAME,
}

const configChinese: WechatyQnAMakerConfig = {
  language: ['chinese'],

  skipMessage,
  room,
  at: false,
  contact: true,
  minScore,

  endpointKey     : process.env.WECHATY_PLUGIN_QNAMAKER_ENDPOINT_KEY_CHINESE,
  knowledgeBaseId : process.env.WECHATY_PLUGIN_QNAMAKER_KNOWLEDGE_BASE_ID_CHINESE,
  resourceName    : process.env.WECHATY_PLUGIN_QNAMAKER_RESOURCE_NAME_CHINESE,
}

const QnAMakerEnglishPlugin = WechatyQnAMaker(configEnglish)
const QnAMakerChinesePlugin = WechatyQnAMaker(configChinese)

export {
  QnAMakerChinesePlugin,
  QnAMakerEnglishPlugin,
}
