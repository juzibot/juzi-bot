/* eslint-disable sort-keys */
import {
  WechatyIntercom,
  WechatyIntercomConfig,
}                           from 'wechaty-intercom'

import { TOKEN_ROOM_ID } from '../database'

const config: WechatyIntercomConfig = {
  mention: true,
  close: [
    [
      'Thank you for contacting the support of puppet service provider.',
      'We believe that your question has been answered and hope you are good now.',
      'Please feel free to contact us again if you have more questions.',
      'Thank you very much, and have a nice day!',
    ].join(' '),
  ],
  room: TOKEN_ROOM_ID,

  intercomToken   : process.env.WECHATY_PLUGIN_INTERCOM_TOKEN,
  webhookProxyUrl : process.env.WECHATY_PLUGIN_INTERCOM_WEBHOOK_PROXY_URL,
}

export const IntercomPlugin = WechatyIntercom(config)
