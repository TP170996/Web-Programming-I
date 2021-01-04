const albumsMethods = require('./albums');
const bandsMethods = require('./bands');

let constructorMethod = (app) => {
    app.use("/albums", albumsMethods);
    app.use("/bands", bandsMethods);
};

module.exports = {
    albums: require("./albums"),
    bands: require("./bands")
};