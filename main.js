require('rootpath')()
const {
    WAConnection,
    MessageType,
    Mimetype,
    MessageOptions,
    waChatKey ,
    mentionedJid
} = require('@adiwajshing/baileys');
const { getBuffer } = require('lib/getbuffer');
const { getRandom } = require('lib/getrandom');
const cError = require('console-error');
const cInfo = require('console-info');
const cWarn = require('console-warn');
const axios = require('axios');
const request = require('request');
const {
    readFileSync: read,
    writeFileSync: write,
    createWriteStream: create,
    unlinkSync: unlink,
    existsSync: exists
}= require('fs');
const { exec } = require('child_process');
const moment = require('moment-timezone');
const ffmpeg = require('fluent-ffmpeg');
const speed = require('performance-now');
const phoneNum = require('awesome-phonenumber');
const { fetchJson } = require("lib/fetch");

const tebakgambar = JSON.parse(read('./database/tebakgambar.json'));

var banChats = false
var simbol = "║❏"
const keyloli = 'Indun' //Silahkan signup di https://api.loli.liveslife.biz untuk mendapatkan apikey, untuk apikeynya akan dikirim melalui email yang anda kirimkan tadi
const _listImg = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41"]
const xyz = _listImg[Math.floor(Math.random() * _listImg.length)]

module.exports = loli = async (loli, lol) => {
	try {
        if (!lol.hasNewMessage) return
        lol = lol.messages.all()[0]
		if (!lol.message) return
		if (lol.key && lol.key.remoteJid == 'status@broadcast') return
		global.blocked
        lol.message = (Object.keys(lol.message)[0] === 'ephemeralMessage') ? lol.message.ephemeralMessage.message : lol.message
        const content = JSON.stringify(lol.message)
		const from = lol.key.remoteJid
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
        const type = Object.keys(lol.message)[0]        
        const cmd = (type === 'conversation' && lol.message.conversation) ? lol.message.conversation : (type == 'imageMessage') && lol.message.imageMessage.caption ? lol.message.imageMessage.caption : (type == 'videoMessage') && lol.message.videoMessage.caption ? lol.message.videoMessage.caption : (type == 'extendedTextMessage') && lol.message.extendedTextMessage.text ? lol.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        const prefix = /^[.#$!z]/.test(cmd) ? cmd.match(/^[.#$!z]/gi) : '-'          	
        bdy = (type === 'conversation' && lol.message.conversation.startsWith(prefix)) ? lol.message.conversation : (type == 'imageMessage') && lol.message.imageMessage.caption.startsWith(prefix) ? lol.message.imageMessage.caption : (type == 'videoMessage') && lol.message.videoMessage.caption.startsWith(prefix) ? lol.message.videoMessage.caption : (type == 'extendedTextMessage') && lol.message.extendedTextMessage.text.startsWith(prefix) ? lol.message.extendedTextMessage.text : ''
		_bdy = (type === 'conversation') ? lol.message.conversation : (type === 'extendedTextMessage') ? lol.message.extendedTextMessage.text : ''
		const command = bdy.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const _msg = bdy.trim().split(/ +/).slice(1)
		const _Cmd = bdy.startsWith(prefix)
		const q = _msg.join(' ')
		const _Group = from.endsWith('@g.us')
		const sender = _Group ? lol.participant : lol.key.remoteJid
		const allChats = await loli.chats.all()
		const groupMetadata = _Group ? await loli.groupMetadata(from) : ''
		const groupName = _Group ? groupMetadata.subject : ''
		const groupId = _Group ? groupMetadata.jid : ''
		const groupMembers = _Group ? groupMetadata.participants : ''
		const groupDesc = _Group ? groupMetadata.desc : ''
		const groupOwner = _Group ? groupMetadata.owner : ''
		const _Me = lol.key.fromMe
		const getGroupAdmins = (participants) => {
		    admin = []
		    for (var x of participants) {
		        x.isAdmin ? admin.push(x.jid) : ''
		    }
		    return admin
		}
		
		const botNumber = loli.user.jid
		const groupAdmins = _Group ? getGroupAdmins(groupMembers) : ''
		const _GroupAdmins = groupAdmins.includes(sender) || false
		const _BotGroupAdmins = groupAdmins.includes(botNumber) || false
		const _Admin = groupAdmins.includes(sender) || false
        //const _Vote = _Group ? voting.includes(from) : false
        const conts = lol.key.fromMe ? loli.user.jid : loli.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = lol.key.fromMe ? loli.user.name : conts.notify || conts.vname || conts.name || '-'

        
        const mentionByTag = type == "extendedTextMessage" && lol.message.extendedTextMessage.contextInfo != null ? lol.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByReply = type == "extendedTextMessage" && lol.message.extendedTextMessage.contextInfo != null ? lol.message.extendedTextMessage.contextInfo.participant || "" : ""
        const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
        mention != undefined ? mention.push(mentionByReply) : []
        const mentionUser = mention != undefined ? mention.filter(n => n) : []
        const mentioned = mention
        
		var dates = moment().tz('Asia/Jakarta').format("YYYY-MM-DDTHH:mm:ss");
        var date = new Date(dates);
        var tahun = date.getFullYear();
        var bulan = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
        
        switch(hari) {
            case 0: hari = "Minggu"; break;
            case 1: hari = "Senin"; break;
            case 2: hari = "Selasa"; break;
            case 3: hari = "Rabu"; break;
            case 4: hari = "Kamis"; break;
            case 5: hari = "Jum`at"; break;
            case 6: hari = "Sabtu"; break;
        }
		switch(bulan) {
            case 0: bulan = "Januari"; break;
            case 1: bulan = "Februari"; break;
            case 2: bulan = "Maret"; break;
            case 3: bulan = "April"; break;
            case 4: bulan = "Mei"; break;
            case 5: bulan = "Juni"; break;
            case 6: bulan = "Juli"; break;
            case 7: bulan = "Agustus"; break;
            case 8: bulan = "September"; break;
            case 9: bulan = "Oktober"; break;
            case 10: bulan = "November"; break;
            case 11: bulan = "Desember"; break;
        }
        
        const Tanggal= "" + hari + ", " + tanggal + " " + bulan + " " + tahun;
        const Jam = moment.tz('Asia/Jakarta').format('HH:mm:ss z')
		const _thumbnail = read(`img/loli${xyz}.jpg`)

        const _Url = (url) => {
            return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }
        
        const sendImg = (img) => {
            loli.sendMessage(from, img, image, { quoted: lol })
        }
	
        const sendImgUrl = (url, quotod, cap) => {
        loli.sendMessage(from, { url: url }, MessageType.image, { mimetype: Mimetype.jpg, quoted: quotod, caption: cap })
        }
	
        const reply = (_txt) => {
            loli.sendMessage(from, _txt, text, { quoted: lol, thumbnail: _thumbnail, sendEphemeral: true })
        }
        
        const mentions = (teks, memberr, id) => {
            let ai = (id == null || id == undefined || id == false) ? loli.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : loli.sendMessage(from, teks.trim(), extendedText, { quoted: msg, contextInfo: { "mentionedJid": memberr } })
            return ai
        }
        
        const sendMediaURL = async(to, url, text="", mids=[]) => {
            await new Promise((r) => setTimeout(r, 1000));
            if (mids.length > 0) {
                text = normalizeMention(to, text, mids)
            }
            const fn = Date.now() / 10000;
            const filename = fn.toString()
            let mime = ""
            var download = function (uri, filename, callback) {
                request.head(uri, function (err, res, body) {
                    mime = res.headers['content-type']
                    request(uri).pipe(create(filename)).on('close', callback);
                });
            };
            download(url, filename, async function () {
                cInfo('Done ✓');
                let media = read(filename)
                let type = mime.split("/")[0]+"Message"
                if (mime === "image/gif") {
                    type = MessageType.video
                    mime = Mimetype.gif
                }
                if (mime.split("/")[0] === "audio") {
                    mime = Mimetype.mp4Audio
                }
                loli.sendMessage(to, media, type, { quoted: lol, mimetype: mime, caption: text, contextInfo: {"mentionedJid": mids}})
                unlink(filename)
            });
        }
        
        const sendStickerFromUrl = async(to, url) => {
            var _lkil = Date.now() / 10000;
            var download = function(uri, filename, callback) {
                request.head(uri, function (err, res, body) {
                    request(uri).pipe(create(filename)).on('close', callback);
                });
            };
            download(url, './stick' + _lkil + '.png', async function () {
                cInfo('Done ✓')
                var _file = './stick' + _lkil + '.png'
                var _stc = './stick' + _lkil + '.webp'
                exec(`ffmpeg -i ${_file} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${_stc}`, (err) => {
                    var _mdia = read(_stc)
                    loli.sendMessage(to, _mdia, MessageType.sticker, { quoted: lol })
                    unlink(_file)
                    unlink(_stc)
                });
            });
        };
        
        msg = {
            wait: 'Wait a moment!',
            error: 'Opsss, looks like something went wrong?',
            linkErr: 'The link is error, please check again',
            only: {
                owner: 'Owner bot only!',
                admin: 'Admin group only!'
            },
            sticker: {
                error: 'Opss, an error occurred, please try again later'
            }
        }
        
        function addMetadata(packname, author) {	
            if (!packname) packname = 'Self-LK'; if (!author) author = 'LoliKillers';	
            author = author.replace(/[^a-zA-Z0-9]/g, '');	
            let name = `${author}_${packname}`
            if (exists(`./stick/${name}.exif`)) return `./stick/${name}.exif`
            const json = {	
                "sticker-pack-name": packname,
                "sticker-pack-publisher": author,
            }
            const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
            const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

            let len = JSON.stringify(json).length	
            let last	

            if (len > 256) {	
                len = len - 256	
                bytes.unshift(0x01)	
            } else {	
                bytes.unshift(0x00)	
            }	

            if (len < 16) {	
                last = len.toString(16)	
                last = "0" + len	
            } else {	
                last = len.toString(16)	
            }	

            const buf2 = Buffer.from(last, "hex")	
            const buf3 = Buffer.from(bytes)	
            const buf4 = Buffer.from(JSON.stringify(json))	

            const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

            write(`./stick/${name}.exif`, buffer, (err) => {	
                return `./stick/${name}.exif`	
            })	
        }

        if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !_Cmd && _bdy.match(/[1-9]{1}/)) {
            _kuis = true
            _jwb = tebakgambar[sender.split('@')[0]]
            if (_bdy.toLowerCase() == _jwb) {
                reply("Jawaban Anda Benar!")
                delete tebakgambar[sender.split('@')[0]]
                write("database/tebakgambar.json", JSON.stringify(tebakgambar))
            } else {
                reply("Jawaban Anda Salah!")
            }
        }
        const sendPaymentMessage = {
            requestPaymentMessage: {
                    noteMessage: "Entahlah",
                        currencyCodeIso4217: "IDR",
                        amount1000: "100000",
                        requestFrom: `Wea Bot 🤖`,
                        expiryTimestamp: 1,
                        amount: `100000`,
                  }
        }
        function ActiveTime(seconds){
            function Mounting(s){
                return (s < 10 ? '0' : '') + s;
            }
            var hours = Math.floor(seconds / (60*60));
            var minutes = Math.floor(seconds % (60*60) / 60);
            var seconds = Math.floor(seconds % 60);

            return `${Mounting(hours)} Hours ${Mounting(minutes)} Minutes ${Mounting(seconds)} Seconds`
        }
        
        const _Media = (type === 'imageMessage' || type === 'videoMessage')
		const _QuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const _QuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const _QuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const _QuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

        if (_Cmd && _Group) cInfo('[ COMMAND ] +>', command, '+> ', pushname, '+> ', groupName)
        if (_Cmd && !_Group) cInfo('[ COMMAND ] +>', command, '+> ', pushname)
        if (!_Cmd && !_Group) console.log('[ PRIVATE ] +>', pushname)
        if (!_Cmd && _Group) console.log('[  GROUP  ] +>', pushname, '+> ', groupName)
        
        if (!lol.key.fromMe && banChats === true) return
        switch (command) {
            case 'help':
            case 'menu':
            var _date = Date()
            var uptime = process.uptime()
            var _tmnu = `<//>\n\n`
            + `*❏ INFO BOT <+]*\n\n`
            + `> *Name* : ${loli.user.name}\n`
            + `> *Nomor* : ${loli.user.jid}\n`
            + `> *Prefix* : [ ${prefix} ]\n`
            + `> *Runtime* : ${ActiveTime(uptime)}\n`
            + `\n\n*❏ STALKING*\n`
            + `${simbol} _${prefix}ghstalk (username)_\n`
            + `${simbol} _${prefix}pintstalk (username)_\n`
            + `╙───+>\n`
            + `\n*❏ DOWNLOADER*\n`
            + `${simbol} _${prefix}tiktoknowm (url)_\n`
            + `${simbol} _${prefix}ytdlmp3 (url)_\n`
            + `${simbol} _${prefix}ytdlmp4 (url)_\n`
            + `╙───+>\n\n`
            var imgs = await loli.prepareMessage('0@c.us', _thumbnail, image, { thumbnail: _thumbnail })
            var imgCatalog = imgs.message.imageMessage
            var ctlg = await loli.prepareMessageFromContent(from, {
                "productMessage": {
                    "product": {
                        "productImage": imgCatalog,
                        "productId": "4457725420906655",
                        "title": `Self Bot LK 🤖`,
                        "description": _tmnu,
                        "footerText": `© Loli Killers`,
                        "currencyCode": "IDR",
                        "priceAmount1000": "100000000",
                        "productImageCount": 1,
                        "firstImageId": 1,
                        "salePriceAmount1000": "35000000",
                        "retailerId": `${Tanggal}\n${Jam}`,
                        "url": "https://api.loli.loveslife.biz"
                    },
                    "businessOwnerJid": "6285785445412@s.whatsapp.net",
                }
            }, { quoted: lol, mimetype: 'image/jpeg' })
            loli.relayWAMessage(ctlg)
            break
            case "ghstalk":
                var username = _msg.join("")
                if (!username) return reply(`_Example_ : ${prefix + command} LoliKillers`)
                reply(msg.wait)
                try {
                    var data = await fetchJson(`https://api.loli.loveslife.biz/api/github_stalk?apikey=${keyloli}&username=${username}`)
                    var x = data.result
                    var reslt = `*Username* : ${x.username}\n`
                    + `*Id* : ${x.id}\n`
                    + `*Node Id* : ${x.nodeId}\n`
                    + `*Type* : ${x.type}\n`
                    + `*Site Admin* : ${x.siteAdmin}\n`
                    + `*Name* : ${x.name}\n`
                    + `*Company* : ${x.company}\n`
                    + `*Blog* : ${x.blog}\n`
                    + `*Location* : ${x.location}\n`
                    + `*Hireable* : ${x.hireable}\n`
                    + `*Bio* : ${x.bio}\n`
                    + `*Twitter* : ${x.twitterUsername}\n`
                    + `*Repo* : ${x.publicRepos}\n`
                    + `*Gists* : ${x.publicGists}\n`
                    + `*Followers* : ${x.followers}\n`
                    + `*Following* : ${x.following}\n`
                    + `*Created* : ${x.createdAt}\n`
                    + `*Update* : ${x.updatedAt}\n`
                    var avatar = await getBuffer(data.result.avatarUrl)
                    loli.sendMessage(from, avatar, image, { quoted: lol, caption: reslt })
                } catch (err) {
                    console.log(err)
                    reply(msg.error)
                }
            break
            case "pintstalk":
                var username = _msg.join("")
                if (!username) return reply(`_Example_ : ${prefix + command} Loli_Killer`)
                reply(msg.wait)
                try {
                    var data = await fetchJson(`https://api.loli.loveslife.biz/api/pinterest_stalk?apikey=${keyloli}&username=${username}`)
                    var x = data.result
                    var reslt = `*Followers* : ${x.followerCount}\n`
                    + `*About* : ${x.about}\n`
                    + `*Pin Count* : ${x.pinCount}\n`
                    + `*Url* : ${x.url}\n`
                    + `*Fullname* : ${x.fullname}\n`
                    + `*Location* : ${x.location}\n`
                    + `*Id* : ${x.id}\n`
                    var avatar = await getBuffer(data.result.thumbnail)
                    loli.sendMessage(from, avatar, image, { quoted: lol, caption: reslt })
                } catch (err) {
                    console.log(err)
                    reply(msg.error)
                }
            break
            case "tiktoknowm":
                var url = _msg.join("")
                if (!url) return reply(`_Example_ : ${prefix + command} https://www.tiktok.com/@gunxz__/video/7023791466535226651?sender_device=mobile&sender_web_id=7019783975653737985&is_from_webapp=v1&is_copy`)
                reply(msg.wait)
                try {
                    var data = await fetchJson(`https://api.loli.loveslife.biz/api/tiktok_downloader?apikey=${keyloli}&url=${url}`)
                    var ttnowm = await getBuffer(data.result.tiktokNoWm)
                    loli.sendMessage(from, ttnowm, video, { quoted: lol })
                } catch (err) {
                    console.log(err)
                    reply(msg.error)
                }
            break
            case "ytdlmp3":
                var url = _msg.join("")
                if (!url) return reply(`_Example_ : ${prefix + command} https://youtu.be/MRQ7_QkJjiM`)
                reply(msg.wait)
                try {
                    var data = await fetchJson(`https://api.loli.loveslife.biz/api/youtubedl_mp3?apikey=${keyloli}&url=${url}`)
                    var x = data.result
                    var txt = `*Title* : ${x.title}\n`
                    + `*Description* : ${x.description}\n`
                    + `*Channel* : ${x.channelName}\n`
                    + `*Views* : ${x.viewCount}\n`
                    + `*Category* : ${x.category}\n`
                    + `*Publish* : ${x.publishDate}\n`
                    + `*Upload* : ${x.uploadDate}\n`
                    var img = await getBuffer(x.thumbnail.thumbnails)
                    await loli.sendMessage(from, img, image, { caption: txt, quoted: lol })
                    var music = await getBuffer(x.url)
                    await loli.sendMessage(from, music, audio, { quoted: lol })
                } catch (err) {
                    console.log(err)
                    reply(msg.error)
                }
            break
            case "ytdlmp4":
                var url = _msg.join("")
                if (!url) return reply(`_Example_ : ${prefix + command} https://youtu.be/MRQ7_QkJjiM`)
                reply(msg.wait)
                try {
                    var data = await fetchJson(`https://api.loli.loveslife.biz/api/youtubedl_mp4?apikey=${keyloli}&url=${url}`)
                    var x = data.result
                    var txt = `*Title* : ${x.title}\n`
                    + `*Description* : ${x.description}\n`
                    + `*Channel* : ${x.channelName}\n`
                    + `*Views* : ${x.viewCount}\n`
                    + `*Category* : ${x.category}\n`
                    + `*Publish* : ${x.publishDate}\n`
                    + `*Upload* : ${x.uploadDate}\n`
                    var img = await getBuffer(x.thumbnail.thumbnails)
                    await loli.sendMessage(from, img, image, { caption: txt, quoted: lol })
                    var vidio = await getBuffer(x.url)
                    await loli.sendMessage(from, vidio, video, { quoted: lol })
                } catch (err) {
                    console.log(err)
                    reply(msg.error)
                }
            break
            default:
            if (_bdy.startsWith('>')) {
                try {
                    return loli.sendMessage(from, JSON.stringify(eval(_bdy.slice(2)), null, '\t'), text, { quoted: lol })
                } catch (e) {
                    e = String(e)
                    reply(e)
                }
            }
        }
    } catch (e) {
            cError(e)
    }
}
