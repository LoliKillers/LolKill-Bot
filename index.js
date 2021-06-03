const {
	WAConnection,
	MessageType,
	Presence,
	MessageOptions,
	Mimetype,
	WALocationMessage,
	WA_MESSAGE_STUB_TYPES,
	WA_DEFAULT_EPHEMERAL,
	ReconnectMode,
	ProxyAgent,
	GroupSettingChange,
	waChatKey,
	mentionedJid,
	processTime,
	ChatModification,
} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal")
const fs = require("fs")
const request = require('request');
const moment = require("moment-timezone")
const axios = require("axios")
const imageToBase64 = require('image-to-base64');
const speed = require('performance-now')
const { spawn, exec, execSync } = require("child_process")
const ffmpeg = require('fluent-ffmpeg')
const fetch = require('node-fetch');
const { error } = require("qrcode-terminal")
const ms = require('parse-ms')
const toMs = require('ms')
const crypto = require('crypto')
const yts = require( 'yt-search')

const { color, bgcolor } = require('./lib/color')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { webp2mp4File} = require('./lib/webp2mp4')
const { recognize } = require('./lib/ocr')
const { yta, ytv, igdl, upload } = require('./lib/ytdl');
const { kill } = require("process");

const imagenya = JSON.parse(fs.readFileSync('./media/image.json'))
const usher = JSON.parse(fs.readFileSync('./database/user.json'))
const prem = JSON.parse(fs.readFileSync('./database/prem.json'))
const _limit = JSON.parse(fs.readFileSync('./database/limit.json'))
const _leveling = JSON.parse(fs.readFileSync('./database/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/level.json'))
const uang = JSON.parse(fs.readFileSync('./database/uang.json'))
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'))
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
const badword = JSON.parse(fs.readFileSync('./database/badword.json'))
const bad = JSON.parse(fs.readFileSync('./database/bad.json'))
const setiker = JSON.parse(fs.readFileSync('./temp/stik.json'))
const videonye = JSON.parse(fs.readFileSync('./temp/video.json'))
const audionye = JSON.parse(fs.readFileSync('./temp/audio.json'))
const imagenye = JSON.parse(fs.readFileSync('./temp/image.json'))
const gc_verify = JSON.parse(fs.readFileSync('./database/gcverify.json'))

author = 'RamRa'
packname = 'Loli Killers'
banChats = true
offline = false
targetpc = '6285852335034'
owner = '6283803728334'
numbernye = '0'
limitawal = '30'
memberlimit ='0'

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
		fs.writeFileSync('./database/level.json', JSON.stringify(_level))
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
		fs.writeFileSync('./database/level.json', JSON.stringify(_level))
	}
}

const addLevelingId = (sender) => {
	const obj = {id: sender, xp: 1, level: 1}
	_level.push(obj)
	fs.writeFileSync('./database/level.json', JSON.stringify(_level))
}
             
const getRegisteredRandomId = () => {
	return usher[Math.floor(Math.random() * usher.length)].id
}

const addRegisteredUser = (userid, sender, age, time, serials) => {
	const obj = { id: userid, time: time, serial: serials }
	usher.push(obj)
	fs.writeFileSync('./database/user.json', JSON.stringify(usher))
}

const createSerial = (size) => {
	return crypto.randomBytes(size).toString('hex').slice(0, size)
}

const checkRegisteredUser = (sender) => {
	let status = false
	Object.keys(usher).forEach((i) => {
		if (usher[i].id === sender) {
			status = true
		}
	})
	return status
}
        
const addATM = (sender) => {
	const obj = {id: sender, uang : 0}
	uang.push(obj)
	fs.writeFileSync('./database/uang.json', JSON.stringify(uang))
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
		fs.writeFileSync('./database/uang.json', JSON.stringify(uang))
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
		fs.writeFileSync('./database/limit.json', JSON.stringify(_limit))
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
		fs.writeFileSync('./database/uang.json', JSON.stringify(uang))
	}
}

const getGroupExpired = (sender) => {
	let position = null
	Object.keys(gc_verify).forEach((i) => {
		if (gc_verify[i].id === sender) {
			position = i
		}
	})
	if (position !== null) {
		return gc_verify[position].expired
	}
}
    
const getPremiumExpired = (sender) => {
	let position = null
	Object.keys(prem).forEach((i) => {
		if (prem[i].id === sender) {
			position = i
		}
	})
	if (position !== null) {
		return prem[position].expired
	}
}

const expiredGcCheck = () => {
	setInterval(() => {
		let position = null
		Object.keys(gc_verify).forEach((i) => {
			if (Date.now() >= gc_verify[i].expired) {
				position = i
			}
		})
		if (position !== null) {
			console.log(`Verify Group expired = ${gc_verify[position].id}`)
			gc_verify.splice(postion, 1)
			fs.writeFileSync('./database/gcverify.json', JSON.stringify(gc_verify))
		}
	}, 1000)
}

const expiredCheck = () => {
	setInterval(() => {
		let position = null
		Object.keys(prem).forEach((i) => {
			if (Date.now() >= prem[i].expired) {
				position = i
			}
		})
		if (position !== null) {
			console.log(`Premium expired: ${prem[position].id}`)
			prem.splice(position, 1)
			fs.writeFileSync('./database/prem.json', JSON.stringify(prem))
		}
	}, 1000)
}

const getAllGcVerify = () => {
	const array = []
	Object.keys(gc_verify).forEach((i) => {
		array.push(gc_verify[i].id)
	})
	return array
}

const getAllPremiumUser = () => {
	const array = []
	Object.keys(prem).forEach((i) => {
		array.push(prem[i].id)
	})
	return array
}

module.exports = lolikiller = async (lolikiller, loli) => {
	try {
        if (!loli.hasNewMessage) return
        loli = loli.messages.all()[0]
		if (!loli.message) return
		if (loli.key && loli.key.remoteJid == 'status@broadcast') return
		global.blocked
        const content = JSON.stringify(loli.message)
		const from = loli.key.remoteJid
		const {
			text,
			extendedText,
			contact,
			location,
			liveLocation,
			image,
			video,
			sticker,
			document,
			audio,
			product,
		} = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
        const type = Object.keys(loli.message)[0]        
        const cmd = (type === 'conversation' && loli.message.conversation) ? loli.message.conversation : (type == 'imageMessage') && loli.message.imageMessage.caption ? loli.message.imageMessage.caption : (type == 'videoMessage') && loli.message.videoMessage.caption ? loli.message.videoMessage.caption : (type == 'extendedTextMessage') && loli.message.extendedTextMessage.text ? loli.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        const prefix = /^[>°•π÷×¶∆£¢€¥®™|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[>°•π÷×¶∆£¢€¥®™|~!#$%^&.?/\\©^z+*,;]/gi) : '-'          	
        body = (type === 'conversation' && loli.message.conversation.startsWith(prefix)) ? loli.message.conversation : (type == 'imageMessage') && loli.message.imageMessage.caption.startsWith(prefix) ? loli.message.imageMessage.caption : (type == 'videoMessage') && loli.message.videoMessage.caption.startsWith(prefix) ? loli.message.videoMessage.caption : (type == 'extendedTextMessage') && loli.message.extendedTextMessage.text.startsWith(prefix) ? loli.message.extendedTextMessage.text : ''
		budy = (type === 'conversation') ? loli.message.conversation : (type === 'extendedTextMessage') ? loli.message.extendedTextMessage.text : ''
		var pes = (type === 'conversation' && loli.message.conversation) ? loli.message.conversation : (type == 'imageMessage') && loli.message.imageMessage.caption ? loli.message.imageMessage.caption : (type == 'videoMessage') && loli.message.videoMessage.caption ? loli.message.videoMessage.caption : (type == 'extendedTextMessage') && loli.message.extendedTextMessage.text ? loli.message.extendedTextMessage.text : ''
		const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const botNumber = lolikiller.user.jid
		const botNumberss = lolikiller.user.jid + '@c.us'
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? lolikiller.participant : loli.key.remoteJid
		const totalchat = await lolikiller.chats.all()
		const groupMetadata = isGroup ? await lolikiller.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const isPrem = prem.includes(sender)
		const isGcVerify = gc_verify.includes(sender)
        const isUser = checkRegisteredUser(sender)
        const isLeveling = isGroup ? _leveling.includes(from) : false
		const isAntiLink = isGroup ? antilink.includes(from) : false
		const isNsfw = isGroup ? nsfw.includes(from) : false
		const isWelkom = isGroup ? welkom.includes(from) : false
		const isBadWord = isGroup ? badword.includes(from) : false
        const conts = loli.key.fromMe ? lolikiller.user.jid : lolikiller.contacts[sender] || {
			notify: jid.replace(/@.+/, '')
		}
        const pushname = loli.key.fromMe ? lolikiller.user.name : conts.notify || conts.vname || conts.name || '-'
        const mentionByTag = type == "extendedTextMessage" && lolikiller.message.extendedTextMessage.contextInfo != null ? lolikiller.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByReply = type == "extendedTextMessage" && lolikiller.message.extendedTextMessage.contextInfo != null ? lolikiller.message.extendedTextMessage.contextInfo.participant || "" : ""
        const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
        mention != undefined ? mention.push(mentionByReply) : []
        const mentionUser = mention != undefined ? mention.filter(n => n) : []
        fake = `[ ${pushname} ]\nI Don't Like you!!\nlolikiller.herokuapp.com`
        lolikiller.chatRead(from)

  /*      lolikiller.on('CB:Blocklist', json => {
			if (blocked.length > 2) return
			for (let i of json[1].blocklist) {
				blocked.push(i.replace('c.us','s.whatsapp.net'))
			}
		})*/
		
		lolikiller.on('group-participants-update', async (ini_id) => {
			if (!welkom.includes(ini_id.jid)) return
			try {
				const mdata = await lolikiller.groupMetadata(ini_id.jid)
				console.log(anu)
				if (ini_id.action == 'add') {
					num = ini_id.participants[0]
					try {
						ppimg = await lolikiller.getProfilePicture(`${ini_id.participants[0].split('@')[0]}@c.us`)
					} catch {
						ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
					teks = `Hallo @${ini_id.split('@')[0]}\nWelcome to group *${mdata.subject}*`
					let buff = await getBuffer(ppimg)
					lolikiller.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
				} else if (ini_id.action == 'remove') {
					num = ini_id.participants[0]
					try {
						ppimg = await lolikiller.getProfilePicture(`${ini_id.split('@')[0]}@c.us`)
					} catch {
						ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
					teks = `Bye bye @${ini_id.split('@')[0]}`
					let buff = await getBuffer(ppimg)
					lolikiller.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
				}
			} catch (e) {
				console.log('Error : %s', color(e, 'red'))
			}
		})
		
		if (isGroup && isBadWord) {
			if (bad.includes(messagesC)) {
				if (!isGroupAdmins) {
					try {
						fakegroup2(`${pushname} lu jangan toxic kntl!!`)
						setTimeout( () => {
							lolikiller.groupLeave(from) 
						}, 5000)
						setTimeout( () => {
							lolikiller.updatePresence(from, Presence.composing)
							fakegroup2(`*[ TOXIC ]*\n\n ${pushname} toxic gua kick ok!`)
						}, 0)
					} catch { lolikiller.sendMessage(from, `Untung Bukan Admin`, text , {quoted : faketoko}) }
				} else {
					return fakegroup2("Admin mah bebas")
				}
			}
		}
		
		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
		if (!isGroup && isCmd) console.log('\x1b[1;36m❏\x1b[1;35m═══\x1b[1;32m[ COMMAND ]\x1b[1;35m═══\x1b[1;32m[\x1b[1;37m', time,'\x1b[1;32m]\x1b[1;35m═══\x1b[1;32m[\x1b[1;33m', command, '\x1b[1;37mfrom', '\x1b[1;34m', pushname, '\x1b[1;36margs :', color(args.length))
		if (!isGroup && !isCmd) console.log('\x1b[1;36m❏\x1b[1;35m═══\x1b[1;31m[ PRIVATE ]\x1b[1;35m═══\x1b[1;31m[\x1b[1;37m', time,'\x1b[1;31m]\x1b[1;35m═══\x1b[1;31m[\x1b[1;33m Message', '\x1b[1;37mfrom', '\x1b[1;34m', pushname, '\x1b[1;36margs :', color(args.length))
		if (isCmd && isGroup) console.log('\x1b[1;36m❏\x1b[1;35m═══\x1b[1;32m[ COMMAND ]\x1b[1;35m═══\x1b[1;32m[\x1b[1;37m', time,'\x1b[1;32m]\x1b[1;35m═══\x1b[1;32m[\x1b[1;33m',command, '\x1b[1;37mfrom', '\x1b[1;34m', pushname, '\x1b[1;37min', color(groupName), '\x1b[1;36margs :', color(args.length))
		if (!isCmd && isGroup) console.log('\x1b[1;36m❏\x1b[1;35m═══\x1b[1;31m[  GROUP  ]\x1b[1;35m═══\x1b[1;31m[\x1b[1;37m', time,'\x1b[1;31m]\x1b[1;35m═══\x1b[1;31m[\x1b[1;33m Message', '\x1b[1;37mfrom', '\x1b[1;34m', pushname, '\x1b[1;37min', color(groupName), '\x1b[1;36margs :', color(args.length))
		
		var ini_ra = '*[          ] 0%*'
		const ini_rara = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
		const ini_perl = ini_rara-getLevelingXp(sender) 
		const ini_resl = Math.round(100-((ini_perl/getLevelingXp(sender))*100))
		if (ini_resl <= 10) {
			ini_ra = `*[■         ] ${ini_resl}%*`
		} else if (ini_resl <= 20) {
			ini_ra = `*[■■        ] ${ini_resl}%*`
		} else if (ini_resl <= 30) {
			ini_ra = `*[■■■       ] ${ini_resl}%*`
		} else if (ini_resl <= 40) {
			ini_ra = `*[■■■■      ] ${ini_resl}%*`
		} else if (ini_resl <= 50) {
			ini_ra = `*[■■■■■     ] ${ini_resl}%*`
		} else if (ini_resl <= 60) {
			ini_ra = `*[■■■■■■    ] ${ini_resl}%*`
		} else if (ini_resl <= 70) {
			ini_ra = `*[■■■■■■■   ] ${ini_resl}%*`
		} else if (ini_resl <= 80) {
			ini_ra = `*[■■■■■■■■  ] ${ini_resl}%*`
		} else if (ini_resl <= 90) {
			ini_ra = `*[■■■■■■■■■ ] ${ini_resl}%*`
		} else if (ini_resl <= 100) {
			ini_ra = `*[■■■■■■■■■■] ${ini_resl}%*`
		}
			
		expiredCheck()
			
		const level_Role = getLevelingLevel(sender)
		var role = 'Warrior III'
		if (level_Role <= 3) {
   	        role = 'Warrior II'
   	    } else if (level_Role <= 5) {
   	        role = 'Warrior I'
   	    } else if (level_Role <= 7) {
            role = 'Elite III'
        } else if (level_Role <= 8) {
            role = 'Elite II'
        } else if (level_Role <= 9) {
   	        role = 'Elite I'
   	    } else if (level_Role <= 10) {
            role = 'Master IV'
   	    } else if (level_Role <= 11) {
   	        role = 'Master III'
   	    } else if (level_Role <= 12) {
   	        role = 'Master II'
   	    } else if (level_Role <= 13) {
   	        role = 'Master I'
        } else if (level_Role <= 14) {
   	        role = 'Grand Master V'
   	    } else if (level_Role <= 14) {
   	        role = 'Grand Master IV'
   	    } else if (level_Role <= 15) {
   	        role = 'Grand Master III'
   	    } else if (level_Role <= 16) {
   	        role = 'Grand Master II'
   	    } else if (level_Role <= 17) {
   	        role = 'Grand Master I'
   	    } else if (level_Role <= 18) {
   	        role = 'Epic V'
   	    } else if (level_Role <= 19) {
   	        role = 'Epic IV'
   	    } else if (level_Role <= 20) {
   	        role = 'Epic III'
   	    } else if (level_Role <= 21) {
   	        role = 'Epic II'
   	    } else if (level_Role <= 22) {
   	        role = 'Epic I'
   	    } else if (level_Role <= 23) {
   	        role = 'Legend V'
   	    } else if (level_Role <= 24) {
			role = 'Legend IV'
		} else if (level_Role <= 25) {
			role = 'Legend III'
		} else if (level_Role <= 26) {
			role = 'Legend II'
		} else if (level_Role <= 27) {
			role = 'Legend I'
		} else if (level_Role <= 28) {
			role = 'Mythic III'
		} else if (level_Role <= 29) {
			role = 'Mythic II'
		} else if (level_Role <= 30) {
			role = 'Mythic I'
		} else if (level_Role <= 31) {
			role = 'Glorious Mythic'
		}
		
		const limitAdd = (sender) => {
			if (!loli.key.fromMe, !isPrem) return
			let position = false
			Object.keys(_limit).forEach((i) => {
				if (_limit[i].id == sender) {
					position = i
				}
			})
			if (position !== false) {
				_limit[position].limit += 1
				fs.writeFileSync('./database/limit.json', JSON.stringify(_limit))
			}
		}
		
		mess = {
			wait: '*Wait!*',
			success: '*Success!*',
			wrongFormat: '*Formatnya salah!',
			error: {
				stik: '*Yah Error*',
				lk: '*Linknya Error!*'
			},
			only: {
				band: `*${pushname} Lu Udah Gua Ban!!*`,
				group: '*Group Only!*',
				user_bot: `*Silahkan ketik ${prefix}verify dulu!*`,
				premium: `*${pushname} Lu Bukan User Premium!*`,
				level: '*Leveling Belum Di Aktifkan!*',
				bot_admin: '*Bot Harus Jadi Admin*',
				group_admin: `*${pushname} Lu Bukan Admin!*`,
				nsfw: '*Silahkan Aktifkan Mode Nsfw Terlebih Dahulu!*'
			}
		}
		
		const checkLimit = (sender) => {
			let found = false
			for (let lmt of _limit) {
				if (lmt.id === sender) {
					let limitCounts = limitawal - lmt.limit
					ini_txt = `*[ LIMIT HABIS ]*\n`
					ini_txt += `Note :*\n_Limit bisa di dapatkan dengan cara ${prefix}buylimit dan dengan naik level_\n`
					if (limitCounts <= 0) return lolikiller.sendMessage(from, ini_txt, text,{ quoted: loli})
					if (!isPrem & !loli.key.fromMe) {
						ini_txt = `*[ LIMIT COUNTS ]*\n\n`
						ini_txt += `*Name :* ${pushname}\n`
						ini_txt += `*Premium :* false\n`
						ini_txt += `*Limit :* ${limitCounts}\n`
						ini_txt += `*Note :* _Untuk mendapatkan limit bisa dengan cara ${prefix}buylimit/naik level\n\n`
						fakegroup2(ini_txt)
						found = true
					} else {
						ini_txt = `*[ LIMIT COUNTS ]*\n\n`
						ini_txt += `*Name :* ${pushname}\n`
						ini_txt += `*Premium :* true\n`
						ini_txt += `*Limit :* Unlimited\n`
						ini_txt += `*Note :* _Untuk mendapatkan limit bisa dengan cara ${prefix}buylimit/naik level\n\n`
						fakegroup2(ini_txt)
						found = true
					}
				}
			}
			if (found === false) {
				let obj = { id: sender, limit: 0 }
				_limit.push(obj)
				fs.writeFileSync('./database/limit.json', JSON.stringify(_limit))
				ini_txt = `*[ LIMIT HABIS ]*\n\n`
				ini_txt += `*Name :* ${pushname}\n`
				ini_txt += `*Limit :* ${limitCounts}\n`
				ini_txt += `*Note :* _Untuk mendapatkan limit bisa dengan cara ${prefix}buylimit/naik level\n\n`
				fakegroup2(ini_txt)
			}
		}
		
		const isLimit = (sender) =>{ 
			if (loli.key.fromMe && isPrem) {return false;}
			let position = false
			for (let i of _limit) {
				if (i.id === sender) {
					let limits = i.limit
					if (limits >= limitawal ) {
						position = true
						ini_txt = `*[ LIMIT HABIS ]*\n\n`
						ini_txt +=`*Note :*\n_Limit bisa di dapatkan dengan cara ${prefix}buylimit dan dengan naik level`
						fakegroup2(ini_txt)
						return true
					} else {
						_limit
						position = true
						return false
					}
				}
			}
			
			if (position === false) {
				const killer = { id: sender, limit: 0 }
				_limit.push(killer)
				fs.writeFileSync('./database/limit.json',JSON.stringify(_limit))
				return false
			}
		}
				
		const isUrl = (url) => {
			return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
		}
		
		const fakethumb = (teks, gomen) => {
			lolikiller.sendMessage(from, teks, image, {
				thumbnail: fs.readFileSync('./media/ward3.jpeg'),
				quoted: loli,
				caption: gomen,
			})
		}
		
		const reply = (teks) => {
			lolikiller.sendMessage(from, teks, text, {
				quoted: loli
			})
		}
		
		const sendMess = (xixi, teks) => {
			lolikiller.sendMessage(xixi, teks, text)
		}
		
		const mentions = (teks, memberr, id) => {
			(id == null || id == undefined || id == false) ? lolikiller.sendMessage(from, teks.trim(), extendedText, {
				contextInfo: {
					"mentionedJid": memberr
				}
			}):
			lolikiller.sendMessage(from, teks.trim(), extendedText, {
				quoted: lolikiller, contextInfo: {
					"mentionedJid": memberr
				}
			})
		}
		
		const fakestatus = (teks) => {
			lolikiller.sendMessage(from, teks, text, {
				quoted: {
					key: {
						fromMe: false,
						participant: `0@s.whatsapp.net`, ...(from ? {remoteJid: "status@broadcast"}:{})
					},
					message: {
						"imageMessage": {
							"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
							"mimeType": "image/jpeg",
							"caption": fake,
							"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
							"height": 1080,
							"width": 1079,
							"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
							"fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
							"directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
							"mediaKeyTimestamp": "1610993486",
							"jpegThumbnail": fs.readFileSync('./media/ward.jpeg'),
							"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
						}
					}
				}
			})
		}
		const fakethumb2 = (teks, oky) => {
			lolikiller.sendMessage(from, teks, image, {
				thumbnail: fs.readFileSync('./stik/fake.jpeg'), quoted: loli, caption: oky
			})
		}
		
		const fakegroup = (teks) => {
			lolikiller.sendMessage(from, teks, text, {
				quoted: {
					key: {
						fromMe: false,
						participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6283803728334-1618835961@g.us" } : {})
					},
					message: {
						"imageMessage": {
							"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
							"mimetype": "image/jpeg",
							"caption": fake,
							"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
							"fileLength": "28777",
							"height": 1080,
							"width": 1079,
							"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
							"fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
							"directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
							"mediaKeyTimestamp": "1610993486",
							"jpegThumbnail": fs.readFileSync('./media/ward.jpeg'),
							"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
						}
					}
				}
			})
		}
		
        const fakegroup2 = (teks) => {
			lolikiller.sendMessage(from, teks, text, {
				quoted: {
					key: {
						fromMe: false,
						participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6283803728334-1618835961@g.us" } : {})
					},
					message: {
						conversation: fake
					}
				}
			})
		}
		
		const faketoko = {
			key: {
				fromMe: false,
				participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
			},
			message: {
				"productMessage": {
					"product": {
						"productImage": {
							"mimetype": "image/jpeg",
							"jpegThumbnail": fs.readFileSync(`./media/ward.jpeg`)
						},
						"title": fake,
						"description": "↯ Loli Killers ↯",
						"currencyCode": "IDR",
						"priceAmount1000": "50.000.00",
						"retailerId": "lolikiller.herokuapp.com",
						"productImageCount": 1
					},
					"businessOwnerJid": `0@s.whatsapp.net`
				}
			}
		}
		
		const sendStickerFromUrl = async(to, url) => {
			var names = Date.now() / 10000;
			var download = function (uri, filename, callback) {
				request.head(uri, function (err, res, body) {
					request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
				});
			};
			download(url, './stik' + names + '.png', async function () {
				console.log('done');
				let media = fs.readFileSync(filename)
				let type = mime.split("/")[0]+"Message"
				if(mime === "image/gif"){
					type = MessageType.video
					mime = Mimetype.gif
				}
				if(mime.split("/")[0] === "audio"){
					mime = Mimetype.mp4Audio
				}
				lolikiller.sendMessage(to, media, type, { quoted: loli, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
				fs.unlinkSync(filename)
			});
		}
		
		if (isGroup && isUser && isLeveling) {
			const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    bayarLimit(sender, 3)
                    ini_txt = `*↯ [ CONGRATS ] ↯ *\n\n`
                    ini_txt += `*Name :* ${pushname}\n`
                    ini_txt += `*Nomer* : wa.me/${sender.split("@")[0]}\n`
                    ini_txt += `*Xp* : ${getLevelingXp(sender)}\n`
                    ini_txt += `*Limit* : +3\n`
                    ini_txt += `*Role*: ${role}\n`
                    ini_txt += `*Level* : ${getLevel} ➢ ${getLevelingLevel(sender)}\n`
                    await fakegroup2(ini_txt)
                }
            } catch (err) {
                console.error(err)
            }
        }
        
        if (isUser) {
			const checkATM = checkATMuser(sender)
			try {
				if (checkATM === undefined) addATM(sender)
				const uangsaku = Math.floor(Math.random() * 10) + 90
				addKoinUser(sender, uangsaku)
			} catch (err) {
				console.error(err)
			}
		}
		
		var premi = '*false*'
		if (isPrem) {
			premi = '*true*'
		}
		if (!loli.key.fromMe) {
			premi = '*☆*'
		}
		
		var regis = '*false*'
		if (isUser) {
			regis = '*true*'
		}
		if (!loli.key.fromMe) {
			regis = '*☆*'
		}
		
		if (!loli.key.fromMe && banChats === true) return
		switch (command) {
			case 'verify':
				if (isUser) return reply(`↯ ${pushname} lu udah terdaftar!`)
				const serialUser = createSerial(20)
				lolikiller.updatePresence(from, Presence.composing)
				if (isGroup) {
					addRegisteredUser(sender, time, serialUser)
					ini_txt = `*↯ [ USER VERIFY ] ↯ *\n\n`
					ini_txt += `*Name :* ${pushname}\n`
					ini_txt += `*Nomer :* wa.me/${sender.split("@")[0]}\n`
					ini_txt += `*Date :* ${time}\n`
					ini_txt += `*Ns :* ${serialUser}`
					fakegroup(ini_txt)
					addATM(sender)
					addLevelingId(sender)
					checkLimit(sender)
					consoloe.log(color('[ USER VERIFY ]'), color(time, 'yellow'), 'Name :', color(namaUser, 'cyan'), 'Serial :', color(serialUser, 'cyan'), 'in', color(sender || groupName))
				} else { 
					addRegisteredUser(sender, time, serialUser)
					ini_txt = `*↯ [ USER VERIFY ] ↯ *\n\n`
					ini_txt += `*Name :* ${pushname}\n`
					ini_txt += `*Nomer :* wa.me/${sender.split("@")[0]}\n`
					ini_txt += `*Date :* ${time}\n`
					ini_txt += `*Ns :* ${serialUser}`
					fakegroup(ini_txt)
					addATM(sender)
					addLevelingId(sender)
					checkLimit(sender)
					console.log(color('[ USER VERIFY '), color(time, 'yellow'), 'name :', color(namaUser, 'cyan'), 'Serial :', color(serialUser))					
				}
			break
			case 'status':
				if (!isUser) return reply(mess.only.user_bot)
				fakegroup2(`${banChats ? '*↯ SELF MODE*' : '*↯ PUBLIC MODE*'}\n${offline ? '*↯ OFFLINE*' : '*↯ ONLINE*'}`)
			break
			case 'self':
				if (!loli.key.fromMe) return
				fakegroup2(`*↯ SELF MODE*`)
				if (banChats === true) return
				uptime = process.uptime()
				banChats = true
			break
			case 'public':
				if (!loli.key.fromMe) return
				fakegroup2(`*↯ PUBLIC MODE*`)
				if (banChats === false) return
				banChats = false
			break
			case 'tes':
				if (!isUser) return reply(mess.only.user_bot)
				fakegroup(`*↯ Ok*`)
			break
			case 'help':
			case 'menu':
				ini_txt = `↯ [ LOLKILL SELF BOT ] ↯ 

↯ [ YOUR INFO ] ↯
↦ *Name :* ${prefix}
↦ *Nomor :* wa/me${sender.split("@")[0]}

↯ [ ABOUT BOT ] ↯
↦ ${prefix}tes
↦ ${prefix}status
↦ ${prefix}verify
↦ ${prefix}runtime
↦ ${prefix}join (link group)
↦ ${prefix}info

↯ [ OWNER MENU ] ↯ 
↦ ${prefix}public
↦ ${prefix}self
`
			fakegroup(ini_txt)
			break
			case 'info':
				if (!isUser) return reply(mess.only.user_bot)
				me = lolikiller.user
				uptime = process.uptime()
				const timestampp = speed();
				const latensii = speed() - timestampp
				exec(`eofetch --stdout`, (error, stdout, stderr) => {
					const childd = stdout.toString('utf-8')
					const ini_txt = childd.replace(/Memory:/, "Ram:")
					const ini_ping = `${ini_txt}${latensii.toFixed(4)} Second`
					ini_text = `
*↯ [ SELF BOT - INFO ] ↯ *

*Bot Name :* ${me.name}
*Bot Number :* ${me.jid}
*Bot prefix :* [ ${prefix} ]
*Date :* ${lolikiller.referenceDate}
*Total Block Contact :* ${lolikiller.blocklist.length}
*Speed :* ${ini_ping}
*WA Version :* ${lolikiller.user.phone.wa_version}
*Mcc :* ${lolikiller.user.phone.mcc}
*Mnc :* ${lolikiller.user.phone.mnc}
*Os Version :* ${lolikiller.user.phone.os_version}
*Manufacturer :* ${lolikiller.user.phone.device_manufacturer}
*Model :* ${lolikiller.user.phone.device_model}
*Version :* ${lolikiller.version}

`
				fakestatus(ini_text)
				})
			break
			case 'join':
				if (!isUser) return reply(mess.only.user_bot)
				try {
					if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.lv)
					ini_url = args[0]
					if (!q) return fakegroup2('Massukkan link group!')
					var codeInvite = ini_url.split('https://chat.whatsapp.com/')[1]
					if (!codeInvite) return fakegroup('Pastikan link sudah benar!')
					var response = await lolikiller. acceptInvite(codeInvite)
					fakestatus('↯ Success join to group')
				} catch {
					fakegroup2('↯ Link Error')
				}
			break
			case 'runtime':
				if (!isUser) return reply(mess.only.user_bot)
				run = process.uptime()
				ini_txt = `${kyun(run)}`
				fakegroup2(ini_txt)
			break
			default:
				if (budy.includes("://chat.whatsapp.com/")){
					if (!isAntiLink) return
					if (!isBotGroupAdmins) return reply('↯ Untung Bot Bukan Admin')
					if (isGroupAdmins) return reply(`↯ *${pushname}* Untung lu admin`)
					if (loli.key.fromMe) return
					lolikiller.updatePresence(from, Presence.composing)
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		            var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
						reply(`*↯ [ LINK GROUP DETECTED ] ↯ *\n\nMaaf *${pushname}* lu gw kick dari group *${groupMetadata.subject}*`)
						setTimeout( () => {
						lolikiller.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 100)
		setTimeout( () => {
		lolikiller.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
		setTimeout( () => {
		reply(`*↯ [ TAKE OF OTW KICK! ] ↯ *`)
		}, 0)
		}
        if (budy.includes("@6283803728334")){
        const ini_stk = fs.readFileSync('./media/patrik.webp');
        lolikiller.sendMessage(from, ini_stk, sticker, {quoted: loli, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "APA SIH TAG TAG!!", 'jpegThumbnail': fs.readFileSync('./media/patrik2.webp')}}}})
        }
			if (budy.startsWith('x')){
				if (!loli.key.fromMe) return
				try {
					return lolikiller.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: loli})
				} catch(err) {
					e = String(err)
					reply(e)
				}
			}
			
			if (budy.startsWith('Tes')){
				if (!loli.key.fromMe) return
				try {
					return lolikiller.sendMessage(from, `↯ Ok`, text,{quoted: faketoko})
				} catch(err) {
					e = String(err)
					reply(e)
				}
			}		
		}
		
		if (isGroup && budy != undefined) {
		} else {
			console.log(color(''))
		}
	} catch (e) {
		e = String(e)
		if (!e.includes("this.isZero")) {
			console.log('Message : %s', color(e, 'green'))
		}
	}
}
