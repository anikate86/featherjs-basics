const users = require('./users/users.service.js');
const contacts = require('./contacts/contacts.service.js');
const files = require('./files/files.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(contacts);
  app.configure(files);
};
