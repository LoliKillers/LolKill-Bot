const db = require('./db');
const help = require('./help');
const lolkilScraper = require('lolkil-scraper');
const request = require('request');
const strings = require('./strings')();

async function sendQueryYtdl(bot, chat, query, isCommand) {
  var url = query.substr(6).trim();
  if (!url) return bot.sendMessage(chat.id, strings.translate('ytExample', chat.language));
  const ytRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:|watch\?.*(?:|\&)v=|embed\/|v\/|shorts\/)|youtu\.be\/)([-_0-9A-Za-z]{11}|[-_0-9A-Za-z]{10})/;
  if (!ytRegex.test(url)) return bot.sendMessage(chat.id, strings.translate('ytInvalidLink', chat.language));
  var xx = await bot.sendMessage(chat.id, strings.translate('loading', chat.language));
  try {
    var _YtInfo = await lolkilScraper.download.youtube_dl_mp3(url);
    var text = `[${_YtInfo.result.title}](${url})\n`
    + strings.translate('ytResult', chat.language, _YtInfo.result.channel, _YtInfo.result.published, _YtInfo.result.views)
    const options = {
      parse_mode: 'Markdown',
      reply_markup: { inline_keyboard: youtubeKeyboard(isCommand, url) },
    };
    options.reply_markup = JSON.stringify(options.reply_markup);
    await bot.editMessageText(strings.translate('ytSuccess', chat.language), { chat_id: chat.id, message_id: xx.message_id });
    bot.sendMessage(chat.id, text, options);
  } catch {
    await bot.editMessageText(strings.translate('ytError', chat.language), { chat_id: chat.id, message_id: xx.message_id });
    
  }
}


function getMedia(bot, msg) {
  const options = msg.data.split('~');
  const isCommand = parseInt(options[1], 10) === 1;
  const code = options[2];
  const url = options[3];
  if (code === 'Audio') {
    var x = bot.editMessageText(strings.translate('ytDownloadAudio', msg.language), { chat_id: msg.message.chat.id, message_id: msg.message.message_id});
    lolkilScraper.download.youtube_dl_mp3(url)
    .then(async response => {
      var _Audio = await request(response.result.url);
      const fileOptions = {
        filename: response.result.title,
        contentType: 'audio/mp3',
      };
      await bot.sendAudio(msg.message.chat.id, _Audio, {}, fileOptions);
      await bot.editMessageText(strings.translate('ytSuccess', msg.language), { chat_id: msg.message.chat.id, message_id: x.message_id});
    })
    .catch(async e => {
      await bot.editMessageText(strings.translate('ytError', msg.language), {chat_id: msg.message.chat.id, message_id: x.message_id})
    });
  } else {
    var x = bot.editMessageText(strings.translate('ytDownloadVideo', msg.language), { chat_id: msg.message.chat.id, message_id: msg.message.message_id});
    lolkilScraper.download.youtube_dl_mp4(url)
    .then(async res => {
      var _Video = await request(res.result.url);
      await bot.sendVideo(msg.message.chat.id, _Video);
      await bot.editMessageText(strings.translate('ytSuccess', msg.language), { chat_id: msg.message.chat.id, message_id: msg.message.message_id});
    })
    .catch(async err => {
      await bot.editMessageText(stringify.translate('ytError', msg.language), {chat_id: msg.message.chat.id, message_id: msg.message.message_id})
    });
  }
}

function youtubeKeyboard(isCommand, url) {
  const list = youtube();
  const keyboard = Object.keys(list).map((key) => {
    const code = list[key];
    return [
      {
        text: key,
        callback_data: `ytb~${isCommand ? 1 : 0}~${code}~${url}`,
      },
      ];
  });
  return keyboard;
}

function youtube() {
  return {
    Audio: 'Audio',
    Video: 'Video'
  };
}

module.exports = {
  sendQueryYtdl,
  getMedia,
};
