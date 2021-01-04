const auth = require("./auth");
const cookieName = "authCookie";

const expireCookie = res => {
  const oneHourAgo = new Date();
  oneHourAgo.setHours(oneHourAgo.getHours() - 1);
  res.cookie(cookieName, "Expired", { expires: oneHourAgo });
  res.clearCookie(cookieName);
};

const pushThroughCookie = (req, res, next) => {
  const cookie = req.cookies[cookieName];
  if (cookie && auth.validSession(cookie)) res.redirect("/private");
  else next();
};

const pullBackCookie = (req, res, next) => {
  const cookie = req.cookies[cookieName];
  if (cookie) {
    if (auth.validSession(cookie)) next();
    else {
      expireCookie(res);
      res.status(403).render("layouts/link", { title: "Forbidden" });
    }
  } else res.status(403).render("layouts/link", { title: "Forbidden" });
};

const getCookie = req => {
  return req.cookies[cookieName];
};

const setCookie = (res, sessionId) => {
  res.cookie(cookieName, sessionId);
};

module.exports = {
  expireCookie: expireCookie,
  pushThroughCookie: pushThroughCookie,
  pullBackCookie: pullBackCookie,
  setCookie: setCookie,
  getCookie: getCookie
};
