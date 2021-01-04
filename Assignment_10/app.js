const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const exphbs = require("express-handlebars");
const port = 3000;
const app = express();

app.use(express.static("public"));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./routes")(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}...`);
  if (process && process.send) process.send({ done: true });
});
