// Yaelah om mau ngapain

// SPESIAL THX TO
// ITSMEIKY
// AraAra [Team]
// NAYLA
// RYNZ

// INGET BRO JANGAN HAPUS TQTONYA!!
// BY ARIASW
const {
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal") 
const moment = require("moment-timezone") 
const fs = require("fs") 
const crypto = require('crypto')
const util = require('util')
const imageToBase64 = require('image-to-base64')
const axios = require('axios')
const { color, bgcolor } = require('./lib/color')
const { bahasa } = require('./lib/bahasa')
const { negara } = require('./lib/kodenegara')
const { donasi } = require('./lib/donasi')
const { developer } = require('./lib/developer')
const { randompict } = require('./lib/randompict')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const fontPath = ('./lib/Zahraaa.ttf')
const path = require('path')
const { exec, spawn } = require("child_process")
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const tiktod = require('tiktok-scraper')
const brainly = require('brainly-scraper')
const ffmpeg = require('fluent-ffmpeg')
const cd = 4.32e+7
const { removeBackgroundFromImageFile } = require('remove.bg')
const { ind } = require('./bahasa')

/********** MENU SETTING **********/
const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n' 
            + 'FN:Ari\n'
            + 'ORG: Ara;\n' 
            + 'TEL;type=CELL;type=VOICE;waid=6283803728334:+62 838-0372-8334\n' 
            + 'END:VCARD'
prefix = '.' 
blocked = []   
limitawal = 25
memberlimit = 1
cr = '*Ara*' 
fakeimage = fs.readFileSync(`./src/logo.jpg`)
replitx = '*Bacot Kontol*'
ari = '*SABAR SAYANG*'

/******** OWNER NUMBER**********/
const ownerNumber = ["6283803728334@s.whatsapp.net"]   
const pacarNumber = ["6285852335038@s.whatsapp.net"]  
/************************************/

       
/*********** LOAD FILE ***********/
const _leveling = JSON.parse(fs.readFileSync('./database/kelompok/leveling.json'))
const antilink = JSON.parse(fs.readFileSync('./database/kelompok/antilink.json'))
const _level = JSON.parse(fs.readFileSync('./database/pengguna/level.json'))
const _registered = JSON.parse(fs.readFileSync('./database/bot/pengguna.json'))
const welkom = JSON.parse(fs.readFileSync('./database/bot/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/bot/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./database/bot/simi.json'))
const event = JSON.parse(fs.readFileSync('./database/bot/event.json'))
const _limit = JSON.parse(fs.readFileSync('./database/pengguna/limit.json'))
const uang = JSON.parse(fs.readFileSync('./database/pengguna/uang.json'))
const ban = JSON.parse(fs.readFileSync('./database/pengguna/banned.json'))
const prem = JSON.parse(fs.readFileSync('./database/pengguna/premium.json'))
const adm = JSON.parse(fs.readFileSync('./database/pengguna/admin.json'))
const bad = JSON.parse(fs.readFileSync('./database/kelompok/bad.json'))
const badword = JSON.parse(fs.readFileSync('./database/kelompok/badword.json'))
/*********** END LOAD ***********/

/********** FUNCTION ***************/
const getLevelingXp = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }

        const addLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/pengguna/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/pengguna/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (sender) => {
            const obj = {id: sender, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/pengguna/level.json', JSON.stringify(_level))
        }
             
         const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }

        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/bot/pengguna.json', JSON.stringify(_registered))
        }

        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
        
        const addATM = (sender) => {
        	const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./database/pengguna/uang.json', JSON.stringify(uang))
        }
        
        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/pengguna/uang.json', JSON.stringify(uang))
            }
        }
        
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
        
        const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/pengguna/limit.json', JSON.stringify(_limit))
            }
        }
        	
        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/pengguna/uang.json', JSON.stringify(uang))
            }
        }
        
         const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/pengguna/limit.json', JSON.stringify(_limit))
            }
        }
             
        
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
/********** FUNCTION ***************/

const ara = new WAConnection()
   ara.on('qr', qr => {
   qrcode.generate(qr, { small: true })
   console.log(color('[','white'),color('∆','red'),color(']','white'),color('QR code is ready, Scan now..','white'),color('Ojan','red'),color('X','lime'),color('MikuBot','red'))
})

ara.on('credentials-updated', () => {
	const authInfo = ara.base64EncodedAuthInfo()
   console.log(`credentials updated!`)
   fs.writeFileSync('./session.json', JSON.stringify(authInfo, null, '\t'))
})
fs.existsSync('./session.json') && ara.loadAuthInfo('./session.json')
ara.connect();


ara.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await ara.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await ara.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `*Hallo* @${num.split('@')[0]}\nSelamat datang di group *${mdata.subject}*\nJangan rese ya bor\nJangan lupa intro @${num.split('@')[0]} 🗣`
				let buff = await getBuffer(ppimg)
				ara.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
				} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await ara.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `*Satu beban telah hilang* \n@${num.split('@')[0]}\n*Semoga jasadmu baik baik saja dan di kenang orang yg berada disini🚮*`
				let buff = await getBuffer(ppimg)
				ara.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
	ara.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	ara.on('message-new', async (raa) => {
		try {
			if (!raa.message) return
			if (raa.key && raa.key.remoteJid == 'status@broadcast') return
			if (raa.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(raa.message)
			const from = raa.key.remoteJid
			const type = Object.keys(raa.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
			const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
			body = (type === 'conversation' && raa.message.conversation.startsWith(prefix)) ? raa.message.conversation : (type == 'imageMessage') && raa.message.imageMessage.caption.startsWith(prefix) ? raa.message.imageMessage.caption : (type == 'videoMessage') && raa.message.videoMessage.caption.startsWith(prefix) ? raa.message.videoMessage.caption : (type == 'extendedTextMessage') && raa.message.extendedTextMessage.text.startsWith(prefix) ? raa.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? raa.message.conversation : (type === 'extendedTextMessage') ? raa.message.extendedTextMessage.text : ''
			var pes = (type === 'conversation' && raa.message.conversation) ? raa.message.conversation : (type == 'imageMessage') && raa.message.imageMessage.caption ? raa.message.imageMessage.caption : (type == 'videoMessage') && raa.message.videoMessage.caption ? raa.message.videoMessage.caption : (type == 'extendedTextMessage') && raa.message.extendedTextMessage.text ? raa.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			const tescuk = ["0@s.whatsapp.net"]
			const isGroup = from.endsWith('@g.us')
			const q = args.join(' ')
			const botNumber = ara.user.jid
			const sender = isGroup ? raa.participant : raa.key.remoteJid
			pushname = ara.contacts[sender] != undefined ? ara.contacts[sender].vname || ara.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await ara.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
            
            /************** SCURITY FEATURE ************/
            const isEventon = isGroup ? event.includes(from) : false
            const isBadWord = isGroup ? badword.includes(from) : false
            const isRegistered = checkRegisteredUser(sender)
            const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
            const isLevelingOn = isGroup ? _leveling.includes(from) : false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isAntilink = isGroup ? antilink.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isPacar = pacarNumber.includes(sender)
			const isBanned = ban.includes(sender)
			const isPremium= prem.includes(sender)
			const isAdmin = adm.includes(sender)
			const isImage = type === 'imageMessage'
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				ara.sendMessage(from, teks, text, {quoted:raa})
			}
			const sendMess = (hehe, teks) => {
				ara.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? ara.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : ara.sendMessage(from, teks.trim(), extendedText, {quoted: raa, contextInfo: {"mentionedJid": memberr}})
			}
			const sendImage = (teks) => {
		    ara.sendMessage(from, teks, image, {quoted:raa})
		    }
		    const costum = (pesan, tipe, target, target2) => {
			ara.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
		    const sendPtt = (teks) => {
		    ara.sendMessage(from, audio, mp3, {quoted:raa})
		    }
	        /*****************END SCURITY FEATURE ********/
			
        const levelRole = getLevelingLevel(sender)
        var role = 'Newbie ㋡'
        if (levelRole <= 2) {
            role = 'Newbie ㋡'
        } else if (levelRole <= 4) {
            role = 'Warrior III'
        } else if (levelRole <= 6) {
            role = 'Warrior II'
        } else if (levelRole <= 8) {
            role = 'Warrior I'
        } else if (levelRole <= 10) {
            role = 'Elite III'
        } else if (levelRole <= 12) {
            role = 'Elite II'
        } else if (levelRole <= 14) {
            role = 'Elite I'
        } else if (levelRole <= 16) {
            role = 'Master IV'
        } else if (levelRole <= 18) {
            role = 'Master III'
        } else if (levelRole <= 20) {
            role = 'Master II'
        } else if (levelRole <= 22) {
            role = 'Master I'
        } else if (levelRole <= 24) {
            role = 'Grand Master V'
        } else if (levelRole <= 26) {
            role = 'Grand Master IV'
        } else if (levelRole <= 28) {
            role = 'Grand Master III'
        } else if (levelRole <= 30) {
            role = 'Grand Master II'
        } else if (levelRole <= 32) {
            role = 'Grand Master I'
        } else if (levelRole <= 34) {
            role = 'Epic V'
        } else if (levelRole <= 36) {
            role = 'Epic IV'
        } else if (levelRole <= 38) {
            role = 'Epic III'
        } else if (levelRole <= 40) {
            role = 'Epic II'
        } else if (levelRole <= 42) {
            role = 'Epic 1'
        } else if (levelRole <= 44) {
            role = 'Legends V'
        } else if (levelRole <= 46) {
            role = 'L3gends IV'
        } else if (levelRole <= 48) {
            role = 'Legends III'
        } else if (levelRole <= 50) {
            role = 'Legends II'
        } else if (levelRole <= 52) {
            role = 'Legends I'
        } else if (levelRole <= 54) {
            role = 'Mythic X'
        } else if (levelRole <= 56) {
            role = 'Mythic IX'
        } else if (levelRole <= 58) {
            role = 'Mythic VIII'
        } else if (levelRole <= 60) {
            role = 'Mythic VII'
        } else if (levelRole <= 62) {
            role = 'Mythic VI'
        } else if (levelRole <= 64) {
            role = 'Mythic V'
        } else if (levelRole <= 66) {
            role = 'Mythic IV'
        } else if (levelRole <= 68) {
            role = 'Mythic III'
        } else if (levelRole <= 70) {
            role = 'Mythic II'
        } else if (levelRole <= 72) {
            role = 'Mythic I'
        } else if (levelRole <= 74) {
            role = 'Glorious Mythic V'
        } else if (levelRole <= 76) {
            role = 'Glorious Mythic IV'
        } else if (levelRole <= 78) {
            role = 'Glorious Mythic III'
        } else if (levelRole <= 80) {
            role = 'Glorious Mythic II'
        } else if (levelRole <= 82) {
            role = 'Glorious Mythic I'
        } else if (levelRole <= 84) {
            role = 'Mythical Glory V'
        } else if (levelRole <= 86) {
            role = 'Mythical Glory IV'
        } else if (levelRole <= 88) {
            role = 'Mythical Glory III'
        } else if (levelRole <= 90) {
            role = 'Mythical Glory II'
        } else if (levelRole <= 92) {
            role = 'Mythical Glory I'
        } else if (levelRole <= 94) {
            role = 'Tough Platinum V'
        } else if (levelRole <= 96) {
            role = 'Tough Platinum IV'
        } else if (levelRole <= 98) {
            role = 'Tough Platinum III'
        } else if (levelRole <= 100) {
            role = 'Tough Platinum II'
        } else if (levelRole <= 102) {
            role = 'Tough Platinum I'
        } else if (levelRole <= 104) {
            role = 'Diamond Star V'
        } else if (levelRole <= 106) {
            role = 'Diamond Star IV'
        } else if (levelRole <= 108) {
            role = 'Diamond Star III'
        } else if (levelRole <= 110) {
            role = 'Diamond Star II'
        } else if (levelRole <= 112) {
            role = 'Diamond Star I'
        } else if (levelRole <= 114) {
            role = 'Glory Crown V'
        } else if (levelRole <= 116) {
            role = 'Glory Crown IV'
        } else if (levelRole <= 118) {
            role = 'Glory Crown III'
        } else if (levelRole <= 120) {
            role = 'Glory Crown II'
        } else if (levelRole <= 122) {
            role = 'Glory Crown I'
        } else if (levelRole <= 124) {
            role = 'Super Ace V'
        } else if (levelRole <= 126) {
            role = 'Super Ace IV'
        } else if (levelRole <= 128) {
            role = 'Super Ace III'
        } else if (levelRole <= 130) {
            role = 'Super Ace II'
        } else if (levelRole <= 132) {
            role = 'Super Ace I'
        } else if (levelRole <= 134) {
            role = 'Conqueror V'
        } else if (levelRole <= 136) {
            role = 'Conqueror IV'
        } else if (levelRole <= 138) {
            role = 'Conqueror III'
        } else if (levelRole <= 140) {
            role = 'Conqueror II'
        } else if (levelRole <= 142) {
            role = 'Conqueror I'
        } else if (levelRole <= 144) {
            role = 'Emerald V'
        } else if (levelRole <= 146) {
            role = 'Emerald IV'
        } else if (levelRole <= 148) {
            role = 'Emerald III'
        } else if (levelRole <= 152) {
            role = 'Emerald II 忍'
        } else if (levelRole <= 154) {
            role = 'Emerald I 忍'
        } else if (levelRole <= 156) {
            role = 'Challangers 忍'
        } else if (levelRole <= 158) {
            role = 'Challangers 忍'
        } else if (levelRole <= 160) {
            role = 'Challangers 忍'
        } else if (levelRole <= 162) {
            role = 'Challangers 忍'
        } else if (levelRole <= 164) {
            role = 'Challangers 忍'
        } else if (levelRole <= 166) {
            role = 'Challangers 忍'
        } else if (levelRole <= 168) {
            role = 'Challangers 忍'
        } else if (levelRole <= 170) {
            role = 'Challangers 忍'
        } else if (levelRole <= 172) {
            role = 'Challangers 忍'
        } else if (levelRole <= 174) {
            role = 'Challangers 忍'
        } else if (levelRole <= 176) {
            role = 'Challangers 忍'
        } else if (levelRole <= 178) {
            role = 'Challangers 忍'
        } else if (levelRole <= 180) {
            role = 'Challangers 忍'
        } else if (levelRole <= 182) {
            role = 'Challangers 忍'
        } else if (levelRole <= 184) {
            role = 'Challangers 忍'
        } else if (levelRole <= 186) {
            role = 'Challangers 忍'
        } else if (levelRole <= 188) {
            role = 'Challangers 忍'
        } else if (levelRole <= 190) {
            role = 'Challangers 忍'
        } else if (levelRole <= 192) {
            role = 'Challangers 忍'
        } else if (levelRole <= 194) {
            role = 'Challangers 忍'
        } else if (levelRole <= 196) {
            role = 'Challangers 忍'
        } else if (levelRole <= 198) {
            role = 'Challangers 忍'
        } else if (levelRole <= 200) {
            role = 'Challangers 忍'
        } else if (levelRole <= 210) {
            role = 'Challangers 忍'
        } else if (levelRole <= 220) {
            role = 'Challangers 忍'
        } else if (levelRole <= 230) {
            role = 'Challangers 忍'
        } else if (levelRole <= 240) {
            role = 'Challangers 忍'
        } else if (levelRole <= 250) {
            role = 'Challangers 忍'
        } else if (levelRole <= 260) {
            role = 'Challangers 忍'
        } else if (levelRole <= 270) {
            role = 'Challangers 忍'
        } else if (levelRole <= 280) {
            role = 'Challangers 忍'
        } else if (levelRole <= 290) {
            role = 'Challangers 忍'
        } else if (levelRole <= 300) {
            role = 'Challangers 忍'
        } else if (levelRole <= 310) {
            role = 'Challangers 忍'
        } else if (levelRole <= 320) {
            role = 'Challangers 忍'
        } else if (levelRole <= 330) {
            role = 'Challangers 忍'
        } else if (levelRole <= 340) {
            role = 'Challangers 忍'
        } else if (levelRole <= 350) {
            role = 'Challangers 忍'
        } else if (levelRole <= 360) {
            role = 'Challangers 忍'
        } else if (levelRole <= 370) {
            role = 'Challangers 忍'
        } else if (levelRole <= 380) {
            role = 'Challangers 忍'
        } else if (levelRole <= 390) {
            role = 'Challangers 忍'
        } else if (levelRole <= 400) {
            role = 'Challangers 忍'
        } else if (levelRole <= 410) {
            role = 'Challangers 忍'
        } else if (levelRole <= 420) {
            role = 'Challangers 忍'
        } else if (levelRole <= 430) {
            role = 'Challangers 忍'
        } else if (levelRole <= 440) {
            role = 'Challangers 忍'
        } else if (levelRole <= 450) {
            role = 'Challangers 忍'
        } else if (levelRole <= 460) {
            role = 'Challangers 忍'
        } else if (levelRole <= 470) {
            role = 'Challangers 忍'
        } else if (levelRole <= 480) {
            role = 'Challangers 忍'
        } else if (levelRole <= 490) {
            role = 'Challangers 忍'
        } else if (levelRole <= 500) {
            role = 'Challangers 忍'
        } else if (levelRole <= 600) {
            role = 'Challangers 忍'
        } else if (levelRole <= 700) {
            role = 'Challangers 忍'
        } else if (levelRole <= 800) {
            role = 'Challangers 忍'
        } else if (levelRole <= 900) {
            role = 'Challangers 忍'
        } else if (levelRole <= 1000) {
            role = 'Challangers 忍'
        } else if (levelRole <= 2000) {
            role = 'Challangers 忍'
        } else if (levelRole <= 3000) {
            role = 'Challangers 忍'
        } else if (levelRole <= 4000) {
            role = 'Challangers 忍'
        } else if (levelRole <= 5000) {
            role = 'Challangers 忍'
        } else if (levelRole <= 6000) {
            role = 'Challangers 忍'
        } else if (levelRole <= 7000) {
            role = 'Challangers 忍'
        } else if (levelRole <= 8000) {
            role = 'Challangers 忍'
        } else if (levelRole <= 9000) {
            role = 'Challangers 忍'
        } else if (levelRole <= 10000) {
            role = 'King 忍'
           
           var prema = 'Free'
			if (!isAdmin) {
				prema = 'Adminban'
			}
			if (!isPremium) {
				prema = 'Premium'
			} 
			if (!isOwner) {
				prema = 'Owner'
			}
	}
			if (isGroup && isBadWord) {
            if (bad.includes(messagesC)) {
                if (!isGroupAdmins) {
                    return reply("JAGA UCAPAN TOT!!")
                        .then(() => ara.groupRemove(from, sender))
                        .then(() => {
                            ara.sendMessage(from, `*「 ANTI BADWORD 」*\nara akan kick kamu karena berkata kasar!`, text ,{quoted: raa})
                        }).catch(() => ara.sendMessage(from, `Untung ara bukan admin, kalo admin udah ara kick!`, text , {quoted : raa}))
                } else {
                    return reply( "Tolong Jaga Ucapan Min")
                }
            }
        }
			
            if (isGroup && isRegistered && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 100
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    bayarLimit(sender, 3)
                    await reply(ind.levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role))
                }
            } catch (err) {
                console.error(err)
            }
        }
          const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            let limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return ara.sendMessage(from,`Limit request anda sudah habis\n\n_Note : limit bisa di dapatkan dengan cara ${prefix}buylimit dan dengan naik level_`, text,{ quoted: raa})
                            ara.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : raa})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 0 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/pengguna/limit.json', JSON.stringify(_limit))
                        ara.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : raa})
                    }
				}
				
           const isLimit = (sender) =>{ 
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitawal ) {
              	  position = true
                    ara.sendMessage(from, ind.limitend(pushname), text, {quoted: raa})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 0 }
                _limit.push(obj)
                fs.writeFileSync('./database/pengguna/limit.json',JSON.stringify(_limit))
           return false
       }
     }

        
            if (isGroup) {
				try {
					const getmemex = groupMembers.length
					    if (getmemex <= memberlimit) {
					    }
		       } catch (err) { console.error(err)  }
        }
      
            if (isRegistered ) {
            const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender)
                const uangsaku = Math.floor(Math.random() * 10) + 90
                addKoinUser(sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
        }
        if (messagesC.includes("://chat.whatsapp.com/")){
		if (!isGroup) return
		if (!isAntilink) return
		if (isGroupAdmins) return reply('Admin Grup Mah Bebass!!')
		ara.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`Link Group Terdeteksi! ${sender.split("@")[0]} yahahaha ngemis member awkwkwwk`)
		setTimeout( () => {
			ara.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 1000)
		setTimeout( () => {
			ara.updatePresence(from, Presence.composing)
			reply("Bissmilah headshot!!")
		}, 0)
	}

             
			colors = ['red','white','black','blue','yellow','green']
			
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			
			switch(command) {
		case 'daftar':
                	if (isRegistered) return  reply(ind.rediregis())
                	if (!q.includes('|')) return  reply(ind.wrongf())
                	const namaUser = q.substring(0, q.indexOf('|') - 0)
                	const umurUser = q.substring(q.lastIndexOf('|') + 1)
                	const serialUser = createSerial(20)
                	if(isNaN(umurUser)) return await reply('Umur harus berupa angka!!')
                	if (namaUser.length >= 30) return reply(`why is your name so long it's a name or a train`)
                	if (umurUser > 40) return reply(`your age is too  old maximum 40 years`)
                	if (umurUser < 14) return reply(`your age is too young minimum 14 years`)
                	try {
					ppimg = await ara.getProfilePicture(`${sender.split('@')[0]}@c.us`)
					} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
                	veri = sender
                	if (isGroup) {
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    await ara.sendMessage(from, ppimg, image, {quoted: raa, caption: ind.registered(namaUser, umurUser, serialUser, time, sender)})
                    addATM(sender)
                    addLevelingId(sender)
                    checkLimit(sender)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
                	} else {
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    await raa.sendMessage(from, ppimg, image, {quoted: raa, caption: ind.registered(namaUser, umurUser, serialUser, time, sender)})
                    addATM(sender)
                    addLevelingId(sender)
                    checkLimit(sender)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
                	}
				    break
		case 'setprefix':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
					prefix = args[0]
					reply(`*Prefix berhasil di ubah menjadi* : ${prefix}`)
					break 
        case 'help': 
		case 'menu':       
                    if (!isRegistered) return reply( ind.noregis())
				    costum('[❗] LOADING!', text, tescuk, ari)
				    if (isBanned) return reply('Kamu terbanned!')
					const reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
					const uangku = checkATMuser(sender)
                    ppimg = fs.readFileSync(`./src/logo.jpg`)
                    teks = `
┏━━► *「 YOUR INFO 」* 
┃
┣► Prefix : 「 ${prefix} 」
┣► Nama : ${pushname}
┣► Role : *${role}*
┣► Level : ${getLevelingLevel(sender)}
┗━━━━━━━━━━━►
┏━━► *「 INFO MENU 」* 
┣► *${prefix}info*
┣► *${prefix}snk*
┣► *${prefix}request*
┣► *${prefix}blocklist*
┣► *${prefix}owner*
┣► *${prefix}ping*
┣► *${prefix}buypremium*
┣► *${prefix}hargaprem*
┣► *${prefix}linkgc1*
┣► *${prefix}sticker*
┗━━━━━━━━━━━►
┏━━► *「 APK MENU 」* 
┣► *${prefix}apkpure*
┗━━━━━━━━━━━►
┏━━► *「 GAME MENU 」* 
┣► *${prefix}tebakgambar*
┗━━━━━━━━━━━►
┏━━► *「 MEDSOS MENU 」* 
┣► *${prefix}github*
┣► *${prefix}twitter*
┣► *${prefix}igstalk*
┗━━━━━━━━━━━►
┏━━► *「 GROUP MENU 」* 
┣► *${prefix}welcome [1/0]*
┣► *${prefix}nsfw [1/0]*
┣► *${prefix}leveling [1/0]*
┣► *${prefix}nobadword [1/0]*
┣► *${prefix}simih [1/0]*
┣► *${prefix}promote [@tag]*
┣► *${prefix}demote [@tag]*
┣► *${prefix}add [62]*
┣► *${prefix}kick [@tag]*
┣► *${prefix}group [open/close]*
┣► *${prefix}antilinkgc [1/0]*
┣► *${prefix}tagall*
┣► *${prefix}hidetag*
┣► *${prefix}setname*
┣► *${prefix}setdesc*
┣► *${prefix}setpp*
┣► *${prefix}grouplist*
┣► *${prefix}listadmin*
┣► *${prefix}premiumlist*
┣► *${prefix}banlist*
┣► *${prefix}blocklist*
┣► *${prefix}linkgc*
┣► *${prefix}mining*
┣► *${prefix}maling*
┣► *${prefix}nguli*
┣► *${prefix}sedekah*
┗━━━━━━━━━━━►
┏━━► *「 OWNER MENU 」* 
┣► *${prefix}setprefix*
┣► *${prefix}setreply*
┣► *${prefix}setlimit*
┣► *${prefix}addlimit*
┣► *${prefix}giftlimit*
┣► *${prefix}premium*
┣► *${prefix}unpremium*
┣► *${prefix}admin*
┣► *${prefix}unadmin*
┣► *${prefix}ban*
┣► *${prefix}unban*
┣► *${prefix}block*
┣► *${prefix}unblock*
┣► *${prefix}leave*
┣► *${prefix}menu*
┣► *${prefix}bc*
┣► *${prefix}bcc*
┣► *${prefix}bcgc*
┣► *${prefix}clearall*
┗━━━━━━━━━━━►
┏━━► *「 INFORMATION 」* 
┣► *${prefix}covidindo*
┣► *${prefix}infonomor*
┣► *${prefix}tribunews*
┣► *${prefix}foxnews*
┣► *${prefix}searchfilm*
┗━━━━━━━━━━━►

┏━━► *「 THANKS TO 」* 
┣► *ARIASW*
┣► *ARIASW*
┣► *NAYLA*
┣► *RYNZ*
┣► *MEM ARA*
┗━━━━━━━━━━━►

📄NOTE : 
*Jangan membanding bandingkan dengan Bot lain!!.*

`
                    ara.sendMessage(from, ppimg, image, { quoted: raa, caption: teks })
                        break
  ////////////////////
 // CASE INFO MENU //
////////////////////

        case 'info':
                if (!isRegistered) return reply( ind.noregis())
            if (isBanned) return reply('```Lu kebanned kontol`')
				    costum('[❗] LOADING!', text, tescuk, ari)
                    me = ara.user
                    uptime = process.uptime()
                    teks = `◪ BOT INFO

► Name : ${ara.user.name}
► Nomor Bot : @${me.jid.split('@')[0]}
► Owner : Ari
► Prefix : [ ${prefix} ]
► Total Block Contact : ${blocked.length}
► The bot is active on :
►  ${kyun(uptime)}
► Total User : ${_registered.length} User
► Total Chat : 1072
► Browser : ${ara.browserDescription[1]}
► Server : ${ara.browserDescription[0]}
► Version : ${ara.browserDescription[2]}
► Speed : ${process.uptime()}
► Device : ${ara.user.phone.device_manufacturer}
► Versi Whatsapp : ${ara.user.phone.wa_version}
 
   ║▌│█║▌│ █║▌│█│║▌║
   ║▌│█║▌│ █║▌│█│║▌║

`
                    buffer = await getBuffer(me.imgUrl)
                    ara.sendMessage(from, buffer, image, {
                    caption: teks, contextInfo: {
                    mentionedJid: [me.jid]}})
                    break
		case 'snk':
                    if (!isRegistered) return reply( ind.noregis())
				    if (isBanned) return reply('Kamu terbanned!')
				    costum('[❗] LOADING!', text, tescuk, ari)
					me = ara.user
					uptime = process.uptime()
					teks = `_*SYARAT & KETENTUAN ARA*_\n\n1. Teks dan nama pengguna WhatsApp anda kami simpan di dalam server selama bot aktif.\n2. Data anda akan di hapus ketika bot offline.\n3. Kami tidak menyimpan gambar, video, file, audio, dan dokumen yang anda kirim.\n4. Kami tidak pernah meminta anda untuk memberikan informasi pribadi.\n5. Jika menemukan Bug/Error silahkan langsung lapor ke Owner bot.\n6. Cukup perintah 1x jika bot tidak merespon harap ulangi kembali, Jika di ulangi kembali tidak merespon, Bot tidak aktif\n7. Dilarang spam, Share virus virtex, Telpon, Video call, Kami akan blockir anda.\n8. Apapun yang anda perintah pada bot ini, *KAMI TIDAK BERTANGGUNG JAWAB!*\n\nTERIMA KASIH !~`
					buffer = await getBuffer(me.imgUrl)
					ara.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break									
		case 'request':
                    if (!isRegistered) return reply( ind.noregis())
				    if (isBanned) return reply('Kamu sudah terbenned!')
					const cfrr = body.slice(8)
					if (cfrr.length > 300) return ara.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: raa})
					var nomor = raa.participant
					const ress = `*[REQUEST VITUR]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${cfrr}`
					var options = {
					text: ress,
           			contextInfo: {mentionedJid: [nomor]},
                   	}
					ara.sendMessage('6283803728334@s.whatsapp.net', options, text, {quoted: raa})
					reply('REQUEST ANDA TELAH SAMPAI KE OWNER ARA, Requests palsu atau main² tidak akan ditanggapi.')
					break
		case 'blocklist': 
					teks = '*Daftar user block ara* :\n'
					for (let block of blocked) {
				    teks += `*☆➤* @${block.split('@')[0]}\n`
					}
					teks += `*Total* : ${blocked.length}`
					ara.sendMessage(from, teks.trim(), extendedText, {quoted: raa, contextInfo: {"mentionedJid": blocked}})
					break
		case 'ping':
					ara.sendMessage(from, '*Pongg!!!*',MessageType.text, { quoted: raa} )
					break
		case 'buypremium':
                    if (!isRegistered) return reply( ind.noregis())
				    if (isBanned) return reply('Kamu sudah terbenned!')
				    ara.sendMessage(from, 'Ingin membeli premium?\nHarap hubungi kami : wa.me/6283803728334',MessageType.text, { quoted: raa} )
					break
		case 'hargaprem':
		case 'hargapremium':
                    if (!isRegistered) return reply( ind.noregis())
				    if (isBanned) return reply('Kamu sudah terbenned!')
					ara.sendMessage(from, 'Level 100 = Free 3 day (premium)\n10k = 30day (premium)',MessageType.text, { quoted: raa} )
					break
		case 'linkgc1':
					ara.sendMessage(from, 'https://chat.whatsapp.com/Jn0cIs3ZqfH1zvx3cU7ftz',MessageType.text, { quoted: raa} )
					break
		case 'linkgc2':
					ara.sendMessage(from, 'https://chat.whatsapp.com/Dk5pw9Co3nb80xaXJ5AtcQ',MessageType.text, { quoted: raa} )
					break

  ///////////////////
 // CASE APK MENU //
///////////////////

		case 'apkpure':
                    if (!isRegistered) return reply( ind.noregis())
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (isBanned) return reply('Kamu sudah terbenned!')
				    costum('[❗] LOADING!', text, tescuk, ari)
				    data = await fetchJson(`https://api.zeks.xyz/api/apkpure?q=${body.slice(9)}&apikey=apivinz`, {method: 'get'})
				    teks = '[☆]=================[☆]\n'
				    for (let i of data.result) {
					teks += `➤ *NAMA APK* : ${i.title}\n➤ *LINK* : ${i.url}\n➤ *RATING* : ${i.rating}\n[☆]=================[☆]\n`
					}
				    reply(teks.trim())
				    await limitAdd(sender)
				    break

  ////////////////////
 // CASE GAME MENU //
////////////////////

        case 'tebakgambar':  //Case by nayla
                    if (!isRegistered) return reply( ind.noregis())
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    anu = await fetchJson(`https://videfikri.com/api/tebakgambar/`)
                    anu1 = await getBuffer(anu.result.soal_gbr)
                    anu2 = `► *JAWABAN* : ${anu.result.jawaban}`
                    setTimeout( () => {
                    ara.sendMessage(from, anu1, image,{caption: 'JAWAB KAK... WAKTU 60 DETIK', quoted: raa})
                    }, 1)
                    setTimeout( () => {
                    costum('50 DETIK LAGI', text)
                    }, 10000)                                                                                                                                   
                    setTimeout( () => {
                    costum('40 DETIK LAGI', text)
                    }, 20000)    
                    setTimeout( () => {
                    costum('30 DETIK LAGI', text)
                    }, 30000)    
                    setTimeout( () => {
                    costum('20 DETIK LAGI', text)
                    }, 40000)                                       
                    setTimeout( () => {
                    costum('10 DETIK LAGI', text)
                    }, 50000)                                                                                                                                                     
                    setTimeout( () => {
                    ara.sendMessage(from, anu2, text,{quoted: raa})                   
                    }, 60000)                                                                          
				    await limitAdd(sender)
                    break                                                                                                                                           

  /////////////////////
 // CASE MEDOS MENU //
/////////////////////

        case 'github':  //Case by nayla
                    if (!isRegistered) return reply( ind.noregis())
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (args.length < 1) return reply('MASUKKAN USERNAME') 
				    costum('[❗] LOADING!', text, tescuk, ari)
                    anu = await fetchJson(`https://videfikri.com/api/github/?username=${args[0]}`, {method: 'get'})
                    anu1 = await getBuffer(anu.result.profile_pic)                           
                    anu2 = `➤ *NAMA* : ${anu.result.username}\n`
                    anu2 += `➤ *ID* : ${anu.result.id}\n`
                    anu2 += `➤ *USER* : ${anu.result.fullname}\n`
                    anu2 += `➤ *COMPANY* : ${anu.result.company}\n`
                    anu2 += `➤ *BLOG* : ${anu.result.blog}\n`
                    anu2 += `➤ *LOCATION* : ${anu.result.location}\n`
                    anu2 += `➤ *EMAIL* : ${anu.result.email}\n`
                    anu2 += `➤ *HIRABLE* : ${anu.result.hireable}\n`
                    anu2 += `➤ *BIOGRAFI* : ${anu.result.biografi}\n`
                    anu2 += `➤ *PUBLIC1* : ${anu.result.public_repository}\n`
                    anu2 += `➤ *PUBLIC2* : ${anu.result.public_gists}\n`
                    anu2 += `➤ *FOLLOWERS* : ${anu.result.followers}\n`
                    anu2 += `➤ *FOLLOWING* : ${anu.result.following}\n`
                    anu2 += `➤ *JOIN* : ${anu.result.joined_on}\n`
                    anu2 += `➤ *UPDATE* : ${anu.result.last_updated}\n`
                    anu2 += `➤ *URL* : ${anu.result.profile_url}\n`
                    ara.sendMessage(from, anu1, image,{caption: anu2, quoted: raa})
				    await limitAdd(sender)
                    break
        case 'twitter':  //Case by nayla
                    if (!isRegistered) return reply( ind.noregis())
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (args.length < 1) return reply('MASUKKAN USERNAME') 
				    costum('[❗] LOADING!', text, tescuk, ari)
                    anu = await fetchJson(`https://videfikri.com/api/stalktwit/?username=${args[0]}`, {method: 'get'})
                    anu1 = await getBuffer(anu.result.profile)
                    anu2 = `➤ *NAMA* : ${anu.result.full_name}\n`
                    anu2 += `➤ *USER* : ${anu.result.username}\n`
                    anu2 += `➤ *FOLLOWERS* : ${anu.result.followers}\n`
                    anu2 += `➤ *FOLLOWING* : ${anu.result.following}\n`
                    anu2 += `➤ *TWEETS* : ${anu.result.tweets}\n`
                    anu2 += `➤ *PUBLIC* : ${anu.result.verified}\n`
                    anu2 += `➤ *LIST* : ${anu.result.listed_count}\n`
                    anu2 += `➤ *FAVOURIT* : ${anu.result.favourites}\n`
                    anu2 += `➤ *JOIN* : ${anu.result.joined_on}\n`
				    await limitAdd(sender)
				    await limitAdd(sender)
                    ara.sendMessage(from, anu1, image,{caption: anu2, quoted:raa})
                    break
		case 'igstalk':
		            if (args.length < 1) return reply('MASUKKAN USERNAME') 
		            F = body.slice(10)
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return reply(ind.limitend(pusname))
			        if (isBanned) return reply('Maaf kamu sudah terbenned!')
				    costum('[❗] LOADING!', text, tescuk, ari)
					asw = await fetchJson(`https://api.zeks.xyz/api/igstalk?username=${F}&apikey=apivinz`)
					buffer = await getBuffer(asw.profile_pic)
					hasil = `➤ *USERNAME* : ${asw.username}\n➤ *FULLNAME* : ${asw.fullname}\n➤ *FOLLOWERS* : ${asw.follower}\n➤ *FOLLOWING* : ${asw.following}\n➤ *VERIFIKASI* : ${asw.is_verified}\n➤ *BUSSINES* : ${asw.is_bussiness}\n➤ *PRIVATE* : ${asw.is_private}\n➤ *BIO* : ${asw.bio}\n➤ *SOURCE* :${asw.source}\n➤ *STATUS* : ${asw.status}`
					ara.sendMessage(from, buffer, image, {caption: hasil, quoted: raa})
					await limitAdd(sender)
					break

  //////////////////////
 // CASE INFORMATION //
//////////////////////

		case 'covidindo': 
                    if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (isBanned) return reply('Kamu sudah terbenned!')
				    costum('[❗] LOADING!', text, tescuk, ari)
					data = await fetchJson(`https://videfikri.com/api/covidindo/`)
					hasil = `➤ *NEGARA* : ${data.result.country}\n➤ *POSITIF* : ${data.result.positif}\n➤ *SEMBUH* : ${data.result.sembuh}\n➤ *MENINGGAL* : ${data.result.meninggal}\n➤ *DIRAWAT* : ${data.result.dalam_perawatan}`
					reply(hasil)
					await limitAdd(sender)
					break		
		case 'infonomor':
                    if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (isBanned) return reply('Kamu sudah terbenned!')
					if (args.length < 1) return reply(`Masukan Nomor\nContoh : ${prefix}infonomor 0812345678`)
				    costum('[❗] LOADING!', text, tescuk, ari)
					data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infonomor?no=${body.slice(11)}`)
					if (data.error) return reply(data.error)
					if (data.result) return reply(data.result)
					hasil = `➤ *INTERNATIONAL* : ${data.international}\n➤ *NOMOR* : ${data.nomor}\n➤ *OPERATOR* : ${data.op}`
					reply(hasil)
					await limitAdd(sender)
					break 
        case 'tribunews':
                    if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (isBanned) return reply('Kamu sudah terbenned!')
				    costum('[❗] LOADING!', text, tescuk, ari)
					ara.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/tribunews?apikey=apivinz`, {method: 'get'})
					teks = '[☆]=================[☆]\n'
					for (let i of data.result) {
					teks += `➤ *JUDUL* : ${i.title}\n➤ *TIME* : ${i.time}\n➤ *LINK* : ${i.url}\n➤ *KETERANGAN* : ${i.ket}\n[☆]=================[☆]\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
        case 'foxnews': 
                    if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (isBanned) return reply('Kamu sudah terbenned!')
				    costum('[❗] LOADING!', text, tescuk, ari)
					ara.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/foxnews?apikey=apivinz`, {method: 'get'})
					teks = '[☆]=================[☆]\n'
					for (let i of data.result) {
					teks += `➤ *JUDUL* : ${i.title}\n➤ *LINK* : ${i.url}\n➤ *COUNTRY* : ${i.country}\n➤ *CONTENT* : ${i.content}\n➤ *TIME* : ${i.time}\n[☆]=================[☆]\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
        case 'searchfilm':
                    if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (isBanned) return reply('Kamu sudah terbenned!')
				    costum('[❗] LOADING!', text, tescuk, ari)
                    pshh = `${body.slice(12)}`
                    anu = await fetchJson(`https://api.zeks.xyz/api/film/2?q=${pshh}&apikey=apivinz`, {method: 'get'})
                    puree = '[☆]======================[☆]\n'
                    for (let plyll of anu.result){
                    puree += `➤ *JUDUL* : ${plyll.title}\n➤ *LINK* ${plyll.url}\n[☆]=====================[☆]\n`
                    }
                    reply(puree.trim())
					await limitAdd(sender)
                    break

  /////////////////////
 // CASE GROUP MENU //
/////////////////////

		case 'welcome':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply(`Masukkan parameter!! \n${prefix}welcome 1 untuk mengaktifkan \n${prefix}welcome 0 untuk menonaktifkan`)
					if (Number(args[0]) === 1) {
					if (isWelkom) return reply('*Fitur welcome sudah aktif!!')
					welkom.push(from)
					fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
					reply('《 *SUCCSESS* 》 \nMengaktifkan fitur welcome di group ini')
					} else if (Number(args[0]) === 0) {
					welkom.splice(from, 1)
					fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
					reply('《 *SUCCSESS* 》 \nMenonaktifkan fitur welcome di group ini')
					} else {
					reply(ind.satukos())
					}
					break
		case 'nsfw':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply(`Masukkan parameter!! \n${prefix}nsfw 1 untuk mengaktifkan \n${prefix}nsfw 0 untuk menonaktifkan`)
					if (Number(args[0]) === 1) {
					if (isNsfw) return reply('*Fitur nsfw sudah aktif!!*')
					nsfw.push(from)
					fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
					reply('《 *SUCCSESS* 》 \nMengaktifkan mode nsfw di group ini ✔️')
					} else if (Number(args[0]) === 0) {
					nsfw.splice(from, 1)
					fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
					reply('《 *SUCCSESS* 》 \nMenonaktifkan mode nsfw di group ini ✔️')
					} else {
					reply(ind.satukos())
					}
					break
		case 'leveling':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply(`Masukkan parameter!! \n${prefix}leveling 1 untuk mengaktifkan \n${prefix}leveling 0 untuk menonaktifkan`)
					if (args[0] === '1') {
					if (isLevelingOn) return reply('*Fitur level sudah aktif!!*')
					reply('《 *SUCCSESS* 》 \nMenonaktifkan mode leveling di group ini ✔️')
					fs.writeFileSync('./database/kelompok/leveling.json', JSON.stringify(_leveling))
					reply(ind.lvlon())
					} else if (args[0] === '0') {
					_leveling.splice(from, 1)
					fs.writeFileSync('./database/kelompok/leveling.json', JSON.stringify(_leveling))
					reply('《 *SUCCSESS* 》 \nMenonaktifkan mode leveling di group ini ✔️')
					} else {
					reply(ind.satukos())
					}
					break
        case 'nobadword':  // Fix Bug By PojanGanz
                    if (!isGroup) return reply(ind.groupo())
                    if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply(`Masukkan parameter!! \n${prefix}nobadword 1 untuk mengaktifkan \n${prefix}nobadword 0 untuk menonaktifkan`)
                    if (args[0] === '1') {
                    if (isBadWord) return reply('*Fitur BadWord sudah aktif sebelum nya*')
                 	badword.push(from)
                 	fs.writeFileSync('./database/kelompok/badword.json', JSON.stringify(badword))
					reply('《 *SUCCSESS* 》 \nMenonaktifkan nobadword di group ini ✔️')
              	    } else if (args[0] === '0') {
                    badword.splice(from, 1)
                    fs.writeFileSync('./database/kelompok/badword.json', JSON.stringify(badword))
					reply('《 *SUCCSESS* 》 \nMenonaktifkan nobadword di group ini ✔️')
             	    } else {
                    reply(ind.satukos())
                	}
                    break
		case 'simih':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply(`Masukkan parameter!! \n${prefix}nobadword 1 untuk mengaktifkan \n${prefix}nobadword 0 untuk menonaktifkan`)
					if (Number(args[0]) === 1) {
					if (isSimi) return reply('*Fitur simi sudah aktif sebelum nya*')
					samih.push(from)
					fs.writeFileSync('./database/bot/simi.json', JSON.stringify(samih))
					reply('《 *SUCCSESS* 》 \nMenonaktifkan mode simih di group ini ✔️')
					} else if (Number(args[0]) === 0) {
					samih.splice(from, 1)
					fs.writeFileSync('./database/bot/simi.json', JSON.stringify(samih))
					reply('《 *SUCCSESS* 》 \nMenonaktifkan mode simih di group ini ✔️')
					} else {
					reply(ind.satukos())
					}
					break
        case 'promote':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (raa.message.extendedTextMessage === undefined || raa.message.extendedTextMessage === null) return reply('*Tag member yang ingin di jadikan admin group!*')
					mentioned = raa.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
					teks = ''
					for (let _ of mentioned) {
					teks += `*Selamat* 🥳 *Anda sekarang menjadi admin group* 🎉 :\n`
					teks += `@_.split('@')[0]`
					}
					mentions(teks, mentioned, true)
					ara.groupMakeAdmin(from, mentioned)
					} else {
					mentions(`*Selamat* 🥳 @${mentioned[0].split('@')[0]} *Anda menjadi admin group* 🎉`, mentioned, true)
					ara.groupMakeAdmin(from, mentioned)
					}
					break
        case 'demote':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (raa.message.extendedTextMessage === undefined || raa.message.extendedTextMessage === null) return reply('*Tag admin yang ingin di turunkan menjadi member group!*')
					mentioned = raa.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
					teks = ''
					for (let _ of mentioned) {
					teks += `*Perintah dikonfirmasi, menurunkan jadi member group* :\n`
					teks += `@_.split('@')[0]`
					}
					mentions(teks, mentioned, true)
					ara.groupDemoteAdmin(from, mentioned)
					} else {
					mentions(`*Perintah dikonfirmasi, menurunkan* @${mentioned[0].split('@')[0]} *jadi member group*`, mentioned, true)
					ara.groupDemoteAdmin(from, mentioned)
					}
					break
		case 'tagall':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
					teks += `*•➤* @${mem.jid.split('@')[0]}\n`
					members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
		case 'listadmin':
					if (!isGroup) return reply(ind.groupo())
					teks = `List admin in group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
					no += 1
					teks += `*➤* [${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
        case 'premiumlist':
				    ara.updatePresence(from, Presence.composing) 
                    if (!isRegistered) return reply( ind.noregis())    
				    teks = 'This is list of premium number :\n'
				    for (let premm of prem) {
					teks += `•➤ @${premm.split('@')[0]}\n`
					}
					teks += `Total : ${prem.length}`
				    ara.sendMessage(from, teks.trim(), extendedText, {quoted: raa, contextInfo: {"mentionedJid": prem}})
				    break
        case 'banlist':
				    ara.updatePresence(from, Presence.composing) 
                    if (!isRegistered) return reply( ind.noregis())    
				    teks = 'This is list of banned number :\n'
				    for (let benn of ban) {
					teks += `•➤ @${benn.split('@')[0]}\n`
					}
					teks += `Total : ${ban.length}`
				    ara.sendMessage(from, teks.trim(), extendedText, {quoted: raa, contextInfo: {"mentionedJid": ban}})
				    break
		case 'blocklist': 
					teks = '*This is list of blocked number* :\n'
					for (let block of blocked) {
					teks += `•➤ @${block.split('@')[0]}\n`
					}
					teks += `*Total* : ${blocked.length}`
					ara.sendMessage(from, teks.trim(), extendedText, {quoted: raa, contextInfo: {"mentionedJid": blocked}})
					break
        case 'linkgc':
                    if (!isGroup) return reply(mess.only.group)
                    if (!isGroupAdmins) return reply(mess.only.admin)
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    linkgc = await ara.groupInviteCode(from)
                    reply('https://chat.whatsapp.com/'+linkgc)
                    break
		case 'mining':
		case 'maling':
		case 'nguli':
		case 'sedekah':
                    if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				    if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (!isEventon) return reply(`Maaf ${pushname} event mining tidak di aktifkan oleh owner`)
					if (isOwner | isAdmin | isPremium) {
					const one = Math.ceil(Math.random() * 10000)
					addLevelingXp(sender, one)
					await reply(`Ara kasih kamu hadiah, ara akan berikan sebanyak *${one}Xp* untuk kamu`)
        		    }else{
					const mining = Math.ceil(Math.random() * 10000)
					addLevelingXp(sender, mining)
					await reply(`*Selamat* ${pushname} kamu mendapatkan *${mining}Xp* dari ara`)
					}
					await limitAdd(sender)
					break
        case 'hidetag':
                    if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					var value = body.slice(9)
					var group = await ara.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: raa
					}
					ara.sendMessage(from, options, text)
					await limitAdd(sender)
					break
		case 'grouplist':
                    if (!isRegistered) return reply( ind.noregis())
					ara.updatePresence(from, Presence.composing) 
					teks = `\`\`\`Ini adalah list group ara :\n\n\`\`\``
					no = 0
					for (let hehehe of groupId) {
					no += 1
					teks += `\`\`\`[${no.toString()}]\`\`\` @${hehehe.split('@')[0]}\n`
					}
					teks += `\n\`\`\`Total grup : ${groupId.length}\`\`\``
					ara.sendMessage(from, teks.trim(), extendedText, {quoted: raa})
					break
		case 'add':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply('Yang mau di add setan?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara kak')
					try {
					num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
					ara.groupAdd(from, [num])
					} catch (e) {
					console.log('Error :', e)
					reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
		case 'kick':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (raa.message.extendedTextMessage === undefined || raa.message.extendedTextMessage === null) return reply('*Tag target yang ingin ara kick*!')
					mentioned = raa.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
					teks = ''
					for (let _ of mentioned) {
					teks += `*Asik ara bisa kick, lu gua kick* !! :\n`
					teks += `@_.split('@')[0]`
					}
					mentions(teks, mentioned, true)
					ara.groupRemove(from, mentioned)
					} else {
					mentions(`*Asek jatah kick, otw kick* @${mentioned[0].split('@')[0]} !!`, mentioned, true)
					ara.groupRemove(from, mentioned)
					}
					break
       case 'setname':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					ara.groupUpdateSubject(from, `${body.slice(9)}`)
					ara.sendMessage(from, '*Succes*, Ganti Nama Grup', text, {quoted: raa})
					break
       case 'setdesc':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					ara.groupUpdateDescription(from, `${body.slice(9)}`)
					ara.sendMessage(from, '*Succes*, Ganti Deskripsi Grup', text, {quoted: raa})
					break
 		case 'setpp': 
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
                   	if (!isBotGroupAdmins) return reply(ind.badmin())
					media = await ara.downloadAndSaveMediaMessage(raa)
					await ara.updateProfilePicture (from, media)
					reply('*Succes* mengganti icon group')
					break				
		case 'grup':
		case 'group':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args[0] === 'open') {
					reply(`*SUCCES GROUP OPEN*`)
					ara.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'close') {
				    reply(`*SUCCES GROUP CLOSE*`)
				    ara.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break      
        case 'antilinkgrup':
        case 'antilinkgc':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())					
					if (args.length < 1) return reply(`Masukkan parameter!! \n${prefix}antilinkgc 1 untuk mengaktifkan \n${prefix}antilinkgc 0 untuk menonaktifkan`)
					if (Number(args[0]) === 1) {
					if (!isAntilink) return reply('UDAH NYALA KAK')
					antilink.push(from)
					fs.writeFileSync('./database/kelompok/antilink.json', JSON.stringify(antilink))
					reply('SUKSES MENGAKTIFKAN ANTI LINK DI GROUP')
					ara.sendMessage(from,`ALLERT!!! Jika bukan admin jangan kirim link grup`, text)
					} else if (Number(args[0]) === 0) {
					if (!isAntilink) return reply('EMANG AKTIF?')
					var ini = antilink.botLangsexOf(from)
					antilink.splice(ini, 1)
					fs.writeFileSync('./database/kelompok/antilink.json', JSON.stringify(antilink))
					reply('SUKSES MEMATIKAN ANTI LINK DI GROUP')
					} else {
					reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break
        case 'stickergif':
	    case 'stikergif':
		case 'sgif':
		case 'stiker': 
		case 'sticker':
		case 's':
                    if (!isRegistered) return reply( ind.noregis())
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (isBanned) return reply('Maaf kamu sudah terbenned!')
					await limitAdd(sender)
					if ((isMedia && !raa.message.videoMessage || isQuotedImage) && args.length == 0) {
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(raa).replace('quotedM','m')).message.extendedTextMessage.contextInfo : raa
					const media = await ara.downloadAndSaveMediaMessage(encmedia)
				    ran = getRandom('.webp')
					await ffmpeg(`./${media}`)
					.input(media)
					.on('start', function (cmd) {
					console.log(`Started : ${cmd}`)
					})
					.on('error', function (err) {
					console.log(`Error : ${err}`)
					fs.unlinkSync(media)
					reply(ind.stikga())
					})
					.on('end', function () {
					console.log('Finish')
					buffer = fs.readFileSync(ran)
					ara.sendMessage(from, buffer, sticker, {quoted: raa})
					fs.unlinkSync(media)
					fs.unlinkSync(ran)
					})
					.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
					.toFormat('webp')
					.save(ran)
					} else if ((isMedia && raa.message.videoMessage.seconds < 11 || isQuotedVideo && raa.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
					const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(raa).replace('quotedM','m')).message.extendedTextMessage.contextInfo : raa
					const media = await ara.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.webp')
					reply(ind.wait())
					await ffmpeg(`./${media}`)
					.inputFormat(media.split('.')[1])
					.on('start', function (cmd) {
					console.log(`Started : ${cmd}`)
				    })
					.on('error', function (err) {
					console.log(`Error : ${err}`)
					fs.unlinkSync(media)
					tipe = media.endsWith('.mp4') ? 'video' : 'gif'
					reply(ind.stikga())
					})
					.on('end', function () {
					console.log('Finish')
					buffer = fs.readFileSync(ran)
					ara.sendMessage(from, buffer, sticker, {quoted: raa})
					fs.unlinkSync(media)
					fs.unlinkSync(ran)
				    })
					.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
					.toFormat('webp')
					.save(ran)
					} else {
					reply(`Kirim gambar dengan caption ${prefix}sticker atau reply/tag gambar`)
					}
                    break
  /////////////////////
 // CASE OWNER MENU //
/////////////////////

		case 'setreply':
					if (!isOwner) return reply(ind.ownerb())
					ara.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					cr = body.slice(10)
					reply(`reply berhasil di ubah menjadi : ${cr}`)
					await limitAdd(sender)
					break 
		case 'setlimit':
		case 'addlimit':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
					limitawal = args[0]
					reply(`*Limit berhasil di ubah menjadi* : ${limitawal}`)
					break 
		case 'giftlimit': 
                    if (!isRegistered) return reply( ind.noregis())
					if (!isOwner) return reply(ind.ownerb())
				    const nomerr = args[0].replace('@','')
                    const jmla = args[1]
                    if (jmla <= 1) return reply(`Minimal gift limit adalah 1`)
                	if (isNaN(jmla)) return reply(`Lmit harus berupa angka`)
                	if (!nomerr) return reply(`Maaf format salah\nmasukan parameter yang benar\ncontoh : ${prefix}giftlimit @6283833847406 20`)
                	const cysz = nomerr + '@s.whatsapp.net'
                	var found = false
                    Object.keys(_limit).forEach((i) => {
                    if(_limit[i].id === cysz){
                    found = i
                    }
                    })
                    if (found !== false) {
                    _limit[found].limit -= jmla
                    const updated = _limit[found]
                    const result = `Gift kuota limit sukses dengan NS: ${createSerial(20)} pada ${moment().format('DD/MM/YY HH:mm:ss')}
					*「 GIFT KUOTA LIMIT 」*
					• User : @${updated.id.replace('@s.whatsapp.net','')}
					• Limit: ${limitawal-updated.limit}`
                    console.log(_limit[found])
                    fs.writeFileSync('./database/pengguna/limit.json',JSON.stringify(_limit));
                    reply(result)
                    } else {
                    reply(`Maaf, nomor ${nomerr} tidak terdaftar di database!`)
                    }
               		break
		case 'setmemlimit':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
					if (isNaN(args[0])) return reply('Limit harus angka')
					memberlimit = args[0]
					reply(`Change Member limit To ${memberlimit} SUCCESS!`)
					break 
		case 'setppbot':
					if (!isOwner) return reply(ind.ownerb())
					ara.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setppbot atau tag gambar yang sudah dikirim`)
				    costum('[❗] LOADING!', text, tescuk, ari)
					enmedia = JSON.parse(JSON.stringify(raa).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await ara.downloadAndSaveMediaMessage(enmedia)
					await ara.updateProfilePicture(botNumber, media)
					reply('Makasih profil barunya😗')
					break 
        case 'premium':
				    if (!isOwner) return reply(ind.ownerb())
				    premm = body.slice(9)
				    prem.push(`${premm}@s.whatsapp.net`)
				    fs.writeFileSync('./database/pengguna/premium.json', JSON.stringify(prem))
				    reply(`Berhasil menjadi premium wa.me/${premm} `)
				    break
		case 'unpremium':
				    if (!isOwner) return reply(ind.ownerb())
				    premm = body.slice(11)
				    prem.splice(`${premm}@s.whatsapp.net`, 1)
				    fs.writeFileSync('./database/pengguna/premium.json', JSON.stringify(prem))
				    reply(`Nomor sudah berakhir menjadi premium wa.me/${premm} `)
				    break
        case 'owner':
        case 'creator':
        case 'developer':
                    ara.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: raa})
                    ara.sendMessage(from, 'Tuh nomer owner ara, jangan lupa di save',MessageType.text, { quoted: raa} )
					break    
        case 'admin':
				    if (!isOwner) return reply(ind.ownerb())
				    admm = body.slice(7)
			        adm.push(`${admm}@s.whatsapp.net`)
				    fs.writeFileSync('./database/pengguna/admin.json', JSON.stringify(adm))
				    reply(`Berhasil menambahkan admin ara wa.me/${admm} `)
				    break
        case 'unadmin':
		            if (!isOwner) return reply(ind.ownerb())
				    admm = body.slice(9)
				    admin.push(`${adm}@s.whatsapp.net`)
			     	fs.writeFileSync('./database/pengguna/admin.json', JSON.stringify(adm))
				    reply(`Berhasil menambahkan admin ara wa.me/${adm} `)
			     	break
        case 'ban':
				    bnnd = body.slice(4)
				    ban.push(`${bnnd}@s.whatsapp.net`)
				    fs.writeFileSync('./database/pengguna/banned.json', JSON.stringify(ban))
				    reply(`Berhasil membanned nomor : wa.me/${bnnd} `)
				    break
		case 'unban':
			        bnnd = body.slice(6)
				    ban.splice(`${bnnd}@s.whatsapp.net`, 1)
				    fs.writeFileSync('./database/pengguna/banned.json', JSON.stringify(ban))
				    reply(`Nomor wa.me/${bnnd} telah di unban!`)
				    break
		case 'block':
				    ara.updatePresence(from, Presence.composing) 
				    ara.chatRead (from)
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					ara.blockUser (`${body.slice(7)}@c.us`, "add")
					ara.sendMessage(from, `*Perintah Diterima, Memblokir* ${body.slice(7)}@c.us`, text)
					break
		case 'unblock':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
				    ara.blockUser (`${body.slice(9)}@c.us`, "remove")
					ara.sendMessage(from, `*Perintah Diterima, Membuka Blockir* ${body.slice(9)}@c.us`, text)
					break
		case 'leave':
                    if (!isRegistered) return reply( ind.noregis())
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					setTimeout( () => {
					ara.groupLeave (from) 
					}, 2000)
					setTimeout( () => {
					ara.updatePresence(from, Presence.composing) 
					ara.sendMessage(from, '*Njir, ari ngentod!*', text)
					}, 0)
					break
        case 'event':
					if (!isOwner) return reply(ind.ownerb())
					if (!isGroup) return reply(ind.groupo()) 
					if (args.length < 1) return reply(`Masukkan parameter!! \n${prefix}event 1 untuk mengaktifkan \n${prefix}event 0 untuk menonaktifkan`)
					if (Number(args[0]) === 1) {
				    if (isEventon) return reply('*Fitur event sudah aktif sebelum nya*')
					event.push(from)
					fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
					reply('《 *SUCCSESS* 》 \nMengaktifkan fitur event di group ini')
					} else if (Number(args[0]) === 0) {
					event.splice(from, 1)
					fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
					reply('《 *SUCCSESS* 》 \nMenonaktifkan fitur event di group ini')
					} else {
					reply(ind.satukos())
					}
					break
		case 'bc': 
					if (!isOwner) return reply(ind.ownerb()) 
					if (args.length < 1) return reply('.......')
					anu = await ara.chats.all()
					if (isMedia && !ara.message.videoMessage || isQuotedImage) {
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(raa).replace('quotedM','m')).message.extendedTextMessage.contextInfo : raa
				    buff = await raa.downloadMediaMessage(encmedia)
					for (let _ of anu) {
					raa.sendMessage(_.jid, buff, image, {caption: `*「 BROADCAST 」*\n\n${body.slice(4)}`})
					}
					reply('*Suksess broadcast* ')
					} else {
					for (let _ of anu) {
					sendMess(_.jid, `*「 BROADCAST ARA 」*\n\n${body.slice(4)}`)
					}
					reply('*Suksess broadcast* ')
					}
					break
		case 'bcc': 
				    if (!isAdmin) return reply('*Only Admin bot*')
					if (args.length < 1) return reply('.......')
					anu = await ara.chats.all()
					if (isMedia && !raa.message.videoMessage || isQuotedImage) {
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(raa).replace('quotedM','m')).message.extendedTextMessage.contextInfo : raa
					buff = await ara.downloadMediaMessage(encmedia)
					for (let _ of anu) {
					neko.sendMessage(_.jid, buff, image, {caption: `*「 BROADCAST 」*\n\n${body.slice(4)}`})
					}
						reply('*Suksess broadcast* ')
					} else {
					for (let _ of anu) {
					sendMess(_.jid, `*「 BROADCAST ARA 」*\n\n${body.slice(4)}`)
					}
					reply('*Suksess broadcast* ')
					}
					break
		case 'clone':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerg()) 
					if (args.length < 1) return reply(' *TAG YANG MAU DI CLONE!!!* ')
					if (raa.message.extendedTextMessage === undefined || raa.message.extendedTextMessage === null) return reply('❬ SUCCSESS ❭')
					mentioned = raa.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
				    pp = await neko.getProfilePicture(id)
					buffer = await getBuffer(pp)
					ara.updateProfilePicture(botNumber, buffer)
					mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
					reply(ind.stikga())
					}
					await limitAdd(sender)
					break
		case 'clearall':
					if (!isOwner) return reply(ind.ownerb())
					anu = await ara.chats.all()
					ara.setMaxListeners(25)
					for (let _ of anu) {
					ara.deleteChat(_.jid)
					}
					reply(ind.clears())
					break
		case 'bcgc':
					if (!isOwner) return reply(ind.ownerb())
					if (args.length < 1) return reply('.......')
					anu = await groupMembers 
					tagss = raa.participant
					if (isMedia && !raa.message.videoMessage || isQuotedImage) {
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(raa).replace('quotedM','m')).message.extendedTextMessage.contextInfo : raa
					buffer = await raa.downloadMediaMessage(encmedia)
					for (let _ of anu) {
					raa.sendMessage(_.jid, buffer, image, {caption: `*「 BC GROUP 」*\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`})
				    }
					reply('')
					} else {
					for (let _ of anu) {
					sendMess(_.jid, `*「 BROADCAST GROUP 」*\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`)
					}
					reply('Sukses broadcast group')
					}
					break 
            default:
         if (body.startsWith(`${prefix}${command}`)) {
        reply(`*${pushname}*, Command *${prefix}${command}* Tidak Ada Di Dalam *${prefix}menu* ${cr}`)
		const none = fs.readFileSync('./mp3/ara.mp3');
		ara.sendMessage(from, none, MessageType.audio, {quoted: raa, mimetype: 'audio/mp4', ptt:true})

			  }

			if (isGroup && !isCmd && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						reply(ind.cmdnf(prefix, command))
					} else {
						console.log(color('[ARA]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
					}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
