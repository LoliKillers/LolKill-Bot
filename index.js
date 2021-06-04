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
const { yta, ytv, igdl, upload } = require('./lib/ytdl')

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

author = 'lolikiller'
packname = 'Loli Killers'
banChats = false
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
		let sender = isGroup ? loli.participant : loli.key.remoteJid
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
        const mentionByTag = type == "extendedTextMessage" && loli.message.extendedTextMessage.contextInfo != null ? loli.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByReply = type == "extendedTextMessage" && loli.message.extendedTextMessage.contextInfo != null ? loli.message.extendedTextMessage.contextInfo.participant || "" : ""
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
		
		lolikiller.on('group-participants-update', async (anu) => {
			if (!welkom.includes(anu.jid)) return
			try {
				const mdata = await lolikiller.groupMetadata(anu.jid)
				console.log(anu)
				if (anu.action == 'add') {
					num = anu.participants[0]
					try {
						ppimg = await lolikiller.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
					} catch {
						ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
					teks = `*↯* Hallo @${num.split('@')[0]}\n*❏* Welcome to group *${mdata.subject}*`
					let buff = await getBuffer(ppimg)
					lolikiller.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
				} else if (anu.action == 'remove') {
					num = anu.participants[0]
					try {
						ppimg = await lolikiller.getProfilePicture(`${num.split('@')[0]}@c.us`)
					} catch {
						ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
					teks = `*↯* Bye bye🥳 @${num.split('@')[0]}`
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
						fakegroup2(`*↯ ${pushname} Kamu jangan toxic!!*`)
						setTimeout( () => {
							lolikiller.groupLeave(from) 
						}, 5000)
						setTimeout( () => {
							lolikiller.updatePresence(from, Presence.composing)
							fakegroup2(`*↯ [ TOXIC ] ↯*\n\n ${pushname} toxic aku kick ok!`)
						}, 0)
					} catch { lolikiller.sendMessage(from, `*↯* Untung Bukan Admin`, text , {quoted : faketoko}) }
				} else {
					return fakegroup2("*❏ Admin Toxic*")
				}
			}
		}
		
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
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
		
		var per = '*[          ] 0%*'
		const peri = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
		const perl = peri-getLevelingXp(sender) 
		const resl = Math.round(100-((perl/getLevelingXp(sender))*100))
		if (resl <= 10) {
			per = `*[■         ] ${resl}%*`
		} else if (resl <= 20) {
			per = `*[■■        ] ${resl}%*`
		} else if (resl <= 30) {
			per = `*[■■■       ] ${resl}%*`
		} else if (resl <= 40) {
			per = `*[■■■■      ] ${resl}%*`
		} else if (resl <= 50) {
			per = `*[■■■■■     ] ${resl}%*`
		} else if (resl <= 60) {
			per = `*[■■■■■■    ] ${resl}%*`
		} else if (resl <= 70) {
			per = `*[■■■■■■■   ] ${resl}%*`
		} else if (resl <= 80) {
			per = `*[■■■■■■■■  ] ${resl}%*`
		} else if (resl <= 90) {
			per = `*[■■■■■■■■■ ] ${resl}%*`
		} else if (resl <= 100) {
			per = `*[■■■■■■■■■■] ${resl}%*`
		}
			
		expiredCheck()
			
		const levelRole = getLevelingLevel(sender)
		var role = 'Warrior III'
		if (levelRole <= 3) {
   	        role = 'Warrior II'
   	    } else if (levelRole <= 5) {
   	        role = 'Warrior I'
   	    } else if (levelRole <= 7) {
            role = 'Elite III'
        } else if (levelRole <= 8) {
            role = 'Elite II'
        } else if (levelRole <= 9) {
   	        role = 'Elite I'
   	    } else if (levelRole <= 10) {
            role = 'Master IV'
   	    } else if (levelRole <= 11) {
   	        role = 'Master III'
   	    } else if (levelRole <= 12) {
   	        role = 'Master II'
   	    } else if (levelRole <= 13) {
   	        role = 'Master I'
        } else if (levelRole <= 14) {
   	        role = 'Grand Master V'
   	    } else if (levelRole <= 14) {
   	        role = 'Grand Master IV'
   	    } else if (levelRole <= 15) {
   	        role = 'Grand Master III'
   	    } else if (levelRole <= 16) {
   	        role = 'Grand Master II'
   	    } else if (levelRole <= 17) {
   	        role = 'Grand Master I'
   	    } else if (levelRole <= 18) {
   	        role = 'Epic V'
   	    } else if (levelRole <= 19) {
   	        role = 'Epic IV'
   	    } else if (levelRole <= 20) {
   	        role = 'Epic III'
   	    } else if (levelRole <= 21) {
   	        role = 'Epic II'
   	    } else if (levelRole <= 22) {
   	        role = 'Epic I'
   	    } else if (levelRole <= 23) {
   	        role = 'Legend V'
   	    } else if (levelRole <= 24) {
			role = 'Legend IV'
		} else if (levelRole <= 25) {
			role = 'Legend III'
		} else if (levelRole <= 26) {
			role = 'Legend II'
		} else if (levelRole <= 27) {
			role = 'Legend I'
		} else if (levelRole <= 28) {
			role = 'Mythic III'
		} else if (levelRole <= 29) {
			role = 'Mythic II'
		} else if (levelRole <= 30) {
			role = 'Mythic I'
		} else if (levelRole <= 31) {
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
			wait: '*↣ Wait*',
			success: '*↣ Success!*',
			wrongFormat: '*↣ Formatnya salah!',
			error: {
				stik: '*↣ Yah Error*',
				lk: '*↣ Linknya Error!*'
			},
			only: {
				band: `*↣ ${pushname} Kamu Sudah Di Ban!!*`,
				group: '*↣ Group Only!*',
				user_bot: `*↣ Silahkan ketik ${prefix}verify dulu!*`,
				premium: `*↣ ${pushname} Kamu Bukan User Premium!*`,
				level: '*↣ Leveling Belum Di Aktifkan!*',
				bot_admin: '*↣ Bot Harus Jadi Admin*',
				group_admin: `*↣ ${pushname} Kamu Bukan Admin!*`,
				nsfw: '*↣ Silahkan Aktifkan Mode Nsfw Terlebih Dahulu!*'
			}
		}
		
		const checkLimit = (sender) => {
			let found = false
			for (let lmt of _limit) {
				if (lmt.id === sender) {
					let limitCounts = limitawal - lmt.limit
					if (limitCounts <= 0) return lolikiller.sendMessage(from,`*❏═══[ LIMIT HABIS ]═══❏*\n\n*❏ Note :*\n_Limit bisa di dapatkan dengan cara ${prefix}buylimit dan dengan naik level_\n*❏════════[☆]═══════❏*`, text,{ quoted: loli})
					if (!isPrem & !loli.key.fromMe) {
						ini_txt = `*↯ [ LIMIT COUNTS ] ↯*\n\n`
						ini_txt += `*↣ Name :* ${pushname}\n`
						ini_txt += `*↣ Premium :* false\n`
						ini_txt += `*↣ Limit :* ${limitCounts}\n`
						ini_txt += `*↣ Note :* _Untuk mendapatkan limit bisa dengan cara ${prefix}buylimit/naik level\n\n`
						fakegroup2(ini_txt)
						found = true
					} else {
						ini_txt = `*↯ [ LIMIT COUNTS ] ↯*\n\n`
						ini_txt += `*↣ Name :* ${pushname}\n`
						ini_txt += `*↣ Premium :* true\n`
						ini_txt += `*↣ Limit :* Unlimited\n`
						ini_txt += `*↣ Note :* _Untuk mendapatkan limit bisa dengan cara ${prefix}buylimit/naik level\n\n`
						fakegroup2(ini_txt)
						found = true
					}
				}
			}
			if (found === false) {
				let obj = { id: sender, limit: 0 }
				_limit.push(obj)
				fs.writeFileSync('./database/limit.json', JSON.stringify(_limit))
				ini_txt = `*↯ [ LIMIT HABIS ] ↯*\n\n`
				ini_txt += `*↣ Name :* ${pushname}\n`
				ini_txt += `*↣ Limit :* ${limitCounts}\n`
				ini_txt += `*↣ Note :* _Untuk mendapatkan limit bisa dengan cara ${prefix}buylimit/naik level\n\n`
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
						ini_txt = `*↯ [ LIMIT HABIS ] ↯*\n\n*↣ Note :*\n_Limit bisa di dapatkan dengan cara ${prefix}buylimit dan dengan naik level_\n\n*❏════════[☆]═══════❏*`
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
				const obj = { id: sender, limit: 0 }
				_limit.push(obj)
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
				quoted: loli, contextInfo: {
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
						"description": "lolikiller Afianty",
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
                    ini_txt = `*↯ [ CONGRATS ] ↯*\n\n`
                    ini_txt += `*↣ Name :* ${pushname}\n`
                    ini_txt += `*↣ Nomer* : wa.me/${sender.split("@")[0]}\n`
                    ini_txt += `*↣ Xp* : ${getLevelingXp(sender)}\n`
                    ini_txt += `*↣ Limit* : +3\n`
                    ini_txt += `*↣ Role*: ${role}\n`
                    ini_txt += `*↣ Level* : ${getLevel} ➢ ${getLevelingLevel(sender)}\n`
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
			case 'status':
			fakegroup2(`*↣ STATUS*\n${banChats ? '*↣ SELF MODE*' : '*↣ PUBLIC MODE*'}\n${offline ? '*↣ OFFLINE*' : '*↣ ONLINE*'}`)
			break
			case 'self':
			if (!loli.key.fromMe) return
			fakegroup2(`*↣ SELF MODE*`)
			if (banChats === true) return
			uptime = process.uptime()
			banChats = true
			break
			case 'public':
			if (!loli.key.fromMe) return
			fakegroup2(`*↣ PUBLIC MODE*`)
			if (banChats === false) return
			banChats = false
			break
			case 'tes':
			if (!isUser) return reply(mess.only.user_bot)
			fakegroup('*↣ OK*')
			break
			case 'help':
			case 'menu':
			ini_txt = `
*○ [ lolikiller - Self Bot ] ○*

*❏═══[ YOUR INFO ]═══❏*
*║*
*║↣ Name :* ${pushname}
*║↣ Prefix :* [ ${prefix} ]
*║↣ Number :* wa.me/${sender.split("@")[0]}
*║↣ Pemium :* ${premi}
*║↣ Verify :* ${regis}
*❏════════[☆]═══════❏*

*❏═══[ REST API ]═══❏*
*║↣* https://lolikiller.herokuapp.com/api
*❏════════[☆]═══════❏*

*❏═══[ SCRIPT BOT ]═══❏*
*║↣* https://github.com/LoliKillers/LolKill-Self
*❏════════[☆]═══════❏*

*❏═══[ ABOUT BOT ]═══❏*
*║*
*║↣ ${prefix}tes*
*║↣ ${prefix}ping*
*║↣ ${prefix}runtime*
*║↣ ${prefix}join (link group)*
*║↣ ${prefix}info*
*║↣ ${prefix}status*
*║↣ ${prefix}blocklist*
*║↣ ${prefix}cekchat*
*║↣ ${prefix}verify*
*║↣ ${prefix}listprem*
*║↣ ${prefix}cekprem*
*║↣ ${prefix}dompet*
*║↣ ${prefix}transfer*
*❏════════[☆]═══════❏*

*❏═══[ FUN MENU ]═══❏*
*║*
*║↣ ${prefix}hilih*
*║↣ ${prefix}stickergif*
*║↣ ${prefix}mutual*
*║↣ ${prefix}next*
*║↣ ${prefix}apakah*
*║↣ ${prefix}kapankah*
*║↣ ${prefix}bisakah*
*║↣ ${prefix}slap*
*❏════════[☆]═══════❏*

*❏═══[ GAME MENU ]═══❏*
*║*
*║↣ ${prefix}tebakgambar*
*║↣ ${prefix}truth*
*║↣ ${prefix}dare*
*❏════════[☆]═══════❏*

*❏═══[ MEDIA MENU ]═══❏*
*║*
*║↣ ${prefix}ytmp3*
*║↣ ${prefix}ytmp4*
*║↣ ${prefix}ytsearch*
*║↣ ${prefix}igstalk*
*║↣ ${prefix}githubstalk*
*║↣ ${prefix}twitstalk*
*║↣ ${prefix}fbdl*
*║↣ ${prefix}pinterest*
*║↣ ${prefix}pinterestdl*
*║↣ ${prefix}wattpadsearch*
*❏════════[☆]═══════❏*

*❏═══[ CONVERT MENU ]═══❏*
*║*
*║↣ ${prefix}sticker*
*║↣ ${prefix}stickergif*
*║↣ ${prefix}toimg*
*║↣ ${prefix}tovn*
*║↣ ${prefix}ocr*
*║↣ ${prefix}tts*
*║↣ ${prefix}tomp3*
*║↣ ${prefix}tupai*
*║↣ ${prefix}slowmo*
*║↣ ${prefix}gemok*
*║↣ ${prefix}bass*
*❏════════[☆]═══════❏*

*❏═══[ STORAGE MENU ]═══❏*
*║*
*║↣ ${prefix}addvn*
*║↣ ${prefix}addvideo*
*║↣ ${prefix}addsticker*
*║↣ ${prefix}addimage*
*║↣ ${prefix}getvn*
*║↣ ${prefix}getvideo*
*║↣ ${prefix}getimage*
*║↣ ${prefix}getsticker*
*║↣ ${prefix}liststicker*
*║↣ ${prefix}listvn*
*║↣ ${prefix}listvideo*
*║↣ ${prefix}listimage*
*❏════════[☆]═══════❏*

*❏═══[ OWNER MENU ]═══❏*
*║*
*║↣ ${prefix}self*
*║↣ ${prefix}public*
*║↣ ${prefix}run*
*║↣ ${prefix}exec*
*║↣ ${prefix}return*
*║↣ ${prefix}on*
*║↣ ${prefix}off*
*║↣ ${prefix}setthumb*
*║↣ ${prefix}setfakeimg*
*║↣ ${prefix}setreply*
*║↣ ${prefix}setpp*
*║↣ ${prefix}upswtxt*
*║↣ ${prefix}upswimg*
*║↣ ${prefix}upswvid*
*║↣ ${prefix}clearall*
*║↣ ${prefix}leave*
*║↣ ${prefix}leavetime*
*║↣ ${prefix}addprem*
*║↣ ${prefix}delprem*
*║↣ ${prefix}block*
*║↣ ${prefix}unblock*
*║↣ ${prefix}bc*
*║↣ ${prefix}bcgc*
*❏════════[☆]═══════❏*

*❏═══[ GROUP MENU ]═══❏*
*║*
*║↣ ${prefix}group close/open*
*║↣ ${prefix}disapering on/off*
*║↣ ${prefix}leveling on/off*
*║↣ ${prefix}antilinkgc on/off*
*║↣ ${prefix}nsfw on/off*
*║↣ ${prefix}welcome on/off*
*║↣ ${prefix}closetime*
*║↣ ${prefix}opentime*
*║↣ ${prefix}tagall*
*║↣ ${prefix}stctag*
*║↣ ${prefix}imgtag*
*║↣ ${prefix}demote*
*║↣ ${prefix}promote*
*║↣ ${prefix}adminlist*
*║↣ ${prefix}add*
*║↣ ${prefix}kick*
*║↣ ${prefix}kickall*
*║↣ ${prefix}infoall*
*║↣ ${prefix}notif*
*║↣ ${prefix}delete*
*║↣ ${prefix}level*
*║↣ ${prefix}leaderboard*
*║↣ ${prefix}setname*
*║↣ ${prefix}setdesc*
*║↣ ${prefix}listbadword*
*║↣ ${prefix}delbadword*
*║↣ ${prefix}addbadword*
*❏════════[☆]═══════❏*

*❏═══[ PHOTOOXY MENU ]═══❏*
*║*
*║↣ ${prefix}orchids*
*║↣ ${prefix}petterns*
*║↣ ${prefix}sweetcandy*
*║↣ ${prefix}smoke*
*║↣ ${prefix}woodblock*
*║↣ ${prefix}cemetery*
*║↣ ${prefix}luxury*
*║↣ ${prefix}harrypotter*
*║↣ ${prefix}wooden*
*║↣ ${prefix}butterfly*
*║↣ ${prefix}watermelon*
*║↣ ${prefix}striking*
*║↣ ${prefix}metalic*
*║↣ ${prefix}embroidery*
*║↣ ${prefix}chrome*
*║↣ ${prefix}generator*
*║↣ ${prefix}flaming*
*║↣ ${prefix}textstar*
*║↣ ${prefix}gradient*
*║↣ ${prefix}glowrainbow*
*❏════════[☆]═══════❏*

*❏═══[ SFW & NSFW MENU ]═══❏*
*║*
*║↣ ${prefix}waifu*
*║↣ ${prefix}waifu2*
*║↣ ${prefix}neko*
*║↣ ${prefix}neko2*
*║↣ ${prefix}megumin*
*║↣ ${prefix}shinobu*
*║↣ ${prefix}bully*
*║↣ ${prefix}cuddle*
*║↣ ${prefix}cry*
*║↣ ${prefix}hug*
*║↣ ${prefix}awoo*
*║↣ ${prefix}kiss*
*║↣ ${prefix}lick*
*║↣ ${prefix}smug*
*║↣ ${prefix}bonk*
*║↣ ${prefix}pat*
*║↣ ${prefix}yeet*
*║↣ ${prefix}blush*
*║↣ ${prefix}wave*
*║↣ ${prefix}smile*
*║↣ ${prefix}highfive*
*║↣ ${prefix}handhold*
*║↣ ${prefix}nom*
*║↣ ${prefix}bite*
*║↣ ${prefix}slap*
*║↣ ${prefix}glomp*
*║↣ ${prefix}happy*
*║↣ ${prefix}kill*
*║↣ ${prefix}poke*
*║↣ ${prefix}wink*
*║↣ ${prefix}trap*
*║↣ ${prefix}blowjob*
*║↣ ${prefix}dance*
*❏════════[☆]═══════❏*


*○ [ lolikiller - Self Bot ] ○*
`
            fakestatus(ini_txt)
            break
            case 'mute':
            if (!loli.key.fromMe) return
            await lolikiller.modifyChat(from, ChatModification.mute, 10000*60*60*100)
            fakegroup(`*↣* Success Membisukan Group *${groupMetadata.subject}*`)
            break
            case 'addvn':
            if (!isUser) return reply(mess.only.user_bot)
			if (isLimit(sender)) return
			if (!isQuotedAudio) return reply('*↣ Reply vnnya!!*')
			svst = body.slice(7)
			if (!svst) return reply('*↣ Nama audionya apa?*')
			boij = JSON.parse(JSON.stringify(loli).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
			delb = await lolikiller.downloadMediaMessage(boij)
			audionye.push(`${svst}`)
			fs.writeFileSync(`./temp/audio/${svst}.mp3`, delb)
			fs.writeFileSync('./temp/audio.json', JSON.stringify(audionye))
			lolikiller.sendMessage(from, `*↣* Sukses Menambahkan Audio\n*↣* Cek dengan cara ${prefix}listvn`, MessageType.text, { quoted: loli })
			await limitAdd(sender)
			break
			case 'getvn':
            if (!isUser) return reply(mess.only.user_bot)
			if (isLimit(sender)) return
			namastc = body.slice(7)
			buffer = fs.readFileSync(`./temp/audio/${namastc}.mp3`)
			lolikiller.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: loli, ptt: true })
			await limitAdd(sender)
			break
			case 'listvn':
			case 'vnlist':
            if (!isUser) return reply(mess.only.user_bot)
			if (isLimit(sender)) return
			teks = '*↯* List Vn:*\n\n'
			for (let x of audionye) {
				teks += `*↣* ${x}\n`
				teks += `\n*↣ Total : ${audionye.length}`
			}
			lolikiller.sendMessage(from, teks.trim(), extendedText, { quoted: loli, contextInfo: { "mentionedJid": audionye } })
			await limitAdd(sender)
			break
			case 'addimage':
            if (!isUser) return reply(mess.only.user_bot)
			if (isLimit(sender)) return
			if (!isQuotedImage) return reply('*↣ Reply imagenya!!*')
			svst = body.slice(10)
			if (!svst) return reply('*↣ Nama imagenya apa?*')
			boij = JSON.parse(JSON.stringify(loli).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
			delb = await lolikiller.downloadMediaMessage(boij)
			imagenye.push(`${svst}`)
			fs.writeFileSync(`./temp/image/${svst}.jpeg`, delb)
			fs.writeFileSync('./temp/image.json', JSON.stringify(imagenye))
			lolikiller.sendMessage(from, `*↣* Sukses Menambahkan Image\n*↣* Cek dengan cara ${prefix}listimage`, MessageType.text, { quoted: loli })
			await limitAdd(sender)
			break
			case 'getimage':
            if (!isUser) return reply(mess.only.user_bot)
			if (isLimit(sender)) return
			namastc = body.slice(10)
			buffer = fs.readFileSync(`./temp/image/${namastc}.jpeg`)
			lolikiller.sendMessage(from, buffer, image, { quoted: loli, caption: `Result From Database : ${namastc}.jpeg` })
			await limitAdd(sender)
			break
			case 'imagelist':
			case 'listimage':
            if (!isUser) return reply(mess.only.user_bot)
			if (isLimit(sender)) return
			teks = '*↯ List Image :*\n\n'
			for (let x of imagenye) {
				teks += `*↣* ${x}\n`
			}
			teks += `\n*↣ Total : ${imagenye.length}*`
			lolikiller.sendMessage(from, teks.trim(), extendedText, { quoted: loli, contextInfo: { "mentionedJid": imagenye } })
			await limitAdd(sender)
			break
			case 'addvideo':
            if (!isUser) return reply(mess.only.user_bot)
			if (isLimit(sender)) return
			if (!isQuotedVideo) return reply('*↣ Reply videonya!*')
			svst = body.slice(10)
			if (!svst) return reply('*↣ Nama videonya apa?*')
			boij = JSON.parse(JSON.stringify(loli).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
			delb = await lolikiller.downloadMediaMessage(boij)
			videonye.push(`${svst}`)
			fs.writeFileSync(`./temp/video/${svst}.mp4`, delb)
			fs.writeFileSync('./temp/video.json', JSON.stringify(videonye))
			lolikiller.sendMessage(from, `*↣* Success Menambahkan Video\n*↣* Cek dengan cara ${prefix}listvideo`, MessageType.text, { quoted: loli })
			await limitAdd(sender)
			break
			case 'getvideo':
            if (!isUser) return reply(mess.only.user_bot)
			if (isLimit(sender)) return
			namastc = body.slice(10)
			buffer = fs.readFileSync(`./temp/video/${namastc}.mp4`)
			lolikiller.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: loli })
			await limitAdd(sender)
			break
			case 'listvideo':
			case 'videolist':
            if (!isUser) return reply(mess.only.user_bot)
			if (isLimit(sender)) return
			teks = '*↯ List Video :*\n\n'
			for (let x of videonye) {
				teks += `*↣* ${x}\n`
			}
			teks += `\n*↣ Total : ${videonye.length}*`
			lolikiller.sendMessage(from, teks.trim(), extendedText, { quoted: loli, contextInfo: { "mentionedJid": videonye } })
			await limitAdd(sender)
			break	
			case 'addsticker':
            if (!isUser) return reply(mess.only.user_bot)
			if (isLimit(sender)) return
			if (!isQuotedSticker) return reply('*↣ Reply stikernya*')
			svst = body.slice(12)
			if (!svst) return reply('*↣ Nama stickernya apa?*')
			boij = JSON.parse(JSON.stringify(loli).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
			delb = await lolikiller.downloadMediaMessage(boij)
			setiker.push(`${svst}`)
			fs.writeFileSync(`./temp/sticker/${svst}.webp`, delb)
			fs.writeFileSync(`./temp/stik.json`, JSON.stringify(setiker))
			lolikiller.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststicker`, MessageType.text, { quoted: loli })
			await limitAdd(sender)
			break
			case 'stickerlist':
			case 'liststicker':
            if (!isUser) return reply(mess.only.user_bot)
			if (isLimit(sender)) return
			teks = '*↯ Sticker List :*\n\n'
			for (let x of setiker) {
				teks += `*↣ ${x}*\n`
			}
			teks += `\n*↣ Total : ${setiker.length}*`
			lolikiller.sendMessage(from, teks.trim(), extendedText, { quoted: loli, contextInfo: { "mentionedJid": setiker } })
			await limitAdd(sender)
			break
			case 'getsticker':
            if (!isUser) return reply(mess.only.user_bot)
			if (isLimit(sender)) return
			namastc = body.slice(12)
			result = fs.readFileSync(`./temp/sticker/${namastc}.webp`)
			lolikiller.sendMessage(from, result, sticker, {quoted :loli})
			await limitAdd(sender)
			break
			case 'bass':                 
            if (!isUser) return reply(mess.only.user_bot)
			if (isLimit(sender)) return
			encmedia = JSON.parse(JSON.stringify(loli).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await lolikiller.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.mp3')
			exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
				fs.unlinkSync(media)
				if (err) return reply('Error!')
				hah = fs.readFileSync(ran)
				lolikiller.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: loli})
				fs.unlinkSync(ran)
			})
			await limitAdd(sender)
			break
			case 'gemok':
            if (!isUser) return reply(mess.only.user_bot)
			if (isLimit(sender)) return
			encmedia = JSON.parse(JSON.stringify(loli).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await lolikiller.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.mp3')
			exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
				fs.unlinkSync(media)
				if (err) return reply('Error!')
				hah = fs.readFileSync(ran)
				lolikiller.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: loli})
				fs.unlinkSync(ran)
			})
			await limitAdd(sender)
			break
			case 'tupai':
            if (!isUser) return reply(mess.only.user_bot)
			if (isLimit(sender)) return
			encmedia = JSON.parse(JSON.stringify(loli).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await lolikiller.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.mp3')
			exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
				fs.unlinkSync(media)
				if (err) return reply('Error!')
				hah = fs.readFileSync(ran)
				lolikiller.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: loli})
				fs.unlinkSync(ran)
			})
			await limitAdd(sender)
			break
			case 'slowmo':
            if (!isUser) return reply(mess.only.user_bot)
			if (isLimit(sender)) return
			encmedia = JSON.parse(JSON.stringify(loli).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await lolikiller.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.mp3')
			exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
				fs.unlinkSync(media)
				if (err) return reply('Error!')
				uhh = fs.readFileSync(ran)
				lolikiller.sendMessage(from, uhh, audio, {mimetype: 'audio/mp4', ptt:true, quoted: loli})
				fs.unlinkSync(ran)
			})
			await limitAdd(sender)
			break
			case 'tomp3':
            if (!isUser) return reply(mess.only.user_bot)
			if (isLimit(sender)) return
			lolikiller.updatePresence(from, Presence.composing)
			if (!isQuotedVideo) return reply('itu video?')
			reply(mess.only.wait)
			encmedia = JSON.parse(JSON.stringify(loli).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
			media = await lolikiller.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.mp4')
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
				fs.unlinkSync(media)
				if (err) return reply('Error')
				buffer = fs.readFileSync(ran)
				lolikiller.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: loli })
				fs.unlinkSync(ran)
			})
			await limitAdd(sender)
			break 
       		case 'listonline': 
            if (!isGroup) return reply(mess.only.group)
            if (!isGroupAdmins & !loli.key.fromMe) return reply(mess.only.group_admin)
            let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
            let online = [...Object.keys(lolikiller.chats.get(ido).presences), lolikiller.user.jid]
            lolikiller.sendMessage(from, '*↣ List Online:*\n' + online.map(v => '*↣* @' + v.replace(/@.+/, '')).join`\n`, text, { quoted: loli		    })
			break 
			case 'bcgc':
            if (!isGroup) return reply(mess.only.group)
            if (!loli.key.fromMe) return
            if (args.length < 1) return reply('.......')
            anu = await groupMembers
            if (isMedia && !loli.message.videoMessage || isQuotedImage) {
				const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(loli).replace('quotedM','m')).message.extendedTextMessage.contextInfo : loli
				buff = await lolikiller.downloadMediaMessage(encmedia)
				for (let _ of anu) {
					lolikiller.sendMessage(_.jid, buff, image, {caption: `↯ BROADCAST GROUP ↯*\n\n↣ From Group : ${groupName}\n↣ From : wa.me/${(sender.split('@')[0])}\n↣ Message : ${body.slice(6)}`})
				}
				reply('')
			} else {
				for (let _ of anu) {
					sendMess(_.jid, `*↯ BROADCAST GROUP ↯*\n\n↣ From Group : ${groupName}\n↣ From : wa.me/${(sender.split('@')[0])}\n↣ Message : ${body.slice(6)}`)
				}
				reply('↣ Sukses broadcast group')
			}
			break
			case 'kickall':
			if (!isGroup) return reply(mess.only.group)
			if (!isBotGroupAdmins) return reply(mess.only.bot_admin)
			if (!loli.key.fromMe) return
			members_id = []
			teks = (args.length > 1) ? body.slice(8).trim() : ''
			teks += '\n\n'
			for (let mem of groupMembers) {
				teks += `*^_^* ${mem.jid.split('@')[0]}\n`
				members_id.push(mem.jid)
			}
			mentions(teks, members_id, true)
			lolikiller.groupRemove(from, members_id)
			break 
			case 'addbadword':
			if (!isGroupAdmins & !loli.key.fromMe) return reply(mess.only.group_admin)
			if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
			let bw = body.slice(12)
			bad.push(bw)
			fs.writeFileSync('./database/bad.json', JSON.stringify(bad))
			reply('Success Menambahkan Bad Word!')
			break
			case 'delbadword':
			if (!isGroupAdmins & !loli.key.fromMe) return reply(mess.only.group_admin)
			if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
			let dbw = body.slice(12)
			bad.splice(dbw)
			fs.writeFileSync('./database/bad.json', JSON.stringify(bad))
			reply('Success Menghapus BAD WORD!')
			break 
			case 'listbadword':
			let lbw = `Ini adalah list BAD WORD\n↣ Total : ${bad.length}\n`
			for (let i of bad) {
				lbw += `➸ ${i.replace(bad)}\n`
			}
			await reply(lbw)
			break 
			case 'nobadword':
			if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins & !loli.key.fromMe) return reply(mess.only.group_admin)
			if (args.length < 1) return reply(`*↣ Example :*\n${prefix + command} on untuk mengaktifkan\n${prefix + command} off untuk menonaktifkan`)
			if (args[0] === 'on') {
				if (isBadWord) return reply('*fitur BadWord sudah aktif sebelum nya*')
				badword.push(from)
				fs.writeFileSync('./database/badword.json', JSON.stringify(badword))
				reply(`*↣* Success mengaktifkan fitur nobadword di group\n*${groupMetadata.subject}*`)
			} else if (args[0] === 'off') {
				badword.splice(from, 1)
				fs.writeFileSync('./database/badword.json', JSON.stringify(badword))
				reply(`*↣* Success menonaktifkan fitur nobadword di group\n*${groupMetadata.subject}*`)
			} else {
				reply(`*↣ Example :*\n${prefix + command} on untuk mengaktifkan\n${prefix + command} off untuk menonaktifkan`)
			}
			break
			case 'welcome':
			if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins & !loli.key.fromMe) return reply(mess.only.group_admin)
			if (args.length < 1) return reply(`*↣ Example :*\n${prefix + command} on untuk mengaktifkan\n${prefix + command} off untuk menonaktifkan`)
			if (args[0] === 'on') {
				if (isWelkom) return reply('*SUDAH AKTIF* !!!')
				welkom.push(from)
				fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
				reply(`*↣* Success mengaktifkan fitur welcome di group\n*${groupMetadata.subject}*`)
			} else if ((args[0]) === 'off') {
				welkom.splice(from, 1)
				fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
				reply(`*↣* Success menonaktifkan fitur welcom di group\n*${groupMetadata.subject}*`)
			} else {
				reply(`*↣ Example :*\n${prefix + command} on untuk mengaktifkan\n${prefix + command} off untuk menonaktifkan`)
			}
			break
			case 'setdesc':
			if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins & !loli.key.fromMe) return reply(mess.only.group_admin)
			if (!isBotGroupAdmins) return reply(mess.only.bot_admin)
			lolikiller.groupUpdateDescription(from, `${body.slice(9)}`)
			lolikiller.sendMessage(from, '↦ Succes, Ganti Deskripsi Grup', text, {quoted: loli})
			break
			case 'setname':
			if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins & !loli.key.fromMe) return reply(mess.only.group_admin)
			if (!isBotGroupAdmins) return reply(mess.only.bot_admin)
			lolikiller.groupUpdateSubject(from, `${body.slice(9)}`)
			lolikiller.sendMessage(from, '↦ Succes, Ganti Nama Grup', text, {quoted: loli})
			break
			case 'tts':
            if (!isUser) return reply(mess.only.user_bot)
			if (isLimit(sender)) return
			if (args.length < 1) return lolikiller.sendMessage(from, '↦ Diperlukan kode bahasa!!', text, {quoted: loli})
			const gtts = require('./lib/gtts')(args[0])
			if (args.length < 2) return lolikiller.sendMessage(from, '↦ Textnya mana om', text, {quoted: loli})
			dtt = body.slice(8)
			ranm = getRandom('.mp3')
			rano = getRandom('.ogg')
			dtt.length > 600
			? reply('↦ Textnya kebanyakan om')
			: gtts.save(ranm, dtt, function() {
				exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
					fs.unlinkSync(ranm)
					buffer = fs.readFileSync(rano)
					if (err) return reply('↦ Gagal om:(')
					lolikiller.sendMessage(from, buffer, audio, {quoted: loli, ptt:true})
					fs.unlinkSync(rano)
				})
			})
			await limitAdd(sender)
			break
			case 'ocr': 
            if (!isUser) return reply(mess.only.user_bot)
			if (isLimit(sender)) return
			if ((isMedia && !loli.message.videoMessage || isQuotedImage) && args.length == 0) {
				const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(loli).replace('quotedM','m')).message.extendedTextMessage.contextInfo : loli
				const media = await lolikiller.downloadAndSaveMediaMessage(encmedia)
				reply(mess.wait)
				await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
				.then(teks => {
					reply('↦ Teks kebanyakan')
					fs.unlinkSync(media)
				})
				.catch(err => {
					reply(mess.error)
					fs.unlinkSync(media)
				})
			} else {
				reply(`Reply/Tag gambar dengan caption ${prefix + command}`)
			}
			await limitAdd(sender)
			break
			case 'truth':
            if (!isUser) return reply(mess.only.user_bot)
			if (isLimit(sender)) return
			const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
			const ttrth = trut[Math.floor(Math.random() * trut.length)]
			truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
			lolikiller.sendMessage(from, truteh, image, { caption: '*↦ Truth*\n\n'+ ttrth, quoted: loli })
			await limitAdd(sender)
			break
			case 'dare':
            if (!isUser) return reply(mess.only.user_bot)
			if (isLimit(sender)) return
			const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "🦄??" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
			const der = dare[Math.floor(Math.random() * dare.length)]
			tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
			lolikiller.sendMessage(from, tod, image, { quoted: loli, caption: '*↦ Dare*\n\n'+ der })
			await limitAdd(sender)
			break
			case 'apakah':
            if (!isUser) return reply(mess.only.user_bot)
			if (isLimit(sender)) return
			if (args.length < 1) return reply(`Example : ${prefix + command} lolikiller cantik`)
			apakah = body.slice(1)
			const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
			const kah = apa[Math.floor(Math.random() * apa.length)]
			lolikiller.sendMessage(from, '*↣ Pertanyaan* : '+apakah+'\n\nJawaban : '+ kah, text, { quoted: loli })
			await limitAdd(sender)
			break
			case 'kapankah':
            if (!isUser) return reply(mess.only.user_bot)
			if (isLimit(sender)) return
			if (args.length < 1) return reply(`Example : ${prefix + command} lolikiller cantik`)
			kapankah = body.slice(1)
			const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
			const koh = kapan[Math.floor(Math.random() * kapan.length)]
			lolikiller.sendMessage(from, '*↣ Pertanyaan* : '+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: loli })
			await limitAdd(sender)
			break
			case 'bisakah':
            if (!isUser) return reply(mess.only.user_bot)
			if (isLimit(sender)) return
			if (args.length < 1) return reply(`Example : ${prefix + command} lolikiller cantik`)
			bisakah = body.slice(1)
			const bisa =['Bisa','Tidak Bisa','Coba Ulangi']
			const keh = bisa[Math.floor(Math.random() * bisa.length)]
			lolikiller.sendMessage(from, '*↣ Pertanyaan* : '+bisakah+'\n\nJawaban : '+ keh, text, { quoted: loli })
			await limitAdd(sender)
			break
			case 'slap':
            if (!isUser) return reply(mess.only.user_bot)
			if (isLimit(sender)) return
			kapankah = body.slice(1)
			const slap =['anjing','babi lu','anak anjing','udah tolol nub Lagi','muka lo kek monyet','udah jomblo sendirian lagi dirumah tolol','so so an mau punya pacar muka aja kek monyet lepass dari kandang','ganteng doang di toxic aja dibilang baperan','pantek kau','bangsat kau','ku entod kalian nangis kau','memek lu semua','lihat anak anjing lagi baca','ganteng doang jemput cewe dipanggang','kamu cantik beb bullshit anjing cowo buaya','anak dajjal','puki lu','anjing ngajak gelud','sama hantu takut cupu ngentod','cupu cupu aja gausah bacot','kontol lu semua','bocah lu semua kontol','3 Hari Lagi']
			const ple = slap[Math.floor(Math.random() * slap.length)]
			fakegroup2(ple)
			await limitAdd(sender)
			break
			case 'transfer':
            if (!isUser) return reply(mess.only.user_bot)
            if (!q.includes('|')) return  reply(`Example :\n${prefix + command} @6285852335038|300`)
            const tujuan = q.substring(0, q.indexOf('|') - 1)
            const jumblah = q.substring(q.lastIndexOf('|') + 1)
            if(isNaN(jumblah)) return await reply('Jumlah harus angka!!')
            if (jumblah < 100 ) return reply(`Minimal transfer 100`)
            if (checkATMuser(sender) < jumblah) return reply(`Uang mu tidak cukup untuk melakukan transfer`)
            const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
            fee = 0.005 *  jumblah
            hasiltf = jumblah - fee
            addKoinUser(tujuantf, hasiltf)
            confirmATM(sender, jumblah)
            addKoinUser('6283803728334@s.whatsapp.net', fee)
            reply(`*↯ [ SUCCESS ] ↯*\n\n*↣ Pengirim* : +${sender.split("@")[0]}\n*↣ Penerima* : +${tujuan}\n*↣ Jumblah* : ${jumblah}\n*↣ Pajak : ${fee}`)
            break
            case 'next':
            if (!isUser) return reply(mess.only.user_bot)
			if (isLimit(sender)) return
			if (isGroup) return  reply( '↦ Command ini tidak bisa digunakan di dalam grup!')
			anug = getRegisteredRandomId(usher).replace('@s.whatsapp.net','')
			await reply('↦ Looking for a partner...')
			await reply(`wa.me/${anug}`)
			await reply( `↦ Partner found\n*${prefix}next* — find a new partner`)
			await limitAdd(sender)
            break
            case 'mutual':
            if (!isUser) return reply(mess.only.user_bot)
			if (isLimit(sender)) return
			if (isGroup) return  reply( '↦ Command ini tidak bisa digunakan di dalam grup!')
			anug = getRegisteredRandomId(usher).replace('@s.whatsapp.net','')
			await reply('↦ Looking for a partner...')
			await reply(`wa.me/${anug}`)
			await reply( `↦ Partner found!\n*${prefix}next* — find a new partner`)
			await limitAdd(sender)
            break
            case 'leaderboard':
            case 'lb':
            bo = args[0]
            _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
            uang.sort((a, b) => (a.uang < b.uang) ? 1 : -1)
            let leaderboardlvl = '*↯ [ LEADERBOARD LEVEL ] ↯*\n\n'
            let leaderboarduang = '*↯ [ LEADERBOARD UANG ] ↯*\n\n'
            let nom = 0
            try {
				for (let i = 0; i < 10; i++) {
					nom++
					leaderboardlvl += `*[ ${nom} ]* wa.me/${_level[i].id.replace('@s.whatsapp.net', '')}\n*↣ XP*: ${_level[i].xp}\n*↣ Level*: ${_level[i].level}\n`
					leaderboarduang += `*[ ${nom} ]* wa.me/${uang[i].id.replace('@s.whatsapp.net', '')}\n*↣ Uang*: _Rp${uang[i].uang}_\n*↣ Limit*: ${limitawal - _limit[i].limit}\n`
				}
				await reply(leaderboardlvl)
				await reply(leaderboarduang)
			} catch (err) {
				console.error(err)
				await reply(`*↣ Minimal 10 user untuk bisa mengakses database`)
			}
			break
			case 'bc': 
			if (!loli.key.fromMe) return
			if (args.length < 1) return reply('.......')
			anu = await lolikiller.chats.all()
			if (isMedia && !loli.message.videoMessage || isQuotedImage) {
				const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(loli).replace('quotedM','m')).message.extendedTextMessage.contextInfo : loli
				buff = await lolikiller.downloadMediaMessage(encmedia)
				for (let _ of anu) {
					lolikiller.sendMessage(_.jid, buff, image, {caption: `*↯ [ SELF BROADCAST ] ↯*\n\n${body.slice(4)}`})
				}
				reply('*↣ Success Broadcast*')
			} else {
				for (let _ of anu) {
					sendMess(_.jid, `*↯ [ SELF BROADCAST ] ↯*\n\n${body.slice(4)}`)
				}
				reply('*↣ Success Broadcast*')
			}
			break
			case 'block':
			if (!loli.key.fromMe) return
			lolikiller.updatePresence(from, Presence.composing) 
            if (args.length < 1 ) return reply('↦ tag member')
            mente = `${args[0].replace('@','')}@c.us`
            lolikiller.blockUser(mente, "add")
            lolikiller.sendMessage(from, `*↣ Perintah Diterima,* memblokir wa.me/${mente}`, text,{quoted: faketoko})
            break
            case 'unblock':
            if (!loli.key.fromMe) return
            lolikiller.updatePresence(from, Presence.composing) 
            if (args.length < 1 ) return reply('↦ tag member')
            mente = `${args[0].replace('@','')}@c.us`
            lolikiller.blockUser(mente, "remove")
            lolikiller.sendMessage(from, `*↣ Perintah Diterima,* membuka blokir wa.me/${mente}`, text,{quoted: faketoko})
            break 
            case 'nsfw':
			if (!isGroup) return reply(mess.only.group)
		    if (!isUser) return reply(mess.only.user_bot)
			if (!loli.key.fromMe & !isGroupAdmins) return reply(mess.only.group_admin)
			if (args.length < 1) return reply(`*↣ Example :*\n${prefix + command} on untuk mengaktifkan\n${prefix + command} off untuk menonaktifkan`)
			if ((args[0]) === 'on') {
				if (isNsfw) return reply(' *↦ sudah aktif*  !!')
				nsfw.push(from)
				fs.writeFileSync('./database/nsfw.json', JSON.stringify(nsfw))
				reply(`*↣* Success mengaktifkan fitur nsfw di group\n*${groupMetadata.subject}*`)
			} else if ((args[0]) === 'off') {
				nsfw.splice(from, 1)
				fs.writeFileSync('./database/nsfw.json', JSON.stringify(nsfw))
				reply(`*↦* Success menonaktifkan fitur nsfw di group\n*${groupMetadata.subject}*`)
			} else {
				reply(`*↦  Example :*\n${prefix + command} on untuk mengaktifkan\n${prefix + command} off untuk menonaktifkan`)
			}
			break
			case 'antilinkgc':
			if (!isGroup) return reply(mess.only.group)
			if (!isBotGroupAdmins) return reply(mess.only.bot_admin)
		    if (!isUser) return reply(mess.only.user_bot)
			if (!loli.key.fromMe & !isGroupAdmins) return reply(mess.only.group_admin)
			if (args.length < 1) return reply(`*↦  Example :*\n${prefix + command} on untuk mengaktifkan\n${prefix + command} off untuk menonaktifkan`)
			if ((args[0]) === 'on') {
				if (isAntiLink) return reply('*↦  Anti Link Sudah Aktif!!*')
				antilink.push(from)
				fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
				reply(`*↦* Success mengaktifkan fitur anti link di group\n*${groupMetadata.subject}*`)
			} else if ((args[0]) === 'off') {
				if (!isAntiLink) return reply('*↦  Anti link sudah off')
				antilink.splice(from, 1)
				fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
				reply(`*↦* Success menonaktifkan fitur anti link di group\n*${groupMetadata.subject}*`)
			} else {
				reply(`*↦ Example :*\n${prefix + command} on untuk mengaktifkan\n${prefix + command} off untuk menonaktifkan`)
			}
			break
			case 'leveling':
			if (!isGroup) return reply(mess.only.group)
		    if (!isUser) return reply(mess.only.user_bot)
			if (!loli.key.fromMe & !isGroupAdmins) return reply(mess.only.group_admin)
			if (args.length < 1) return reply(`*↦ Example :*\n${prefix + command} on untuk mengaktifkan\n${prefix + command} off untuk menonaktifkan`)
			if (args[0] === 'on') {
				if (isLeveling) return reply('*↦ Leveling Sudah Aktif!!*')
				_leveling.push(from)
				fs.writeFileSync('./database/leveling.json', JSON.stringify(_leveling))
				reply(`*↦* Succes Mengaktifkan Leveling Di Group\n*${groupMetadata.subject}*`)
			} else if (args[0] === 'off') {
				_leveling.splice(from, 1)
				fs.writeFileSync('./database/leveling.json', JSON.stringify(_leveling))
				reply(`*↦* Succes Menonaktifkan Leveling Di Group\n*${groupMetadata.subject}*`)
			} else {
				reply(`*↦ Example :*\n${prefix + command} on untuk mengaktifkan\n${prefix + command} off untuk menonaktifkan`)
			}
			break 
				case 'level':
                if (!isUser) return reply(mess.only.user_bot)
                if (!isGroup) return reply(mess.only.group)
                if (!isLeveling) return reply(mess.only.level)
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
                if (userLevel === undefined && userXp === undefined) return reply(`↦ Level Mu Masih Rendah!!`)
                const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
            ini_txt = `*❏═══[ LEVEL ]═══❏*
*║*
*║↦ Name :* ${pushname}
*║↦ Nomor :* ${sender.split("@")[0]}
*║↦ Xp :* ${userXp}
*║↦ Level :* ${userLevel}
*❏════════[☆]═══════❏*`
                fakegroup(ini_txt)
				break 
				case 'dompet':
                if (!isUser) return reply(mess.only.user_bot)
				const kantong = checkATMuser(sender)
            ini_txt = `*❏═══[ ATM ]═══❏*
*║*
*║↦ Name :* ${pushname}
*║↦ Nomor :* ${sender.split("@")[0]}
*║↦ Uang :* ${kantong}
*❏════════[☆]═══════❏*`
				fakegroup2(ini_txt)
				break
				case 'setmemlimit':
				if (!loli.key.fromMe) return
				if (args.length < 1) return
				if (isNaN(args[0])) return reply('limit harus angka')
				memberlimit = args[0]
				reply(`*↦ Change Member limit To ${memberlimit}*`)
				break 
				case 'buylimit':
                if (!isUser) return reply(mess.only.user_bot)
				payout = body.slice(10)
				if(isNaN(payout)) return await reply('*↦ Limit harus angka!!*')
				const koinPerlimit = 300
				const total = koinPerlimit * payout
				if ( checkATMuser(sender) <= total) return reply(`*↦ ${pushname} Uang lu kaga cukup!!*`)
				if ( checkATMuser(sender) >= total ) {
					confirmATM(sender, total)
					bayarLimit(sender, payout)
					await reply(`*↯ [ SUCCESS BUY LIMIT ] ↯*\n\n*↦ Pengirim* : Loli Killers\n*↦ Penerima* : ${pushname}\n*↦ Pembelian* : ${payout} \n*↦ Harga* : ${koinPerlimit}/limit\n*↦ Sisa Uang* : ${checkATMuser(sender)}\n*↦  Ns Pembayaran* : ${createSerial(15)}`)
				} 
				break
				case 'giftlimit': 
				if (!loli.key.fromMe,!isPrem) return
				const nomerr = args[0].replace('@','')
                const jmla = args[1]
                if (jmla <= 1) return reply(`*↦ Minimal gift limit 1*`)
                if (isNaN(jmla)) return reply(`*↦ Limit harus angka*`)
                if (!nomerr) return reply(`*↦ Format salah*\n*↦ Example :* ${prefix}giftlimit @6285852335038 10`)
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
                            const result = `*↯ [ GIFT LIMIT ] ↯*

*↦ User :* @${updated.id.replace('@s.whatsapp.net','')}
*↦ Limit :* ${limitawal-updated.limit}
*↦ Date :* ${moment().format('DD/MM/YY HH:mm:ss')}
`
                            console.log(_limit[found])
                            fs.writeFileSync('./database/limit.json',JSON.stringify(_limit));
                            fakegroup2(result)
                        } else {
                                reply(`↦ Maaf, nomor ${nomerr} tidak terdaftar di database!`)
                        }
                break
            case 'limit':
			if (!isUser) return reply(mess.only.user_bot)
            checkLimit(sender)
            break
            case 'delprem':
            if (!loli.key.fromMe) return
            if (args.length < 1 ) return reply('↦ tag member')
            mente = `${args[0].replace('@','')}@s.whatsapp.net`
            const dnom = {id: mente , expired: Date.now() + toMs(expired) }
            for( var i = 0; i < arr.length; i++){
				if ( arr[i] === mente) {
					arr.splice(i, 1);
					i--;
					fs.writeFileSync('./database/prem.json',JSON.stringify(arr))
				}
			}
			ini_txt = `*↯ [ PREMIUM DELETE ] ↯*
*↦ ID :* ${mente}
*↦ Name :* ${dnom}
`
            fajegroup2(ini_txt)
            break
            case 'listprem':
            if (!isUser) return reply(mess.only.user_bot)
            let listPremi = '*↯ [ PREMIUM LIST ] ↯*\n*║*\n'
            let nomorList = 0
            const deret = getAllPremiumUser()
            const arrayPremi = []
            for (let i = 0; i < deret.length; i++) {
				const checkExp = ms(getPremiumExpired(deret[i]) - Date.now())
				arrayPremi.push(getAllPremiumUser()[i])
				listPremi += `*↦ ID :* wa.me/${getAllPremiumUser()[i].split("@")[0]}\n*║↦ Expired :* ${checkExp.days} day ${checkExp.hours} hour ${checkExp.minutes} minute\n`
			}
			await fakegroup2(listPremi)
			break
			case 'verifygc':
			if (!loli.key.fromMe) return
			const gcexp = args[0]
			const gcverify = {name: groupMetadata.subyek, id: from, expired: Date.now() + toMs(gcexp) }
			gc_verify.push(gcverify)
			fs.writeFileSync('./database/gcverify.json',JSON.stringify(gc_verify))
			ini_txt = `*❏═══[ GROUP VERIFY ]═══❏*\n`
			ini_txt += `*║*\n`
			ini_txt += `*║↦ Name :* ${groupMetadata.subyek}\n`
			ini_txt += `*║↦ ID :* ${gcver}\n`
			ini_txt += `*║↦ Expired :* ${gcexp}\n`
			ini_txt += `*❏════════[☆]═══════❏*`
			fakegroup2(ini_txt)
			break
            case 'addprem':
            if (!loli.key.fromMe) return
                const usrprem = q.substring(0, q.indexOf('|') - 1)
                const usrexp = q.substring(q.lastIndexOf('|') + 1)
                const usrpremi = `${usrprem.replace("@", '')}@s.whatsapp.net`
            const pnom = {id: usrpremi , expired: Date.now() + toMs(usrexp) }
            prem.push(pnom) 
            fs.writeFileSync('./database/prem.json',JSON.stringify(prem))
            ini_txt = `*❏═══[ PREMIUM ADD ]═══❏*
*║*
*║↦ ID :* ${usrpremi}
*║↦ Expired :* ${usrexp}
*❏════════[☆]═══════❏*`
            fakegroup2(ini_txt)
            break
            case 'cekprem':
            if (!isUser) return reply(mess.only.user_bot)
            const cekExp = ms(getPremiumExpired(sender) - Date.now())
            ini_txt = `*❏═══[ PREMIUM EXPIRED ]═══❏*
*║*
*║↦ ID :* ${sender.split('@')[0]}
*║↦ Name :* ${pushname}
*║↦ Expired :* ${cekExp.days} day ${cekExp.hours} hour ${cekExp.minutes} minute
*❏════════[☆]═══════❏*`
            fakegroup2(ini_txt)
            break
				case 'verify':
                if (isUser) return  reply(`*❏* ${pushname} Lu udah terdaftar`)
                const serialUser = createSerial(20)
					lolikiller.updatePresence(from, Presence.composing)
					try {
					ppimg = await lolikiller.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
					} catch {
					ppimg = 'https://i.ibb.co/9ncPnhp/20210523-101008.jpg'
					}
                if (isGroup) {
                    addRegisteredUser(sender, time, serialUser)
                    ini_txt = `*❏═══[ USER VERIFY ]═══❏*\n`
                    ini_txt += `*║*\n`
                    ini_txt += `*║↦ Nama :* ${pushname}\n`
                    ini_txt += `*║↦ Nomer :* wa.me/${sender.split("@")[0]}\n`
                    ini_txt += `*║↦ Date :* ${time}\n`
                    ini_txt += `*║↦ Ns :* ${serialUser}\n`
                    ini_txt += `*❏════════[☆]═══════❏*\n`
                    fakegroup(ini_txt)
                    addATM(sender)
                    addLevelingId(sender)
                    checkLimit(sender)
                    console.log(color('[ REGISTER ]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
                } else {
                    addRegisteredUser(sender, time, serialUser)
                    ini_txt = `*❏═══[ USER VERIFY ]═══❏*\n`
                    ini_txt += `*║*\n`
                    ini_txt += `*║↦ Nama :* ${pushname}\n`
                    ini_txt += `*║↦ Nomer :* wa.me/${sender.split("@")[0]}\n`
                    ini_txt += `*║↦ Date :* ${time}\n`
                    ini_txt += `*║↦ Ns :* ${serialUser}\n`
                    ini_txt += `*❏════════[☆]═══════❏*\n`
                    fakegroup(ini_txt)
                    addATM(sender)
                    addLevelingId(sender)
                    checkLimit(sender)
                    console.log(color('[ REGISTER ]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
                }
				break
				case 'caklontong':
				if (!isUser) return reply(mess.only.user_bot)
			if (isLimit(sender)) return
					get_result = await fetchJson(`https://lolikiller.herokuapp.com/api/kuis/caklontong`, {method: 'get'})
					ini_result = get_result.result.result
					caklontong = `*${ini_result.soal}*`
					setTimeout( () => {
						lolikiller.sendMessage(from, '*↦ Jawaban :* '+ini_result.jawaban+ '\n\n*❏ Penjelasan* '+ ini_result.desc+'*', text, {quoted: faketoko })
					}, 30000)
					setTimeout( () => {
						lolikiller.sendMessage(from, '_10 Detik lagi_', text)
					}, 20000)
					setTimeout( () => {
						lolikiller.sendMessage(from, '_20 Detik lagi_', text)
					}, 10000)
					setTimeout( () => {
						lolikiller.sendMessage(from, '_30 Detik lagi_', text)
					}, 2500)
					setTimeout( () => {
						fakegroup2(caklontong)
					}, 0)
			await limitAdd(sender)
					break 
            case 'simi':
            case 'sim':
            if (!isUser) return reply(mess.only.user_bot)
			if (isLimit(sender)) return
            query = args.join(" ")
            get_result = await fetchJson(`https://lolikiller.herokuapp.com/api/simsimi?query=${query}`)
            ini_txt = get_result.answer
            reply(ini_txt)
            await limitAdd(sender)
            break
            case 'hilih':
            if (!isUser) return reply(mess.only.user_bot)
			if (isLimit(sender)) return
            query = args.join(" ")
            get_result = await fetchJson(`https://lolikiller.herokuapp.com/api/hilih?kata=${query}`)
            ini_txt = get_result.result.result
            fakegroup2(ini_txt)
			await limitAdd(sender)
            break
			case 'trap':
			if (!isUser) return reply(mess.only.user_bot)
			if (!isGroup) return reply(mess.only.group)
			if (!isNsfw) return reply(mess.only.nsfw)
			if (isLimit(sender)) return
			if (!isPrem & !loli.key.fromMe) return reply(mess.only.premium)
			get_result = await fetchJson(`https://lolikiller.herokuapp.com/api/random2/trap`)
			reply('↦ Wait!')
			ini_buffer = await getBuffer(get_result.result.url)
			fakethumb(ini_buffer, '↦ Nih!')
			await limitAdd(sender)
			break
            case 'dance':
			if (!isUser) return reply(mess.only.user_bot)
			if (!isGroup) return reply(mess.only.group)
			if (!isNsfw) return reply(mess.only.nsfw)
			if (isLimit(sender)) return
			ini_sgif = getRandom('.gif')
			ini_stik = getRandom('.webp')
			ini_result = await fetchJson('https://lolikiller.herokuapp.com/api/random/dance', {method: 'get'})
			reply('↦ Wait!')
			exec(`wget ${ini_result.result.url} -O ${ini_sgif} && ffmpeg -i ${ini_sgif} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ini_stik}`, (err) => {
				fs.unlinkSync(ini_sgif)
				if (err) return reply(mess.error.stick)
			    buffer = fs.readFileSync(ini_stik)
				lolikiller.sendMessage(from, buffer, sticker,{quoted: loli})
				fs.unlinkSync(ini_stik)
			})
			await limitAdd(sender)
			break
            case 'blowjob':
			if (!isUser) return reply(mess.only.user_bot)
			if (!isGroup) return reply(mess.only.group)
			if (!isNsfw) return reply(mess.only.nsfw)
			if (isLimit(sender)) return
			if (!isPrem & !loli.key.fromMe) return reply(mess.only.premium)
			ini_sgif = getRandom('.gif')
			ini_stik = getRandom('.webp')
			ini_result = await fetchJson('https://lolikiller.herokuapp.com/api/random/blowjob', {method: 'get'})
			reply('↦ Wait!')
			exec(`wget ${ini_result.result.url} -O ${ini_sgif} && ffmpeg -i ${ini_sgif} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ini_stik}`, (err) => {
				fs.unlinkSync(ini_sgif)
				if (err) return reply(mess.error.stick)
			    buffer = fs.readFileSync(ini_stik)
				lolikiller.sendMessage(from, buffer, sticker,{quoted: loli})
				fs.unlinkSync(ini_stik)
			})
			await limitAdd(sender)
			break
            case 'wink':
			if (!isUser) return reply(mess.only.user_bot)
			if (!isGroup) return reply(mess.only.group)
			if (!isNsfw) return reply(mess.only.nsfw)
			if (isLimit(sender)) return
			ini_sgif = getRandom('.gif')
			ini_stik = getRandom('.webp')
			ini_result = await fetchJson('https://lolikiller.herokuapp.com/api/random/wink', {method: 'get'})
			reply('↦ Wait!')
			exec(`wget ${ini_result.result.url} -O ${ini_sgif} && ffmpeg -i ${ini_sgif} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ini_stik}`, (err) => {
				fs.unlinkSync(ini_sgif)
				if (err) return reply(mess.error.stick)
			    buffer = fs.readFileSync(ini_stik)
				lolikiller.sendMessage(from, buffer, sticker,{quoted: loli})
				fs.unlinkSync(ini_stik)
			})
			await limitAdd(sender)
			break
            case 'poke':
			if (!isUser) return reply(mess.only.user_bot)
			if (!isGroup) return reply(mess.only.group)
			if (!isNsfw) return reply(mess.only.nsfw)
			if (isLimit(sender)) return
			ini_sgif = getRandom('.gif')
			ini_stik = getRandom('.webp')
			ini_result = await fetchJson('https://lolikiller.herokuapp.com/api/random/poke', {method: 'get'})
			reply('↦ Wait!')
			exec(`wget ${ini_result.result.url} -O ${ini_sgif} && ffmpeg -i ${ini_sgif} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ini_stik}`, (err) => {
				fs.unlinkSync(ini_sgif)
				if (err) return reply(mess.error.stick)
			    buffer = fs.readFileSync(ini_stik)
				lolikiller.sendMessage(from, buffer, sticker,{quoted: loli})
				fs.unlinkSync(ini_stik)
			})
			await limitAdd(sender)
			break
            case 'kill':
			if (!isUser) return reply(mess.only.user_bot)
			if (!isGroup) return reply(mess.only.group)
			if (!isNsfw) return reply(mess.only.nsfw)
			if (isLimit(sender)) return
			ini_sgif = getRandom('.gif')
			ini_stik = getRandom('.webp')
			ini_result = await fetchJson('https://lolikiller.herokuapp.com/api/random/kill', {method: 'get'})
			reply('↦ Wait!')
			exec(`wget ${ini_result.result.url} -O ${ini_sgif} && ffmpeg -i ${ini_sgif} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ini_stik}`, (err) => {
				fs.unlinkSync(ini_sgif)
				if (err) return reply(mess.error.stick)
			    buffer = fs.readFileSync(ini_stik)
				lolikiller.sendMessage(from, buffer, sticker,{quoted: loli})
				fs.unlinkSync(ini_stik)
			})
			await limitAdd(sender)
			break
            case 'happy':
			if (!isUser) return reply(mess.only.user_bot)
			if (!isGroup) return reply(mess.only.group)
			if (!isNsfw) return reply(mess.only.nsfw)
			if (isLimit(sender)) return
			ini_sgif = getRandom('.gif')
			ini_stik = getRandom('.webp')
			ini_result = await fetchJson('https://lolikiller.herokuapp.com/api/random/happy', {method: 'get'})
			reply('↦ Wait!')
			exec(`wget ${ini_result.result.url} -O ${ini_sgif} && ffmpeg -i ${ini_sgif} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ini_stik}`, (err) => {
				fs.unlinkSync(ini_sgif)
				if (err) return reply(mess.error.stick)
			    buffer = fs.readFileSync(ini_stik)
				lolikiller.sendMessage(from, buffer, sticker,{quoted: loli})
				fs.unlinkSync(ini_stik)
			})
			await limitAdd(sender)
			break
            case 'glomp':
			if (!isUser) return reply(mess.only.user_bot)
			if (!isGroup) return reply(mess.only.group)
			if (!isNsfw) return reply(mess.only.nsfw)
			if (isLimit(sender)) return
			ini_sgif = getRandom('.gif')
			ini_stik = getRandom('.webp')
			ini_result = await fetchJson('https://lolikiller.herokuapp.com/api/random/glomp', {method: 'get'})
			reply('↦ Wait!')
			exec(`wget ${ini_result.result.url} -O ${ini_sgif} && ffmpeg -i ${ini_sgif} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ini_stik}`, (err) => {
				fs.unlinkSync(ini_sgif)
				if (err) return reply(mess.error.stick)
			    buffer = fs.readFileSync(ini_stik)
				lolikiller.sendMessage(from, buffer, sticker,{quoted: loli})
				fs.unlinkSync(ini_stik)
			})
			await limitAdd(sender)
			break
            case 'slap':
			if (!isUser) return reply(mess.only.user_bot)
			if (!isGroup) return reply(mess.only.group)
			if (!isNsfw) return reply(mess.only.nsfw)
			if (isLimit(sender)) return
			ini_sgif = getRandom('.gif')
			ini_stik = getRandom('.webp')
			ini_result = await fetchJson('https://lolikiller.herokuapp.com/api/random/slap', {method: 'get'})
			reply('↦ Wait!')
			exec(`wget ${ini_result.result.url} -O ${ini_sgif} && ffmpeg -i ${ini_sgif} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ini_stik}`, (err) => {
				fs.unlinkSync(ini_sgif)
				if (err) return reply(mess.error.stick)
			    buffer = fs.readFileSync(ini_stik)
				lolikiller.sendMessage(from, buffer, sticker,{quoted: loli})
				fs.unlinkSync(ini_stik)
			})
			await limitAdd(sender)
			break
            case 'nom':
			if (!isUser) return reply(mess.only.user_bot)
			if (!isGroup) return reply(mess.only.group)
			if (!isNsfw) return reply(mess.only.nsfw)
			if (isLimit(sender)) return
			ini_sgif = getRandom('.gif')
			ini_stik = getRandom('.webp')
			ini_result = await fetchJson('https://lolikiller.herokuapp.com/api/random/nom', {method: 'get'})
			reply('↦ Wait!')
			exec(`wget ${ini_result.result.url} -O ${ini_sgif} && ffmpeg -i ${ini_sgif} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ini_stik}`, (err) => {
				fs.unlinkSync(ini_sgif)
				if (err) return reply(mess.error.stick)
			    buffer = fs.readFileSync(ini_stik)
				lolikiller.sendMessage(from, buffer, sticker,{quoted: loli})
				fs.unlinkSync(ini_stik)
			})
			await limitAdd(sender)
			break
            case 'bite':
			if (!isUser) return reply(mess.only.user_bot)
			if (!isGroup) return reply(mess.only.group)
			if (!isNsfw) return reply(mess.only.nsfw)
			if (isLimit(sender)) return
			ini_sgif = getRandom('.gif')
			ini_stik = getRandom('.webp')
			ini_result = await fetchJson('https://lolikiller.herokuapp.com/api/random/bite', {method: 'get'})
			reply('↦ Wait!')
			exec(`wget ${ini_result.result.url} -O ${ini_sgif} && ffmpeg -i ${ini_sgif} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ini_stik}`, (err) => {
				fs.unlinkSync(ini_sgif)
				if (err) return reply(mess.error.stick)
			    buffer = fs.readFileSync(ini_stik)
				lolikiller.sendMessage(from, buffer, sticker,{quoted: loli})
				fs.unlinkSync(ini_stik)
			})
			await limitAdd(sender)
			break
			case 'handhold':
			if (!isUser) return reply(mess.only.user_bot)
			if (!isGroup) return reply(mess.only.group)
			if (!isNsfw) return reply(mess.only.nsfw)
			if (isLimit(sender)) return
			get_result = await fetchJson(`https://lolikiller.herokuapp.com/api/random/handhold`)
			reply('↦ Wait!')
			ini_buffer = await getBuffer(get_result.result.url)
			fakethumb(ini_buffer, '↦ Nih!')
			await limitAdd(sender)
			break
            case 'highfive':
			if (!isUser) return reply(mess.only.user_bot)
			if (!isGroup) return reply(mess.only.group)
			if (!isNsfw) return reply(mess.only.nsfw)
			if (isLimit(sender)) return
			ini_sgif = getRandom('.gif')
			ini_stik = getRandom('.webp')
			ini_result = await fetchJson('https://lolikiller.herokuapp.com/api/random/highfive', {method: 'get'})
			reply('↦ Wait!')
			exec(`wget ${ini_result.result.url} -O ${ini_sgif} && ffmpeg -i ${ini_sgif} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ini_stik}`, (err) => {
				fs.unlinkSync(ini_sgif)
				if (err) return reply(mess.error.stick)
			    buffer = fs.readFileSync(ini_stik)
				lolikiller.sendMessage(from, buffer, sticker,{quoted: loli})
				fs.unlinkSync(ini_stik)
			})
			await limitAdd(sender)
			break
            case 'smile':
			if (!isUser) return reply(mess.only.user_bot)
			if (!isGroup) return reply(mess.only.group)
			if (!isNsfw) return reply(mess.only.nsfw)
			if (isLimit(sender)) return
			ini_sgif = getRandom('.gif')
			ini_stik = getRandom('.webp')
			ini_result = await fetchJson('https://lolikiller.herokuapp.com/api/random/smile', {method: 'get'})
			reply('↦ Wait!')
			exec(`wget ${ini_result.result.url} -O ${ini_sgif} && ffmpeg -i ${ini_sgif} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ini_stik}`, (err) => {
				fs.unlinkSync(ini_sgif)
				if (err) return reply(mess.error.stick)
			    buffer = fs.readFileSync(ini_stik)
				lolikiller.sendMessage(from, buffer, sticker,{quoted: loli})
				fs.unlinkSync(ini_stik)
			})
			await limitAdd(sender)
			break
            case 'wave':
			if (!isUser) return reply(mess.only.user_bot)
			if (!isGroup) return reply(mess.only.group)
			if (!isNsfw) return reply(mess.only.nsfw)
			if (isLimit(sender)) return
			ini_sgif = getRandom('.gif')
			ini_stik = getRandom('.webp')
			ini_result = await fetchJson('https://lolikiller.herokuapp.com/api/random/wave', {method: 'get'})
			reply('↦ Wait!')
			exec(`wget ${ini_result.result.url} -O ${ini_sgif} && ffmpeg -i ${ini_sgif} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ini_stik}`, (err) => {
				fs.unlinkSync(ini_sgif)
				if (err) return reply(mess.error.stick)
			    buffer = fs.readFileSync(ini_stik)
				lolikiller.sendMessage(from, buffer, sticker,{quoted: loli})
				fs.unlinkSync(ini_stik)
			})
			await limitAdd(sender)
			break
            case 'blush':
			if (!isUser) return reply(mess.only.user_bot)
			if (!isGroup) return reply(mess.only.group)
			if (!isNsfw) return reply(mess.only.nsfw)
			if (isLimit(sender)) return
			ini_sgif = getRandom('.gif')
			ini_stik = getRandom('.webp')
			ini_result = await fetchJson('https://lolikiller.herokuapp.com/api/random/blush', {method: 'get'})
			reply('↦ Wait!')
			exec(`wget ${ini_result.result.url} -O ${ini_sgif} && ffmpeg -i ${ini_sgif} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ini_stik}`, (err) => {
				fs.unlinkSync(ini_sgif)
				if (err) return reply(mess.error.stick)
			    buffer = fs.readFileSync(ini_stik)
				lolikiller.sendMessage(from, buffer, sticker,{quoted: loli})
				fs.unlinkSync(ini_stik)
			})
			await limitAdd(sender)
			break
            case 'yeet':
			if (isLimit(sender)) return
			if (!isUser) return reply(mess.only.user_bot)
			if (!isGroup) return reply(mess.only.group)
			if (!isNsfw) return reply(mess.only.nsfw)
			ini_sgif = getRandom('.gif')
			ini_stik = getRandom('.webp')
			ini_result = await fetchJson('https://lolikiller.herokuapp.com/api/random/yeet', {method: 'get'})
			reply('↦ Wait!')
			exec(`wget ${ini_result.result.url} -O ${ini_sgif} && ffmpeg -i ${ini_sgif} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ini_stik}`, (err) => {
				fs.unlinkSync(ini_sgif)
				if (err) return reply(mess.error.stick)
			    buffer = fs.readFileSync(ini_stik)
				lolikiller.sendMessage(from, buffer, sticker,{quoted: loli})
				fs.unlinkSync(ini_stik)
			})
			await limitAdd(sender)
			break
            case 'pat':
			if (!isUser) return reply(mess.only.user_bot)
			if (!isGroup) return reply(mess.only.group)
			if (!isNsfw) return reply(mess.only.nsfw)
			if (isLimit(sender)) return
			ini_sgif = getRandom('.gif')
			ini_stik = getRandom('.webp')
			ini_result = await fetchJson('https://lolikiller.herokuapp.com/api/random/pat', {method: 'get'})
			reply('↦ Wait!')
			exec(`wget ${ini_result.result.url} -O ${ini_sgif} && ffmpeg -i ${ini_sgif} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ini_stik}`, (err) => {
				fs.unlinkSync(ini_sgif)
				if (err) return reply(mess.error.stick)
			    buffer = fs.readFileSync(ini_stik)
				lolikiller.sendMessage(from, buffer, sticker,{quoted: loli})
				fs.unlinkSync(ini_stik)
			})
			await limitAdd(sender)
			break
            case 'bonk':
			if (!isUser) return reply(mess.only.user_bot)
			if (!isGroup) return reply(mess.only.group)
			if (!isNsfw) return reply(mess.only.nsfw)
			if (isLimit(sender)) return
			ini_sgif = getRandom('.gif')
			ini_stik = getRandom('.webp')
			ini_result = await fetchJson('https://lolikiller.herokuapp.com/api/random/bonk', {method: 'get'})
			reply('↦ Wait!')
			exec(`wget ${ini_result.result.url} -O ${ini_sgif} && ffmpeg -i ${ini_sgif} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ini_stik}`, (err) => {
				fs.unlinkSync(ini_sgif)
				if (err) return reply(mess.error.stick)
			    buffer = fs.readFileSync(ini_stik)
				lolikiller.sendMessage(from, buffer, sticker,{quoted: loli})
				fs.unlinkSync(ini_stik)
			})
			await limitAdd(sender)
			break
            case 'smug':
			if (!isUser) return reply(mess.only.user_bot)
			if (!isGroup) return reply(mess.only.group)
			if (!isNsfw) return reply(mess.only.nsfw)
			if (isLimit(sender)) return
			ini_sgif = getRandom('.gif')
			ini_stik = getRandom('.webp')
			ini_result = await fetchJson('https://lolikiller.herokuapp.com/api/random/smug', {method: 'get'})
			reply('↦ Wait!')
			exec(`wget ${ini_result.result.url} -O ${ini_sgif} && ffmpeg -i ${ini_sgif} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ini_stik}`, (err) => {
				fs.unlinkSync(ini_sgif)
				if (err) return reply(mess.error.stick)
			    buffer = fs.readFileSync(ini_stik)
				lolikiller.sendMessage(from, buffer, sticker,{quoted: loli})
				fs.unlinkSync(ini_stik)
			})
			await limitAdd(sender)
			break
            case 'lick':
			if (!isUser) return reply(mess.only.user_bot)
			if (!isGroup) return reply(mess.only.group)
			if (!isNsfw) return reply(mess.only.nsfw)
			if (isLimit(sender)) return
			ini_sgif = getRandom('.gif')
			ini_stik = getRandom('.webp')
			ini_result = await fetchJson('https://lolikiller.herokuapp.com/api/random/lick', {method: 'get'})
			reply('↦ Wait!')
			exec(`wget ${ini_result.result.url} -O ${ini_sgif} && ffmpeg -i ${ini_sgif} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ini_stik}`, (err) => {
				fs.unlinkSync(ini_sgif)
				if (err) return reply(mess.error.stick)
			    buffer = fs.readFileSync(ini_stik)
				lolikiller.sendMessage(from, buffer, sticker,{quoted: loli})
				fs.unlinkSync(ini_stik)
			})
			await limitAdd(sender)
			break
            case 'kiss':
			if (!isUser) return reply(mess.only.user_bot)
			if (!isGroup) return reply(mess.only.group)
			if (!isNsfw) return reply(mess.only.nsfw)
			if (isLimit(sender)) return
			if (!isPrem & !loli.key.fromMe) return reply(mess.only.premium)
			ini_sgif = getRandom('.gif')
			ini_stik = getRandom('.webp')
			ini_result = await fetchJson('https://lolikiller.herokuapp.com/api/random/kiss', {method: 'get'})
			reply('↦ Wait!')
			exec(`wget ${ini_result.result.url} -O ${ini_sgif} && ffmpeg -i ${ini_sgif} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ini_stik}`, (err) => {
				fs.unlinkSync(ini_sgif)
				if (err) return reply(mess.error.stick)
			    buffer = fs.readFileSync(ini_stik)
				lolikiller.sendMessage(from, buffer, sticker,{quoted: loli})
				fs.unlinkSync(ini_stik)
			})
			await limitAdd(sender)
			break
			case 'awoo':
			if (!isUser) return reply(mess.only.user_bot)
			if (!isGroup) return reply(mess.only.group)
			if (!isNsfw) return reply(mess.only.nsfw)
			if (isLimit(sender)) return
			get_result = await fetchJson(`https://lolikiller.herokuapp.com/api/random/awoo`)
			reply('↦ Wait!')
			ini_buffer = await getBuffer(get_result.result.url)
			fakethumb(ini_buffer, '↦ Nih!')
			await limitAdd(sender)
			break
            case 'hug':
			if (!isUser) return reply(mess.only.user_bot)
			if (!isGroup) return reply(mess.only.group)
			if (!isNsfw) return reply(mess.only.nsfw)
			if (isLimit(sender)) return
			ini_sgif = getRandom('.gif')
			ini_stik = getRandom('.webp')
			ini_result = await fetchJson('https://lolikiller.herokuapp.com/api/random/hug', {method: 'get'})
			reply('↦ Wait!')
			exec(`wget ${ini_result.result.url} -O ${ini_sgif} && ffmpeg -i ${ini_sgif} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ini_stik}`, (err) => {
				fs.unlinkSync(ini_sgif)
				if (err) return reply(mess.error.stick)
			    buffer = fs.readFileSync(ini_stik)
				lolikiller.sendMessage(from, buffer, sticker,{quoted: loli})
				fs.unlinkSync(ini_stik)
			})
			await limitAdd(sender)
			break
            case 'cry':
			if (isLimit(sender)) return
			if (!isUser) return reply(mess.only.user_bot)
			if (!isGroup) return reply(mess.only.group)
			if (!isNsfw) return reply(mess.only.nsfw)
			ini_sgif = getRandom('.gif')
			ini_stik = getRandom('.webp')
			ini_result = await fetchJson('https://lolikiller.herokuapp.com/api/random/cry', {method: 'get'})
			reply('↦ Wait!')
			exec(`wget ${ini_result.result.url} -O ${ini_sgif} && ffmpeg -i ${ini_sgif} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ini_stik}`, (err) => {
				fs.unlinkSync(ini_sgif)
				if (err) return reply(mess.error.stick)
			    buffer = fs.readFileSync(ini_stik)
				lolikiller.sendMessage(from, buffer, sticker,{quoted: loli})
				fs.unlinkSync(ini_stik)
			})
			await limitAdd(sender)
			break
            case 'cuddle':
			if (!isUser) return reply(mess.only.user_bot)
			if (!isGroup) return reply(mess.only.group)
			if (!isNsfw) return reply(mess.only.nsfw)
			if (isLimit(sender)) return
			ini_sgif = getRandom('.gif')
			ini_stik = getRandom('.webp')
			ini_result = await fetchJson('https://lolikiller.herokuapp.com/api/random/cuddle', {method: 'get'})
			reply('↦ Wait!')
			exec(`wget ${ini_result.result.url} -O ${ini_sgif} && ffmpeg -i ${ini_sgif} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ini_stik}`, (err) => {
				fs.unlinkSync(ini_sgif)
				if (err) return reply(mess.error.stick)
			    buffer = fs.readFileSync(ini_stik)
				lolikiller.sendMessage(from, buffer, sticker,{quoted: loli})
				fs.unlinkSync(ini_stik)
			})
			await limitAdd(sender)
			break
            case 'bully':
			if (!isUser) return reply(mess.only.user_bot)
			if (!isGroup) return reply(mess.only.group)
			if (!isNsfw) return reply(mess.only.nsfw)
			if (isLimit(sender)) return
			ini_sgif = getRandom('.gif')
			ini_stik = getRandom('.webp')
			ini_result = await fetchJson('https://lolikiller.herokuapp.com/api/random/bully', {method: 'get'})
			reply('↦ Wait!')
			exec(`wget ${ini_result.result.url} -O ${ini_sgif} && ffmpeg -i ${ini_sgif} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ini_stik}`, (err) => {
				fs.unlinkSync(ini_sgif)
				if (err) return reply(mess.error.stick)
			    buffer = fs.readFileSync(ini_stik)
				lolikiller.sendMessage(from, buffer, sticker,{quoted: loli})
				fs.unlinkSync(ini_stik)
			})
			await limitAdd(sender)
			break
			case 'shinobu':
			if (!isUser) return reply(mess.only.user_bot)
			if (!isGroup) return reply(mess.only.group)
			if (!isNsfw) return reply(mess.only.nsfw)
			if (isLimit(sender)) return
			get_result = await fetchJson(`https://lolikiller.herokuapp.com/api/random/shinobu`)
			reply('↦ Wait!')
			ini_buffer = await getBuffer(get_result.result.url)
			fakethumb(ini_buffer, '↦ Nih!')
			await limitAdd(sender)
			break
			case 'megumin':
			if (!isUser) return reply(mess.only.user_bot)
			if (!isGroup) return reply(mess.only.group)
			if (!isNsfw) return reply(mess.only.nsfw)
			if (isLimit(sender)) return
			get_result = await fetchJson(`https://lolikiller.herokuapp.com/api/random/megumin`)
			reply('↦ Wait!')
			ini_buffer = await getBuffer(get_result.result.url)
			fakethumb(ini_buffer, '↦ Nih!')
			await limitAdd(sender)
			break
			case 'neko2':
			if (!isUser) return reply(mess.only.user_bot)
			if (!isGroup) return reply(mess.only.group)
			if (!isNsfw) return reply(mess.only.nsfw)
			if (isLimit(sender)) return
			if (!isPrem & !loli.key.fromMe) return reply(mess.only.premium)
			get_result = await fetchJson(`https://lolikiller.herokuapp.com/api/random2/neko`)
			reply('↦ Wait!')
			ini_buffer = await getBuffer(get_result.result.url)
			fakethumb(ini_buffer, '↦ Nih!')
			await limitAdd(sender)
			break
			case 'neko':
			if (!isUser) return reply(mess.only.user_bot)
			if (!isGroup) return reply(mess.only.group)
			if (!isNsfw) return reply(mess.only.nsfw)
			if (isLimit(sender)) return
			get_result = await fetchJson(`https://lolikiller.herokuapp.com/api/random/neko`)
			reply('↦ Wait!')
			ini_buffer = await getBuffer(get_result.result.url)
			fakethumb(ini_buffer, '↦ Nih!')
			await limitAdd(sender)
			break
			case 'waifu2':
			if (!isUser) return reply(mess.only.user_bot)
			if (!isGroup) return reply(mess.only.group)
			if (!isNsfw) return reply(mess.only.nsfw)
			if (isLimit(sender)) return
			if (!isPrem & !loli.key.fromMe) return reply(mess.only.premium)
			get_result = await fetchJson(`https://lolikiller.herokuapp.com/api/random2/waifu`)
			reply('↦ Wait!')
			ini_buffer = await getBuffer(get_result.result.url)
			fakethumb(ini_buffer, '↦ Nih!')
			await limitAdd(sender)
			break
			case 'waifu':
			if (!isUser) return reply(mess.only.user_bot)
			if (!isGroup) return reply(mess.only.group)
			if (!isNsfw) return reply(mess.only.nsfw)
			if (isLimit(sender)) return
			get_result = await fetchJson(`https://lolikiller.herokuapp.com/api/random/waifu`)
			reply('↦ Wait!')
			ini_buffer = await getBuffer(get_result.result.url)
	//		fakethumb(ini_buffer, '↦ Nih!')
	lolikiller.sendMessage(from, ini_buffer, image,{quoted: loli})
			await limitAdd(sender)
			break
                    case 'gradient':
		        	if (!isUser) return reply(mess.only.user_bot)
			if (isLimit(sender)) return
                    if (args.length == 0) return reply(`Example: ${prefix + command} lolikiller`)
                    ini_txt = args.join(" ")
                    get_result = await fetchJson(`https://lolikiller.herokuapp.com/api/textmaker2/gradient?text=${ini_txt}`)
                    fakegroup2(`_Wait!_`)
                    ini_img = await getBuffer(get_result.result.url)
                    fakethumb(ini_img, `Nih!!`)
 			await limitAdd(sender)
                   break
        	case 'glowrainbow':
		        	if (!isUser) return reply(mess.only.user_bot)
			if (isLimit(sender)) return
                    if (args.length == 0) return reply(`Example: ${prefix + command} lolikiller`)
                    ini_txt = args.join(" ")
                    get_result = await fetchJson(`https://lolikiller.herokuapp.com/api/textmaker2/glowrainbow?text=${ini_txt}`)
                    fakegroup2(`_Wait!_`)
                    ini_img = await getBuffer(get_result.result.url)
                    fakethumb(ini_img, `Nih!!`)
 			await limitAdd(sender)
                   break
        	case 'textstar':
		        	if (!isUser) return reply(mess.only.user_bot)
			if (isLimit(sender)) return
                    if (args.length == 0) return reply(`Example: ${prefix + command} lolikiller`)
                    ini_txt = args.join(" ")
                    get_result = await fetchJson(`https://lolikiller.herokuapp.com/api/textmaker2/textstar?text=${ini_txt}`)
                    fakegroup2(`_Wait!_`)
                    ini_img = await getBuffer(get_result.result.url)
                    fakethumb(ini_img, `Nih!!`)
 			await limitAdd(sender)
                   break
        	case 'generator':
		        	if (!isUser) return reply(mess.only.user_bot)
			if (isLimit(sender)) return
                    if (args.length == 0) return reply(`Example: ${prefix + command} lolikiller`)
                    ini_txt = args.join(" ")
                    get_result = await fetchJson(`https://lolikiller.herokuapp.com/api/textmaker2/generator?text=${ini_txt}`)
                    fakegroup2(`_Wait!_`)
                    ini_img = await getBuffer(get_result.result.url)
                    fakethumb(ini_img, `Nih!!`)
 			await limitAdd(sender)
                   break
        	case 'flaming':
		        	if (!isUser) return reply(mess.only.user_bot)
			if (isLimit(sender)) return
                    if (args.length == 0) return reply(`Example: ${prefix + command} lolikiller`)
                    ini_txt = args.join(" ")
                    get_result = await fetchJson(`https://lolikiller.herokuapp.com/api/textmaker2/flaming?text=${ini_txt}`)
                    fakegroup2(`_Wait!_`)
                    ini_img = await getBuffer(get_result.result.url)
                    fakethumb(ini_img, `Nih!!`)
 			await limitAdd(sender)
                   break
        	case 'chrome':
		        	if (!isUser) return reply(mess.only.user_bot)
			if (isLimit(sender)) return
                    if (args.length == 0) return reply(`Example: ${prefix + command} lolikiller `)
                    ini_txt = args.join(" ")
                    get_result = await fetchJson(`https://lolikiller.herokuapp.com/api/textmaker2/chrome?text=${ini_txt}`)
                    fakegroup2(`_Wait!_`)
                    ini_img = await getBuffer(get_result.result.url)
                    fakethumb(ini_img, `Nih!!`)
			await limitAdd(sender)
                    break
        	case 'embroidery':
		        	if (!isUser) return reply(mess.only.user_bot)
			if (isLimit(sender)) return
                    if (args.length == 0) return reply(`Example: ${prefix + command} lolikiller `)
                    ini_txt = args.join(" ")
                    get_result = await fetchJson(`https://lolikiller.herokuapp.com/api/textmaker2/embroidery?text=${ini_txt}`)
                    fakegroup2(`_Wait!_`)
                    ini_img = await getBuffer(get_result.result.url)
                    fakethumb(ini_img, `Nih!!`)
			await limitAdd(sender)
                    break
        	case 'metalic':
		        	if (!isUser) return reply(mess.only.user_bot)
			if (isLimit(sender)) return
                    if (args.length == 0) return reply(`Example: ${prefix + command} lolikiller `)
                    ini_txt = args.join(" ")
                    get_result = await fetchJson(`https://lolikiller.herokuapp.com/api/textmaker3/metalic?text=${ini_txt}`)
                    fakegroup2(`_Wait!_`)
                    ini_img = await getBuffer(get_result.result.url)
                    fakethumb(ini_img, `Nih!!`)
			await limitAdd(sender)
                    break
        	case 'striking':
		        	if (!isUser) return reply(mess.only.user_bot)
			if (isLimit(sender)) return
                    if (args.length == 0) return reply(`Example: ${prefix + command} lolikiller `)
                    ini_txt = args.join(" ")
                    get_result = await fetchJson(`https://lolikiller.herokuapp.com/api/textmaker3/striking?text=${ini_txt}`)
                    fakegroup2(`_Wait!_`)
                    ini_img = await getBuffer(get_result.result.url)
                    fakethumb(ini_img, `Nih!!`)
			await limitAdd(sender)
                    break
        	case 'watermelon':
		        	if (!isUser) return reply(mess.only.user_bot)
			if (isLimit(sender)) return
                    if (args.length == 0) return reply(`Example: ${prefix + command} lolikiller `)
                    ini_txt = args.join(" ")
                    get_result = await fetchJson(`https://lolikiller.herokuapp.com/api/textmaker3/watermelon?text=${ini_txt}`)
                    fakegroup2(`_Wait!_`)
                    ini_img = await getBuffer(get_result.result.url)
			await limitAdd(sender)
                    fakethumb(ini_img, `Nih!!`)
                    break
        	case 'butterfly':
		        	if (!isUser) return reply(mess.only.user_bot)
			if (isLimit(sender)) return
                    if (args.length == 0) return reply(`Example: ${prefix + command} lolikiller `)
                    ini_txt = args.join(" ")
                    get_result = await fetchJson(`https://lolikiller.herokuapp.com/api/textmaker3/butterfly?text=${ini_txt}`)
                    fakegroup2(`_Wait!_`)
                    ini_img = await getBuffer(get_result.result.url)
                    fakethumb(ini_img, `Nih!!`)
 			await limitAdd(sender)
                   break
        	case 'wooden':
		        	if (!isUser) return reply(mess.only.user_bot)
			if (isLimit(sender)) return
                    if (args.length == 0) return reply(`Example: ${prefix + command} lolikiller `)
                    ini_txt = args.join(" ")
                    get_result = await fetchJson(`https://lolikiller.herokuapp.com/api/textmaker3/wooden?text=${ini_txt}`)
                    fakegroup2(`_Wait!_`)
                    ini_img = await getBuffer(get_result.result.url)
                    fakethumb(ini_img, `Nih!!`)
			await limitAdd(sender)
                    break
        	case 'harrypotter':
		        	if (!isUser) return reply(mess.only.user_bot)
			if (isLimit(sender)) return
                    if (args.length == 0) return reply(`Example: ${prefix + command} lolikiller `)
                    ini_txt = args.join(" ")
                    get_result = await fetchJson(`https://lolikiller.herokuapp.com/api/textmaker3/harrypotter?text=${ini_txt}`)
                    fakegroup2(`_Wait!_`)
                    ini_img = await getBuffer(get_result.result.url)
                    fakethumb(ini_img, `Nih!!`)
 			await limitAdd(sender)
                   break
        	case 'luxury':
		        	if (!isUser) return reply(mess.only.user_bot)
			if (isLimit(sender)) return
                    if (args.length == 0) return reply(`Example: ${prefix + command} lolikiller `)
                    ini_txt = args.join(" ")
                    get_result = await fetchJson(`https://lolikiller.herokuapp.com/api/textmaker3/luxury?text=${ini_txt}`)
                    fakegroup2(`_Wait!_`)
                    ini_img = await getBuffer(get_result.result.url)
                    fakethumb(ini_img, `Nih!!`)
 			await limitAdd(sender)
                   break
        	case 'cemetery':
		        	if (!isUser) return reply(mess.only.user_bot)
			if (isLimit(sender)) return
                    if (args.length == 0) return reply(`Example: ${prefix + command} lolikiller `)
                    ini_txt = args.join(" ")
                    get_result = await fetchJson(`https://lolikiller.herokuapp.com/api/textmaker3/cemetery?text=${ini_txt}`)
                    fakegroup2(`_Wait!_`)
                    ini_img = await getBuffer(get_result.result.url)
                    fakethumb(ini_img, `Nih!!`)
			await limitAdd(sender)
                    break
        	case 'woodblock':
		        	if (!isUser) return reply(mess.only.user_bot)
			if (isLimit(sender)) return
                    if (args.length == 0) return reply(`Example: ${prefix + command} lolikiller `)
                    ini_txt = args.join(" ")
                    get_result = await fetchJson(`https://lolikiller.herokuapp.com/api/textmaker3/woodblock?text=${ini_txt}`)
                    fakegroup2(`_Wait!_`)
                    ini_img = await getBuffer(get_result.result.url)
                    fakethumb(ini_img, `Nih!!`)
 			await limitAdd(sender)
                   break
        	case 'smoke':
		        	if (!isUser) return reply(mess.only.user_bot)
			if (isLimit(sender)) return
                    if (args.length == 0) return reply(`Example: ${prefix + command} lolikiller `)
                    ini_txt = args.join(" ")
                    get_result = await fetchJson(`https://lolikiller.herokuapp.com/api/textmaker3/smoke?text=${ini_txt}`)
                    fakegroup2(`_Wait!_`)
                    ini_img = await getBuffer(get_result.result.url)
                    fakethumb(ini_img, `Nih!!`)
 			await limitAdd(sender)
                   break
        	case 'sweetcandy':
		        	if (!isUser) return reply(mess.only.user_bot)
			if (isLimit(sender)) return
                    if (args.length == 0) return reply(`Example: ${prefix + command} lolikiller `)
                    ini_txt = args.join(" ")
                    get_result = await fetchJson(`https://lolikiller.herokuapp.com/api/textmaker3/sweetcandy?text=${ini_txt}`)
                    fakegroup2(`_Wait!_`)
                    ini_img = await getBuffer(get_result.result.url)
                    fakethumb(ini_img, `Nih!!`)
			await limitAdd(sender)
                    break
        	case 'petterns':
		        	if (!isUser) return reply(mess.only.user_bot)
			if (isLimit(sender)) return
                    if (args.length == 0) return reply(`Example: ${prefix + command} lolikiller `)
                    ini_txt = args.join(" ")
                    get_result = await fetchJson(`https://lolikiller.herokuapp.com/api/textmaker3/petterns?text=${ini_txt}`)
                    fakegroup2(`_Wait!_`)
                    ini_img = await getBuffer(get_result.result.url)
                    fakethumb(ini_img, `Nih!!`)
			await limitAdd(sender)
                    break
        	case 'orchids':
		        	if (!isUser) return reply(mess.only.user_bot)
			if (isLimit(sender)) return
                    if (args.length == 0) return reply(`Example: ${prefix + command} lolikiller `)
                    ini_txt = args.join(" ")
                    get_result = await fetchJson(`https://lolikiller.herokuapp.com/api/textmaker3/orchids?text=${ini_txt}`)
                    fakegroup2(`_Wait!_`)
                    ini_img = await getBuffer(get_result.result.url)
                    fakethumb(ini_img, `Nih!!`)
			await limitAdd(sender)
                    break
    case 'tovn': 
		      if (!isUser) return reply(mess.only.user_bot)
			if (isLimit(sender)) return
		 	  if ((isMedia && !loli.message.videoMessage || isQuotedImage) && args.length == 0) {
			  const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(loli).replace('quotedM','m')).message.extendedTextMessage.contextInfo : loli
		 	  const media = await lolikiller.downloadAndSaveMediaMessage(encmedia)
			  lolikiller.sendMessage(from, '*↦ Wait!*', text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "contactMessage": { "caption": `*↦ lolikiller.herokuapp.com*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })
			  await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
			  .then(teks => {								 
		  	  fs.unlinkSync(media)							                           
              lolikiller.updatePresence(from, Presence.recording) 
              const gtts = require('./lib/gtts')("id")
              const ndakbisa = `${teks}`             
              ranm = getRandom('.mp3')
              ndakbisa.length > 600
              ? reply('*↦ Textnya kebanyakan*')
              : gtts.save(ranm, ndakbisa, function() {
              lolikiller.sendMessage(from, fs.readFileSync(ranm), audio, {mimetype: 'audio/mp4', ptt:true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "contactMessage": { "caption": `*↦ Nih!!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })
              fs.unlinkSync(ranm)
              })
              })}	
			await limitAdd(sender)
              break        
    case 'toimg':
		    if (!isUser) return reply(mess.only.user_bot)
			if (isLimit(sender)) return
			if (!isQuotedSticker) return reply('*↦ Reply/Tag Sticker!*')
			reply(mess.wait)
			encmedia = JSON.parse(JSON.stringify(loli).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await lolikiller.downloadAndSaveMediaMessage(encmedia)
			reply('*↦ Wait!*')
			ran = getRandom('.png')
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return reply('*↦ Gagal, coba ulangi!*')
			buffer = fs.readFileSync(ran)
			fakethumb(buffer,'<//>')
			fs.unlinkSync(ran)
			})
			await limitAdd(sender)
			break
			case 'sticker': 
			case 'stikergif': 
			case 'stickergif':
			case 'sgif':
			case 'stiker':
			case 'sg':
			case 's':
		    if (!isUser) return reply(mess.only.user_bot)
			if (isLimit(sender)) return
            if ((isMedia && !loli.message.videoMessage || isQuotedImage) && args.length == 0) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(loli).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : loli
            const media = await lolikiller.downloadAndSaveMediaMessage(encmedia)
            ran = '666.webp'
            reply('*↦ Wait!*')
            await ffmpeg(`./${media}`)
            .input(media)
            .on('start', function (cmd) {
				console.log(`Started : ${cmd}`)
			})
			.on('error', function (err) {
				console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                reply('error')
            })
                .on('end', function () {
                console.log('Finish')
                lolikiller.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: loli})
                fs.unlinkSync(media)
                fs.unlinkSync(ran)
            })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
            } else if ((isMedia && loli.message.videoMessage.seconds < 11 || isQuotedVideo && loli.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
				const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(loli).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : loli
                const media = await lolikiller.downloadAndSaveMediaMessage(encmedia)
            ran = '999.webp'
            reply(mess.wait)
            await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
            console.log(`Started : ${cmd}`)
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
            })
            .on('end', function () {
            console.log('Finish')
            lolikiller.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: loli})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
            } else {
                reply(`*↦ Kirim gambar dengan caption ${prefix + command}\nDurasi Sticker Video 1-9 Detik`)
            }
			await limitAdd(sender)
            break               
            case 'wattpadsearch' :
		    if (!isUser) return reply(mess.only.user_bot)
			if (isLimit(sender)) return
            if (args.length == 0) return reply(`Example: ${prefix}wattpadsearch ngakak`)
            query = args.join(" ")
            ini_result = await fetchJson(`https://lolikiller.herokuapp.com/api/wattpad/search?search=${query}`)
            ini_result = ini_result.result
            reply('*↦ Wait!*')
            ini_txt = ""
            for (var x of ini_result.result) {
				ini_txt += `*↦ Title :* ${x.title}\n`
                ini_txt += `*↦ Reads :* ${x.reads}\n`
                ini_txt += `*↦ Votes :* ${x.votes}\n`
                ini_txt += `*↦ Description :* ${x.description}\n`
                ini_txt += `*↦ Url :* ${x.url}\n`
                ini_txt += `*↦ Thumbnail :* ${x.thumb}\n`
				ini_txt += `\n↦════════[☆]═══════❏\n`
			}
			fakegroup2(ini_txt)
			await limitAdd(sender)
 			break
            case 'pinterestdl':
		    if (!isUser) return reply(mess.only.user_bot)
			if (isLimit(sender)) return
            if (args.length == 0) return reply(`Example: ${prefix + command} https://id.pinterest.com/pin/696580267364426905/`)
            ini_url = args[0]
            ini_url = await fetchJson(`https://lolikiller.herokuapp.com/api/pinterestdl?url=${ini_url}`)
            reply('*↦ Wait!*')
            ini_url = ini_url.result.result
            ini_buffer = await getBuffer(ini_url)
            fakethumb(ini_buffer)
			await limitAdd(sender)
            break
            case 'pinterest':
		    if (!isUser) return reply(mess.only.user_bot)
			if (isLimit(sender)) return
            if (args.length == 0) return reply(`Example: ${prefix + command} loli`)
            query = args.join(" ")
            ini_url = await fetchJson(`https://lolikiller.herokuapp.com/api/pinterest/search?search=${query}`)
            reply('*↦ Wait!*')
            ini_url = ini_url.result
            ini_buffer = await getBuffer(ini_url)
            fakethumb(ini_buffer)
			await limitAdd(sender)
            break
			case 'fbdl' :
		    if (!isUser) return reply(mess.only.user_bot)
			if (isLimit(sender)) return
			if (args.length == 0) return reply(`Example: ${prefix + command} https://www.facebook.com/197394889304/posts/10160272795609305/?app=fbl`)
			ini_url = args[0]
            ini_url = await fetchJson(`https://lolikiller.herokuapp.com/api/fbdown/?url=${ini_url}`)
            reply('*↦ Wait!*')
			ini_url = ini_url.result.url
			ini_buffer = await getBuffer(ini_url)
			await lolikiller.sendMessage(from, ini_buffer, video,{quoted: loli})
			await limitAdd(sender)
			break
			case 'twitstalk' :
		    if (!isUser) return reply(mess.only.user_bot)
			if (isLimit(sender)) return
			if (args.length == 0) return reply(`Example: ${prefix + command} grcjessicajane`)
			username = args[0]
            inii_result = await fetchJson(`https://lolikiller.herokuapp.com/api/twitter/stalk?username=${username}`)
			ini_result = inii_result.result
			reply('*↦ Wait!*')
			ini_buffer = await getBuffer(ini_result.thumbnail)
			ini_txt = `*↦ Username :* ${ini_result.username}\n`
			ini_txt += `*↦ Full Name :* ${ini_result.fullname}\n`
			ini_txt += `*↦ Tweets :* ${ini_result.tweets}\n`
			ini_txt += `*↦ Followers :* ${ini_result.followers}\n`
			ini_txt += `*↦ Following :* ${ini_result.following}\n`
			ini_txt += `*↦ Joined :* ${ini_result.joined}`
			fakethumb(ini_buffer, ini_txt)
 			await limitAdd(sender)
          	break
			case 'githubstalk' :
		    if (!isUser) return reply(mess.only.user_bot)
			if (isLimit(sender)) return
			if (args.length == 0) return reply(`Example: ${prefix + command} LoliKillers`)
			username = args[0]
            inii_result = await fetchJson(`https://lolikiller.herokuapp.com/api/github/stalk?username=${username}`)
			ini_result = inii_result.result
			reply('*↦ Wait!*')
			ini_buffer = await getBuffer(ini_result.profile_pic)
			ini_txt = `*↦ Username :* ${ini_result.username}\n`
			ini_txt += `*↦ Full Name :* ${ini_result.fullname}\n`
			ini_txt += `*↦ Id :* ${ini_result.id}\n`
			ini_txt += `*↦ Company :* ${ini_result.company}\n`
			ini_txt += `*↦ Bio :* ${ini_result.bio}\n`
			ini_txt += `*↦ Hireable :* ${ini_result.hireable}\n`
			ini_txt += `*↦ Followers :* ${ini_result.followers}\n`
			ini_txt += `*↦ Following :* ${ini_result.following}\n`
			ini_txt += `*↦ Location :* ${ini_result.location}\n`
			ini_txt += `*↦ Email :* ${ini_result.email}\n`
			ini_txt += `*↦ Repository :* ${ini_result.public_repo}\n`
			ini_txt += `*↦ Gists :* ${ini_result.gists}\n`
			ini_txt += `*↦ Joined :* ${ini_result.join}\n`
			ini_txt += `*↦ Update :* ${ini_result.last_update}\n`
			ini_txt += `*↦ Link :* ${ini_result.url_profile}\n`
			fakethumb(ini_buffer, ini_txt)
			await limitAdd(sender)
			break
			case 'igstalk' :
			if (args.length == 0) return reply(`Example: ${prefix + command} jessicajane99`)
			if (isLimit(sender)) return
			username = args[0]
            inii_result = await fetchJson(`https://lolikiller.herokuapp.com/api/instagram/stalk?username=${username}`)
			ini_result = inii_result.result
			reply('*↦ Wait!*')
			ini_buffer = await getBuffer(ini_result.Profile_pic)
			ini_txt = `*↦ Username :* ${ini_result.Username}\n`
			ini_txt += `*↦ Full Name :* ${ini_result.Name}\n`
			ini_txt += `*↦ Posts :* ${ini_result.Jumlah_Post}\n`
			ini_txt += `*↦ Followers :* ${ini_result.Jumlah_Followers}\n`
			ini_txt += `*↦ Following :* ${ini_result.Jumlah_Following}\n`
			ini_txt += `*↦ Bio :* ${ini_result.Biodata}`
			fakethumb(ini_buffer, ini_txt)
			await limitAdd(sender)
			break
			case 'ytsearch':
		    if (!isUser) return reply(mess.only.user_bot)
			if (isLimit(sender)) return
			if (args.length == 0) return reply(`Example: ${prefix + command} hanbunko hanabi kotori remix`)
			query = args.join(" ")
			ini_result = await fetchJson(`https://lolikiller.herokuapp.com/api/yutub/search?video=${query}`)
			reply('*↦ Wait!*')
			get_result = ini_result.result
			ini_txt = ' '
			for (var x of get_result) {
				ini_txt += `*↦ Title :* ${x.title}\n`
				ini_txt += `*↦ Id :* ${x.id}\n`
				ini_txt += `*↦ Channel :* ${x.channel.name}\n`
				ini_txt += `*↦ Upload :* ${x.uploadDate}\n`
				ini_txt += `*↦ Thumbnail :* ${x.thumbnail}\n`
				ini_txt += `*↦ Views :* ${x.viewCount}\n`
				ini_txt += `*↦ Link :* https://www.youtube.com/watch?v=${x.id}\n`
				ini_txt += `\n*↦════════[☆]═══════↦*\n`
			}
			fakegroup(ini_txt)
			await limitAdd(sender)
			break
	case 'ytmp4':
			if (args.length === 0) return reply(`*Example :* ${prefix}ytmp4 https://youtu.be/xYJzwcZWJ0I`)
			let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks2) return reply(mess.error.Iv)
				try {
				reply(mess.wait)
				ytv(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
				if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `↦ *YTMP 4!*\n\n↦ *Title* : ${title}\n↦ *Ext* : MP3\n↦ *Filesize* : ${filesizeF}\n↦ *Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
				const captionsYtmp4 = `*Data Diperoleh!*\n\n↦ *Title* : ${title}\n*↦ Ext* : MP4\n↦ *Size* : ${filesizeF}\n\n_Wait!! Audio sedang di kirim!_`
				sendMediaURL(from, thumb, captionsYtmp4)
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				})		
				})
				} catch (err) {
			    reply(mess.error.api)
				}
				break
	case 'ytmp3':
			if (args.length === 0) return reply(`*Example :* ${prefix}ytmp3 https://youtu.be/xYJzwcZWJ0I`)
			let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks) return reply(mess.error.Iv)
				try {
				reply(mess.wait)
				yta(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
			    if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `↦ *Data Didapatkan!*\n\n↦ *Title* : ${title}\n↦ *Ext* : MP3\n↦ *Filesize* : ${filesizeF}\n↦ *Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
				const captions = `↦ *YTMP3*\n\n↦ *Title* : ${title}\n↦ *Ext* : MP3\n↦ *Size* : ${filesizeF}\n\n_Wait!! Audio sedang di kirim!_`
				sendMediaURL(from, thumb, captions)
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				})
				})
				} catch (err) {
				reply(mess.error.api)
				}
				break
			case 'disapering':
			if (!isGroup) return reply(mess.only.group)
			if (!isBotGroupAdmins) return reply(mess.only.bot_admin)
		    if (!isUser) return reply(mess.only.user_bot)
			if (!loli.key.fromMe & !isGroupAdmins) return reply(mess.only.group_admin)
			if (args[0] === 'on' ) {
				await lolikiller.toggleDisappearingMessages(from, WA_DEFAULT_EPHEMERAL)
				fakegroup(`*↦* Success Mengaktifkan Pesan Sementara Di Group\n*${groupMetadata.subject}*`)
			} else if (args[0] === 'off' ) {
				await lolikiller.toggleDisappearingMessages(from, 0)
				fakegroup(`*↦* Success Menonaktifkan Pesan Sementara Di Group\n*${groupMetadata.subject}*`)
			}
			break
			case 'notif':
			if (!isGroup) return reply(mess.only.group)
			if (!isBotGroupAdmins) return reply(mess.only.bot_admin)
		    if (!isUser) return reply(mess.only.user_bot)
			if (!loli.key.fromMe & !isGroupAdmins) return reply(mess.only.group_admin)
			ini_txt = `*↦* ${body.slice(7)}*`
			group = await lolikiller.groupMetadata(from);
			member = group['participants']
			jids = [];
			member.map(async adm => {
				jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
			})
			options = {
				text: ini_txt,
				contextInfo: {
					mentionedJid: jids
				},
				quoted: faketoko
			}
			await lolikiller.sendMessage(from, options, text)
			break
			case 'infoall':
			if (!isGroup) return reply(mess.only.group)
		    if (!isUser) return reply(mess.only.user_bot)
			if (!loli.key.fromMe & !isGroupAdmins) return reply(mess.only.group_admin)
			if (!loli.key.fromMe) return
			var nim = loli.participant
			members_id = []
			ini_txt = '\n'
			for (let mem of groupMembers) {
				ini_txt += `*║↦* @${mem.jid.split('@')[0]}\n`
				members_id.push(mem.jid)
			}
			mentions(`*From :* ${pushname}\n*Info :*  ${body.slice(9)}\n\n*↦═══[ INFORMATION ]═══↦*`+ini_txt+'*↦═══[ lolikiller - SELF BOT ]═══↦*', members_id, true)
			break
			case 'kick':
			if (!isGroup) return reply(mess.only.group)
			if (!isBotGroupAdmins) return reply(mess.only.bot_admin)
		    if (!isUser) return reply(mess.only.user_bot)
			if (!loli.key.fromMe & !isGroupAdmins) return reply(mess.only.group_admin)
			if (!isGroup) {
				if (loli.message.extendedTextMessage === undefined || loli.message.extendedTextMessage === null) return
				mentioned = loli.message.extendedTextMessage.contextInfo.mentionedJid
				mentions(mentioned, true)
				lolikiller.groupRemove(from, mentioned)
			} else {
				await lolikiller.groupRemove(from, mentionUser)
				fakegroup2(`*↦* Success kick ${pushname}`)
			}
			break
			case 'add':
		    if (!isUser) return reply(mess.only.user_bot)
			if (!loli.key.fromMe) return
			if (args.length < 1) return reply('*↦* Yang mau di add jin??')
			if (args[0].startsWith('08')) return reply('*↦* Gunakan kode negara!')
			try {
				num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
				lolikiller.groupAdd(from, [num])
			} catch (e) {
				console.log('Error :', e)
				fakegroup2('*↦* Gagal menambahkan target, mungkin karena di private')
			}
			break
			case 'adminlist':
			if (!isGroup) return reply(mess.only.group)
			if (!isBotGroupAdmins) return reply(mess.only.bot_admin)
		    if (!isUser) return reply(mess.only.user_bot)
			if (!loli.key.fromMe & !isGroupAdmins) return reply(mess.only.group_admin)
			ini_txt = `*↦* List admin of group *${groupMetadata.subject}*\n*↦* Total : ${groupAdmins.length}\n\n`
			no = 0
			for (let admon of groupAdmins) {
				no += 1
				ini_txt += `*↦* ${no.toString()} @${admon.split('@')[0]}\n`
			}
			mentions(ini_txt, groupAdmins, true)
			break
			case 'promote':
			case 'pm':
			if (!isGroup) return reply(mess.only.group)
			if (!isBotGroupAdmins) return reply(mess.only.bot_admin)
		    if (!isUser) return reply(mess.only.user_bot)
			if (!loli.key.fromMe & !isGroupAdmins) return reply(mess.only.group_admin)
			if (!isGroup) {
				if (lolikiller.message.extendedTextMessage === undefined || loli.message.extendedTextMessage === null) return reply('Tag yang ingin di promote!')
				mentioned = loli.message.extendedTextMessage.contextInfo.mentionedJid
				mentions(teks, mentioned, true)
				lolikiller.groupMakeAdmin(from, mentioned)
			} else {
				await lolikiller.groupMakeAdmin(from, mentionUser)
				fakegroup2('*↦* Success Promote')
			}
			break
			case 'demote':
			case 'dm':
			if (!isGroup) return reply(mess.only.group)
			if (!isBotGroupAdmins) return reply(mess.only.bot_admin)
		    if (!isUser) return reply(mess.only.user_bot)
			if (!loli.key.fromMe & !isGroupAdmins) return reply(mess.only.group_admin)
			if (!isGroup) {
				if (loli.message.extendedTextMessage === undefined || loli.message.extendedTextMessage === null) return reply('Tag admin yang mau di demote!')
				mentioned = loli.message.extendedTextMessage.contextInfo.mentionedJid
				entions(teks, mentioned, true)
				lolikiller.groupDemoteAdmin(from, mentioned)
				
			} else {
				await lolikiller.groupDemoteAdmin(from, mentionUser)
				fakegroup2('*↦* Success Demote')
			}
			break
			case 'cekchat':
		    if (!isUser) return reply(mess.only.user_bot)
			lolikiller.updatePresence(from, Presence.composing)
			lolikiller.sendMessage(from, `*↦* Total : ${totalchat.length} Chat`, text, {quoted  : faketoko})
			break
			case 'linkgc':
			if (!isGroup) return reply(mess.only.group)
			if (!isBotGroupAdmins) return reply(mess.only.bot_admin)
		    if (!isUser) return reply(mess.only.user_bot)
			if (!loli.key.fromMe & !isGroupAdmins) return reply(mess.only.group_admin)
			linkgc = await lolikiller.groupInviteCode (from)
			ini_link = `*↦* https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
			lolikiller.sendMessage(from, ini_link, text,{quoted: faketoko})
			break
			case 'imgtag':
			if (!isGroup) return reply(mess.only.group)
			if (!isBotGroupAdmins) return reply(mess.only.bot_admin)
		    if (!isUser) return reply(mess.only.user_bot)
			if (!loli.key.fromMe & !isGroupAdmins) return reply(mess.only.group_admin)
			if ((isMedia && !loli.message.videoMessage || isQuotedImage) && args.length == 0) {
				const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(loli).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : loli
				filePath = await lolikiller.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
				var value = args.join(" ")
				var group = await lolikiller.groupMetadata(from)
				var member = group['participants']
				var mem = []
				member.map(async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
				})
				var options = {
					contextInfo: { mentionedJid: mem },
					quoted: loli
				}
				ini_buffer = fs.readFileSync(filePath)
				lolikiller.sendMessage(from, ini_buffer, image, options)
				fs.unlinkSync(filePath)
			} else {
				reply(`*↦* Tag image yang sudah dikirim`)
			}
			break
		    if (!isUser) return reply(mess.only.user_bot)
			case 'stctag':
			if (!isGroup) return reply(mess.only.group)
			if (!isBotGroupAdmins) return reply(mess.only.bot_admin)
		    if (!isUser) return reply(mess.only.user_bot)
			if (!loli.key.fromMe & !isGroupAdmins) return reply(mess.only.group_admin)
			if (!isQuotedSticker) return reply('Stickelya mana?')
			ramra = JSON.parse(JSON.stringify(loli).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
			ramra2 = await lolikiller.downloadMediaMessage(ramra)
			await fs.writeFileSync(`stctagg.webp`, ramra2)
			var group = await lolikiller.groupMetadata(from)
			var member = group['participants']
			var mem = []
			member.map(async adm => {
				mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
			})
			var itsme = `6283803728334@s.whatsapp.net`
			var split = `${body.slice(8)}`
			var selepbot = {
				contextInfo: {
					mentionedJid: mem,
					participant: itsme, quotedMessage: {
						extendedTextMessage: {
							text: split,
						}
					}
				}
			}
			result = fs.readFileSync(`stctagg.webp`)
			lolikiller.sendMessage(from, result, sticker, selepbot)
			await fs.unlinkSync(`stctagg.webp`)
			break
			case 'hidetag':
			if (!isGroup) return reply(mess.only.group)
			if (!isBotGroupAdmins) return reply(mess.only.bot_admin)
		    if (!isUser) return reply(mess.only.user_bot)
			if (!loli.key.fromMe & !isGroupAdmins) return reply(mess.only.group_admin)
			var value = body.slice(9)
			var group = await lolikiller.groupMetadata(from)
			var member = group['participants']
			var mem = []
			member.map( async adm => {
				mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
			})
			var options = {
				text: value,
				contextInfo: { mentionedJid: mem },
				quoted: faketoko
			}
			lolikiller.sendMessage(from, options, text,{quoted : faketoko})
			break
			case 'blocklist':
		    if (!isUser) return reply(mess.only.user_bot)
			ini_txt = '*↦═══[* Blocklist lolikiller\n'
			for (let block of lolikiller.blocklist) {
				ini_txt += `*║↦*  wa.me/${block.split('@')[0]}\n`
			}
			ini_txt += `*↦═══[* Total : ${lolikiller.blocklist.length}`
			lolikiller.sendMessage(from, ini_txt.trim(), extendedText, {quoted: loli, contextInfo: {"mentionedJid": blocked}})
			break
			case 'ping':
		    if (!isUser) return reply(mess.only.user_bot)
			const timestamp = speed();
			const latensi = speed() - timestamp
			exec(`neofetch --stdout`, (error, stdout, stderr) => {
				const child = stdout.toString('utf-8')
				const teks = child.replace(/Memory:/, "Ram:")
				const pingnya = `*↦ ${teks}Speed: ${latensi.toFixed(4)} Second*`
				fakegroup2(pingnya)
			})
			break
			case 'join':
		    if (!isUser) return reply(mess.only.user_bot)
			try {
				if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
				ini_url = args[0]
				if (!q) return fakegroup2('*↦* Masukan link group')
				var codeInvite = ini_url.split('https://chat.whatsapp.com/')[1]
				if (!codeInvite) return fakegroup('*↦* pastikan link sudah benar!')
				var response = await lolikiller.acceptInvite(codeInvite)
				fakestatus('*↦* SUKSES')
			} catch {
				fakegroup2('*↦* LINK ERROR!')
			}
			break
			case 'runtime':
		    if (!isUser) return reply(mess.only.user_bot)
			run = process.uptime()
			teks = `${kyun(run)}`
			fakegroup2(teks)
			break
			case 'info':
		    if (!isUser) return reply(mess.only.user_bot)
			me = lolikiller.user
			uptime = process.uptime()
			const timestampp = speed();
			const latensii = speed() - timestampp
			exec(`neofetch --stdout`, (error, stdout, stderr) => {
				const childd = stdout.toString('utf-8')
				const teks = childd.replace(/Memory:/, "Ram:")
				const pingnyaa = `${teks}${latensii.toFixed(4)} Second`
			    ini_txt = `
*↦═══[ lolikiller - Info ]═══↦*
*║*
*║↦ Bot Name :* ${me.name}
*║↦ Bot Number :* ${me.jid}
*║↦ Prefix :* [ ${prefix} ]
*║↦ Date :* ${lolikiller.referenceDate}
*║↦ Api :* https://lolikiller.herokuapp.com/api
*║↦ Total Block Contact :* ${lolikiller.blocklist.length}
*║↦ Speed :* ${pingnyaa}
*║↦ WA version* : ${lolikiller.user.phone.wa_version}
*║↦ Mcc :* ${lolikiller.user.phone.mcc}
*║↦ Mnc :* ${lolikiller.user.phone.mnc}
*║↦ Os Version :* ${lolikiller.user.phone.os_version}
*║↦ Manufacturer :* ${lolikiller.user.phone.device_manufacturer}
*║↦ Model :* ${lolikiller.user.phone.device_model}
*║↦ Version :* ${lolikiller.version}
*║↦ Build Number :* ${lolikiller.user.phone.os_build_number}
*║↦ Browser :* ${lolikiller.browserDescription[1]}
*║↦ Server :* ${lolikiller.browserDescription[0]}
*║↦ Version :* ${lolikiller.browserDescription[2]}
*║↦ Request :* ${lolikiller.pendingRequestTimeoutMs}
*║↦ State :* ${lolikiller.state}
*║↦ Auto Reconnect :* ${lolikiller.autoReconnect}
*║↦ Phone Connected :* ${lolikiller.phoneConnected}
*║↦ Message Log :* ${lolikiller.msgCount}
*║↦ Contact Cheklist :* ${lolikiller.phoneCheckListeners}
*║↦ Last Seen :* ${lolikiller.lastSeen}
*║↦ Logger Level :* ${lolikiller.logger.level}
*║↦ Logger Debug :* ${lolikiller.logger.debug}
*║↦ Last Recaived Message :* ${lolikiller.lastChatsReceived}
*║↦ The bot is active on :* ${kyun(uptime)}
*↦════════[☆] ═══════↦*
`
			    fakestatus(ini_txt)
			})
			break
			case '>':
			case 'run':
			if (!loli.key.fromMe) return
			let code = args.join(" ")
			try {
				if (!code) return lolikiller.reply(from,'No java script code', id)
				let evaled;
				if (code.includes("--silent") && code.includes("--async")){
					code = code.replace("--async", "").replace("--silent", "");
					return await eval(`(async () => { ${code} })()`)
				} else if (code.includes("--async")) {
					code = code.replace("--async", "");
					evaled = await eval(`(async () => { ${code} })()`)
				} else if (code.includes("--silent")) {
					code = code.replace("--silent", "");
					return await eval(code);
				} else evaled = await eval(code);
				if (typeof evaled !== "string")
				evaled = require("util").inspect(evaled, { depth: 0 });
				let output = clean(evaled);
				var options = {
					contextInfo: {
						participant: '0@s.whatsapp.net',
						quotedMessage: {
							extendedTextMessage: {
								text: "*↦ COMPLETE*"
							}
						}
					}
				}
				lolikiller.sendMessage(from, `<//>`, text, options)
			} catch(err) {
				console.error(err)
				reply(err)
			}
			function clean(text) {
				if (typeof text === "string")
				return text
				.replace(/`/g, `\`${String.fromCharCode(8203)}`)
				.replace(/@/g, `@$(String.fromCharCode(8203)}`);
				else return text;
			}
			break
			case 'exec':
			if (!loli.key.fromMe) return
			const cmyd = body.slice(6)
			var itsme = `0@s.whatsapp.net`
			var split = `*EXECUTOR lolikiller*`
			const term = {
				contextInfo: {
					participant: itsme,
					quotedMessage: {
						extendedTextMessage: {
							text: split,
						}
					}
				}
			}
			exec (cmyd, (err, stdout) => {
				if (err) return lolikiller.sendMessage(from, `${err}`, text,{ quoted: faketoko })
				if (stdout) {
					lolikiller.sendMessage(from, stdout, text, term)
				}
			})
			break
			case 'return':
			if (!loli.key.fromMe) return
			return fakegroup2(JSON.stringify(eval(args.join(''))))
			break
			case 'setreply':
			if (!loli.key.fromMe) return
			if (!q) return fakegroup(mess.wrongFormat)
			fake = q
			fakegroup(`*↦ Succes Mengganti Conversation Fake :* ${q}`)
			break
			case 'setfakeimg':
			if (!loli.key.fromMe) return
			if (!isQuotedImage) return fakegroup('Reply image!')
			fimek = body.slice(8)
			fimek2 = JSON.parse(JSON.stringify(loli).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
			fimek3 = await lolikiller.downloadMediaMessage(fimek2)
			imagenya.push(`${fimek}`)
			fs.writeFileSync(`./media/ward3.jpeg`, fimek3)
			fs.writeFileSync('./media/imeeg.json', JSON.stringify(imagenya))
			fimek4 = '*↦ Succes Change Fake Image*'
			lolikiller.sendMessage(from, fimek4, MessageType.text,{quoted: faketoko})
			break
			case 'setthumb':
			if (!loli.key.fromMe) return
			if (!isQuotedImage) return fakegroup('Reply image!')
			tumb = body.slice(8)
			tumb2 = JSON.parse(JSON.stringify(loli).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
			tumb3 = await lolikiller.downloadMediaMessage(tumb2)
			imagenya.push(`${tumb}`)
			fs.writeFileSync(`./media/ward.jpeg`, tumb3)
			fs.writeFileSync('./media/img.json', JSON.stringify(imagenya))
			tumb4 = '*↦ Succes Change Thumbnail*'
			lolikiller.sendMessage(from, tumb4, MessageType.text,{quoted: faketoko})
			break
			case 'setpp':
			if (!loli.key.fromMe) return
			lolikiller.updatePresence(from, Presence.composing)
			if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setpp atau tag gambar yang sudah dikirim`)
			enmedia = JSON.parse(JSON.stringify(loli).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await lolikiller.downloadAndSaveMediaMessage(enmedia)
			await lolikiller.updateProfilePicture(botNumber, media)
			fakegroup2('*↦ Success mengganti photo profile*')
			break
			case 'upswtxt':
			if (!loli.key.fromMe) return
			lolikiller.updatePresence(from, Presence.composing)
			await lolikiller.sendMessage('status@broadcast', `${q}`, extendedText)
			ini_txt = `*↦ Success Up Story Wa Teks* ${q}`
			fakestatus(ini_txt)
			break
			case 'upswimg':
			if (!loli.key.fromMe) return
			lolikiller.updatePresence(from, Presence.composing)
			if (isQuotedImage) {
				const stori = isQuotedImage ? JSON.parse(JSON.stringify(loli).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : loli
				ini_sw = await lolikiller.downloadMediaMessage(stori)
				lolikiller.sendMessage('status@broadcast', ini_sw, image, { caption: `${q}` })
			}
			ini_txt = `*↦ Success Upload Story Image With Caption* ${q}`
			fakestatus(ini_txt)
			break
			case 'upswvid':
			if (!loli.key.fromMe) return
			lolikiller.updatePresence(from, Presence.composing)
			if (isQuotedVideo) {
				const stori = isQuotedVideo ? JSON.parse(JSON.stringify(loli).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : loli
				ini_sw = await lolikiller.downloadMediaMessage(stori)
				lolikiller.sendMessage('status@broadcast', ini_sw, video, { caption: `${q}` })
			}
			ini_txt = `*↦ Success Upload Story Video With Caption* ${q}`
			fakestatus(ini_txt)
			break
					case 'clearall':
					if (!loli.key.fromMe) return 
					anu = await lolikiller.chats.all()
					lolikiller.setMaxListeners(25)
					for (let _ of anu) {
						lolikiller.modifyChat(_.jid, ChatModification.delete)
					}
				fakegroup2('*↦ Success ClearAll!*')
				break
			case 'getpic':
			if (!isGroup) return reply(mess.only.group)
		    if (!isUser) return reply(mess.only.user_bot)
			if (!loli.key.fromMe & !isGroupAdmins) return reply(mess.only.group_admin)
			if (loli.message.extendedTextMessage != undefined){
				mentioned = loli.message.extendedTextMessage.contextInfo.mentionedJid
				try {
					ini_pic = await lolikiller.getProfilePicture(mentioned[0])
				} catch {
					pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
				}
				ini_thumb = await getBuffer(ini_pic)
				lolikiller.sendMessage(from, ini_thumb, MessageType.image,{quoted: loli})
			}
			break
			case 'leave':
			if (!isGroup) return reply(mess.only.group)
		    if (!isUser) return reply(mess.only.user_bot)
			if (!loli.key.fromMe & !isGroupAdmins) return reply(mess.only.group_admin)
			setTimeout( () => {
				lolikiller.groupLeave(from, groupId)
			}, 5000)
			fakegroup2(`*↦* Bye Bye Member *${groupMetadata.subject}*`)
			break
			case 'leavetime':
			if (!isGroup) return reply(mess.only.group)
		    if (!isUser) return reply(mess.only.user_bot)
			if (!loli.key.fromMe & !isGroupAdmins) return reply(mess.only.group_admin)
			lolikiller.updatePresence(from, Presence.composing)
			if (args[1]=="detik") {var timer = args[0]+"000"
			} else if (args[1]=="menit") {var timer = args[0]+"0000"
			} else if (args[1]=="jam") {var timer = args[0]+"00000"
			} else {return reply(`Cose :\ndetik\menit\jamExample: ${prefix + command} 20 detik`)}
			fakegroup2(`*↦* ${args[0]} ${args[1]} lagi, Bot keluar dari *${groupMetadata.subject}*`)
			setTimeout( () => {
				fakegroup2('*↦ Bye Bye ')
				lolikiller.groupLeave(from, groupId)
			}, timer)
			break
			case 'group':
			if (!isGroup) return reply(mess.only.group)
			if (!isBotGroupAdmins) return reply(mess.only.bot_admin)
		    if (!isUser) return reply(mess.only.user_bot)
			if (!loli.key.fromMe & !isGroupAdmins) return reply(mess.only.group_admin)
			if (args[0] === 'open' ) {
				lolikiller.groupSettingChange(from, GroupSettingChange.messageSend, false)
				fakegroup(`*↦* Success Open Group\n*${groupMetadata.subject}*`)
			} else if (args[0] === 'close' ) {
				await lolikiller.groupSettingChange(from, GroupSettingChange.messageSend, true)
				fakegroup(`*↦* Success Close Group\n*${groupMetadata.subject}*`)
			}
			break
			case 'opentime':
			if (!isGroup) return reply(mess.only.group)
			if (!isBotGroupAdmins) return reply(mess.only.bot_admin)
		    if (!isUser) return reply(mess.only.user_bot)
			if (!loli.key.fromMe & !isGroupAdmins) return reply(mess.only.group_admin)
			lolikiller.updatePresence(from, Presence.composing)
			if (args[1]=="detik") {var timer = args[0]+"000"
			} else if (args[1]=="menit") {var timer = args[0]+"0000"
			} else if (args[1]=="jam") {var timer = args[0]+"00000"
			} else {return reply(`Cose :\ndetik\menit\jamExample: ${prefix + command} 20 detik`)}
			fakegroup2(`*↦* ${args[0]} ${args[1]} lagi, Group *${groupMetadata.subject}* Di Buka!!`)
			setTimeout( () => {
				lolikiller.groupSettingChange(from, GroupSettingChange.messageSend, false);
				lolikiller.sendMessage(from, `*↦* Success Open Group\n*${groupMetadata.subject}*`, text,{contextInfo: {forwardingScore: 508, isForwarded: true}, quoted : faketoko})
			}, timer)
			break
			case 'closetime':
			if (!isGroup) return reply(mess.only.group)
			if (!isBotGroupAdmins) return reply(mess.only.bot_admin)
		    if (!isUser) return reply(mess.only.user_bot)
			if (!loli.key.fromMe & !isGroupAdmins) return reply(mess.only.group_admin)
			lolikiller.updatePresence(from, Presence.composing)
			if (args[1]=="detik") {var timer = args[0]+"000"
			} else if (args[1]=="menit") {var timer = args[0]+"0000"
			} else if (args[1]=="jam") {var timer = args[0]+"00000"
			} else {return reply(`Cose :\ndetik\menit\jamExample: ${prefix + command} 20 detik`)}
			fakegroup2(`*↦* ${args[0]} ${args[1]} lagi, Group *${groupMetadata.subject}* Di Tutup!!`)
			setTimeout( () => {
				lolikiller.groupSettingChange(from, GroupSettingChange.messageSend, true);
				lolikiller.sendMessage(from, `*↦* Success Close Group\n*${groupMetadata.subject}*`, text,{contextInfo: {forwardingScore: 508, isForwarded: true}, quoted : faketoko})
			}, timer)
			break
			case 'tagall':
			if (!isGroup) return reply(mess.only.group)
			if (!isBotGroupAdmins) return reply(mess.only.bot_admin)
		    if (!isUser) return reply(mess.only.user_bot)
			if (!loli.key.fromMe & !isGroupAdmins) return reply(mess.only.group_admin)
			members_id = []
			ini_txt = (args.length > 1) ? body.slice(8).trim() : ''
			ini_txt += '\n'
			for (let mem of groupMembers) {
				ini_txt += `*↦*  @${mem.jid.split('@')[0]}\n`
				members_id.push(mem.jid)
			}
			mentions(`*↯ [ By ${pushname} ] ↯*`+ ini_txt +'↯ [ lolikiller - Self Bot ] ↯*', members_id, true)
			break
			case 'delete':
			case 'd':
			if (!isUser) return reply(mess.only.user_bot)
			lolikiller.deleteMessage(from, { id: loli.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
			break
			default:
				if (budy.includes("://chat.whatsapp.com/")){
					if (!isAntiLink) return
					if (!isBotGroupAdmins) return reply('Untung Bot Bukan Admin')
					if (isGroupAdmins) return reply(`*${pushname}* Untung lu admin`)
					if (loli.key.fromMe) return
					lolikiller.updatePresence(from, Presence.composing)
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		            var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
						reply(`*↯ [ LINK GROUP DETECTED ] ↯*\n\nMaaf *${pushname}* lu gw kick dari group *${groupMetadata.subject}*`)
						setTimeout( () => {
						lolikiller.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 100)
		setTimeout( () => {
		lolikiller.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
		setTimeout( () => {
		reply(`*↯ [ TAKE OF OTW KICK! ] ↯*`)
		}, 0)
		}
        if (budy.includes("@6283803728334")){
        const d = fs.readFileSync('./media/patrik.webp');
        lolikiller.sendMessage(from, d, sticker, {quoted: loli, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "APA SIH TAG TAG!!", 'jpegThumbnail': fs.readFileSync('./media/patrik2.webp')}}}})
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
					return lolikiller.sendMessage(from, `"6283803728334-1618835961@g.us"`, text,{quoted: faketoko})
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
