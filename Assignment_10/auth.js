const bcrypt = require("bcryptjs");
const users = require("./users");
const saltRounds = 16;

const _getIndex = (field, value) => {
  for (let i in users) if (users[i][field] === value) return i;
};

const validSession = sessionId => {
  if (_getIndex("_id", sessionId)) return true;
  return false;
};

const getPassword = usn => {
  const i = _getIndex("username", usn);
  if (i) return users[i].hashedPassword;
};

const setSession = (usn, sessionId) => {
  const i = _getIndex("username", usn);
  if (i) users[i]._id = sessionId;
};

const getUserFromSession = sessionId => {
  const i = _getIndex("_id", sessionId);
  if (i) return users[i];
};

const passwordsMatch = (requestPassword, userPassword) => {
  return bcrypt.compareSync(requestPassword, userPassword);
};

module.exports = {
  getUserFromSession: getUserFromSession,
  getPassword: getPassword,
  passwordsMatch: passwordsMatch,
  setSession: setSession,
  validSession: validSession
};
