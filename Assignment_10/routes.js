const uuidv4 = require("uuid/v4");
const auth = require("./auth");
const cookies = require("./cookies");

module.exports = app => {
  app.get("/", cookies.pushThroughCookie, (req, res) => {
    res.render("layouts/home");
  });

  app.post("/login", (req, res) => {
    // if(user && auth.passwordsMatch(req.body.password, auth.getUserAtIndex(user).hashedPassword)) {
    const usn = req.body.username;
    const pwdSent = req.body.password;
    const pwdInDB = auth.getPassword(usn);
    if (pwdInDB && auth.passwordsMatch(pwdSent, pwdInDB)) {
      const sessionId = uuidv4();
      auth.setSession(usn, sessionId);
      cookies.setCookie(res, sessionId);
      res.redirect("/private");
    } else res.render("layouts/home", { error: true });
  });

  app.get("/private", cookies.pullBackCookie, (req, res) => {
    res.render("layouts/user", auth.getUserFromSession(cookies.getCookie(req)));
  });

  app.get("/logout", cookies.pullBackCookie, (req, res) => {
    cookies.expireCookie(res);
    res.render("layouts/link", { title: "Logged Out" });
  });
};
