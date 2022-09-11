const {
  Chat,
  User,
  Request,
} = require('../models');

function findChat(chat) {
  return Chat.findOne({ id: chat.id })
    .then((dbchat) => {
      if (dbchat) {
        return dbchat;
      }
      return new Chat(chat).save();
    });
}

function findChatsWithNewcomers() {
  return Chat.find({ 'newcomers.0': { '$exists': true } });
}

function findUser(user) {
  return User.findOne({ id: user.id })
    .then((dbuser) => {
      if (dbuser) {
        return dbuser;
      }
      return new User(user).save();
    });
}

function findRequest(id) {
  return Request.findById(id);
}

function createRequest(request) {
  const req = new Request(request);
  return req.save();
}

/** Exports */
module.exports = {
  findChat,
  findUser,
  findRequest,
  createRequest,
  findChatsWithNewcomers,
};
