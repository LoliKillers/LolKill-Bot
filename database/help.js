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
} = require("@adiwajshing/baileys")
const fs = require("fs")
const help = (prefix, pushname) => {
	return `[ Rara - Self Bot ]

❏ YOUR INFO
Name : ${pushname}
Prefix : ${prefix}

❏ REST API
https://ramra.herokuapp.com/api

`
}
exports.help = help
