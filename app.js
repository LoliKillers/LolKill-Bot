const path = require('path');
require('dotenv').config({
  path: path.join(__dirname, '/.env'),
});
const mongoose = require('mongoose');
const bot = require('./helpers/bot');
const config = require('./config');
const db = require('./helpers/db');
const language = require('./helpers/language');
const help = require('./helpers/help');
const youtube = require('./helpers/youtube');

global.Promise = require('bluebird');

global.Promise.config({ cancellation: true });

mongoose.Promise = require('bluebird');

mongoose.connect(config.database, {
  socketTimeoutMS: 0,
  connectTimeoutMS: 0,
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
mongoose.connection.on('disconnected', () => {
  mongoose.connect(config.database, {
    socketTimeoutMS: 0,
    connectTimeoutMS: 0,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
});
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

let timeoutOver = false;
setTimeout(() => {
  timeoutOver = true;
}, 5000);

bot.on('message', (msg) => {
  if (!timeoutOver) {
    return;
  }
  handle(msg);
});

function handle(msg) {
  if (!msg) {
    return;
  }
  if (msg.text && msg.text.includes('@') && !msg.text.includes('banofbot')) {
    return;
  }
  const isPrivateChat = msg.chat.type === 'private' || msg.chat.type === 'channel';
  const isCommand = msg.text && msg.entities && msg.entities[0] && msg.entities[0].type === 'bot_command';
  const isEntry = (msg.new_chat_participant && msg.new_chat_participant.username && msg.new_chat_participant.username === 'lolkilbot') || msg.group_chat_created;
  db.findChat(msg.chat)
    .then((chat) => {
      let isReply = msg.reply_to_message && msg.text && (msg.text.includes('lolkilbot') || msg.text.includes('@ban') || msg.text.includes('voteban') || msg.text.includes('Voteban') || msg.text.includes('/spam') || (chat.votekickWord && chat.votekickWord.split(', ').reduce((p, c) => {
              return (p || new RegExp( `(?<=[\\s,.:;"']|^)${c}(?=[\\s,.:;"']|$)`, 'gum').test(msg.text));
            }, false)));
      if ( msg.reply_to_message && msg.sticker && msg.sticker.file_id === 'CAADAQADyQIAAgdEiQTkPSm3CRyNIQI' ) { 
        isReply = true;
      }
      if (isCommand) {
        if (isPrivateChat || !chat.admin_locked) {
          if (msg.text.includes('start')) {
            language.sendLanguage(bot, chat, false);
          } else if (msg.text.includes('help')) {
            //if (isPrivateChat)
            help.sendHelp(bot, chat);
          } else if (msg.text.includes('language')) {
            language.sendLanguage(bot, chat, true);
          } else if (msg.text.includes('/ytdl')) {
            youtube.sendQueryYtdl(bot, chat, msg.text, true);
          } else if (meg.text.includes('/pinterest')) {
            
          }
        } else {
          admins.isAdmin(bot, chat.id, msg.from.id)
            .then((isAdmin) => {
              if (msg.text.includes('start')) {
                if (!isAdmin) return deleteMessage(msg.chat.id, msg.message_id);
                language.sendLanguage(bot, chat, false);
              } else if (msg.text.includes('help')) {
                if (!isAdmin) return deleteMessage(msg.chat.id, msg.message_id);
                help.sendHelp(bot, chat);
              } else if (msg.text.includes('language')) {
                if (!isAdmin) return deleteMessage(msg.chat.id, msg.message_id);
                language.sendLanguage(bot, chat, true);
              } 
            })
            .catch();
        }
      } else if (isEntry) {
        language.sendLanguage(bot, chat, false);
      } else if (isReply) {
        try {
          requests.startRequest(bot, msg);
        } catch (err) {
          console.error(err);
        }
      }
    })
    .catch();
}

bot.on('callback_query', (msg) => {
  const options = msg.data.split('~');
  const inline = options[0];
  if (inline === 'li') {
    language.setLanguage(bot, msg);
  } else if (inline === 'ytb') {
    youtube.getMedia(bot, msg);
  }
});

console.info('Bot is up and running');

function getUsername(member) {
  return `${member.user.username ? `@${member.user.username}` : `${member.user.first_name}${ member.user.last_name ? ` ${member.user.last_name}` : '' }`}`;
}

function deleteMessage(c, m) {
  try {
    bot.deleteMessage(c, m);
  } catch (err) {
  }
}