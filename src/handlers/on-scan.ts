import {
  log,
  Wechaty,
}             from 'wechaty'

export default async function onScan (
  this   : Wechaty,
  qrcode : string,
  status : number,
): Promise<void> {
  log.info('on-scan', 'onScan() [%s] %s\nScan QR Code above to log in.',
    status,
    qrcodeValueToUrl(qrcode),
  )
}

/**
 * Generate a QR Code online
 */
function qrcodeValueToUrl (value: string): string {
  const qrcodeImageUrl = [
    'https://wechaty.github.io/qrcode/',
    encodeURIComponent(value),
  ].join('')

  return qrcodeImageUrl
}
