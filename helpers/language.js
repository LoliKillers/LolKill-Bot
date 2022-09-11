const db = require('./db');
const help = require('./help');

function sendLanguage(bot, chat, isCommand) {
  const strings = require('./strings')();

  const text = strings.translate('selectLanguage', chat.language);
  const options = {
    parse_mode: 'Markdown',
    reply_markup: { inline_keyboard: languageKeyboard(isCommand) },
  };
  options.reply_markup = JSON.stringify(options.reply_markup);
  bot.sendMessage(chat.id, text, options);
}

function setLanguage(bot, msg) {
  const options = msg.data.split('~');
  const isCommand = parseInt(options[1], 10) === 1;
  const code = options[2];

  db.findChat(msg.message.chat)
    .then((chat) => {
      chat.language = code;
      return chat.save().then((dbchat) => {
        updateMessagewithSuccess(bot, msg.message, dbchat);
        if (!isCommand) {
          help.afterSetLang(bot, dbchat);
        }
      });
    })
    .catch((err) => updateMessagewithError(bot, msg.message, err));
}

function updateMessagewithError(bot, msg, error) {
  bot.editMessageText(`❗️ _${error.message}_`, {
    chat_id: msg.chat.id,
    message_id: msg.message_id,
    parse_mode: 'Markdown',
  });
}

function updateMessagewithSuccess(bot, msg, chat) {
  const strings = require('./strings')();

  bot.editMessageText(
    strings.translate('languageSelectedLolkilbot', chat.language),
    {
      chat_id: msg.chat.id,
      message_id: msg.message_id,
      parse_mode: 'Markdown',
    }
  );
}

function languageKeyboard(isCommand) {
  const list = languages();
  const keyboard = Object.keys(list).map((key) => {
    const code = list[key];
    return [
      {
        text: key,
        callback_data: `li~${isCommand ? 1 : 0}~${code}`,
      },
    ];
  });
  return keyboard;
}

function languages() {
  return {
    Indonesian: 'id',
    English: 'en'
  };
}

module.exports = {
  sendLanguage,
  setLanguage,
};
