require('rootpath')()
const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange,
} = require('@adiwajshing/baileys');
const fs = require('fs');
const banner = require('lib/banner.js');
const { Twisters } = require('twisters');
const chalk = require('chalk');

const twister = new Twisters();

const starts = async (loli = new WAConnection()) => {
    loli.logger.level = 'warn'
    loli.version = [2, 2140, 12]
    loli.browserDescription = ['Baileys', 'Chrome', '3.0']
    console.log(banner.string)
    loli.on('qr', () => {
        console.log('Scan qrnya bang!')
    })
    
    fs.existsSync('session.json') && loli.loadAuthInfo('session.json')
    loli.on('connecting', () => {
        setTimeout(() => {
            twister.put('a', {
                text: 'Loading authentication credentials'
            })
        }, 1000)
    })
    
    loli.on('open', () => {
        setTimeout(() => {
            twister.put('a', {
                active: false,
                text: `${chalk.yellow('✓')} ${chalk.green('Validated connection successfully')}`
            });
            console.log(chalk.green('['),chalk.cyan('Dev'), chalk.green(']'),chalk.yellow('© Loli Killers'))
        }, 2000);
    })
    
    loli.on('ws-close', () => {
        console.log(chalk.green('Sucess reconnect ✓'))
    })
    
    loli.on('close', async ({ reason, isReconnecting}) => {
        setTimeout(() => {
            twister.put('a', {
                text: 'Connection lost, reason : ' + reason
            })
        }, 1000)
        setTimeout(() => {
            twister.put('a', {
                text: 'Trying to reconnect? : ' + isReconnecting
            })
        }, 2000)
        if (!isReconnecting) {
            setTimeout(() => {
                twister.put('a', {
                    text: `${chalk.red('×')} ${chalk.red('Connect To Phone Rejected and Shutting Down!')}`
                })
            }, 3000)
        }
    })
    
    await loli.connect({timeoutMs: 30*1000})
    fs.writeFileSync('session.json', JSON.stringify(loli.base64EncodedAuthInfo(), null, '\t'))
    
    loli.on('chat-update', async (message) => {
        require('main.js')(loli, message)
    })
}

starts()