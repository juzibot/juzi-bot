import './config'

import { log } from 'wechaty'

import {
  getWechaty,
  getIoClient,
}                     from './wechaty/mod'
import { setupWeb }   from './web/mod'

async function main () {
  log.verbose('main', 'main()')

  const name = process.env.WECHATY_NAME || 'Juzi.BOT'

  const wechaty = getWechaty(name)
  const client = getIoClient(wechaty)

  /**
   * IoClient for providing a Hostie Service for 句子秒回
   */
  await client.start()

  await setupWeb(wechaty)

  /**
   * Do not return until the bot turned off
   */
  await wechaty.state.ready('off')

  return 0
}

main()
  .then(process.exit)
  .catch((e) => {
    log.error('Main', 'main() rejection: %s', e)
    process.exit(1)
  })
