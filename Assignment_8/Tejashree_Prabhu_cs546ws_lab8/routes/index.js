const resultRoutes = require("./result");
const path = require("path");
const constructorMethod = (app) => {
    app.use("/result", resultRoutes);
    app.get("/", (req, res) => {
        res.sendFile(path.resolve("static/main.html"));
    });
};

module.exports = constructorMethod;