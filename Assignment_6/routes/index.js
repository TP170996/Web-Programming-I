const recipesRoutes = require("./albums");
const commentsRoutes = require("./bands");

const constructorMethod = (app) => {
    // routing
    app.use("/albums", albumsRoutes);
    app.use("/bands", bandsRoutes);

    // error checking
    app.use("/$/", (req, res) => {
        res.status(200).send("This is the Root Page of http://localhost:3000");
    })

    app.use("*", (req, res) => {
        res.status(404).send("Error 404. Page Not Found");
    });
};

module.exports = constructorMethod;