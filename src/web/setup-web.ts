import http from 'http'

import express from 'express'

import {
  Wechaty,
  log,
}               from 'wechaty'

import {
  getWechaty,
}               from '../wechaty/mod'
import {
  PORT,
  VERSION,
}               from '../config'

import { CHATOPS_ROOM_ID } from '../database'

async function chatopsHandler (request: express.Request, response: express.Response) {
  log.info('startWeb', 'chatopsHandler()')

  const payload: {
    chatops: string,
  } = request.params as any

  await getWechaty('friday').Room.load(CHATOPS_ROOM_ID).say(payload.chatops)

  return response.redirect('/')
}

export async function setupWeb (bot: Wechaty): Promise<void> {
  log.verbose('startWeb', 'startWeb(%s)', bot)

  let qrcodeValue : undefined | string
  let userName    : undefined | string

  const app =  express()

  const FORM_HTML = `
    <form action="/chatops/" method="post">
      <label for="chatops">ChatOps: </label>
      <input id="chatops" type="text" name="chatops" value="Hello from Juzi.BOT.">
      <input type="submit" value="ChatOps">
    </form>
  `
  const rootHandler = async (_req: express.Request, res: express.Response) => {
    let html

    if (qrcodeValue) {

      const qrImageUrl = 'https://wechaty.github.io/qrcode/' + encodeURIComponent(qrcodeValue)

      html = [
        `<h1>Juzi.BOT v${VERSION}</h1>`,
        'Scan QR Code: <br />',
        qrcodeValue + '<br />',
        `<a href="${qrImageUrl}" target="_blank">${qrImageUrl}</a><br />`,
        '\n\n',
      ].join('')

    } else if (userName) {
      const roomList = await bot.Room.findAll()
      let roomHtml = 'The rooms I have joined are as follows: <ol>'
      for (const room of roomList) {
        const topic = await room.topic()
        const roomId = room.id
        roomHtml = roomHtml + `<li> ${topic} / ${roomId} </li>\n`
      }
      roomHtml = roomHtml + '</ol>'

      html = [
        `<p> Juzi.BOT v${VERSION} User ${userName} logged in. </p>`,
        FORM_HTML,
        roomHtml,
      ].join('')

    } else {

      html = `Juzi.BOT v${VERSION} Hello, come back later please.`

    }
    res.end(html)
  }

  app.get('/', rootHandler)
  app.get('/chatops/', chatopsHandler)

  bot.on('scan', qrcode => {
    qrcodeValue = qrcode
    userName    = undefined
  })
  bot.on('login', user => {
    qrcodeValue = undefined
    userName    = user.name()
  })
  bot.on('logout', () => {
    userName = undefined
  })

  http.createServer(app).listen(PORT)

  log.info('startWeb', 'startWeb() listening to http://localhost:%d', PORT)
}
