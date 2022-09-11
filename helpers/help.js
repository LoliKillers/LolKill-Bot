function sendHelp(bot, chat) {
  const strings = require('./strings')();

  const privateText =
    chat.type === 'private' || chat.type === 'channel' ? 'helpPrivate' : 'helpPublic';

  const text = strings.translate(privateText, chat.language);
  bot.sendMessage(chat.id, text, {
    parse_mode: 'Markdown',
    disable_web_page_preview: true,
  });
}
function afterSetLang(bot, chat) {
  const strings = require('./strings')();
  
  const text = strings.translate('afterSetLang', chat.language);
  bot.sendMessage(chat.id, text, {
    parse_mode: 'Markdown',
    disable_web_page_preview: true,
  })
}
module.exports = {
  sendHelp,
  afterSetLang
};
