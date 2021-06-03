const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const fs = require('fs')
const { banner, start, success } = require('./lib/functions')
const { color } = require('./lib/color')
const moment = require('moment-timezone')

require('./index.js')
nocache('./index.js', module => console.log(`${module} Update!`))

const starts = async (lolikiller = new WAConnection()) => {
    lolikiller.logger.level = 'warn'
    console.log(banner.string)
    lolikiller.on('qr', () => {
        console.log(color('[   ','white'), color('!','red'), color('   ]','white'), color(' Scan om code QR nya!!!'))
    })

    fs.existsSync('./lolikillers.json') && lolikiller.loadAuthInfo('./lolikillers.json')
    lolikiller.on('connecting', () => {
        const time_connecting = moment.tz('Asia/Jakarta').format('HH:mm:ss')
        console.log(color(time_connecting, "yellow"), color("[  STATUS  ]", "red"), color("Connecting?", "cyan"))
    })
    lolikiller.on('open', () => {
        const time_connect = moment.tz('Asia/Jakarta').format('HH:mm:ss')
        console.log(color(time_connect, "yellow"), color("[  STATUS  ]", "green"), color("Connected!", "cyan"))
    })
    await lolikiller.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./lolikillers.json', JSON.stringify(lolikiller.base64EncodedAuthInfo(), null, '\t'))

    lolikiller.on('chat-update', async (message) => {
        require('./index.js')(lolikiller, message)
    })
}

function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'is now being watched for changes')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

starts()
